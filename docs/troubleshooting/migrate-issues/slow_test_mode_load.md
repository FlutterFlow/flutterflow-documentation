---
keywords: ['test mode', 'slow load', 'run mode']
slug: /slow-test-mode-load
title: Slow Loading in Test Mode
---

# Slow Loading in Test Mode

If Test Mode takes several minutes to load or fails entirely, the issue may stem from your browser, network, or project configuration. This guide walks you through the most common causes and how to resolve them.

:::info[Prerequisites]
- You are using FlutterFlow's Test Mode feature.
- You have already deployed or previewed a version of your app.
:::

Below are the common causes and fixes:

- **Check Your Internet Connection**

    A weak or unstable connection may delay the loading of compiled apps. Make sure you have a stable network before launching Test Mode.

- **Sync Your System Clock**

    Ensure your device’s time and date settings are accurate. An incorrect clock can cause authentication issues and impact performance.

- **Clear Browser Cache**

    Browsers store temporary files that may interfere with page loading. Clearing your cache can resolve stale resource conflicts and improve speed.

- **Try a Different Browser**

    Some browsers may conflict with specific web assets or settings. If one browser is slow, switch to another (e.g., from Chrome to Firefox).

- **Disable Browser Extensions**

    Extensions like ad blockers or privacy tools can interfere with FlutterFlow’s platform. Temporarily disable them to check for improvement.

:::tip[Optimize Your Project]
Projects with many pages, assets, or custom code can take longer to compile.
- Remove unused images, fonts, or icons.
- Consolidate or simplify custom code.
- Limit the number of pages in a single testing session.
:::

:::info[Additional Resources]
If the issue persists after following the steps above, check the
**[official support](https://intercom.help/flutterflow/en/articles/7052737-test-mode-is-not-loading-or-is-very-slow-it-takes-a-long-time-to-load-the-app)**  article. 
:::

Following these steps should resolve most Test Mode performance issues and reduce load times for future previews.
