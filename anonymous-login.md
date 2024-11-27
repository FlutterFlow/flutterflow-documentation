---
slug: /integrations/authentication/firebase/anonymous-login
title: Anonymous Login
description: Learn how to implement anonymous login in your FlutterFlow app.
tags: [Anonymous Login, Authentication, Firebase]
sidebar_position: 6
keywords: [FlutterFlow, Anonymous Login, Authentication, Firebase]
---

# Anonymous Login

:::info[Prerequisites]

Before getting started with this section:

- Complete [**Firebase Setup**](../../firebase/connect-to-firebase-setup.md)
- Complete [**Initial Setup**](auth-initial-setup.md) required for authentication.
- Learn more about the concepts
of [**Anonymous Authentication**](../authentication-methods.md#anonymous-authentication)
:::

## Enable Anonymous Authentication in Firebase

To enable Anonymous authentication, first go to your Firebase console and enable
the authentication provider:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/rzWEzk1DdYGG7V5AA8pd?embed&show_copy_link=true"
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

## Add Anonymous Login Action

1. On the button designated for anonymous authentication, add a new Action.

2. Search for and select the **Log In** action (located under Backend/Database > Firebase
   Authentication).

3. Set the Auth Provider to **Anonymous**.

4. Enable the **Create User Document** toggle and set the Collection to _users_. This action will
   create an entry for the user in the database without any details upon successful login.

   
:::info
To let users log out of your app, you can use the [**Logout**](auth-actions.md#logout-action) action.
:::