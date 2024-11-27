---
slug: /integrations/authentication/firebase/phone
title: Phone Login
description: Learn how to add phone login in your FlutterFlow app.
tags: [Phone Login, Authentication, Firebase]
sidebar_position: 5
keywords: [FlutterFlow, Phone Login, Authentication, Firebase]
---

# Phone Login

Phone login allows a user to sign in by sending an SMS message to the user's phone. The user login in using a one-time code contained in the SMS message.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/0243f18a21ca415f8258fb87012c0e73?sid=3c77fe9d-e3f8-4506-9f6b-e1b8eb66b44c"
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

Before getting started with this section:

1. Complete [**Firebase Setup**](../../firebase/connect-to-firebase-setup.md).
2. Complete [**Initial setup**](auth-initial-setup.md) required for authentication.
:::


## Adding Phone sign-in

Adding Phone sign-in comprises the following steps:

1. [Setting up phone sign-in](#1-setting-up-phone-sign-in)
2. [Enabling phone authentication in Firebase](#2-enabling-phone-authentication-in-firebase)
3. [Building phone number page](#3-building-phone-number-page)
4. [Building verify code page](#4-building-verify-code-page)
5. [Adding phone sign-in action](#5-adding-phone-sign-in-action)
6. [Adding verify code action](#6-adding-verify-code-action)
7. [Adding logout action](#7-adding-logout-action)
8. [Testing phone sign-in](#8-testing-phone-sign-in)
9. [Verify user creation](#9-verify-user-creation)

### 1. Setting up phone sign-in

To use phone sign-in, you must [get the SHA-1 key](auth-initial-setup.md#generate-the-sha-1-key) and [regenerate the configuration files](auth-initial-setup.md#regenerate-config-files). You can find the detailed instructions [here](auth-initial-setup.md). **Note** that this step is often missed, so ensure you must complete this step before you proceed further.

### 2. Enabling phone authentication in Firebase

To enable authentication in the Firebase:

1. Open the [Firebase console](https://console.firebase.google.com/) and click on **Authentication**.

2. Click on the **Get started** button (this may not be visible if you have already set up other forms of Authentication).
3. Select the **Sign-in method** tab.
4. Click on **Phone** (Under the 'Native Providers' section). If you have already added any other provider, click on the **Add new provider** and then click on **Phone**.
5. Find the **Phone** switch and enable it.
6. Click on the **Save** button.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/413d6b11eeee40bf89e6876dd3450ba1?sid=dbfaee96-df96-45b6-9ec3-72a44d30ca90"
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

### 3. Building phone number page

To allow users to authenticate using their phone number, you need to create a page to accept the user's phone number. We provide a collection of ready-to-use templates. You can use one of our templates or create a page from scratch.

Here is the page added from the templates, and after some modification, it looks the below:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/413d6b11eeee40bf89e6876dd3450ba1?sid=dbfaee96-df96-45b6-9ec3-72a44d30ca90"
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

### 4. Building verify code page

You need to create another page to verify the SMS code.  Here's how you build the verify code page using templates.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/cca3060818714423a71b3e02971bf80c?sid=ad97b77a-f04b-4aec-8676-9fed80c437c2"
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

### 5. Adding phone sign-in action

On click the 'sign-in' or 'send code' button, you will add the 'Phone Sing In' action, which redirects users to a page where they can enter the code received on their phone.

To add this action:

1. Select the widget (e.g., Button) on which you want to add the action.

2. Select **Actions** from the [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) (the right menu) and select **Add Action**.
3. Search and select the **Phone Sign In** (under *Backend/Database > Firebase Authentication*) action.
4. Now provide the **Phone Number** via **Widget State > TextField** (that accepts the phone number).
5. Now, **Select Page** that you created to verify code.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/1a3a9006185a454c909dbfc804008e81?sid=21c6f4b1-adee-4e85-8ef3-1989c48a4e9d"
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

### 6. Adding verify code action

On click of the 'Verify Code' button, you will add the 'Verify SMS Code' action, which opens the home page if the action is successful.

1. Select the widget (e.g., Button) on which you want to add the action.

2. Select **Actions** from the [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) (the right menu) and select **Add Action**.
3. Search and select the **Verify SMS Code** (under *Backend/Database > Firebase Authentication*) action.
4. Now provide the **SMS Code** via **Widget State > TextField** (that accepts the code).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/f69f311ade1d447c9cd74baa011acee2?sid=690b44dc-e876-41c3-8e92-b650bc7578ad"
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

### 7. Adding logout action

To let users log out of your app, you can use the [Logout](auth-actions.md#logout-action) action.

### 8. Testing phone sign-in

#### 8.1 Test on Run or Test mode

To test phone sign-in in *Test* or *Run* mode, you must add the authorized domain in the Firebase console.

Here's how you add the authorized domain:

1. For **Test mode**, you can open the browser console, try logging in, and get the domain from the browser console, and for **Run mode**, you can simply use '*app.flutterflow.io*.'
2. Now open the [Firebase console](https://console.firebase.google.com/) and click on **Authentication**.
3. Select the **Setting** tab.
4. Select **Authorized domains** from the left side menu.
5. Click **Add domain**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/3ab8a727da4e46188e052504eb95974c?sid=2116ea6a-bf42-4cc1-9028-bb79704394a2"
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

Here's how it should look:

![adding-authorized-domain](../imgs/adding-authorized-domain.png)

#### 8.2 Test on a real device

Phone Sign In ***does not*** work in an Android emulator. You can only test it on a real device.

To test on a real device, add the SHA-256 key in the Firebase console and enable the 'Google Play Integrity API' in Google Cloud.

:::info
Skip if you find the below steps already completed by our automated Firebase integration.
:::

1. Get the SHA-256 key/fingerprint, add it to your Firebase project, and then regenerate the Firebase config files in FlutterFlow. **Note**: The instructions are similar to generating the SHA-1 key and are explained [here](auth-initial-setup.md#generate-the-sha-1-key). You will find the SHA-256 key in the terminal just below the SHA-1 key. This is required for the Firebase to verify that the sign-in request is coming from a legitimate device.

:::warning
While releasing the app, make sure to [**get the key from the Play Console**](auth-initial-setup.md#getting-sha-keys-for-release-mode).
:::

![SHA-256 key](../imgs/sha-256-key.png)


1. Open the [Google Developers Console](https://console.developers.google.com/) (Make sure your project is selected in the dropdown at the top), Click on the **Library** menu on the left, search for the **Google Play Integrity API,** and enable it.
2. Now, download and test the app using the instructions [here](../../../testing-deployment-publishing/exporting-code/ff-cli.md).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/09187b83b2bb498eaf067224ae4dcdd6?sid=e6aeae30-e964-4a55-b878-d800aa81426c"
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

### 9. Verify user creation

To confirm the successful integration and the creation of users, navigate to your **Firebase project > Authentication > Users** and check the user entries.

## FAQs

<details>
<summary>How do I test with dummy numbers?</summary>
<p>

To try phone sign-in without any limitations, you can add some fictitious numbers to the Firebase console.

To add the fictitious number:

1. Open the [Firebase console](https://console.firebase.google.com/) and click on **Authentication**.
2. Select the **Sign-in method** tab.
3. Click on the **Phone** (Under the Sign-in providers section).
4. Scroll down, find the **Phone numbers for testing** menu, and click on it.
5. Enter any dummy phone number (Make sure it looks unreal).
6. Enter the verification code that you would use on the verify code page.
7. Click on **add**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/4bd4663ef068492ab51042362193c80a?sid=3d4242fc-e0a9-4b30-a4b6-b1d2d8a100b8"
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
</p>
</details>


<details>
<summary>Getting this error: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth Section."</summary>
<p>
1. First, ensure you have clicked the "Save" button while [Enabling phone authentication in Firebase](#2-enabling-phone-authentication-in-firebase).
    
![Enabling phone authentication in Firebase](../imgs/adding-authorized-domain.png)

1. If this is already enabled, head over to **Settings > SMS region policy >** select **Allow > Select regions** you want to support and click **Save**.
    
![SMS region](../imgs/sms-region.webp)
</p>
</details>


