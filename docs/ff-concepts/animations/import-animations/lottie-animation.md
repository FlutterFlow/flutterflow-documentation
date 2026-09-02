---
slug: /concepts/animations/lottie-animation
title: Lottie Animation
description: Add local or network Lottie JSON animations in FlutterFlow, configure playback and sizing, and control them with an Animation action.
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 1
keywords:
  - Lottie Animation
  - FlutterFlow
  - Animations
last_verified: 2026-09-02
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Lottie Animation
The **LottieAnimation** widget renders a Lottie JSON animation from an uploaded asset or a network URL. It is useful for loading indicators, illustrations, and other vector-based motion.

For example, you could use the LottieAnimation widget to show a nicely animated loading indicator to provide a great user experience to the users.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/725611c8453d4d97b1f5c3b16a58d888?sid=e610274a-3dac-42da-aea9-9a1fb9f47509" title="Lottie Animation interactive tutorial"
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

1. [Getting a Lottie file](#1-get-a-lottie-file)
2. [Adding LottieAnimation widget](#2-adding-lottieanimation-widget)
3. [Changing animation source](#3-changing-animation-source)

### 1. Get a Lottie file

Obtain a Lottie `.json` file that you are allowed to use. You can upload the file to the FlutterFlow project or host it at an HTTPS URL that returns the JSON directly.

#### 1.1 Use an uploaded JSON file

Use an uploaded asset when the animation should ship with the app and work without a network request.

Before uploading:

1. Download or export a Lottie JSON file from its authoring tool or a trusted provider.
2. Confirm that the license permits your intended use and distribution.
3. Keep the file in JSON format; the LottieAnimation asset picker expects a JSON animation.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/65e8a01b68964bb98867f16f18c68501?sid=ee4e6bcd-81ac-4726-9162-4180f99cf8b4" title="Lottie Animation interactive tutorial"
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

#### 1.2 Use a network URL

Use a network source when the app should fetch the animation at runtime.

The URL must:

1. Return the Lottie JSON file directly, rather than a webpage.
2. Be reachable by the target app, including any required authorization.
3. Use a host configuration that permits browser requests when you publish to web.

:::warning
Test network availability, redirects, authorization, and CORS on every deployment target. A URL that works in your browser may not be a direct or publicly accessible Lottie file URL.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/b0f54823ae4b4e86888aa6eda1cb1acc?sid=ae30f8af-36c5-438a-ad66-8578baf98448" title="Lottie Animation interactive tutorial"
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

1. Add a **LottieAnimation** widget to the canvas.
2. In the properties panel, open the **Lottie Animation** section.
3. For a network source, set **Path** to the [direct JSON URL](#12-use-a-network-url). The path can also be bound to a String value.
4. By default, the animation will play as soon as the page loads. To disable this and play animation on a button click or any other event, uncheck the **Auto Animate** checkbox.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/cbdbd43f1b5c424aaea3ab85e4af8fdd?sid=ae3cee84-42df-4a1d-bdca-3a73a5e18492" title="Lottie Animation interactive tutorial"
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

1. Select the **LottieAnimation** widget.
2. In the **Lottie Animation** property group, set **Animation Source** to **Asset**.
3. Under **Asset Animation**, upload or select a Lottie JSON file.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/63ea5db22a0c407aba1428d1432f40a2?sid=50c0ac8d-d8e0-46c7-8432-54099174b003" title="Lottie Animation interactive tutorial"
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

**Loop** is the default for a newly added LottieAnimation widget.

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
        src="https://www.loom.com/embed/7d709e4b766344bb951339007c5f1cdc?sid=cbbb3887-6a13-4d7a-b65b-c024dbb24fdf" title="Lottie Animation interactive tutorial"
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
        src="https://www.loom.com/embed/725611c8453d4d97b1f5c3b16a58d888?sid=0bfbbe7c-05be-442d-95f7-f06b94ae0463" title="Lottie Animation interactive tutorial"
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
<TabItem value="3" label="Boomerang">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/35e52460778f473db0029ef4a269e4a2?sid=d5975f0d-8e44-4938-a87f-8ce36cc049b2" title="Lottie Animation interactive tutorial"
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

By default, the widget uses the frame rate stored in the Lottie composition. Set **Frame Rate** only when you intentionally want to override that render rate. A higher value does not add detail that is absent from the source animation and can increase rendering work, so compare the result on representative devices.

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
        src="https://www.loom.com/embed/7ac0e14b2c5a491992645de1bf21674e?sid=79ea6f4c-e658-4acd-b2d0-8a6b09f0bcb8" title="Lottie Animation interactive tutorial"
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


## Control a Lottie animation with an action

Use an **Animation** action to play a one-shot Lottie animation or control a looping one.

### Add the action

Go to your project page on FlutterFlow and follow the steps below to define the Action to any widget.

Follow the steps below to add this action to any widget.

1. Disable **Auto Animate** when this action should start the target animation.
2. Select the button or other trigger widget and open the **Actions** panel.
3. Add an **Animation** action and choose **Lottie Animation**.
4. Under **Choose Lottie Animation**, select a LottieAnimation on the same page or component.
5. For **Loop** and **Boomerang**, optionally enable **Allow Play/Pause**.

The action behaves differently by animation type:

- **Once:** Plays from the beginning, waits for completion, and resets so a later action can play it again.
- **Loop** or **Boomerang**, with **Allow Play/Pause** enabled: Toggles the current playback state.
- **Loop** or **Boomerang**, with **Allow Play/Pause** disabled: Starts the animation when **Auto Animate** is off. If Auto Animate is on, the action stops it.

**Allow Play/Pause** is not shown for **Once**. Animation actions can target only widgets on the same page or component and cannot be used inside an Action Block.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/060b60120d5f4b34a16dc8b75bb292cc?sid=e90fd6ef-74b9-440d-89b9-dbdae1bffe1c" title="Lottie Animation interactive tutorial"
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

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| The animation does not load | Confirm the source selection, JSON format, direct URL, network access, and host CORS policy. |
| Box Fit or Frame Rate behaves unexpectedly | Reselect the asset or re-enter the network path so FlutterFlow can read the composition's original dimensions and frame rate. |
| An action does not start playback | Disable **Auto Animate**, select the correct same-page LottieAnimation, and verify the animation type. |
| A looping action cannot pause | Enable **Allow Play/Pause**. This option is available only for Loop and Boomerang. |
| Playback is janky | Reduce composition complexity or dimensions, avoid unnecessary frame-rate overrides, and profile on the target device. |

## Related documentation

See [Rive Animation](/concepts/animations/rive-animation) for a related FlutterFlow workflow.
