---
keywords: ['content', 'upload', 'photo']
slug: /troubleshooting/firebase/fix-photo-upload-to-content-manager
title: Fix Photo Upload to Content Manager
---

# Fix Photo Upload to Content Manager

By default, uploading images to the Content Manager is blocked due to restrictive Firebase Storage rules. You will need to update your Firebase Storage security rules to allow authenticated access.

:::info[Prerequisites]
Ensure you have set up Firebase integration for your FlutterFlow project.
:::

Follow these steps to enable image uploads:

1. Open your FlutterFlow project.
2. Navigate to **Settings & Integrations > Firebase**, then click **Open Firebase Console**.

   ![](../assets/20250430121356207178.png)

3. In the Firebase Console, go to **Storage > Rules**.

   ![](../assets/20250430121356535681.png)

4. Replace the existing rules with the following code:

   ```js
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write: if request.auth != null;
       }
     }
   }

   ```

5. Click Publish to apply the changes.
Review your Firebase Storage rules carefully before deploying your app. Incorrect rules can expose your data to unauthorized access.