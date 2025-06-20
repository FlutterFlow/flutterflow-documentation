---
keywords: ['firebase', 'error', 'package']
slug: /google-play-failed-to-upload-artefacts
title: Google Play Failed to Upload Artefacts.
---
# Google Play Failed to Upload Artefacts.

:::info[Prerequisites]
Before proceeding, ensure:
- Your app’s **Package Name** in **FlutterFlow** matches your **Google Play Console** package name.
- You have configured **Firebase** in FlutterFlow.
- Your Google Play Console account is active.
:::

If you encounter the error **"Google Play Failed to Upload Artefacts. Package not Found,"** it may be due to a package name mismatch or initial deployment setup.

This error typically occurs in two scenarios:

    - You are deploying your app to the **Google Play Store** for the first time.
    - You have updated your app's **Package Name** in **FlutterFlow**, but have not regenerated your configuration files.

```js
Google Play failed to upload artefacts. Package not found: com.flutterflow.appname.: {    "error": {        "code": 404,        "message": "Package not found: com.flutterflow.appname.",        "status": "NOT_FOUND"    }}
```

Use the strategies below to fix this error:

## First Time Deployment to Google Play [Action]

If you are deploying your app to the Play Store for the first time, follow these steps:

    1. After generating your build in FlutterFlow, click the **AAB** button to download the build artifact.
    2. Log into your **Google Play Console**.
    3. Navigate to your app project and upload the **AAB file** as a new release in the appropriate track (Internal, Closed, Open, or Production).
    4. After this initial upload, future deployments should proceed without encountering this error.

    ![](../../assets/20250430121330484821.png)


## Package Name Updated

If you have changed your app’s **Package Name** in FlutterFlow, you must regenerate your configuration files:

    1. Open your project in **FlutterFlow**.
    2. Go to **Settings > Firebase**.
    3. Click **Regenerate Config Files**.

    ![](../../assets/20250430121330727549.png)

    4. Enter your new **Package Name** and click **Generate File** to download the updated configuration files.

    ![](../../assets/20250430121331069027.png)

    5. Rebuild your app and deploy it again to confirm the issue has been resolved.


:::info[Still Encountering the Error?]
If you have followed all the steps and still encounter the issue:

- Double-check that the **Package Name** matches exactly between FlutterFlow and Google Play Console.
- Verify that your **Firebase** configuration has been correctly updated.
- If the issue persists, contact **FlutterFlow Support** via Chat or at [support@flutterflow.io](mailto:support@flutterflow.io).
:::
