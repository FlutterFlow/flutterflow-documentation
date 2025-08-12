---
keywords: ['firebase', 'configuration', 'troubleshooting']
slug: /troubleshooting/authentication/resolve-firebase-sign-in-email-configuration
title: Enable Email Sign-In to Resolve Firebase Authentication Issues
---

# Enable Email Sign-In to Resolve Firebase Authentication Issues

If you see the following error:

   ```text
   Could not sign in as firebase@flutterflow.io to your Firebase project. Make sure "Email Sign-In" is turned on for your Firebase project, and try again.
   ```

Here’s how to resolve it:

1. **Enable Email Sign-In in Firebase Console**  
   Go to **[Firebase Console](https://console.firebase.google.com)**, select your project, then navigate to: Authentication → Sign-in method → Email/Password

   Ensure that the **Email/Password** sign-in provider is enabled.

2. **Verify Auth Configuration**  
   Make sure you’ve properly set up Firebase Authentication in your project settings within FlutterFlow.

3. **Check Service Account Permissions** 

   Ensure the **FlutterFlow service account** (`firebase@flutterflow.io`) has sufficient permissions to authenticate with your Firebase project.

   By completing these steps, you should be able to sign in with the `firebase@flutterflow.io` account and continue building your project in FlutterFlow without authentication issues.

   
