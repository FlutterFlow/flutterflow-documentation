---
keywords: ['build', 'android', 'emulator']
slug: /troubleshooting/test-mode/local-build-providerinstaller-error
title: Local Build ProviderInstaller Error
---

# Local Build ProviderInstaller Error

This error commonly occurs when building Flutter apps on Android emulators. It is related to the `ProviderInstaller` service and can typically be resolved through basic cleanup and Flutter version upgrades.

:::info[Prerequisites]
- You are testing or running your Flutter project on an Android emulator.
- You have Flutter and Android Studio installed and configured.
:::

1. **Uninstall the App from the Emulator**

    Before rebuilding your app, ensure the old installation is removed:

    1. Open the Android Emulator.
    2. Locate your app icon and uninstall it.
    3. Alternatively, run the following command from your terminal:

        ```bash
        adb uninstall com.yourcompany.yourapp
        ```

            Replace com.yourcompany.yourapp with your actual app ID.

2. **Rebuild the App**
    
    After uninstalling:

    Run the following command in your project directory:

       ```bash
        flutter clean
        ```

        ```bash
        flutter pub get
        ```

        ```bash
        flutter run
        ```


            This will remove cached data and reinstall the app on the emulator.

3. **Upgrade Flutter (If Problem Persists)**

    If the issue continues, upgrading Flutter may help. Run the command below to upgrade:
        ```bash
        flutter upgrade
        ```

    Ensure your Flutter SDK is up to date. You can verify the version with:

        ```bash
        flutter --version
        ```

    :::note
    This error is often related to Google Play Services not being properly initialized on the emulator. If you're still encountering issues, consider creating a new emulator using a system image that includes the Play Store.
    :::

:::info[Additional Resources]
- Read the official **[Flutter Build Documentation](https://docs.flutter.dev/testing/build-modes)**.
- Check **[Android Emulator System Images](https://developer.android.com/studio/run/managing-avds#system-images)**.
:::