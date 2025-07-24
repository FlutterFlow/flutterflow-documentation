---
keywords: ['firebase', 'android', 'package']
slug: troubleshooting/backend/fix-firebase-package-name-mismatch
title: Fix Firebase Config Package Name Mismatch
---

# Fix Firebase Config Package Name Mismatch

This error occurs when the package name defined in FlutterFlow does not match the one used in your Firebase Android configuration. This often happens after changing the app’s package name in FlutterFlow without updating the associated Firebase configuration.

:::tip
Ensure that the package name matches **exactly** between FlutterFlow and Firebase — including capitalization and punctuation.
:::

:::info[Prerequisites]
Your Firebase project must already be integrated with your FlutterFlow project.
:::

## Update Firebase Configuration Files

Follow these steps to resolve the mismatch:

1. Open your project in **FlutterFlow**.
2. Navigate to **Settings > Firebase**.

   ![](../assets/20250430121404176944.png)

3. Click the **Regenerate Config Files** button.
4. Enter the updated package name.
5. Click **Generate File** to create the new configuration.

   ![](../assets/20250430121404592193.png)

## Notes

:::warning
Using mismatched package names between FlutterFlow and Firebase will prevent proper Firebase integration, including services like authentication and storage.
:::

## Resources

- **[Firebase Project Setup Guide](https://firebase.google.com/docs/android/setup)**
