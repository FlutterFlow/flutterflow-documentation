---
slug: /flutterflow-ui/canvas
title: Canvas
description: Dive into the versatile Canvas in FlutterFlow, where you can effortlessly design and preview your app’s interface.
tags: [Canvas, FlutterFlow, UI, Design]
sidebar_position: 2
keywords: [Canvas, FlutterFlow, UI, Design]
---

# Canvas 
The Canvas shows the screen of the device, which could be mobile, iPad, web, or desktop. It allows you to add widgets via drag-and-drop. You can select, move, and position widgets anywhere on the Canvas.

It allows zoom level adjustments and previews in light or dark mode. It also includes features for multi-language preview, adding App Bar and Nav Bar, simulating larger font visualization, and more.

![canvas area](imgs/canvas-new.avif)

## Preview Screen

This is the canvas of the device screen where you can build the user interface. You can customize the screen by adding widgets using drag and drop from the [Widget Palette](../../intro/ff-ui/widget-palette.md) and by applying properties present in the [Properties Panel](../../intro/ff-ui/builder.md#properties-panel).

## Show or hide Navigation Menu

From here, you can open or close the 
[Navigation Menu](../../../docs/intro/ff-ui/builder.md#navigation-menu).

## Zoom Controls

There's a zoom in ( + ) and a zoom out ( - ) button to control the zoom level of the canvas. While working on complex user interface designs, this comes in handy to give you a better preview of the widgets by zooming in to a particular area and then zooming out to have an overview.

## AI Generated Page

From here, you can [create a page using AI](../../resources/ui/pages/intro-pages.md#create-an-ai-generated-page).

## Add App Bar

From here, you can add an [App Bar](../../resources/ui/pages/page-elements.md#appbar) to your page. Clicking this button opens a popup displaying different App Bar styles for you to choose from. Just select any App Bar style from the list and it will appear in the Preview Screen.

![AddAppBar.avif](imgs/AddAppBar.avif)

## Multi-Language Preview

If you've enabled the multi-language feature for your project, you can use this to preview your app in different languages. Just select the language from the dropdown menu, and the text in your app will be translated accordingly.

:::tip
This feature is valuable for testing your app across multiple locales without needing to run your app.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/E6otMpbcKewMYCfkjl9d?embed&show_copy_link=true"
        title="Sharing a Project with a User"
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

## Dark/Light Mode

This toggle lets you switch between light and dark mode in your app, allowing you to ensure your design looks great in both modes. This feature is only available if you've enabled dark mode support in your project.

## Display Device

You can use this to show the device frame in the preview. This is particularly useful for checking how your screen will look with device-specific features such as the safe area or notches on iPhones and Android devices.

## Handle Bars

Enabling the Resize Handle Bars will show the handle bars at the right and bottom sides of the preview screen. This allows you to change the size of the preview screen to better test your app on a screen with a custom resolution and the overall responsiveness of your app.

![handle-bars](imgs/handle-bars.gif)

## Show or Hide Keyboard
This option, when enabled, displays a virtual keyboard on the device preview screen. This is particularly useful for visualizing the user interface with the keyboard displayed.

## Larger Font Visualization

This enables you to simulate how your app appears when users adjust text scale or accessibility settings on their devices. It's vital for developing an app that's visually appealing and also accessible, especially for those requiring larger text sizes.

## Canvas Settings
![canvas-settings](imgs/canvas-settings.avif)
### Safe Area
The Safe Area is a concept in mobile design that prevents content from being obscured by physical features of the device, such as camera notches, sensors, or rounded display edges. In this context, the FlutterFlow offers a Safe Area switch which allows you to enable or disable this feature as needed.

### Resize Snapping

When resizing a widget, you can snap its size to the specific pixel values or a percentage of the screen size.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/1IOtwXpNus8W4dLgdHsm?embed&show_copy_link=true"
        title="Sharing a Project with a User"
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

### Change canvas color
Changing the canvas color can be helpful when creating components, especially when you want to preview them against the background color of the page. For example, if you have a text component that is black or dark-colored, and the default background is also dark, changing the canvas color to a lighter shade can improve visibility and make the design process easier.

## Add Nav Bar

This button allows you to add the [Nav Bar](../../resources/ui/pages/page-elements.md#nav-bar) to your page. Clicking on this button opens the popup that allows you to enable Nav Bar for your project. Once the Nav Bar is enabled, you can customize it to match your design.

![AddNavBar.avif](imgs/AddNavBar.avif)

---

## Video guide

Watch this video if you prefer watching a video tutorial.
<div class="video-container"><iframe width="760" height="428" src="https://www.youtube.com/embed/NDrte4nOXYc" title="The Canvas | FlutterFlow University" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

---
