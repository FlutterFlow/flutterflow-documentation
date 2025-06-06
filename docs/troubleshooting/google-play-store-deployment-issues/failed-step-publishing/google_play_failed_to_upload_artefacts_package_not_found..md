---
keywords: ['firebase', 'error', 'package']
slug: /google-play-failed-to-upload-artefacts-package-not-found
title: Google Play Failed to Upload Artefacts. Package not Found.
---
# Google Play Failed to Upload Artefacts. Package not Found

Not sure what kind of error your project is encountering? Review this article to learn how to identify Codemagic errors..

## What does this error mean?

This issue can result from two scenarios: 
- When it is the first time you are deploying your application to the Play Store, or 
- When you update your app's package name but don't update the config files.

## Full Error Message

```
Google Play failed to upload artefacts. Package not found: com.flutterflow.appname.: {    "error": {        "code": 404,        "message": "Package not found: com.flutterflow.appname.",        "status": "NOT_FOUND"    }}
```

## How to resolve this issue?

### First time project deployment

To resolve this issue for first time project deployme to play sore, you will need to download the AAB that was generated and manually upload it to paystore. This is required for teh initial first time deployment, after that the subsiquest deployment should go on without any disruption or the same error being through 

- Click on the button marked "AAB" to download the build.

- Open your Play Store account under the registered project, and upload it as a release depending on the track you are uploading the build to.

    ![](../../assets/20250430121330484821.png)

### Package Id update 
To resolve this issue, please follow the steps below:

- You'll need to Regenerate the config files from FlutterFlow. To do this, open your app in **FlutterFlow** and then click on **Settings** **&gt;** **Firebase**.​
    ![](../../assets/20250430121330727549.png)

- Here, Click on the **Regenerate Config Files **button, Enter the new package name and then Click on **Generate File.**​
    ![](../../assets/20250430121331069027.png)

This issue should now be resolved. You can now re-deploy to confirm that the issue has been fixed.

## Issue was not resolved after following the given steps

If you are deploying from FlutterFlow and still getting this error after following all the steps outlined above, then please report this issue to support via Chat or Email at support@flutterflow.io.

​