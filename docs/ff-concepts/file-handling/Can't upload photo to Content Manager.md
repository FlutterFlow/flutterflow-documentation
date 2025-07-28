---
keywords: ['content', 'upload', 'photo']
author: Unknown
created_at: '1657225806'
slug: /can-t-upload-photo-to-content-manager
title: Can't upload photo to Content Manager
updated_at: '1659057829'
url: https://intercom.help/flutterflow/en/articles/6369337-can-t-upload-photo-to-content-manager
---

# Can't Upload Photo to Content Manager

By default, FlutterFlow's CMS does not support image uploads due to restrictive Firebase Storage rules. To enable photo uploads, you need to update your Firestore Security Rules.

---

## Steps to Enable Photo Uploads

### 1. Open Firebase Console

In your FlutterFlow project, go to:

**Settings & Integrations → Firebase → Open Firebase Console**

![Open Firebase Console](../assets/20250430121356207178.png)

---

### 2. Navigate to Storage Rules

In the Firebase Console, click:

**Storage → Rules**

![Storage Rules](../assets/20250430121356535681.png)

---

### 3. Update and Publish New Rules

Replace the existing rules with the following code:

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
