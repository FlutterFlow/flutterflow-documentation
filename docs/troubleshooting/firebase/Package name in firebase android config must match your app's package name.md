---
keywords: ['firebase', 'android', 'package']
slug: /firebase-config-package-name-mismatch
title: Fix Firebase Config Package Name Mismatch for Android
---

# Fix Firebase Config Package Name Mismatch for Android

This error occurs when the **package name defined in FlutterFlow** does not match the one used to generate the Firebase configuration files.

> 💡 Ensure the package name matches **exactly** in both FlutterFlow and Firebase — including capitalization and punctuation.

## Cause

This issue typically arises after changing the package name in your FlutterFlow project without updating the corresponding Firebase configuration.

## Resolution Steps

### 1. Open Firebase Settings in FlutterFlow

- In your FlutterFlow project, go to:
  - **Settings > Firebase**

![Firebase Settings](../assets/20250430121404176944.png)

### 2. Regenerate Config Files

- Click **Regenerate Config Files**
- Enter the updated package name
- Click **Generate File**

![Regenerate Config](../assets/20250430121404592193.png)

### 3. Re-Test Integration

- Download and include the updated `google-services.json` file if prompted
- Run or deploy your app again to verify the fix

---

By keeping your package name consistent between FlutterFlow and Firebase, you can avoid configuration errors and ensure proper app functionality.
