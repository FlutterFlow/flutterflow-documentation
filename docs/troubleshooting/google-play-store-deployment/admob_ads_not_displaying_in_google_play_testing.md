---
keywords:
  - testing
  - configuration
  - display
slug: >-
  /troubleshooting/google-play-store-deployment/admob-ads-not-displaying-in-google-play-testing
title: AdMob Ads Not Displaying in Google Play Testing
description: >-
  If your AdMob ads are not showing during Open Testing via the Google Play
  Store, the issue is often tied to AdMob configuration, app permissions, or
  settings in the Google Play...
tags:
  - FlutterFlow
  - Troubleshooting
  - Google Play Store Deployment
last_verified: 2026-09-02
---
# AdMob Ads Not Displaying in Google Play Testing

If your AdMob ads are not showing during **Open Testing** via the Google Play Store, the issue is often tied to AdMob configuration, app permissions, or settings in the Google Play Console. Follow the steps below to ensure ads display correctly.

:::info[Prerequisites]
- An active **AdMob** account is set up.
- Your FlutterFlow project is linked to **AdMob**.
- The app is uploaded to **Google Play Console** under an Open Testing track.
:::

- **Use Test Ads During Development**

    Always use test ads during development to avoid policy violations or ad-serving issues:
        - Refer to the **[Google AdMob Test Ads](https://developers.google.com/admob/android/test-ads)** guide for appropriate test ad unit IDs.
        - Use Google's test ad units or mark the device as a test device. Do not repeatedly click live ads you own; invalid traffic can suspend ad serving.

- **Verify AdMob Account Setup**

    1. Go to the **AdMob Console**.
    2. Confirm that your app is registered and linked to your Google Play listing.
    3. Ensure the app’s release status in AdMob matches its status in the **Google Play Console**.

        :::note
        If your app is listed as `not released` in AdMob, live ads may not load during testing.
        :::

- **Declare Use of Advertising ID**

    Apps targeting **Android 13 (API 33)** or above must complete Google Play's Advertising ID declaration consistently with whether the final manifest includes the permission:

    1. Open the **Google Play Console**.
    2. Go to **Policy > App Content**.
    3. Select **Advertising ID** and complete the required form.

        :::warning
        Failing to declare the Advertising ID may result in ads not showing during testing or after release.
        :::

- **Confirm Ad Unit Configuration in FlutterFlow**

    1. Open your project in **FlutterFlow**.
    2. Navigate to **Settings > AdMob Integration**.
    3. Confirm that the correct **Ad Unit IDs** are used.
    4. Ensure Ad widgets are connected to the appropriate ad units.

- **Test in the Correct Environment**

    - Use a physical device instead of an emulator when possible.
    - Ensure the device has a strong internet connection.
    - Avoid using VPNs or battery optimization tools that may interfere with ad delivery.

- **Add app-ads.txt (Optional)**

    Setting up an `app-ads.txt` file is optional but recommended for better ad quality:
        - Follow the **[official guide](https://support.google.com/admob/answer/9363762?hl=en&ref_topic=9675856&sjid=8136071085841576181-EU)** to set it up.

- **Wait for Ad Approval**

    Even after the app is released:

    - Live ads may take several days to appear due to the review process and inventory matching.
    - This delay is expected.

If ads still aren’t appearing, contact FlutterFlow Support at [support@flutterflow.io](mailto:support@flutterflow.io)

Before sharing diagnostics, redact device identifiers, ad request IDs tied to users, account data, and unreleased app details. Check the AdMob policy center and returned load error; lack of inventory, consent, account review, and configuration errors require different fixes.

## Related documentation

See [Declare Advertising ID for Android 13+ in Play Console](/troubleshooting/google-play-store-deployment/declare-advertising-id-android-13-play-console) for a related FlutterFlow workflow.
