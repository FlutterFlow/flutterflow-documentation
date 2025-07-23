---
keywords: ['authentication', 'firebase', 'sha1', 'apk', 'real device']
slug: troubleshooting/authentication/fix-auth-apk-sha1-error
title: Fix Google or Phone Authentication on Real Devices (SHA Key Issue)
---

# Fix Google or Phone Authentication on Real Devices (SHA Key Issue)

When testing APKs downloaded from FlutterFlow, you may encounter issues with Google sign-in or phone authentication failing on real Android devices. This is often caused by missing **SHA-1** and **SHA-256** keys in your Firebase configuration.

This guide explains how to manually generate and add the required keys to Firebase to resolve the issue.

When downloading an APK from FlutterFlow’s **Source Code** menu for testing purposes, the associated SHA keys may not be auto-generated.

Firebase uses these keys to authenticate users with services like **Google Sign-In** or **Phone Number Authentication**. If they are missing, authentication will fail during testing or production use.

:::info[Prerequisites]
- Ensure you have already connected your FlutterFlow project to Firebase.
- You must have downloaded the APK from FlutterFlow’s **Source Code** tab.
:::


Follow the steps below to resolve the error:

1. **Download the APK**
  - In FlutterFlow, go to the **Source Code** tab.
  - Select your project and download the APK to your local machine.

2. **Generate SHA-1 and SHA-256 Keys**

  - Open a terminal or command prompt.
  - Navigate to the directory where the APK is saved.
  - Run the following command to extract SHA keys:

    ```bash
    keytool -printcert -jarfile app.apk
    ```

    This will output both the SHA-1 and SHA-256 fingerprint values.

3. **Add Keys to Firebase**
  - Go to the Firebase Console.
  - Select your project.
  - Click the gear icon > Project settings.
  - Under Your Apps, select your Android app.
  - Add the SHA-1 and SHA-256 keys in the respective fields.

  Without the correct SHA keys, Firebase Authentication (Google, Phone) will not work on real Android devices.