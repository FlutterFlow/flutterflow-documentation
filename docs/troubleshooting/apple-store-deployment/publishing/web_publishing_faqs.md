---
keywords:
  - faqs
  - publishing
  - web
slug: /troubleshooting/apple-store-deployment-issues/web-publishing-faqs
title: Web Publishing FAQs
description: >-
  This article provides answers to frequently asked questions related to web
  publishing.
tags:
  - FlutterFlow
  - Troubleshooting
  - Apple Store Deployment Issues
last_verified: 2026-09-02
---
# Web Publishing FAQs

This article provides answers to frequently asked questions related to web publishing.

:::info[Prerequisites]
- Basic understanding of FlutterFlow and Flutter web projects.
- Access to FlutterFlow exported web project files.
- Familiarity with web hosting concepts.
:::

- **What certifications does FlutterFlow web hosting comply with?**

    Do not infer FlutterFlow's compliance scope solely from an underlying cloud provider's certifications. Review FlutterFlow's current [Security](/misc/security), contractual documentation, data-processing terms, region and feature scope, and any reports available for your plan. Google Cloud compliance material describes Google Cloud controls, not automatically every FlutterFlow workload or your app.

- **What are the system requirements for self-hosting a FlutterFlow web project?**

    FlutterFlow exports standard Flutter code. To compile and host Flutter web apps yourself, review the **[Flutter Web Deployment Guide](https://docs.flutter.dev/deployment/web)**.

    Compiled Flutter projects produce static files that can be hosted on most web servers without backend technology like Node.js or PHP.

- **Do I need backend technologies to host my FlutterFlow web project?**

    The compiled Flutter web frontend is static content, but your complete app can still depend on dynamic backends, authentication callbacks, APIs, Cloud Functions, CORS, rewrites, service workers, and secure headers. Host the static output on an HTTPS service configured for Flutter routes and those dependencies.

- **What should I consider when hosting on a custom domain?**

    You need to configure DNS settings correctly and ensure SSL certificates are in place for HTTPS. See domain connection guides for more information.

For further questions, contact FlutterFlow support via in-app messenger or email at [support@flutterflow.io](mailto:support@flutterflow.io)

## Related documentation

See [Custom Domain Connection Error](/troubleshooting/apple-store-deployment-issues/custom-domain-connection-error) for a related FlutterFlow workflow.
