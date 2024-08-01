---
slug: /integrations/firebase/app-check
title: App Check
description: Learn how to integrate Firebase App Check in your FlutterFlow app.
tags: [Firebase, App Check]
sidebar_position: 3
keywords: [FlutterFlow, Firebase, App Check]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# App Check
[Firebase App Check](https://firebase.google.com/docs/app-check) is a new security feature for protecting the backend services of apps. It blocks traffic that comes from sources other than the registered app, ensuring that usage costs are not incurred for illegitimate usage.

App Check works by using attestation services, which already exist for iOS, Android, and the web. The feature can protect three different types of backends, including Firebase backends like Cloud Firestore, Google API services like Cloud Run, and API endpoints of your own server.

## **Adding Firebase App Check**

To add *Firebase App Check* to your app:

1. Navigate to the [Firebase Console](https://console.firebase.google.com/u/0/) > Build > App Check page.
2. If this is the first time, click the **Get started** button.
    
    ![Get started with App Check](imgs/get-started.avif)
    
3. Now, you'll see the list of apps you have added to this Firebase project. To register attestation service(s), select the project, click **Register,** and then select attestation service.
    1. For Android, you can select [Play Integrity](https://developer.android.com/google/play/integrity?authuser=1) and then follow step number 2 and 3 from [here](https://firebase.google.com/docs/app-check/android/play-integrity-provider?authuser=2#project-setup).
    2. For iOS, you can choose from [Device Check](https://developer.apple.com/documentation/devicecheck) or [App Attest](https://developer.apple.com/documentation/devicecheck/establishing_your_app_s_integrity) and then follow step number 2 and 3 from [here](https://firebase.google.com/docs/app-check/ios/devicecheck-provider?authuser=2).
    3. For the Web, select [reCAPTCHA v3](https://developers.google.com/recaptcha) or [reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise) and then follow steps 2 and 3 from [here](https://firebase.google.com/docs/app-check/web/recaptcha-enterprise-provider?authuser=2#project-setup). **Note**: To run the app in Run/Test mode, you must register the **Web** version of the app as well.


<Tabs>
<TabItem value="1" label="Android" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/3c1d6253d401446dafaf0de1b160b24a?sid=ec114490-1733-4d3c-bc88-b29f32a3838d"
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
</TabItem>
<TabItem value="2" label="iOS">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/995f650448784ea9bc9f567e3558f24a?sid=888de56a-ca4f-4621-bf7f-eab50a69746f"
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
</TabItem>
<TabItem value="3" label="Web">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/643864fcb5434e379d3e0cf32ebaebaf?sid=7c782d8e-e64d-40ea-afd6-bf339c1b6d6b"
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
</TabItem>
</Tabs>

4. Ensure that enabling Firebase App Check [won't disrupt your existing legitimate users](https://firebase.google.com/docs/app-check/monitor-metrics?authuser=2).
5. Now, you can select the service you want to secure. Switch to the **APIs** tab, select the service, and click **Enforce** button. A popup may open, telling you that once enabled, it will deny all requests that do not have *App Check* token. Click **Enforce** again if you are ok. **Note** that it might take up to 15 minutes to start the enforcement.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/44403c744f854314926bdd1f5d70f017?sid=49037d52-e362-4ada-8e9a-009578b32237"
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

6. Navigate back to FlutterFlow and open **Settings and Integrations > Project Setup > Firebase >** scroll down and expand **App Check** section **>** switch on **Enable App Check** toggle.
7. You can fill out the optional details such as **reCAPTCHA Site Key** (you should have it while performing step 3.3) and [**Run/Test Mode Debug Token**](https://firebase.google.com/docs/app-check/flutter/debug-provider). To get the debug token, follow the steps below:
    1. Navigate to the [Firebase Console](https://console.firebase.google.com/u/0/) > Build > App Check > Apps.
    2. Open the app for which you want to generate the debug token.
    3. Click three dots icon (i.e., overflow menu icon) and select **Manage debug token**.
    4. Click **Add debug token**.
    5. Give it a **Name** and click **Generate token**.
    6. Copy the generated token and paste it in FlutterFlow's designated field.
    7. Click **Save**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/aa543bffaed347659e99c6554c9a89ef?sid=8e2ad513-65c1-4114-9aec-032a6b7b0c36"
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

5. You might want to see if it works on a real device or an emulator. To run on a real device, you can set the **Android Provider** to **Play Integrity** and to run on an emulator, set it to **Debug,** and then try checking it by downloading the APK.
    1. If it doesn't work for *Play Integrity*, ensure you have enabled the Play Integrity API. See how to do it in step 2 [here](https://firebase.google.com/docs/app-check/android/play-integrity-provider?authuser=1&hl=en#project-setup).
    2. If it doesn't work for *Debug*, you can try [downloading the code](../../testing-deployment-publishing/exporting-code/ff-cli.md), following the instructions [here](https://firebase.google.com/docs/app-check/flutter/debug-provider#android), and running it locally.

:::tip
To add the App Check on the app with the non-Firebase (i.e., your self-hosted) backend, follow the instructions [**here**](https://firebase.google.com/docs/app-check/flutter/custom-resource).
:::