---
slug: /integrations/firebase/crashlytics
title: Crashlytics
description: Learn how to integrate Firebase Crashlytics in your FlutterFlow app.
tags: [Firebase, Crashlytics]
sidebar_position: 2
keywords: [FlutterFlow, Firebase, Crashlytics]
---

# Firebase Crashlytics
[Firebase Crashlytics](https://firebase.google.com/products/crashlytics) is a crash-reporting tool that helps you catch errors. It enables you to troubleshoot the issue by logging the details, such as the exact line number that caused the error, device name, OS version, and time when the crash happened.

To enable Firebase Crashlytics, navigate to **Settings and Integrations** > **Project Setup** > **Firebase** > Expand the **Crashlytics** section and **Enable Crashlytics**.

Firebase Crashlytics only supports catching errors on mobile platforms (Android and iOS).

You can see all the logged errors/crashes inside the Crashlytics dashboard of your [Firebase console](https://console.firebase.google.com/). There, you'll see the list of crashes (with the page name and line number that caused the issue), and you can filter it by their state, signal, device type, and OS.

![Crashlytics dashboard](imgs/crashlytics-dashboard.avif)

1. Click on the issue name to see its details.
2. To test the crash on your app, [download the app](../../testing-deployment-publishing/exporting-code/ff-cli.md), add a code that throws an error, and run it on a mobile device or emulator with an active internet connection.

![Test crash](imgs/test-crash.avif)