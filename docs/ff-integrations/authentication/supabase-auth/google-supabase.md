---
slug: /integrations/authentication/supabase/google
title: Google Login
description: >-
  Learn how to integrate Google Login of Supabase Auth into your FlutterFlow
  app.
tags:
  - FlutterFlow
  - Integrations
  - Authentication
sidebar_position: 3
keywords:
  - FlutterFlow
  - Google Authentication
  - Authentication
  - Supabase
last_verified: 2026-09-02
---
# Google Login

Google Authentication with Supabase offers a secure and convenient method for users to sign up and log in to your app using their Google accounts.

:::info[Prerequisites]
Before getting started with this section, ensure you have,

1. Completed all steps in the [**Supabase setup**](../../supabase/supabase-setup.md)
2. Completed [**Initial setup**](initial-setup.md)
   required for authentication.
:::

## Adding Google authentication

Let's see how to add a Supabase Google authentication by building an example that looks like this:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/6f249c8f55144c28a328a09c714856a5?sid=d07370c9-e73b-4c42-be0f-de89af96f8cf" title="Google Login interactive tutorial"
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

The steps to add Supabase Google authentication are as follows:

### 1. Create and configure Google Cloud project

To begin adding Google auth, you must first have an active [Google Cloud Platform](https://cloud.google.com/) account. You'll need to either set up a new project or use an existing one within this account.

Here's how you do it:

1. If you haven't already, create a new project in [Google Cloud Console](https://console.cloud.google.com/).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/a9cfdda1706341579296649ec073470d?sid=38969d2a-0fe8-47fd-8539-e6df66c9fa30" title="Google Login interactive tutorial"
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

2. If you haven't already, configure the [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent). This helps Google display a consent screen to the user, including a summary of your project and its policies and the requested scopes of access.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/ff266d3093c84d3ab1e93255482e19ad?sid=b776ef9d-9e27-4b4f-a748-ebe222183092" title="Google Login interactive tutorial"
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

3. Now, you must create credentials so that your app can access Google data. To do so:
    1. Head over to [credentials page](https://console.cloud.google.com/apis/credentials), click **+ CREATE CREDENTIALS** and select **OAuth client ID**.
    2. Set **Application type** to **Web Application**.
    3. Below, under the **Authorized redirect URIs**, click **+ ADD URI**. To get this URI, open your **Supbase project > Authentication > Providers**. Open the **Google** section, copy the **Callback URL**, and paste it here.
    4. Click **CREATE**.
    5. Copy the **Client ID** and **Client secret**; you'll need them in the next step. Treat the Client Secret as a server credential and paste it only into Supabase. Never put it in FlutterFlow app state, generated client code, screenshots, logs, or source control.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/ac19280f576e479f997ba3a531b8a4b4?sid=4e5e69b7-d389-4ff6-8419-5a0f88558f05" title="Google Login interactive tutorial"
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

4. For *Android*, you'll need to create a new credential with the **Application Type** set to **Android**. While creating, you'll need to provide the package name and [SHA-1 key](../firebase-auth/auth-initial-setup.md#generate-the-sha-1-key). **Note** that after your app goes live, you must replace the SHA-1 key with the [key from the Play Console](../firebase-auth/auth-initial-setup.md#getting-sha-keys-for-release-mode).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/6d98dc33a23541468388642e849e7e04?sid=59563c8e-f60a-4b76-81af-43ddeea21744" title="Google Login interactive tutorial"
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

5. Similarly, create credential for *iOS* platform as well. **Note** that after your app goes live, you must specify the *App Store* and *Team ID*.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/f7721c4382ee43599f49ea1c066e234b?sid=5948a122-cf26-4f8a-b104-0ecd3a0688b9" title="Google Login interactive tutorial"
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

### 2. Configure Google auth in Supabase

This step involes enabling Google login and providing the client IDs and secret in Supabase. Here's how you do it:

1. Open the [Supabase dashboard](https://supabase.com/dashboard/) and go to **Authentication > Providers > Google**.
2. Enable **Sign in with Google**.
3. Add the OAuth client IDs accepted by your web, iOS, and Android builds. If the dashboard accepts them as one comma-separated value, put the **Web client ID first**, followed by the iOS and Android IDs.
4. Add the **Web client secret**. Keep nonce checking enabled unless current Supabase documentation for your exact client flow explicitly requires otherwise; disabling nonce verification weakens replay protection.
5. Save the provider configuration.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/c425e1098ebd43a49feacd709051e6e7?sid=e7c16c3f-5e0d-4d4c-b389-22c7fb2c676b" title="Google Login interactive tutorial"
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

6. In **Authentication > URL Configuration**, set **Site URL** to the canonical production destination and add every web or mobile callback used by the app to **Redirect URLs**. The redirect supplied by the app must match the allow list. Prefer exact production paths; use narrowly scoped wildcards only for controlled preview environments. See [Supabase redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls).

The Google OAuth client's authorized redirect URI is the Supabase callback URL shown on the Google provider page. Your application's post-authentication destination belongs in Supabase **URL Configuration**; these are different URLs and should not be interchanged. See the current [Supabase Google guide](https://supabase.com/docs/guides/auth/social-login/auth-google).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/6d3fbf775a87431d8fd93ee0a6a190ae?sid=5cbe8e06-9604-41fd-abcc-a729b0205ef1" title="Google Login interactive tutorial"
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

### 3. Enable Google auth in FlutterFlow

To enable Supabase Google auth in FlutterFlow:

1. In FlutterFlow, navigate to **Settings and Integrations > App Settings > Authentication**.
2. Open the **Supabase Authentication** section and turn on the **Enable Google Authentication** toggle.
3. Paste the **iOS** and **Web Client ID** obtained in step 1.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/e5ddd71aef2e43afa42b06bd68b3a301?sid=27bc6900-dabd-46f4-ae90-16174e271d0c" title="Google Login interactive tutorial"
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

### 4. Add a Google sign-in button

To allow users to authenticate, you need a login page with a button. You can create your own or use the one from the widget template or page template.

Here's how you can add the Google sign-in button from our page template:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/d8359478b2c94526bd8feb27e6daf4cd?sid=6e0b51dd-56cd-48bc-9837-3a0a5804dc82" title="Google Login interactive tutorial"
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

### 5. Add first-time sign-in and profile creation

Google uses the same **Log In** provider action for new and returning users. On the first successful sign-in, Supabase creates the Auth user. Add a separate profile row only if your app uses an optional public profile table:

1. Supabase create account action. Here's how you add it:
    1. Select the widget (e.g., Button) on which you want to add the action.
    2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
    3. Click on the **+ Add Action**.
    4. Search and select the **Log in** (under *Backend/Database > Supabase Authentication*) action.
    5. Set **Auth Provider** to **Google**.
2. Optional: a Supabase [Insert Row action](../../database/supabase/database-actions.md#insert-row-action) for a profile table.

The login action creates the Auth user but does not automatically insert a row in a public table. If you add the client-side insert, make the user ID unique, enable Row Level Security, allow only the signed-in user to create the intended row, and handle retries safely. For stronger consistency, create profiles with a reviewed database trigger as described by [Supabase user management](https://supabase.com/docs/guides/auth/managing-user-data).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/f5ce53baa6ce4c7d95f99ad3fe06ed70?sid=7f8d0916-741d-4085-b793-ea5066b54b63" title="Google Login interactive tutorial"
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

### 6. Adding login action

When you click the Google sign-in button, it will trigger the 'Log In' action, prompting a Google sign-in popup for users to input their credentials.

To add login action:

1. Select the widget (e.g., Button) on which you want to add the action.
2. Select **Actions** from the properties panel (the right menu) and select **Add Action**.
3. Search and select the **Log in** (under *Backend/Database > Supabase Authentication*) action.
4. Set **Auth Provider** to **Google**.

![Adding login action](../imgs/adding-login-action.avif)

### 7. Adding logout action

To let users log out of your app, you can use [this](auth-actions.md#log-out-action) action.

### 8. Preparing to test the app

FlutterFlow's Supabase Google flow cannot currently be validated reliably in web Run or Test modes. For web testing, publish to a controlled subdomain, add its exact callback to the Supabase redirect allow list, and add its origin to the Google OAuth client.

You can test your app on a real device or emulator using FlutterFlow’s Local Run. Follow the [Local Run documentation](../../../testing-deployment-publishing/running-your-app/local-run.md) and see [how to set up a physical device](../../../testing-deployment-publishing/running-your-app/local-run.md#setup-physical-device) to start testing.


### 9. Verify user creation

To verify that you have successfully added the Google authentication, you can come over to your Supabase project > Authentication > Users and verify the user entries.

![Verify user creation](../imgs/verify-user-creation.avif)
