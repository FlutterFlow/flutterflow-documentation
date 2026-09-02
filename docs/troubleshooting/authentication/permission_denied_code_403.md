---
keywords:
  - permission
  - permission_denied
  - code
slug: /troubleshooting/authentication/permission-denied-code-403
title: 'Permission Denied: Code 403'
description: >-
  This error typically occurs when your application or service account does not
  have the required permissions to access a resource in Google Cloud or
  Firebase.
tags:
  - FlutterFlow
  - Troubleshooting
  - Authentication
last_verified: 2026-09-02
---
# Permission Denied: Code 403

This error typically occurs when your application or service account does not have the required permissions to access a resource in Google Cloud or Firebase.

## Code 403 Error Message

You may encounter this error due to one or more of the following reasons:

- **Invalid or misconfigured service account JSON file**
- **Insufficient permissions** assigned to the service account
- **Missing or incorrect IAM roles** for the service account
- **API not enabled** in the Google Cloud project


Do the following to fix this error:

- **Check Your Service Account JSON File**

    Confirm that the key belongs to the intended project and service account. Service-account keys do not normally expire automatically; a disabled account, deleted/disabled key, organization policy, or revoked access is a more useful diagnostic.

- **Verify IAM Roles and Permissions**

    Identify the denied permission from the error or Cloud Audit Logs, then grant the narrow predefined or custom role that contains it. Avoid broad `Owner` or `Editor` roles as a troubleshooting shortcut.

- **Enable Required APIs**

    Go to the [Google Cloud Console](https://console.cloud.google.com/apis/library) and ensure all necessary APIs are enabled for your project.

- **Regenerate the Service Account Key if Needed**

    Rotate the key only when it is missing, disabled, exposed, or otherwise unusable. Store the replacement in the supported secret field, validate it, and then revoke the old key; never commit or paste the JSON into chat or logs.

:::tip[Always Use Least Privilege Principle]
When assigning IAM roles to your service account, follow the **principle of least privilege**—only grant the minimum permissions necessary for the task. This not only reduces the risk of misconfiguration but also enhances the overall security posture of your app.
:::

If you continue to experience issues, consult the [Google Cloud IAM documentation](https://cloud.google.com/iam/docs/troubleshooting-access) or contact [FlutterFlow Support](mailto:support@flutterflow.io) for further assistance.

## Related documentation

See [App Starts from HomePage in Run Mode](/troubleshooting/authentication/app-starts-from-homepage-in-run-mode) for a related FlutterFlow workflow.
