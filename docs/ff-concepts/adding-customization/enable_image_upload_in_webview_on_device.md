---
keywords: ['permissions', 'upload', 'view']
slug: enable-image-upload-in-webview-on-device
title: Enable Image Upload in WebView on Real Devices
---

# Enable Image Upload in WebView on Real Devices

Image uploads may work in Run/Test mode but fail on real devices due to missing runtime permissions related to accessing the photo library.

## Problem

In web preview mode, permissions are managed by the browser, and image upload typically works without issues. However, on physical devices, accessing the photo library requires explicit runtime permissions.

If the image upload is implemented inside a WebView, FlutterFlow does not automatically detect it and therefore does not request the necessary permissions.

## Solution

To allow image uploads from a WebView on a physical device, follow these steps:

1. **Enable the Required Permission**  
   Navigate to **Settings → Permissions** in your FlutterFlow project and enable the **Photo Library** permission.

   ![](../assets/20250430121337121891.png)

2. **Request Permission at Runtime**  
   Before initiating the upload action inside the WebView, use the **Get Permission** action to explicitly request access to the photo library.

   ![](../assets/20250430121337385659.png)

3. **Reinstall the App**  
   After adding the permission:
   - Uninstall the app from the device.
   - Clear the app cache.
   - Reinstall the app to ensure the permission prompt appears.

## Notes

:::warning
If the permission dialog does not appear on first launch, the app will not have access to the photo library, and uploads inside the WebView will fail.
:::

Once permissions are correctly granted, image uploads inside the WebView will function as expected on physical devices.
