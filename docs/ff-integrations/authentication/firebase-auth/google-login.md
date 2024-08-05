---
slug: /integrations/authentication/firebase/google-oauth-login
title: Google OAuth Login
description: Learn how to add Google OAuth login in your FlutterFlow app.
tags: [Google OAuth, Authentication, Firebase]
sidebar_position: 1
keywords: [FlutterFlow, Google OAuth, Authentication, Firebase]
---

# Google Login

Google Sign-In allows users to authenticate using their Google Accounts.

:::info[Prerequisites]

Before getting started with this section:

- Complete [**Firebase Setup**](../../firebase/connect-to-firebase-setup.md)
- Complete [**Initial Setup**](auth-initial-setup.md)
- Added **SHA-1 key** and regenerated **Config Keys**.
:::


## Enable Google Sign-in Provider in Firebase

- Open the Firebase Console and click on Authentication
- Follow the steps to enable Google Sign in for your Firebase project

<iframe src="https://demo.arcade.software/I50vTFEEyhXfU82yLick?embed&show_copy_link=true" title="EcommerceFlow - Authentication - Sign-in method - Firebase console" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>

## Add a Login Screen with Google Login Action

### Create a Login Screen

To allow users to authenticate, you need a Login or Sign-in Page with a button.
You can create your own or use the one from page templates.

### Add Login Action

- On your Google Login button, select **Actions** from the properties panel (the
  right menu) and select Add Action.
- Search and select the Log In (under **Backend/Database > Firebase
  Authentication**) action.
- Set Auth Provider to Google.

<iframe src="https://demo.arcade.software/CBVoec46awMc3yNGLuVJ?embed&show_copy_link=true" title="EcommerceFlow - FlutterFlow" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>

- Enable the **Create User Document** and set the **Collection** to **users**.
  After successful login, this will insert the user's account details, such as
  email,
  name, and photo, into the 'users' collection. If a user already exists, it
  won't add details again.

:::info
To let users log out of your app, you can use the [**Logout**](../logout-action.md) action.
:::

## Test Google Login in various platforms

### Running on Test Mode/Run Mode

1. To test Google sign-in in Test or Run mode, you must add the authorized
   domain in the Firebase console and Google cloud console.

    - **For Test mode**, you can open the browser console, try logging in, and
      get the domain from the browser console. It should look like 'ff-debug-service-frontend-ygxkweukma-uc.a.run.app'. For *Pro* users, the URL will include "-pro" in the middle, such as 'ff-debug-service-frontend-**pro**-ygxkweukma-uc.a.run.app'.

    - **For Run mode**, you can simply use 'app.flutterflow.io'.

2. To add in Firebase console:

    - Open the Firebase console and click on Authentication and select the
      Setting tab.

    - Select **Authorized domains** from the left side menu.

    - Click **Add domain**.

3. To add in Google cloud console:

    - Head over to
      your [Project Credentials](https://console.cloud.google.com/apis/credentials?project=_) page.
   
    - Ensure you are on the correct project. In our case, we are using the
      [EcommerceFlow demo project](https://bit.ly/ff-docs-demo-v1), it will be different for you.
   
   ![credential-page.png](../imgs/credential-page.png)

    - Under the '**OAuth 2.0 Client IDs**', select '**Web client** (auto created by
      Google Service)'.

    - Under the '**Authorized JavaScript origins**', click ADD URI and add both the
      URL.
    - Similarly, under the '**Authorized redirect URIs**', click ADD URI, add both
      the URL and append '/__/auth/handler' at the end.

<iframe src="https://www.loom.com/embed/efd5b99b858d4de8bca55452c6e1d20c" frameborder="0"
allowFullScreen style={{ width: '100%', height: '600px' }}></iframe>

<figure>
    
  <figcaption class="centered-caption"></figcaption>
</figure>

4. If you don't see the Web client created yet, you can create new one by
   clicking **+ CREATE CREDENTIALS**, selecting OAuth client ID and then select
   Application type to Web application.


![add-app.gif](../imgs/add-app.gif)

### Verify user created in Firebase Dashboard

To confirm the successful integration of Google authentication and the creation of users, navigate
to your Firebase project > Authentication > Users and check the user entries.

![verify-google-auth-users.png](../imgs/verify-google-auth-users.png)