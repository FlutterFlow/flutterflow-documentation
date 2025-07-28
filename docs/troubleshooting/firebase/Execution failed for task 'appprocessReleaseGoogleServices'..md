---
keywords: ['firebase', 'error', 'build failure']
author: Unknown
created_at: '1661723973'
slug: /fix-processreleasegoogleservices-error
title: Fix Execution Failed for Task ':app:processReleaseGoogleServices'
updated_at: '1713554292'
url: https://intercom.help/flutterflow/en/articles/6509730-execution-failed-for-task-app-processreleasegoogleservices
---

# Fix Execution Failed for Task ':app:processReleaseGoogleServices'

This error typically indicates a mismatch in the **Firebase package name** within your FlutterFlow project and the `google-services.json` configuration file.

## :::info[Prerequisites]
- You must have Firebase already integrated in your FlutterFlow project.
- Ensure you are using the correct package name under **Settings > General > App Details**.
:::

## Error Message

```plaintext
FAILURE: Build failed with an exception.
* What went wrong:
Execution failed for task ':app:processReleaseGoogleServices'.
> No matching client found for package name '[app.app.app]'
```

## Steps to Resolve

1. **Open Your Project in FlutterFlow**

2. **Navigate to** `Settings > Firebase`

   ![Firebase settings in FlutterFlow](../assets/20250430121329008679.png)

3. **Regenerate Firebase Config Files**
   - Click **Regenerate Config Files**.
   - Enter the correct package name (as set under **Settings > General**).
   - Click **Generate File**.

   ![Regenerating Firebase config files](../assets/20250430121329460301.png)

4. **Re-deploy Your App**
   - After regenerating the config files, deploy the app again to verify if the issue is resolved.

## :::warning
If the error persists even after regenerating the config files, contact [FlutterFlow Support](mailto:support@flutterflow.io) via **Chat** or **Email**.
:::
