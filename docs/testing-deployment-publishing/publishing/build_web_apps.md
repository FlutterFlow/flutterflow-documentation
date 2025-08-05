---
keywords: ['build', 'websites', 'apps']
slug: deployment/build-web-apps
title: Build Web Applications with FlutterFlow
---

# Build Web Applications with FlutterFlow

FlutterFlow can generate code that runs as a web application. However, there are important limitations and platform-specific issues to keep in mind.

:::info[Prerequisites]
- A FlutterFlow project with web as a selected platform.
- Familiarity with Flutter Web deployment using the Flutter CLI.
- Access to a third-party hosting service (e.g., Firebase Hosting, Vercel).
:::

**Web Support Status**

    :::note
    Flutter Web is not officially supported in FlutterFlow. However, the generated code can still be compiled and run as a web app using Flutter tools.
    :::

    While the platform can generate code suitable for web, some features may not behave consistently across all browsers or devices.

**Platform Limitations**
    - **Scrolling issues on iOS Safari.**
    - **Video playback limitations:** Native video and YouTube players may not function correctly on iOS web.

**Deployment Considerations**

    FlutterFlow does not currently offer direct deployment to the web from its interface. To publish your app:

        1. Export the Flutter project from FlutterFlow.
        2. Follow the **[Flutter Web Deployment Guide](https://flutter.dev/docs/deployment/web#deploying-to-the-web)** for instructions on building and deploying your app.

:::info[Additional Resources]
- **[Flutter Web Deployment Guide](https://flutter.dev/docs/deployment/web#deploying-to-the-web)**
:::

FlutterFlow supports generating web-compatible code, which can be deployed using Flutter tools. However, because Flutter Web is not officially supported, some features—especially on iOS—may be limited. Deployment must be handled manually using an external platform or CLI.
