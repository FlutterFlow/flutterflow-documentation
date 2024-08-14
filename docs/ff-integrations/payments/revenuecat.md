---
slug: /integrations/payments/revenuecat
title: RevenueCat
description: Learn how to integrate RevenueCat payments in your FlutterFlow app.
tags: [RevenueCat, Payments, Integration]
keywords: [FlutterFlow, RevenueCat, Payments, Integration]
---

# RevenueCat

[RevenueCat](https://www.revenuecat.com/) simplifies implementing in-app purchases and subscriptions by handling all purchase validation operations.

:::warning[Pub.Dev package and Limitations]
The [**underlying package for RevenueCat**](https://pub.dev/packages/purchases_flutter) does not support web. Any functionality related to in-app purchases or subscriptions managed through RevenueCat will not be available on web platforms.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/z3Fw57EiyR05PY6OPMG6?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

Integrating the RevenueCat in your app comprises the following steps:

1. [Setup RevenueCat](#1-setup-revenuecat)
2. [Enable RevenueCat in FlutterFlow](#2-enable-revenuecat-in-flutterflow)
3. [Retrieving in-app purchases and subscription details](#3-retrieving-in-app-purchases-and-subscription-details)
4. [Add RevenueCat actions](#4-add-revenuecat-actions)
5. [Testing](#5-testing)
6. [Launch](#6-launch)

## 1. Setup RevenueCat

To set up the RevenueCat, follow these steps carefully:

1. Sign up for a new RevenueCat account [here](https://app.revenuecat.com/).
2. [Create a project](https://www.revenuecat.com/docs/getting-started/quickstart#%EF%B8%8F-create-a-project), [add your app](https://www.revenuecat.com/docs/getting-started/quickstart#%EF%B8%8F-add-an-app--platform), and ensure that you [add service credentials](https://www.revenuecat.com/docs/getting-started/quickstart#%EF%B8%8F-service-credentials) to help RevenueCat communicate with the app stores on your behalf.
3. [Create subscriptions](https://www.revenuecat.com/docs/getting-started/quickstart#%EF%B8%8F-store-setup) in the respective stores.
    1. While creating subscriptions in Google Play Console, if you see a message saying '***Your app doesn't have any in-app products yet**'* like in this picture, follow the steps below:
    <p></p>
    ![error-while-creating-sub-in-play-console.avif](imgs/error-while-creating-sub-in-play-console.avif)
    
    1. Return to FlutterFlow and navigate to **Settings & Integrations >** **In App Purchases & Subscriptions >** **RevenueCat**.
    
    2. Switch on the **Enable RevenueCat**. For now, just enter any random string as your API Key (eg. `testkey`). We’ll update this later.
    
    3. Now, from the toolbar menu, click **Download APK** 
    
    4. In the Play Console, create a [Closed testing](https://play.google.com/console/about/closed-testing/) track and create a new release.
    
    5. Upload your **App Bundle** or **APK**, enter the release name, and create the release.
    
    6. Open the **Subscriptions** tab again. It should let you manage subscriptions now.
4. [Create Products and Entitlements in RevenueCat](https://www.revenuecat.com/docs/getting-started/quickstart#%EF%B8%8F-configure-products-and-entitlements-in-revenuecat).

## 2. Enable RevenueCat in FlutterFlow

To enable RevenueCat in FlutterFlow, follow the steps below:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/sKSpoidCReEDlikhUbs3?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

## 3. Retrieving in-app purchases and subscription details

To display the in-app purchases and subscription details, such as price, description, etc., inside the UI elements, you need to retrieve this information from RevenueCat.

Here is an example of retrieving monthly subscription details:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/r5RpyXZaWp7n6DTikrHx?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

## 4. Add RevenueCat actions

To manage in-app purchases and subscriptions inside your FlutterFlow app, you have to use the RevenueCat Actions. Below are the types of RevenueCat actions:

- **Paywall**
- **Purchase**
- **Restore Purchases**

### Paywall [Action]

This action checks whether a user has purchased an item. If not, you can open the Paywall (asking to buy an item or purchase a subscription).

Follow the steps below to see if a user is subscribed and take action accordingly.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/0m0oeM9PRbe7e5JbapCf?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

### Purchase [Action]

This action allows you to purchase the item. Here’s how you add it:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/95HnVG5vM9J7gi73vjxW?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

### Restore Purchases [Action]

Using this action, you can allow users to re-activate the subscription they have already paid for. This is helpful when a user has reinstalled the app or logged in to a new device.

:::info

- A good practice is to allow users to manually restore the purchase by showing a button or text (maybe on a paywall/settings page).
- If you provide this option, please check [**How RevenueCat should respond to restore behavior**](https://www.revenuecat.com/docs/restoring-purchases#restore-behavior).

:::

<figure>
    ![adding-restore-purchase-action.avif](imgs/adding-restore-purchase-action.avif)
  <figcaption class="centered-caption">Adding action to restore purchase</figcaption>
</figure>


## 5. Testing

You can test your subscriptions using sandbox environments, which simulate real store behavior without incurring costs. [This document](https://www.revenuecat.com/docs/test-and-launch/sandbox) provides detailed guidelines for testing purchases on [Android](https://www.revenuecat.com/docs/test-and-launch/sandbox/google-play-store) and [iOS devices](https://www.revenuecat.com/docs/test-and-launch/sandbox/apple-app-store).

## 6. Launch

Before launching your app to production make sure you go through the **Launch Checklist** of RevenueCat:

[In-App Purchase Launch Checklist – RevenueCatRevenueCat](https://docs.revenuecat.com/docs/launch-checklist)

## FAQs

<details>
<summary>I don't see offerings or products</summary>
<p>
If you're testing in the sandbox and the products are not retrieved from Apple/Google, it's likely a configuration issue. To resolve this, ensure the following:

1. The product identifier set in RevenueCat matches exactly with the store.
2. You're testing on a physical device and not a simulator.
3. The bundle ID in Xcode [iOS] or package name [Google] matches what's in App Store Connect or Google Play Developer console.

For iOS only, ensure that products are in the 'Ready To Submit' or 'Approved' state, you've signed your 'Paid Applications Agreement', and you're not using a StoreKit Configuration file.

For Google only, ensure that the subscription product is in the Active state, your app is published on a closed track, and you've added a tester.

See more details [here](https://community.revenuecat.com/sdks-51/why-are-offerings-or-products-empty-124).
</p>
</details>

