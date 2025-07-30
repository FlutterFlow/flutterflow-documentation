---
keywords: ['firebase', 'users', 'group']
author: Unknown
created_at: '1679151141'
slug: /send-notifications-to-a-specific-group-of-users
title: Send Notifications to a Specific Group of Users
updated_at: '1711172233'
url: null
---

# Send Notifications to a Specific Group of Users

## Introduction

You can use FlutterFlow to trigger notifications to a filtered group of users based on attributes in your Firebase user collection. For example, you might want to send notifications only to users with a premium account when a new document (e.g., post) is created.

This article provides step-by-step instructions to configure this logic in your FlutterFlow project.

## :::info[Prerequisites]
- Your project is connected to Firebase.  
- Push Notifications are enabled and deployed.  
- The project is on the Blaze plan.  
- The `firebase@flutterflow.io` service account has full access.  
- A user attribute (e.g., `isPremium`) exists in your `users` collection for filtering.
:::

## Sample Project

Check out the [sample project](https://app.flutterflow.io/project/auto-notification-2bm5hz) that demonstrates this use case.

## Steps to Send Notifications to a Specific Group

1. **Query the Users Collection**  
   - On your post submission button, add a **Backend Query** action.  
   - Set **Query Type** to `Query Collection`.  
   - Choose the `users` collection.  
   - Set **Query Type** to `List of Documents`, then click **Save**.

2. **Create the New Post Document**  
   - Add a **Create Document** action to save the new post data to Firestore.

3. **Trigger the Notification**  
   - Add a **Trigger Notification** action after the document is created.  
   - Set the **Notification Parameters** (e.g., Title, Message, Initial Page).

4. **Filter the Recipients List**  
   - Under **Recipients**, click **Unset** and choose **User Document** as the data source.  
   - Select **Filter List Items**.

   :::note
   To filter users correctly, your `users` collection must include a boolean attribute (e.g., `isPremium`) or any similar field.
   :::

   - Under **Filter Conditions**, click **Unset**.  
   - Select `Items in List`.  
   - Choose the `isPremium` field and set the condition to `True`.  
   - Click **Confirm** to apply the filter.

5. **Map the Filtered List**  
   - In the recipients dialog, select **Map List Items**.  
   - Click **Unset** and select the `Reference` field under **Document Properties**.  
   - Click **Confirm** to finalize the mapping.

6. **Complete the Action Chain**  
   - Close all pop-ups and save your workflow.  
   - The notification will now be triggered automatically whenever a new post is submitted.

## Summary

This setup allows you to send targeted push notifications to specific groups of users based on custom attributes in your Firestore database. Make sure all backend queries and filtering logic are correctly configured for accurate targeting.

