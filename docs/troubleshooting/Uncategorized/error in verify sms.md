---
keywords: ['error', 'verify']
author: Unknown
created_at: '1651736299'
slug: /error-in-verify-sms
title: error in verify sms
updated_at: '1651736360'
url: None
---
# Error in Verify SMS

If you are experiencing issues with SMS authorization verification in FlutterFlow, especially when setting the action on the authorization code confirmation page, you may encounter an error such as:

> **SMS code field must be provided when verifying SMS code**

## Common Cause

This problem often occurs due to the **TextField widget name** used for entering the SMS code. If you have copied, pasted, or duplicated pages, the widget name may not match what the verification action expects. These field names are critical for the verification process.

## Solution

1. **Check the TextField Name:**
   - Go to the page where you enter the SMS code.
   - Select the TextField widget used for the code input.
   - Ensure its name matches what is required by the verification action (e.g., `smsCode` or similar).
2. **Rename if Needed:**
   - If you duplicated the page or widget, rename the TextField to the correct name.
   - Save and try the verification process again.


If you continue to have issues, please contact FlutterFlow support or refer to the [support conversation](https://app.intercom.com/a/apps/w66h9try/inbox/inbox/unassigned/conversations/796).