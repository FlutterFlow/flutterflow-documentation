---
keywords: ['error', 'directory', 'server']
slug: troubleshooting/deployment/fix-firebase-server-directory-error
title: Fix Firebase Server Directory Error
---

# Fix Firebase Server Directory Error

This error may occur when deploying Firebase Storage rules from FlutterFlow, even after enabling Firebase Storage. It is commonly caused by incorrect Cloud Firestore setup in the Firebase Console.

Here is the error message: 

    ```text
    Error: Failed to create server directory. Please contact support@flutterflow.io
    ```


    ![](../assets/20250430121206889627.png)

:::info[Prerequisites]
- You must have already connected your Firebase project to FlutterFlow.
- Firebase Storage must be enabled in the Firebase Console.
:::

Follow the steps below to resolve the Issue:

1. **Set Default GCP Resource Location:**

    1. Open your Firebase Project.
    2. Navigate to **Project Settings**.
    3. Set the **Default GCP Resource Location** to your preferred region.

        ![](../assets/20250430121207161508.png)


2. **Enable Firebase Storage:**

    1. In the Firebase Console, go to the **Build > Storage** section.
    2. Click **Get Started**.
    3. Set the rules to **Testing Mode**.
    4. Choose the **same location** as set in your project settings.

        ![](../assets/20250430121207438234.png)

        ![](../assets/20250430121207744686.png)

3. **Enable Cloud Firestore in Native Mode:**

    1. Navigate to **Build > Firestore Database**.
    2. If it is in **Datastore Mode**, you must switch to **Native Mode**.
    3. Click **Go to Google Cloud Console**.
    4. Click **Switch to Native Mode**.
    5. Return to Firebase and reload Firestore.

        ![](../assets/20250430121208035279.png)

        ![](../assets/20250430121208288087.png)
        
        ![](../assets/20250430121208489158.png)

4. **Re-deploy Firebase Storage Rules in FlutterFlow**

    1. Return to your FlutterFlow project.
    2. Re-deploy the Firebase Storage Rules.

        ![](../assets/20250430121208698400.png)
        
        ![](../assets/20250430121208913054.png)

If the issue persists after completing the steps above, please contact FlutterFlow Support via chat or email at **support@flutterflow.io**.
