---
keywords: ['error', 'version', 'failed']
slug: /version-solving-failed-due-to-incompatible-package
title: Version Solving Failed Due to Incompatible Package.
---
# Version Solving Failed Due to Incompatible Package.

When running `flutter pub get`, you may encounter a **version solving failed** error if your project contains package versions that are incompatible with FlutterFlow’s supported Flutter version. 

```js
Running "flutter pub get" in flutter_tools... 3.4s Resolving dependencies... Because every version of flutter_test from sdk depends on collection 1.15.0 and horse_care_new depends on collection 1.16.0, flutter_test from sdk is forbidden. So, because horse_care_new depends on flutter_test from sdk, version solving failed. pub finished with exit code 1
```

Follow the steps below to solve the issue:

    If you are using a custom action/widget in your project.

    - Check if the package you use for custom action or widget is compatible with FlutterFlow's Flutter version.

    - Check the pubspec.yaml file before adding the dependency to the custom widget/action so that if the package already exists in pubspec file, then you only need to add it as a header file in the custom widget/action code. You won't need to add the dependency separately.

    If you aren't using any custom widget or action, then please report this issue to support via Chat or Email at support@flutterflow.io.

