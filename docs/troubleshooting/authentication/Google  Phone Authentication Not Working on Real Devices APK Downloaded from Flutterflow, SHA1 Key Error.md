---
title: Fix SHA-1 Key Issues for Google and Phone Auth on Real Devices
slug: /fix-google-phone-auth-sha1-error
keywords: ['authentication', 'error', 'real']
---

# Fix SHA-1 Key Issues for Google and Phone Auth on Real Devices

If you're having issues with Google Sign-In or Phone Authentication on real devices after downloading the APK from FlutterFlow, it's likely due to missing or incorrect SHA-1 and SHA-256 keys in your Firebase project.

---

## Problem Overview

When you download the APK directly from FlutterFlow (via the source code menu), the necessary SHA-1 and SHA-256 keys may not be auto-generated or included. Without these keys, Firebase cannot authenticate users via social logins or phone number sign-ins.

---

## How to Fix It

### Step 1: Download Your APK

1. Go to your FlutterFlow project.
2. Navigate to the **Source Code** menu.
3. Download the APK file to your local machine.

---

### Step 2: Generate SHA-1 and SHA-256 Keys

1. Open a terminal or command prompt.
2. Navigate to the folder containing your APK file.
3. Run the following command:

```bash
keytool -printcert -jarfile app.apk
```

This will output the SHA-1 and SHA-256 fingerprints needed for Firebase.

### Step 3: Add Keys to Your Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com).
2. Select your project from the dashboard.
3. Click the **gear icon** next to **Project Overview** and select **Project settings**.
4. In the **General** tab, scroll down to the **Your apps** section and click your **Android app**.
5. Find the **SHA certificate fingerprints** section.
6. Paste both the **SHA-1** and **SHA-256** keys into their respective fields.
7. Click **Save** to apply the changes.

> ✅ Once the keys are added, Firebase authentication using Google or Phone Sign-In should work correctly on real devices using the downloaded APK.
