---
keywords: ['permission', 'permission_denied', 'code']
author: Unknown
created_at: '1660466673'
slug: /code-403-the-caller-does-not-have-permission-status-permission-denied
title: 'Code: 403, The caller does not have permission. status: PERMISSION_DENIED'
updated_at: '1660467430'
url: None
---
# Code: 403, The caller does not have permission. status: PERMISSION_DENIED

This error typically occurs when your application or service account does not have the required permissions to access a resource in Google Cloud or Firebase.

## What does this error mean?

You may encounter this error due to one or more of the following reasons:

- **Invalid or misconfigured service account JSON file**
- **Insufficient permissions** assigned to the service account
- **Missing or incorrect IAM roles** for the service account
- **API not enabled** in the Google Cloud project

## Example Full Error Message

```
Code: 403, The caller does not have permission. status: PERMISSION_DENIED
```

## How to Fix

1. **Check your service account JSON file**
   - Ensure you are using the correct file and it is not corrupted.
2. **Verify IAM roles and permissions**
   - Make sure the service account has the necessary roles (e.g., Editor, Owner, or specific roles required for your use case).
3. **Enable required APIs**
   - Go to the [Google Cloud Console](https://console.cloud.google.com/apis/library) and ensure all necessary APIs are enabled for your project.
4. **Regenerate service account keys if needed**
   - If you suspect the key is invalid, generate a new one and update your application configuration.

If you continue to experience issues, consult the [Google Cloud IAM documentation](https://cloud.google.com/iam/docs/troubleshooting-access) or contact support for further assistance.