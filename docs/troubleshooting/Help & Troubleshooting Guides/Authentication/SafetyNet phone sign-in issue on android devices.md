---
keywords: ['android', 'signing', 'release']
author: Unknown
created_at: '1677589472'
slug: /safetynet-phone-sign-in-issue-on-android-devices
title: SafetyNet phone sign-in issue on android devices
updated_at: '1677589768'
url: https://intercom.help/flutterflow/en/articles/7038250-safetynet-phone-sign-in-issue-on-android-devices
---
# SafetyNet phone sign-in issue on android devices

It looks like you are experiencing an issue with using the Firebase Phone Authentication method. To troubleshoot this issue, there are a few things you can try:

Make sure you have correctly configured the Firebase Phone Authentication method in your app. This includes setting up a project in the Firebase console and adding the necessary dependencies to your app.

Check that you have properly implemented the phone authentication flow in your app. This includes prompting the user to enter their phone number, sending a verification code to the user's phone, and verifying the code that the user enters.

Make sure that you have correctly configured the safety net and reCAPTCHA checks in your app. This may involve adding the necessary dependencies and configuring the keys in your app.

If you are using an emulator to test your app, try testing on a physical device instead. Emulators may not always behave the same as physical devices, and this could be causing the issue you are experiencing.

If you are still experiencing issues, try reviewing the documentation and tutorials provided by Firebase to ensure that you have correctly implemented the phone authentication flow in your app.

Solution: Read more information here​
![](../../assets/20250430121259958091.png)​
To use phone number authentication, Firebase must be able to verify that phone number sign-in requests are coming from your app. There are two ways Firebase Authentication accomplishes this:
**1- SafetyNet**:If a user has a device with Google Play Services installed, and Firebase Authentication can verify the device as legitimate with Android SafetyNet, phone number sign-in can proceed.
To enable SafetyNet for use with Firebase Authentication:

In the Google Cloud Console, enable the Android Device Verification (DEPRECATED) API for your project. The default Firebase API Key will be used, and needs to be allowed to access the DeviceCheck API.

If you haven't yet specified your app's SHA-256 fingerprint, do so from the Settings Page of the Firebase console. Refer to Authenticating Your Client for details on how to get your app's SHA-256 fingerprint.

The SafetyNet Attestation API is deprecated and has been replaced by the Play Integrity API. We are working on a migration path to the Play Integrity API, which we expect to make available within the SafetyNet deprecation timeline. After 31 January 2023, you will not be able to enable the Android Device Verification (SafetyNet) API in the Google Cloud Console. To enable the Android Device Verification (SafetyNet) API in a new project after Jan 31, 2023, submit the SafetyNet Attestation API Onboarding form.
SafetyNet has a default quota that is sufficient for most apps. See SafetyNet Quota Monitoring for more information.
2- **reCAPTCHA verification**:In the event that SafetyNet cannot be used, such as when the user does not have Google Play Services support, or when testing your app on an emulator, Firebase Authentication uses a reCAPTCHA verification to complete the phone sign-in flow. The reCAPTCHA challenge can often be completed without the user having to solve anything. Please note that this flow requires that a SHA-1 is associated with your application. This flow also requires your API Key to be unrestricted or allow listed for "your-project-name.firebaseapp.com".
The reCAPTCHA flow will only be triggered when SafetyNet is unavailable or your device does not pass suspicion checks. Nonetheless, you should ensure that both scenarios are working correctly.​
Next:
**Release mode**If you're releasing your app to the Play Store, you must add the SHA certificate fingerprints from the Play Console To get the keys for the release app, navigate to **Play Store Console &gt; Your project &gt; Release Management –&gt; App Signing** and copy the **SHA-1** and **SHA-256** keys.

![](../../assets/20250430121300291238.png)