---
keywords: ['firebase', 'error', 'content']
author: Unknown
created_at: '1677251582'
slug: /could-not-create-an-account-as-firebase-flutterflow-io-to-your-firebase-project-in-cms-content-management
title: Could not create an account as firebase@flutterflow.io to your Firebase project, in CMS - Content Management
updated_at: '1677251836'
url: https://intercom.help/flutterflow/en/articles/7030277-could-not-create-an-account-as-firebase-flutterflow-io-to-your-firebase-project-in-cms-content-management
---

# Could Not Create an Account as firebase@flutterflow.io to Your Firebase Project in CMS – Content Management

If you believe all your configurations are correct or it was working previously and you now see this error:

![Firebase Error](../assets/20250430121311458158.png)

## Steps to Resolve

1. Go to your **Firebase Project > Authentication** and search for the **firebase@flutterflow.io** user.

   ![Firebase Authentication](../assets/20250430121311730523.png)

2. Load the user by typing **firebase@flutterflow.io** in the search field and hit **Reload**.

3. Once found, **remove it** from the authentication table.

4. Return to **FlutterFlow CMS** and **refresh the page**. You should now be able to see your database content.

---

## Why Is This Happening?

This issue typically occurs when you connect **more than one FlutterFlow project** to the same Firestore database and manage the CMS data across those projects. 

In this scenario, **permission conflicts** may arise. As a result:

- CMS may work when accessed from **Project A**.
- CMS may **fail** when accessed from **Project B**.

**Solution:**  
By removing the `firebase@flutterflow.io` account from Firebase Authentication, you allow it to be **recreated with the correct permissions** the next time CMS is accessed.

