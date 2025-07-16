---
keywords: ['where', 'sign', 'provisioning']
author: Unknown
created_at: '1660215746'
slug: /solving-for-issues-where-provisioning-profile-doesn-t-support-sign-in-with-apple
title: Solving for Issues Where Provisioning Profile Doesn't Support 'Sign in with
  Apple'
updated_at: '1713208860'
url: https://intercom.help/flutterflow/en/articles/6463189-solving-for-issues-where-provisioning-profile-doesn-t-support-sign-in-with-apple
---
# Solving for Issues Where Provisioning Profile Doesn't Support 'Sign in with Apple'

Understanding the 'Sign in with Apple' Capability Issue
When deploying an app through FlutterFlow to the Apple App Store, developers might encounter a specific error regarding the "Sign in with Apple" capability. This article aims to shed light on this issue, explaining its cause and guiding you through the process of enabling this capability within your Apple Developer account's key identifier.​

Root of the Problem
The error message "Provisioning profile doesn't support the Sign in with Apple capability" occurs when an app that includes the **Apple Sign** In method is submitted to the App Store without the proper configuration steps being completed. This configuration is crucial because the "Sign in with Apple" feature requires explicit permission set within your Apple Developer account to work seamlessly with your app.​

Enabling "Sign in with Apple" Capability
To resolve this issue, follow these steps to enable the "Sign In with Apple" capability for your existing app:

**Visit Your Apple Developer Account:** Log into your Apple Developer account and navigate to the "Identifiers" section under the "Certificates, Identifiers &amp; Profiles" area.​
![](../assets/20250430121345698106.png)
​

**Select Your App's Identifier:** Find the App ID associated with the app you're deploying. This is crucial as the configuration you're about to adjust is tied specifically to the app's identifier.​

**Enable the Capability:** Within your app's identifier details, locate the section for enabling capabilities. Check the option for "Sign in with Apple." There's no need to alter the primary App ID or create a new key for this step if it's your first time enabling this capability for an App ID.​
![](../assets/20250430121345966687.png)
​

**Save Changes:** Ensure you save the changes made. Contrary to some UI elements that might suggest editing further, simply enabling the feature and saving suffices for the initial setup.​

**Deploy Through FlutterFlow:** With the "Sign in with Apple" capability now enabled for your App ID, proceed to deploy your app through FlutterFlow.​​

**Contact Support if Necessary:** If you encounter any issues or your app does not utilize the "Sign in with Apple" method, it's advisable to contact FlutterFlow support for tailored assistance. You can reach out via live chat or email at support@flutterflow.io.​​
For more information on deploying apps with FlutterFlow and other app development topics, visit Apple Sign-in Documentation,  FlutterFlow's documentation and community resources.​