---
keywords: ['package', 'application', 'change']
slug: /troubleshooting/deployment/change-package-name-flutterflow
title: Change the Package Name of an Application in FlutterFlow
---

# Change the Package Name of an Application in FlutterFlow

When working with Firebase or deploying your app, it's important that your **FlutterFlow app package name** matches what you've registered elsewhere (e.g., in Firebase or on app stores). This article shows you how to change the **package name** directly within FlutterFlow.

:::info[Prerequisites]
Make sure you've updated the package name in any external services (like Firebase or Google Play Console) **before** changing it in FlutterFlow.
:::

Follow the steps to change the package name:

1. Open your project in **FlutterFlow**.

2. From the left navigation menu, go to **Settings & Integrations**.

   ![Settings and Integrations page](../assets/20250430121448708197.png)

3. In the **Project Setup** section, find the **App Details** panel. Click the **edit icon** next to the package name field.

   ![Edit package name icon](../assets/20250430121448932578.png)

4. Update the **Package Name** (e.g., `com.yourcompany.appname`) and/or **App Name** as needed.

5. Click the **checkmark icon** to save your changes.

   ![Save changes icon](../assets/20250430121449131367.png)

:::info[Best Practices]
- Use **reverse domain notation** (e.g., `com.example.myapp`) for package names.
- Be consistent—your Firebase project and other third-party integrations should use the same package name.
- After making changes, verify that your app builds correctly and that Firebase integrations continue to work.
:::

Changing your app’s package name in FlutterFlow is simple but important. Just go to your project’s settings, edit the name, and make sure it matches external configurations like Firebase or app stores.

