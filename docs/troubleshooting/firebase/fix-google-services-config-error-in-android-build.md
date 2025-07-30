---
keywords: ['firebase', 'error', 'failed']
slug: /fix-google-services-config-error-in-android-build
title: Fix Google Services Config Error in Android Build
---

# Fix Google Services Config Error in Android Build

This article explains how to resolve the `processReleaseGoogleServices` error that can occur when deploying an Android app built with FlutterFlow.

:::info[Prerequisites]
Ensure your Firebase project is set up and you have access to the **google-services.json** file for your Android app.
:::

```bash
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:processReleaseGoogleServices'.
> No matching client found for package name 'app.app.app'
```

This error typically occurs when the package name defined in your FlutterFlow project does not match the package name in your Firebase configuration file.

Follow the steps below to resolve this error:

1. **Open Firebase Settings in FlutterFlow**  
   In FlutterFlow, go to **Settings > Firebase**.

2. **Regenerate Config Files**  
   - Click the **Regenerate Config Files** button.  
   - Enter the correct package name used in your project.  
   - Click **Generate File**.

      ![](../assets/20250430121329008679.png)

3. **Re-upload the Config File (If Needed)**  
   If not automatically updated, manually upload the new `google-services.json` file.

    ![](../assets/20250430121329460301.png)

4. **Rebuild and Deploy**  
   Run the build again to confirm the issue is resolved.

:::warning
Make sure the `package name` in Firebase matches **exactly** with the one in your FlutterFlow project — including case sensitivity and dot placement. Any mismatch will cause this build error.
:::