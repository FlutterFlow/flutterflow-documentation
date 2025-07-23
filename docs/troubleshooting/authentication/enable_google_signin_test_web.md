---
keywords: ['google', 'login', 'authentication', 'web']
slug: troubleshooting/authentication/enable-google-signin-test-web
title: Enable Google Sign-In on Web and Test Mode
---

# Enable Google Sign-In on Web and Test Mode

To successfully use social authentication features like **Google Sign-In**, **Facebook**, or **Microsoft login** during **Run/Test mode** or in your **published web application**, you must first authorize the domain used in your Firebase project's Authentication settings.

:::info[Prerequisites]
- A Firebase project linked to your FlutterFlow app.
- Access to the Firebase Console with editor or owner permissions.
:::

Follow the steps below to authorize your domain in Firebase:

1. **Open Your Firebase Project**
   - Navigate to the **[Firebase Console](https://console.firebase.google.com)**.
   - Select your project.

2. **Access the Authentication Settings**
   - Go to **Authentication > Settings**.
   - Click on the **Authorized Domains** section.

3. **Add Your Domain**
   - Click the **Add Domain** button.
   - Enter the domain you want to authorize.

   :::tip
   For FlutterFlow builds in **Run mode**, add:  
   `app.flutterflow.io`

   For deployed apps using the default domain, add:  
   `yourapp.flutterflow.app`
   :::

   ![](../assets/20250430121259325933.png)

:::note
- Firebase blocks authentication from unauthorized domains as a security measure.
- If your app uses multiple environments (e.g., staging and production), be sure to add all relevant domains.
::: 

:::info[Additional Resources]
- [FlutterFlow Firebase Integration Guide](/integrations/firebase/overview)
- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
:::
