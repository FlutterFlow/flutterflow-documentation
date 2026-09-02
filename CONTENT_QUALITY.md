# Documentation search and agent quality standard

This repository treats human search, web search, and AI-agent retrieval as one publishing system. A page is not complete merely because it renders: it must be discoverable, uniquely identifiable, current, accessible, and safe to use as cited answer context.

## A+ release gates

An A+ metric is at least 98%. The production build and `npm run audit:seo-agent:built` measure the following gates:

| Metric | A+ requirement |
| --- | --- |
| Crawl and indexation | Every canonical page is allowed by `robots.txt`, appears once in the sitemap, has an evidence-based `lastmod`, and no generated search, tag, or archive route appears in the sitemap. |
| Metadata | Every page has a unique title and description, 2–3 controlled tags, and at least three query-oriented keywords. Titles are at most 65 characters and descriptions are 50–180 characters. |
| Content structure | The built page has exactly one H1, at least 50 visible words, and at least one contextual internal link unless it is the site root. Broken links and anchors fail the Docusaurus build. |
| Accessibility | Every image has useful alt text and every embedded tutorial has a non-empty title. |
| Performance | No JavaScript chunk exceeds 250 KB gzip, no canonical HTML file exceeds 250 KB, referenced instructional media stays below 2 MB, and third-party chat loads only after interaction. |
| Freshness | At least 98% of pages are within their review SLA: 180 days for volatile material and 365 days for standard material. |
| Agent discovery | Every canonical page has page-level Markdown, appears in `llms.txt`, belongs to at least one bounded topic pack, and is present in the agent manifest. No topic pack exceeds 500,000 characters. |
| Structured data | Every built documentation page includes valid `TechArticle` JSON-LD with a canonical URL and publisher. |
| Retrieval quality | On the fixed intent set: recall@5 ≥98%, top-1 accuracy ≥90%, and canonical evidence coverage ≥98%. |
| Live answer quality | On a separately approved and recorded model run: answer correctness ≥95%, citation support ≥98%, and unsupported-claim rate <1%. This is not inferred from the static retrieval score. |

## Required front matter

Every page must include:

```yaml
---
slug: /canonical-route
title: Task-specific title
description: A unique 50–180 character summary that says what the reader can accomplish.
tags: [FlutterFlow, Controlled Product Area]
keywords: [FlutterFlow, user query phrase, feature name]
last_verified: 2026-09-01
---
```

Only add `last_verified` after checking the instructions against the current product. Metadata cleanup, link checking, or a successful build alone does not count as product verification.

## Page design for answer engines

A task guide should state the outcome in its opening paragraph and use this order when relevant:

1. What the feature does and when to use it.
2. Availability, plan, platform, and prerequisite constraints.
3. Numbered steps using current UI labels and navigation paths.
4. A verifiable expected result.
5. Common failure modes and safe recovery steps.
6. Related canonical guides.

Put critical facts in text. Images and videos supplement the procedure; they do not replace it. Use exact FlutterFlow UI labels in bold. Prefer one canonical page per intent and link aliases or broader overviews to it.

## Terminology that agents must distinguish

- **AI Agent** is the FlutterFlow desktop feature for using external coding agents to edit a FlutterFlow project.
- **AI Agents** is the runtime integration for adding AI-powered experiences to an app.
- **Codex CLI** is the terminal interface. **Codex in the ChatGPT desktop app** is the desktop surface. State which surface a procedure applies to.
- **Test Mode**, **Run Mode**, **Local Run**, and deployed builds are distinct environments. Do not use the names interchangeably.
- **Generated code** describes exported Flutter code. It is not the same as project configuration edited through the FlutterFlow CLI or MCP tools.

## Freshness workflow

Volatile sections include integrations, deployment, testing, CLI/agent tooling, accounts and billing, and troubleshooting. They must be verified every 180 days. Other pages must be verified every 365 days.

For each review:

1. Reproduce the task in the current product or obtain confirmation from the owning product team.
2. Verify plan, platform, region, and role prerequisites.
3. Confirm every UI label, navigation path, code sample, external link, and expected result.
4. Remove obsolete alternatives and redirect duplicate pages to the canonical guide.
5. Update `last_verified` to the review date and include public evidence in the pull request when appropriate. Keep private source revisions, implementation paths, excerpts, and review notes in an approved private system; never add them to this public repository or its Git history.
6. Run `npm run build` and `npm run audit:seo-agent:built`.

The audit uses `last_verified` when present. For pages included in the repository-wide SEO migration, it otherwise uses `freshness-baseline.json`, which preserves the last pre-migration content evidence date. New pages fall back to their most recent Git commit. This prevents a metadata-only migration from making old product instructions look newly verified. Stale pages remain visible as warnings until a real product review occurs.

## Agent artifacts

The build publishes:

- `/llms.txt`: canonical page inventory and bounded topic-pack index.
- `/llms-full.txt`: complete canonical corpus for consumers that explicitly want it.
- `/llms/<topic>.txt`: focused context packs kept below the configured context budget.
- `/<canonical-route>.md`: page-level Markdown with canonical URL, source file, and last-updated metadata.
- `/agent-content-manifest.json`: machine-readable inventory for validation and downstream ingestion.

Search, tag, blog, and other navigation-only routes are excluded. The postbuild generator reads Docusaurus's resolved metadata, so relative slugs and generated category indexes use the same canonical routes as the rendered site.

## Commands

```bash
npm run remediate:docs       # Reapply deterministic metadata/accessibility normalization from HEAD
npm run typecheck            # Validate theme and component TypeScript
npm run build                # Build and generate sitemap/agent artifacts
npm run audit:seo-agent      # Source-only scorecard
npm run audit:seo-agent:built
npm run audit:external-links # Network check; review timeouts manually
npm run eval:agent-retrieval
```

Do not run the remediation command after making uncommitted manual documentation edits: it intentionally rebuilds documentation files from `HEAD` so the large migration is reproducible.
