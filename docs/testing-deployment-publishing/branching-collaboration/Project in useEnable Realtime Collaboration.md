---
keywords: ['firebase', 'android', 'package']
slug: /firebase-config-package-name-mismatch
title: Fix Firebase Config Package Name Mismatch for Android
---

# Fix Firebase Config Package Name Mismatch for Android

This error occurs when the **package name in your Firebase configuration file does not match** the package name defined in your FlutterFlow project.

> 💡 This is a common issue when the package name is changed in FlutterFlow but the Firebase config files are not updated accordingly.

## Cause

Firebase uses the **package name** to identify your Android app. If there is a mismatch between the package name in your FlutterFlow project and the one used to generate the Firebase config (`google-services.json`), Firebase integration will fail.

## Resolution Steps

### 1. Open Firebase Settings in FlutterFlow

- In your FlutterFlow project, navigate to:
  - **Settings > Firebase**

> ![Firebase Settings](../assets/20250430121404176944.png)

### 2. Regenerate Firebase Config Files

- Click on **Regenerate Config Files**
- Enter the correct package name that matches your FlutterFlow project
- Click **Generate File**

> ![Regenerate Firebase Config](../assets/20250430121404592193.png)

### 3. Re-Test Firebase Integration

- Download the new `google-services.json` file if needed
- Deploy or run the app again to verify the error is resolved

---

By ensuring the package names match exactly between FlutterFlow and Firebase—including capitalization and formatting—you can resolve this configuration error and restore Firebase functionality.
