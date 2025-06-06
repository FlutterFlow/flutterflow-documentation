---
keywords: ['error', 'running', 'install']
slug: /i-get-this-error-error-running-pod-install
title: 'I get this error: Error running pod install'
---

# I get this error: Error running pod install

If you see the error **"Error running pod install"**, it usually means there is a misconfiguration of Flutter on your device.

## How to Fix

- Make sure Flutter is set up correctly on your device. Follow the official guide: [Flutter - Get Started: Install on macOS](https://docs.flutter.dev/get-started/install/macos)
- If you are on a Mac, see this article for troubleshooting: [Troubleshooting Flutter on macOS](https://intercom.help/flutterflow/en/articles/6156947-i-get-this-error-error-running-pod-install)

## Additional Tips

- Run `flutter doctor` in your terminal to check for any missing dependencies or issues.
- Make sure CocoaPods is installed and up to date by running:
  ```sh
  sudo gem install cocoapods
  pod repo update
  ```
- If you continue to have issues, try deleting the `ios/Pods` directory and the `ios/Podfile.lock` file, then run:
  ```sh
  flutter clean
  flutter pub get
  cd ios
  pod install
  ```

If you still encounter problems, refer to the [Flutter documentation](https://docs.flutter.dev/) or reach out to support.