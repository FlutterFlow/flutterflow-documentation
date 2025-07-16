---
keywords: ['content', 'upload', 'photo']
author: Unknown
created_at: '1657225806'
slug: /can-t-upload-photo-to-content-manager
title: Can't upload photo to Content Manager
updated_at: '1659057829'
url: https://intercom.help/flutterflow/en/articles/6369337-can-t-upload-photo-to-content-manager
---
# Can't upload photo to Content Manager

Our default rules don't allow for upload in CMS. In order to do this, you will need to update your Firestore Rules.

Open your FlutterFlow project and click Settings &amp; Integrations &gt; Firebase &gt; Open Firebase Console

![](../assets/20250430121356207178.png)

Next click Storage &gt; Rules

![](../assets/20250430121356535681.png)

Replace the code with the following and then click **publish**:

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

**Important:** We recommend reviewing your Firebase rules before deploying your app. Please see this link for additional information on Firestore security rules.