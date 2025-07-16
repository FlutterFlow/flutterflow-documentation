---
keywords: ['error', 'directory', 'server']
author: Unknown
created_at: '1688586948'
slug: /error-failed-to-create-server-directory-please-contact-support-flutterflow-io
title: 'Error: Failed to create server directory. Please contact support@flutterflow.io'
updated_at: '1688591114'
url: https://intercom.help/flutterflow/en/articles/8098182-error-failed-to-create-server-directory-please-contact-support-flutterflow-io
---
# Error: Failed to create server directory. Please contact support@flutterflow.io

**Background**

When trying to deploy Firebase storage rules, you might encounter `Error: Failed to create server directory. Please contact support@flutterflow.io`. This error can occur even after you have enabled Firebase storage in your Firebase Project linked to your FlutterFlow Project. This is likely because you have not set up Cloud Firestore correctly in your Firebase Project.

![](../assets/20250430121206889627.png)
**How to resolve this issue?**
Step 1: Set Default GCP Resource Location. 
Open your Firebase project and navigate to project settings, then set `Default CGP resource location` to the region that you prefer.

![](../assets/20250430121207161508.png)Step 2: Enable Firebase Storage 
In your Firebase project, navigate to the Build section and select Storage. Click get started and then set the rules to testing. In the location segment, set the same location as the one in the project settings. 

![](../assets/20250430121207438234.png)![](../assets/20250430121207744686.png)Step 3: Enable Cloud Firestore
In your Firebase project, navigate to the Build section and select Firestore Database. In some cases, cloud firebase is set to Data Store Mode, which is not recommended when working with FlutterFlow, so you will need to change Cloud Firestore from Data Store Mode to Native Mode.

![](../assets/20250430121208035279.png)Change to Cloud Firestore to Native Mode

Click on `Go to Google Cloud Console`

Click `Switch To Native Mode`

![](../assets/20250430121208288087.png)

After switching the mode, navigate back to Firebase and reload Cloud Firestore.

![](../assets/20250430121208489158.png)

Step 4: Deploy Firebase Storage Rules in FlutterFlow  
Open your FlutterFlow Project and re-deploy Firebase Storage Rules.

![](../assets/20250430121208698400.png)![](../assets/20250430121208913054.png)**The issue was not resolved.**
If the error still persists after following the outlined steps, please contact support via Chat or Email at support@flutterflow.io.