---
slug: /integrations/authentication/supabase/apple
title: Apple Login
description: Learn how to integrate Apple Login of Supabase Auth into your FlutterFlow app.
tags: [Apple Authentication, Authentication, Supabase]
sidebar_position: 4
keywords: [FlutterFlow, Apple Authentication, Authentication, Supabase]
---

# Apple Login

Adding Apple Sign-In with Supabase offers a convenient, secure, and privacy-friendly way for users to sign up or log in to your app using their Apple ID.

This guide will walk you through the steps necessary to integrate Apple login with Supabase, including configuring the necessary keys and settings in both Supabase and the Apple Developer Console.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/U7LeqAqnvkWOTQ5yl4zw?embed&show_copy_link=true"
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

Before adding Apple Sign-In to your FlutterFlow project, make sure you have:

1. Completed all steps in the [**Supabase setup**](../../supabase/supabase-setup.md)
2. Completed [**Initial setup**](initial-setup.md) 
   required for authentication.
3. Created an [**Apple account**](https://account.apple.com/account).
4. An active [**Apple Developer Account**](https://developer.apple.com/programs/enroll/). Read more about the [**Apple Developer Program**](https://developer.apple.com/programs/) and how to sign up.

:::

Adding Apple sign-in comprises of the following steps:

## Set Up in Apple Developer Console

To set up Apple Sign-In, you need to configure a few settings in your Apple Developer Console. This includes setting up email communication to manage user privacy and enabling the Apple Sign-In capability for your App ID.

### Configure Email Communication

"Apple sign-in" is a privacy-focused authentication system. One of its notable features is the ability to hide a user's real email address when signing up for apps and services. When users choose to hide their email, you get one random email address that forwards to the user's actual Apple ID email. This helps users keep their real email addresses private.

![hide-apple-email.avif](imgs/hide-apple-email.avif)

So, in order to contact such users, you must register email sources that your organization will use for communication.

To register email sources, open the [**Services**](https://developer.apple.com/account/resources/services/list) (under [**Certificates, Identifiers & Profiles**](https://developer.apple.com/account/resources/certificates/list)) section in your Apple developer account, configure **Sign in with Apple for Email Communication**, add the email source, and complete the registration process.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/UbuCINcuJsBBFv2plsqE?embed&show_copy_link=true"
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

### Enable Apple Sign-In Capability in your App ID

To enable Apple sign-in for your app, open the [**Identifiers**](https://developer.apple.com/account/resources/identifiers/list) section in your Apple developer account, select your existing **App ID**, enable **Sign In with Apple**, and click **Save**.

:::tip

If you haven't created an App ID yet, follow the instructions provided by Apple to [**register an App ID**](https://developer.apple.com/help/account/manage-identifiers/register-an-app-id/).

:::


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/4iw5sP7Qe6ALupzII7qO?embed&show_copy_link=true"
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

## Configure Apple Auth in Supabase

To enable and configure Apple authentication in your Supabase project, open the [Supabase dashboard](https://supabase.com/dashboard/project/_/auth/providers), select your project, enable **Sign in with Apple** under the **Apple** section, enter the **Client ID** and **Secret Key**, and click **Save**.

:::tip

To obtain the secret key, use the tool provided under [**Configuration section**](https://supabase.com/docs/guides/auth/social-login/auth-apple?queryGroups=platform&platform=flutter#flutter-configuration-web).

![get-secret-key.avif](imgs/get-secret-key.avif)

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ycK9sSxVusys6jZUpDvt?embed&show_copy_link=true"
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

## Enable Apple Auth in FlutterFlow

To enable Supabase Apple authentication in FlutterFlow, go to **Settings and Integrations** > **Supabase** > **Supabase Authentication**, and toggle on **Enable Apple Authentication**.

![enable-apple-auth-flutterflow.avif](imgs/enable-apple-auth-flutterflow.avif)

## Create Account [Action]

Now, proceed to add an account creation flow, which consists of the following two actions:

1. **Create Account Action**: Add the **Create Account** action (under Supabase Authentication). This will create an account in Supabase and add the user details to **Supabase Dashboard > Authentication > Users**.
2. [**Insert Row Action**](../../database/supabase/database-actions.md#insert-row-action): The previous action does not automatically create an entry in the public "users" table you created [here](initial-setup.md#1-creating-a-users-table). To do this, add a **Supabase Insert Row** action, to log the user's details, such as their email.

![create-account.avif](imgs/create-account.avif)

## Login [Action]

To enable user login, add the **Log In** action (under Supabase Authentication). When users click on the sign-in button, they will be prompted to log in with their Apple credentials.

![login.avif](imgs/login.avif)

## Logout [Action]

To let users log out of your app, you can use [this](auth-actions.md#log-out-action) action.

## Prepare to Test

To test your app on a real device, you must configure the project in Xcode. This includes adding a team to your project and setting an appropriate signing certificate.

Here's how you configure your project in Xcode:

1. From the Local Run, [open your project in Xcode](../../../testing-deployment-publishing/running-your-app/local-run.md#access-project-code). **Tip**: If you are using Android Studio, right-click on the **ios** folder, find **Flutter,** and then click on the **Open iOS module in Xcode**.
2. In Xcode, click on **Runner** (left side menu) and then select the **Signing and Capabilities** tab.
3. We recommend choosing the **Automatically manage signing** option. This will auto-create the profiles, app ID, and certificates required to build and run your app. If you don't, you'll have to [manually create a 'provisioning profile'](https://blog.codemagic.io/distributing-native-ios-sdk-with-flutter-module-using-codemagic/) and then add it in the Xcode.
4. Under the **Signing** section, find the **Team** dropdown and select your team.
5. Now use [Local Run](../../../testing-deployment-publishing/running-your-app/local-run.md) to test the app on a real device.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/cb9e1e3605d94636bb7893e23043b3a8?sid=99c30fc5-8db1-4f72-a937-341a772c3290"
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

## Verify User Creation

To verify that you have successfully added the Apple authentication, you can come over to your **Supabase project > Authentication > Users** and verify the user entries. Also, verify entries in your public `users` table.

![user-entries-in-supabase-auth](imgs/user-entries-in-supabase-auth.avif)
