import fs from 'node:fs';
import path from 'node:path';
import {ROOT, firstHeading, listValue, plainText, readDoc, walkMarkdownFiles} from './lib/docs-content.mjs';

const STOP_WORDS = new Set(['the', 'and', 'for', 'with', 'from', 'into', 'inside', 'this', 'that', 'what', 'are', 'steps', 'help', 'guide', 'how', 'can', 'you', 'use', 'using', 'app', 'flutterflow']);
const intents = JSON.parse(fs.readFileSync(path.join(ROOT, 'evals', 'agent-intents.json'), 'utf8'));
const docs = walkMarkdownFiles().map(readDoc).map((doc) => ({
  ...doc,
  title: String(doc.frontMatter.title || firstHeading(doc.body)),
  description: String(doc.frontMatter.description || ''),
  keywords: listValue(doc.frontMatter.keywords).join(' '),
  headings: [...doc.body.matchAll(/^#{1,6}[ \t]+(.+)$/gm)].map((match) => match[1]).join(' '),
  text: plainText(doc.body),
}));
const variants = intents.flatMap((intent) => queryVariants(intent).map((query, variant) => ({...intent, query, variant})));
const results = variants.map(evaluate);
const top1 = ratio(results.filter((result) => result.rank === 1).length, results.length);
const recall5 = ratio(results.filter((result) => result.rank > 0 && result.rank <= 5).length, results.length);
const evidenceSupport = ratio(results.filter((result) => result.evidenceSupported).length, results.length);
const report = {
  generatedAt: new Date().toISOString(),
  baseIntents: intents.length,
  queries: results.length,
  metrics: {top1, recallAt5: recall5, evidenceSupport},
  thresholds: {top1: 0.9, recallAt5: 0.98, evidenceSupport: 0.98},
  results,
  failures: results.filter((result) => result.rank !== 1 || !result.evidenceSupported),
};

const reportDir = path.join(ROOT, 'reports');
fs.mkdirSync(reportDir, {recursive: true});
fs.writeFileSync(path.join(reportDir, 'agent-retrieval-eval.json'), `${JSON.stringify(report, null, 2)}\n`);
fs.writeFileSync(path.join(reportDir, 'agent-retrieval-eval.md'), markdownReport(report));

console.log(`Agent retrieval eval: ${report.baseIntents} intents, ${report.queries} fixed query variants`);
console.log(`top-1 ${(100 * top1).toFixed(1)}% (target 90%)`);
console.log(`recall@5 ${(100 * recall5).toFixed(1)}% (target 98%)`);
console.log(`evidence support ${(100 * evidenceSupport).toFixed(1)}% (target 98%)`);
console.log('Report: reports/agent-retrieval-eval.md');
if (top1 < 0.9 || recall5 < 0.98 || evidenceSupport < 0.98) process.exitCode = 1;

function evaluate(test) {
  const ranked = docs
    .map((doc) => ({route: doc.route, score: score(test.query, doc)}))
    .sort((a, b) => b.score - a.score || a.route.localeCompare(b.route));
  const rank = ranked.findIndex((candidate) => candidate.route === test.expectedRoute) + 1;
  const expected = docs.find((doc) => doc.route === test.expectedRoute);
  const evidence = `${expected?.title || ''} ${expected?.description || ''} ${expected?.text || ''}`.toLowerCase();
  const missingEvidence = test.mustInclude.filter((term) => !evidence.includes(term.toLowerCase()));
  return {id: test.id, variant: test.variant, query: test.query, expectedRoute: test.expectedRoute, rank, topRoutes: ranked.slice(0, 5), evidenceSupported: missingEvidence.length === 0, missingEvidence};
}

function score(query, doc) {
  const queryTokens = tokens(query);
  const fields = [
    [doc.title, 12],
    [doc.keywords, 18],
    [doc.description, 5],
    [doc.headings, 3],
    [doc.text, 1],
    [doc.route, 2],
  ];
  let total = 0;
  for (const [value, weight] of fields) {
    const fieldTokens = new Set(tokens(value));
    for (const token of queryTokens) if (fieldTokens.has(token)) total += weight;
  }
  const normalizedQuery = normalize(query);
  const normalizedTitle = normalize(doc.title);
  if (normalizedQuery.includes(normalizedTitle) || normalizedTitle.includes(normalizedQuery)) total += 40;
  for (const phrase of bigrams(queryTokens)) if (normalize(`${doc.title} ${doc.description} ${doc.headings}`).includes(phrase)) total += 4;
  return total;
}

function queryVariants(intent) {
  const phrase = intent.intent.replace(/[?.!]$/, '');
  return [
    phrase,
    `How do I ${phrase} in FlutterFlow?`,
    `FlutterFlow guide: ${phrase}`,
    `Can you guide me to ${phrase}?`,
    `What are the steps to ${phrase}?`,
    `Help me ${phrase} in my app.`,
  ];
}

function tokens(value) {
  const aliases = new Map([
    ['signin', 'authentication'], ['login', 'authentication'], ['auth', 'authentication'],
    ['publish', 'deployment'], ['publishing', 'deployment'], ['deploy', 'deployment'],
    ['chatbot', 'chat'], ['db', 'database'], ['rest', 'api'], ['responsive', 'responsiveness'],
  ]);
  return normalize(value).split(' ').filter((token) => token.length > 2 && !STOP_WORDS.has(token)).map((token) => aliases.get(token) || token);
}

function normalize(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function bigrams(values) {
  return values.slice(1).map((value, index) => `${values[index]} ${value}`);
}

function ratio(numerator, denominator) {
  return denominator ? Math.round((numerator / denominator) * 10000) / 10000 : 0;
}

function markdownReport(report) {
  return [
    '# Agent retrieval evaluation', '',
    `- Base intents: ${report.baseIntents}`,
    `- Fixed query variants: ${report.queries}`,
    `- Top-1 accuracy: ${(100 * report.metrics.top1).toFixed(1)}%`,
    `- Recall@5: ${(100 * report.metrics.recallAt5).toFixed(1)}%`,
    `- Canonical evidence support: ${(100 * report.metrics.evidenceSupport).toFixed(1)}%`, '',
    '## Failures', '',
    ...(report.failures.length ? report.failures.map((failure) => `- \`${failure.id}.${failure.variant}\`: expected \`${failure.expectedRoute}\`, rank ${failure.rank || 'not found'}; top result \`${failure.topRoutes[0]?.route || 'none'}\`; missing evidence: ${failure.missingEvidence.join(', ') || 'none'}`) : ['None.']), '',
  ].join('\n');
}
