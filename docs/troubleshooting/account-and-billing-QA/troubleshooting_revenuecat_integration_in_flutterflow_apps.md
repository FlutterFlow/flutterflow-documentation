---
keywords: ['testing', 'revenuecat', 'error']
slug: /troubleshooting-revenuecat-integration-in-flutterflow-apps
title: Troubleshooting RevenueCat Integration in FlutterFlow Apps
---
# Troubleshooting RevenueCat Integration in FlutterFlow Apps

Integrating RevenueCat with FlutterFlow adds robust in-app purchasing and subscription management to your mobile applications. However, developers may encounter various issues during the integration process. 

This article provides a structured troubleshooting guide to ensure a seamless integration, covering prerequisites, common pitfalls, and how to resolve specific problems.​​

## App Publishing Check

### Issue:
The app must be published on the Google Play Store and Apple App Store to test RevenueCat features fully.​

Why You May Have Faced This:

Publishing your app is a prerequisite for RevenueCat integration because it needs to communicate with the actual store's APIs to manage transactions and subscriptions.

### How to Fix It:

For Google Play Store:

- Create and submit a release in the Google Play Console.

- Utilize the Internal Testing track for quicker deployment and testing.

- Upload your APK or App Bundle and submit it for review.

- Use this video to set up a Flutter environment on a macOS device.

For Apple App Store:

- Prepare and submit your app in FlutterFlow.

- Deploy your app and configure it in App Store Connect.

- Use TestFlight for beta testing without a full App Store review.

Refer to this [video tutorial](https://youtu.be/mMeQhLGD-og?si=9GW39cvNNYvV9it4) for setting up a Flutter environment on Windows.


## Subscription Products Creation

### Issue:

Subscription products may not be correctly created in the app stores, causing issues with RevenueCat integration.​

Why You May Face This:

Each subscription product requires careful setup within the respective store's console, including unique identifiers and pricing configurations.

How to Fix It:

- Ensure that subscription products are correctly created in both Google Play Console and App Store Connect.

- Follow RevenueCat's documentation for Android and iOS product setup.

## RevenueCat Setup

### Issue:

RevenueCat may not be properly set up, causing issues with product offerings or actions not triggering as expected.

Why You May Face This:

Improper configuration in RevenueCat can lead to failed transactions or incorrect entitlement deliveries.​

How to Fix It:

- Ensure that the app is registered with RevenueCat.

- Check that Products, Entitlements, and Offers are correctly configured in RevenueCat.

- Connect RevenueCat to both app stores with the correct credentials.

## FlutterFlow Integration

### Issue:

The RevenueCat integration may not function if not enabled or configured properly in FlutterFlow.​

How to Fix It:

- Enable RevenueCat in the FlutterFlow project settings.

- Enter the correct API keys for both Play Store and App Store.

## Testing and Environment Limitations

### Issue:

RevenueCat integration does not work in web, test, or run mode within FlutterFlow. This can lead to confusion when testing in-app purchase functionality.

Why You May Face This:

RevenueCat's services are designed to interact with mobile app stores (Google Play and Apple App Store), which requires a native environment that is not available in web or test modes.​

How to Fix It:
To ensure proper testing of RevenueCat functionalities, follow these steps:

- **Use an Emulator/Simulator**:

    For Android, use an emulator that has Google Play Services installed. Ensure that you are signed in with a Google account that has been added as a tester in the Google Play Console.

    For iOS, use Xcode's simulator to test the integration. You will need to use a sandbox account configured in App Store Connect for testing in-app purchases.

- **Test on a Real Device**:

    Deploy the app to the Google Play Store or Apple App Store. You may use internal testing tracks or TestFlight for Apple to distribute your app to testers without releasing it to the general public.

    Real device testing allows you to interact with the actual payment and subscription services provided by Google and Apple, giving you the most accurate testing environment.

- **Understanding Testing Limitations**:

    Remember that in-app purchases and subscriptions will not work in FlutterFlow's web, test, or RUN mode because these modes do not support the native in-app purchase functionality that RevenueCat uses.

- **TestFlight Error Logs (if you are testing the iOS version)**:

    When using TestFlight, you have the benefit of accessing error logs directly from your test users. These logs can be critical in identifying issues that may not be present during emulator testing.

    Consult the TestFlight documentation to understand how to access and interpret these logs for troubleshooting any errors that occur during testing.

## Error Analysis

### Issue:

Null value errors or other unexpected behaviors may occur, indicating issues in the setup.

How to Fix It:

- Review the error messages from Crashlytics or during testing to identify misconfigurations.

- Ensure debug logging is enabled in FlutterFlow to get detailed logs for troubleshooting.

## Key Points to Remember

- Always test in an environment that mirrors the production setup.

- Subscription products must have matching identifiers in both RevenueCat and the app stores.

- Debug logging can provide invaluable insights when troubleshooting.

- Regularly review RevenueCat and FlutterFlow documentation and update the **`purchases_flutter`** package as needed.

- Use the RevenueCat Launch Checklist to ensure all settings are correct before going live.

For further guidance and support, make use of FlutterFlow's resources:

[RevenueCat x FlutterFlow Documentation](https://docs.flutterflow.io/integrations/payments/revenuecat/)


[In-App Subscriptions Using RevenueCat and FlutterFlow Blog Post](https://blog.flutterflow.io/in-app-subscriptions-using-revenue-cat/)

:::note 
A clear understanding of the RevenueCat data model and FlutterFlow's integration points is crucial for troubleshooting any issues that arise during the setup process.
:::