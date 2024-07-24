---
slug: /concepts/design-system
title: Design System
description: Discover how to create a consistent UI/UX across your app with a design system in FlutterFlow.
tags: [FlutterFlow, Design System, UI/UX, Concepts]
sidebar_position: 1
keywords: [FlutterFlow, Design System, UI/UX, Concepts]
---

# Design System

A design system is a guideline to create a consistent UI/UX across the app. A design system includes colors, typography, fonts, icons, app assets, a nav bar, an app bar, and pre-designed UI components such as buttons and text widgets.

This is especially helpful when you are working in a team of builders and designers in a large company. Let's say you have an app with several different features and pages, each with its unique design. However, you notice that you are starting to create inconsistencies in the design across different pages, such as using different colors, fonts, and layouts.

To solve this issue, you can create a design system outlining common design guidelines. Then, the team members can use this design system, which ensures the design remains consistent.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/moP9VtkoyjY"
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



## Adding Design System

To create your own design system:

1. Open the **Theme Settings > Design System**.
2. Click **Create Design Library**.
3. Enter the **Design Library Project Name**.
4. Now you can configure the [Colors](#), [Typography & Icons](#), [App Assets](#), [NavBar & AppBar](#), and [Theme Settings](#).
5. To see how the app will look for the new design system, you can open it in preview mode (click the eye icon at the top right side).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/7MfxqDLMHhtmen4DLo35?embed&show_copy_link=true"
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


<p></p>
6. To use the design system, open your project and navigate to **Theme Settings > Design System**.
7. Click on the **No Design System Selected**.
8. A pop will open displaying the list of the design systems, click on the newly created design system to add it to your project. **Note** that the design system created in [My Organization](#) will also be available here.

:::info

After selecting the design system, you can't change the Colors, Typography, and Theme Widgets.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/VW1EVzUHh70WhDEDz6n7?embed&show_copy_link=true"
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
<p></p>

---

## Import Figma Theme

You might use Figma to design your app and build it accordingly in our builder. If you have a lot of colors and text styles, importing them manually can take some time. You can now import the whole Figma theme, which includes the colors and text styles, directly into our builder.

:::info

Before you import the Figma theme, ensure you have access to the Figma design file and [**generate the access token**](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens).

:::

To import the Figma theme:

1. Open the **Theme Settings > Design System**.
2. Click the **Import Figma Theme** button. This will open a new popup.
3. Enter your **Figma File URL** and **Personal Access Token**. The *Personal access tokens* allow us to access all of your files and data in Figma.
4. Click **Import Figma Theme**.
    1. Now, you'll see a list of colors from your Figma file, and here you can decide which one to keep. If everything looks good to you, Click **Import & Continue**.
    2. You can replace the current theme colors with new/imported ones. Click on any color, and the dropdown will display all imported colors. Click on the new color to replace it. When done, click **Save & Continue**.
    3. If you have custom text styling in your Figma file, it will be displayed here, and you can choose which one to import. Click **Import & Continue**.
    4. Replace any existing style with the new one and click **Save & Finish**.
5. Finally, click **Finish & Close**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/gEry2KO5BeoZkflYHm8f?embed&show_copy_link=true"
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
<p></p>

If you prefer watching a video tutorial, here is the guide for you:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/kWvWa5PSWhw"
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
<p></p>

---

## Loading Indicator

To customize the loading indicators used in the app, you can make changes in this section. You have the option to specify the **Indicator Type**, **Color**, and **Radius**, and the preview of the changes will be displayed below.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/6OiSlYPiCEY1p3fg0kpG?embed&show_copy_link=true"
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
<p></p>

If you prefer watching a video tutorial, here is the guide for you:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/3sG-O1lkv0M"
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
<p></p>

---

## Scrollbar Theme

From here, you can customize the appearance of the scrollbar that shows up on scrollable elements like ListView, GridView, StaggeredView, Row, and Column.

:::note

The scrollbar currently shows up by default only on platforms where Flutter natively supports it, such as web and desktop environments.

:::

You can modify its color, adjust its thickness, give it a rounded border, and more. In the 'Preview' section, you'll also be able to see the immediate visual effect of your changes.

Here are all the properties you can customize:

1. **Thumb Color:** This changes the color of the draggable portion of the scrollbar, often called the "thumb".
    
    ![thumb-color](../imgs/thumb-color.avif)
    
2. **Thickness:** This increases width (in a vertical scrollbar) or height (in a horizontal scrollbar).
    
    ![thickness](../imgs/thickness.avif)

3. **Border Radius:** This sets the curvature of the scrollbar's corners. By adjusting the border-radius, you can give the scrollbar a more rounded appearance (higher values) or a more squared appearance (lower values).
    
    ![border-radius](../imgs/border-radius.avif)

4. **Min Thumb Length:** This refers to the smallest size that the draggable portion (thumb) of a scrollbar can be. This ensures that users can always see and interact with the thumb, even when the content is very long.
    
    ![min-thumb-length](../imgs/min-thumb-length.avif)

5. **Main Axis Margin:** This refers to the space or gap along the primary direction of the scrollbar. For instance, in a vertically scrolling list, it refers to the top and bottom spacing, and in a horizontally scrolling list, it refers to the left and right spacing.
        
    ![main-axis-margin](../imgs/main-axis-margin.avif)

6. **Cross Axis Maring:** This refers to the space or gap along the cross direction of the scrollbar. For instance, in a vertically scrolling list, it refers to the left and right spacing, and in a horizontally scrolling list, it refers to the top and bottom spacing.

    ![cross-axis-margin](../imgs/cross-axis-margin.avif)

7. **Thumb Always Visible:** This determines whether the draggable "thumb" element of the scrollbar constantly remains visible or fades out when not in use. When enabled, you can also specify whether to show the track as well with custom color and border color.
8. **Interactive**: Using this property, you can set different colors for different states of the thumb, including when it's hovered over or being dragged.
    
    ![interactive](../imgs/interactive.gif)

---

## Pull to Refresh Style

From here, you can customize the appearance of the pull to refresh (i.e., the loading circle).

You can modify its color, background color, and stroke width. In the 'Preview' section, you'll also be able to see the immediate visual effect of your changes.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/KHdvetH4Eg46TfDmZQUJ?embed&show_copy_link=true"
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
<p></p>

## FAQs

<details>
<summary>How do I create a new design system if I don't see a button for it?</summary>
<p>Currently, creating a design system requires you to have a team set up, even if you're working solo. You can quickly create a team by following the instructions outlined [here](#). We are working on a solution that will allow for the creation of design systems without needing a team setup. Stay tuned for updates!</p>
</details>