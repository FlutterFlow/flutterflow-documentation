---
keywords: ['storage', 'firebase', 'missing']
slug: /firebase-storage-section-is-missing-from-firebase-settings-tab-in-flutterflow
title: Firebase Storage Section is missing from Firebase Settings Tab In FlutterFlow
---
# Firebase Storage Section is missing from Firebase Settings Tab In FlutterFlow

## Issue: 

You are trying to set up Firebase Storage in your FlutterFlow Firebase Settings, but you don't see the Firebase Storage Option (example below).

The Firebase Storage tab is not visible because you have not yet set up storage inside the Firebase Console.

![](../assets/20250430121309740417.png)

## Solution 

1. Select **Open Firebase Console** from inside your FlutterFlow project

![](../assets/20250430121310019673.png)

2. In the build menu in your Firebase project, click on **Storage**

![](../assets/20250430121310317285.png)

3. Click **Get Started** and complete storage setup.

![](../assets/20250430121310619096.png)

After you successfully created your storage bucket, you can go to the FlutterFlow project and see the rules option.

:::note
After creating Storage it may take up to an hour for this to reflect in your FlutterFlow project.
:::

![](../assets/20250430121310959552.png)