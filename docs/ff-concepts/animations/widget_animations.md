---
title: Widget Amimations
sidebar_position: 1
---
import slideGif from '@site/static/img/animations/animation_gifs/fade.gif';
import animationsOverview from '@site/static/img/animations/animations_overview.png';
import shimmerAnimationFinal from '@site/static/img/animations/animation_gifs/shimmerAnimationFinal.gif';
import fadeEaseIn from '@site/static/img/animations/animation_gifs/fade-easein.gif';
import fadeEaseInOut from '@site/static/img/animations/animation_gifs/fade-easeinout.gif';
import fadeEaseOut from '@site//static/img/animations/animation_gifs/fade-easeout.gif';



## Widget animations overview

Widget animations allow you to add animation effects at the widget level.
To add an animation to a widget, you'll need to go to the property panel for the widget and select the animations tab.

<img src={animationsOverview}  alt="Animation tab within the property panel is used to add widget animations. Animation trigger specifies when the animation will be run. Widget animations can be triggered when the page (or widget in the case of a delayed load) loaded, or within an action. Animation effect specifies the type of animation to use.Animation curve specifies the function used to interpolate values over time. It controls the speed and style of the animation. Animation properties specifies the properties that can be configured for all widget animations, like whether or not it should loop. Effect-specific properties are properties to specific to the animation effect selected. For example, Fade animations allow you to control the initial opacity and the final opacity. You can customize these values to get the look and feel you desire." />

<!-- When you create a widget animation, you'll sepcify:

- The animation effect
- The animation's curve
- Any variables specific to the animation -->

## Animation effects & properties
FlutterFlow supports a variety of animation effects and properties for widget animations.

Most animations have core properties you can edit, like the `Duration`. which specifies how long the animation should run for, and the `Delay`, which specifies what delay the animation should have before it starts to run. 

In addition, there are animation-specific properties that usually have both a start and end value, which are mentioned in the table below.

| Effect | Description  | Example | Effect-Specific properties
| ----- | ----- | ----- | ----- |
| **Fade** | Makes the widget gradually appear or disappear.  It's widely used for smooth introductions of elements on the screen and to focus user attention by fading in or out content or UI elements.| <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />| `Opacity`: the starting or ending visibility of the widget, where 0 is fully transparent and 1 is fully visible|
| **Slide** | Changes the widget's position on the screen. Typically used to introduce widget in a dynamic, visually engaging way, like sliding in menus, pages, or notifications. FlutterFlow supports both vertical and horizontal slide. | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> | `Position`: where 0 specifies the widget's current position, -100 specifies 100px to the left (horizontal) or down (vertical), and 100 specifies 100px to the right (horizontal) or up (vertical). <br></br> <br></br> *To make the widget come and go off the screen, make the start and/or final position greater than the width of the device.* |
| **Scale** | Changes the size of the widget. Often used to draw attention to UI components, like magnifying buttons on hover or animating dialog boxes to appear from a central point. |<img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|`Scale`: the starting or ending multiple to scale the widget horizontally (X) or vertically (Y), where 1 represents the current size of the widget. |
| **Rotate** | Turns the widget clockwise or aniclockwise.  It's often used for simple effects like spinning a loading icon.| <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> | `Turns`: specifies the number of 360 degree rotations. |
| **Shake** | Creates the shake effect on a widget. Often used to draw attention to an element or indicate an error, like when a user enters incorrect information in a form field.| <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|`Freqeuncy`: Number of shakes per second <br></br> <br></br>`Offset`: Shake distance, a higher value intensifies and a negative value shakes the opposite direction <br></br> <br></br>`Rotation Angle`: Angle of the shake|
| **Blur** | Creates a focus or un-focus effect on a widget | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> | `Radius (X or Y)`: Size of the blur. <br></br><br></br>  *To create an unfocus effect, `Final Radius` should be greater than `Initial Radius`. To create a focus effect, `Initial Radius` should be greater than `Final Radius`*. |
| **Saturate** | Used to enhance visual appeal by making colors more vibrant for focused content or creating a muted effect for background elements. |<img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> | `Strength`: 0 indicates fully desaturated, 100 represents normal saturation and >100 represent the percent saturation |
| **Tilt** | Creates a transforming effect (3D perspective) on your widget | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> | ...|
| **Flip** | Creates a flip effect on a widget| <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |...|
| **Shimmer** | Creates a shimmer effect on a widget | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> | ...|
| **Tint** | Creates a color changing effect on a widget |<img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> | ...|

## Animation curves
When applying an animation, you'll also be able to specify the curve. An animation curve is essentially a mathematical formula used to interoplate values over time. Changing the animation curve allows you to control the speed and style of the animation.

| Curve | Description  
| ----- | ----- |
| **Ease In** | Starts the animation slowly and then accelerates towards the end. It's useful for creating an effect where the motion begins gently and speeds up.| 
| **Ease In Out** | Starts the animation slowly, accelerates in the middle, and then decelerates towards the end. It's ideal for creating smooth, natural-looking animations that don't have abrupt starts or stops.|
| **Ease Out** | Begins the animation quickly and then slows down towards the end. It gives the effect of a rapid start that gently comes to a stop.|
| **Bounce** | Adds a bouncing effect at the end of the animation. The animated object overshoots its final position and then bounces back, mimicking the physical behavior of a bouncing ball.|
| **Elastic** | Creates an elastic effect where the animation overshoots its target value and oscillates before settling. It's useful for animations that need a springy, elastic feel.|
| **Linear** | Progresses at a constant speed throughout the animation. It provides a uniform transition from start to end, with no acceleration or deceleration.|


## Triggering an animation on page load
There are many cases when you might want to trigger an animation when a page or (in the case of a delayed load) widget is loaded onto the screen. 

Consider an eCommerce use case, where a backend query is used retrieve a list of trending products. There may be some delay between when the page is first loaded and when the actual results are displayed. To improve the user experience we can add some animations to let users know when content is loading, and smoothly transition between a loading widget and a widget that displays the retreived content.

<img src={shimmerAnimationFinal} class="small-image" alt="A widget that first shows a container with a shimmer effect, then fades in a widget displaying the product details" />

To create an experience like this, we need to:

1. Add a shimmer animation to a widget, and display that widget when the query is loading.


2. Add a fade animation to the widget that displays the query result, to gradually present it on the screen.




## Triggering an animation as part of an action flow
Beyond triggering widget animations on load, you can trigger an animation to occur as part of an action. 

For example, say you want a like button to be enlarged when a user clicks it. 



## Staggering animations


## Widget animations in generated code
FlutterFlow uses the flutter_animate package in the generated code to apply the animation to the widget. 


