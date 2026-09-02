---
keywords:
  - error
  - running
  - install
slug: /troubleshooting/google-play-store-deployment/error-running-pod-install
title: Error Running Pod Install
description: >-
  This article addresses the common Error Running Pod Install issue, which
  typically occurs due to misconfiguration of Flutter or CocoaPods on macOS
  devices.
tags:
  - FlutterFlow
  - Troubleshooting
  - Google Play Store Deployment
last_verified: 2026-09-02
---
# Error Running Pod Install

This article addresses the common **Error Running Pod Install** issue, which typically occurs due to misconfiguration of Flutter or CocoaPods on macOS devices.

:::info[Prerequisites]
- Flutter is installed on your development machine.
- You are working on a macOS device.
- Basic familiarity with terminal commands.
:::

## Steps to Fix Error Running Pod Install:

1. Verify Flutter is set up correctly by following the official guide: **[Flutter - Get Started: Install on macOS](https://docs.flutter.dev/install/quick)**.

2. For troubleshooting specific to macOS, consult this guide: **[Troubleshooting Flutter on macOS](https://docs.flutter.dev/platform-integration/ios/setup)**.

3. Run `flutter doctor` in the terminal to check for missing dependencies or configuration issues.

4. Ensure CocoaPods is installed and up to date by running the following commands:

   ```bash
   sudo gem install cocoapods
   pod repo update
   ```

   Prefer the installation method supported by your macOS/Ruby environment; do not run arbitrary copied commands with `sudo` until you understand which Ruby installation they modify.

5. If the problem persists, try deleting the CocoaPods cache and reinstalling:

  ```bash
  flutter clean
  ```
  ```bash
  flutter pub get
  ```
  ```bash
  cd ios
  ```
  ```bash
  pod install
  ```
  Preserve `Podfile.lock` by default because it records the resolved native dependency set. Delete and regenerate it only after the first CocoaPods error shows a resolution problem and you have reviewed the resulting version changes.

## Related documentation

See [AdMob Ads Not Displaying in Google Play Testing](/troubleshooting/google-play-store-deployment/admob-ads-not-displaying-in-google-play-testing) for a related FlutterFlow workflow.
