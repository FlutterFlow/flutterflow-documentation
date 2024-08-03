---
slug: /deployment/apple-app-store-deployment
title: Apple App Store Deployment
description: Learn how to seamlessly deploy your apps to the Apple App Store using FlutterFlow.
tags: [Apple App Store, Deployment, FlutterFlow, iOS]
sidebar_position: 4
keywords: [Apple App Store, Deployment, FlutterFlow, iOS]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

FlutterFlow allows you to seamlessly deploy your apps directly to the App Store, all from within the builder. This guide provides comprehensive instructions on prerequisites, step-by-step process for deployment, and troubleshooting common issues.

:::info [Prerequisites]

- Create an [**Apple account**](https://appleid.apple.com/account?appId=632&returnUrl=https%3A//developer.apple.com/account/).
- [**Purchase an Apple Developer membership**](https://developer.apple.com/programs/enroll/). Please see [**this link**](https://developer.apple.com/programs/) for more details on the Apple Developer program and how to sign up.
- Set an App Launcher Icon for your app (under Settings & Integrations > General > App Assets). **The App Launcher icon can't be transparent or contain an alpha channel.**
- We recommend testing your application on a real device. [**Here are instructions**](../running-your-app/local-run.md) on how to do this.

:::

## Deploy to App Store

Deploying to App Store consists of the following steps:

1. [Create a Bundle Identifier](#1-create-a-bundle-identifier)
2. [Add a new app to App Store Connect](#2-add-a-new-app-to-app-store-connect)
3. [Add your Apple App ID to FlutterFlow](#3-add-your-apple-app-id-to-flutterflow)
4. [Generate your API key and add It to FlutterFlow](#4-generate-your-api-key-and-add-it-to-flutterflow)
5. [Add your issuer ID to FlutterFlow](#5-add-your-issuer-id-to-flutterflow)
6. [Add your Key ID to FlutterFlow](#6-add-your-key-id-to-flutterflow)
7. [Deploy](#7-deploy)
8. [Submit your app for App Store approval](#8-submit-your-app-for-app-store-approval)

### 1. Create a Bundle Identifier

A Bundle Identifier (ID) is a unique **string** that identifies your app within the Apple ecosystem. It's typically formatted in reverse domain name notation, such as `com.example.myapp`.

Please follow these steps to create a Bundle ID:

1. Open your FlutterFlow project and navigate to **Settings & Integrations > General > App Details.** Copy the **Package Name**.

2. Open the Apple Developer homepage, select **Certificates, IDs & Profiles** (far left menu), and then select **Identifiers.**
3. Click on the **Add button (+).**
4. The **Register a new identifier** page will open. Select **App IDs** and then select **Continue.**
5. Select **App** and then click **Continue.**
6. Enter the [App Bundle Information](https://help.apple.com/app-store-connect/#/deveaec374de):
    1. **Bundle ID:** paste the **Package Name** that you copied from FlutterFlow. Double-check that the **Package Name** in FlutterFlow is the same as the **Bundle ID.** If these are different, errors will occur.
    2. **Description:** Provide a short description of your app (this will appear in the app store).
    3. **Capabilities:** scroll down and **select the capabilities that are required for your app**. **Important**: You must select **Push Notifications** from the list if you add this feature to your app. Also, if your app uses Apple Sign In - make sure to check the box for **Sign In with Apple**.
7. When you are done, select **Register.**

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/FyAsphKAUdECEQujj9ZE?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### 2. Add a new app to App Store Connect

[App Store Connect](https://help.apple.com/app-store-connect/#/dev2cd126805) is used to submit apps to the App Store, manage apps, and more.

Please follow these steps to add a new app to App Store Connect:

1. Navigate to [App Store Connect](https://appstoreconnect.apple.com/login) and then select **My Apps.**

2. Click on the **Add button (+)** and then select **New App.**
3. A popup will appear. Enter your [app information:](https://help.apple.com/app-store-connect/#/dev2cd126805)
    1. **Platform:** for mobile apps, this will be **iOS**.
    2. **Name:** Enter a Name for your app (this is the name that will show in the App Store).
    3. **Primary Language** for your app.
    4. **Bundle ID:** Select the **Bundle ID** you created in the previous step.
    5. **SKU**: Enter a unique identifier. You can also add your **Bundle ID** here, as long as it is unique.
    6. User Access: **Set the user access.** If you select Limited Access, you will need to select the users that you would like to be able to access this app. This will only appear if you have other users included in your App Store Connect account.
4. When you are done, select **Create.**

You will then be navigated to the main dashboard for your app.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/gX3A4Uyw3HLWIm6w4MXQ?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### 3. Add your Apple App ID to FlutterFlow

An App ID is used by Apple to identify your app and associate it with your development team.

Please follow these steps to add your App ID to FlutterFlow:

1. From [App Store Connect](https://appstoreconnect.apple.com/login), select **My Apps,** and then select **your app**.

2. Select **App Information** (under **General** on the left sidebar).
3. Scroll down to **General Information** and find your **Apple ID.**
4. Select the **Apple ID** and copy it.
5. Return to FlutterFlow and navigate to **Settings & Integrations > App Settings >** **Mobile Deployment > App Store**.
6. Paste the **Apple ID** into the box labeled **App ID.**

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/2wLiFzvb4rCLt5puNw77?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### 4. Generate your API key and add It to FlutterFlow

Please follow these steps to generate your API Key:

1. Return to the App Store Connect page. If you have closed this window, navigate to [App Store Connect](https://appstoreconnect.apple.com/login) and select **Users and Access,** and then select **Keys** (blue text).

2. If you see the **Request Access** button, click on it.
3. If you haven't added any key before, click on the **Generate API Key**. Otherwise, select the **Add button (+).**
4. A popup will appear. Enter your API Key Information:
    - **Name:** Enter a name for the key. This is a reference and is not part of the key itself.
    - **Access:** Select the "App Manager" role. We will use this API key to deploy the app to the app store for you automatically.
    
![generate-api-key](../imgs/generate-api-key.avif)
    
1. When you are done, select **Generate.**

2. Find the row for the API Key you just generated and select **Download API Key.** A popup will appear; select **Download.**
3. Return to FlutterFlow and navigate to **Settings & Integrations > App Settings >** **Mobile Deployment > App Store**.
4. Click on **Upload Private Key** and upload the **API Key File**.

:::info

If you don't see the **Download API Key** link immediately, refresh your page.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/G06DBXCi0PL2BZsqZ95w?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### 5. Add your issuer ID to FlutterFlow

1. Navigate to [App Store Connect](https://appstoreconnect.apple.com/login) and select **Users and Access,** and then select **Keys** (blue text).

2. Locate the **Issuer ID** and select **Copy.**
3. Return to FlutterFlow and navigate to **Settings & Integrations > App Settings** **>** **Mobile Deployment > App Store**.
4. Paste the **Issuer ID**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/aWIA9uSpLqfgzqnh5NvY?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### 6. Add your Key ID to FlutterFlow

1. Return to the App Store Connect page. If you have closed this window, navigate to [App Store Connect](https://appstoreconnect.apple.com/login) and select **Users and Access,** and then select **Keys** (blue text).

2. Find the row for the API Key you just generated and select **Copy Key ID.**
3. Return to FlutterFlow and navigate to **Settings & Integrations > App Settings >** **Mobile Deployment > App Store**.
4. Paste the **Key ID**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/AD7I6WlmHQYu3cvzI0mo?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### 7. Deploy

You can deploy directly from FlutterFlow or from your GitHub repository.

<Tabs>
<TabItem value="Deploy From FlutterFlow" label="Deploy From FlutterFlow" default>
Please follow these steps to deploy from FlutterFlow:

1. From FlutterFlow, navigate to **Settings & Integrations > App Settings >** **Mobile Deployment > App Store**.

2. Scroll down to find the **App Store** section and click on the arrow icon on the right to open it.
3. Click on the **Deploy To App Store.**
4. A popup will appear. **Select Deploy.** If another deployment is in progress, selecting Deploy will cancel the previous deployment.
5. **Please note: It can take a few minutes for this request to process.** Once this step is complete, your **Latest Message** will change to **Submitted.**
6. **It can take 30 minutes to several hours for your app to be deployed to the App Store.** You can check the status of your deployment by selecting **Check Build Status.**
7. Once complete, you will receive an email from App Store Connect that a new build has been added to your app.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DShxw9lEr9bqd2Ohic8r?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

</TabItem>
<TabItem value="Deploy From GitHub" label="Deploy From GitHub">

Associating the Github repo allows you to introduce the custom code into your FlutterFlow project. You may want to deploy the modified code directly from your Github repo to App Store.

To deploy from Github repo:

1. If you haven't added the Github repo yet, you can do so using the instructions [here](../exporting-code/push-to-github.md).

2. From FlutterFlow, navigate to **Settings & Integrations > App Settings >** **Mobile Deployment > App Store**.
3. Find the **Deployment Settings** section and click on the arrow icon on the right to open it.
4. Under the **Deployment Source**, checkmark the **Use Github repo: 'your repo URL'**.
5. Enter the **Branch Name** of your repo, from which you want to deploy the code. Make sure to enter the correct branch name.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/A350hhtp2gn2yI30wXqh?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
</TabItem>
</Tabs>

### 8. Submit your app for App Store approval

1. From App Store Connect, select **My Apps**, and then select **your app**.

2. Enter your **Version Information.** [This page](https://help.apple.com/app-store-connect/en.lproj/static.html#devfc3066644) contains additional information on what is required, localized, and editable.
3. When you are done, select **Submit For Review.**

Your app will now be reviewed by Apple. For additional information on Apple's review guidelines, please see [this link](https://developer.apple.com/app-store/review/guidelines/).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DGpJdTJtQBbFNIkMkG67?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

---

## Video guide
Watch this video if you prefer watching a video tutorial.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/4GFMsYep_S0"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

---

## FAQs
<details>
<summary>Invalid App Store Icon. The App Store Icon in the asset catalog in 'Runner.app' can't be transparent nor contain an alpha channel.</summary>
<p>You need to update your App Launcher Icon (under Settings &amp; Integrations --&gt; General) with an image that isn't transparent and/or doesn't contain an alpha channel. </p>
</details>

<details>
<summary>After submitting my iOS app to the App Store, I am getting an 'ITMS-91053: Missing API declaration' issue. What should I do?</summary>
<p>
Apple requires that apps using certain APIs have a Privacy Manifest file that declares the [**reason for using the API**](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api). Apple will begin requiring this file for App Store approval on May 1, 2024.

Most packages that FlutterFlow uses already have a Privacy Manifest created by the package author or FlutterFlow team. However, there may be some cases where packages don't have the necessary privacy manifest needed.

Similarly, if you have written custom code that calls these APIs directly or uses a package that calls the APIs, you must ensure that your app has the required manifest file.

Here are the steps you can take to resolve this issue:

1. See if the custom package you use is listed [here](https://developer.apple.com/support/third-party-SDK-requirements/); ensure to use the latest version if you are using any of these.
2. If unsure which package is using protected APIs, you may be able to use a tool like [this](https://github.com/crasowas/app_store_required_privacy_manifest_analyser) to identify them. Once identified, update to the latest versions, as the package author may have addressed compliance issues.
    1. To verify, look into the package's changelog or source code for a `PrivacyInfo.privacy` file, which indicates compliance (examples [here](https://github.com/fluttercommunity/plus_plugins/blob/main/packages/share_plus/share_plus/ios/PrivacyInfo.xcprivacy) and [here](https://github.com/flutter/packages/blob/main/packages/url_launcher/url_launcher_ios/ios/Resources/PrivacyInfo.xcprivacy)).
    2. If the current package hasn’t resolved the issue, consider using an alternative package that complies, or contact the package's maintainer for a fix.
3. If you have written a custom iOS code that is accessing the APIs:
    1. In FlutterFlow, navigate to **Settings & Integrations > App Settings > Privacy Manifest Configuration**.
    2. Activate the necessary API reasons and select the appropriate reasons from the dropdown. A detailed explanation of each API reason can be found [here](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api).

![privacy-manifest-configuration](../imgs/privacy-manifest-configuration.avif)
</p>
</details>


