---
keywords: ['authentication', 'deployment', 'ios']
slug: troubleshooting/apple-store-deployment-issues/fetch-signing-files/ios-deployment-authentication-error
title: iOS Deployment Authentication Error
---

# iOS Deployment Authentication Error

During iOS deployment using Codemagic, an authentication credentials error can occur due to misconfigured or expired API tokens for App Store deployment.

The API token used for App Store Connect may be invalid or expired.

:::info
For details on generating valid tokens, see the **[Apple API Token Documentation](https://developer.apple.com/go/?id=api-generating-tokens)**.
:::

Here is the error message:

```bash
Failed Step: Fetch signing files
GET https://api.appstoreconnect.apple.com/v1/bundleIds?limit=100&sort=name&filter%5Bidentifier%5D=appname.com&filter%5Bplatform%5D=IOS returned 401: Authentication credentials are missing or invalid. Provide a properly configured and signed bearer token, and make sure that it has not expired. Learn more about Generating Tokens for API Requests https://developer.apple.com/go/?id=api-generating-tokens 
```

:::info[Prerequisites]
- Access to your Apple Developer App Store Connect account.
- Permission to manage API keys under **Users and Access**.
:::

**Steps to Resolve the Authentication Error:**

1. Open **App Store Connect** and navigate to **Users and Access → Keys**.

2. If prompted, click **Request Access**.

3. Select **Generate API Key** or click the **Add (+)** button.

4. In the popup, provide the following details:
   - **Name**: Enter a descriptive name for the API Key.
   - **Access**: Choose the appropriate access level for the key.

5. Click **Generate** to create the API Key.

6. Download the newly created API Key by selecting **Download API Key**.

   :::note
   If the download option does not appear immediately, refresh the page.
   :::

7. In **FlutterFlow**, go to **Settings & Integrations → Deployment**.

8. Under **Private Key**, click **Upload Private Key**, select the downloaded API Key file, and click **Open**.

9. Retry your iOS deployment.

   ![](../../assets/20250430121336383410.gif)

:::note
If the error persists after completing these steps, contact FlutterFlow support via in-app messenger or email at [support@flutterflow.io](mailto:support@flutterflow.io).
:::
