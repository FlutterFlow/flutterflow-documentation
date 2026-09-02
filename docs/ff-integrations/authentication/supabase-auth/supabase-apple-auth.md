---
slug: /integrations/authentication/supabase/apple
title: 'Apple Login: Supabase Auth'
description: Learn how to integrate Apple Login of Supabase Auth into your FlutterFlow app.
tags:
  - FlutterFlow
  - Integrations
  - Authentication
sidebar_position: 4
keywords:
  - FlutterFlow
  - Apple Authentication
  - Authentication
  - Supabase
last_verified: 2026-09-02
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
        src="https://demo.arcade.software/U7LeqAqnvkWOTQ5yl4zw?embed&show_copy_link=true" title="Apple Login: Supabase Auth interactive tutorial"
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
        src="https://demo.arcade.software/UbuCINcuJsBBFv2plsqE?embed&show_copy_link=true" title="Apple Login: Supabase Auth interactive tutorial"
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
        src="https://demo.arcade.software/4iw5sP7Qe6ALupzII7qO?embed&show_copy_link=true" title="Apple Login: Supabase Auth interactive tutorial"
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

To enable Apple authentication, open the [Supabase dashboard](https://supabase.com/dashboard/project/_/auth/providers), select your project, and open **Authentication > Providers > Apple**.

- For native Apple sign-in, add the App ID/bundle identifier used by the app.
- For web OAuth, create an Apple **Services ID**, configure its website domain and the exact Supabase callback URL (`https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`), and place that Services ID first when Supabase accepts multiple Client IDs.
- Generate the Apple client secret from the Team ID, Key ID, Services ID, and signing key, then enter it in Supabase and enable the provider.

:::danger[Apple signing-key maintenance]
The `.p8` signing key is a private credential. Store it in an approved secret manager or other protected location; never upload it to FlutterFlow, app state, client code, screenshots, logs, or source control. Apple's OAuth client secret expires after six months, so schedule rotation before expiry. If the `.p8` file is lost or exposed, revoke it in Apple Developer and create a new key immediately. See the current [Supabase Apple guide](https://supabase.com/docs/guides/auth/social-login/auth-apple).
:::

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
        src="https://demo.arcade.software/ycK9sSxVusys6jZUpDvt?embed&show_copy_link=true" title="Apple Login: Supabase Auth interactive tutorial"
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

To enable Supabase Apple authentication in FlutterFlow, go to **Settings and Integrations > App Settings > Authentication > Supabase Authentication**, and toggle on **Enable Apple Authentication**.

![enable-apple-auth-flutterflow.avif](imgs/enable-apple-auth-flutterflow.avif)

## Create Account [Action]

Now, proceed to add an account creation flow, which consists of the following two actions:

1. **Create Account Action**: Add the **Create Account** action (under Supabase Authentication). This will create an account in Supabase and add the user details to **Supabase Dashboard > Authentication > Users**.
2. Optional [**Insert Row Action**](../../database/supabase/database-actions.md#insert-row-action): The previous action does not automatically create an entry in a public profile table. Add this only if your app needs one, and protect it with Row Level Security. A reviewed database trigger can provide more reliable profile creation than a second client action.

Apple supplies a user's full name only during the first authorization, and the OAuth web flow may not expose it at all. Save the name when available or collect it in onboarding; do not overwrite an existing value with `null`. Respect private relay email addresses and configure Apple's email relay before sending mail to them.

![create-account.avif](imgs/create-account.avif)

## Login [Action]

To enable user login, add the **Log In** action (under Supabase Authentication). When users click on the sign-in button, they will be prompted to log in with their Apple credentials.

![login.avif](imgs/login.avif)

## Logout [Action]

To let users log out of your app, you can use [this](auth-actions.md#log-out-action) action.

## Prepare to Test

For native iOS testing, configure the project in Xcode with the correct team, bundle identifier, capability, and signing certificate. For web testing, deploy to an HTTPS domain present in Supabase's redirect allow list and complete the Apple Services ID configuration; native Xcode setup alone is not sufficient for web.

Here's how you configure your project in Xcode:

1. From the Local Run, [open your project in Xcode](../../../testing-deployment-publishing/running-your-app/local-run.md#access-project-code).
:::tip
If you are using Android Studio, right-click on the **ios** folder, find **Flutter,** and then click on the **Open iOS module in Xcode**.
:::
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
        src="https://www.loom.com/embed/cb9e1e3605d94636bb7893e23043b3a8?sid=99c30fc5-8db1-4f72-a937-341a772c3290" title="Apple Login: Supabase Auth interactive tutorial"
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

To verify the integration, open **Supabase Dashboard > Authentication > Users** and confirm the Auth user. If your app intentionally creates a public profile row, verify that separately and confirm its Row Level Security policies prevent access by other users.

![user-entries-in-supabase-auth](imgs/user-entries-in-supabase-auth.avif)
