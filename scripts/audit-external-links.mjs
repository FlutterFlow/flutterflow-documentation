import fs from 'node:fs';
import path from 'node:path';
import {ROOT, readDoc, walkMarkdownFiles} from './lib/docs-content.mjs';

const docs = walkMarkdownFiles().map(readDoc);
const occurrences = new Map();
const skippedSensitive = [];
for (const doc of docs) {
  const urls = [
    ...doc.body.matchAll(/(?<!!)\[[^\]]*\]\((https?:\/\/[^)\s]+)(?:\s+["'][^"']*["'])?\)/g),
    ...doc.body.matchAll(/\bhref\s*=\s*["'](https?:\/\/[^"']+)["']/gi),
  ].map((match) => match[1].replace(/[>,.;]+$/, ''));
  for (const rawUrl of urls) {
    let url;
    try {
      const parsed = new URL(rawUrl);
      parsed.hash = '';
      if (parsed.search || parsed.username || parsed.password) {
        skippedSensitive.push({url: `${parsed.origin}${parsed.pathname}`, file: doc.relativePath, reason: 'query parameters or credentials removed from automated network checks'});
        continue;
      }
      url = parsed.toString();
    } catch {
      continue;
    }
    if (!occurrences.has(url)) occurrences.set(url, []);
    occurrences.get(url).push(doc.relativePath);
  }
}

const urls = [...occurrences.keys()].sort();
const results = [];
let cursor = 0;
await Promise.all(Array.from({length: Math.min(12, urls.length)}, async () => {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    results.push(await checkUrl(url));
  }
}));
results.sort((a, b) => a.url.localeCompare(b.url));

const broken = results.filter((result) => result.status === 404 || result.status === 410);
const uncertain = results.filter((result) => result.error);
const report = {generatedAt: new Date().toISOString(), uniqueLinks: urls.length, skippedSensitive, broken: broken.length, uncertain: uncertain.length, results};
const reportDir = path.join(ROOT, 'reports');
fs.mkdirSync(reportDir, {recursive: true});
fs.writeFileSync(path.join(reportDir, 'external-links.json'), `${JSON.stringify(report, null, 2)}\n`);
fs.writeFileSync(path.join(reportDir, 'external-links.md'), markdownReport(report));

console.log(`External links: ${urls.length} unique, ${broken.length} confirmed broken, ${uncertain.length} uncertain.`);
console.log(`Skipped ${skippedSensitive.length} parameterized or credential-bearing links.`);
console.log('Report: reports/external-links.md');
if (broken.length) process.exitCode = 1;

async function checkUrl(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    let response = await fetch(url, {method: 'HEAD', redirect: 'follow', signal: controller.signal, headers: {'user-agent': 'FlutterFlow-Docs-Link-Audit/1.0'}});
    if ([404, 405, 410, 501].includes(response.status)) {
      response = await fetch(url, {method: 'GET', redirect: 'follow', signal: controller.signal, headers: {'user-agent': 'FlutterFlow-Docs-Link-Audit/1.0'}});
      await response.body?.cancel();
    }
    return {url, status: response.status, finalUrl: response.url, files: occurrences.get(url)};
  } catch (error) {
    return {url, status: null, error: error.name === 'AbortError' ? 'timeout' : String(error.message || error), files: occurrences.get(url)};
  } finally {
    clearTimeout(timeout);
  }
}

function markdownReport(report) {
  return [
    '# External-link audit', '',
    `- Unique external links: ${report.uniqueLinks}`,
    `- Confirmed 404/410 links: ${report.broken}`,
    `- Network or timeout results requiring manual review: ${report.uncertain}`, '',
    `- Parameterized or credential-bearing links skipped: ${report.skippedSensitive.length}`, '',
    '## Confirmed broken links', '',
    ...report.results.filter((result) => result.status === 404 || result.status === 410).map((result) => `- ${result.status} ${result.url} — ${result.files.join(', ')}`),
    '', '## Manual review', '',
    ...report.results.filter((result) => result.error).map((result) => `- ${result.error}: ${result.url} — ${result.files.join(', ')}`),
    ...report.skippedSensitive.map((result) => `- skipped: ${result.url} — ${result.file}`), '',
  ].join('\n');
}
