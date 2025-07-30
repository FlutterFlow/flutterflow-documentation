---
keywords: ['signing', 'ios', 'error']
slug: /fix-ios-signing-imagenotification
title: Fix iOS Signing for ImageNotification
---

# Fix iOS Signing for ImageNotification

:::tip
Not sure which error your project has? Refer to the [Codemagic Error Identification Guide](/deployment/codemagic-error-types) to better understand the issue.
:::

## Introduction

When configuring the `ImageNotification` capability in an iOS application, build failures can occur due to missing signing credentials. This typically happens when the development team is not correctly set in Xcode or in the FlutterFlow iOS deployment settings.

Proper signing is required to ensure that the application can run on real devices or be submitted to the App Store.

## Error Message

```plaintext
Signing for "ImageNotification" requires a development team
```

:::info[Prerequisites]
- An active Apple Developer Program membership.
- Access to a Mac with Xcode installed.
- A configured FlutterFlow project targeting iOS.
:::

## Steps to Resolve

1. **Open the Project in Xcode**  
   - Navigate to the `ios/Runner.xcworkspace` file inside your Flutter project.  
   - Open it with Xcode.

2. **Set the Development Team**  
   - Go to the **Signing & Capabilities** tab.  
   - Under **Team**, select your Apple Developer account.  
   - If you don’t see your team, make sure you are logged into Xcode with the correct Apple ID.

3. **Check Provisioning Profiles**  
   - Under **Provisioning Profile**, select **Automatic** or use a manually downloaded profile from the [Apple Developer Portal](https://developer.apple.com/account/resources/profiles/list).

4. **Configure iOS Deployment in FlutterFlow**  
   - Go to **Settings > iOS Deployment** in FlutterFlow.  
   - Add your **Apple Team ID**.  
   - Ensure all required fields such as **Bundle Identifier**, **iOS App ID**, and **Team Name** are filled in.

5. **Clean and Rebuild**  
   - In Xcode, go to **Product > Clean Build Folder**.  
   - Then rebuild the app using **Product > Build**.

## Notes

:::warning
If your Flutter SDK version in VS Code does not match the version used in FlutterFlow, builds may fail with unrelated errors.
:::
