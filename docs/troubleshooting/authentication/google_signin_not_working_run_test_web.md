---
keywords: ['google', 'work', 'login']
slug: google-signin-not-working-run-test-web
title: Fix Google Sign-In Not Working in Run/Test Mode or Web
tag: google_signin_run_test_web
---

# Fix Google Sign-In Not Working in Run/Test Mode or Web

If you're using social login features like **Google Sign-In**, **Facebook**, or **Microsoft login** in FlutterFlow and they are not working in **Run**, **Test**, or **Web** mode, the issue is likely due to missing authorized domains in Firebase Authentication.

To enable these login methods, you need to **whitelist your domain** in Firebase.

## Cause

Social logins won't function in web or test modes unless your app’s domain is explicitly listed in Firebase's **Authorized Domains**. Without this, Firebase blocks authentication requests coming from unrecognized sources.

## Solution

Follow these steps to add your domain to Firebase:

### 1. Open Firebase Console

- Go to [Firebase Console](https://console.firebase.google.com/)
- Select your project

### 2. Navigate to Authentication Settings

- Go to **Authentication** → **Settings** → **Authorized Domains**

### 3. Add Your Domain

- Click **Add Domain**
- Add the domain where your app runs in Run/Test/Web mode
  - For **Run mode** in FlutterFlow: `app.flutterflow.io`
  - For **published web app**: `yourapp.flutterflow.app`

![Firebase Authorized Domains](../assets/20250430121259325933.png)

## Example

If your app is live at: https://mytestproject.flutterflow.app 

Then add: mytestproject.flutterflow.app


to the list of Authorized Domains.

## Summary

Adding the correct domains ensures Firebase recognizes them as trusted sources, allowing social login methods to function properly across web, run, and test environments.

For more details, see [Firebase Authentication Documentation](https://firebase.google.com/docs/auth/web/hosting-resolver).




