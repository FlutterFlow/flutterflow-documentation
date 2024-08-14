---
slug: /integrations/authentication/firebase/facebook
title: Facebook Login
description: Learn how to add Facebook login in your FlutterFlow app.
tags: [Facebook Login, Authentication, Firebase]
sidebar_position: 4
keywords: [FlutterFlow, Facebook Login, Authentication, Firebase]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Facebook Login

Facebook login allows users to authenticate using their Facebook Accounts.


:::info[Prerequisites]

Before getting started with this section:

- Complete [**Firebase Setup**](../../firebase/connect-to-firebase-setup.md)
- Complete [**Initial Setup**](auth-initial-setup.md)
:::

## Adding Facebook sign-in

Adding Facebook sign-in comprises the following steps:

1. [Create app on Facebook](#1-create-app-on-facebook)
2. [Configure app on Facebook](#2-configure-app-on-facebook)
3. [Add email permission](#3-add-email-permission)
4. [Enabling Facebook authentication in Firebase](#4-enabling-facebook-authentication-in-firebase)
5. [Enabling Facebook authentication in FlutterFlow](#5-enabling-facebook-authentication-in-flutterflow)
6. [Add a Facebook sign-in button](#6-add-a-facebook-sign-in-button)
7. [Add login action](#7-add-login-action)
8. [Add logout action](#8-add-logout-action)
9. [Prepare to test the app](#9-prepare-to-test-the-app)
10. [Verify user creation](#10-verify-user-creation)

### 1. Create app on Facebook

When you create an app on the [Facebook Developer Console](https://developers.facebook.com/), you are given a unique *App ID* and *App secret*, ensuring secure communication between your app and Facebook's servers. Additionally, it lets you define required permissions and user data access and also restricts login origins for enhanced security.

Here's is how you create app on Facebook:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/e6gys6yiCM1xiUNLBHdD?embed&show_copy_link=true"
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

### 2. Configure app on Facebook

Now, you must add and configure platforms that will support Facebook authentication - For example, Android and iOS.

To do so follow the steps below:

<Tabs>
<TabItem value="1" label="Configure Android App" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/96Nf3RC4DAW1kOvdZ7yA?embed&show_copy_link=true"
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
</TabItem>
<TabItem value="2" label="Configure iOS App">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/wiYI8lcR2fTZ7EfSLR1S?embed&show_copy_link=true"
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
</TabItem>
</Tabs>



### 3. Add email permission

When users log in using third-party providers (like Google or Facebook), fetching their email addresses reduces the steps they need to take during sign-up. For Facebook sign-in, to access a user's email, you must add email permission in Firebase developer console.

Here's how you do it:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/vqXHHDgwcplEd8uAlRov?embed&show_copy_link=true"
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


### 4. Enabling Facebook authentication in Firebase

Here's how you enable Facebook auth in Firebase:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/yYIIFNIz6VnggYUX9KXL?embed&show_copy_link=true"
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

### 5. Enabling Facebook authentication in FlutterFlow

To enable the Facebook authentication in FlutterFlow, follow the steps below:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DLMx6pvF6QltUf8edST8?embed&show_copy_link=true"
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

### 6. Add a Facebook sign-in button

To allow users to authenticate, you need a login page with a button. You can create your own or use the one from the widget template or page template.

### 7. Add login action

When you click the sign-in button, it will trigger the 'Log In' action, prompting users to provide their Facebook credentials.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/jexLJMpednsmFGACA0AB?embed&show_copy_link=true"
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

:::info
Switch on the **Create User Document** and set the **Collection** to **users**. After successful login, this will insert the user's email address into the 'users' collection. If a user already exists, it won't add details again.
:::

### 8. Add logout action

To let users log out of your app, you can use the [Logout](auth-actions.md#logout-action) action.

### 9. Prepare to test the app

Facebook Sign-In functionality does not work in Run or Test Mode and can only be tested on a real device or emulator.

### 10. Verify user creation

To confirm the successful integration and the creation of users, navigate to your **Firebase project > Authentication > Users** and check the user entries.