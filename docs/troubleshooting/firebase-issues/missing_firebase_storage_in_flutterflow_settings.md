---
keywords: ['storage', 'firebase', 'missing']
slug: /missing-firebase-storage-in-flutterflow-settings
title: Missing Firebase storage in FlutterFlow settings
---

# Missing Firebase storage in FlutterFlow settings

**Issue**

You are trying to set up Firebase Storage in your FlutterFlow project, but the **Firebase Storage** option is missing from the **Firebase Settings** tab.

    ![](../assets/20250430121309740417.png)

**Why this happens**

    This issue occurs when Firebase Storage has not yet been enabled in the Firebase Console for your project. Until you set it up there, the option will not appear in FlutterFlow.

**How to fix**

Follow these steps to enable Firebase Storage and make it visible in your FlutterFlow settings:

    1. Inside your FlutterFlow project, click on **Firebase** from the left menu and then click **Open Firebase Console**.

        ![](../assets/20250430121310019673.png)

    2. In the Firebase Console, go to the **Build** menu and click **Storage**.

        ![](../assets/20250430121310317285.png)

    3. Click **Get started** and complete the setup process.

        ![](../assets/20250430121310619096.png)

    4. Once the storage bucket is successfully created, return to FlutterFlow. You should now see the **Rules** option under Firebase Settings.

    ![](../assets/20250430121310959552.png)

:::note
After creating Firebase Storage, it may take up to one hour for the changes to reflect in FlutterFlow.
:::


