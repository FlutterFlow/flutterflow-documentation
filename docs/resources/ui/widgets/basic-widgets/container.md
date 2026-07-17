---
slug: /resources/ui/widgets/container
title: Container
tags: [Layout Elements]
description: Learn how to use the Container widget to structure, style, and animate layouts in FlutterFlow.
---

# Container

The Container widget is a highly versatile widget that functions much like a multi-purpose box in your app's
interface. It is primarily used to decorate, position, and arrange child widgets—smaller components
within your app. Containers are useful for dividing the screen into smaller, logical parts, and
styling or positioning these parts effectively.

For instance, you can use a Container to assign a background color, shape, or specific size to
elements like text or buttons. Think of it as placing an item inside a box and then customizing the
appearance and placement of that box within the screen layout.

## Container Properties

Container properties can be adjusted to customize the appearance and layout of a Container
widget. Here's a brief explanation of each:

![container-props.png](../built-in-widgets/imgs/container-props.png)

### Limiting Size

Sometimes, you may not set the height and width of the Container explicitly. In that case, the Container sizes itself based on its child widget. This can lead to layout issues where widgets become too large or too small on different devices. To avoid this, you can limit the size of the Container by specifying the Min W, Min H, Max W, and Max H.

For example, in a responsive design, you might want a button to grow with the screen size but not exceed a certain width. By setting these properties, you can ensure the button is at least a certain size for usability but does not become too large on bigger screens.

- **Min W (Minimum Width) & Min H (Minimum Height):** These set the minimum dimensions the Container
  can shrink to, in pixels or percentage.

- **Max W (Maximum Width) & Max H (Maximum Height):** These set the maximum dimensions the Container
  can expand to, in pixels or percentage.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/jkwIBttsFSSWjahRGvuG?embed&show_copy_link=true"
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


### Clip Content

This property determines whether the content inside the Container should be clipped if it exceeds the boundaries of the Container. When enabled, anything outside the Container's bounds will not be visible.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/CE10WcMhXUDysN5lwOWt?embed&show_copy_link=true"
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

## Box Shadow Properties

The Box Shadow properties allow you to add and customize a shadow effect for your Container widget. Here's a brief explanation of each property:

- **Shadow Color:** The color of the shadow, typically specified in a hex format including an alpha
  value for transparency, like `#33000000`. You can select from Theme Colors, use a color picker, or
  input a hex code.

- **Blur:** Determines the blur radius of the shadow. A higher value produces a more diffused shadow, while a lower value makes the shadow sharper and more defined.

- **Spread:** Controls the spread radius of the shadow. Increasing this value expands the area that the shadow covers, making it appear larger.

- **Offset X & Offset Y:** These properties set the horizontal (X) and vertical (Y) displacement of the shadow relative to the widget. **Offset X** shifts the shadow horizontally, and **Offset Y** moves it vertically. Positive values move the shadow right and down, respectively, while negative values move it left and up.

Here's a quick demo to show the Box Shadow properties on a Container:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ARcQ5JOhZ2xX8ldP0ZZ3?embed&show_copy_link=true"
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

## Gradient Properties

The Gradient properties allow you to create and customize a gradient effect for a Container widget.
Here's an overview of each property:

- **Angle (Degrees):** Sets the orientation of the gradient by specifying the angle in degrees. An
  angle of **0 degrees** creates a **horizontal** gradient, and **90 degrees** makes it **vertical**.

- **Colors:** These are the colors used in the gradient. You can set these colors
  using Theme Colors, a color picker, or hex codes. Two color values are added by
  default.
- **Add Color:** Use this option to add additional colors to the gradient, further
      customizing the effect by adjusting their transition points and choosing from Theme Colors, a color picker, or hex codes.
- **Transition Point:** These values determine where each color starts transitioning within the
  gradient. Transition points are values between 0 and 1, set as a fraction of the total gradient distance:

![gradient-cont.png](../built-in-widgets/imgs/gradient-cont.png)

In the example above:

- The transition point for Color 1 is set at 0, meaning it starts at the very beginning of the
  gradient.
- The transition point for Color 2 is 0.5, indicating that this color starts transitioning at the
  halfway point.
- The transition point for Color 3 is 1, which places the start of this color's transition at the
  end of the gradient.
  

## Background Image Properties
The Background Image properties provide options for setting an image as the background of a
Container widget.
:::info
For a detailed guide on configuring common image properties, see [**Common Image Properties**](image.md#common-image-properties).
:::


## Child Properties

- **Child Alignment:** This allows you to specify the alignment of child widgets within the
  Container. The grid indicates possible positions (center, top, bottom, left, right, and so on), and
  you can adjust the alignment precisely using the X and Y values, which shift the child widget
  horizontally and vertically within the Container.

## Implicit Animation

This property enables the use of implicit animations for changes in the Container’s properties (like
size or color). This makes transitions between property changes smoother and visually appealing.

Here's an example of a Container's width and color changing without Implicit Animation.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/EBns8ZWuzwID6WX2lNln?embed&show_copy_link=true"
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
Next, enable **Implicit Animation** for this Container and see the difference:

<p></p>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/4IM7pmYzWfBJmjqFX2Um?embed&show_copy_link=true"
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


Implicit Animation properties include:

- **Animation Curve:** Specifies how the animation progresses over time. The options are Ease In,
  Ease In Out, Ease Out, Bounce, Linear, Elastic.

- **Duration (ms):** Sets the duration of the animation in milliseconds. A shorter duration makes
  the animation faster, while a longer duration slows it down.

## Safe Area

This toggle ensures that the Container and its contents are positioned within the safe area of the
device’s screen, avoiding obscured areas such as notches or rounded corners. This is particularly
useful for ensuring good visibility and interactivity across different devices.

To enable the safe area, navigate to the Properties panel and turn on the **Safe Area** toggle.


![container-safe-area.png](imgs/container-safe-area.avif)

:::tip[Watch the video tutorial]
If you prefer watching a video tutorial, watch this guide:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/EQgUvPEMd2E"
        title="Containers"
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
:::
