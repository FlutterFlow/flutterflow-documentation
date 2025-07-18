---
keywords: ['debug', 'android', 'release']
slug: troubleshooting/google-play-store-deployment/signed-in-debug-mode-error
title: Signed in Debug Mode Error
---

# Signed in Debug Mode Error

:::info[Prerequisites]
- Generated an APK or Android App Bundle via **FlutterFlow → Build → Android**.
- Access to the exported project folder.
- Ability to edit the `android/app/build.gradle` file.
:::

When uploading an Android APK or App Bundle to the Play Store or a production environment, the following error may occur:

```console
You uploaded an APK or Android App Bundle that was signed in debug mode. You need to sign your APK or Android App Bundle in release mode
```

This error indicates that the build was signed with a debug configuration, which is only for internal testing and not valid for production release.

To fix this, update the `build.gradle` file to use the release signing configuration.

**Steps to Update Build Configuration:**
1. Open the `android/app/build.gradle` file in your project folder.
2. Locate the `debug` keyword under `buildTypes`.
3. Replace the `debug` keyword with `release` and save the file.

If the issue persists, contact FlutterFlow Support at support@flutterflow.io.
