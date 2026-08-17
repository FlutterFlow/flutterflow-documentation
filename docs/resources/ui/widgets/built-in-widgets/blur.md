---
slug: blur
title: Blur
tags: [Base Elements, Components]
keywords: [Blur, Base Element, Component, Widget]
description: Learn how to use the Blur widget in your FlutterFlow app.
---

# Blur

The **Blur** widget applies a blur effect to its child or to the content behind it. Use it to soften images, obscure sensitive content, or create effects such as frosted glass.

## Adding the Blur Widget

To add a blur effect:

1. Add the **Blur** widget from the **Base Elements** section of the Widget Palette.
2. Add the widget you want to blur as its child.
3. Select the **Blur** widget and configure its settings under **Blur Properties** in the Properties panel.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/t2w5jNdxLVc155PHJVcQ?embed&show_copy_link=true"
        title="Add the Blur Widget"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameBorder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

<p></p>

## Blurring the Background

By default, the Blur widget applies the effect to its child. Enable **Backdrop** to blur the content behind the widget instead. This is useful for creating frosted-glass panels, overlays, and translucent navigation elements.

:::tip
For a frosted-glass effect, place a semi-transparent widget inside the Blur widget and enable **Backdrop**.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/zIzRy6FFKObIbsouaffl?embed&show_copy_link=true"
        title="Create a Frosted-Glass Effect"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameBorder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

<p></p>

## Customizing the Blur Widget

Select the **Blur** widget and use the following settings under **Blur Properties**:

- **Sigma X:** Controls the horizontal blur strength.
- **Sigma Y:** Controls the vertical blur strength.
- **Backdrop:** Applies the blur to the content behind the widget instead of its child.
- **Should Apply Blur:** Turns the effect on or off. Use **Set from Variable** to control it dynamically using app state, backend data, or another source.
- **Apply Clip:** Clips the blurred area to a rectangular or circular shape. Disable this option when you do not want to clip the blur.
- **Border Radius:** Rounds the corners of the rectangular clip. This setting is available when **Apply Clip** uses the rectangular shape.

Higher **Sigma X** and **Sigma Y** values produce a stronger blur. Setting both values to `0` removes the blur.
