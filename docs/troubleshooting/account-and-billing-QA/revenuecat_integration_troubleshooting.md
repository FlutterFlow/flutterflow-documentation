---
keywords: ['testing', 'revenuecat', 'error']
slug: revenuecat-integration-troubleshooting
title: RevenueCat Integration troubleshooting
---
# RevenueCat Integration Troubleshooting

Integrating RevenueCat adds in-app purchasing and subscription management to your mobile app. This article outlines common integration issues and how to resolve them.

**App Publishing Required for Testing:**

RevenueCat requires that your app is published on the Google Play Store and Apple App Store to test in-app purchases.

**Google Play Store**

    - Create and submit a release in Google Play Console.
    - Use the Internal Testing track for faster testing.
    - Upload your APK or App Bundle and submit it for review.
    - Learn how to **[set up a Flutter environment](https://youtu.be/mMeQhLGD-og?si=9GW39cvNNYvV9it4)** on macOS.

**Apple App Store**

    - Submit your app using App Store Connect.
    - Use TestFlight for beta testing without full App Store review.
    - Learn how to **[set up Flutter](https://youtu.be/mMeQhLGD-og?si=9GW39cvNNYvV9it4)** on Windows.

**Subscription Product Setup**

Subscription products must be correctly configured in Google Play Console and App Store Connect:

    - Create unique identifiers for each subscription product.
    - Follow RevenueCat’s documentation for Android and iOS product setup.

**RevenueCat Configuration**

Verify your RevenueCat setup:

    - Register your app in RevenueCat.
    - Ensure Products, Entitlements, and Offers are correctly configured.
    - Connect RevenueCat to both app stores with the correct credentials.

**FlutterFlow Integration Settings**

    - Enable RevenueCat integration in FlutterFlow project settings.
    - Enter the correct API keys for both Play Store and App Store.

**Testing Limitations**

RevenueCat integration works only in native environments. It does not function in web, test, or run mode inside FlutterFlow.

    **Test on Emulator or Simulator**

        - For Android: Use an emulator with Google Play Services and sign in with a tester Google account.
        - For iOS: Use Xcode's simulator with a sandbox Apple ID account.

    **Test on a Real Device**

        - Deploy to Google Play Store Internal Testing track or Apple TestFlight.
        - Real device testing provides the most accurate environment for in-app purchases.

    **TestFlight Error Logs**

        - Access error logs from TestFlight testers to help diagnose issues.

**Error Handling and Analysis**

    - Review error messages from Crashlytics or during testing.
    - Enable debug logging in FlutterFlow for detailed error reports.
    - Ensure that identifiers match across RevenueCat, FlutterFlow, and the app stores.

:::info[Best Practices]
- Always test in an environment that mirrors production.
- Keep subscription product identifiers consistent.
- Regularly update the `purchases_flutter` package.
- Follow the **[RevenueCat Launch Checklist](https://docs.revenuecat.com/docs/launch-checklist)**.
:::

:::info[Additional information]
- [RevenueCat integration documentation](https://docs.flutterflow.io/integrations/payments/revenuecat/)
- [In-app subscriptions using RevenueCat blog post](https://blog.flutterflow.io/in-app-subscriptions-using-revenue-cat/)
:::

:::note
A clear understanding of the RevenueCat data model and integration setup is essential for resolving issues.
:::
