---
keywords:
  - deployment
  - tips
  - codemagic
slug: /troubleshooting/deployment/codemagic-deployment-tips
title: CodeMagic Deployment Tips
description: >-
  Here are some tips to avoid Deployment issues: - Make sure you've followed all
  the steps for setting up deployment in your project.
tags:
  - FlutterFlow
  - Troubleshooting
  - Deployment
last_verified: 2026-09-02
---
# CodeMagic Deployment Tips

Here are some tips to avoid Deployment issues:

:::tip
- Make sure you've followed all the steps for **[setting up deployment](/deployment/deploy-for-environments/#mobile-deployment)** in your project.
- If you choose a deployment source from a GitHub Repository then please make sure that it's associated with FlutterFlow's GitHub integration.
- For Play Store deployment from GitHub, configure release signing through the supported deployment workflow. Never commit a keystore, service-account JSON, passwords, or a populated signing-properties file.
- Every uploaded store build needs an acceptable, monotonically increasing build number/version code. Preserve the existing app's application ID, signing lineage, and store record when taking over an existing listing.
:::
