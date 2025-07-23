---
keywords: ['firebase', 'configuration', 'settings', 'cms', 'firestore']
slug: troubleshooting/firebase/fix-firebase-project-not-configured
title: Fix Firebase Project Not Configured Error
---

# Fix Firebase Project Not Configured Error

This guide explains how to resolve the **"Firebase project not configured"** error that may appear when using **Content Manager (CMS)** in FlutterFlow.

![](../assets/20250430121204990541.png)

This error typically occurs when the Firebase configuration is incomplete or the project has not been updated properly. As a result, FlutterFlow cannot access **Cloud Firestore**, and CMS features may stop working.

:::info[Prerequisites]
Ensure that:
- Firebase is already connected under **Settings > Firebase**.
- Your Firebase project includes **Firestore** and has the correct project ID.
:::

Follow these steps to refresh your Firebase connection and sync CMS:

    1. Open your FlutterFlow project.
    2. Go to **Settings > Firebase**.
    3. Make a minor, non-breaking change (e.g., toggle a field off and back on).
    4. Click **Save**.
    5. Return to **CMS** and try reloading the content.

    This forces a refresh of the Firebase configuration without affecting your project design.

If the issue persists after following the steps above, contact **[support@flutterflow.io](mailto:support@flutterflow.io)** for additional assistance.
