---
keywords: ['permission', 'permission_denied', 'code']
slug: /permission-denied-code-403
title: 'Permission Denied: Code 403'
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

    Ensure you are using the correct `service-account.json` file and that it is not corrupted or expired.

- **Verify IAM Roles and Permissions**

    Make sure the service account has the necessary roles like `Editor`, `Owner`, or other specific roles required for your use case.

- **Enable Required APIs**

    Go to the [Google Cloud Console](https://console.cloud.google.com/apis/library) and ensure all necessary APIs are enabled for your project.

- **Regenerate the Service Account Key if Needed**
    
    If you suspect the key is invalid, generate a new one and update your application configuration accordingly.

:::tip[Always Use Least Privilege Principle]
When assigning IAM roles to your service account, follow the **principle of least privilege**—only grant the minimum permissions necessary for the task. This not only reduces the risk of misconfiguration but also enhances the overall security posture of your app.
:::

If you continue to experience issues, consult the [Google Cloud IAM documentation](https://cloud.google.com/iam/docs/troubleshooting-access) or contact [FlutterFlow Support](mailto:support@flutterflow.io) for further assistance.
