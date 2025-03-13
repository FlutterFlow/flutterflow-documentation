---
slug: /integrations/firebase-storage/storage-rules
title: Deploy Storage Rules
description: Learn how to deploy storage rules in your FlutterFlow app to manage and secure your Firebase storage.
tags: [Firebase Storage, Storage Rules, Integration, Security]
sidebar_position: 1
keywords: [FlutterFlow, Firebase Storage, Storage Rules, Integration, Security]
---

# Storage Rules

Like [Firestore security rules](../../database/cloud-firestore/firestore-rules.md), Firebase Storage security rules control who can access files uploaded by your users in your application.

For example, by setting the storage rules, you can allow only authenticated users (e.g., via Email, Google Sign-in, etc.) to upload or send images.

:::tip[For beginners]
If you are new to storage rules, you may want to check out this overview about [**Getting Started 
With Storage Rules**](https://firebase.google.com/docs/storage/security).
:::

## Deploying storage rules

To deploy the storage rules:

1. First, make sure Firebase Storage is enabled or configured in your project by visiting the 
[Firebase console](https://console.firebase.google.com/u/0/) and viewing the **Storage** tab.

2. Return to FlutterFlow, navigate to **Settings & Integrations > Project Setup > Firebase**.
3. Scroll down to the **Firebase Storage** section.
4. To set the storage rules outside of the FlutterFlow (i.e., from the Firebase Console), enable the **Manage Outside of FlutterFlow**.
5. To only allow accessing the images, videos, files, etc., to the users who uploaded it, enable **Make Users Uploads Private**.
6. Click the **Deploy** button.
7. A pop-up will open. Click **Yes** to continue and click **Deploy Now**.

<div class="video-container"><iframe src="https://www.loom.
com/embed/b8c1267bb2d048308c506ee6721001da?sid=8c88648a-5980-4961-907c-2f2e0c0c4ab9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

:::tip[Learn more]

Learn more about Firebase Storage Rules [here](https://firebase.google.com/docs/storage/security).
:::