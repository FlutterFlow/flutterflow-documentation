---
keywords: ['list', 'missing', 'state']
slug: /missing-data-types-in-app-state-variable-list
title: Missing Data Types in App State Variable List
---

# Missing Data Types in App State Variable List

When creating an app state variable in FlutterFlow, you should normally see a list of available data types. However, in some cases—especially in **older projects**—these options may not appear.

---

## Why This Happens

This issue is often caused by **Deep Linking not being enabled** in the project settings. Without Deep Linking, the data types list may fail to load in the App State configuration.

---

## How to Fix It

Follow these steps to enable Deep Linking:

1. Open your project in **FlutterFlow**
2. Go to **Project Settings**
3. Scroll to the **App Details** section
4. Open **Deep Linking & Route**
5. **Turn on the Deep Linking** option

---

![Enable Deep Linking](../assets/20250430121217509964.png)

Once Deep Linking is enabled, you should be able to see the full list of data types when creating or editing App State variables.

---

## Conclusion

This quick fix resolves a frustrating bug and can save you significant time during development. If enabling Deep Linking doesn't resolve the issue, please contact [FlutterFlow Support](mailto:support@flutterflow.io) for further assistance.

> ✅ Pro Tip: This issue most often affects **legacy or older projects**. For all new projects, Deep Linking is typically enabled by default.

Stay patient, keep building, and happy coding!
