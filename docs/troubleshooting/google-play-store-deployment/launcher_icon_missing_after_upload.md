---
keywords: ["icon", "added", "launcher"]
slug: /launcher-icon-missing-after-upload
title: Launcher Icon Missing After Upload
---

# Launcher Icon Missing After Upload

Custom app launcher icons may fail to appear after being added in the project settings due to missing icon generation steps.

:::info[Prerequisites]
- Flutter is installed on your development machine.
- The project code has been downloaded or exported.
- Basic familiarity with running terminal commands.
:::

**Steps to Resolve Missing Launcher Icon:**

1. Run the launcher icon generation command in the terminal at your project root:

   ```js
   flutter pub run flutter_launcher_icons:main
   ```
    This generates the necessary launcher icon assets for your app.

2. Ensure your Flutter environment is properly set up. If needed, follow the official **[Flutter installation guide](https://docs.flutter.dev/get-started/install)**.

    - Verify your icon files are named correctly and placed in the appropriate directory.
    - Check that your `pubspec.yaml` includes the correct `flutter_launcher_icons` configuration.
    - Run `flutter clean` in your project directory before rerunning the icon generation command to clear caches.