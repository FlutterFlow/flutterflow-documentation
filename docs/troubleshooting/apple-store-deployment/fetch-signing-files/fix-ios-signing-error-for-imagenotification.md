---
keywords: ['signing', 'ios', 'error']
slug: /troubleshooting/app-store-deployment/fix-ios-signing-error-for-imagenotification
title: Fix iOS Signing Error for ImageNotification
---

# Fix iOS Signing Error for ImageNotification

When building or deploying an iOS app, you may encounter the following error message:

    ```text
    Signing for "ImageNotification" requires a development team
    ```

This issue typically occurs when the signing configuration for the `ImageNotification` service extension is incomplete or misconfigured in Xcode or FlutterFlow.

The error occurs when Xcode or FlutterFlow attempts to compile and sign the `ImageNotification` extension without a valid development team or properly configured provisioning profile. This step is necessary to ensure that all targets in your iOS app, including extensions, are signed correctly.

Follow the steps below to resolve this issue:

1. **Use a Valid Apple Developer Account**

    Ensure you are signed in with an **active paid Apple Developer account**. Free accounts do not support all signing and deployment capabilities.

2. **Select a Development Team in Xcode**

    If working locally:

        - Open your project in Xcode.
        - Go to the **Signing & Capabilities** tab for the `ImageNotification` target.
        - Select a valid **development team** from the dropdown.

3. **Confirm Provisioning Profiles**

    Make sure the provisioning profiles used:

        - Match the selected development team
        - Are correctly configured for all targets, including the service extension

4. **Update iOS Deployment Settings in FlutterFlow**

    If you're deploying via FlutterFlow:

        - Go to **App Settings > Mobile Deployment > App Store**
        - Set the correct **Development Team ID** in the iOS configuration