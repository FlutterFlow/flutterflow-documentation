---
keywords: ['notification', 'security', 'permissions']
slug: /firestore-permission-error-run-mode
title: Firestore Permission Error in Run Mode
---

# Firestore Permission Error in Run Mode

When previewing your app in Run Mode, you may encounter the following error message:

**Firestore Security Rules: Missing or insufficient permissions**

This occurs when your Firestore rules conflict with the permissions required for a query in your app.

:::info[Prerequisites]
- You are using Firebase Firestore in your FlutterFlow project.
- Your project has one or more Firestore queries configured.
:::


This error is typically triggered when:

  - Firestore rules prevent any user from reading the database.
  - A page attempts to run a query before a user is authenticated (e.g., querying user-specific data on the login page).

  Example:

  - If Firestore rules are configured as:

    ```js
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if false;
        }
      }
    }
    ```

    Any Firestore query will fail because no read or write access is allowed.

  - If rules allow only authenticated access:

      ```js
      allow read, write: if request.auth != null;
      ```

    And a query is placed on a page before the user signs in (e.g., on the login screen), it will trigger this error.

    Descriptive widget names can help you quickly identify which query or widget is triggering the permission issue. In the example above, the error message references a widget named Container. Renaming it to something like UserQueryContainer can make debugging easier.

Take the steps below to fix this error:
  
  - **Review Firestore Rules**

    Go to Firestore → Settings → Rules and verify that your access rules align with how and when your app queries the database.

  - **Adjust Query Placement**

    Ensure that queries requiring authentication are not used on screens accessible to unauthenticated users.

  - **Use Conditional Visibility**

    If a query must exist on a pre-login screen, wrap it in conditional logic to only execute when the user is signed in.

:::tip
Test queries using the Run Mode Console and check the browser logs for more specific errors.
Use Firestore Schema Validation in FlutterFlow to ensure your rules are properly deployed.
:::