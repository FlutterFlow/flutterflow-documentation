import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import matter from 'gray-matter';
import {ROOT, firstHeading, inferredDescription, listValue, readDoc, routeForDoc, walkMarkdownFiles} from './lib/docs-content.mjs';

const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'seo-agent.config.json'), 'utf8'));
const evalIntents = JSON.parse(fs.readFileSync(path.join(ROOT, 'evals', 'agent-intents.json'), 'utf8'));
const queriesByRoute = new Map();
for (const intent of evalIntents) {
  if (!queriesByRoute.has(intent.expectedRoute)) queriesByRoute.set(intent.expectedRoute, []);
  queriesByRoute.get(intent.expectedRoute).push(intent.intent);
}
const write = process.argv.includes('--write');
const fromHead = process.argv.includes('--from-head');
const docs = walkMarkdownFiles().map((file) => fromHead ? readFromHead(file) : readDoc(file));
const byDirectory = new Map();
for (const doc of docs) {
  const directory = path.dirname(doc.relativePath);
  if (!byDirectory.has(directory)) byDirectory.set(directory, []);
  byDirectory.get(directory).push(doc);
}
const duplicateTitles = duplicates(docs, (doc) => doc.frontMatter.title);
const duplicateDescriptions = duplicates(docs, (doc) => doc.frontMatter.description);
let changed = 0;

for (const doc of docs) {
  const fm = {...doc.frontMatter};
  let body = doc.body;
  const original = doc.raw;
  const originalFrontMatter = JSON.stringify(doc.frontMatter);
  const originalBody = body;
  if (config.slugOverrides?.[doc.relativePath]) fm.slug = config.slugOverrides[doc.relativePath];
  let title = String(fm.title || firstHeading(body) || humanize(path.basename(doc.file).replace(/\.mdx?$/, ''))).trim();

  if (config.titleOverrides[doc.route]) {
    title = config.titleOverrides[doc.route];
  } else if (duplicateTitles.has(String(fm.title || '').trim().toLowerCase())) {
    const qualifier = humanize(path.basename(path.dirname(doc.file)));
    const qualified = `${title}: ${qualifier}`;
    title = qualified.length <= 65 ? qualified : `${title}: ${shortHash(doc.route)}`;
  }
  fm.title = title;

  let description = String(fm.description || '').trim();
  const duplicatedDescription = duplicateDescriptions.has(description.toLowerCase());
  if (description.length < 50 || description.length > 180 || duplicatedDescription) {
    description = inferredDescription({...doc, frontMatter: {...fm, title}});
    if (duplicatedDescription) description = `Learn how ${title} is represented in FlutterFlow generated code and where it fits in an exported app.`;
    if (/^This guide uses example of the generated code/i.test(description)) {
      description = `Learn how ${title} is represented in FlutterFlow generated code and where it fits in an exported app.`;
    }
  }
  if (description.length < 50) description = `${description.replace(/[.!?]?$/, '')}. Learn how this works in FlutterFlow.`;
  if (description.length > 180) description = `${description.slice(0, 177).replace(/\s+\S*$/, '')}...`;
  fm.description = description.trim();

  fm.tags = controlledTags(doc.route);
  fm.keywords = fillTerms(listValue(fm.keywords), doc, title, 3);
  if (queriesByRoute.has(doc.route)) {
    fm.ai_queries = queriesByRoute.get(doc.route);
    fm.keywords = mergeUnique(fm.keywords, queriesByRoute.get(doc.route));
  }

  body = addEmbeddedMediaLabels(body, title);
  body = normalizeHeadingHierarchy(body);
  body = body
    .replaceAll('/tags/layout-elements', '/resources/ui/widgets#layout-elements')
    .replaceAll('/tags/base-elements', '/resources/ui/widgets#base-elements')
    .replaceAll('/tags/form-elements', '/resources/ui/widgets#form-elements');
  body = replaceStaleExternalLinks(body);
  body = body.replace(/^#{1,6}[ \t]*$/gm, '').replace(/[ \t]+$/gm, '');

  const internalLinks = [...body.matchAll(/(?<!!)\[[^\n]*?\]\((?!https?:|mailto:|tel:|#)([^)]+)\)/g)];
  if (internalLinks.length === 0 && doc.route !== '/') {
    const sibling = relatedDoc(doc);
    if (sibling) {
      const siblingTitle = String(sibling.frontMatter.title || firstHeading(sibling.body)).replace(/[\[\]]/g, '');
      body = `${body.trimEnd()}\n\n## Related documentation\n\nSee [${siblingTitle}](${sibling.route}) for a related FlutterFlow workflow.\n`;
    }
  }

  const semanticChange = JSON.stringify(fm) !== originalFrontMatter || body !== originalBody;
  const output = semanticChange ? matter.stringify(`${body.trim()}\n`, fm) : original;
  const current = fs.readFileSync(doc.file, 'utf8');
  if (output !== current) {
    changed += 1;
    if (write) fs.writeFileSync(doc.file, output);
  }
}

console.log(`${write ? 'Updated' : 'Would update'} ${changed}/${docs.length} documentation files.`);

function duplicates(items, selector) {
  const counts = new Map();
  for (const item of items) {
    const value = String(selector(item) || '').trim().toLowerCase();
    if (value) counts.set(value, (counts.get(value) || 0) + 1);
  }
  return new Set([...counts].filter(([, count]) => count > 1).map(([value]) => value));
}

function fillTerms(existing, doc, title, minimum) {
  const values = [...existing];
  if (values.length >= minimum) return values;
  const routeTerms = doc.route.split('/').filter(Boolean).reverse().map(humanize);
  const candidates = [title, ...routeTerms, 'FlutterFlow', `${title} guide`];
  for (const candidate of candidates) {
    if (!candidate || values.some((value) => value.toLowerCase() === candidate.toLowerCase())) continue;
    values.push(candidate);
    if (values.length >= minimum) break;
  }
  return values;
}

function mergeUnique(existing, additions) {
  const values = [...existing];
  for (const addition of additions) {
    if (!values.some((value) => value.toLowerCase() === addition.toLowerCase())) values.push(addition);
  }
  return values;
}

function controlledTags(route) {
  const match = Object.entries(config.tagTaxonomy)
    .filter(([prefix]) => prefix === '/' ? route === '/' : route === prefix || route.startsWith(`${prefix}/`))
    .sort(([left], [right]) => right.length - left.length)[0];
  const tags = match ? [...match[1]] : ['FlutterFlow', 'Documentation'];
  const secondary = secondaryProductTag(route);
  if (secondary && !tags.includes(secondary)) tags.push(secondary);
  return tags.slice(0, 3);
}

function secondaryProductTag(route) {
  const parts = route.split('/').filter(Boolean);
  if (parts[0] === 'integrations' && parts[1]) return productTag(parts[1]);
  if (parts[0] === 'troubleshooting' && parts[1]) return productTag(parts[1]);
  if (parts[0] === 'resources' && parts[1]) {
    const aliases = {'control-flow': 'Actions', 'data-representation': 'Data', ui: 'UI', projects: 'Projects'};
    return aliases[parts[1]] || humanize(parts[1]);
  }
  return null;
}

function productTag(value) {
  const aliases = new Map([
    ['ai', 'AI'], ['api', 'API'], ['github', 'GitHub'], ['google-cloud', 'Google Cloud'],
    ['firebase', 'Firebase'], ['supabase', 'Supabase'], ['ios', 'iOS'], ['sql', 'SQL'],
  ]);
  return aliases.get(value) || humanize(value);
}

function readFromHead(file) {
  const relativePath = path.relative(ROOT, file).split(path.sep).join('/');
  const raw = execFileSync('git', ['show', `HEAD:${relativePath}`], {cwd: ROOT, encoding: 'utf8'});
  const parsed = matter(raw);
  return {
    file,
    relativePath,
    raw,
    body: parsed.content,
    frontMatter: parsed.data,
    route: routeForDoc(relativePath, parsed.data),
  };
}

function addEmbeddedMediaLabels(body, title) {
  let updated = body.replace(/!\[\s*\]\(([^)]+)\)/g, (_match, source) => `![${altForSource(source, title)}](${source})`);
  updated = updated.replace(/<img\b[\s\S]*?>/gi, (tag) => {
    const source = tag.match(/\bsrc\s*=\s*(?:["']([^"']+)["']|\{require\(["']([^"']+)["']\)[^}]*\})/i)?.slice(1).find(Boolean) || '';
    const alt = altForSource(source, title);
    if (/\s+alt\s*=/i.test(tag)) {
      return tag.replace(/\s+alt\s*=\s*(?:["']\s*["']|\{\s*["']?\s*["']?\s*\})/i, ` alt="${alt}"`);
    }
    return tag.replace(/<img\b/i, `<img alt="${alt}"`);
  });
  updated = updated.replace(/<iframe\b[\s\S]*?>/gi, (tag) => {
    const label = `${title} interactive tutorial`;
    if (/\s+title\s*=\s*["']Sharing a Project with a User["']/i.test(tag)) {
      return tag.replace(/\s+title\s*=\s*["']Sharing a Project with a User["']/i, ` title="${label}"`);
    }
    if (/\s+title\s*=\s*["'][^"']+["']/i.test(tag)) return tag;
    if (/\s+title\s*=/i.test(tag)) return tag.replace(/\s+title\s*=\s*["']\s*["']/i, ` title="${label}"`);
    return tag.replace(/<iframe\b/i, `<iframe title="${label}"`);
  });
  return updated;
}

function normalizeHeadingHierarchy(body) {
  let h1Seen = false;
  return body.replace(/^#[ \t]+(.+)$/gm, (_line, heading) => {
    if (!h1Seen) {
      h1Seen = true;
      return `# ${heading.trim()}`;
    }
    return `## ${heading.trim()}`;
  });
}

function replaceStaleExternalLinks(body) {
  const replacements = new Map([
    ['https://community.flutterflow.io/home', 'https://community.flutterflow.io/'],
    ['https://developer.apple.com/design/human-interface-guidelines/patterns/accessing-private-data/#requesting-permission', 'https://developer.apple.com/design/human-interface-guidelines/privacy'],
    ['https://documentation.onesignal.com/docs/twilio-setup#step-2-twilio-account-setup', 'https://documentation.onesignal.com/docs/en/sms-setup'],
    ['https://en.wikipedia.org/wiki/RSA_(cryptosystem)', 'https://en.wikipedia.org/wiki/RSA_cryptosystem'],
    ['https://fireship.io/snippets/firestore-rules-recipes/', 'https://firebase.google.com/docs/firestore/security/rules-conditions'],
    ['https://flutterflow.io/flutterflow-marketplace-item-submission-guidelines', '/marketplace/creators-hub/submission-criteria'],
    ['https://github.com/flutter/packages/blob/main/packages/url_launcher/url_launcher_ios/ios/Resources/PrivacyInfo.xcprivacy', 'https://github.com/flutter/packages/tree/main/packages/url_launcher/url_launcher_ios'],
    ['https://github.com/fluttercommunity/plus_plugins/blob/main/packages/share_plus/share_plus/ios/PrivacyInfo.xcprivacy', 'https://github.com/fluttercommunity/plus_plugins/tree/main/packages/share_plus/share_plus'],
    ['https://help.rive.app/editor/fundamentals/shapes-and-paths', 'https://rive.app/docs/editor/fundamentals/shapes-and-paths-overview'],
    ['https://razorpay.com/docs/payments/payments/test-card-upi-details/#test-card-for-international-payments', 'https://razorpay.com/docs/payments/payment-gateway/quick-integration/integration-steps/'],
    ['https://rive.app/community/', 'https://rive.app/marketplace'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-ios?tab=download#configure-ios-development', 'https://docs.flutter.dev/platform-integration/ios/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-ios?tab=download#configure-your-target-ios-device', 'https://docs.flutter.dev/platform-integration/ios/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-ios#configure-your-target-ios-device', 'https://docs.flutter.dev/platform-integration/ios/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-ios#install-cocoapods', 'https://docs.flutter.dev/platform-integration/ios/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-ios', 'https://docs.flutter.dev/platform-integration/ios/setup'],
    ['https://docs.flutter.dev/get-started/install/windows/mobile?tab=virtual', 'https://docs.flutter.dev/platform-integration/android/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-android?tab=virtual#configure-android-development', 'https://docs.flutter.dev/platform-integration/android/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-android?tab=virtual#configure-your-target-android-device', 'https://docs.flutter.dev/platform-integration/android/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-android?tab=virtual', 'https://docs.flutter.dev/platform-integration/android/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-android#configure-your-target-android-device', 'https://docs.flutter.dev/platform-integration/android/setup'],
    ['https://docs.flutter.dev/get-started/install/macos/mobile-android', 'https://docs.flutter.dev/platform-integration/android/setup'],
    ['https://docs.flutter.dev/get-started/install/linux#android-setup', 'https://docs.flutter.dev/platform-integration/android/setup'],
    ['https://docs.flutter.dev/get-started/install/macos', 'https://docs.flutter.dev/install/quick'],
    ['https://docs.flutter.dev/get-started/install', 'https://docs.flutter.dev/install/quick'],
  ]);
  let updated = body.replace(
    /(https?:\/\/(?:[a-z0-9-]+\.)+[a-z0-9-]+)\.\s*\n\s*([a-z]{2,})(?=[/:])/gi,
    '$1.$2',
  );
  for (const [stale, current] of replacements) updated = updated.replaceAll(stale, current);
  updated = updated
    .replace('- [flutterflow-io-6f20.appspot.com](http://flutterflow-io-6f20.appspot.com/)', '- `flutterflow-io-6f20.appspot.com`')
    .replace(/^-[ \t]+\[Affinity Designer template\]\(https:\/\/cyrilmottier\.com\/2017\/07\/06\/adaptive-icon-template\/\)[ \t]*\n?/gm, '')
    .replace(/^-[ \t]+\[Figma template\]\(https:\/\/material\.uplabs\.com\/posts\/adaptive-icon-sticker-sheet\).*\n?/gm, '');
  return updated;
}

function altForSource(source, title) {
  const cleaned = decodeURIComponent(source.split(/[?#]/)[0] || '')
    .split('/')
    .at(-1)
    ?.replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b(?:img|image|screenshot|screen shot)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  const description = cleaned && !/^\d+$/.test(cleaned) ? humanize(cleaned) : title;
  return `${description} in FlutterFlow`;
}

function relatedDoc(doc) {
  const siblings = (byDirectory.get(path.dirname(doc.relativePath)) || []).filter((candidate) => candidate.file !== doc.file);
  if (siblings.length) return siblings.sort((a, b) => a.route.localeCompare(b.route))[0];
  const topLevel = doc.route.split('/').filter(Boolean)[0];
  return docs.find((candidate) => candidate.file !== doc.file && candidate.route.startsWith(`/${topLevel}/`));
}

function humanize(value) {
  return String(value)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .trim();
}

function shortHash(value) {
  let hash = 0;
  for (const character of value) hash = ((hash << 5) - hash + character.charCodeAt(0)) | 0;
  return Math.abs(hash).toString(36).slice(0, 5);
}
