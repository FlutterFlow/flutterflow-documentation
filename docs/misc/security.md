---
title: Security
description: 'At FlutterFlow, we consider security to be our utmost priority.'
tags:
  - FlutterFlow
  - Policies & Support
keywords:
  - Security
  - Misc
  - FlutterFlow
last_verified: 2026-09-02
---
# Security

Use the [FlutterFlow Trust Center](https://trust.flutterflow.io/) for current security, compliance, privacy, and availability documentation. Certification scope and status can change, so an AI assistant or reviewer should not infer a current certification from an older documentation page.

## Protect your app and data

FlutterFlow provides development tools, but you remain responsible for your app's access control, backend rules, secret handling, dependencies, and platform configuration. In particular:

- Keep server credentials out of generated client code. Use supported server-side secret storage and [private API calls](../resources/control-flow/backend-logic/api/rest-api.md#private-api-calls) where appropriate.
- Configure and test Firebase, Supabase, API, storage, and database authorization rules for least privilege.
- Review exported dependencies and generated configuration before release.
- Do not include API keys, tokens, personal data, or proprietary project exports in public bug reports or AI prompts.

For FlutterFlow's handling of account and service data, read the current [Privacy Policy](https://flutterflow.io/privacy) and [Terms of Service](https://flutterflow.io/tos). For ownership questions, see [Application & Data Ownership](./application-data-ownership.md).

## Related documentation

See [Additional Resources To Get Help](/misc/additional-resources) for a related FlutterFlow workflow.
