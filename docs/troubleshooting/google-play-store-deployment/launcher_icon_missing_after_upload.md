---
keywords:
  - icon
  - added
  - launcher
slug: >-
  /troubleshooting/google-play-store-deployment/launcher-icon-missing-after-upload
title: Launcher Icon Missing After Upload
description: >-
  Custom app launcher icons may fail to appear after being added in the project
  settings due to missing icon generation steps.
tags:
  - FlutterFlow
  - Troubleshooting
  - Google Play Store Deployment
last_verified: 2026-09-02
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
   dart run flutter_launcher_icons
   ```
    This generates the necessary launcher icon assets for your app.

2. Ensure your Flutter environment is properly set up. If needed, follow the official **[Flutter installation guide](https://docs.flutter.dev/install/quick)**.

    - Verify your icon files are named correctly and placed in the appropriate directory.
    - Check that your `pubspec.yaml` includes the correct `flutter_launcher_icons` configuration.
    - Review the generated adaptive and legacy Android assets, then increment the build number and test a release build. Use `flutter clean` only after confirming stale generated output; it is not required for every icon update.

## Related documentation

See [AdMob Ads Not Displaying in Google Play Testing](/troubleshooting/google-play-store-deployment/admob-ads-not-displaying-in-google-play-testing) for a related FlutterFlow workflow.
