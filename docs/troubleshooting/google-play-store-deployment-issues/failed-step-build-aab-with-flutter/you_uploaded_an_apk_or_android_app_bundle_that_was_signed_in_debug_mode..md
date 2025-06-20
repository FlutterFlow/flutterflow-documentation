---
keywords: ['debug', 'android', 'release']
slug: /signed-in-debug-mode-error
title: Signed in Debug Mode Error
---
# Signed in Debug Mode Error.

:::info[Prerequisites]

Before proceeding, ensure that you:

- Have generated an APK or Android App Bundle via **FlutterFlow → Build → Android**.
- Have access to your exported project folder.
- Are able to edit the **android/app/build.gradle** file.

:::

When uploading your Android APK or App Bundle to the Play Store or any production environment, you may encounter the following error:

```
You uploaded an APK or Android App Bundle that was signed in debug mode. You need to sign your APK or Android App Bundle in release mode
```

This happens when your build is signed using a **debug configuration**, which is not acceptable for release uploads.

This means that your current build is using the **debug** signing config, which is meant for internal testing or development only.  
To fix this, you must update your **build.gradle** file and use the **release** signing configuration.


Follow the steps below to update your configuration:

- Step 1: Find the debug keyword under buildTypes in android/app/builld.gradle in your project folder

    ![](../../assets/20250430121331806679.png)

- Step 2: Replace the debug keyword with release and then save the file
    
    ![](../../assets/20250430121332062568.png)



If this does not resolve the issue, contact FlutterFlow Support at support@flutterflow.io