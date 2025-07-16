---
keywords: ['database', 'firebase', 'permissions']
author: Unknown
created_at: '1677245210'
slug: /can-t-deploy-firestore-database-rules
title: Can't deploy Firestore Database rules
updated_at: '1677274905'
url: https://intercom.help/flutterflow/en/articles/7030020-can-t-deploy-firestore-database-rules
---
# Can't deploy Firestore Database rules

This article will walk you through troubleshooting steps if you are unable to deploy your Firebase Rules.

**1. Validate that you have created your Firestore Database**
Without a database created in the Firebase project, there is no way for FlutterFlow to deploy your rules. ​
Open the Firebase Console for your project and select Create database. 

Video:
Create a firebase firestore database in Firebase to start [ time: 1:50 to 2:05 ]

![](../assets/20250430121312243075.png)
**2. Validate that the three necessary permissions are granted**

In order to deploy Firebase Rules, you will need to add the following cloud permissions for firebase@flutterflow.io: Editor, Cloud Functions Admin, and Service Account.

Head to the Firebase Console and open the project dashboard for your project (click the project tile). Select Project Settings &gt; Users &amp; Permissions.

If you don't have Cloud Functions Admin, Editor, and Service Account listed next to fireabse@flutterflow.io, you have not completed this step.

Here is a video you can watch to see how you can add the permission

![](../assets/20250430121312626400.png)![](../assets/20250430121312919242.png)![](../assets/20250430121313117339.png)**3. Validate that you have selected the GCP location for your Firebase project**Head to the Firebase Console and open the project dashboard for your project (click the project tile). Select Project Settings &gt; General.

If you see **Not yet selected,** you have not completed this step.

![](../assets/20250430121313453827.png)Select the pencil and complete setup. 

Tip: Once created, this can not be changed. You can learn more about selecting locations here.​
**After checking these 3 steps, you should be able to successfully deploy your database rules. **