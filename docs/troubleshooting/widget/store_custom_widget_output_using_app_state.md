---
keywords:
  - custom
  - widgets
  - app state
  - output
slug: /troubleshooting/widget/store-custom-widget-output-using-app-state
title: Store Custom Widget Output Using App State
description: >-
  To use the output from a custom widget elsewhere in your project, you can
  store its value in an app state variable.
tags:
  - FlutterFlow
  - Troubleshooting
  - Widget
last_verified: 2026-09-02
---
# Store Custom Widget Output Using App State

To use the output from a custom widget elsewhere in your project, you can store its value in an app state variable. FlutterFlow does not directly support retrieving data from custom widgets, so this method provides an effective workaround.

:::info[Prerequisites]
- You have created a custom widget in your project.
- You are familiar with the **[App State management](../../resources/data-representation/app-state)** system in FlutterFlow.
:::

## Steps to Store Output from a Custom Widget

1. **Create an App State Variable**
   Go to **App State**, then create a new app state variable that will hold the value returned by your custom widget.

   ![Store Custom Widget Output Using App State in FlutterFlow](../assets/20250430121220879251.png)

2. **Update the App State Variable from the Custom Widget**
   In your custom widget code, use `FFAppState()` to set the value of the app state variable.

   ![Store Custom Widget Output Using App State in FlutterFlow](../assets/20250430121221066642.png)

   ```js
   FFAppState().update(() {
     FFAppState().localvalue = 'setvalue';
   });
   ```

   App state variables can be accessed anywhere in your FlutterFlow project, making them useful for sharing data between custom widgets and other parts of the app.

Use the narrowest state scope that needs the value, and avoid writing on every widget build because that can cause rebuild loops. Do not store passwords, access tokens, payment details, or sensitive personal data in App State; persisted client state is not a secret store. For event-like output, prefer a supported callback/action parameter when available.
