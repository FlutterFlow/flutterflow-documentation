---
keywords: ['sms', 'verification', 'text field']
slug: troubleshooting/deployment/fix-sms-code-verification-errors
title: Fix SMS Code Verification Errors
---

# Fix SMS Code Verification Errors

During the SMS verification process, you may encounter the following error:

   ```text
   SMS code field must be provided when verifying SMS code
   ```

This article explains the reason behind this issue and how to resolve it by reviewing the widget configuration.

This error typically occurs when the **TextField widget name** used for inputting the SMS code does not match the expected field in the **Verify SMS Code** action.

This situation is common when duplicating pages or widgets, as the new instance may retain a different name.

:::info[Prerequisites]
Ensure you have already set up Firebase Authentication and added the necessary phone authentication flows to your app.
:::

Follow the steps below to resolve the issue:

1. **Locate the SMS Input Field**

   - Open the page where the user is expected to enter the SMS verification code.
   - Select the **TextField** widget used for the input.

2. **Check the Widget Name**

   - In the widget properties panel, verify that the name is set to something meaningful like `smsCode`.

3. **Rename if Necessary**

   - If the name does not match what is referenced in your Verify SMS Code action, rename it accordingly (e.g., `smsCode`).

4. **Test the Verification Flow**

   - Save your changes and run the app to confirm that the error no longer appears.

   :::warning
   If the field name used in the Verify SMS Code action does not match the TextField widget name exactly, the verification process will fail. This includes case sensitivity.
   :::