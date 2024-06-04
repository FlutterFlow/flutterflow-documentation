---
title: Widget Amimations
sidebar_position: 1
---
import slideGif from '@site/static/img/animations/animation_gifs/fade.gif';
import animationsOverview from '@site/static/img/animations/animations_overview.png';
import shimmerAnimationFinal from '@site/static/img/animations/shimmer_animation_final.gif';



Widget animations allow you to add animation effects at the widget level.
To add an animation to a widget, you'll need to go to the property panel for the widget and select the animations tab.

<img src={animationsOverview} class="small-image" alt="Animation tab within the property panel is used to add widget animations. Animation trigger specifies when the animation will be run. Widget animations can be triggered when the page (or widget in the case of a delayed load) loaded, or within an action. Animation effect specifies the type of animation to use.Animation curve specifies the function used to interpolate values over time. It controls the speed and style of the animation. Animation properties specifies the properties that can be configured for all widget animations, like whether or not it should loop. Effect-specific properties are properties to specific to the animation effect selected. For example, Fade animations allow you to control the initial opacity and the final opacity. You can customize these values to get the look and feel you desire." />

<!-- When you create a widget animation, you'll sepcify:

- The animation effect
- The animation's curve
- Any variables specific to the animation -->

## Types of widget animation effects
FlutterFlow supports a variety of animation effects.

| Animation Effect | Description  | Example |
| ----- | ----- | ----- |
| **Fade** | Makes the widget gradually appear or disappear | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|
| **Slide** | Changes the widget's position on the screen | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |
| **Scale** | Changes the size of the widget |<img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |
| **Rotate** | Turns the widget clockwise or aniclockwise | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |
| **Shake** | Creates the shake effect on a widget | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|
| **Blur** | Creates a focus or un-focus effect on a widget | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |
| **Saturate** | Creates a color saturation effect on a widget |<img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |
| **Tilt** | Creates a transforming effect (3D perspective) on your widget | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |
| **Flip** | Creates a flip effect on a widget| <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |
| **Shimmer** | Creates a shimmer effect on a widget | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |
| **Tint** | Creates a color changing effect on a widget |<img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" /> |

## Types of widget animation curves
When applying an animation, you'll also be able to specify the curve. An animation curve is essentially a mathematical formula used to interoplate values over time. Changing the animation curve allows you to control the speed and style of the animation.

FlutterFlow supports a variety of animation effects

| Animation Curve | Description  | Example |
| ----- | ----- | ----- |
| **Ease In** | | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|
| **Ease In Out** | | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|
| **Ease Out** | | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|
| **Bounce** | | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|
| **Elastic** | | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|
| **Linear** | | <img src={slideGif} class="xsmall-image" alt="Alt text for your GIF" />|


## Triggering an animation on page load
There are many cases when you might want to trigger an animation when a page or (in the case of a delayed load) widget is loaded onto the screen. 

Consider an eCommerce use case, where a backend query is used retrieve a list of trending products. There may be some delay between when the page is first loaded and when the actual results are displayed. To improve the user experience we can add some animations to let users know when content is loading, and smoothly transition between a loading widget and a widget that displays the retreived content.

<img src={shimmerAnimationFinal} class="small-image" alt="A widget that first shows a container with a shimmer effect, then fades in a widget displaying the product details" />

To create an experience like this, we need to:

1. Add a shimmer animation to a widget, and display that widget when the query is loading.


2. Add a fade animation to the widget that displays the query result, to gradually present it on the screen.


## Staggering animations on page load
There are also cases where you may want to stagger widgets loading on a page. In this case you can use the "Apply same duration & delay"  property. 

For example, say you want to have the various elements on your login page 



## Triggering an animation as part of an action flow
Beyond triggering widget animations on load, you can trigger an animation to occur as part of an action. 

For example, say you want a like button to be enlarged when a user clicks it. 





