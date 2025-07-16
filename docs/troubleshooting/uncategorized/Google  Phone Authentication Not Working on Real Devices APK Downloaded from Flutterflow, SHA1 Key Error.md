---
keywords: ['authentication', 'error', 'real']
author: Unknown
created_at: '1677593844'
slug: /google-phone-authentication-not-working-on-real-devices-apk-downloaded-from-flutterflow-sha1-key-error
title: 'Google / Phone Authentication Not Working on Real Devices: APK Downloaded
  from Flutterflow, SHA1 Key Error'
updated_at: '1713210685'
url: https://intercom.help/flutterflow/en/articles/7038485-google-phone-authentication-not-working-on-real-devices-apk-downloaded-from-flutterflow-sha1-key-error
---
# Google / Phone Authentication Not Working on Real Devices: APK Downloaded from Flutterflow, SHA1 Key Error

If you face difficulties setting up social login and phone sign-in features, particularly when testing APKs downloaded directly from FlutterFlow, this guide will help you add SHA-1 and SHA-256 keys to your Firebase project to ensure smooth authentication in your app.

Issue
Downloading an APK for testing from FlutterFlow's source code menu may sometimes result in the SHA-1 keys not auto-generating as expected. This is a significant problem because Firebase uses these keys to authorize and authenticate user access for services like Google authentication and phone sign-in. Incorrect or missing keys can disrupt these features, preventing user login.

Solution: Manual Key Generation
To address this, you need to manually generate SHA-1 and SHA-256 keys related to the APK and add them to your Firebase project. Follow these steps:

Step 1: Download the APK
Start by downloading your app's APK file from FlutterFlow. Navigate to the source code menu and select your project to download the APK to your local machine.

Step 2: Generate SHA-1 and SHA-256 Keys
With the APK downloaded, open a terminal or command prompt and navigate to the directory containing the APK file. Then, execute the following command:​
```
keytool -printcert -jarfile app.apk
```
This command outputs both the SHA-1 and SHA-256 keys required by Firebase for authentication purposes.

Step 3: Add Keys to Firebase
Once you have the keys, the next step is to add them to your Firebase project. This is done through the Firebase console:

Log in to the Firebase console.

Select your project and navigate to the settings page.

Under the "Your apps" section, find your Android app listing.

Add the SHA-1 and SHA-256 keys to your app's Firebase configuration.​

