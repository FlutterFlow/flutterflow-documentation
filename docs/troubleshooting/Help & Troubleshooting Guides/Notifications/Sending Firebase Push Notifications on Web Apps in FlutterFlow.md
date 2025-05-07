---
keywords: ['firebase', 'notifications', 'push']
author: Unknown
created_at: '1678110260'
slug: /sending-firebase-push-notifications-on-web-apps-in-flutterflow
title: Sending Firebase Push Notifications on Web Apps in FlutterFlow
updated_at: '1713210254'
url: https://intercom.help/flutterflow/en/articles/7053033-sending-firebase-push-notifications-on-web-apps-in-flutterflow
---
# Sending Firebase Push Notifications on Web Apps in FlutterFlow

Introduction 
FlutterFlow does not support sending Firebase push notifications on web apps out of the box, but Firebase supports this functionality. While the feature is not out-of-the-box in FlutterFlow today, there are two workarounds you can take.

Workarounds for In-Browser Web Push Notifications
There are two alternative ways to implement this functionality in your FlutterFlow project:

**Custom Actions**
You can create custom actions within FlutterFlow to send push notifications using Firebase. This approach requires writing additional code and integrating it into your FlutterFlow project. While it may involve more effort, it provides flexibility and allows you to customize the push notification functionality according to your specific requirements. 

This article here describes how to set web notifications through Firebase and Sendbird. ​​
**Back-End Functions**
Another option is to handle the sending of push notifications through your project's back-end functions. By writing server-side code, you can utilize the Firebase SDK to send push notifications to web apps. This approach separates the notification logic from the FlutterFlow front-end and allows for more control over the notification process. You can also use custom widgets to build this functionality.

It's important to note that although sending Firebase push notifications on web apps is not currently available as a built-in feature in FlutterFlow, *the platform is continuously evolving and adding new functionalities based on user feedback and requests.*

Additional Resources



