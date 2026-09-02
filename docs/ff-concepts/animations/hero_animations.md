---
slug: /concepts/animations/hero-animations
title: Hero Animations
description: >-
  Create shared-element Hero transitions between FlutterFlow pages using
  matching tags on Image, Circle Image, or component instances.
last_verified: 2026-09-02
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 3
keywords:
  - FlutterFlow
  - Hero Animations
  - Concepts
---
# Hero Animation

A Hero animation is a shared-element transition between routes. FlutterFlow wraps the source and destination widgets in Flutter `Hero` widgets; matching **Hero Tag** values tell Flutter which two elements should animate between the pages.

## Creating Hero Animation

Let's how to create hero animation with an example that looks like the one below:

<video className="docs-video" autoPlay loop muted playsInline controls aria-label={"Hero animation applied to an Image widget in FlutterFlow"}><source src={require("./animation_gifs/hero-animation-image-widget.mp4").default} type="video/mp4" /></video>

:::info
The source and destination need matching Hero tags. Their visual content can differ, although similar size and appearance usually produce a smoother transition. Each active route must not contain multiple visible Hero widgets with the same tag.
:::

The steps to build such an example are as follows:

1. On the source page, select an **Image** or **Circle Image**, enable **Use Hero Animation**, and select **+ Add Hero Tag** to create a tag.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe
            src="https://www.loom.com/embed/c20e589a20dd4dbfbcb975bf45af286e?sid=0300c1fb-e862-4ac7-9975-b1fc0df1a44e" title="Hero Animations interactive tutorial"
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

2. On the destination page, select the corresponding image, enable **Use Hero Animation**, and select the same **Hero Tag**.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe
            src="https://www.loom.com/embed/8e51cd2ca0fb490cbf9ee607f07c8440?sid=a4686847-5136-41a1-a5d3-d410a8916ede" title="Hero Animations interactive tutorial"
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

3. Add [navigation action](../../ff-concepts/navigation-routing/page-navigation.md#navigate-to-action) from page 1 to page 2.



## Hero Animation on Component

You can also add hero animation on a custom component. Let's see how to build an example that looks like the one below:

<div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe
            src="https://www.loom.com/embed/cf8980ca68074fd0a24ce2fbef3e0a11?sid=c5b3d22b-dde4-4df3-a600-0207cceb1c22" title="Hero Animations interactive tutorial"
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

Before you begin,

- Add a component instance to both the source and destination pages.
- For a smoother and more appealing hero animation effect, ensure that the components on both pages have a somewhat similar appearance. This enhances the overall visual impact of the animation.

The steps to add hero animation on a component are as follows:

1. On the source page, select the component instance, enable **Use Hero Animation**, and select **+ Add Hero Tag**.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe
            src="https://www.loom.com/embed/089421c9e8cd4053b8eb1e3b920c6d0b?sid=e9869abc-e1f4-4053-ba64-09623c0ae765" title="Hero Animations interactive tutorial"
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

2. On the destination page, select the corresponding component instance, enable **Use Hero Animation**, and select the same **Hero Tag**.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe
            src="https://www.loom.com/embed/b91c91d118bb4a12ab08cd272afb54a8?sid=2d2a09c7-9903-47d3-bb9d-21229f8ad27d" title="Hero Animations interactive tutorial"
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

3. Add [navigation action](../../ff-concepts/navigation-routing/page-navigation.md#navigate-to-action) from page 1 to page 2.

## FAQs

<details>
<summary>Why is the Hero animation not working when navigating forward? Works only backward</summary>
<p>
This is because the image on the second page does not exist on the very first frame. Hero animation will only work when the image is loaded from an asset or from the network (*if the path is pre-specified*). If you're pulling the image from a Firestore document, it might not be ready in time for the animation to take place.

To fix this issue, you can avoid loading an image directly from Firestore. Instead, you can pass the image URL (which would have already been retrieved from the Firestore) from the previous page to the second page. And then use that URL to load the image.

See how to [pass data](../../ff-concepts/navigation-routing/passing-data.md) from one page to another.
</p>
</details>

<details>
<summary>Why do I get duplicate Hero-tag errors or unreliable animations in a generated list?</summary>
<p>
A Flutter route can have only one active Hero for a given tag. Reusing one fixed tag for every generated item creates duplicates. Bind the Hero Tag to a stable value that is unique per item, and pass or reconstruct the same value on the destination page. FlutterFlow also warns that Hero animations may not work on dynamically generated widgets, so test both forward and backward navigation with production-like data.
</p>
</details>
