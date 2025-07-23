---
keywords: ['firebase', 'email authentication', 'sign-in', 'flutterflow', 'error']
slug: troubleshooting/authentication/fix-firebase-email-sign-in-error
title: Fix Firebase Sign-In Error for Email/Password Configuration
---

# Fix Firebase Sign-In Error for Email/Password Configuration

When connecting your Firebase project to FlutterFlow, you may encounter the following error:

   ```text
   Could not sign in as `firebase@flutterflow.io` to your Firebase project. Make sure "Email Sign-In" is turned on for your Firebase project, and try again.
   ```

   This issue typically occurs when the **Email/Password authentication method** has not been enabled in your Firebase project or if the FlutterFlow service account does not have the required permissions.

:::info[Prerequisites]
- A connected Firebase project.
- Access to the Firebase Console with editor or owner privileges.
:::


Follow the steps to resolve the error:
1. **Enable Email/Password Authentication**
   - Open the **[Firebase Console](https://console.firebase.google.com)** and select your project.
   - Navigate to **Authentication > Sign-in Method**.
   - Locate **Email/Password** and ensure it is **enabled**.

2. **Verify Service Account Permissions**
   - Go to the **IAM & Admin** section in Firebase (or Google Cloud Console).
   - Ensure the `firebase@flutterflow.io` service account has at least the **Editor** role assigned.
   - If it’s not listed, you can manually add the email and assign permissions.

:::tip
Even if your app doesn’t use Email/Password authentication, FlutterFlow may use it during project setup or test runs. It’s recommended to enable this method during development.
:::

:::info[Additional Resources]
- [Firebase Authentication Overview](https://firebase.google.com/docs/auth)
- [FlutterFlow Firebase Integration Guide](/integrations/firebase/overview)
:::