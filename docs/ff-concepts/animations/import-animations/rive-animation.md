---
slug: /concepts/animations/rive-animation
title: Rive Animation
description: Import a Rive runtime file into FlutterFlow, select its artboard and linear animations, and control playback with an Animation action.
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 2
keywords:
  - Rive Animation
  - FlutterFlow
  - Animations
last_verified: 2026-09-02
---
# Rive Animation
[Rive](https://rive.app/) is a design and animation tool. The **RiveAnimation** widget loads a `.riv` runtime file, displays a selected artboard, and plays one or more linear animations from that artboard.

:::warning

FlutterFlow's RiveAnimation widget currently supports linear animations, not Rive state-machine animations. If the selected artboard contains no linear animations, FlutterFlow asks you to select a different file or artboard.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/4J9fgyM4CwQA4tC0HrQ8?embed&show_copy_link=true" title="Rive Animation interactive tutorial"
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

## Designing Animation

You can create an animation in the [Rive editor](https://rive.app/editor). Follow Rive's current editor documentation to create a file and artboard; the FlutterFlow-specific requirements are described below.

Use Rive's design and animation tools to create at least one artboard and one linear animation.

:::info
The file must contain an [**Artboard**](https://rive.app/docs/editor/fundamentals/artboards) with a linear animation for FlutterFlow to expose an animation selection.
:::


After completing the animation, export a `.riv` runtime file. In the current Rive editor, use the blue **Publish** button or **Export > For runtime**. Rive controls the plan requirements for runtime export, so check its current documentation if the option is unavailable.

:::warning
Use only assets that you have permission to publish and distribute with your app.
:::

Instead of creating an animation from scratch, you can also use any Rive asset shared in the [Community](https://rive.app/marketplace).

## Adding RiveAnimation widget

Follow the steps below to use a Rive animation:

1. Add a **RiveAnimation** widget to the canvas.
2. Set **Animation Source** to **Network** or **Asset**.
3. For **Network**, set **Path** to a direct URL for the `.riv` file. The path can also be bound to a String value. For **Asset**, upload or select a file under **Asset Animation**.
4. After the file loads, choose an **Artboard**.
5. Under **Animations**, select one or more linear animations from that artboard. Use **Preview Animations** to check the selection in the builder.
6. Choose **Animation Type**, set **Auto Animate**, and configure **Width**, **Height**, and **Box Fit**.
7. Test the animation on every target platform.

**Once** is the default. If any selected animation uses Rive Loop or Ping Pong behavior, FlutterFlow also offers **Continuous**. In Continuous mode, only selected animations authored to loop or ping-pong continue indefinitely; a one-shot animation in the same selection still completes once.

Changing the artboard clears the previous animation selection. If the remaining properties do not appear, FlutterFlow has not loaded a valid Rive file; recheck the path or reselect the asset.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/rbKXOTaDS8aVCS26oeS0?embed&show_copy_link=true" title="Rive Animation interactive tutorial"
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

## Control animation using action

Use an **Animation** action to replay a one-shot Rive animation or control a continuous one.

### Add the action

Follow the steps below to define an action to start the animation:

1. Disable **Auto Animate** when this action should start the target animation.
2. Select the button or other trigger widget and open the **Actions** panel.
3. Add an **Animation** action and choose **Rive Animation**.
4. Under **Choose Rive Animation**, select a RiveAnimation on the same page or component.
5. For a **Continuous** target, optionally enable **Allow Play/Pause**.

The action behaves as follows:

- **Once:** Reactivates every selected animation so it can play from the beginning again.
- **Continuous**, with **Allow Play/Pause** enabled: Toggles the currently playing loop and ping-pong animations. Non-looping selections are not toggled by this control.
- **Continuous**, with **Allow Play/Pause** disabled: Starts the selected animations when **Auto Animate** is off. If Auto Animate is on, the action stops them.

Animation actions can target only widgets on the same page or component and cannot be used inside an Action Block.

:::info
Disable **Auto Animate** when the action should start playback. Leave it enabled only when the action is intended to stop an already-running continuous animation.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/J2r1YaFGhp1CbmEcfBpl?embed&show_copy_link=true" title="Rive Animation interactive tutorial"
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
| Artboard and animation controls never appear | Confirm that the path returns a valid `.riv` runtime file directly, or reselect the uploaded asset. |
| FlutterFlow reports no linear animations | The artboard may contain only a state machine. Add a linear animation or select another artboard. |
| Continuous is not available | At least one selected animation must be authored with Loop or Ping Pong behavior. |
| An action does not start playback | Disable **Auto Animate**, confirm the same-page target, and check the animation type and selected animation list. |
| A network file works in one target but not another | Check HTTPS access, redirects, authorization, browser CORS, and whether the URL returns the `.riv` bytes directly. |

## Related documentation

See [Lottie Animation](/concepts/animations/lottie-animation) for a related FlutterFlow workflow.
