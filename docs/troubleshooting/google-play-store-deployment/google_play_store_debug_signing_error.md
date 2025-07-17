---
keywords: ['deployment', 'debug', 'android']
slug: troubleshooting/google-play-store-deployment/google-play-store-debug-signing-error
title: Google Play Store Debug Signing Error
---
# Google Play Store Debug Signing Error

When uploading your Android App Bundle (AAB) or APK to Google Play, you might encounter this error:

```text
You uploaded an APK or Android App Bundle that was signed in debug mode. You need to sign your APK or Android App Bundle in release mode
```
This error indicates the app must be signed with a release key before uploading.

:::info[Prerequisites]
- Access to the Android project files.
- Familiarity with editing Gradle build files.
:::

**Steps to Fix Debug Signing Error:**
    1. Open the `android/app/build.gradle` file in your project folder.
    2. Locate the `buildTypes` section and find the configuration labeled `debug`.
    3. Replace the `debug` keyword with `release` in the relevant signing configuration.

        ![](../assets/20250430121513060363.png)

    4. Save the file.

        ![](../assets/20250430121513225263.png)

        :::note
        Make sure that you fill out all the information in the play store including the store listing information and the setup information.
        :::


​