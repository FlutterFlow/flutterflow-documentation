---
keywords: ['database', 'firestore', 'deploy']
slug: troubleshooting/firebase/fix-firestore-index-deployment
title: Fix Firestore Index Deployment Errors
---

# Fix Firestore Index Deployment Errors

When adding or editing queries with filters in FlutterFlow, the platform prompts you to deploy Firestore indexes. These indexes are created in your connected Firebase project and are essential for query performance.

![](../assets/20250430121307457486.png)

:::info[Prerequisites]
Before deploying indexes, review the **[Firestore Indexing Documentation](https://firebase.google.com/docs/firestore/query-data/indexing)** to understand how they work.
:::

If you're unable to deploy Firestore indexes, follow these steps:

1. **Enable Email Sign-In**  
   Make sure **Email/Password** sign-in is enabled in your Firebase Authentication settings.  
   **[Enable email sign-in →](https://firebase.google.com/docs/auth/web/start)**

2. **Assign Required Firebase Permissions**  
   Add the following roles to `firebase@flutterflow.io` in your Firebase project:
   - `Editor`
   - `Cloud Functions Admin`
   - `Service Account User`  
   [How to assign permissions →](https://cloud.google.com/iam/docs/granting-roles)

3. **Update Firebase Rules**  
   Confirm that your Firebase rules are correctly configured.  
   [Update Firebase rules →](https://firebase.google.com/docs/rules)

4. **Refresh and Clear Cache**  
   - Press `Ctrl + R` (or `Cmd + R`) to reload FlutterFlow.
   - Clear your browser cache.
   - Log out and log back into FlutterFlow.

5. **Check Index Limits**  
   If you've reached the maximum number of Firestore indexes (usually 200), you'll need to delete unused ones:
   - Open your Firebase project.
   - Navigate to **Firestore Database > Indexes**.
   - Look for any error messages or limits and remove unnecessary indexes if needed.

   :::note
   Whenever you modify, add, or remove queries in FlutterFlow, you may be prompted again to deploy updated indexes. Keeping your indexes up to date ensures efficient app performance.
   :::
