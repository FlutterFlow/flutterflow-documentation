---
keywords: ['android', 'release', 'build']
slug: troubleshooting/google-play-store-deployment/android-app-bundle-wrong-key-error
title: App Bundle Signed with Wrong Key on Google Play
---

# App Bundle Signed with Wrong Key on Google Play

If you're encountering this error when uploading your app to Google Play, it typically means the Android App Bundle was signed with a **different Keystore** than the one expected by Google Play.

Here is the error message:

    ```text
    Google Play failed to upload artefacts. The Android App Bundle was signed with the wrong key.
    Found: SHA1: XX:XX:XX:XX.
    Expected: YY:YY:YY:YY
    ```

:::info[Prerequisites]
- You must be building your app in Release Mode.
- Ensure you have access to the correct keystore used when first publishing your app.
:::

Follow the steps below to resolve this error

1. **Verify That the Correct Keystore File Was Submitted for Signing**

    If you are **not using GitHub** integration, please [contact FlutterFlow Support](mailto:support@flutterflow.io).

        If needed, you can create a new keystore file using the following command in your terminal or IDE:

            ```bash
            keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
            ```

            :::warning
            If the original keystore was used in a previous deployment and is now lost, you’ll need to contact Google Play Support for further assistance.
            :::

2. **Verify That Your `build.gradle` File Was Correctly Configured**

    Check the `build.gradle` file and ensure it has been updated according to **[Google Play’s deployment documentation](https://developer.android.com/studio/publish/app-signing#sign-apk)**.  
Pay special attention to the `signingConfigs` and `buildTypes` sections.

3. **Make Sure the Application Was Submitted in Release Mode**

    You must build in **Release Mode** to ensure your app is correctly signed and optimized for production.

    To verify:

        - Check your **build settings** in FlutterFlow.
        - Ensure the app is **not in Debug Mode**.
        - If it is, rebuild the app using **Release Mode**.
