---
keywords: ['firebase', 'android', 'error']
slug: troubleshooting/firebase/fix-firebase-package-name-error
title: Fix Firebase Android Package Name Mismatch
---

# Fix Firebase Android Package Name Mismatch

This error occurs when the `package name` in your Firebase Android configuration file (`google-services.json`) does not match the package name defined in your FlutterFlow project settings.

:::info[Prerequisites]
Ensure you have created your Firebase project and downloaded the `google-services.json` file for your Android app.
:::

Follow the steps below to resolve the error:

1. **Confirm Your FlutterFlow Package Name**

    - In FlutterFlow, open your project.
    - Navigate to **Settings > General > App Details**.
    - Note the Android **Package Name** listed here.

2. **Regenerate Firebase Config File**

    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Select your project.
    - Navigate to **Project Settings > General**.
    - In the **Your apps** section, click the Android app.
    - Ensure the **package name** matches exactly with your FlutterFlow app.
    - Download a new `google-services.json` file.

3. **Upload Config File to FlutterFlow**

    - In FlutterFlow, go to **Settings > Integrations > Firebase**.
    - Upload the new `google-services.json` file.
    - Click **Save & Continue**.

        :::warning
        If the package names do not match exactly — including case sensitivity and dots — Firebase services may not work correctly in your Android build.
        :::

If reconfiguring the project does not solve the issue:

    - Remove the existing Android app entry from Firebase.
    - Re-add it with the correct package name.
    - Download and re-upload the configuration file to FlutterFlow.

