---
slug: project-setup
title: Project Setup
tags: [Setup, Permissions, Multiple Languages]
keywords: [permission message, enabling platforms, support multiple languages, adding custom permissions, walkthrough, development environments]
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
You can also add multilingual permission messages by following the instructions [**here**](../../../ff-concepts/localization-accessibility/localization.md).
:::

### Request Permission [Action]

Using this action, you can request permission before accessing the user's private information, such as location, voice, contacts, and photos.

This action is helpful when you add a custom widget or action that accesses the user's personal information and does not have an inbuilt permission mechanism.

:::info
- Request permission only works on a mobile platform.
- There won't be any dialog shown for the *Bluetooth* permission.
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

--- 
## Platforms
By default, the generated project can run on Android, iOS, and the Web without any additional effort. However, to run your app on the desktop, you need to enable a platform (e.g., MacOS, Windows, Linux) from this page.

### Advanced Android Settings

- **Kotlin Version**: There are various situations where you may need to modify or configure the Kotlin version in your Android project. This could include updating to the latest version, adapting the version to accommodate a specific library or tool, or other specific requirements. To change the default version, enter the value here.
- **Minimum SDK Version**: This defines the lowest version of Android that your app can run on. Setting a higher minimum SDK version ensures your app can use newer APIs and features but may limit the devices that can install it.
- **Compile SDK Version**: This refers to the version of Android that your code is compiled against. It determines the APIs your app can use. To change it, enter the desired SDK version here.
- **Target SDK Version**: This is the version of Android that your app is intended to run on. It helps Android ensure forward compatibility by applying certain behavior changes only if the target SDK is high enough. To adjust this, enter the desired version here.

---

### Advanced iOS Settings

- **Disable iPad Support:** If the app is specifically designed for an iPhone and doesn't provide a good user experience on an iPad, you might want to trun on this setting.
- **Minimum iOS Version**: This specifies the lowest version of iOS that your app can run on.

---

### Advanced Web Settings

- **Use Original Engine Initialization**: This setting uses the original Flutter web engine initialization, which can sometimes improve loading times in deployed web apps. Enable this option if you experience performance issues with the custom initialization process.
- **Use CanvasKit**: CanvasKit provides better performance and fidelity for rendering on the web by leveraging WebAssembly. This setting can improve the visual quality and performance of your app, especially for complex graphics and animations. Enable this option to use CanvasKit for rendering on the web.

---

## Multiple Languages
To support multiple languages in your app, refer [here](../../../ff-concepts/localization-accessibility/localization.md).

---

## Walkthroughs

A walkthrough in app development is a guided tour of the app's features and functionality, typically presented to the user when they first launch the app. It is designed to help new users understand how to use the app and navigate its various sections.

For example, consider a news article app. When a new user opens the app for the first time, they might be greeted with a series of pop-ups that highlight key features such as watching article videos, subscribing to article updates, and filtering articles by tags.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/cc0e2560855d4e988a6b881ca1b63377?sid=8f959be3-b08a-4043-a3df-bea460297b2a"
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

The steps to create and display a walkthrough in your app are as follows:

1. [Create walkthrough](#1-create-walkthrough)
2. [Start walkthrough](#2-start-walkthrough-action)
3. [Get notified on walkthrough skipped and completed](#3-get-notified-on-walkthrough-skipped-and-completed)

### 1. Create walkthrough

To create a walkthrough:

1. Navigate to **Settings and Integrations** > **General** > **Walkthroughs >** click **Create New**.
2. Start with providing the **Name**, **Description** and then select the **Page** on which you want to show the walkthrough. The name you enter will be used to initiate the walkthrough later.
3. Now, we must add the steps for our walkthrough. Each step that we add here acts as a separate screen or popup that nicely animates to highlight the UI element. To add steps:
    1. Click on the **+ Add Step**.
    2. Choose the widget to highlight by clicking **Widget Unset**. In the right-side preview, select the desired widget and click **Confirm**.
    3. When the widget is in focus, you may want to present information about it; this could be a simple text or a custom component (e.g., a text with an arrow). You have complete control over what you want to display via a [component](../../../resources/ui/components/intro-components.md). Click the diamond icon to create a new component and then set it to **Content**.
    4. You can also choose where the Content will be displayed by setting the **Content Alignment**.
    5. Choose a **Focus Shape** for the widget—either **Circle** or **Rectangle**.
    6. Pick an **Overlay Color** that you want to display when the widget is highlighted.
    7. By default, we also add a skip button on the screen, and you can align it using the **Skip Alignment** option.
    8. Add additional steps by repeating the process for all UI elements you wish to feature.
        
        ![Walkthrough Step](../imgs/wt-steps.png)
        
4. To preview the walkthrough, click the **Start Preview** button and use the arrows to navigate through the steps.
5. To rearrange the steps, enable the **Reorder** option and then use the arrows to adjust their sequence.
6. Click the **Add Walkthrough** to save.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/1ea4a7c79626421095a0b1363356efe8?sid=5e8fa4e8-18c3-4191-9304-8b131028df29"
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

### 2. Start Walkthrough [Action]

After creating a walkthrough, you can display it on a page using the Start Walkthrough action. Follow the steps below to add this action on a page load.

1. Walkthroughs are generally presented immediately upon page load. Therefore, open the page where you would like the walkthrough to be showcased.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
3. Ensure the **On Page Load** is selected and click on the **+ Add Action**.
4. On the right side, search and select the **Walkthrough > Start Walkthrough** (under *Widget/UI Interactions*) action.
5. Click to **Select Walkthrough** that you have created.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/13ff22ea7a624d54b3874256fac88b9c?sid=91ed6db7-8e16-4464-a133-b532846eaa36"
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

### 3. Get notified on walkthrough skipped and completed

Sometimes, you might want to get a callback to know whether the walkthrough is skipped or completed. For example, you could set up a callback to gather analytics or trigger a specific action once the walkthrough is finished, such as directing the user to a new page or enabling certain features of the app.

When a walkthrough is added on a page, you'll see the following types of actions (aka callbacks), and you can choose any of them to add actions under it.

1. **On Walkthrough Complete**: Actions added under this will be triggered whenever the user finishes all the steps of the walkthrough.
2. **On Walkthrough Skip**: Actions added under this will be triggered whenever the user chooses to skip the walkthrough.

<Tabs>
<TabItem value="1" label="On Walkthrough Complete" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/fceb1c6ed1c842c6ab1a697719cfed60?sid=b41d279d-ea29-4536-b36a-0104e3f8fe0c"
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
<TabItem value="2" label="On Walkthrough Skip">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/adce2ee91ed2406db4ff3e010eb39a85?sid=9235994c-3da9-4b7b-b0ed-ace0afecf010"
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

Here's how you do it:

1. Open the page, select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
2. Select **On** **Walkthrough Complete** or **On Walkthrough Skip** and add actions under it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/53546557a01d4e65864f997467cea6ad?sid=f8f999ae-97cc-4a96-9b8a-7736a6561907"
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

### Video guide

If you prefer watching a video tutorial, here's the one for you:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/FFpR1SDrZEQ"
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

### FAQs

<details>
<summary>How do I fix when walkthrough misaligns on a widget, not focusing on the component?</summary>
<p>
This issue typically arises when a widget's animation and the walkthrough start simultaneously. As the walkthrough initiates, it captures the widget's initial position before the animation completes. Consequently, after the animation concludes, the widget may have shifted to a different location, leading to misalignment.

![Misaligned focus example](../imgs/misaligned-focus-example.png)

To resolve this, simply add a delay ([Wait](../../../resources/control-flow/time-based-logic/wait-action.md) action) before initiating the walkthrough. **Remember,** the wait duration must be equal to or greater than the duration of the animation.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/890eb9c517e84302afd0d8934c3f29fa?sid=85faf200-c076-4dee-b75b-604582f1b43c"
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
</p>
</details>

<details>
<summary>My widget is not highlighting on a scrollable page. What should I do?</summary>
<p>
We are aware of a limitation where widgets that are not visible on a page (i.e., you need to scroll down to see them) may not be highlighted. We are actively working to resolve this issue. As a temporary workaround, you can try placing the widget in an area that is visible without scrolling. We appreciate your patience and hope to have a fix soon!
</p>
</details>

