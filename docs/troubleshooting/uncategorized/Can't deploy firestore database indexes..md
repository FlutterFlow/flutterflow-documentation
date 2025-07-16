---
keywords: ['database', 'firestore', 'deploy']
author: Unknown
created_at: '1677502144'
slug: /can-t-deploy-firestore-database-indexes
title: Can't deploy firestore database indexes.
updated_at: '1677879784'
url: https://intercom.help/flutterflow/en/articles/7034528-can-t-deploy-firestore-database-indexes
---
# Can't deploy firestore database indexes.

Whenever you add or edit a query with different filters, FlutterFlow will prompt you to deploy your indexes. By deploying indexes, FlutterFlow creates your database indexes on your behalf in the Firebase project's Firestore database indexes.

Before deploying indexes, it is important to read this documentation about indexes provided by FlutterFlow.​
![](../assets/20250430121307457486.png)​
If you are unable to deploy indexes, please complete these troubleshooting steps:

Ensure you have **email sign-in enabled. **Here are instructions on how to do this.

Ensure you have added the following cloud permissions for firebase@flutterflow.io: **Editor**, **Cloud Functions Admin**, and **Service Account User**. Here are instructions on how to do this.

Update your Firebase rules. Here are instructions on how to do this.

Ensure you are on the latest version of FlutterFlow by selecting (ctrl/cmd + R). After you have done this, clear your browser cache and log out/in to FlutterFlow.​

In the event that the troubleshooting guide does not help you solve the issue, it is possible that you have reached the limit for the number of indexes allowed.To confirm this, go to your Firebase project, navigate to Firestore database, and select Indexes. If you see any notifications or error messages regarding the limitation of indexes, you will need to delete some indexes. In most projects, the maximum number of allowed indexes is 200, although this can vary depending on the plan and project.​

**Note: When you modify, add, or remove queries in the FlutterFlow project, FlutterFlow will once again prompt you to deploy the necessary indexes. This ensures that your application continues to function efficiently.**​