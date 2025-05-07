---
keywords: ['authentication', 'deployment', 'ios']
author: Unknown
created_at: '1660736085'
slug: /codemagic-deployment-on-ios-authentication-credentials-are-missing-or-invalid
title: 'Codemagic Deployment on iOS: Authentication Credentials Are Missing or Invalid'
updated_at: '1713554291'
url: https://intercom.help/flutterflow/en/articles/6478583-codemagic-deployment-on-ios-authentication-credentials-are-missing-or-invalid
---
# Codemagic Deployment on iOS: Authentication Credentials Are Missing or Invalid

Need help identifying your Codemagic deployment error? Check out this article. 

**Invalid Authentication Credentials Error**
This means that there was a misconfiguration issue while setting up deployment for App Store. The token used is likely expired or is invalid. 

Learn more about Generating Tokens for API Requests **https://developer.apple.com/go/?id=api-generating-tokens**

**Full error message**
```
Failed Step: Fetch signing filesGET https://api.appstoreconnect.apple.com/v1/bundleIds?limit=100&amp;sort=name&amp;filter%5Bidentifier%5D=appname.com&amp;filter%5Bplatform%5D=IOS returned 401: Authentication credentials are missing or invalid.Provide a properly configured and signed bearer token, and make sure that it has not expired. Learn more about Generating Tokens for API Requests https://developer.apple.com/go/?id=api-generating-tokens 
```

**How To Resolve the Issue**
To resolve this issue, you'll need to generate a new API key for your app and then replace it with the one present inside FlutterFlow. 

Please follow these steps to generate your API Key:

Navigate to App Store Connect, select **Users and Access, **and then select **Keys** (blue text).

If you see the **Request Access** button, click on it.

Click on the **Generate API Key**. Otherwise, select the **Add button (+).**

A popup will appear. Enter your API Key Information:

**Name: **Enter a name for the key. This is a reference and is not part of the key itself.

**Access: **Select the access type. This link has additional information on roles.

When you are done, select **Generate.**

Find the row for the API Key you just generated and select** Download API Key. **A popup will appear, select **Download. **​
```
Note: If you don't see the Download API Key link immediately, refresh your page.
```

Return to FlutterFlow and navigate to **Settings &amp; Integrations **--&gt; **Deployment.**

Under **Private Key, **select** Upload Private Key. **Select the **API Key File **and then select **Open.**

After this please try deploying the app again. 

![](../../assets/20250430121336383410.gif)

**Still need help? **If you are deploying from FlutterFlow and still getting this error after following all the steps outlined above, then please report this issue to support via messengar or email at support@flutterflow.io.​