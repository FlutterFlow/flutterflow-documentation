---
keywords:
  - error
  - version
  - failed
slug: >-
  /troubleshooting/google-play-store-deployment/version-solving-failed-due-to-incompatible-package
title: Version Solving Failed Due to Incompatible Package
description: >-
  A version solving failed error may occur when running if package versions in
  the project conflict with FlutterFlow's supported Flutter version.
tags:
  - FlutterFlow
  - Troubleshooting
  - Google Play Store Deployment
last_verified: 2026-09-02
---
# Version Solving Failed Due to Incompatible Package

A **version solving failed** error may occur when running `flutter pub get` if package versions in the project conflict with FlutterFlow's supported Flutter version.

```js
Running "flutter pub get" in flutter_tools... 3.4s
Resolving dependencies...
Because every version of flutter_test from sdk depends on collection 1.15.0
and horse_care_new depends on collection 1.16.0,
flutter_test from sdk is forbidden.
So, because horse_care_new depends on flutter_test from sdk,
version solving failed.
pub finished with exit code 1
```

:::info[Prerequisites]
- Custom actions or widgets are used in the project.
- Access to the project's `pubspec.yaml` file.
:::

**Steps to Resolve the Error:**
- Verify that all packages used in custom actions or widgets are compatible with FlutterFlow's Flutter version.

- Before adding a new dependency in your custom widget or action, check if the package already exists in `pubspec.yaml`. If it does, only import the package in your code without adding it again as a dependency.

- Read the complete solver explanation from the first `Because...` line, then compare Dart/Flutter SDK constraints and direct dependency ranges. Avoid forcing `dependency_overrides` as a first fix; it can select a combination the packages did not declare compatible.

- If no custom widgets or actions are used and the error persists, contact FlutterFlow Support at support@flutterflow.io for assistance.

## Related documentation

See [AdMob Ads Not Displaying in Google Play Testing](/troubleshooting/google-play-store-deployment/admob-ads-not-displaying-in-google-play-testing) for a related FlutterFlow workflow.
