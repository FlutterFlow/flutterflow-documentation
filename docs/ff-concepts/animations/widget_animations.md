---
title: Widget Amimations
sidebar_position: 1
---
import slideGif from '@site/static/img/animations/animation_gifs/fade.gif';



Widget animations allow you to animate an entire widget. 

<!-- <gif> -->

## Applying widget animations
To add an animation to a widget, you'll need to go to the property panel for the widget and select the animations tab.

Widget animations can be triggered when the page (or widget) is loaded, or can be triggered as an action. 


<!-- TO DO anotated screenshot -->

When you create a widget animation, you'll sepcify:

- The animation effect
- The animation's curve
- Any variables specific to the animation

## Types of widget animation effects
FlutterFlow supports a variety of animation effects

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



## Triggering an animation on page (or widget) load
There are many cases when you might want to trigger an animation when a page or widget is loaded onto the screen. 

Consider an eCommerce use case, where a backend query is used retrieve a list of trending products. There may be some delay between when the page is first loaded and when the actual results are displayed. To improve the user experience we can:

1. Add a shimmer animation to a widget displayed when the query is still loading
2. Add a fade animation to make the product details widget fade into view

<!-- Add arcade -->


## Triggering an animation as part of an action flow



## Types of widget animation curves


