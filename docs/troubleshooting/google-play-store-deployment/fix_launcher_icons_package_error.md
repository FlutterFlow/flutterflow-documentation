---
keywords: ['error', 'package', 'icon']
slug: /fix-launcher-icons-package-error
title: Fix Flutter Launcher Icons Package Error
---

# Fix Flutter Launcher Icons Package Error

This article describes how to resolve the **[flutter_launcher_icons package](https://pub.dev/packages/flutter_launcher_icons)** error that may occur during app build or deployment.

:::info[Prerequisites]
- Access to your FlutterFlow project.
- Ability to open and edit the `pubspec.yaml` file.
- Familiarity with your build environment (FlutterFlow, GitHub, or IDE).
:::

**Understanding the Error:**

During the build process, you might see the following error message:

```text
Codemagic Deploy Output Failed Step: Generate Launch Icon Could not find package "flutter_launcher_icons". Did you forget to add a dependency? pub finished with exit code 65. Build failed: Step 5 script 'Generate Launch Icon' exited with status code 65.
```

This error indicates that the **flutter_launcher_icons** package is missing or not configured correctly.

Follow the steps below to fix the error:

1. **Clear and Reset App Assets in FlutterFlow:**
    - Navigate to **Settings and Integrations** > **App Assets** inside FlutterFlow.
    - If the **Splash Screen** and **Launcher Icon** are set:
        - Clear both assets.
        - Re-upload the launcher icons.

        ![](../assets/20250430121327988277.gif)

2. **`Add flutter_launcher_icons` Package in GitHub Deployment**
    If you are deploying via GitHub and encounter this error, add the package to your `pubspec.yaml` file:

        - Open your `pubspec.yaml` file.
        - Add the following under `dev_dependencies`:

            ```js
            dev_dependencies:
            flutter_launcher_icons: "^0.10.0"

            flutter_icons:
            android: true
            ios: true
            image_path_ios: "assets/images/launcher/ios.png"
            image_path_android: "assets/images/launcher/android.png"
            ```
            - **flutter_launcher_icons*: "^0.10.0" specifies the package version.
            - `image_path_ios` and `image_path_android` specify the paths to your launcher icon images.
            - Ensure the image files exist at the specified paths.

3. **Run the following commands in your terminal or IDE:**

    ```bash
    flutter pub get
    ```
    ```bash
    flutter pub run flutter_launcher_icons:main
    ```
    ```bash
    flutter run
    ```
    `flutter pub get` fetches packages.

    `flutter pub run flutter_launcher_icons:main` generates launcher icons.

    `flutter run` builds and runs the app.

If the issue persists after following these steps, contact FlutterFlow Support at support@flutterflow.io.

