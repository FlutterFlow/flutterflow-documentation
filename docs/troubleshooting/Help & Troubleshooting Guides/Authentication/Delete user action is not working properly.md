---
keywords: ['properly', 'delete', 'working']
author: Unknown
created_at: '1677588014'
slug: /delete-user-action-is-not-working-properly
title: Delete user action is not working properly
updated_at: '1677588855'
url: https://intercom.help/flutterflow/en/articles/7038193-delete-user-action-is-not-working-properly
---
# Delete user action is not working properly!

![](../../assets/20250430121300815719.png)

When a user attempts to delete their account, they may find that the delete action doesn't work as expected. Here are some tips for troubleshooting this issue:

Understand that the delete action in Firebase is designed to delete the user from the auth table only. This means that the user's document in the database will not be affected. If you want to delete the user's document from the database as well, you'll need to create a custom action with some custom code.

After you've completed the delete action, it's important to log out the user. This is because there is no longer a user connected to the authenticated user in the app. Logging out will ensure that the user is routed back to the login page, which is the initial page of your project.

Keep in mind that if the same user uses the same signup method to log in again, Firebase will create a new document in the database for them. This is because Firebase will connect the new login information to the old user document. 

![](../../assets/20250430121301101693.png)Note: the action we do in Flutterflow is exactly the same action we can do manually to delete a user from the authentication table in Firebase.

​