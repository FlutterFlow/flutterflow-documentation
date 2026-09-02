---
keywords:
  - firebase
  - web push
  - notifications
  - custom actions
slug: /troubleshooting/notifications/firebase-push-notifications-on-web
title: Firebase Push Notifications on Web
description: >-
  FlutterFlow currently does not support sending Firebase push notifications on
  web apps natively.
tags:
  - FlutterFlow
  - Troubleshooting
  - Notifications
last_verified: 2026-09-02
---
# Firebase Push Notifications on Web

FlutterFlow currently does not support sending Firebase push notifications on web apps natively. However, Firebase itself supports this capability. This guide outlines alternative approaches to enable Firebase push notifications on web projects built with FlutterFlow.

## Workarounds for Implementing Web Push Notifications

There are two primary methods to implement Firebase web push notifications in FlutterFlow projects:

- **Use Custom Actions:**

    - Use custom code to request browser permission, register the service worker, obtain/refresh the FCM registration token, and handle foreground messages.
    - This method requires writing custom code to handle notification logic and integrate it into FlutterFlow.
    - Custom actions offer flexibility for handling different types of notifications based on the app’s needs.
    - The Firebase Web SDK can be used alongside your FlutterFlow project to achieve this.

    Refer to official Firebase documentation for detailed steps on **[setting up web push notifications](https://firebase.google.com/docs/cloud-messaging/js/client)**.


- **Use Back-End Functions:**

    - Implement authorized server-side code using Firebase Functions or another backend service to send messages. Never send with Admin credentials from browser/custom-action code.
    - Backend functions handle sending notifications independently of the FlutterFlow frontend.
    - This approach allows using the Firebase Admin SDK to programmatically send push notifications to targeted web clients.
    - Backend solutions also offer better scalability, error handling, and control over notification delivery.

:::note
- Web push notification support requires properly configured Firebase Cloud Messaging, service workers, and valid VAPID keys.
- FlutterFlow may add native support for web push notifications in future updates as the platform evolves.
- Web push requires HTTPS (except supported localhost development), explicit user permission, and browser/platform support. Tokens can rotate; update stored tokens and remove invalid registrations.
:::

## Related documentation

See [FCM Token Generation Troubleshooting](/troubleshooting/notifications/fcm-token-generation-troubleshooting) for a related FlutterFlow workflow.
