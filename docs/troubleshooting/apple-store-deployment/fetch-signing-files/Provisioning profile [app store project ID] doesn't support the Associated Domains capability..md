---
keywords: ['error', 'store', 'provisioning']
slug: /provisioning-profile-app-store-project-id-doesn-t-support-the-associated-domains-capability
title: Provisioning profile [App Store project ID] doesn't support the Associated Domains capability.
---

# Provisioning Profile [App Store Project ID] Doesn't Support the Associated Domains Capability

When deploying an app through FlutterFlow to the Apple App Store, you might encounter the following error:

> **Provisioning profile [App Store project ID] doesn't support the Associated Domains capability**

This issue typically affects apps using features like **Universal Links**, **App Clips**, or **Firebase Dynamic Links**, which require the **Associated Domains** capability.

## Cause

The error occurs when the **Associated Domains** capability is not enabled for your app's App ID in the Apple Developer portal. This is required to verify domain ownership and enable app-to-site interactions.

> 💡 **Example**: You will see this error when using **dynamic links** in your FlutterFlow project.

## Resolution Steps

### 1. Log Into Apple Developer Account

- Go to the [Apple Developer Console](https://developer.apple.com/account/)
- Navigate to **Certificates, Identifiers & Profiles**
- Click **Identifiers**

![Apple Developer Identifiers](../assets/20250430121344371643.png)

### 2. Select Your App Identifier

- Find the App ID for your app.
- Click it to open its configuration.

### 3. Enable Associated Domains Capability

- In the capabilities list, enable **Associated Domains**
- No need to create a new key or change the App ID.

![Enable Associated Domains](../assets/20250430121344599814.png)

### 4. Save Changes

- Click **Save** to apply the update.
- This is usually sufficient for the initial setup.

### 5. Redeploy From FlutterFlow

- Go back to FlutterFlow and redeploy your app.
- The updated provisioning profile will now support Associated Domains.

## Verify Developer Account Subscription

### What Does This Error Really Mean?

This error can also appear if your Apple Developer account is **not on a paid plan**. The **Associated Domains** capability requires an **active paid Apple Developer subscription**.

![Apple Subscription](../assets/20250430121344826995.png)

### How to Check Your Subscription

- Sign in to the [Apple Developer Console](https://developer.apple.com/account/)
- Your subscription status will be visible on the dashboard.
  - Active accounts show as **Current**
  - If it’s expiring, you’ll see an **Expiration Date**

> 🔧 Still need help? Reach out to Apple Developer Support at [devsupport@apple.com](mailto:devsupport@apple.com)

---

By following these steps, you can resolve the provisioning profile error and ensure your app supports domain-related features like universal links and dynamic links.
