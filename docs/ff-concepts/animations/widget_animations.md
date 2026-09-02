---
slug: /concepts/animations/widget-animations
title: Widget Animations
description: >-
  Configure FlutterFlow widget animation effects, page-load and action
  triggers, timing, curves, looping, and explicit animation controls.
last_verified: 2026-09-02
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 1
keywords:
  - FlutterFlow
  - Widget Animations
  - Concepts
---
import fadeGif from '@site/static/img/animations/animation_gifs/fade.gif';
import scaleGif from '@site/static/img/animations/animation_gifs/scale.gif';
import slideGif from '@site/static/img/animations/animation_gifs/slide.gif';
import rotateGif from '@site/static/img/animations/animation_gifs/rotate.gif';
import shakeGif from '@site/static/img/animations/animation_gifs/shake.gif';
import blurGif from '@site/static/img/animations/animation_gifs/blur.gif';
import saturateGif from '@site/static/img/animations/animation_gifs/saturate.gif';
import tiltGif from '@site/static/img/animations/animation_gifs/tilt.gif';
import flipGif from '@site/static/img/animations/animation_gifs/flip.gif';
import shimmerGif from '@site/static/img/animations/animation_gifs/shimmer.gif';
import tintGif from '@site/static/img/animations/animation_gifs/tint.gif';
import animationCurves from '@site/static/img/animations/animation_gifs/animation_curves.gif';


import animationsOverview from '@site/static/img/animations/animations_overview.png';
import shimmerAnimationFinal from '@site/static/img/animations/animation_gifs/shimmerAnimationFinal.gif';
import fadeEaseIn from '@site/static/img/animations/animation_gifs/fade-easein.gif';
import fadeEaseInOut from '@site/static/img/animations/animation_gifs/fade-easeinout.gif';
import fadeEaseOut from '@site//static/img/animations/animation_gifs/fade-easeout.gif';

# Widget Animations

Widget animations allow you to add animation effects at the widget level.
To add an animation to a widget, you'll need to go to the property panel for the widget and select the animations tab.

<figure>
    ![animation-properties.png](animation_gifs/animations_overview-2.png)
  <figcaption class="centered-caption">Animation Overview</figcaption>
</figure>

<!-- When you create a widget animation, you'll sepcify:

- The animation effect
- The animation's curve
- Any variables specific to the animation -->

## Animation effects & properties
FlutterFlow supports a variety of animation effects and properties for widget animations.

Most animations have core properties you can edit, like the `Duration`, which specifies how long the animation should run for, and the `Delay`, which specifies what delay the animation should have before it starts to run.

In addition, there are animation-specific properties that usually have both a start and end value, which are mentioned in the table below.

| Effect | Description  |  <div style={{width:200}}>Example</div> | Effect-Specific properties
| ----- | ----- | ----- | ----- |
| **Fade** | Makes the widget gradually appear or disappear.  It's widely used for smooth introductions of elements on the screen and to focus user attention by fading in or out content or UI elements.| <img src={fadeGif} class="xsmall-image" alt="Alt text for your GIF" />| `Opacity`: the starting or ending visibility of the widget, where 0 is fully transparent and 1 is fully visible|
| **Slide** | Changes the widget's position with horizontal and vertical offsets. | <img src={slideGif} class="xsmall-image" alt="A widget sliding from an offset to its resting position" /> | `Position`: `0` is the current position. A negative horizontal value moves left and a positive value moves right; a negative vertical value moves up and a positive value moves down. Values are logical pixels, so moving fully off-screen requires an offset large enough for the widget and viewport. |
| **Scale** | Changes the size of the widget. Often used to draw attention to UI components, like magnifying buttons on hover or animating dialog boxes to appear from a central point. |<img src={scaleGif} class="xsmall-image" alt="Alt text for your GIF" />|`Scale`: the starting or ending multiple to scale the widget horizontally (X) or vertically (Y), where 1 represents the current size of the widget. |
| **Rotate** | Turns the widget clockwise or anticlockwise.  It's often used for simple effects like spinning a loading icon.| <img src={rotateGif} class="xsmall-image" alt="Alt text for your GIF" /> | `Turns`: specifies the number of 360 degree rotations. |
| **Shake** | Creates the shake effect on a widget. Often used to draw attention to an element or indicate an error.| <img src={shakeGif} class="xsmall-image" alt="A widget shaking horizontally" />|`Frequency (Hz)`: approximate repeats per second. `Horizontal Offset` and `Vertical Offset`: shake distance and starting direction. `Rotation Angle`: rotation on both sides. Use a duration of at least 1000 ms; the editor notes that shorter durations do not work.|
| **Blur** | Creates a focus or un-focus effect on a widget | <img src={blurGif} class="xsmall-image" alt="Alt text for your GIF" /> | `Radius (X or Y)`: Size of the blur. <br></br><br></br>  *To create an unfocus effect, `Final Radius` should be greater than `Initial Radius`. To create a focus effect, `Initial Radius` should be greater than `Final Radius`*. |
| **Saturate** | Used to enhance visual appeal by making colors more vibrant for focused content or creating a muted effect for background elements. |<img src={saturateGif} class="xsmall-image" alt="Alt text for your GIF" /> | `Strength`: 0 indicates fully desaturated, 100 represents normal saturation and >100 represents the percent saturation |
| **Tilt** | Creates a transforming effect (3D perspective) on your widget. Typically used to add a subtle interactive element to UI components, like buttons or cards, indicating user interaction or focus. | <img src={tiltGif} class="xsmall-image" alt="Alt text for your GIF" /> | `Tilt`: The angle at which the widget is viewed. |
| **Flip** | Rotates an element around an axis to create a card-flip effect. | <img src={flipGif} class="xsmall-image" alt="A card performing a flip animation" /> | `Initial Flip` and `Final Flips`: number of half-turns; a value of `1` is 180 degrees. |
| **Shimmer** | Creates a moving highlight, often used for loading placeholders. | <img src={shimmerGif} class="xsmall-image" alt="A highlight shimmering across a placeholder" /> | `Color`: highlight color. `Angle`: gradient sweep direction in degrees. Shimmer requires `ShaderMask` and does not work with Flutter's web HTML renderer. |
| **Tint** | Adds a color overlay effect to your content. Like Shimmer, it does not work with Flutter's web HTML renderer. |<img src={tintGif} class="xsmall-image" alt="A color tint animating over a widget" /> | `Color`: Color of the overlay. `Initial Strength` and `Final Strength`: tint intensity from 0% to 100%. |


## Animation curves
When applying an animation, you'll also be able to specify the curve. An animation curve is essentially a mathematical formula used to interpolate values over time. Changing the animation curve allows you to control the speed and style of the animation.

<img src={animationCurves}  alt="Alt text for your GIF" />

<br></br>
<br></br>
FlutterFlow supports a variety of animation curves:

| Curve | Description
| ----- | ----- |
| **Ease In** | Starts the animation slowly and then accelerates towards the end. It's useful for creating an effect where the motion begins gently and speeds up.|
| **Ease In Out** | Starts the animation slowly, accelerates in the middle, and then decelerates towards the end. It's ideal for creating smooth, natural-looking animations that don't have abrupt starts or stops.|
| **Ease Out** | Begins the animation quickly and then slows down towards the end. It gives the effect of a rapid start that gently comes to a stop.|
| **Bounce** | Adds a bouncing effect at the end of the animation. The animated object overshoots its final position and then bounces back, mimicking the physical behavior of a bouncing ball.|
| **Elastic** | Creates an elastic effect where the animation overshoots its target value and oscillates before settling. It's useful for animations that need a springy, elastic feel.|
| **Linear** | Progresses at a constant speed throughout the animation. It provides a uniform transition from start to end, with no acceleration or deceleration.|


## Animation on Page Load
There are many cases when you might want to trigger an animation when a page or (in the case of a delayed load) widget is loaded onto the screen.

Consider an eCommerce use case, where a backend query is used to retrieve a list of trending products. There may be some delay between when the page is first loaded and when the actual results are displayed. To improve the user experience we can add some animations to let users know when content is loading.

<img src={shimmerAnimationFinal} class="small-image" alt="A widget that first shows a container with a shimmer effect, then fades in a widget displaying the product details" />

To create an experience like this, you need to add a shimmer animation to a widget, and display that widget conditionally (i.e. when the query is loading). Here's how you do it:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/dvZkJOnXC562J4wt7jbI?embed&show_copy_link=true" title="Widget Animations interactive tutorial"
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

<!-- add aracde -->

## Animation on Action Trigger
Beyond page-load animation, an action can explicitly control a widget animation. On the target widget's **Animations** panel, select **On Action Trigger**, add one or more effects, and normally keep **Apply Initial State** enabled to avoid a visual jump when the action starts.

In the initiating action flow, add **Widget Animation**, select **Choose Widget Animation**, then choose **Start Animation**, **Stop Animation**, **Reset Animation**, or **Reverse Animation**. The target must be on the same page or in the same component as the action. For **Start Animation**, you can also configure **Resume Animation**, **Loop Animation**, and **Reverse Animation**.

The action waits for start or reverse playback by default. Enable the action's **Non-Blocking** option if later actions should run immediately—especially for an animation configured to loop, which otherwise does not complete on its own. Widget Animation actions are not supported inside action blocks.

Here's how you do it:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/5ylV8lViDw9WvZo60wUm?embed&show_copy_link=true" title="Widget Animations interactive tutorial"
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


<!-- add aracde -->

:::note
You can give a name to the widget that you want to animate using the action, this will make it easier to find in the action menu.
:::


## Applying multiple animations
You can apply multiple animations to a single widget. By default, when you add multiple animations, they are executed in a series (one after another) creating staggered animation. However, you can define to run all animations at the same time.

### Run multiple animations simultaneously
If you want to run multiple animations together for the same amount of time (e.g., slide and scale widget at the same time), enable the **Apply same duration & delay** while adding animation.


### Create staggered animation
A staggered animation is multiple animations executed subsequently. Adding staggered animations can help you create a stunning visual effect.

To create staggered animation, ensure you **disable** the **Apply same duration & delay** option and keep adding animations. The delay property will be auto adjusted based on the duration of all previously added animations.
:::tip
For manually controlling the staggered animation, set the delay for your new animation based on the total duration of all previously added animations. For instance, if the first two animations each last 1000ms (1 second), the delay for the third animation should be 2000ms (2 seconds). This ensures the third animation begins only after the completion of the first two, each lasting 1 second.
:::

Here's an example of creating a staggered animation:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/Vr5RhGCjJXisfMUgkigY?embed&show_copy_link=true" title="Widget Animations interactive tutorial"
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

## Setting animation values from variables
You can set animation values dynamically using the variables of your app. This flexibility allows you to create more sophisticated animations.
Let's see an example of creating a beautiful animation where a list of items is sliding in from left to right. Here's how it looks:

![Setting animation values from variables](animation_gifs/set-animations-from-variable.gif)

If you notice carefully, the items appear in a staggered fashion. This can be achieved by setting the delay value of each item based on its position (index) in the list. Here's how exactly you do it:

Select the item in the list and add the Slide animation.

In the Delay property, open the variable menu and add an [inline function](../../resources/control-flow/functions/utility-functions.md#inline-function-code-expressions) to calculate the delay from the item's zero-based index. With `[index] * 100`, the first item starts at 0 ms, the second at 100 ms, and the third at 200 ms. Use `([index] + 1) * 100` if the first item should also wait 100 ms.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/6cc7bc3180e1415ab609b233f12333c2?sid=4420b3fb-1fd8-4c4e-a0dc-b2f9165724cb" title="Widget Animations interactive tutorial"
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

<!-- add arcade -->
