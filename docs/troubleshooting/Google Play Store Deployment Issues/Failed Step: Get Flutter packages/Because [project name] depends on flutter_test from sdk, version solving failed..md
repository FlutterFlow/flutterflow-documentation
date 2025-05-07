---
keywords: ['error', 'version', 'failed']
author: Unknown
created_at: '1660000734'
slug: /because-project-name-depends-on-flutter-test-from-sdk-version-solving-failed
title: Because [project name] depends on flutter_test from sdk, version solving failed.
updated_at: '1713554290'
url: https://intercom.help/flutterflow/en/articles/6455565-because-project-name-depends-on-flutter_test-from-sdk-version-solving-failed
---
# Because [project name] depends on flutter_test from sdk, version solving failed.

Tip: Not sure which type of error your project has? Check out this article on how to identify your Codemagic error.

**What does this error mean?**
This issue happens when there are packages in your project with incompatible versions. 

**Full error message**
```
Running "flutter pub get" in flutter_tools... 3.4s Resolving dependencies... Because every version of flutter_test from sdk depends on collection 1.15.0 and horse_care_new depends on collection 1.16.0, flutter_test from sdk is forbidden. So, because horse_care_new depends on flutter_test from sdk, version solving failed. pub finished with exit code 1
```

**How to resolve this issue?**

If you are using a custom action/widget in your project.

Check if the package you use for custom action or widget is compatible with FlutterFlow's Flutter version.

Check the pubspec.yaml file before adding the dependency to the custom widget/action so that if the package already exists in pubspec file, then you only need to add it as a header file in the custom widget/action code. You won't need to add the dependency separately.

If you aren't using any custom widget or action, then please report this issue to support via Chat or Email at support@flutterflow.io.

