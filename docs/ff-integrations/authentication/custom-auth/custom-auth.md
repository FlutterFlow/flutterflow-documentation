---
slug: /integrations/authentication/custom-authentication
title: Custom Authentication
tags:
  - FlutterFlow
  - Integrations
  - Authentication
description: Learn how to add custom authentication in your FlutterFlow app.
sidebar_position: 1
keywords:
  - FlutterFlow
  - Custom Authentication
  - Authentication
last_verified: 2026-09-02
---
# Custom Authentication

Custom authentication allows you to manage auth-related data (login details) while utilizing your own backend to authenticate users.

:::tip[concepts]

Understanding the concept of [**Token**](token.md) is essential for grasping how secure access and user verification work in an application.

:::

## Adding custom authentication

Let's see how to add custom authentication by building an example that looks like this:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/8252c2d3d18a4da7a660ae29695d1b5f?sid=281d547c-6f07-4bbe-96df-fd267926f2b6" title="Custom Authentication interactive tutorial"
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

The steps to add custom authentication are as follows:

1. [Enabling custom authentication](#1-enabling-custom-authentication)
2. [Building pages](#2-building-pages)
3. [Authenticate users](#3-authenticate-users)
4. [Save auth data](#4-save-auth-data)
5. [Access auth data](#5-access-auth-data)
6. [Update auth data](#6-update-auth-data)
7. [Logout](#7-logout)

### 1. Enabling custom authentication

To enable custom authentication in FlutterFlow:

1. Open **Settings and Integrations > App Settings > Authentication**.

2. Turn on the **Enable Authentication** toggle and set **Authentication Type** to **Custom**.
3. To ensure that your users are directed to the appropriate pages based on their login status, you must set the initial pages.
4. **Persist Auth Sessions** restores the previous custom-authentication session when the app restarts. Keep **Store Auth Session Securely** enabled so FlutterFlow uses the platform's protected storage. On web, no browser storage can protect a token from malicious JavaScript already executing on the same origin; a trusted backend with an `HttpOnly`, `Secure`, appropriately scoped cookie offers stronger protection when your architecture supports it.
5. After successful authentication, your backend may return an authentication token, refresh token, expiry time, user ID, and profile data. Enable **Associate User Data Type** only if you want profile fields available under **Authenticated User > User Data Fields**. Model non-secret profile data in that [Custom Data Type](../../../resources/data-representation/custom-data-types.md); authentication and refresh tokens already have dedicated fields in the **Log In** action and should not be duplicated into general user data.

:::danger[Token safety]
Use HTTPS for every authentication request. Never log tokens, display them in error messages, include them in analytics, or store them in page/app state. Configure your backend to issue short-lived access tokens, rotate or revoke refresh tokens as appropriate, and validate authorization for every protected request.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/ffcacb70ae6741728a15c17790b95435?sid=bdd85bca-61a3-434d-aa50-c6428b9f3bd6" title="Custom Authentication interactive tutorial"
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

### 2. Building pages

Let's add a page that allows users to create accounts and log in. To speed up, you can add a page from the template. Here is the page added from the templates, and after some modification, it looks the below:

Also, see how to [build a page layout](../../../ff-concepts/layout/building-layout.md) in case you want to build a page from scratch.

![auth-2-template.avif](../imgs/auth-2-template.avif)

### 3. Authenticate users

On each page, on click of a button, you can add appropriate authentication related [API calls](../../../resources/control-flow/backend-logic/api/rest-api.md). For this example, we use [this](https://dummyjson.com/docs/auth).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/e4cfee83343f4e2a9e39d4f4227d6f92?sid=f6068d52-1293-47cc-b263-c29dec5ec844" title="Custom Authentication interactive tutorial"
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

### 4. Save auth data

After successful authentication, you can save the auth related data using the 'Log in' action. Here's how you do it:

1. Inside the **TRUE** branch of the [previous API call](#3-authenticate-users), add the **Log in** (under *Backend/Database > Custom Authentication*) action.

2. Under the **User Auth Properties**, you can set values for **Authentication Token**, **Refresh Token**, **Token Expiry Time**, and **User UID**. **Note that for the 'Persist Auth Sessions' option to work, you must set the Authentication Token**.
3. **Set User Data** to store the result of the previous API call (i.e., auth details) in a Custom Data Type. See how to get the [JSON into Data Type](../../../resources/control-flow/backend-logic/api/rest-api.md#json-to-data-type).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/88bffb563e8c47b7a5d103a5f513f8ce?sid=358b4a16-1482-48a9-9046-7cf106040f79" title="Custom Authentication interactive tutorial"
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

### 5. Access auth data

To access the auth data after a user logs in, open the **set from variable** menu **> Authenticated User >** choose **from Auth Properties** or **User Data Fields**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/165e3f5cdd46441b8bdadd4d46ac0a13?sid=28a57da0-49a9-4adb-9f65-e0af6f57f447" title="Custom Authentication interactive tutorial"
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

### 6. Update auth data

You may want to update the auth data in situations like updating the access token with the new one after it has expired. You can do so using the **Update Authenticated User** action.

Here's exactly how you do it:

1. When the access token has expired, call your backend's documented refresh endpoint. A `401 Unauthorized` response can also mean a missing, invalid, revoked, or incorrectly scoped credential, so refresh only when the backend protocol or error response identifies an expired token. Prevent retry loops and log the user out if refresh fails.

2. After the backend returns a valid replacement, add **Update Authenticated User**.
3. Under **User Auth Properties**, update **Authentication Token**, **Token Expiry Time**, and **Refresh Token** if the backend rotated it.

![update-auth-data.avif](../imgs/update-auth-data.avif)

### 7. Logout

You can logout a user by adding the **Log Out** action.

![logout.avif](../imgs/logout.avif)
