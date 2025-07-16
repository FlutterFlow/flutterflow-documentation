---
keywords: ['notification', 'firebase', 'troubleshooting']
author: Unknown
created_at: '1656527168'
slug: /advanced-push-notification-troubleshooting
title: Advanced Push Notification Troubleshooting
updated_at: '1678372324'
url: None
---
# Advanced Push Notification Troubleshooting

If push notifications are not sending as expected, this article will help you identify and correct the most common issues.

**Please note that push notifications will not work in these situations:**

Push notifications will not work on an iOS simulator. To test you will need to use a real device. Here are instructions on how to do this.

Push notifications will not work if the user is not logged in to your app.

Push notifications will not work if you have the app open on your device. 

**Ensure you have created a push notification key for Apple.**
Apple requires developers to create a key for the push notifications inside the Apple Developer Console to verify the push notification's sender.

Head to your Apple Developer account and select Certificates, Identifiers &amp; Profiles &gt; Keys.

![](../assets/20250430121405271522.png)If you haven't added a push notification key, you will need to add this.

Here are instructions on how to add a push notification key.​
**Ensure you have added the APN key to Firebase.**
Head to the Firebase Console and open the project dashboard for your project (click the project tile). Select Project Settings &gt; Project Settings &gt; Cloud Messaging.

Scroll down to the iOS section. If you have no files listed under APNs Authentication Key (like the photo below), you need to upload the APN Key.

![](../assets/20250430121405587477.png)Here are the instructions on how to upload the APN key to Firebase.​
**Ensure you have added a push notification identifier for Apple.**
You must add an Identifier to be able to send the push notifications to the iOS devices after you deploy your app to the app store.

Head to your Apple Developer account and select Certificates, Identifiers &amp; Profiles.

![](../assets/20250430121405921022.png)If you haven't created a push notification identifier, you will need to add this.

Here are instructions on how to create your push notification identifier.

**Ensure you are using the latest version of FlutterFlow**
To upgrade to the latest version of FlutterFlow select Ctrl + R on Windows or Cmd + R on Mac. 

After you have done this, clear your browser cache and log out/in to FlutterFlow.

