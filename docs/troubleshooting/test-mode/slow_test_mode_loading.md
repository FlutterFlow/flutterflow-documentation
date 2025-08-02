---
keywords: ['test mode', 'slow load', 'run mode', 'compile error', 'null exception']
slug: /troubleshooting/test-mode/test-mode-not-loading
title: Test Mode Not Loading or Showing Red Screen
---

# Test Mode Not Loading or Showing Red Screen

If **Test Mode** in FlutterFlow is taking too long to load, shows a red screen, or fails completely, the cause is usually tied to network issues, browser problems, unsupported plugins, or bugs in your project. This guide outlines how to diagnose and resolve these issues.

:::info[Prerequisites]
- You're using FlutterFlow's Test Mode to preview your app.
- You've already deployed or compiled a version of your project.
:::

---

**Common Causes and Fixes:**

1. **Unstable Internet Connection**

  Ensure your device is connected to a reliable network. A weak or fluctuating connection can prevent Test Mode from loading assets or compiling the app.

2. **System Clock Mismatch**

  Your device’s date and time must be accurate. An incorrect system clock can interfere with authentication and secure connections.

3. **Caching Issues**

  - Clear your browser cache and cookies.
  - Alternatively, try a different browser (e.g., Firefox instead of Chrome).

4. **Browser Extensions**

  Disable ad blockers, privacy plugins, and other browser extensions that might interfere with JavaScript execution.

**Advanced Debugging:**

5. **Infinite Loading**

  This can be caused by:

    - A **service outage**—try running Test Mode on a different project. If multiple projects fail, contact [FlutterFlow Support](mailto:support@flutterflow.io).
    - **Unsupported custom code** in `main.dart` or elsewhere. Check for compatibility on [pub.dev](https://pub.dev).

    **How to Debug:**

    - Open the **browser console**:  
      - macOS: `Option + ⌘ + J`  
      - Windows/Linux: `Shift + CTRL + J`
    - Look for errors related to plugins or methods not supported on the web.

    If needed, **download your code** and run it locally using VS Code to pinpoint the issue.

6. **Red Screen: Null Pointer Exceptions**

  Occurs when your UI tries to render a `null` value, typically from:

    - An API response that returns `null`
    - Missing page parameters
    - Unhandled `null` values in custom code or functions

  **Solution:**

    - Use console logs to identify the faulty page.
    - For precise debugging, download the code and run it locally in VS Code.
    - Enable **"Break on uncaught exceptions"** in the debugger to trace the exact line.

7. **Red Screen: Type Exceptions**

  Test Mode may show a red screen if:

    - A widget is assigned the wrong data type (e.g., string instead of integer).
    - An API or custom function returns a type mismatch.

  :::note
  These errors may only show locally, not in web test mode, due to Dart’s stricter type system.
  :::

8. **Build Fails**

  If Test Mode won’t compile, causes may include:

    - Silent bugs or logic errors in your project
    - Incompatible third-party packages
    - Code generation failure (contact support)

  Check your widgets for:
    - Wrong data types
    - Incorrect bindings
    - Plugins unsupported on the web

9. **Blank Pages on Navigation**

  Sometimes Test Mode compiles successfully, but certain pages remain blank.

  **Likely causes:**

    - **Flex layout issues** (example, Rows/Columns with misconfigured constraints)
    - **RenderBox overflow errors**

  **Solution:**

    - Download and run the code locally.
    - Use the debugger to trace the page layout that fails to render.

**Final Checks**

  - Confirm that you're logged into FlutterFlow in the same browser as Test Mode.
  - Double-check any custom code or packages.
  - Try building the project using the **Run Mode** to isolate Test Mode-specific issues.
  - Always read the **Test Mode troubleshooting notes** in the upper left corner of the Test Mode window.

Following these steps should help you resolve most issues related to slow loading, red screens, or failed Test Mode runs in FlutterFlow.
