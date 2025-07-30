---
keywords: ['login', 'authentication', 'snackbar', 'error']
slug: /display-error-message-for-invalid-login-credentials
title: Display Error Message for Invalid Login Credentials
---

# Display Error Message for Invalid Login Credentials

When a user enters incorrect login credentials, FlutterFlow automatically displays a `SnackBar` with an error message. This helps users understand why their login attempt failed without needing custom logic.

![](../imgs/20250430121519975010.gif)

When the **Login Action** fails, a `SnackBar` is shown with the relevant error (e.g., “No user found” or “Wrong password”). This message appears automatically during runtime; no additional configuration is required.

**Customize the SnackBar (Optional)**

    To add custom logic or change the appearance:

    1. Select the **Login Action** from your button or trigger.
    2. In the **Actions tab**, open the **Action Output** section.
    3. Use conditional logic to check the error message.
    4. Display a custom `SnackBar` or navigate based on the message content.

:::tip
There is no need to manually add alert dialogs for failed login attempts. FlutterFlow handles `SnackBar` display automatically when authentication fails.
:::

:::note
To customize the `SnackBar` further, use the **Action Output** and attach additional logic based on the error string.
:::