---
keywords: ['connect', 'download', 'store']
slug: /how-to-download-dsym-file-from-the-app-store-connect
title: How to download dSYM file from the app store connect?
---
# How to download dSYM file from the app store connect?

To download the dSYM file from the App Store Connect Developer Console, follow these steps:

- [Sign in](https://appstoreconnect.apple.com/) in to the App Store Connect Developer Console with your Apple Developer account.

- Open your app

- Select a build from the test flight tab on your project page

- Open the Build Metadata tab
    Now you should be able to see the Include symbols part and download your dSYM file​

![](../../assets/20250430121257965718.png)

:::note 
You will only be able to download the dSYM file for builds that have been successfully uploaded to App Store Connect and are in a "processing" or "ready for submission" state. 
:::

If you can't see the Download dSYM file link, then seems there was an issue during the deployment to the app store. You need to deploy again. After the submission proceeds, you can again try to download the file.​

![](../../assets/20250430121258232331.png)