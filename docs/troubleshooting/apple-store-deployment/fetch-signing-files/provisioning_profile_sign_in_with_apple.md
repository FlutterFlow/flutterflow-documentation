---
keywords: ['where', 'sign', 'provisioning']
slug: provisioning-profile-sign-in-with-apple
title: Fix Provisioning Profile Error for 'Sign in with Apple'
---

# Fix Provisioning Profile Error for 'Sign in with Apple'

When submitting an iOS app to the App Store using FlutterFlow, you may encounter the following error:

> **Provisioning profile doesn't support the Sign in with Apple capability**

This issue arises when your app uses Apple Sign-In, but your Apple Developer account has not properly configured this capability for your app's identifier.

## Cause

The "Sign in with Apple" feature **requires explicit enablement** in your Apple Developer account. If this is not configured, the provisioning profile generated will not include the necessary entitlements, and the build will fail.

## Solution

Follow these steps to enable the **Sign in with Apple** capability:

### 1. Log into Apple Developer Account

- Visit the [Apple Developer Console](https://developer.apple.com/account/)
- Navigate to **Certificates, Identifiers & Profiles**
- Click **Identifiers**

![Apple Developer Identifiers](../assets/20250430121345698106.png)

### 2. Select Your App Identifier

- Find the App ID for your application.
- Click on it to edit its configuration.

### 3. Enable "Sign in with Apple" Capability

- Scroll to the **Capabilities** section.
- Enable **Sign in with Apple**
- You do **not** need to create a new key or App ID.

![Enable Sign in with Apple](../assets/20250430121345966687.png)

### 4. Save Changes

- Click **Save** to apply the changes.
- You do **not** need to modify other fields.

### 5. Re-deploy via FlutterFlow

Return to FlutterFlow and redeploy your app after enabling the capability.

## Still Having Trouble?

If you're still facing issues—or if your app does **not** use Apple Sign-In but the error persists:

- Contact FlutterFlow Support via **Live Chat** or email at [support@flutterflow.io](mailto:support@flutterflow.io)
