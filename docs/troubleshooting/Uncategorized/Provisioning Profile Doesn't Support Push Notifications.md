---
keywords: ['push', 'notifications', 'support']
author: Unknown
created_at: '1678745766'
slug: /provisioning-profile-doesn-t-support-push-notifications
title: Provisioning Profile Doesn't Support Push Notifications
updated_at: '1721943743'
url: https://intercom.help/flutterflow/en/articles/7126543-provisioning-profile-doesn-t-support-push-notifications
---
# Provisioning Profile Doesn't Support Push Notifications

This article runs through troubleshooting steps when you face issues after setting up push notifications. For a step-by-step guide on how to enable push notifications in your app identifier via Apple Connect, check our documentation here.

Issue Overview
When deploying an app through FlutterFlow to the Apple App Store, developers may encounter a specific error related to the "**Push Notifications**" capability. This article aims to illuminate this issue, explain its cause, and guiding you through the process of enabling this capability within your Apple Developer account's key identifier.

Full Error Message
```
Provisioning profile doesn't support the Push Notifications capability.​
```
Common Causes
The error message `Provisioning profile doesn't support the Push Notifications capability` is presented when an app that includes push notification functionality is submitted to the Apple App Store without first completing the necessary configurations. This setup is essential because the push notifications feature requires explicit permission within your Apple Developer account to function properly.​
Resolution Steps
Enable the Push Notifications capability in your Apple Developer Account
To resolve this issue, follow these steps to enable the "Push Notifications" capability for your existing app:

**Visit Your Apple Developer Account:** Log into your Apple Developer account and navigate to the "Identifiers" section under the "Certificates, Identifiers &amp; Profiles" area.​
![](../assets/20250430121236782215.png)
​

**Select Your App's Identifier:** Identify the App ID associated with the app you are deploying. This step is critical as the adjustments you're about to make are specific to the app's identifier.​

**Enable the Capability:** Within your app's identifier details, find the section for enabling capabilities. Check the option for "Push Notifications." Unlike some capabilities, there's no need to alter the primary App ID or create a new key if it's your first time enabling this capability for an App ID.​
![](../assets/20250430121236976235.png)
​

**Save Changes:** Make sure to save the changes. Even if you see UI elements suggesting further edits, enabling this feature and saving changes is enough for the initial configuration.​

**Deploy Through FlutterFlow:** With the "Push Notifications" capability now enabled for your App ID, you can deploy your app through FlutterFlow without encountering the previous error.



