---
keywords: ['permissions', 'error', 'missing']
slug: /troubleshooting/apple-store-deployment/fix-missing-purpose-string-info-plist
title: Fix Missing Purpose String in Info.plist
---

# Fix Missing Purpose String in Info.plist

When submitting an iOS app to the App Store, you may encounter the following error:

   ```text
   ITMS-90683: Missing Purpose String in Info.plist - Your app's code references one or more APIs that access sensitive user data. The app’s Info.plist file should contain a [permission] key with a user-facing purpose string explaining clearly and completely why your app needs the data. If you're using external libraries or SDKs, they may reference APIs that require a purpose string. While your app might not use these APIs, a purpose string is still required.
   ```

:::info[Prerequisites]
You must have access to your FlutterFlow project and an active Apple Developer account to complete the steps below.
:::

This error occurs when your app references APIs that access sensitive user data, such as photos, the microphone, or location. Apple requires a **purpose string** for each permission in the `Info.plist` file. This applies even if the reference comes indirectly through third-party libraries or SDKs.

Follow these steps to fix the `ITMS-90683` error and provide the necessary permissions:

1. **Identify Required Permissions**

   - Review your app features that request access to sensitive data (e.g., photos, location, camera, microphone).

2. **Open the Permissions Section**

   - Navigate to **Settings & Integrations** in your FlutterFlow project.
   - Select the **Permissions** tab.

      ![](../../assets/20250430121321604645.png)

3. **Add Purpose Strings**

   - For each enabled permission, provide a clear and complete explanation of why your app needs access.
   - These strings will be included in your app’s `Info.plist` file and shown to users during runtime prompts.

   **Examples**:

   - `NSPhotoLibraryUsageDescription`: *"This app requires access to your photo library to allow image uploads from your device."*
   - `NSMicrophoneUsageDescription`: *"Microphone access is needed to record voice notes."*

      ![](../../assets/20250430121321961623.png)

4. **Review Apple’s Privacy Guidelines**

   - Ensure all purpose strings comply with **[Apple’s official documentation](https://developer.apple.com/documentation/uikit/protecting_the_user_s_privacy/requesting_access_to_protected_resources)**.

5. **Test Permission Prompts**

   - Run your app and verify that the correct permission prompts appear and display the purpose string.

6. **Submit Your App**

   - Once all purpose strings are included and verified, proceed to resubmit your app to the App Store.

      :::tip
      Not sure which permissions your app uses? Consider scanning your app’s features and external packages for potential access to sensitive APIs.
      :::

      Providing accurate purpose strings is essential for App Store approval and user trust. Even if the app indirectly accesses sensitive APIs through libraries, Apple mandates a valid and user-friendly explanation.

      Clear purpose strings also help users understand why permissions are needed, leading to better opt-in rates and a smoother onboarding experience.


:::info[Additional Resources]
- [Apple's Permission Guidelines](https://developer.apple.com/documentation/uikit/protecting_the_user_s_privacy/requesting_access_to_protected_resources)
- [FlutterFlow Permissions Setup](/settings/permissions)
:::
