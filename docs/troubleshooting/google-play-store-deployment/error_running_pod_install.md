---
keywords: ['error', 'running', 'install']
slug: /error-running-pod-install
title: Error Running Pod Install
---

# Error Running Pod Install

This article addresses the common **Error Running Pod Install** issue, which typically occurs due to misconfiguration of Flutter or CocoaPods on macOS devices.

:::info[Prerequisites]
- Flutter is installed on your development machine.
- You are working on a macOS device.
- Basic familiarity with terminal commands.
:::

## Steps to Fix Error Running Pod Install:

1. Verify Flutter is set up correctly by following the official guide: **[Flutter - Get Started: Install on macOS](https://docs.flutter.dev/get-started/install/macos)**.

2. For troubleshooting specific to macOS, consult this guide: **[Troubleshooting Flutter on macOS](https://intercom.help/flutterflow/en/articles/6156947-i-get-this-error-error-running-pod-install)**.

3. Run `flutter doctor` in the terminal to check for missing dependencies or configuration issues.

4. Ensure CocoaPods is installed and up to date by running the following commands:

   ```bash
   sudo gem install cocoapods
   pod repo update

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
  Deleting the `ios/Pods` directory and `ios/Podfile.lock` file before running `pod install` can help resolve lingering CocoaPods issues.