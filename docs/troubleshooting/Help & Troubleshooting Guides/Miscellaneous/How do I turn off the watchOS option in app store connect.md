---
keywords: ['connect', 'store', 'turn']
author: Unknown
created_at: '1677756098'
slug: /how-do-i-turn-off-the-watchos-option-in-app-store-connect
title: How do I turn off the watchOS option in app store connect
updated_at: '1678236944'
url: https://intercom.help/flutterflow/en/articles/7044249-how-do-i-turn-off-the-watchos-option-in-app-store-connect
---
# How do I turn off the watchOS option in app store connect

Issue
I tried to deploy to the App Store and received an error about watchOS.
How To Turn Of The Build For watchOS Option
To turn off the option to build for watchOS on your Apple Developer console for your app, follow these steps:

Go to the Apple Developer website and sign in to your account.

Click on the "Certificates, Identifiers &amp; Profiles" button.

In the left-hand menu, click on the "App IDs" option.

Find the App ID for your app and click on the Edit button.

Scroll down to the "WatchKit App" section and uncheck the box next to "Enable for this App ID."

Click the "Continue" button to save your changes.

Important: This will only turn off the option to build for watchOS for the specific App ID that you are editing. If you want to turn off the option to build for watchOS for all of your apps, you will need to repeat these steps for each App ID.