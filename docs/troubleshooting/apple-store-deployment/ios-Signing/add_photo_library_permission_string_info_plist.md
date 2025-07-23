---
keywords: ['photo library', 'info.plist', 'permission', 'runner']
slug: troubleshooting/apple-store-deployment/add-photo-library-permission-string-info-plist
title: Add Photo Library Permission String to Info.plist
---

# Add Photo Library Permission String to Info.plist

When uploading your app to the App Store, you may receive the following error:

   ```text
   ITMS-90683: Missing purpose string in Info.plist - The Info.plist file for the “Runner.app” bundle should contain a NSPhotoLibraryUsageDescription key.
   ```

   This error indicates that your app references the **Photo Library API** or a related entitlement but does not include a description of why access is needed. Apple requires a clear, user-facing message in the `Info.plist` file to explain the purpose of this data usage.

:::info[Prerequisites]
Ensure your FlutterFlow project is connected to the App Store and you are preparing for mobile deployment.
:::

The issue occurs when your app, or one of its dependencies, uses an API that accesses the user's photo library without providing a usage description in the `Info.plist` file. Even if your app does not directly use this API, Apple still requires a reason to be declared.


Follow the steps below to resolve this error:

1. **Open Permissions Configuration**

   - Navigate to **Settings & Integrations**.
   - Scroll to the **Project Setup** section.
   - Click on **Permissions**.

      ![](../../assets/20250430121227744579.png)

2. **Add a Usage Description**

   - Locate the **Photo Library** permission.
   - Enter a user-facing explanation in the usage description field (e.g., “This app requires access to your photo library to allow image uploads.”).

      ![](../../assets/20250430121227989568.png)

3. **Save and Rebuild**

   - After saving the updated permissions, rebuild and redeploy your app to the App Store.

   :::tip
   Make sure your description is **clear and localized** if your app supports multiple languages. Apple requires both the base description and localized versions for supported locales.
   :::


If the issue persists after adding the permission string:

   - Verify that all required keys are present in `Info.plist`.
   - Ensure third-party packages are not requesting additional permissions that are undocumented.



:::info[Additional Resources]
- **[Apple's Documentation on Requesting Access to Protected Resources](https://developer.apple.com/documentation/uikit/protecting_the_user_s_privacy/requesting_access_to_protected_resources)**
- **[App Store Deployment Guide](/deployment/app-store)**
:::