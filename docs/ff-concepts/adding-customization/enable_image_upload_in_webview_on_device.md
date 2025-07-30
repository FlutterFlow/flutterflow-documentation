---
keywords: ['permissions', 'upload', 'webview', 'image']
slug: enable-image-upload-in-webview-on-real-devices
title: Enable Image Upload in WebView on Real Devices
---

## Enable Image Upload in WebView on Real Devices

Image uploads may function correctly in Run/Test mode but fail on real devices due to missing runtime permissions required for accessing the photo library. This document outlines the steps to resolve this issue.

In web preview mode, the browser handles permissions, allowing image uploads to proceed without specific configurations. However, when deploying to physical Android or iOS devices, explicit runtime permissions are necessary to access the device's photo library. If image upload functionality is embedded within a **WebView**, FlutterFlow does not automatically detect this requirement and therefore does not request the required permissions during the build process.

To enable image uploads from a **WebView** on a physical device, follow these steps:

1.  **Enable Photo Library Permission:**

      Navigate to **Settings > [Permissions](/settings-and-integrations/mobile-deployment/permissions)** in your FlutterFlow project and enable the **Photo Library** permission.

         ![](../assets/20250430121337121891.png)

2.  **Request Permission at Runtime:** 
      Before initiating the image upload action inside the **WebView**, add a **[Get Permission](/actions/widget-actions/permissions/get-permission)** action. Configure this action to explicitly request access to the **Photo Library**. This action should typically be placed on a button tap or an equivalent user interaction that precedes the upload.

         ![](../assets/20250430121337385659.png)

3.  **Reinstall the Application:** 

      After adding and configuring the permission, it is crucial to re-deploy your application to the device:
         * Uninstall any existing versions of the app from the target device.
         * Clear the app's cache (if applicable).
         * Reinstall the updated application. This step ensures that the permission prompt appears when the app is launched for the first time or when the `Get Permission` action is triggered.

            :::warning
            If the permission dialog does not appear on the first launch or when the `Get Permission` action is triggered, the app will not have access to the photo library, and uploads inside the **WebView** will fail. Users may need to manually enable the permission through their device's app settings.
            :::

Once permissions are correctly granted, image uploads initiated from within the **WebView** will function as expected on physical devices.
