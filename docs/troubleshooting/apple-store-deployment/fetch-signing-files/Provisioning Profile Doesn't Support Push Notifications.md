---
keywords: ['push', 'notifications', 'support']
slug: /provisioning-profile-doesn-t-support-push-notifications
title: Provisioning Profile Doesn't Support Push Notifications
---

# Provisioning Profile Doesn't Support Push Notifications

This article outlines the troubleshooting steps when encountering issues with push notifications during app deployment. If you're unsure how to enable push notifications in your app identifier via Apple Developer, refer to the step-by-step guide in our documentation.

## Issue Overview

When deploying an app through FlutterFlow to the Apple App Store, developers may encounter this error:

> **Provisioning profile doesn't support the Push Notifications capability**

This occurs when the **Push Notifications** capability hasn't been enabled for your App ID in your Apple Developer account.

## Full Error Message

```text
Provisioning profile doesn't support the Push Notifications capability.
```


## Common Causes

This error arises when the provisioning profile for your app is missing the necessary push notification entitlements. Push Notifications require **explicit configuration** within your Apple Developer account to function correctly.

## Resolution Steps

### 1. Enable Push Notifications in Apple Developer Account

Follow these steps to configure your App ID properly:

#### Visit Your Apple Developer Account

- Go to the [Apple Developer Console](https://developer.apple.com/account/)
- Navigate to **Certificates, Identifiers & Profiles**
- Select **Identifiers**

![Apple Developer Account](../assets/20250430121236782215.png)

#### Select Your App Identifier

- Locate the App ID for your project.
- Click it to open the identifier details.

#### Enable the Capability

- Scroll down to the **Capabilities** section.
- Check **Push Notifications**

> No need to generate a new App ID or modify other keys.

![Enable Push Notifications](../assets/20250430121236976235.png)

#### Save Changes

- Click **Save** to apply the configuration.

#### Deploy via FlutterFlow

- Return to FlutterFlow and deploy your app again.
- The updated provisioning profile will now include Push Notifications.

## Summary

By enabling **Push Notifications** in your App ID configuration, you ensure the provisioning profile supports this feature and avoid deployment errors. This is a one-time setup per App ID.
