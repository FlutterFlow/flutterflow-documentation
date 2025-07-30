---
keywords: ['list', 'missing', 'state']
slug: /missing-data-types-in-app-state-variable-list
title: Missing Data Types in App State Variable List
---

# Missing Data Types in App State Variable List

When creating an **App State Variable** in FlutterFlow, you should see a list of available data types. However, in some cases—especially in older projects—these data types may not appear.

This issue is typically caused by the **Deep Linking** setting being turned off in your project. If Deep Linking is disabled, the data type selection list may not populate correctly.

Follow the steps below to enable Deep Linking and restore the missing data types:

    1. Open your FlutterFlow project.
    2. Go to **Settings > App Details**.
    3. Scroll to the **Deep Linking & Route** section.
    4. Enable the **Deep Linking** toggle.

    ![](../assets/20250430121217509964.png)

    After enabling Deep Linking, the list of data types should now be visible when adding or editing an App State Variable.

    :::note
    This fix is particularly effective for older projects where the setting may be disabled by default.
    :::