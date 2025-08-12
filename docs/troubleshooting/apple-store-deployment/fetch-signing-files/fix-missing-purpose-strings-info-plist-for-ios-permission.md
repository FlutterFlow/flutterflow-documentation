---
keywords: ['permissions', 'info.plist', 'app store', 'photo library', 'runner']
slug: /troubleshooting/apple-store-deployment/fix-missing-purpose-strings-info-plist-for-ios-permission
title: Fix Missing Purpose Strings in Info.plist for iOS Permissions
---

# Fix Missing Purpose Strings in Info.plist for iOS Permissions

When uploading your iOS app to the App Store, you may encounter the following error:

  ```
  ITMS-90683: Missing purpose string in Info.plist - The Info.plist file for the “Runner.app” bundle should contain a NSPhotoLibraryUsageDescription key.
  ```

  This error occurs when your app (or any third-party SDKs it uses) accesses sensitive user data without providing a **purpose string** in the `Info.plist` file. Apple requires a **clear, user-facing explanation** for each type of data access to ensure transparency and protect user privacy.

Any access to protected user resources—like the **camera**, **microphone**, **location**, **photo library**, or **contacts**—must be explained in the app’s `Info.plist` using a purpose string (e.g., `NSCameraUsageDescription`).

Even if **you are not directly using these APIs**, third-party libraries might be, and Apple still requires that the purpose be declared.

Follow the steps below to resolve this issue:

1. **Identify Required Permissions**

Review your app’s features and any integrated packages. Commonly required permissions include:

- **NSCameraUsageDescription** — camera access  
- **NSMicrophoneUsageDescription** — microphone use  
- **NSLocationWhenInUseUsageDescription** — location access  
- **NSPhotoLibraryUsageDescription** — photo library access  
- **NSContactsUsageDescription** — contacts access  

2. **Add Purpose Strings in FlutterFlow**

  FlutterFlow provides an easy way to manage iOS permissions.

  - **Open Permissions Settings**
    - Navigate to **Settings & Integrations > Project Setup > Permissions** in your FlutterFlow project.

      ![](../../assets/20250430121227744579.png)

  - **Enable Required Permissions**

    - Toggle on any permissions your app or SDKs require.

  - **Add Clear Usage Descriptions**

    - For each enabled permission, write a **clear, user-facing description**.

      Example for Photo Library:

      ![](../../assets/20250430121227989568.png)

      ```
      This app requires access to your photo library to allow image uploads.
      ```

3. **Save Changes and Rebuild**

  - After entering all required descriptions, **save your changes**.
  - **Rebuild and re-upload** your app to the App Store.

**Example Error: Photo Library**

If you see this specific error:

  ```
  ITMS-90683: Missing purpose string in Info.plist - The Info.plist file for the “Runner.app” bundle should contain a NSPhotoLibraryUsageDescription key.
  ```

  Follow the same steps above, and be sure to:

    - Enable the **Photo Library** permission in FlutterFlow.
    - Provide a **specific and friendly message** (e.g., "We need access to your photo library so you can upload profile pictures.")

**Best Practices**
  - Use **clear, honest, and user-friendly** language.
  - Avoid vague terms like “app functionality.”
  - If your app supports multiple languages, make sure to **localize your descriptions** as required by Apple.

**Test Before Submitting**

  - Run your app on a **physical iOS device**.
  - Trigger each permission prompt to verify that:
    - The prompt appears correctly.
    - The description matches your purpose string.
    - The functionality works as expected.

If the issue still persists after completing these steps, contact [FlutterFlow Support](mailto:support@flutterflow.io).
