---
keywords: ['deployment', 'error', 'value']
slug: /provided-value-is-not-a-valid-pem-encoded-private-key
title: Provided Value Is Not a Valid PEM Encoded Private Key
---

# Provided Value Is Not a Valid PEM Encoded Private Key

When deploying an iOS build from FlutterFlow, you may encounter the following error:

> **app-store-connect: error: argument --private-key: Provided value is not a valid PEM encoded private key**

This issue typically appears when the App Store private key is either missing, incorrectly formatted, or invalid.

## Cause

The error occurs when the private key uploaded to FlutterFlow is not in the proper `.p8` PEM format expected by App Store Connect. The private key must be the original file downloaded from the Apple Developer portal without modification.

## Resolution Steps

### 1. Go to Mobile Deployment Settings

- In FlutterFlow, navigate to **App Settings > Mobile Deployment > App Store**  
- If you have not already uploaded a private key, the field will appear blank.

![Private Key Upload](../assets/20250430121327171389.png)

### 2. Reupload the Private Key

- Locate the original `.p8` private key file downloaded from [Apple Developer → Keys](https://developer.apple.com/account/resources/authkeys/list)
- Click **Upload** and select the correct `.p8` file

> ⚠️ The key file must include both:  
> `-----BEGIN PRIVATE KEY-----`  
> `-----END PRIVATE KEY-----`

### 3. Save and Redeploy

- After uploading, save your changes
- Redeploy your iOS app from FlutterFlow

## If the Issue Persists

If you have uploaded a valid key and the error continues:

- Make sure the `.p8` file is not corrupted or modified
- Do not paste the key into a text field—use the file upload option
- Try re-downloading the key from Apple Developer and uploading again

> 🛠️ **Still stuck?** Contact FlutterFlow support at [support@flutterflow.io](mailto:support@flutterflow.io) for further help.
