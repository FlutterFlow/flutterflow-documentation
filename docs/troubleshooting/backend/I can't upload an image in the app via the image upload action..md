---
keywords: ['storage', 'upload', 'image']
slug: image-upload-fails-due-to-firebase-storage-rules
title: Image Upload Fails Due to Firebase Storage Rules
---

# Image Upload Fails Due to Firebase Storage Rules

This issue commonly occurs due to a misconfiguration in Firebase Storage rules. It can be resolved by updating those rules properly.

## How to Fix

1. Go to the **Storage** section in your Firebase project.
2. Click on the **Rules** tab.

   ![](../assets/20250430121520677214.gif)

3. Replace the current rules with the following:
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

![](../assets/20250430121520979751.gif)



This change should fix the issue with media uploads in your application.

⚠️ If the problem persists, try re-uploading all previously uploaded images from within the app.