---
keywords: ['storage', 'users', 'upload']
slug: share_mediafiles_1_user_upload_all_users_see
title: Share Media/Files in Storage — 1 User Upload, All Users See
tag: share_storage_upload_all_users
---

# Share Media/Files in Storage — 1 User Upload, All Users See

If a user uploads a file to Firebase Storage but other users can’t see it — even with the same parameters — the issue likely relates to **CORS (Cross-Origin Resource Sharing)** settings on your Firebase Storage bucket.

This guide walks you through how to update the CORS policy so media and files uploaded by one user are accessible by others.

## Problem

Media or files uploaded to Firebase Storage by one user aren’t visible to other users, even though the correct parameters are used in your app.

## Solution

You’ll need to set a public CORS policy on your Firebase Storage bucket using the Google Cloud CLI.

### 1. Install `gsutil`

Follow Google’s guide to install `gsutil`:

👉 [Install gsutil](https://cloud.google.com/storage/docs/gsutil_install)

### 2. Create a `cors.json` file

Save the following JSON content in your project directory as `cors.json`:

```json
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```

3. Apply the CORS configuration
  Run the following command in your terminal to set the CORS policy for your Firebase Storage bucket: 

    ```js
    gsutil cors set cors.json gs://exampleproject.appspot.com
    ```

    Replace exampleproject.appspot.com with your actual Firebase project bucket name.

    After updating the CORS settings, any file uploaded by one user should now be visible to all users with access, assuming they’re using the same query logic and paths.