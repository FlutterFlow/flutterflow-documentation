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

# Apple App Store Deployment

FlutterFlow allows you to deploy your apps directly to the App Store from within the platform. This guide covers all the necessary prerequisites, a step-by-step deployment process, and common troubleshooting tips.

:::info[Prerequisites]
- Create an [**Apple account**](https://appleid.apple.com/account?appId=632&returnUrl=https%3A//developer.apple.com/account/).
- [**Purchase an Apple Developer membership**](https://developer.apple.com/programs/enroll/). Learn more about the program and enrollment process [here](https://developer.apple.com/programs/).
- Set an App Launcher Icon for your app under **Settings & Integrations > General > App Assets**. **Note**: The launcher icon cannot be transparent or contain an alpha channel.
- It's recommended to test your app on a real device before deployment. Follow [**these instructions**](../testing/local-run) to test your app locally.
:::

## Deploy to App Store

The App Store deployment involves the following steps:

### 1. Create a Bundle Identifier

A **Bundle Identifier (ID)** is a **unique string** that identifies your app within the Apple ecosystem, typically formatted in reverse domain name notation like `com.example.myapp`.

To create a Bundle ID, visit the [**Certificates, IDs & Profiles**](https://developer.apple.com/account/resources/identifiers/list) page, add a new **App ID**, and provide these details:

1. **Bundle ID:** Copy the **Package Name** from FlutterFlow.
2. **Description:** Add a brief description of your app.
3. **Capabilities:** Select the necessary app capabilities. Ensure you select **Push Notifications** if your app uses them, and **Sign In with Apple** if your app includes that feature.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/JGwpUcUjVTiFSfc3kGef?embed&show_copy_link=true"
        title=""
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
<p></p>

### 2. Add New App

[App Store Connect](https://developer.apple.com/help/app-store-connect/get-started/app-store-connect-homepage) is the platform used for submitting apps, managing app metadata, and much more. To add a new app, open the [App Store Connect](https://appstoreconnect.apple.com/) and then follow the official steps outlined [here](https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/tVasNWruqpZg01we8gap?embed&show_copy_link=true"
        title=""
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
<p></p>

### 3. Add Apple App ID to FlutterFlow

An App ID is used by Apple to identify your app and associate it with your development team.

To add your App ID to FlutterFlow, go to **[App Store Connect](https://appstoreconnect.apple.com/) > My Apps**, copy your **Apple ID** from **App Information**, and paste it into the **App ID** field in **FlutterFlow > Settings & Integrations > Mobile Deployment > App Store**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/oWMQvIeQfAbGIvMEm4XR?embed&show_copy_link=true"
        title=""
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
<p></p>

### 4. Generate API key and add to FlutterFlow

To generate your API Key, go to [**App Store Connect**](https://appstoreconnect.apple.com/) > **Users and Access** > **Integrations > [Team Keys](https://appstoreconnect.apple.com/access/integrations/api)**. If you haven't added a key before, you will see a **Request Access** button. For further details, watch a [demo](https://youtu.be/L2BpgVog4so?si=yS9r_PBeORgd6Uhp&t=240) here.

Generate a new API key by selecting **Add (+)**, entering a name, and assigning the **App Manager** role. Once the key is generated, download it and upload it to **FlutterFlow** under **Settings & Integrations > App Settings > Mobile Deployment > App Store > Private Key**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/x2X1EcIYLpmDAE7Fn08h?embed&show_copy_link=true"
        title=""
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
<p></p>

### 5. Add issuer ID to FlutterFlow

Copy the **Issuer ID** from [**App Store Connect**](https://appstoreconnect.apple.com/) by navigating to **Users and Access** > **Integrations > [Team Keys](https://appstoreconnect.apple.com/access/integrations/api)**, and then paste it into the **Issuer ID** field under **App Store settings** in FlutterFlow.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/LVqjJmapbZeK7gY1cYmo?embed&show_copy_link=true"
        title=""
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
<p></p>

### 6. Add Key ID to FlutterFlow

Return to **[App Store Connect](https://appstoreconnect.apple.com/) >** **Users and Access** > **Integrations > [Team Keys](https://appstoreconnect.apple.com/access/integrations/api).** Find the row for the API Key you generated [here](#4-generate-api-key-and-add-to-flutterflow), select **Copy Key ID,** and then paste it into the **Key ID** field under **App Store settings** in FlutterFlow.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/qQdK8wDgQyxHplVt4LyP?embed&show_copy_link=true"
        title=""
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
<p></p>

### 7. Deploy

To deploy your app from FlutterFlow, go to **Settings & Integrations > App Settings > Mobile Deployment > App Store** and click **Deploy To App Store**. Once deployed, you will receive an email from App Store Connect that a new build has been added to your app.

![deploy-to-appstore.avif](../imgs/deploy-to-appstore.avif)

:::info
- Every time you deploy, we'll auto increment the **Build Number** (i.e., version code in Android) to ensure that each release is identifiable. If needed, you can update the *App Version* and *Build Number* yourself.
- If another deployment is already in progress, deploying a new build will cancel the previous one.
- It may take a few minutes for the request to process. Once completed, the status will be updated to **Submitted**.
:::

:::tip
If you prefer to manage your deployment process outside of FlutterFlow, such as integrating with your own CI/CD pipeline, or if you want more control over versioning and custom code management directly on GitHub. You also have the option to [**Deploy apps from your GitHub repository**](deploy-from-github.md).
:::


### 8. Submit your app for App Store approval

From [**App Store Connect**](https://appstoreconnect.apple.com/), select **My Apps** and choose your app. Select **Prepare for Submission**, add the app assets and metadata, and then click **Add for Review**.

![add-for-review.avif](../imgs/add-for-review.avif)

Your app will now be reviewed by Apple. For additional information on Apple's review guidelines, please see [this link](https://developer.apple.com/app-store/review/guidelines/).

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


