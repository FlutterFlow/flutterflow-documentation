---
keywords: ['storage', 'users', 'upload']
slug: /troubleshooting/firebase/share-media-files-across-users
title: Share Media Files Across Users Using Firebase Storage
---

# Share Media Files Across Users Using Firebase Storage

When one user uploads an image or file to Firebase Storage, you may want other users to be able to access the same file using shared parameters. By default, Firebase Storage applies CORS (Cross-Origin Resource Sharing) policies that may prevent files from being visible across users.

This guide shows how to update your Firebase Storage CORS settings to allow all users to access shared files.

:::info[Prerequisites]
- Your FlutterFlow project must be integrated with Firebase.
- You must have access to the **Google Cloud SDK** and the `gsutil` CLI tool.
:::

## Update Firebase Storage CORS Policy

1. Install `gsutil` by following the official guide from Google:
   - **[Install gsutil](https://cloud.google.com/storage/docs/gsutil_install)**

2. Create a file named `cors.json` in your project directory with the following content:

   ```json
   [
     {
       "origin": ["*"],
       "method": ["GET"],
       "maxAgeSeconds": 3600
     }
   ]
   ```

3. Run the following command in your terminal to apply the new CORS settings:

  ```js
  gsutil cors set cors.json gs://your-project-id.appspot.com
  ```

  Replace `your-project-id` with your actual Firebase project ID.

  Using `"origin": ["*"]` allows public access to your storage. For improved security, consider specifying only the domains used by your app.


After applying these changes, media or file uploads by one user will be accessible to all users using the same reference path in Firebase Storage.