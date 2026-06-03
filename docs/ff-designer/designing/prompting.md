---
slug: /designer/prompting
title: Prompting
description: Generate your first app design from a prompt. Explore styles, attach reference images, and create a complete storyboard from a single description.
tags: [Prompting, FlutterFlow Designer, FlutterFlow, Design]
sidebar_position: 0
keywords: [flutterflow prompting, ai prompt design, generate app, explore styles, image attachments]
---

# Prompting

Prompting is how you turn an idea into screens. Describe your app in the main prompt box, optionally attach a reference image, and the Designer generates a complete editable storyboard for you.

## Create Designs

Here's how you generate an initial screen design, refine, and export it:

1. You can select [**Explore Styles**](#explore-styles) to first browse and refine design ideas, or choose **Instant Generation** to skip that step and quickly create designs from your prompt.
2. Go to the **main prompt box** and write your app vision with important details (e.g., app type, target users, key screens, primary actions, and any must-have features). For example: *"Design a travel planning app with a modern card-based layout, destination image grids, a bottom navigation bar with Explore, Trips, Bookings, and Account tabs, saved itineraries, map integration, and a trip detail screen with timeline and booking information."*
3. Optionally, [**attach an image**](#add-image-attachments) such as a sketch, wireframe, or screenshot using the image attachment button below the prompt field. The Designer will use it as a reference to transform it into a fully editable design.
4. Use the mobile and desktop toggle to set your target platform. This ensures your designs are generated with the correct layout and screen dimensions for your intended device.
5. Click the **submit** (up-arrow) button to generate your design storyboard.
6. Review the generated screens. Scan through the generated frames to confirm:
    - The right screens exist (and no critical screens are missing)
    - The overall flow makes sense
    - The UI direction matches your intent
7. Select a screen to refine. You can [**use the prompt bar**](/designer/iterate#use-ai-prompt) to request changes to the selected screen.
8. You can also make precise tweaks from the [**Properties panel**](/designer/iterate#use-properties-panel). Select an element and adjust its properties on the right side, such as text, typography, spacing, styling.
9. To add a new screen, click on an empty area of the canvas, then in the bottom prompt input, describe the screen you want to add. Include its purpose, key UI elements, and how it connects to the overall flow, then submit.
10. Open the **Theme** tab to edit global styling like colors, typography, spacing, and radius so the entire design stays consistent.
11. You can generate a **shareable link** for feedback and review.
12. To export your design, open the top-left app menu (FF Designer) and choose an **export option**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)',
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/hGR4rvYpgDskcypTW1Er?embed&show_copy_link=true"
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

### Explore Styles

**Explore Styles** helps you try different visual directions for your app before generating the final design. Instead of going straight to a full build, you can first browse style variations, compare layouts, adjust colors, and guide the design toward the look you want.

This is useful when you already know what your app should do, but want help deciding how it should look.

Once the styles are generated, browse through the generated variants and look for the one that feels closest to your vision. Each style gives you a different take on the same app idea, such as a different layout, spacing, typography, or visual mood.

When you hover over a style, you can use the following options:

- **Regenerate**: Recreates the style if something looks off or needs improvement.
- **More Like This**: Generates more variations similar to the selected style.
- **Remix Colors**: Keeps the overall style but changes the color palette.
- **Prompt for Changes**: Lets you describe specific updates you want for that style.
- **Use This Style**: Selects that style and starts the full generation process.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)',
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/Y1d6tFGz5LQnrsuXZPoV?embed&show_copy_link=true"
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

### Add Image Attachments

You can attach reference images directly in the prompt to guide the design generation process. This is useful when you have an existing sketch, low-fidelity wireframe, competitor screenshot, or inspiration design that you want the Designer to follow.

To do so, simply click the image attachment button below the prompt field and upload your image. The AI will analyze the layout, visual hierarchy, and structure, then transform it into a clean, fully editable multi-screen design.

For example, you might upload a rough wireframe of a food delivery app showing a home screen with a search bar, restaurant cards, and a bottom navigation bar. Along with the image, you can add a prompt such as "Using the attached screenshot as a reference, convert this wireframe into a modern food delivery app design."

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)',
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/9MbETqOaPUXR5yctP5B2?embed&show_copy_link=true"
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

## FAQ
<details>
<summary>
Are charts from Designer converted into FlutterFlow chart widgets?
</summary>

<p>
Yes. Bar charts, line charts, and pie charts created in the Designer are automatically converted into fully functional FlutterFlow chart widgets.
</p>

![ff-designer-chart-conversion](imgs/ff-designer-chart-conversion.avif)
</details>
