---
slug: /integrations/authentication/supabase/google
title: Google Login
description: Learn how to integrate Google Login of Supabase Auth into your FlutterFlow app.
tags: [Google Authentication, Authentication, Supabase]
sidebar_position: 3
keywords: [FlutterFlow, Google Authentication, Authentication, Supabase]
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
        src="https://www.loom.com/embed/6f249c8f55144c28a328a09c714856a5?sid=d07370c9-e73b-4c42-be0f-de89af96f8cf"
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
        src="https://www.loom.com/embed/a9cfdda1706341579296649ec073470d?sid=38969d2a-0fe8-47fd-8539-e6df66c9fa30"
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

2. If you haven't already, configure the [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent). This helps Google display a consent screen to the user, including a summary of your project and its policies and the requested scopes of access.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/ff266d3093c84d3ab1e93255482e19ad?sid=b776ef9d-9e27-4b4f-a748-ebe222183092"
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

3. Now, you must create credentials so that your app can access Google data. To do so:
    1. Head over to [credentials page](https://console.cloud.google.com/apis/credentials), click **+ CREATE CREDENTIALS** and select **OAuth client ID**.
    2. Set **Application type** to **Web Application**.
    3. Below, under the **Authorized redirect URIs**, click **+ ADD URI**. To get this URI, open your **Supbase project > Authentication > Providers**. Open the **Google** section, copy the **Callback URL**, and paste it here.
    4. Click **CREATE**.
    5. Copy the **Client ID** and **Client secret**; you'll need this in the next step.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/ac19280f576e479f997ba3a531b8a4b4?sid=4e5e69b7-d389-4ff6-8419-5a0f88558f05"
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

4. For *Android*, you'll need to create a new credential with the **Application Type** set to **Android**. While creating, you'll need to provide the package name and [SHA-1 key](../firebase-auth/auth-initial-setup.md#generate-the-sha-1-key). **Note** that after your app goes live, you must replace the SHA-1 key with the [key from the Play Console](../firebase-auth/auth-initial-setup.md#getting-sha-keys-for-release-mode).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/6d98dc33a23541468388642e849e7e04?sid=59563c8e-f60a-4b76-81af-43ddeea21744"
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

5. Similarly, create credential for *iOS* platform as well. **Note** that after your app goes live, you must specify the *App Store* and *Team ID*.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/f7721c4382ee43599f49ea1c066e234b?sid=5948a122-cf26-4f8a-b104-0ecd3a0688b9"
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

### 2. Configure Google auth in Supabase

This step involes enabling Google login and providing the client IDs and secret in Supabase. Here's how you do it:

1. Head over to [Supabase project dashboard](https://supabase.com/dashboard/) **> Authentication > Providers**.
2. Open the **Google** section and turn on the **Enable Sign in with Google**.
3. Paste the **Client ID** and **Client secret** from the **Web** credential.
4. Paste the **Authorized Client IDs** from the **Android** credential.
5. Turn on the **Skip nonce checks** to support **iOS** platform.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/c425e1098ebd43a49feacd709051e6e7?sid=e7c16c3f-5e0d-4d4c-b389-22c7fb2c676b"
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

6. Now, you must specify the redirect URL in [Supabase project dashboard](https://supabase.com/dashboard/) **> Authentication > URL Configuration**. It is the URL to which a user is sent after successful authentication. Here's how you do it for both web and mobile.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/6d3fbf775a87431d8fd93ee0a6a190ae?sid=5cbe8e06-9604-41fd-abcc-a729b0205ef1"
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

### 3. Enable Google auth in FlutterFlow

To enable Supabase Google auth in FlutterFlow:

1. In FlutterFlow, navigate to the **Setting and Integrations** **>** **App Settings > Authentication**.
2. Open the **Supabase Authentication** section and turn on the **Enable Google Authentication** toggle.
3. Paste the **iOS** and **Web Client ID** obtained in step 1.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/e5ddd71aef2e43afa42b06bd68b3a301?sid=27bc6900-dabd-46f4-ae90-16174e271d0c"
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

### 4. Add a Google sign-in button

To allow users to authenticate, you need a login page with a button. You can create your own or use the one from the widget template or page template.

Here's how you can add the Google sign-in button from our page template:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/d8359478b2c94526bd8feb27e6daf4cd?sid=6e0b51dd-56cd-48bc-9837-3a0a5804dc82"
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

### 5. Adding create account action

Now, you can proceed to add an account creation flow, which basically consists of two actions in the following order:

1. Supabase create account action. Here's how you add it:
    1. Select the widget (e.g., Button) on which you want to add the action.
    2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
    3. Click on the **+ Add Action**.
    4. Search and select the **Log in** (under *Backend/Database > Supabase Authentication*) action.
    5. Set **Auth Provider** to **Google**.
2. Supabase [insert row action](../../database/supabase/database-actions.md#insert-row-action)

The first one creates an account in Supabase and adds the user details at *Supabase Dashboard > Authentication > Users*. However, this action does not create an entry in the "users" table you created [here](initial-setup.md#1-creating-a-users-table). To do so, you need to add another action called Supabase *insert row* action with the user's details, such as email.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/f5ce53baa6ce4c7d95f99ad3fe06ed70?sid=7f8d0916-741d-4085-b793-ea5066b54b63"
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

Currently, testing the Supabase Google login feature isn't possible in Run or Test modes due to certain restrictions. But, for web platform testing, you can publish your app with a subdomain using our [web publishing](../../../testing-deployment-publishing/publishing/web-publishing.md) feature.

For testing on mobile, you can use our [Local Run](../../../testing-deployment-publishing/running-your-app/local-run.md) feature.


### 9. Verify user creation

To verify that you have successfully added the Google authentication, you can come over to your Supabase project > Authentication > Users and verify the user entries.

![Verify user creation](../imgs/verify-user-creation.avif)
