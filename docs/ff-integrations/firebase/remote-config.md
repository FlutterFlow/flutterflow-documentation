---
slug: /integrations/firebase/remote-config
title: Remote Config
description: Learn how to integrate Firebase Remote Config in your FlutterFlow app.
tags: [Firebase, Remote Config]
sidebar_position: 1
keywords: [FlutterFlow, Firebase, Remote Config]
---

# Remote Config

[Firebase remote config](https://firebase.google.com/docs/remote-config) allows you to control your app's behavior and appearance without pushing an app update. For example, you could use it to change or show/hide certain elements of your app, such as a promo banner and Santa hat, or use it as a feature flag (payments, food delivery) with no need to publish an app update.

![Using Firebase Remote Config to show/hide a feature](imgs/show-hide-fi.avif)

When you enable the Remote Config, you must specify the parameter in our builder (called 'in-app defaults') and inside the Remote Config dashboard of your [Firebase console](https://console.firebase.google.com/). When the app starts, it fetches config values from the Firebase console, and for any reason, if it fails, your app will use the in-app defaults.

:::warning
The app will try to fetch values every time it starts. However, due to the minimum fetch interval of 1 hour (set by default), the values won't be fetched more than once in 1 hour.
:::

## Using Firebase Remote Config

Follow the steps below to use the Remote Config:

### 1. Enable Remote Config

To enable Remote Config, navigate to **Settings and Integrations** > **Project Setup** > **Firebase** > Expand the **Remote Config** section and **Enable Remote Config**.

![Enabling Remote Config](imgs/remote-config.avif)

### 2. Add parameter in Firebase Console

You will be able to dynamically control your app using the parameters created in the Firebase Console of your project.

To create the parameter:

1. Navigate to the [Firebase Console](https://console.firebase.google.com/u/0/) > Enagage > Remote Config** page.
2. If this is the first time, click **Create configuration** button.
3. Click **Add parameter**. This will open the **Create parameter** section on the right side.
4. Enter the **Parameter name** (e.g., *show_promo_banner*, *primary_color*, etc.).
5. Set the **Data type** among the *String*, *Number*, *Boolean*, and *JSON*.
6. Set the **Default value**.
7. If you enable the **Use in-app default** toggle, any change made to this parameter from here won't be reflected in your app. Instead, your app will use values from the parameters defined in our builder (see how to create it in the [next step](#3-add-parameter-in-flutterflow)).
8. Click **Save**.
9. Click **Publish Changes** to make this parameter immediately available to your app.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/xTbhNczhOdJfzpeSBv7e?embed&show_copy_link=true"
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

### 3. Add parameter in FlutterFlow

Parameters added to your FlutterFlow project are called in-app defaults. To add them:

1. Navigate to **Settings and Integrations** > **Integrations** > **Firebase Remote Config**.
2. Click **+ Add Parameter**. A pop will open.
3. Enter the parameter **name**, select the **Data Type**, set its **Default Value**, and click **Create Parameter**. **Note**: The parameter name must match the name given in the [previous step](#2-add-parameter-in-firebase-console).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/LPFTBWYk2GIQ2TZzpZzF?embed&show_copy_link=true"
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

### 4. Use parameter

Now you can access the newly created parameter from the **Set from Variable > Firebase Remote Config**.

Here's an example of using the remote config parameter to set the [conditional visibility](../../resources/ui/widgets/widget-commonalities.md#conditional) for the social login feature.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/BXpPxrWjncgJ5QqqhCTW?embed&show_copy_link=true"
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

Here's another example that changes the app's background using the color value from the Remote Config parameter.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/4RHPm1hnQpL7kpN2NcRB?embed&show_copy_link=true"
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

