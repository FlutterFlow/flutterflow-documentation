---
slug: /integrations/authentication/firebase/apple
title: Apple Login
description: Learn how to add Apple login in your FlutterFlow app.
tags: [Apple Login, Authentication, Firebase]
sidebar_position: 2
keywords: [FlutterFlow, Apple Login, Authentication, Firebase]
---


# Apple Login

Apple Sign-In allows users to authenticate using their Apple Accounts.

:::warning[Support]

Apple sign-in functionality is only supported for iOS.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/679fb847b2d340368021ec1fded4e055?sid=c445ba10-5ec8-4727-807d-1591c627dd6e"
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
3. Created an [**Apple account**](https://appleid.apple.com/account?appId=632&returnUrl=https%3A//developer.apple.com/account/).
4. [**Purchased an Apple Developer membership**](https://developer.apple.com/programs/enroll/). 
   Read more about the [**Apple Developer Program**](https://developer.apple.com/programs/) and how to sign up.
5. Apple sign-In can not be tested in Run Mode. You will need to test it on a real device or 
   emulator. Try with Local Run!
:::

## Adding Apple sign-in

Adding Apple sign-in comprises of the following steps:

1. [Configure email communication](#1-configure-email-communication)
2. [Enable Apple sign-in in your App ID](#2-enable-apple-sign-in-in-your-app-id)
3. [Enabling Apple sign-in in Firebase](#3-enabling-apple-sign-in-in-firebase)
4. [Add an Apple sign-in button](#4-add-an-apple-sign-in-button)
5. [Add login action](#5-add-login-action)
6. [Adding logout action](#6-adding-logout-action)
7. [Preparing to test the app](#7-preparing-to-test-the-app)
8. [Verify user creation](#8-verify-user-creation)

### 1. Configure email communication

"Apple sign-in" is a privacy-focused authentication system. One of its notable features is the ability to hide a user's real email address when signing up for apps and services. When users choose to hide their email, you get one random email address that forwards to the user's actual Apple ID email. This helps users keep their real email addresses private.

![User opting to hide the email address](../imgs/opt-to-hide-email.png)

So, in order to contact such users, you must register email sources that your organization will use for communication.

:::info
Also, If you use any of the Firebase Authentication features that send emails to users, including email link sign-in, email address verification, etc., you must add `noreply@YOUR_FIREBASE_PROJECT_ID.firebaseapp.com` as well.
:::

To register email sources:

1. From your Apple developer account, open the [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/certificates/list) page and select [services](https://developer.apple.com/account/resources/services/list).
2. Under the 'Sign in with Apple for Email Communication,' click on the **Configure** button.
3. Click on the **(+)** button on the right side of **Email Sources**.
4. Enter the email in the **Email Addresses** section and click **Next**.
5. Now click on **Register** and then the **Done** button.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/42fe04061afe4816a8148a8bf8fdeddc?sid=7cccdf73-4020-494a-a64f-60ff1a57c532"
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

### 2. Enable Apple sign-in in your App ID

Here's how you do it:

1. From your *Apple developer account*, open the [Identifiers](https://developer.apple.com/account/resources/identifiers/list) section.
2. Open the identifier with your existing APP ID.
3. Select **Sign In with Apple** from the list.
4. Click **Save**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/7c0c5c406c1e49008eadf9667cbc5d6c?sid=bed2b093-3a8c-4651-94a6-19aafa2a86dd"
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

### 3. Enabling Apple sign-in in Firebase

To enable Apple authentication in the Firebase:

1. Open the [Firebase console](https://console.firebase.google.com/) and click on **Authentication**.
2. Click on the **Get started** button (this may not be visible if you have already set up other forms of Authentication).
3. Select the **Sign-in method** tab.
4. Click on **Apple** (Under the 'Additional Providers' section). If you have already added any other provider, click on the **Add new provider** and then click on **Apple**.
5. Find the **Apple** switch and enable it.
6. Click on the **Save** button.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/3cfc16349c2241d8bec0a6ff023771f7?sid=38cccdf9-6aaf-4e14-b1dc-5a8d7abdc180"
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

### 4. Add an Apple sign-in button

To allow users to authenticate, you need a login page with a button. You can create your own or use the one from the widget template or page template.

Here's how you can add the Apple sign-in button from our page template:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/e108b22f659e41f596a9abdc0c95930b?sid=e14a1ce3-cd85-4871-a5f4-dca6d51fa8c9"
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

### 5. Add login action

When you click the Apple sign-in button, it will trigger the 'Log In' action, prompting users to provide their Apple ID credentials.

To add login action:

1. Select the widget (e.g., Button) on which you want to add the action.
2. Select **Actions** from the [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) (the right menu) and select **Add Action**.
3. Search and select the **Log in** (under *Backend/Database > Firebase Authentication*) action.
4. Set **Auth Provider** to **Apple**.
5. Tick the **Create User Document** and set the **Collection** to **users**. After successful login, this will insert the user's email address into the 'users' collection. If a user already exists, it won't add details again.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/4f3744c3975e4b1da47d2a8479b59f81?sid=fb6b76c7-79dd-4fe1-910f-4d4da50a764f"
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

### 6. Adding logout action

To let users log out of your app, you can use the [Logout](auth-actions.md#logout-action) action.

### 7. Preparing to test the app

For testing your app on a real device, you must configure the project in Xcode. This includes adding a team to your project and setting an appropriate signing certificate.

Here's how you configure your project in Xcode:

1. Open your project in Xcode. If you are using Android Studio, right-click on the **ios** folder, find **Flutter,** and then click on the **Open iOS module in Xcode**.
2. In Xcode, click on **Runner** (left side menu) and then select the **Signing and Capabilities** tab.
3. We recommend choosing the **Automatically manage signing** option. This will auto-create the profiles, app ID, and certificates required to build and run your app. If you don't, you'll have to [manually create a 'provisioning profile'](https://blog.codemagic.io/distributing-native-ios-sdk-with-flutter-module-using-codemagic/) and then add it in the Xcode.
4. Under the **Signing** section, find the **Team** dropdown and select your team.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/cb9e1e3605d94636bb7893e23043b3a8?sid=105b5cf1-a15e-4157-820d-6f1761bb7c35"
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

### 8. Verify user creation

Run and test your app. To confirm the successful integration of Apple authentication and the creation of users, navigate to your **Firebase project > Authentication > Users** and check the user entries.
