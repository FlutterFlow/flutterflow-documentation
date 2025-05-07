---
keywords: ['long', 'mode', 'very']
author: Unknown
created_at: '1678101895'
slug: /test-mode-is-not-loading-or-is-very-slow-it-takes-a-long-time-to-load-the-app
title: Test mode is not loading or is very slow, it takes a long time to load the
  app
updated_at: '1678309039'
url: https://intercom.help/flutterflow/en/articles/7052737-test-mode-is-not-loading-or-is-very-slow-it-takes-a-long-time-to-load-the-app
---
# Test Mode is Not Loading or is Very Slow

If Test Mode is taking a long time to load (e.g., 5 minutes or more), use this guide to identify and resolve common causes.

---

## 1. Issue Overview

> **Problem:** Test Mode is slow or fails to load your app.
>
> **Background:**
> - Each new testing session compiles a fresh version of your app.
> - Compilation typically takes 2–3 minutes, but may be longer for large projects.
> - Build time depends on the number of pages, components, custom code, assets, fonts, and icons in your project.

---

## 2. Troubleshooting Steps

### 🌐 **Check Your Internet Connection**
- Ensure your connection is stable and strong. Poor connectivity can slow down loading.

### 🕒 **Check the Device Clock**
- Make sure your device's date and time are set correctly.
- An incorrect system clock can cause authentication and loading issues in Test Mode.

### 🧹 **Clear Your Browser's Cache**
- Browsers store temporary files that may slow down page loading.
- Clear your cache to help speed up the process.

### 🦊 **Try a Different Browser**
- If the issue persists, open Test Mode in another browser to rule out browser-specific problems.

### 🧩 **Disable Browser Extensions**
- Some extensions can conflict with web pages and slow down loading.
- Disable extensions and try again.

---

## 3. Additional Tips

- Large projects with many assets, custom code, or pages will take longer to compile.
- Consider removing unused assets, fonts, or code to speed up builds.
- If the problem continues, check [FlutterFlow's support article](https://intercom.help/flutterflow/en/articles/7052737-test-mode-is-not-loading-or-is-very-slow-it-takes-a-long-time-to-load-the-app) for more help.

---

> **Summary:**
> - Check your internet connection
> - Check the device clock
> - Clear browser cache
> - Try a different browser
> - Disable browser extensions
> - Optimize your project for faster builds

Following these steps should help resolve most issues with slow or non-loading Test Mode in FlutterFlow.

