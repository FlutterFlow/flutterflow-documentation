---
keywords: ['firebase', 'users', 'notifications']
author: Unknown
created_at: '1679151111'
slug: /how-to-send-notifications-to-multiple-users
title: 'How To: Send Notifications to Multiple Users'
updated_at: '1687270284'
url: https://intercom.help/flutterflow/en/articles/7158805-how-to-send-notifications-to-multiple-users
---
# How To: Send Notifications to Multiple Users

FlutterFlow enables you to schedule and trigger notifications automatically for multiple users. This guide provides step-by-step instructions and best practices for sending notifications to users from your collection when a document is created.

---

## 1. Use Case

You may want to automatically send notifications to multiple users when a document is created in your app. This is useful for features like group messaging, announcements, or collaborative workflows.

---

## 2. Sample Project

- Explore the sample project: [Auto Notification Example](https://app.flutterflow.io/project/auto-notification-2bm5hz)
- Follow the steps below to build this functionality in your own project.

---

## 3. Project Configuration

### 🔥 Set Up Firebase
- Ensure your project is correctly set up with Firebase.
- [How to set up Firebase in FlutterFlow](https://docs.flutterflow.io/data-and-backend/firebase/overview)

### 👤 Grant Permissions
- Make sure the **firebase@flutterflow.io** account has all necessary permissions.
- [How to enable access to your project](https://docs.flutterflow.io/data-and-backend/firebase/overview)

### 💳 Blaze Plan Required
- Your project must be on the **Blaze** plan to send notifications.

### 📲 Enable Push Notifications
- Enable push notifications in your project and deploy them.

---

## 4. Sending Notifications to Multiple Users

You can send notifications to multiple users from the users collection when a post is added.

### 📝 Steps:

1. **Add a Backend Query to the Submit Button**
    - Set Query type to `Query Collection`.
    - Select your data source collection (e.g., `users`).
    - Set Query type to `List of Documents` and click `Save`.

2. **Add Create Document Action**
    - Add a create document action to the button.
    - Set the value to the parameters sent to Firebase.

3. **Add Trigger Notification Action**
    - Add another action: trigger notification.
    - Set notification parameters (title, message, initial page, etc.).
    - In the recipient section, select multiple recipients.

4. **Configure Recipients**
    - Click on the `unset` section; a pop-up will appear.
    - Select `user document` as the data source.
    - In the options, select `filter list items`.
    - Click `unset` under filter conditions; a pop-up will appear.
    - Select `Items in list`, then under document properties, select `Document Exists`.
    - Click `Confirm` to return to the previous dialog.
    - In the pop-up, select `Map List Items`.
    - Click `unset`, then under `Document Properties`, select `Reference`.
    - Click `Confirm` in all pop-ups.

5. **Close the Action Chain**
    - The notification will be triggered automatically once a new post has been sent successfully.

---

> **Summary:**
> - Set up Firebase and permissions
> - Use backend queries and actions to send notifications
> - Configure recipient selection for multiple users
> - Notifications are triggered automatically on document creation

For more details, see the [official support article](https://intercom.help/flutterflow/en/articles/7158805-how-to-send-notifications-to-multiple-users).