---
slug: /concepts/animations/lottie-animation
title: Lottie Animation
description: Learn how to add Lottie animation in your FlutterFlow app.
tags: [Lottie Animation, FlutterFlow, Animations]
sidebar_position: 1
keywords: [Lottie Animation, FlutterFlow, Animations]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Lottie Animation
The LottieAnimation widget allows you to display [Lottie files](https://lottiefiles.com/featured) from uploaded assets or the URL link. Lottie files are high quality (they do not pixelate), smaller than GIF, and easy to add to any platform.

For example, you could use the LottieAnimation widget to show a nicely animated loading indicator to provide a great user experience to the users.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/725611c8453d4d97b1f5c3b16a58d888?sid=e610274a-3dac-42da-aea9-9a1fb9f47509"
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

## Adding LottieAnimation

Showing Lottie files in a LottieAnimation widget comprises the following steps:

1. [Getting Lottie files](#1-getting-lottie-files)
2. [Adding LottieAnimation widget](#2-adding-lottieanimation-widget)
3. [Changing animation source](#3-changing-animation-source)

### 1. Getting Lottie files

The LottieAnimation requires the Lottie file to be added to display the animation on the screen. You can get the Lottie files from its [official collection](https://lottiefiles.com/featured) in two ways.

#### 1.1 Downloading the Lottie JSON file

The Lottie JSON file is required when you want to play the animation from the file uploaded to your project.

To download the Lottie JSON file:

1. Open https://lottiefiles.com/ and search for the required animation.
2. Select the animation you would like to add. This will open a new popup.
3. Click on the **Download** button and select **Lottie JSON**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/65e8a01b68964bb98867f16f18c68501?sid=ee4e6bcd-81ac-4726-9162-4180f99cf8b4"
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

#### 1.2 Copying Lottie animation URL

The Lottie animation URL is required when you want to play the animation from the file hosted at https://lottiefiles.com/.

To copy the animation URL:

1. Open https://lottiefiles.com/ and search for the required animation.
2. Select the animation you would like to add. This will open a new popup.
3. Find the **Lottie Animation URL** (bottom right of the playing animation) and copy it.

:::info
The Lottie animation URL is only visible when you are logged in.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/b0f54823ae4b4e86888aa6eda1cb1acc?sid=ae30f8af-36c5-438a-ad66-8578baf98448"
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

### 2. Adding LottieAnimation widget

To add LottieAnimation widget to your project:

1. Drag the **LottieAnimation** widget from the **Base Elements** tab (in the Widget Panel) or add it directly from the widget tree.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Lottie Animation** section.
3. Find the **Path** property and enter the **URL** (see how to get it [1.2](#12-copying-lottie-animation-url)) for the new Lottie file.
4. By default, the animation will play as soon as the page loads. To disable this and play animation on a button click or any other event, uncheck the **Auto Animate** checkbox.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/cbdbd43f1b5c424aaea3ab85e4af8fdd?sid=ae3cee84-42df-4a1d-bdca-3a73a5e18492"
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

### 3. Changing animation source

By default, the widget's animation source is set to network. However, you can change this to use a Lottie file uploaded directly to your app.

Here's how you can change the animation source:

1. Select the **LottieAnimation** widget from the widget tree or the canvas area.
2. Move to the property panel (on the right side of your screen) and scroll down to the **Lottie Animation** section.
3. Find the **Animation Source** dropdown and select .
4. Now, find the **Asset Animation** property, click the **Upload LottieAnimation** button, select the Lottie file and upload it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/63ea5db22a0c407aba1428d1432f40a2?sid=50c0ac8d-d8e0-46c7-8432-54099174b003"
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

## Customizing

You can customize the appearance and behavior of this widget using the various properties available under the properties panel.

### Changing animation type

You can control how the animation is played, whether it should play only once, in a loop, or in a boomerang fashion (play back and forth).

To control the animation type:

1. Select the **LottieAnimation** widget from the widget tree or the canvas area.
2. Move to the property panel (on the right side of your screen) and scroll down to the **Lottie Animation** section.
3. Find the **Animation Type** dropdown and select among the **Once**, **Loop**, and **Boomerang**.

<Tabs>
<TabItem value="1" label="Open" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/7d709e4b766344bb951339007c5f1cdc?sid=cbbb3887-6a13-4d7a-b65b-c024dbb24fdf"
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
<TabItem value="2" label="Loop">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/725611c8453d4d97b1f5c3b16a58d888?sid=0bfbbe7c-05be-442d-95f7-f06b94ae0463"
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
<TabItem value="3" label="Bomerang">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/35e52460778f473db0029ef4a269e4a2?sid=d5975f0d-8e44-4938-a87f-8ce36cc049b2"
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

### Change frame rate

By default, animations are played at the frame rate specified when they are exported from After Effects, usually at 10 or 30 FPS. Modern phones, however, can support higher refresh rates, such as 60 or 120 FPS. If you're not satisfied with how the animation looks at these default settings, you can adjust its frame rate to a smoother 60 FPS for better quality.

To do so, move to the **properties panel** > **Lottie Animation** > enter the value in the **Frame Rate** field.

### Changing the box fit

Changing the Box Fit value allows you to control how the Lottie file animation should display inside the LottieAnimation widget. Various options under the Box Fit property help you scale (grow or shrink in size) the Lottie file animation inside the LottieAnimation widget.

To change the Box Fit value:

1. Select the **LottieAnimation** widget from the widget tree or the canvas area.
2. Move to the property panel (on the right side of your screen) and scroll down to the **Lottie Animation** section.
3. Find the **Box Fit** dropdown, try changing the value among the **Fill**, **Contain**, **Cover**, **Fit Width**, **Fit Height**, **None**, and **Scale Down**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/7ac0e14b2c5a491992645de1bf21674e?sid=79ea6f4c-e658-4acd-b2d0-8a6b09f0bcb8"
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


## Start/pause animation on button press

You probably want to start or pause the animation when something happens in your app. For example, after saving the form, while data is loading, searching, etc. You can do this by triggering the Lottie Animation action.

### Adding Lottie Animation [Action]

Go to your project page on FlutterFlow and follow the steps below to define the Action to any widget.

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Container, Button, etc.) on which you want to add the action.
2. Select **Actions** from the Properties Panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
3. Click on the **+ Add Action**.
4. On the right side, search and select **Lottie Animation**.
5. **Choose Lottie Animation** from the dropdown.
6. Enable **Allow Play/Pause** if you want to start and pause the animation while the animation is running. **Note**: You can only access this setting if the **Auto Animate** property of the LottieAnimation widget is unchecked. **Note** that this option is only available if you have set the [animation type](#changing-animation-type) to either Loop or Boomerang.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/060b60120d5f4b34a16dc8b75bb292cc?sid=e90fd6ef-74b9-440d-89b9-dbdae1bffe1c"
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