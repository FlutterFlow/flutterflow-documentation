---
slug: /concepts/animations/hero-animations
title: Hero Animations
description: Learn how to add Hero Animations in your FlutterFlow app.
tags: [Hero Animations, Concepts]
sidebar_position: 3
keywords: [FlutterFlow, Hero Animations, Concepts]
---

# Hero Animation

"Hero" is a widget that gracefully transitions from one screen to another. For instance, on a product listing page, clicking on a product's image triggers a smooth animation where the image flies to a new screen, revealing detailed information about the product.

## Creating Hero Animation

Let's how to create hero animation with an example that looks like the one below:

![hero-animation-image-widget.gif](animation_gifs/hero-animation-image-widget.gif)

:::info
Building Hero Animation requires you to have at least two pages that share the same image.
:::

The steps to build such an example are as follows:

1. On the first page, select the image, head over to the properties panel, enable **Use Hero Animation**, and **Add Hero Tag**.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe 
            src="https://www.loom.com/embed/c20e589a20dd4dbfbcb975bf45af286e?sid=0300c1fb-e862-4ac7-9975-b1fc0df1a44e"
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

2. On the second page, select the image, head over to the properties panel, enable **Use Hero Animation**, and select the **Hero Tag** that you created on the first page component.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe 
            src="https://www.loom.com/embed/8e51cd2ca0fb490cbf9ee607f07c8440?sid=a4686847-5136-41a1-a5d3-d410a8916ede"
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

3. Add [navigation action](../../ff-concepts/navigation-routing/page-navigation.md#navigate-to-action) from page 1 to page 2.



## Hero Animation on Component

You can also add hero animation on a custom component. Let's see how to build an example that looks like the one below:

<div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe 
            src="https://www.loom.com/embed/cf8980ca68074fd0a24ce2fbef3e0a11?sid=c5b3d22b-dde4-4df3-a600-0207cceb1c22"
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

Before you begin,

- Make sure you have a component added to both the first and second pages.
- For a smoother and more appealing hero animation effect, ensure that the components on both pages have a somewhat similar appearance. This enhances the overall visual impact of the animation.

The steps to add hero animation on a component are as follows:

1. On the first page, select a component, head over to the properties panel, enable **Use Hero Animation**, and **Add Hero Tag**.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe 
            src="https://www.loom.com/embed/089421c9e8cd4053b8eb1e3b920c6d0b?sid=e9869abc-e1f4-4053-ba64-09623c0ae765"
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

2. On the second page, select a component, head over to the properties panel, enable **Use Hero Animation**, and select the **Hero Tag** that you created on the first page component.

    <div style={{
        position: 'relative',
        paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
        height: 0,
        width: '100%'}}>
        <iframe 
            src="https://www.loom.com/embed/b91c91d118bb4a12ab08cd272afb54a8?sid=2d2a09c7-9903-47d3-bb9d-21229f8ad27d"
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