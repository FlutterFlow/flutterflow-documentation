---
keywords: ['firebase', 'sign', 'apple']
slug: /sign-in-with-apple-for-web
title: Sign in with Apple (for web)
---
# Sign in with Apple (for web)

To enable Sign in with Apple on Web, you would have to follow some additional steps in the Apple Developer account and Firebase.These steps are required for Apple to identify the website and provide access to the "Sign in with Apple on Web" functionality.


:::warning
The Sign in with Apple on Web functionality cannot be tested on Test/Run Mode. You would have to deploy the website first to test this functionality
:::

## Steps for Apple Developer Account:

Here are all the steps you need to follow specifically in the Apple Developer account.

1. Register a new Identifier and select App IDs on your Apple Developer Account. Add the necessary details and make sure to enable the "Sign in with Apple" option under Capabilities.

2. Create a new service ID with a description and unique identifier.

3. Configure the "Sign in with Apple" functionality by adding the domain URL and return URL from Firebase, and then save it.

4. Create a new key and enable "Sign in with Apple".
5. Download the key to your computer.

## Steps to follow in the Firebase App:

Here are all the steps you need to follow specifically in Firebase Account after downloading the key:

1. Add the required details like Apple Team ID, Key ID, and the downloaded private key in your Firebase Apple Auth Settings.​
2. Make sure to set the Service ID in Firebase with the same identifier set during the creation of the Service ID.
3. After following these steps, the setup for Apple Login with Web will be complete.

:::note[The issue was not resolved]
If the error persists after following the outlined steps, please report this issue to support via Chat or Email at support@flutterflow.io.
:::
