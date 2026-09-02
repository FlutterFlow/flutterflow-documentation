import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const moduleDirectory = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(moduleDirectory, '..', '..');
export const DOCS_DIR = path.join(ROOT, 'docs');

export function walkMarkdownFiles(directory = DOCS_DIR) {
  const files = [];
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkMarkdownFiles(absolute));
    if (entry.isFile() && /\.mdx?$/.test(entry.name)) files.push(absolute);
  }
  return files.sort();
}

export function readDoc(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);
  const relativePath = path.relative(ROOT, file).split(path.sep).join('/');
  return {
    file,
    relativePath,
    raw,
    body: parsed.content,
    frontMatter: parsed.data,
    route: routeForDoc(relativePath, parsed.data),
  };
}

export function routeForDoc(relativePath, frontMatter) {
  if (frontMatter.slug) {
    const slug = String(frontMatter.slug);
    if (slug.startsWith('/')) return normalizeRoute(slug);
    const sourceDirectory = path.posix.dirname(relativePath.replace(/^docs\//, ''));
    return normalizeRoute(path.posix.join(sourceDirectory === '.' ? '' : sourceDirectory, slug));
  }
  let route = relativePath.replace(/^docs\//, '').replace(/\.mdx?$/, '');
  route = route.replace(/\/index$/, '');
  return normalizeRoute(route);
}

export function normalizeRoute(route) {
  if (route === '/' || route === '') return '/';
  return `/${route.replace(/^\/+|\/+$/g, '')}`;
}

export function listValue(value) {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean);
  if (typeof value === 'string') return value.split(',').map((item) => item.trim()).filter(Boolean);
  return [];
}

export function firstHeading(body) {
  return body.match(/^#[ \t]+(.+)$/m)?.[1]?.replace(/[*_`]/g, '').trim() || '';
}

export function plainText(markdown) {
  return markdown
    .replace(/^import\s+.+$/gm, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^:::.+$/gm, '')
    .replace(/[>*_~|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function inferredDescription(doc) {
  const text = plainText(doc.body.replace(/^#[ \t]+.+$/m, ''));
  if (!text) return `Learn how to use ${doc.frontMatter.title || firstHeading(doc.body) || 'this feature'} in FlutterFlow.`;
  const firstSentence = text.match(/^(.{50,220}?[.!?])(?:\s|$)/)?.[1];
  if (firstSentence) return firstSentence.length > 180 ? `${firstSentence.slice(0, 177).trim()}...` : firstSentence;
  const title = doc.frontMatter.title || firstHeading(doc.body) || 'this feature';
  if (doc.route.startsWith('/troubleshooting')) return `Learn how to diagnose and resolve ${title} in FlutterFlow with symptom, cause, and recovery guidance.`;
  if (doc.route.startsWith('/accounts-billing')) return `Find FlutterFlow guidance for ${title}, including requirements, available options, and related account workflows.`;
  return `Learn about ${title} in FlutterFlow, including the relevant setup, workflow, constraints, and verification steps.`;
}

export function xmlEscape(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function yamlString(value) {
  return JSON.stringify(String(value));
}
