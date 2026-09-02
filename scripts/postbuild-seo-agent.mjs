import fs from 'node:fs';
import path from 'node:path';
import {ROOT, DOCS_DIR, normalizeRoute, readDoc, walkMarkdownFiles, xmlEscape, yamlString} from './lib/docs-content.mjs';

const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'seo-agent.config.json'), 'utf8'));
const freshnessBaselinePath = path.join(ROOT, 'freshness-baseline.json');
const freshnessBaseline = fs.existsSync(freshnessBaselinePath)
  ? JSON.parse(fs.readFileSync(freshnessBaselinePath, 'utf8')).pages
  : {};
const buildDir = path.join(ROOT, 'build');
const metadataDir = path.join(ROOT, '.docusaurus', 'docusaurus-plugin-content-docs', 'default');
const topicDir = path.join(buildDir, 'llms');

if (!fs.existsSync(buildDir) || !fs.existsSync(metadataDir)) {
  throw new Error('Run the Docusaurus production build before generating SEO and agent artifacts.');
}

const metadata = fs.readdirSync(metadataDir)
  .filter((name) => name.startsWith('site-docs-') && name.endsWith('.json'))
  .map((name) => JSON.parse(fs.readFileSync(path.join(metadataDir, name), 'utf8')))
  .filter((doc) => !doc.draft && !doc.unlisted)
  .sort((a, b) => a.permalink.localeCompare(b.permalink));

const sourceDocs = new Map(walkMarkdownFiles().map((file) => {
  const doc = readDoc(file);
  return [doc.relativePath, doc];
}));

const pages = metadata.map((doc) => {
  const sourcePath = doc.source.replace(/^@site\//, '');
  const source = sourceDocs.get(sourcePath);
  const route = normalizeRoute(doc.permalink);
  return {
    route,
    title: doc.title,
    description: doc.description,
    sourcePath,
    source,
    keywords: source ? source.frontMatter.keywords || [] : [],
    answerQueries: source ? source.frontMatter.ai_queries || [] : [],
    lastModified: source?.frontMatter.last_verified
      ? isoDate(source.frontMatter.last_verified)
      : freshnessBaseline[sourcePath] || (doc.lastUpdatedAt ? new Date(doc.lastUpdatedAt).toISOString().slice(0, 10) : null),
  };
});

for (const generated of config.generatedIndexes) {
  const children = pages.filter((page) => page.route.startsWith(`${generated.route}/`));
  const lastModified = children.map((page) => page.lastModified).filter(Boolean).sort().at(-1) || null;
  pages.push({...generated, sourcePath: null, source: null, lastModified, generated: true});
}
pages.sort((a, b) => a.route.localeCompare(b.route));
for (const page of pages) {
  page.markdownUrl = `${config.siteUrl}${page.route === '/' ? '/index' : page.route}.md`;
}

fs.rmSync(topicDir, {recursive: true, force: true});
fs.mkdirSync(topicDir, {recursive: true});
removeNonContentMarkdown();

for (const page of pages) {
  const markdownPath = markdownPathForRoute(page.route);
  fs.mkdirSync(path.dirname(markdownPath), {recursive: true});
  let content = fs.existsSync(markdownPath) ? fs.readFileSync(markdownPath, 'utf8').trim() : '';
  if (!content && page.source) content = sourceToAgentMarkdown(page.source.body);
  if (!content && page.generated) content = generatedIndexMarkdown(page);
  const metadataBlock = [
    '---',
    `title: ${yamlString(page.title)}`,
    `description: ${yamlString(page.description)}`,
    `canonical_url: ${yamlString(`${config.siteUrl}${page.route}`)}`,
    page.lastModified ? `last_updated: ${page.lastModified}` : null,
    page.sourcePath ? `source_file: ${yamlString(page.sourcePath)}` : null,
    page.keywords?.length ? `keywords: ${JSON.stringify(page.keywords)}` : null,
    page.answerQueries?.length ? `answer_queries: ${JSON.stringify(page.answerQueries)}` : null,
    '---',
  ].filter(Boolean).join('\n');
  fs.writeFileSync(markdownPath, `${metadataBlock}\n\n${content}\n`);
  page.agentMarkdown = `${metadataBlock}\n\n${content}`;
}

const assigned = new Set();
for (const topic of config.topicPacks) {
  const topicPages = pages.filter((page) => matchesTopic(page.route, topic.prefixes, topic.exactRoutes));
  topic.pages = topicPages;
  topicPages.forEach((page) => assigned.add(page.route));
  const output = [
    `# ${topic.title}`,
    '',
    `> ${topic.description}`,
    '',
    ...topicPages.flatMap((page) => [page.agentMarkdown, '', '---', '']),
  ].join('\n').trimEnd();
  fs.writeFileSync(path.join(topicDir, `${topic.slug}.txt`), `${output}\n`);
}

const unassigned = pages.filter((page) => !assigned.has(page.route));
if (unassigned.length) {
  throw new Error(`Routes missing from topic packs: ${unassigned.map((page) => page.route).join(', ')}`);
}

const llmsIndex = [
  '# FlutterFlow Documentation',
  '',
  '> Official task-oriented documentation for building, testing, integrating, and deploying apps with FlutterFlow.',
  '',
  'Use the topic packs for bounded retrieval. Use the page-level Markdown URLs for the most precise and current context.',
  '',
  '## Agent topic packs',
  '',
  ...config.topicPacks.map((topic) => `- [${topic.title}](${config.siteUrl}/llms/${topic.slug}.txt): ${topic.description}`),
  '',
  ...groupPages(pages).flatMap(([group, groupPages]) => [
    `## ${group}`,
    '',
    ...groupPages.map((page) => `- [${page.title}](${page.markdownUrl}): ${page.description}`),
    '',
  ]),
].join('\n').trimEnd();
fs.writeFileSync(path.join(buildDir, 'llms.txt'), `${llmsIndex}\n`);

const fullCorpus = [
  '# FlutterFlow Documentation: full agent corpus',
  '',
  '> Canonical documentation only. Search, tag, archive, and other generated navigation pages are excluded.',
  '',
  ...pages.flatMap((page) => [page.agentMarkdown, '', '---', '']),
].join('\n').trimEnd();
fs.writeFileSync(path.join(buildDir, 'llms-full.txt'), `${fullCorpus}\n`);

writeSitemap(pages);
writeManifest(pages);

console.log(`[seo-agent] ${pages.length} canonical pages, ${config.topicPacks.length} topic packs, clean sitemap and LLM corpora generated.`);

function markdownPathForRoute(route) {
  return path.join(buildDir, `${route === '/' ? 'index' : route.slice(1)}.md`);
}

function isoDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) throw new Error(`Invalid last_verified date: ${value}`);
  return date.toISOString().slice(0, 10);
}

function removeNonContentMarkdown() {
  for (const prefix of config.excludedRoutePrefixes) {
    const relative = prefix.replace(/^\//, '');
    fs.rmSync(path.join(buildDir, `${relative}.md`), {force: true});
    removeMarkdownFiles(path.join(buildDir, relative));
  }
}

function removeMarkdownFiles(directory) {
  if (!fs.existsSync(directory)) return;
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) removeMarkdownFiles(absolute);
    else if (entry.isFile() && entry.name.endsWith('.md')) fs.rmSync(absolute);
  }
}

function sourceToAgentMarkdown(body) {
  return body
    .replace(/^import\s+.+;?\s*$/gm, '')
    .replace(/<InfoCards>[\s\S]*?<\/InfoCards>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function generatedIndexMarkdown(page) {
  const children = pages
    .filter((candidate) => candidate.route.startsWith(`${page.route}/`) && !candidate.generated)
    .map((candidate) => `- [${candidate.title}](${candidate.markdownUrl}): ${candidate.description}`);
  return `# ${page.title}\n\n${page.description}\n\n## Documentation\n\n${children.join('\n')}`;
}

function matchesTopic(route, prefixes = [], exactRoutes = []) {
  return exactRoutes.includes(route) || prefixes.some((prefix) => prefix === '/' ? route === '/' : route === prefix || route.startsWith(`${prefix}/`));
}

function groupPages(allPages) {
  const groups = new Map();
  for (const page of allPages) {
    const key = page.route === '/' ? 'Getting started' : titleCase(page.route.split('/')[1]);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(page);
  }
  return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
}

function titleCase(value) {
  return value.split('-').map((part) => part ? `${part[0].toUpperCase()}${part.slice(1)}` : '').join(' ');
}

function writeSitemap(allPages) {
  const urls = allPages.map((page) => [
    '  <url>',
    `    <loc>${xmlEscape(`${config.siteUrl}${page.route}`)}</loc>`,
    page.lastModified ? `    <lastmod>${page.lastModified}</lastmod>` : null,
    '  </url>',
  ].filter(Boolean).join('\n'));
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
}

function writeManifest(allPages) {
  const manifest = {
    generatedAt: new Date().toISOString(),
    siteUrl: config.siteUrl,
    pageCount: allPages.length,
    topicPackCount: config.topicPacks.length,
    pages: allPages.map(({route, title, description, sourcePath, lastModified, markdownUrl, keywords, answerQueries}) => ({
      route, title, description, sourcePath, lastModified, markdownUrl, keywords, answerQueries,
    })),
  };
  fs.writeFileSync(path.join(buildDir, 'agent-content-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
}
