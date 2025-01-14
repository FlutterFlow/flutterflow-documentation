---
slug: /integrations/payments/braintree
title: Braintree
description: Learn how to integrate Braintree payments in your FlutterFlow app.
tags: [Payments, Integration]
keywords: [FlutterFlow, Braintree, Payments, Integration]
---

# Braintree

You can accept payments in your app using [Braintree](https://developer.paypal.com/braintree/docs/start/overview) (a service provided by PayPal) integration. This will also allow your users to pay directly using a credit card or using a service like PayPal, Google Pay, or Apple Pay

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/cqy5e5piyZEodvs9Lrn5?embed&show_copy_link=true"
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

:::info[Prerequisites]

Before starting to set up payments, make sure you have:

- Completed all the steps of [**Firebase Setup**](../firebase/connect-to-firebase-setup.md) for your project.
- Upgraded your Firebase project to [**Blaze Plan**](https://firebase.google.com/pricing).
- Enabled [**Firebase Authentication**](../authentication/firebase-auth/auth-initial-setup.md) for your project.
:::

:::info
FlutterFlow uses [**Firebase Cloud Functions**](https://firebase.google.com/docs/functions) to process a transaction using the selected service (Braintree/PayPal).
:::

## Braintree Integration

Integrating the Braintree in your app comprises the following steps:

### 1. Setup payments integration

Payments can be set up on FlutterFlow using Braintree.

You should always test your payment processing using a Sandboxed environment, before deploying them to a production environment.

Follow the steps below to set up using Braintree:

1. Go to [Braintree Website](https://www.braintreepayments.com/).
2. **Sign up** for getting access to the Sandboxed environment. You might receive an email with the additional steps for completing the sign-up process. If you already have a Braintree account just **Log In**.
3. Navigate to the **Braintree Settings** page of your FlutterFlow project by going to the **Settings and Integrations** > **In App Purchases & Subscriptions** > **Braintree**.
4. On this page, **Enable Braintree/PayPal** using the toggle.
5. Under the **Credentials (Sandbox)** section, you need to enter the **Merchant ID**, **Tokenization** **Key**, **Public Key** & **Private Key** of the Braintree account.
6. To get the required credentials, navigate to your Braintree account **Home** page.
7. Click the **gear icon** (top-right corner), select **Business**. From this page, you'll get the **Merchant ID**.
8. Now, go to the **API** page. Here, you'll get the **Public Key** & **Private Key**.
9. To generate a **Tokenization Key**, go to the **API** page, and click **Generate New Tokenization Key**. Copy the Key and enter it in the respective field of FlutterFlow.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/G0nRJVKRvk8spKsyLeiq?embed&show_copy_link=true"
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

Finally, click **Deploy** to upload the Cloud Functions required for processing a payment using Braintree:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/bEnzFFkVe3SR8FDLPkQi?embed&show_copy_link=true"
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

### 2. Enable Google Pay or Apple Pay (Optional)

Completing the payment integration by following the above steps will allow you to accept payments using a credit card or a PayPal account. Additionally, you can accept payments using Google Pay or Apple Pay.

To accept payments using Google Pay or Apple Pay, you'll need to enter the respective **Merchant ID** of the Google/Apple account in the  *Braintree Settings* page > *Credentials (Sandbox)* section.

1. To know how to find the Google Pay Merchant ID, navigate to [this page](https://support.google.com/paymentscenter/answer/7163092).
2. Steps for configuring Apple Pay and getting access to the Apple Merchant ID are [here](https://help.apple.com/developer-account/#/devb2e62b839).

### 3. Trigger payment action

In order to initiate a payment, you have to use the *Braintree Payment Action*. Follow the steps below to add this action to any widget:

1. Select the **widget** on which you want to apply the Action.
2. Select **Actions** from the Properties panel (right menu).
3. Click **+ Add Action** button.
4. Choose a gesture from the dropdown among ***On Tap**, **On Double Tap**, or* **On Long Press**.
5. Select the **Action Type** as ***Braintree Payment***.
6. Enter the **Amount** either by defining a ***Specific Value*** or ***From Variable***.
7. Under **Payment Method**, you can select ***Credit Card***, ***PayPal***, or ***Drop-In***. The *Drop-In* option lets users choose which payment method to use. If you want to use the *Credit Card* option follow the steps [here](#using-credit-card).
8. If you have chosen the **Drop-In** option, select the **Allowed Payment Types**. Using Google Pay or Apple Pay will require you to have their respective Merchant ID defined during the Payment Setup process.
9. Enter the **Currency Code** and you can define the optional parameters like **Tax Rate Percentage** and **Shipping Cost**. Enabling Apple Pay requires you to specify the **Country Code** in the respective field.

:::warning
Make sure the user is authenticated before triggering the Braintree Payment Action, otherwise, it will result in an error. You can follow the steps on [**this page**](../authentication/firebase-auth/auth-initial-setup.md) to set up Authentication.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/BiF5CcHTJBcU2brcLVVT?embed&show_copy_link=true"
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

#### Using Credit Card

If you want to keep only the Credit Card option on your checkout page, you'll need to add the **CreditCardFrom** widget to the page. Follow the steps below:

1. Select the **Payment Method** as ***Credit Card***.
2. Drag and drop the [**CreditCardFrom**](../../resources/ui/widgets/built-in-widgets/creditcardform.md) widget onto the canvas.
3. You can modify the design of the form widget as per your app's needs.
4. Again select the **checkout button** to complete defining the Action.
5. Enter the **Currency Code** and you can define the optional attributes like **Tax Rate Percentage** and **Shipping Cost**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/SMD1vtLJFXxG5AuJrgQS?embed&show_copy_link=true"
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

### 4. Testing

Braintree payments work on real Android devices or in emulators, and App Store purchases only work on real iOS devices. [This document](../../testing-deployment-publishing/running-your-app/local-run.md) has instructions on how to run your app on an Android or iOS device.

:::info
The Braintree Payments cannot be tested in Preview Mode, Test Mode, or Run Mode.
:::

To test your app before deployment:

1. Download and run your project as described [here](../../testing-deployment-publishing/running-your-app/local-run.md).
2. To test the purchase, you can use any of these [basic test card numbers](https://stripe.com/docs/testing#cards).


### 5. Releasing to production

Before you release the app to production, complete the following steps:

1. Create the Braintree Account (Not sandbox) and get the production credentials.
2. Add the **production credentials** in the FlutterFlow *Braintree Settings* page > *Credentials (Production)* section.
3. Turn on the **Is Production** toggle present on that page.
4. Deploy the new Firebase Cloud Functions with the production credentials by clicking on the **Deploy** button.

Now, you are ready to build and distribute your app with payments to production.
