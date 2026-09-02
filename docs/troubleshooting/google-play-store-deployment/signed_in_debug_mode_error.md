---
keywords:
  - debug
  - android
  - release
slug: /troubleshooting/google-play-store-deployment/signed-in-debug-mode-error
title: Signed in Debug Mode Error
description: '- Generated an APK or Android App Bundle via FlutterFlow → Build → Android .'
tags:
  - FlutterFlow
  - Troubleshooting
  - Google Play Store Deployment
last_verified: 2026-09-02
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

To fix this, create a release build with a release signing configuration.

**Steps to Update Build Configuration:**
1. Open the `android/app/build.gradle` file in your project folder.
2. Configure `signingConfigs.release` using secrets supplied outside Git, then reference it from `buildTypes.release`.
3. Do not rename the debug build type, reuse the debug keystore, or commit the keystore/passwords. Preserve the signing lineage for an existing Play app.

If the issue persists, contact FlutterFlow Support at support@flutterflow.io.

## Related documentation

See [AdMob Ads Not Displaying in Google Play Testing](/troubleshooting/google-play-store-deployment/admob-ads-not-displaying-in-google-play-testing) for a related FlutterFlow workflow.
