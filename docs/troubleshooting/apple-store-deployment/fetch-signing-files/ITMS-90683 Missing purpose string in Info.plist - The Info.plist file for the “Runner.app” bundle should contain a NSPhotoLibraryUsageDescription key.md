---
keywords: ['error', 'runner', 'purpose']
slug: /itms-90683-missing-purpose-string-in-info-plist-the-info-plist-file-for-the-runner-app-bundle-should-contain-a-nsphotolibraryusagedescription-key
title: 'ITMS-90683: Missing Purpose String in Info.plist – NSPhotoLibraryUsageDescription Required'
---

# ITMS-90683: Missing Purpose String in Info.plist – NSPhotoLibraryUsageDescription Required

## Full Error Message

```text
Dear Developer,
We identified one or more issues with a recent delivery for your app, "Gral Wind Orchestra App" 1.0.1 (1). Please correct the following issues, then upload again.

ITMS-90683: Missing purpose string in Info.plist - Your app’s code references one or more APIs that access sensitive user data, or the app has one or more entitlements that permit such access. The Info.plist file for the “Runner.app” bundle should contain a NSPhotoLibraryUsageDescription key with a user-facing purpose string explaining clearly and completely why your app needs the data. If your app supports multiple locales, you’re now required to provide a purpose string value in the Info.plist file in addition to a valid localized string across each of your app’s localization folders. If you’re using external libraries or SDKs, they may reference APIs that require a purpose string. While your app might not use these APIs, a purpose string is still required.
```


For details, visit: [Apple Developer Docs](https://developer.apple.com/documentation/uikit/protecting_the_user_s_privacy/requesting_access_to_protected_resources)

---

## Background

This error indicates that your app references APIs that access **sensitive user data**, such as the **Photo Library**, but your `Info.plist` does not contain a proper purpose string (specifically, the `NSPhotoLibraryUsageDescription` key).

Apple requires this description to explain to users why the app is requesting access.

---

## How to Fix the Issue

1. Open your project in **FlutterFlow**
2. Go to **Settings & Integrations**
3. Under **Project Setup**, select **Permissions**
4. Find the **Photo Library** permission
5. Add a clear, user-friendly description  
   _Example: "We need access to your photo library so you can upload and edit images inside the app."_

---

![Permission Settings](../assets/20250430121227744579.png)
![Add Usage Description](../assets/20250430121227989568.png)

---

## Still Not Working?

If you've added the usage description and the error still persists:

- Double-check that you've saved the changes
- Make sure you're submitting the updated build to the App Store
- If the issue continues, **contact FlutterFlow Support** via [chat](https://flutterflow.io) or email: support@flutterflow.io

---

By properly adding usage descriptions for all sensitive data access, you ensure compliance with App Store guidelines and build trust with your users.
