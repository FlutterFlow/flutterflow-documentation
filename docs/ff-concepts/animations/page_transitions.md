---
slug: /concepts/animations/page-transition
title: Page Transition Animations
description: Learn how to add page transition animations in your FlutterFlow app.
tags: [Page Transition Animations, Concepts]
sidebar_position: 4
keywords: [FlutterFlow, Page Transition Animations, Concepts]
---

The animation that plays while transitioning from one page of the app to another is known as a page transition. In FlutterFlow, you can customize this animation to enhance the user experience.

You can choose from any of the following transition animations:

:::info
Here, the transitions are recorded with the duration set to 1000ms to make the animation clearly visible. But inside the app, it's recommended to keep the duration between 200-400ms.
:::

| Transition Type | Description                                    | Example                   |
|-----------------|------------------------------------------------|---------------------------|
| Instant         | Transition with no animation, switching pages immediately. | ![Instant](animation_gifs/instant-page-transitions.gif) |
| Fade In         | Gradually fades the new page into view.        | ![Fade In](animation_gifs/fade-page-transitions.gif) |
| Slide Up        | Slides the new page up from the bottom.        | ![Slide Up](animation_gifs/slide-up-page-transition.gif) |
| Slide Down      | Slides the new page down from the top.         | ![Slide Down](animation_gifs/slide-down-page-transition.gif) |
| Slide Left      | Slides the new page in from the right.         | ![Slide Left](animation_gifs/slide-left-page-transition.gif) |
| Slide Right     | Slides the new page in from the left.          | ![Slide Right](animation_gifs/slide-right-page-transition.gif) |
| Scale           | Scales the new page in from a smaller size to full screen. | ![Scale](animation_gifs/scale-page-transitions.gif) |

## Animate single navigate transition

To set a transition animation for a single navigate action, first, ensure that you have added a [**Navigate To**](../../ff-concepts/navigation-routing/page-navigation.md#navigate-to-action) action and then select an animation from the **Transition Type** dropdown. By default, the animations use 300 milliseconds as the duration for which it plays but you can change it by specifying a value inside the **Duration** (ms) field.

![single-navigate-transition-animation.avif](animation_gifs/single-navigate-transition-animation.avif)

## Change global navigate transition

To change the default transition animation of your entire app, follow the steps below:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/n5nw5nnzrgEQ5pRdwYBh?embed&show_copy_link=true"
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