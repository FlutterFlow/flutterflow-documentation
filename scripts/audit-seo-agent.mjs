import fs from 'node:fs';
import path from 'node:path';
import {gzipSync} from 'node:zlib';
import {execFileSync} from 'node:child_process';
import {ROOT, firstHeading, listValue, normalizeRoute, plainText, readDoc, walkMarkdownFiles} from './lib/docs-content.mjs';

const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'seo-agent.config.json'), 'utf8'));
const builtAudit = process.argv.includes('--built');
const strictFreshness = process.argv.includes('--strict-freshness');
const docs = walkMarkdownFiles().map(readDoc);
const latestGitDates = gitDatesByFile();
const freshnessBaselinePath = path.join(ROOT, 'freshness-baseline.json');
const freshnessBaseline = fs.existsSync(freshnessBaselinePath)
  ? JSON.parse(fs.readFileSync(freshnessBaselinePath, 'utf8')).pages
  : {};
const findings = [];

auditRepositoryConfig();
for (const doc of docs) auditSourceDoc(doc);
auditDuplicates('title', docs.map((doc) => [doc, doc.frontMatter.title]));
auditDuplicates('description', docs.map((doc) => [doc, doc.frontMatter.description]));
auditDuplicates('route', docs.map((doc) => [doc, doc.route]));

if (builtAudit) auditBuiltArtifacts();

const metrics = buildMetrics();
const report = {generatedAt: new Date().toISOString(), documents: docs.length, builtAudit, metrics, findings};
const reportDir = path.join(ROOT, 'reports');
fs.mkdirSync(reportDir, {recursive: true});
fs.writeFileSync(path.join(reportDir, 'seo-agent-audit.json'), `${JSON.stringify(report, null, 2)}\n`);
fs.writeFileSync(path.join(reportDir, 'seo-agent-audit.md'), markdownReport(report));

printSummary(report);
const blocking = findings.filter((finding) => finding.severity === 'error');
const stale = findings.filter((finding) => finding.category === 'freshness');
if (blocking.length || (strictFreshness && stale.length)) process.exitCode = 1;

function auditSourceDoc(doc) {
  const {frontMatter: fm, body, relativePath, route} = doc;
  const title = String(fm.title || '').trim();
  const description = String(fm.description || '').trim();
  const tags = listValue(fm.tags);
  const keywords = listValue(fm.keywords);
  const metadataRules = config.metadata;

  const lineBrokenExternalUrls = [...body.matchAll(/https?:\/\/(?:[a-z0-9-]+\.)+[a-z0-9-]+\.\s*\n\s*[a-z]{2,}(?=[/:])/gi)];
  for (const match of lineBrokenExternalUrls) {
    add('error', 'content', 'line-broken-external-url', relativePath, `External URL contains a newline near character ${match.index}; keep the hostname on one line.`);
  }

  check(title, 'metadata', 'missing-title', relativePath, 'Add an explicit, unique front-matter title.');
  check(!title || title.length >= metadataRules.titleMinCharacters, 'metadata', 'short-title', relativePath, `Title must be at least ${metadataRules.titleMinCharacters} characters.`);
  check(!title || title.length <= metadataRules.titleMaxCharacters, 'metadata', 'long-title', relativePath, `Title must be no more than ${metadataRules.titleMaxCharacters} characters.`);
  check(description, 'metadata', 'missing-description', relativePath, 'Add an explicit, task-specific meta description.');
  check(!description || description.length >= metadataRules.descriptionMinCharacters, 'metadata', 'short-description', relativePath, `Description must be at least ${metadataRules.descriptionMinCharacters} characters.`);
  check(!description || description.length <= metadataRules.descriptionMaxCharacters, 'metadata', 'long-description', relativePath, `Description must be no more than ${metadataRules.descriptionMaxCharacters} characters.`);
  check(tags.length >= metadataRules.minimumTags, 'metadata', 'missing-tags', relativePath, `Add at least ${metadataRules.minimumTags} useful tags.`);
  check(keywords.length >= metadataRules.minimumKeywords, 'metadata', 'missing-keywords', relativePath, `Add at least ${metadataRules.minimumKeywords} query-oriented keywords.`);

  const emptyMarkdownAlt = [...body.matchAll(/!\[\s*\]\(([^)]+)\)/g)];
  const htmlImages = [...body.matchAll(/<img\b[\s\S]*?>/gi)];
  const missingHtmlAlt = htmlImages.filter((match) => !/\balt\s*=\s*(?:"[^"]+"|'[^']+'|\{[^}]+\})/i.test(match[0]));
  for (const match of [...emptyMarkdownAlt, ...missingHtmlAlt]) {
    add('error', 'accessibility', 'missing-image-alt', relativePath, `Image needs descriptive alt text near character ${match.index}.`);
  }
  const iframes = [...body.matchAll(/<iframe\b[\s\S]*?>/gi)];
  for (const match of iframes.filter((item) => !/\btitle\s*=\s*(?:"[^"]+"|'[^']+')/i.test(item[0]))) {
    add('error', 'accessibility', 'missing-iframe-title', relativePath, `Embedded tutorial needs an accessible title near character ${match.index}.`);
  }
  for (const match of iframes.filter((item) => /\btitle\s*=\s*["']Sharing a Project with a User["']/i.test(item[0]))) {
    add('error', 'accessibility', 'inaccurate-iframe-title', relativePath, `Embedded tutorial uses an unrelated placeholder title near character ${match.index}; describe the tutorial on this page.`);
  }

  const internalLinks = [...body.matchAll(/(?<!!)\[[^\n]*?\]\((?!https?:|mailto:|tel:|#)([^)]+)\)/g)];
  check(internalLinks.length > 0 || route === '/', 'content', 'no-contextual-internal-link', relativePath, 'Add at least one contextual link to a related FlutterFlow guide.');

  const visibleWords = plainText(body).split(/\s+/).filter(Boolean).length;
  check(visibleWords >= 50, 'content', 'thin-content', relativePath, 'Expand the page beyond 50 words or consolidate it into a stronger canonical page.');

  const reviewDate = fm.last_verified
    ? new Date(fm.last_verified)
    : freshnessBaseline[relativePath]
      ? new Date(`${freshnessBaseline[relativePath]}T00:00:00Z`)
      : latestGitDates.get(relativePath);
  const owner = ownerForRoute(route);
  check(Boolean(owner), 'freshness', 'missing-content-owner', relativePath, 'Assign this route to a freshness owner in seo-agent.config.json.');
  const volatile = config.freshness.volatilePrefixes.some((prefix) => route === prefix || route.startsWith(`${prefix}/`));
  const maxAge = volatile ? config.freshness.volatileMaximumAgeDays : config.freshness.defaultMaximumAgeDays;
  const ageDays = reviewDate && !Number.isNaN(reviewDate.valueOf()) ? Math.floor((Date.now() - reviewDate.valueOf()) / 86400000) : Infinity;
  if (ageDays > maxAge) {
    add('warning', 'freshness', 'stale-page', relativePath, `${owner || 'Unassigned owner'} must verify this ${volatile ? 'volatile' : 'standard'} page; last evidence is ${ageDays === Infinity ? 'unknown' : `${ageDays} days old`} (SLA ${maxAge} days).`);
  }

}

function auditRepositoryConfig() {
  const robots = fs.readFileSync(path.join(ROOT, 'static', 'robots.txt'), 'utf8');
  check(!/^Disallow:\s*\/troubleshooting\/?\s*$/im.test(robots), 'crawl', 'troubleshooting-blocked', 'static/robots.txt', 'Troubleshooting pages must remain crawlable.');
  check(robots.includes(`Sitemap: ${config.siteUrl}/sitemap.xml`), 'crawl', 'missing-sitemap-directive', 'static/robots.txt', 'Point crawlers to the canonical sitemap URL.');
}

function auditDuplicates(field, pairs) {
  const groups = new Map();
  for (const [doc, rawValue] of pairs) {
    const value = String(rawValue || '').trim().toLowerCase();
    if (!value) continue;
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(doc.relativePath);
  }
  for (const files of groups.values()) {
    if (files.length < 2) continue;
    for (const file of files) add('error', 'metadata', `duplicate-${field}`, file, `${field} is duplicated across: ${files.join(', ')}`);
  }
}

function auditBuiltArtifacts() {
  const buildDir = path.join(ROOT, 'build');
  const manifestPath = path.join(buildDir, 'agent-content-manifest.json');
  check(fs.existsSync(manifestPath), 'agent', 'missing-agent-manifest', 'build', 'Generate agent-content-manifest.json during postbuild.');
  if (!fs.existsSync(manifestPath)) return;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const expectedPages = docs.length + config.generatedIndexes.length;
  check(manifest.pageCount === expectedPages, 'agent', 'agent-page-coverage', 'build/agent-content-manifest.json', `Expected ${expectedPages} canonical pages, found ${manifest.pageCount}.`);

  const sitemap = fs.readFileSync(path.join(buildDir, 'sitemap.xml'), 'utf8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const sitemapLastmods = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1]);
  const expectedUrls = new Set(manifest.pages.map((page) => `${config.siteUrl}${page.route}`));
  check(sitemapUrls.length === manifest.pageCount, 'crawl', 'sitemap-coverage', 'build/sitemap.xml', `Expected ${manifest.pageCount} sitemap URLs, found ${sitemapUrls.length}.`);
  check(new Set(sitemapUrls).size === sitemapUrls.length, 'crawl', 'duplicate-sitemap-url', 'build/sitemap.xml', 'Every sitemap URL must be unique.');
  for (const expectedUrl of expectedUrls) check(sitemapUrls.includes(expectedUrl), 'crawl', 'missing-sitemap-url', 'build/sitemap.xml', `Missing canonical URL ${expectedUrl}.`);
  for (const sitemapUrl of sitemapUrls) check(expectedUrls.has(sitemapUrl), 'crawl', 'unexpected-sitemap-url', 'build/sitemap.xml', `Unexpected sitemap URL ${sitemapUrl}.`);
  check(sitemapLastmods.length === manifest.pageCount, 'crawl', 'sitemap-lastmod-coverage', 'build/sitemap.xml', `Every sitemap URL needs an evidence-based lastmod; found ${sitemapLastmods.length}/${manifest.pageCount}.`);
  const sitemapEntries = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<\/url>/g)]
    .map((match) => ({url: match[1], lastModified: match[2]}));
  check(sitemapEntries.length === manifest.pageCount, 'crawl', 'invalid-sitemap-entry', 'build/sitemap.xml', 'Every sitemap entry must contain one canonical URL and one lastmod.');
  for (const entry of sitemapEntries) {
    const page = manifest.pages.find((candidate) => `${config.siteUrl}${candidate.route}` === entry.url);
    check(/^\d{4}-\d{2}-\d{2}$/.test(entry.lastModified), 'crawl', 'invalid-sitemap-lastmod', 'build/sitemap.xml', `Invalid lastmod ${entry.lastModified} for ${entry.url}.`);
    check(page?.lastModified === entry.lastModified, 'crawl', 'mismatched-sitemap-lastmod', page?.sourcePath || 'build/sitemap.xml', `Sitemap lastmod for ${entry.url} must match its evidence date.`);
  }
  for (const url of sitemapUrls) {
    const route = new URL(url).pathname;
    check(!config.excludedRoutePrefixes.some((prefix) => route === prefix || route.startsWith(`${prefix}/`)), 'crawl', 'noncanonical-sitemap-url', 'build/sitemap.xml', `Remove generated route ${route} from the sitemap.`);
  }

  const llms = fs.readFileSync(path.join(buildDir, 'llms.txt'), 'utf8');
  const llmsFullPath = path.join(buildDir, 'llms-full.txt');
  check(fs.existsSync(llmsFullPath), 'agent', 'missing-llms-full', 'build', 'Generate llms-full.txt during postbuild.');
  const llmsFull = fs.existsSync(llmsFullPath) ? fs.readFileSync(llmsFullPath, 'utf8') : '';
  for (const prefix of config.excludedRoutePrefixes) {
    const excludedUrl = `${config.siteUrl}${prefix}`;
    check(!llms.includes(`${excludedUrl}/`) && !llms.includes(`${excludedUrl}.md`), 'agent', 'noncanonical-llms-route', 'build/llms.txt', `Remove ${prefix} navigation routes from llms.txt.`);
    check(!llmsFull.includes(`canonical_url: ${JSON.stringify(excludedUrl)}`), 'agent', 'noncanonical-llms-full-route', 'build/llms-full.txt', `Remove ${prefix} navigation routes from llms-full.txt.`);
  }
  for (const page of manifest.pages) {
    const markdownPath = path.join(buildDir, new URL(page.markdownUrl).pathname.replace(/^\//, ''));
    check(fs.existsSync(markdownPath), 'agent', 'missing-page-markdown', page.sourcePath || page.route, `Missing ${page.markdownUrl}.`);
    check(llms.includes(page.markdownUrl), 'agent', 'missing-llms-entry', page.sourcePath || page.route, 'Add the canonical page to llms.txt.');
    check(llmsFull.includes(`canonical_url: ${JSON.stringify(`${config.siteUrl}${page.route}`)}`), 'agent', 'missing-llms-full-entry', page.sourcePath || page.route, 'Add the canonical page to llms-full.txt.');
    if (fs.existsSync(markdownPath)) {
      const markdown = fs.readFileSync(markdownPath, 'utf8');
      check(markdown.includes(`canonical_url: ${JSON.stringify(`${config.siteUrl}${page.route}`)}`), 'agent', 'incorrect-page-markdown-canonical', page.sourcePath || page.route, 'Page Markdown must identify its exact canonical URL.');
      check(!page.sourcePath || markdown.includes(`source_file: ${JSON.stringify(page.sourcePath)}`), 'agent', 'missing-page-markdown-source', page.sourcePath || page.route, 'Page Markdown must identify its source file.');
    }
  }
  const topicContents = [];
  for (const topic of config.topicPacks) {
    const topicPath = path.join(buildDir, 'llms', `${topic.slug}.txt`);
    check(fs.existsSync(topicPath), 'agent', 'missing-topic-pack', topic.slug, 'Generate every configured topic pack.');
    if (fs.existsSync(topicPath)) {
      const topicContent = fs.readFileSync(topicPath, 'utf8');
      topicContents.push([topic.slug, topicContent]);
      const characters = topicContent.length;
      check(characters <= config.maximumTopicPackCharacters, 'agent', 'oversized-topic-pack', topic.slug, `Keep topic packs at or below ${config.maximumTopicPackCharacters} characters; found ${characters}.`);
    }
  }
  for (const page of manifest.pages) {
    const canonicalMarker = `canonical_url: ${JSON.stringify(`${config.siteUrl}${page.route}`)}`;
    check(topicContents.some(([, content]) => content.includes(canonicalMarker)), 'agent', 'page-missing-from-topic-packs', page.sourcePath || page.route, 'Assign every canonical page to at least one bounded topic pack.');
  }

  for (const page of manifest.pages.filter((candidate) => candidate.sourcePath)) {
    const htmlPath = page.route === '/' ? path.join(buildDir, 'index.html') : path.join(buildDir, page.route.slice(1), 'index.html');
    if (!fs.existsSync(htmlPath)) {
      add('error', 'crawl', 'missing-html-page', page.sourcePath, `No built HTML at ${htmlPath}.`);
      continue;
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    const canonicalUrl = `${config.siteUrl}${page.route}`;
    check(Buffer.byteLength(html) <= config.performance.maximumHtmlBytes, 'performance', 'oversized-html', page.sourcePath, `Built HTML exceeds ${config.performance.maximumHtmlBytes} bytes.`);
    check(!/<script\b[^>]*src="https:\/\/udify\.app\//i.test(html), 'performance', 'critical-third-party-chatbot', page.sourcePath, 'Load the external chatbot only after explicit user interaction.');
    for (const videoTag of html.match(/<video\b[^>]*>/gi) || []) {
      check(/\bcontrols(?:="")?/i.test(videoTag), 'performance', 'uncontrollable-instructional-video', page.sourcePath, 'Instructional videos must provide playback controls.');
      check(/\bmuted(?:="")?/i.test(videoTag), 'performance', 'unmuted-autoplay-video', page.sourcePath, 'Autoplaying instructional videos must be muted.');
      check(Boolean(attributeValue(videoTag, 'aria-label')), 'accessibility', 'unlabelled-instructional-video', page.sourcePath, 'Instructional videos need an accessible label.');
    }
    for (const source of [...html.matchAll(/\b(?:src|href)="([^"]+\.(?:gif|mp4|webm)(?:\?[^"#]*)?)"/gi)].map((match) => match[1])) {
      const mediaUrl = new URL(decodeHtml(source), config.siteUrl);
      if (mediaUrl.origin !== new URL(config.siteUrl).origin) continue;
      const mediaPath = path.join(buildDir, decodeURIComponent(mediaUrl.pathname).replace(/^\//, ''));
      if (fs.existsSync(mediaPath)) check(fs.statSync(mediaPath).size <= config.performance.maximumReferencedMediaBytes, 'performance', 'oversized-referenced-media', page.sourcePath, `${mediaUrl.pathname} exceeds ${config.performance.maximumReferencedMediaBytes} bytes.`);
    }
    const h1Count = (html.match(/<h1\b/g) || []).length;
    check(h1Count === 1, 'content', 'invalid-built-h1-count', page.sourcePath, `Expected one built H1, found ${h1Count}.`);
    check(tagAttribute(html, 'link', 'rel', 'canonical', 'href') === canonicalUrl, 'crawl', 'incorrect-canonical-link', page.sourcePath, `Built canonical link must be ${canonicalUrl}.`);
    check(tagAttribute(html, 'meta', 'name', 'description', 'content') === page.description, 'metadata', 'incorrect-built-description', page.sourcePath, 'Built meta description must match canonical page metadata.');
    check(tagAttribute(html, 'meta', 'property', 'og:url', 'content') === canonicalUrl, 'metadata', 'incorrect-open-graph-url', page.sourcePath, 'Open Graph URL must match the canonical URL.');
    check(Boolean(tagAttribute(html, 'meta', 'property', 'og:title', 'content')), 'metadata', 'missing-open-graph-title', page.sourcePath, 'Add an Open Graph title.');
    check(tagAttribute(html, 'meta', 'property', 'og:description', 'content') === page.description, 'metadata', 'incorrect-open-graph-description', page.sourcePath, 'Open Graph description must match canonical page metadata.');
    check(!/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html), 'crawl', 'canonical-page-noindex', page.sourcePath, 'Canonical documentation pages must remain indexable.');
    const jsonLdMatches = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    check(jsonLdMatches.length > 0, 'structured-data', 'missing-json-ld', page.sourcePath, 'Add TechArticle JSON-LD to every documentation page.');
    const articles = jsonLdMatches.flatMap((match) => {
      try { return [JSON.parse(decodeHtml(match[1]))]; } catch { return []; }
    }).filter((entry) => entry?.['@type'] === 'TechArticle');
    check(articles.length === 1, 'structured-data', 'invalid-tech-article-count', page.sourcePath, `Expected one valid TechArticle object, found ${articles.length}.`);
    if (articles[0]) {
      check(articles[0].url === canonicalUrl && articles[0].mainEntityOfPage === canonicalUrl, 'structured-data', 'incorrect-tech-article-url', page.sourcePath, 'TechArticle URLs must match the canonical page.');
      check(articles[0].headline === page.title && articles[0].description === page.description, 'structured-data', 'incorrect-tech-article-metadata', page.sourcePath, 'TechArticle headline and description must match canonical metadata.');
    }
  }

  for (const javascriptPath of walkBuiltFiles(path.join(buildDir, 'assets', 'js')).filter((file) => file.endsWith('.js'))) {
    const gzipBytes = gzipSync(fs.readFileSync(javascriptPath)).length;
    check(gzipBytes <= config.performance.maximumJavaScriptGzipBytes, 'performance', 'oversized-javascript-chunk', path.relative(ROOT, javascriptPath), `Gzipped JavaScript chunk is ${gzipBytes} bytes; budget is ${config.performance.maximumJavaScriptGzipBytes}.`);
  }
}

function walkBuiltFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walkBuiltFiles(absolute) : [absolute];
  });
}

function tagAttribute(html, tagName, selectorName, selectorValue, attributeName) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) || [];
  const tag = tags.find((candidate) => attributeValue(candidate, selectorName) === selectorValue);
  return tag ? decodeHtml(attributeValue(tag, attributeName)) : null;
}

function attributeValue(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1] ?? null;
}

function decodeHtml(value) {
  return String(value || '').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
}

function check(condition, category, code, file, message) {
  if (!condition) add('error', category, code, file, message);
}

function ownerForRoute(route) {
  return config.freshness.owners
    .filter(({prefix}) => prefix === '/' || route === prefix || route.startsWith(`${prefix}/`))
    .sort((left, right) => right.prefix.length - left.prefix.length)[0]?.owner;
}

function add(severity, category, code, file, message) {
  findings.push({severity, category, code, file, message});
}

function buildMetrics() {
  const definitions = [
    ['crawl', 'Crawl and indexation'],
    ['metadata', 'Metadata quality'],
    ['content', 'Content structure and internal linking'],
    ['accessibility', 'Image accessibility'],
    ['performance', 'Performance budgets'],
    ['freshness', 'Freshness governance'],
    ['agent', 'Agent discovery and corpus quality'],
    ['structured-data', 'Structured data'],
  ];
  return definitions.map(([category, name]) => {
    const errors = findings.filter((finding) => finding.category === category && finding.severity === 'error').length;
    const warnings = findings.filter((finding) => finding.category === category && finding.severity === 'warning').length;
    const score = category === 'freshness'
      ? Math.max(0, Math.round(100 * (1 - warnings / Math.max(docs.length, 1)) * 10) / 10)
      : Math.max(0, Math.round(100 * (1 - errors / Math.max(docs.length, 1)) * 10) / 10);
    return {category, name, score, grade: grade(score), errors, warnings};
  });
}

function grade(score) {
  if (score >= 98) return 'A+';
  if (score >= 93) return 'A';
  if (score >= 90) return 'A-';
  if (score >= 87) return 'B+';
  if (score >= 83) return 'B';
  if (score >= 80) return 'B-';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

function gitDatesByFile() {
  const dates = new Map();
  try {
    const log = execFileSync('git', ['log', '--format=@@%cs', '--name-only', '--', 'docs'], {cwd: ROOT, encoding: 'utf8'});
    let date = null;
    for (const line of log.split('\n')) {
      if (line.startsWith('@@')) date = new Date(`${line.slice(2)}T00:00:00Z`);
      else if (date && line.startsWith('docs/') && !dates.has(line)) dates.set(line, date);
    }
  } catch {
    // Missing git history is reported as unknown freshness, never silently treated as current.
  }
  return dates;
}

function markdownReport(report) {
  const lines = [
    '# SEO and agent-consumption audit',
    '',
    `Generated: ${report.generatedAt}`,
    '',
    '| Metric | Score | Grade | Errors | Warnings |',
    '| --- | ---: | :---: | ---: | ---: |',
    ...report.metrics.map((metric) => `| ${metric.name} | ${metric.score}% | ${metric.grade} | ${metric.errors} | ${metric.warnings} |`),
    '',
    '## Findings',
    '',
    ...report.findings.map((finding) => `- **${finding.severity.toUpperCase()} · ${finding.category} · ${finding.code}:** \`${finding.file}\` — ${finding.message}`),
    '',
  ];
  return lines.join('\n');
}

function printSummary(report) {
  console.log(`SEO/agent audit: ${report.documents} source documents`);
  for (const metric of report.metrics) {
    console.log(`${metric.grade.padEnd(2)} ${String(metric.score).padStart(5)}%  ${metric.name} (${metric.errors} errors, ${metric.warnings} warnings)`);
  }
  console.log(`Report: reports/seo-agent-audit.md`);
}
