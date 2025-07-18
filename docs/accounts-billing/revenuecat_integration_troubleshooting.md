---
keywords: ['testing', 'revenuecat', 'error']
slug: revenuecat-integration-guide
title: Resolve RevenueCat Integration Errors
---

# Resolve RevenueCat Integration Errors

This article outlines common issues encountered during RevenueCat integration and provides steps to ensure correct setup and testing of in-app subscriptions.

:::info[Prerequisites]
- Your app must be registered in RevenueCat.
- A valid FlutterFlow project with RevenueCat integration enabled.
- Subscription products must be set up in Google Play Console and App Store Connect.
:::

**Steps to Set Up and Verify RevenueCat Integration:**

1. Publish App for Store-Based Testing

    RevenueCat in-app purchases require apps to be submitted to the app stores.

    - Google Play Store

        - Create and submit a release via **Google Play Console**.
        - Use the **Internal Testing** track for quicker access.
        - Upload the APK or App Bundle and submit it for review.
        - Ensure testers are added to your internal test track.

    - Apple App Store

        - Submit the app using **App Store Connect**.
        - Use **TestFlight** to test without a full App Store review.
        - Ensure the app is built and uploaded using Xcode.

2. **Configure Subscription Products**

    - Create unique product identifiers in Google Play Console and App Store Connect.
    - Link these products to **Entitlements** and **Offerings** inside RevenueCat.
    - Follow the **[RevenueCat Launch Checklist](https://docs.revenuecat.com/docs/launch-checklist)** for detailed setup.

3. **Set Up RevenueCat Dashboard**

    - Register your app on the **RevenueCat dashboard**.
    - Add product identifiers that match those in the app stores.
    - Ensure correct **Entitlements**, **Products**, and **Offerings** are linked.
    - Connect app store credentials (API access for App Store Connect, service account for Google Play).

4. **Enable Integration in FlutterFlow**

    - Open **Settings & Integrations → RevenueCat** in FlutterFlow.
    - Enter the correct **RevenueCat API keys** for both Android and iOS.
    - Match the entitlement names and product IDs exactly.

5. **Test in Native Environments Only**

    RevenueCat does **not** function in **FlutterFlow Test Mode** or **Run Mode**.

    - **Emulator or Simulator Testing**

        - **Android**: Use an emulator with Google Play Services and a signed-in tester account.
        - **iOS**: Use a simulator with a sandbox Apple ID.

    - **Real Device Testing**

        - Test in **Google Play Internal Testing** or **TestFlight**.
        - This provides the most accurate representation of production environments.

    - **Check Logs and Errors**

        - Use **TestFlight logs** or **Crashlytics** to debug errors.
        - Enable **debug logging** in the `purchases_flutter` plugin for insights.
        - Ensure product and entitlement identifiers are consistent.

6. **Common Causes of Integration Errors**

    - Mismatched product identifiers between stores, RevenueCat, and FlutterFlow.
    - Store credentials not linked or expired in RevenueCat.
    - Testing in unsupported environments (e.g., web or preview mode).

    :::tip
    For best results:
    - Keep identifiers consistent across all platforms.
    - Test only in environments that reflect production.
    - Regularly update the `purchases_flutter` package.
    :::

:::note
RevenueCat supports subscriptions only in published or store-signed environments. Web or test mode usage will not simulate purchases correctly.
:::

:::info[Additional Resources]
- [**RevenueCat Integration Docs**](/integrations/payments/revenuecat/)
- [**In-App Subscriptions Using RevenueCat**](https://blog.flutterflow.io/in-app-subscriptions-using-revenue-cat/)
- [**RevenueCat Launch Checklist**](https://docs.revenuecat.com/docs/launch-checklist)
:::