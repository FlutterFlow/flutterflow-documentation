---
slug: /concepts/notifications
title: Notifications
description: >-
  Notifications are alerts or messages that appear on a user's device outside
  the normal UI flow of an app.
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 0
keywords:
  - FlutterFlow
  - Notifications
  - Concepts
last_verified: 2026-09-02
---
# Notifications

**Notifications** are alerts or messages that appear on a user's device outside the normal UI flow of an app. They can inform the user of time-sensitive or high-priority messages, events, or actions that require attention. Notifications may appear as banners, alerts, pop-ups, or lock-screen notifications, depending on user preferences and platform design guidelines.

Notifications enhance your app by increasing user engagement and delivering critical information in real time. Whether it’s an urgent alert or a gentle nudge, these timely messages:

- **Prompt User Action**: Remind users to perform tasks or revisit the app, ensuring higher retention and conversion.
- **Foster Engagement**: Encourage ongoing interaction through updates, promotions, or new content notifications.
- **Deliver Value**: Provide relevant insights—such as location-specific alerts or personalized reminders—at the right moment.

## Types of Notifications

Generally, notifications can be divided into two main categories: **Local Notifications** and **Push (remote) Notifications**.

**Local Notifications** are scheduled directly on the device and do not require a server component. They are commonly used for time-based reminders or location-based triggers, such as a daily workout reminder at 7:00 AM. To implement local notifications in FlutterFlow, you can integrate the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package using [custom actions](../../ff-concepts/adding-customization/custom-actions.md).

**[Push Notifications](push-notifications.md)** are delivered from a remote server through a platform-specific push service. They are commonly used for chat messages, alerts, and news updates. FlutterFlow's built-in push-notification flow uses [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) (FCM); using another push provider requires its own integration or custom code.
