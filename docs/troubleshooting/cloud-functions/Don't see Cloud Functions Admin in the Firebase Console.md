---
keywords: ['firebase', 'cloud', 'console']
author: Unknown
created_at: '1677585504'
slug: /don-t-see-cloud-functions-admin-in-the-firebase-console
title: Don't see Cloud Functions Admin in the Firebase Console
updated_at: '1678226378'
url: https://intercom.help/flutterflow/en/articles/7038084-don-t-see-cloud-functions-admin-in-the-firebase-console
---

# Don't See Cloud Functions Admin in the Firebase Console

## Issue

You’re trying to assign `firebase@flutterflow.io` the **Cloud Functions Admin** role but can't find the option in your Firebase Console.

## Background

The **Cloud Functions Admin** permission is necessary for several FlutterFlow features—such as Push Notifications. While assigning this role is optional, **not doing so will limit your ability to use functions that depend on Firebase Cloud Functions.**

> **Note:** You must be on the **Blaze** plan in Firebase to access this feature.

## How to Enable the Blaze Plan in Firebase

To activate the Blaze plan and enable Cloud Functions permissions:

1. Open your [Firebase Console](https://console.firebase.google.com) and go to your project.
2. Navigate to **Project Settings**.
3. Click on **Usage and Billing**.
4. In the **Usage and Billing** section, go to the **Details and Settings** tab.
5. Confirm that:
   - Your project is on the **Blaze** plan.
   - Your billing account is active and correctly connected.

![Firebase Blaze Plan Settings](../assets/20250430121301671136.png)
![Billing Section in Firebase](../assets/20250430121302032059.png)

Once these steps are complete, you'll be able to assign `firebase@flutterflow.io` the Cloud Functions Admin role, granting FlutterFlow access to manage backend functions.

![Permission Management in Firebase](../assets/20250430121302300256.png)
