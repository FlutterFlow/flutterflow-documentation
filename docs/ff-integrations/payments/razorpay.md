---
slug: /integrations/payments/razorpay
title: Razorpay
description: Learn how to integrate Razorpay in your FlutterFlow app.
tags:
  - FlutterFlow
  - Integrations
  - Payments
keywords:
  - FlutterFlow
  - Razorpay
  - Payments
  - Integration
last_verified: 2026-09-02
---
# RazorPay

[Razorpay](https://razorpay.com/) is a leading online payment gateway widely used by businesses in India to accept and process digital payments securely.

It provides a platform for merchants and businesses to integrate payment solutions into their websites and mobile apps. It allows customers to make online payments using various payment methods such as credit cards, debit cards, net banking, UPI (Unified Payments Interface), and digital wallets.

:::warning
FlutterFlow-hosted web publishing is unavailable when production Razorpay is enabled. Turn off the integration or deploy the exported web app outside FlutterFlow, then verify that your independent deployment and Razorpay account satisfy all applicable eligibility and compliance requirements.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/02447248672c41c29abc5d7477296aa3?sid=10f5f200-c4d0-4160-a81c-356485c60914" title="Razorpay interactive tutorial"
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

:::info[Prerequisites]

Before starting to set up payments, make sure you have,

1. Complete [**Firebase Setup**](../../ff-integrations/firebase/connect-to-firebase-setup.md) for your project.
2. Enabled [**Firebase Authentication**](../authentication/firebase-auth/auth-initial-setup.md) for your project.
3. Upgraded your Firebase project to [**Blaze Plan**](https://firebase.google.com/pricing). We use [**Firebase Cloud Functions**](https://firebase.google.com/docs/functions) to process a transaction.
:::

## Razorpay Integration

Integrating Razorpay in your app comprises the following steps:

1. [Setup Razorpay](#1-setup-razorpay)
2. [Trigger Razorpay payment](#2-trigger-razorpay-payment-action)
3. [Testing](#3-testing)
4. [Releasing to production](#4-releasing-to-production)

### 1. Setup Razorpay

Setting up the Razorpay payments includes creating an account, enabling test mode, acquiring the keys from your Razorpay account, and adding them to your project.

:::warning
You should always try out payments in a test mode before releasing them to your production application. Hence, the instructions below will guide you on how to get the test keys.
:::

Here are the steps:

1. Create a new Razorpay account from [here](https://dashboard.razorpay.com/signup). If you already have an account, [log in](https://dashboard.razorpay.com/signin).
2. Once you are logged in, turn on the **Test Mode**. Test mode helps you simulate the payments without involving real money transactions.
<p></p>

![Enabling test mode](imgs/enable-test-mode.avif)
<p></p>


3. From the left side menu, select **Account & Settings** > Under **Website and app settings** section, select **API keys**.
4. If you're asked to add a website link but your app isn't published yet, you can temporarily publish it to a subdomain using our [web publishing](../../testing-deployment-publishing/publishing/web-publishing.md) feature. Later, you can update this to your actual domain in both FlutterFlow and Razorpay.
<p></p>

![add-website-link](imgs/add-website-link.avif)
<p></p>

5. Click **Generate Test Key** and copy the **Key Id** and **Key Secret**. To regenerate, click on **Regenerate Test Key** and choose how you want to deactivate the old key.
<p></p>

![Generate Test Key](imgs/generate-test-key.webp)

<p></p>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/6ccda9493cae46198027b357afcda521?sid=91f61c5c-50dc-4c77-a5a6-11d613507eb4" title="Razorpay interactive tutorial"
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

6. Return to the FlutterFlow project, navigate to **Settings and Integrations** > **In App Purchases & Subscriptions** > **Razorpay**. Use the toggle to **Enable Razorpay Payments**.
7. Under **Test Credentials**, paste the **Key ID** and **Key Secret** obtained in the previous step.
8. Set your **Business Name**.
9. Click the **Deploy** button.

The Key Secret is a server credential. Enter it only in the dedicated FlutterFlow Razorpay settings so it can be used by the deployed payment functions. Never copy it into App State, client custom code, an API call made directly from the app, assets, or Remote Config. Restrict access to the FlutterFlow project and rotate the secret after suspected exposure.

<p></p>

![deploy](imgs/deploy.png)

### 2. Trigger Razorpay payment [Action]

To initiate a payment using Razorpay, you must use the **Razorpay Payment** action. This action lets users process a payment inside your app using credit cards, debit cards, net banking, UPI (Unified Payments Interface), and digital wallets via Razorpay.

Follow the steps below to add this action:

1. Select the widget (e.g., checkout button) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click Open. This will open an **Action Flow Editor** in a new popup window. Click on the **+ Add Action**.
3. Search and select the **Razorpay Payment** (under *Integrations*) action.
4. Enter or use a variable for specifying the total amount under the **Amount** section. The value must be an integer in the currency's smallest unit.
    - For example, *$24.99* should be passed as *2499* (as a round-off integer; otherwise, it would be automatically rounded); similarly, for an amount of ₹120.00, 12000 should be passed.
    - Do not calculate a trusted charge from a client-provided total. Recalculate product prices, discounts, taxes, currency, and the minor-unit amount on a trusted backend. Currency minor units vary, so a hard-coded two-decimal string conversion is not correct for every currency.
5. Enter the **Currency Code** to be used for the amount, for example, *INR*, *USD*, *EUR*, or *BRL*. Make sure you enter a valid currency code; otherwise, the transaction won't go through. Download the complete [list of supported currencies](https://razorpay.com/docs/build/browser/assets/images/international-currency-list.xlsx).
<p></p>

![Specifying amount and country code manually](imgs/specify-amount-and-code-manually.avif)

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/1405bb45c9734f4abba2ba123949fb0c?sid=0215e670-70b5-49ed-adae-a86d65b261e7" title="Razorpay interactive tutorial"
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

6. With this action, you can also add some optional fields, such as **Receipt Number**, **Description**, **User Name**, **User Email**, **User Contact**, and **Timeout** (time for which the checkout dialog should remain active. By default, it is 180 seconds).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/291c0d50a2d54c3a8af8eddbaa2e9058?sid=2cf88f42-0716-4e86-80cd-9074aa3cf64f" title="Razorpay interactive tutorial"
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

7. You can also customize the color scheme for the payment sheet using properties such as **Dialog Color, Barrier Color,** **Text Color**, **Processing Color**, **Success Color**, **Error Color,** and more.

<p></p>

![Customizing Razorpay payment sheet](imgs/customize-payment-sheet.avif)

8. Enter an **Action** **Output Variable Name** where the payment ID would be stored on a successful transaction.
9. Now you must check if the payment was successful. You can do so by adding the [conditional action](../../resources/control-flow/functions/conditional-logic.md#conditional-actions). To do so, click the "**+**" button below the previous action tile and select **Add Conditional**.
10. On the right side (**Set Condition for Action**),
    1. Select **UNSET** > **Condition** > **Single Condition**.
    2. **First Value** > **Action** **Output Variable Name**.
    3. Set the operator to **Is Set and Not Empty**.
11. Under the **TRUE** section, add an action that will be triggered if the payment is successful.
12. Under the **FALSE** section, add an action that will be triggered if payment is failed.

The action output is useful for UI flow, but do not grant inventory, credits, downloads, or another valuable entitlement only because a client output is nonempty. Persist and fulfill the order on a trusted backend after signature verification or an authenticated Razorpay webhook, check the expected order ID, currency, and amount, and make fulfillment idempotent so retries cannot deliver twice.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/9f9aea02e2db4c4fa3ea14f480567650?sid=d780d458-5970-4bbb-b10a-08ff6e4dab1b" title="Razorpay interactive tutorial"
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

:::warning
Ensure the user is authenticated before triggering this action; otherwise, it will result in an error. You can follow the steps on [**this page**](../authentication/firebase-auth/auth-initial-setup.md) to set up Firebase Authentication.
:::

### 3. Testing

You can test Razorpay payments on Run mode, Test mode, an emulator/Simulator, or a physical device.

To test payments in Test or Run mode:

1. In your FlutterFlow project, navigate to **Settings and Integrations** > **In App Purchases & Subscriptions** > **Razorpay**.
2. Make sure the **Is Production** is disabled.
3. Make sure you have entered the correct **Test Credentials**.
4. Run your app in [Test mode](../../testing-deployment-publishing/running-your-app/run-your-app.md#test-mode).
5. To test the purchase, you can try any method from [here](https://razorpay.com/docs/payments/payment-gateway/quick-integration/integration-steps/).

### 4. Releasing to production

Once you are done testing your Razorpay integration and you are ready to go **live**, follow the steps below:

1. Complete **KYC** (or the [Activation Form](https://dashboard.razorpay.com/app/activation?ref=blog.flutterflow.io)) to access the Razorpay Live API.
2. Log into the [Razorpay Dashboard](https://dashboard.razorpay.com/?ref=blog.flutterflow.io#/access/signin) and switch to **Live Mode** on the menu.
3. From the left side menu, select **Account & Settings** > Under **Website and app settings** section, select **API keys**.
4. Click **Generate Live Key** and copy the **Key Id** and **Key Secret**. To regenerate, click on **Regenerate Live Key** and choose how you want to deactivate the old key.
5. Return to the FlutterFlow project, navigate to **Settings and Integrations** > **In App Purchases & Subscriptions** > **Razorpay**. Turn on the **Is Production**.
6. Under **Production Credentials**, paste the **Key ID** and **Key Secret** obtained in the previous step.
7. Click the **Deploy** button.
8. [Test](../../testing-deployment-publishing/running-your-app/run-your-app.md#test-mode) your app.

Before taking live payments, configure webhook signature verification, replay-safe and idempotent processing, refunds and disputes, failure recovery, monitoring, privacy disclosures, and any tax or regulatory requirements. Perform a small real transaction and refund in the production environment without exposing live credentials.
