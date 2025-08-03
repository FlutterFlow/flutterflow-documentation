---
keywords: ['firebase', 'android', 'error']
slug: /troubleshooting/firebase/package-name-mismatch-in-firebase-config
title: Package Name Mismatch in Firebase Config
---

# Package Name Mismatch in Firebase Config

This error occurs when the package name defined in your Firebase Android configuration does not match the package name defined in your FlutterFlow project. This mismatch prevents the app from connecting to Firebase services properly during builds or runtime.

Follow these steps to resolve the mismatch:

1. **Open your project** in **FlutterFlow**.
2. Navigate to **Settings > Firebase**.
3. Click **Regenerate Config Files**.
4. Enter the correct package name that matches your app's actual package name.
5. Click **Generate File**.

If regenerating the config files does not resolve the issue:

6. Reconfigure Firebase for your project:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Select your project.
   - Ensure the Android app listed matches your app’s package name.
   - If not, register a new Android app with the correct package name.
   - Download the updated `google-services.json` file and upload it through **FlutterFlow > Settings > Firebase**.

If you're still encountering the error after following these steps, please contact FlutterFlow Support via chat or email at **support@flutterflow.io**.
