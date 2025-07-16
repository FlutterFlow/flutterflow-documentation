---
keywords: ['connect', 'download', 'store']
slug: troubleshooting/apple-store-deployment-issues/ios-Signing/download-dsym-file-from-app-store-connect
title: Download dSYM File from App Store Connect
---

# Download dSYM File from App Store Connect

To download the dSYM file from the App Store Connect Developer Console, follow these steps.

:::info[Prerequisites]
- Access to your Apple Developer account.
- Your app has at least one build uploaded to App Store Connect.
:::

**Steps to Download the dSYM File:**

1. **Sign in** to **[App Store Connect](https://appstoreconnect.apple.com/)** with your Apple Developer account.  
2. Open your app.  
3. Select a build from the **TestFlight** tab on your project page.  
4. Open the **Build Metadata** tab.  
5. Under **Include Symbols**, download the dSYM file.  

    ![](../../assets/20250430121257965718.png)

    :::note
    The dSYM file is only available for builds that have been successfully uploaded to App Store Connect and are in a "processing" or "ready for submission" state.
    :::

    If the **Download dSYM file** link is not visible, it indicates that the build submission did not complete successfully. In this case:

        1. Redeploy the build to the App Store.  
        2. After successful processing, return to the **Build Metadata** tab and download the dSYM file.  

            ![](../../assets/20250430121258232331.png)
