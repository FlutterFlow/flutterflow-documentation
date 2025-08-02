---
keywords: ['firebase', 'users', 'group']
slug: troubleshooting/notifications/send-notifications-to-user-groups
title: Send Notifications to Specific User Groups
---

# Send Notifications to Specific User Groups

This guide explains how to send push notifications to a specific group of users in your FlutterFlow project based on an attribute such as `isPremium`. This is useful when you want to automatically notify a user segment whenever a new document (e.g., a post) is created.

You can review the full working example in this **[sample FlutterFlow project](https://app.flutterflow.io/project/auto-notification-2bm5hz)**.

:::info[Prerequisites]
- Your project must be connected to Firebase.
- Push notifications must be enabled and deployed.
- The project must be on the **Blaze** plan.
- The `firebase@flutterflow.io` service account must have proper permissions.
:::

**Configure the Project:**

1. Ensure Firebase is set up correctly in your FlutterFlow project.  
   → **See**: **[Firebase Integration Guide](/integrations/firebase/overview)**

2. Make sure push notifications are enabled and deployed from **Settings > Notifications**.

3. Add a user attribute (e.g., `isPremium`) in your **users** collection to filter recipients.

## Create the Notification Workflow

1. Select the **Submit** button or trigger event.
2. Add a **Backend Query** action:
   - **Query Type**: `Query Collection`
   - **Collection**: `users`
   - **Query Mode**: `List of Documents`

3. Add a **Create Document** action to create the post or data entry.

4. Add a **Trigger Notification** action:
   - Set the notification `title`, `message`, and `initial page`.

5. In the **Recipient** section:
   - Click `unset` to select the recipient source.
   - Choose **User Document**.
   - Select **Filter List Items**.

   :::note
   To filter a specific group, such as premium users, ensure the users collection includes a boolean attribute like `isPremium`.
   :::

6. In the filter condition popup:
   - Select **Items in list**
   - Set **Document Property** to `isPremium`
   - Choose **is equal to** → `True`

7. Click **Confirm** to save the condition.
8. Back in the recipient popup, select **Map List Items**.
9. Click `unset`, then select **Reference** under Document Properties.
10. Click **Confirm** in all dialogs to complete the action chain.

The notification will be automatically triggered whenever a new document is created, and it will be sent only to users that match the filter condition.
