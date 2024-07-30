---
slug: project-setup
title: Project Setup
tags: [permissions, multiple languages, multi-platform]
keywords: [permission message, enabling platforms, support multiple languages, adding custom permissions]
description: Learn how to setup your project in FlutterFlow.
sidebar_position: 0
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Project Setup

Setting up project in FlutterFlow ensures that your app is prepared to provide a robust and user-friendly experience across different platforms and regions. By adding necessary permissions, enabling multiple platforms, and supporting multiple languages, you can expand your app's reach and functionality while maintaining high standards of performance and user satisfaction.

## Permissions

In your app, you must be open and get upfront consent before using the user's private information, such as location, health data, photos, or any information that reveals their identity via the camera and/or microphone. This is done by adding a permission flow just before accessing the data.

We automatically add permissions whenever you add features that access the user's private data. The only thing left for you is to add the permission messages. Adding permission messages helps users clearly understand how your app will use the data it is requesting for.

:::info
- You can't show the custom permission message on Android, so the message(s) added here are displayed only on iOS devices. To write a clear permission message, please visit the help guide [**here**](https://developer.apple.com/design/human-interface-guidelines/patterns/accessing-private-data/#requesting-permission).
- You can't turn off the permission (with messages) added by us to prevent issues that might come after submitting your app for review.
- See how to [**request permission**](#request-permission-action).
:::

<figure>
    ![permissions-fi](../imgs/permissions-fi.avif)
  <figcaption class="centered-caption">Asking for camera permission before capturing a photo</figcaption>
</figure>


### Adding permission message

Although we add some default permission messages, you must change them to clearly mention the reason for asking the permission(s).

To add permission message:

1. Select **Settings & Integrations** from the left Navigation Menu.
2. Under the **Project Setup**, select **Permissions**.
3. Here you can customize the permission message for each permission. For the permissions that are not added/enabled yet, you can turn on the toggle and enter the message. On running the app, this message will be displayed inside the standard alert dialog (between your app name and action buttons).

For the already added permission (which you can't turn off), if you leave the message empty, the message displayed as a hint will be shown inside the permission dialog.

![Adding permission message](../imgs/add-permission.png)

### Adding custom permission

Sometimes you might add a feature (probably using Custom Widget or Custom Action) that requires user permission and is not present in the list here—for example, adding a speech recognition feature to your project. In that case, you can add the required permission along with the message for the Android and/or iOS from here.

To add custom permission:

1. Select **Settings & Integrations** from the left Navigation Menu.
2. Under the **Project Setup**, select **Permissions**.
3. Click on the **+ Add Permission**.
4. Inside the **iOS Permission key** enter the value (e.g. *NSSpeechRecognitionUsageDescription*, *NSMicrophoneUsageDescription* etc.).
5. Inside the **Android Permission name** enter the value (e.g., *RECORD_AUDIO*, *CAMERA*, etc.).
6. Also, enter the **Permission Message** that describes the exact usage of data.
7. Click on the Done icon on the right.
    

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/AuxM1ChTm1v5mh59LfYK?embed&show_copy_link=true"
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

:::info[Adding translation for messages]
You can also add multilingual permission messages by following the instructions [**here**](#).
:::

### Request Permission [Action]

Using this action, you can request permission before accessing the user's private information, such as location, voice, contacts, and photos.

This action is helpful when you add a custom widget or action that accesses the user's personal information and does not have an inbuilt permission mechanism.

:::info
- Request permission only works on a mobile platform.
- There won't be any dialog shown for the *Bluetooth* and *Notifications* permissions.
:::

<Tabs>
<TabItem value="1" label="Allow permission" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/EbHqL6taiZfjFhxrQsJK?embed&show_copy_link=true"
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
<TabItem value="2" label="Reject permission">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/6L0VxKxig1wu3uBLoGZq?embed&show_copy_link=true"
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

#### Adding Request Permission action

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to add this action.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action flow Editor** in a new popup window. If it's the first action, click **+ Add Action** button. Otherwise, click the "**+**" button below the previous action tile and select **Add Action**.
    1. Search and select the **Request Permissions** (under *Alerts/Notifications*) action.
    2. Set the **Permission Type** to the one you need. Only the permissions for which the message is present are shown here.
    3. Now you must check if the permission was granted or rejected. You can do so by adding the conditional action. To do so, click the "**+**" button below the previous action tile and select **Add Conditional**.
    4. From the **Set Variable** menu, select **Permission > Permission name** (this should be the permission you requested for).
        1. The **TRUE** section represents success, meaning permission was granted. Here you can add any action that informs users or access their data.
        2. The **FALSE** section represents failure, meaning permission was denied. Here you can add any action that informs users about the permission they have denied.
    5. Click **Close**.


<Tabs>
<TabItem value="1" label="Adding Request Permission action" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/VqE2ZlW81599AWwCJALw?embed&show_copy_link=true"
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
<TabItem value="2" label="Request permission action flow">
![adding-request-permission-action-flow](../imgs/adding-request-permission-action-flow.avif)
<p></p>
</TabItem>
</Tabs>