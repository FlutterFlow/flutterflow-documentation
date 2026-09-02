---
slug: /integrations/firebase/performance-monitoring
title: Performance Monitoring
description: >-
  Learn how to integrate Firebase Performance Monitoring in your FlutterFlow
  app.
tags:
  - FlutterFlow
  - Integrations
  - Firebase
sidebar_position: 4
keywords:
  - FlutterFlow
  - Firebase
  - Performance Monitoring
last_verified: 2026-09-02
---
# Performance Monitoring

[Firebase Performance Monitoring](https://firebase.google.com/docs/perf-mon) is a tool that *automatically* collects performance data from your app and provides insights through the Firebase console. It can monitor both network requests and specific parts of your code.

Enabling performance monitoring is beneficial for:

- **Identify Bottlenecks**: Discover where your app's performance is lagging.
- **Improve User Experience**: Slow or unresponsive apps lead to a poor user experience.
- **Data-Driven Decisions**: Make optimization decisions based on real performance data.
- **Monitor Network Calls**: See how long network requests take, helping identify slow APIs or network issues.

After you [connect the FlutterFlow project to Firebase](connect-to-firebase-setup.md), navigate to **Settings and Integrations > Project Setup > Firebase**, open **Performance Monitoring**, and turn on **Enable Performance Monitoring**. Regenerate Firebase configuration files if FlutterFlow prompts you, then rebuild the app.

## Verify data collection

Run a non-production build on each supported platform, exercise startup and several HTTP requests, and check the **Performance** dashboard in the Firebase console. Data may take a few minutes to appear. Firebase automatically records lifecycle and HTTP/S network traces; individual Flutter screen-rendering traces are not automatically available because Flutter renders through one native view controller.

Use custom code traces when you need to measure a specific workflow such as loading images or querying a database. Start and stop every trace reliably, and use bounded, low-cardinality metric or attribute values.

:::warning[Privacy and consent]
Performance Monitoring transmits performance and app/device attributes to Firebase. Review the [data Firebase collects](https://firebase.google.com/docs/perf-mon/data-collection), update your privacy disclosures and consent flow where required, and follow applicable laws and store policies. Do not put names, email addresses, user IDs, tokens, full query strings, or other personal or secret data in trace names, metric names, attributes, or URLs.
:::

For custom initialization or consent-controlled collection in exported code, follow Firebase's [collection-control guidance](https://firebase.google.com/docs/perf-mon/disable-sdk) and test that both automatic and custom collection behave as intended.

## Related documentation

See [Firebase's Flutter setup and validation guide](https://firebase.google.com/docs/perf-mon/flutter/get-started) for platform behavior and troubleshooting details.
