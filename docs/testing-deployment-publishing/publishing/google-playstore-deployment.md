---
slug: /deployment/google-playstore-deployment
title: Google Play Store Deployment
description: Learn how to seamlessly deploy your apps to the Google Play Store using FlutterFlow.
tags: [Google Play Store, Deployment, FlutterFlow, Android]
sidebar_position: 3
toc_max_heading_level: 4
keywords: [Google Play Store, Deployment, FlutterFlow, Android]
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Google Play Store Deployment

FlutterFlow allows you to seamlessly deploy your apps directly to the Google Play Store, all from within the builder. This guide provides comprehensive instructions on prerequisites, step-by-step process for deployment, advanced settings, and troubleshooting common issues.

:::info[Prerequisites]
1. Register for a [**Google Play Developer account**](https://play.google.com/console/u/0/signup).
2. [**Test your application**](../running-your-app/local-run.md) on a real device.
3. Confirm the [**app details**](../../resources/projects/settings/general-settings.md#app-details). Especially the package name, which can't be changed after your app is deployed.
4. Set an [**App Launcher Icon**](../../resources/projects/settings/general-settings.md#launcher-icon). The App Launcher icon can't be transparent or contain an alpha channel.

:::

## Deploy to Google Play Store

Deploying to Google Play Store comprises of the following steps:

1. [Creating an app on Google Play Store](#1-creating-an-app-on-google-play-store)
2. [Set up your app](#2-set-up-your-app)
3. [Adding service account credentials](#3-adding-service-account-credentials)
4. [Deploy to Google Play Store](#4-deploy-to-google-play-store)

### 1. Creating an app on Google Play Store

Follow the steps below to create an app on Google Play Store:

1. Open the [Google Play Console](https://play.google.com/console).
2. Click on the **Create app** button at the top right side of your screen.
3. Enter the **App name**, select the app type, and choose whether the app is **Free** or **Paid**.
4. Accept the **Declarations**.
5. Click **Create app** at the bottom.

<p></p>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/f7060474fd3741cbbff64e885751d1ed?sid=75eb6e5e-7bcf-4ed8-9480-42bfc46ef622"
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

<p></p>


### 2. Set up your app

To successfully deploy the app, you must fill in all the app details required by the Google Play Store.

To proceed, navigate to the **Set up your app** section within the newly created app. Expand the **View tasks** section. Then, click on each task and fill in the necessary app information.

![setup-your-app](../imgs/setup-your-app.avif)

### 3. Adding service account credentials

Adding Service Account Credentials to FlutterFlow helps you publish your apps on Google Play.

#### 3.1 Creating a Service Account

To create the Service Account, you can follow the instructions from [here](https://developers.google.com/android-publisher/getting_started). To help you get started quickly, here are the exact steps you need to follow:

1. If you haven't set up Firebase in your app, you'll need to [create a Google Cloud Project](https://developers.google.com/android-publisher/getting_started#creating).
2. Then, head over to the [Google Play Developer API page](https://console.developers.google.com/apis/api/androidpublisher.googleapis.com/) in Google Cloud Console and click **Enable**.
    
    ![enable-play-api](../imgs/enable-play-api.avif)
    
3. In Google Cloud Console, go to [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts), click + **CREATE SERVICE ACCOUNT,** and follow the steps as per in the visual below.
<p></p>
    <div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
        <iframe 
            src="https://www.loom.com/embed/221b44ff1f21449191ad400c368c98c1?sid=1d157ef4-8255-45f9-b313-b19c94fc4323"
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

<p></p>


4. On the right side of the newly created service account, click the action menu (three dots) icon and select **Manage keys**. Then, click **ADD Key > Create new key > select JSON > CREATE**. Keep the downloaded file at a safe place.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe 
            src="https://www.loom.com/embed/ddacc773f607466dacda84d2bc5a65d3?sid=99860215-0e37-412d-bfb3-5f04791a7c11"
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

<p></p>

5. Now, return to the Google Play Console and follow the steps below:
    1. Go to the [Users & Permissions](https://play.google.com/console/users-and-permissions) page.
    2. Click **Invite new users**.
    3. Put the email address for your service account in the email address field and grant the necessary rights to perform actions:
        - "Edit and delete draft apps"
        - "Release to production..."
        - "Release apps to testing tracks"
        - "Manage testing tracks and edit tester lists"
    4. Click **Invite user**.

<p></p>
    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe 
            src="https://www.loom.com/embed/c0df78e3c850419787559a399ca5eebd?sid=429452db-f87d-46af-8d80-c6d64d400dc6"
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


#### 3.2 Uploading service account credentials to FlutterFlow

To upload the service account credentials on FlutterFlow:

1. Return to FlutterFlow, navigate to **Settings & Integrations > App Settings >** **Mobile** **Deployment,** and scroll down to the **Google Play Store** section.
2. Under the **Service Account Credentials**, Click on **Upload Credentials** and select the downloaded credential, i.e., the `.json` file in the previous step no.4.

<p></p>


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/a59cb331fc6944af97249dd6aec378bc?sid=62fd1920-4994-45e3-abba-e84f75a8f705"
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

### 4. Deploy to Google Play Store

To enable FlutterFlow to deploy your app to the Google Play Store on your behalf for the first time, you have to download the [`.AAB`](https://chat.openai.com/share/6f5714c1-eb13-428b-b9ee-9772f2810284) file from FlutterFlow and upload it to the [Internal Testing](https://play.google.com/console/about/internal-testing/) Track on the Google Play Store.

Once the Internal Testing track is ready (with `.AAB` file), FlutterFlow can handle the subsequent releases.

#### 4.1 Getting the AAB (App Bundle) file

To get the AAB file:

1. Set the **Google Play Track** to **Internal** and hit **Deloy to Play Store**.
2. Wait for a couple of minutes and then click **Check Build Status**. If you don't see the **AAB APK** options yet, wait for some time.
3. Click on the **AAB** to download the `.aab` file.

:::info

You need to perform this step only for fresh deployment (i.e., first-time setup).

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://www.loom.com/embed/2c432b6bc4ba41d0bf7ec0db3912a0bd?sid=7f8df4ca-107a-4e82-aa34-06194c188ed9"
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

#### 4.2 Creating a testing track

:::info

While you can certainly release your app directly to the Production Track, it's advisable to first release it within your team using the Internal Testing Track.

:::

Inside the [Google Play Console](https://play.google.com/console), create a testing track as per in the steps below:



<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://www.loom.com/embed/01500472234942f78af65b48d1f6eacf?sid=fb31285c-b957-4011-ad0a-8285b7c553b8"
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

#### 4.3 Deploy

You can now deploy directly from FlutterFlow or from your GitHub repository.

:::info

- Every time you deploy, we'll auto increment the **Build Number** (i.e., version code in Android) to ensure that each release is identifiable. If needed, you can update the *App Version* and *Build Number* yourself.
- We'll [**auto-generate**](https://developer.android.com/studio/publish/app-signing#generate-key) and [**sign**](https://developer.android.com/studio/publish/app-signing#sign_release) your app for the release with the Keystore (i.e., upload key). If you wish to download the keystore, click the orange key button.

:::

Ensure the **Google Play Track** is set to **Internal** and hit the **Deloy to Play Store** again. On successful deployment, you will see the status as 'finished'.

![deploy-flutterflow](../imgs/deploy-flutterflow.avif)


:::tip
If you prefer to manage your deployment process outside of FlutterFlow, such as integrating with your own CI/CD pipeline, or if you want more control over versioning and custom code management directly on GitHub. You also have the option to [**Deploy apps from your GitHub repository**](deploy-from-github.md).
:::


#### 4.4 Verify deployment

To verify that the app is deployed to Play Console:

1. Open the **Internal testing** in [Google Play Console](https://play.google.com/console).
2. Under the **Releases** section, find your release and click on the **Show Summary** button.
3. See the **Version Codes** number is increased.

![verify-deployment](../imgs/verify-deployment.avif)

#### 4.5 Deploy to production

To deploy your app to production:

1. Inside the **Internal testing** in [Google Play Console](https://play.google.com/console).
2. Under the **Releases** section, find and click on the **Promote Release** dropdown.
3. Select the **Production**. This will create the Production track and you can continue to release your app from there onwards.
4. Next time onwards in FlutterFlow, you can publish directly to the Production track by setting the **Google Play Track** to **Production**.

<Tabs>
<TabItem value="Google" label="Google Play Console: Promote to production" default>
![play-console-deploy-prod](../imgs/play-console-deploy-prod.avif)
</TabItem>
<TabItem value="FF" label="FlutterFlow: Set Google Play Track to Production">
![play-console-deploy-prod](../imgs/ff-deploy-prod.avif)
</TabItem>
</Tabs>

---

## Advanced Settings

### Upload Keystore

If you've previously deployed an app to the Play Store using your own keystore file, you must enable this option. Once enabled, proceed to **Upload Keystore** file and provide the **Keystore Alias**.

![upload-keystore](../imgs/upload-keystore.avif)

### Changes not sent for review

If you face an error that says '*Changes cannot be sent for review automatically*', enable this option and retry deployment.

### Submit as draft

While deploying, if your app is still in draft mode, meaning it is not available on the Play Store yet, you may encounter an error message stating, 'Only releases with the status draft may be created on a draft app.'

To resolve this, enable this option, and you'll see that the release will be created as a draft. You'll then need to manually roll out the app.

---

## Video guide
Watch this video if you prefer watching a video tutorial.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/kLfcAzAHA6o"
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

