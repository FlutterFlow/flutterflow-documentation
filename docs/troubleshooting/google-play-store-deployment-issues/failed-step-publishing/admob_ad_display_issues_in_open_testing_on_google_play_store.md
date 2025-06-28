---
keywords: ['testing', 'configuration', 'display']
slug: /admob-ads-not-displaying-in-google-play-testing
title: AdMob Ads Not Displaying in Google Play Testing
---
# AdMob Ads Not Displaying in Google Play Testing

:::info[Prerequisites]
Before you proceed, ensure:

- You have an active **AdMob** account.
- Your app is properly linked to **AdMob**.
- Your app is uploaded to **Google Play Console** under Open Testing.
:::

If your AdMob ads are not displaying during Open Testing on the **Google Play Store**, this may be due to configuration issues or missing approvals.

---

**Use Test Ads During Testing**

    When testing your app, always use **test ads** to avoid policy violations or issues during the testing phase. **Live ads** are designed to function primarily in production.

    For more information, refer to **[Google AdMob Test Ads](https://developers.google.com/admob/android/test-ads)**.


**Verify AdMob Account Configuration**

    Check that:

        - Your app is correctly registered in **AdMob**.
        - The app’s release status in AdMob reflects its actual status on **Google Play Console**.

    If your app is marked as **not released** in AdMob, live ads may not appear during testing.

**Declare Advertising ID in Google Play Console**

    For apps targeting **Android 13 (API 33)** or higher:

        1. Navigate to your app in **Google Play Console**.
        2. Under **App Content**, declare the use of the **Advertising ID**.
        3. Provide all required information accurately.

        Failure to declare this can prevent ads from loading during testing or after release.

:::tip[Additional Configuration Tips]

- **Connectivity:** Ensure stable internet connectivity on the device.
- **Ad Unit Configuration:** Double-check that your **Ad Unit IDs** are correct in FlutterFlow.
- **APP-ADS.TXT:**  
  While optional, setting up an **app-ads.txt** file can improve ad quality and protect against unauthorized ad traffic. **[Learn more](https://support.google.com/admob/answer/10299703)**.
:::

:::info[Ad Approval Process]
Even after moving your app to production and receiving **AdMob** approval, it can take a few days for live ads to start appearing fully. This delay is normal.
:::

If you continue to experience issues, please contact **FlutterFlow Support** at [support@flutterflow.io](mailto:support@flutterflow.io).