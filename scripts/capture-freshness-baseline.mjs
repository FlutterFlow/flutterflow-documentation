import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {ROOT, walkMarkdownFiles} from './lib/docs-content.mjs';

const revision = execFileSync('git', ['rev-parse', 'HEAD'], {cwd: ROOT, encoding: 'utf8'}).trim();
const log = execFileSync('git', ['log', revision, '--format=@@%cs', '--name-only', '--', 'docs'], {cwd: ROOT, encoding: 'utf8'});
const dates = new Map();
let date = null;
for (const line of log.split('\n')) {
  if (line.startsWith('@@')) date = line.slice(2);
  else if (date && line.startsWith('docs/') && !dates.has(line)) dates.set(line, date);
}

const pages = {};
for (const file of walkMarkdownFiles()) {
  const relative = path.relative(ROOT, file).split(path.sep).join('/');
  pages[relative] = dates.get(relative) || null;
}

const baseline = {
  capturedAt: new Date().toISOString(),
  sourceRevision: revision,
  purpose: 'Preserves pre-migration editorial evidence dates. Update a page with last_verified only after a real product review.',
  pages,
};
fs.writeFileSync(path.join(ROOT, 'freshness-baseline.json'), `${JSON.stringify(baseline, null, 2)}\n`);
console.log(`Captured freshness evidence for ${Object.keys(pages).length} pages at ${revision}.`);
