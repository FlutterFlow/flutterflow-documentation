---
keywords: ['error', 'verify']
slug: /troubleshooting/authentication/error-in-verify-sms
title: Error in Verify SMS
---

# Error in Verify SMS

This error occurs during the SMS authorization verification process in FlutterFlow, typically on the page where the user enters the confirmation code. A common error message is:

**SMS code field must be provided when verifying SMS code**

## Common Cause

This issue is often caused by a mismatch in the name of the `TextField` widget used to capture the SMS code. This can happen if the widget or page was duplicated and the widget name was not updated accordingly. The verification action depends on the correct widget name to retrieve the code.

## How to Resolve

Follow these steps to fix the error:

1. **Check the `TextField` Widget Name:**
   - Open the page where users enter the SMS code.
   - Select the `TextField` widget used to capture the SMS code.
   - Ensure that its widget name matches the expected input field (e.g., `smsCode`).

2. **Rename the Widget (If Necessary):**
   - If the widget name is incorrect or was duplicated from another page, rename it to the correct field name expected by the action.
   - Save your changes and retest the verification process.

