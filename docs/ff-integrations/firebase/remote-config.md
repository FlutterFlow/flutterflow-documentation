---
slug: /integrations/firebase/remote-config
title: Remote Config
description: Learn how to integrate Firebase Remote Config in your FlutterFlow app.
tags:
  - FlutterFlow
  - Integrations
  - Firebase
sidebar_position: 1
keywords:
  - FlutterFlow
  - Firebase
  - Remote Config
last_verified: 2026-09-02
---
# Remote Config

[Firebase Remote Config](https://firebase.google.com/docs/remote-config) lets you change supported app behavior and appearance without publishing a new app build. For example, you can show a promotional banner or gradually expose a non-security-sensitive feature.

:::danger[Remote Config is not secret or authorization storage]
Users can inspect values delivered to a client app. Never store API secrets, credentials, private endpoints, entitlement decisions, prices that must be enforced, or authorization rules in Remote Config. Enforce security-sensitive decisions on a trusted backend and use Remote Config only to adjust the client experience.
:::

![Using Firebase Remote Config to show/hide a feature](imgs/show-hide-fi.avif)

When you enable Remote Config, define each parameter in FlutterFlow as an **in-app default** and define the corresponding key in your [Firebase console](https://console.firebase.google.com/). On startup, the generated app fetches and activates eligible remote values. If no fetched value is available or activation fails, the app uses the in-app default, so every default must be safe and usable on its own.

:::warning
The app attempts a fetch at startup, but FlutterFlow configures a one-hour minimum fetch interval. Starting the app repeatedly within that interval generally reuses the last activated value. Published changes are therefore not an instant-delivery or emergency kill-switch mechanism.
:::

## Using Firebase Remote Config

Follow the steps below to use the Remote Config:

### 1. Enable Remote Config

To enable Remote Config, navigate to **Settings and Integrations** > **Project Setup** > **Firebase** > Expand the **Remote Config** section and **Enable Remote Config**.

![Enabling Remote Config](imgs/remote-config.avif)

### 2. Add parameter in Firebase Console

You will be able to dynamically control your app using the parameters created in the Firebase Console of your project.

To create the parameter:

1. Open your project in the [Firebase console](https://console.firebase.google.com/u/0/) and navigate to **Remote Config** (currently under **DevOps & Engagement**).
2. If this is the first time, click **Create configuration** button.
3. Click **Add parameter**. This will open the **Create parameter** section on the right side.
4. Enter the **Parameter name** (e.g., *show_promo_banner*, *primary_color*, etc.).
5. Set the **Data type** among the *String*, *Number*, *Boolean*, and *JSON*.
6. Set the **Default value**.
7. If you select **Use in-app default**, Firebase sends no backend value for that parameter and the app uses the default defined in FlutterFlow. Otherwise, set a backend default and any conditional values you need.
8. Click **Save**.
9. Click **Publish Changes** to make this parameter immediately available to your app.

If several conditions match, the first condition in Firebase's ordered list takes precedence. Test default, conditional, offline, and failed-fetch behavior before relying on a parameter in production.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/xTbhNczhOdJfzpeSBv7e?embed&show_copy_link=true" title="Remote Config interactive tutorial"
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
        src="https://demo.arcade.software/LPFTBWYk2GIQ2TZzpZzF?embed&show_copy_link=true" title="Remote Config interactive tutorial"
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
        src="https://demo.arcade.software/BXpPxrWjncgJ5QqqhCTW?embed&show_copy_link=true" title="Remote Config interactive tutorial"
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
        src="https://demo.arcade.software/4RHPm1hnQpL7kpN2NcRB?embed&show_copy_link=true" title="Remote Config interactive tutorial"
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
