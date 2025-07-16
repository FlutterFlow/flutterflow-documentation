---
keywords: ['storage', 'users', 'upload']
author: Unknown
created_at: '1652697832'
slug: /share-mediafiles-in-storage-1-user-upload-all-users-see
title: Share media/files in storage, 1 user upload all users see
updated_at: '1652697957'
url: None
---
# Share media/files in storage, 1 user upload all users see

chat;https://app.intercom.com/a/apps/w66h9try/inbox/inbox/5495770/conversations/1152

Solve the issue related to: when a user uploads an image to Firestore, other users cannot see the image with the same params.

You need to run the following command in Google Cloud:

https://cloud.google.com/storage/docs/gsutil_install

```sh
gsutil cors set cors.json gs://exampleproject.appspot.com
```

Save the following as `cors.json` in your project directory:

```json
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```
