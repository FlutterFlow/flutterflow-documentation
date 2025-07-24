---
keywords: ['error', 'deployment', 'build']
slug: /fix-version-code-conflict-apk-upload
title: Fix Version Code Conflict When Uploading APK to Google Play
---

# Fix Version Code Conflict When Uploading APK to Google Play

When uploading a new APK to Google Play, you may encounter the following error:

```text
Publishing failed: Google Play failed to upload artefacts. APK specifies a version code that has already been used.
{"error":{"code":403,"message":"APK specifies a version code that has already been used.","status":"PERMISSION_DENIED"}}
```

This occurs when the APK’s version code conflicts with a version that has already been uploaded. Each release on Google Play must have a **unique version code**.

:::info[Prerequisites]
You must have access to your FlutterFlow project or GitHub repo where the app is built, and you must be using the Google Play Console for deployment.
:::

## Updating Version Code in FlutterFlow

To resolve the issue when deploying directly from FlutterFlow:

   1. Navigate to **Settings and Integrations > Mobile Deployment**.
      ![](../assets/20250430121158393454.png)

   2. Under the **App Version** section:
      - **App Version**: Optional, represents the app’s public version (e.g., 1.0.2).
      - **Build Number**: Required for deployment. This must be incremented with every new build.

   3. Increase the **Build Number**. If left empty, FlutterFlow will increment it automatically.

   4. Save your changes and deploy again.


## Updating Version Code When Using GitHub

   If deploying through GitHub, follow these steps:

   1. Open the `pubspec.yaml` file.
   2. Locate the `version` tag:
      ```yaml
      version: 1.0.2+2
   3. Increment the number after the + symbol. For example, change +2 to +3

   4. Run the following command to clean the build:
      ```js
      flutter clean
      ```

   5. Rebuild the app and upload the new APK.