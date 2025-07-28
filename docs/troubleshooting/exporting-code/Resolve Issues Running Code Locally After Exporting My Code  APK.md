---
keywords: ['build', 'locally', 'after']
slug: /resolve-issues-running-code-locally-after-exporting-my-code-apk
title: Resolve Issues Running Code Locally After Exporting My Code / APK
---

# Resolve Issues Running Code Locally After Exporting My Code / APK

If APKs downloaded from FlutterFlow are not functioning as expected, follow the steps below to ensure proper project configuration and build execution. This process will also help identify any local compiler errors that may not be visible within FlutterFlow.

## Steps to Resolve

1. **Resolve All Project Issues**
   - In FlutterFlow, check the project for any unresolved issues.
   - Resolve errors before proceeding to build.

   ![](../assets/20250430121526027709.png)

2. **Save the Project**
   - Use `Ctrl + S` or `Cmd + S` to save all recent changes.

   ![](../assets/20250430121526232282.png)

3. **Rebuild the APK**
   - Use the Build tab to generate a new APK.
   - Download the APK after the build completes.

   ![](../assets/20250430121526436202.png)

4. **Run the APK or Project Locally**
   - Download the full project code and run it using your local machine.
   - This allows visibility into any compilation or runtime errors.

5. **Run Required Commands**
   - Open a terminal and execute all necessary build commands (e.g., `flutter pub get`, `flutter build apk`).

## :::note[Firebase Configuration Consideration]

When building locally, some features—like Google Sign-In—may not work unless you configure the SHA1 key in Firebase.

- Go to the Firebase Console.
- Add your local machine’s SHA1 fingerprint to your Android app configuration.
- Redeploy after the change.

:::
