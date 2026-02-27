---
slug: /designer
title: FlutterFlow Designer
description: Generate, refine, and export multi-screen app designs using AI-powered prompts, visual editing tools, and automatic theming.
tags: [designer, export, flutterflow]
sidebar_position: 0
keywords: [flutterflow designer, ai app design, screen storyboard generation, ui design tool, export to flutterflow, design to code, auto theming, multi screen design]
---

# FlutterFlow Designer

The FlutterFlow [**Designer**](https://designer.flutterflow.io/) is an AI-powered app design tool that lets you generate UI screens from natural language prompts. It creates high-quality, editable UI layouts in seconds, so you can design a user interface quickly and iterate visually before building the full app.

FlutterFlow Designer helps you with:

- **Full Editing Control:** Generated screens are fully editable through both AI prompts and visual controls, giving you complete flexibility to fine-tune every detail of your layouts.
- **Easy Integration:** Designs can be exported directly to visual builders like FlutterFlow, used as visual references, or converted into an agent-ready prompt.
- **Auto Theming and Storyboard Generation:** Generate complete user flow in one go, with consistent color schemes and typography applied automatically.

Because FlutterFlow Designer is built to quickly turn ideas into fully editable screens, it empowers both non-technical creators and development teams to move faster during early UX and UI exploration.

![ff-designer.avif](imgs/ff-designer.avif)

- **Frames Panel**: Displays all screens of the app and allows quick navigation between them.
- **Theme Panel**: Make global theme customization.
- **Layers Panel**: Shows the hierarchical structure of widgets within the selected screen.
- **Canvas Area**: Visual preview of all screens in storyboard layout.
- **Undo/Redo Controls**: Quickly revert or reapply recent design changes.
- **Light/Dark Mode Toggle**: Switch between light and dark preview modes to instantly see how your design adapts across themes.
- **Zoom Controls**: Adjust zoom level for better overview or detailed editing.
- **Share Button**: Share the current design or collaborate with others.
- **Properties Panel**: Edit properties of the selected widget such as layout, content, and styling.
- **Prompt Bar**: Use AI commands to describe changes and modify the selected screen or widget.

## Create Designs

Here’s how you generate an initial screen design, refine, and export it:

1. Go to the **main prompt box** and write your app vision with important details (e.g., app type, target users, key screens, primary actions, and any must-have features). For example: *"Design a travel planning app with a modern card-based layout, destination image grids, a bottom navigation bar with Explore, Trips, Bookings, and Account tabs, saved itineraries, map integration, and a trip detail screen with timeline and booking information."*
2. Optionally, [**attach an image**](#add-image-attachments) such as a sketch, wireframe, or screenshot using the image attachment button below the prompt field. The Designer will use it as a reference to transform it into a fully editable design.
3. Use the mobile and desktop toggle to set your target platform. This ensures your designs are generated with the correct layout and screen dimensions for your intended device.
4. Click the **submit** (up-arrow) button to generate your design storyboard.
5. Review the generated screens. Scan through the generated frames to confirm:
    - The right screens exist (and no critical screens are missing)
    - The overall flow makes sense
    - The UI direction matches your intent
6. Select a screen to refine. You can [**use the prompt bar**](#use-ai-prompt) to request changes to the selected screen.
7. You can also make precise tweaks from the [**Properties panel**](#use-properties-panel). Select an element and adjust its properties on the right side , such as text, typography, spacing, styling,.
8. To add a new screen, click on an empty area of the canvas, then in the bottom prompt input, describe the screen you want to add. Include its purpose, key UI elements, and how it connects to the overall flow, then submit.
9. Open the **Theme** tab to edit global styling like colors, typography, spacing, and radius so the entire design stays consistent.
10. You can generate a **shareable link** for feedback and review.
11. To export your design, open the top-left app menu (FF Designer) and choose an **export option**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
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

### Add Image Attachments

You can attach reference images directly in the prompt to guide the design generation process. This is useful when you have an existing sketch, low-fidelity wireframe, competitor screenshot, or inspiration design that you want the Designer to follow. 

To do so, simply click the image attachment button below the prompt field and upload your image. The AI will analyze the layout, visual hierarchy, and structure, then transform it into a clean, fully editable multi-screen design.

For example, you might upload a rough wireframe of a food delivery app showing a home screen with a search bar, restaurant cards, and a bottom navigation bar. Along with the image, you can add a prompt such as “Using the attached screenshot as a reference, convert this wireframe into a modern food delivery app design.” 

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
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

## Iterate Designs

After generating your initial storyboard, you can refine and improve your screens in two ways: using AI prompts or directly editing components from the Properties panel. Both methods are useful depending on the type of change you want to make.

### Use AI Prompt

This method is best for structural, layout, or multi-element changes. To make a change using AI Prompt:

1. Click on the screen (frame) you want to update from the canvas or Frames panel.
2. Use the prompt bar at the bottom to clearly describe what you want to modify.
3. If you’re not satisfied with the result, use the regenerate option to explore a new variation of the same instruction.
4. You can click directly on a widget. The selected widget will automatically be added to the prompt bar as context for your next instruction, allowing more precise AI updates.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/baHBozUa0iwMy6WQON49?embed&show_copy_link=true"
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

### Use Properties Panel

The Properties Panel allows you to make precise adjustments to any selected widget. When you click on an element in the canvas, its editable properties appear on the right side. From there, you can modify properties such as text content, typography settings, spacing, alignment, colors, borders, and other styling attributes. This gives you direct control over how each element looks and behaves without needing to regenerate the entire screen.

Unlike AI-driven changes, edits made here are exact and predictable, making it ideal for polishing the design once the overall layout and structure are already in place.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/p6jxl3xcPgjPIZckXwNV?embed&show_copy_link=true"
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

## Edit Theme

Editing a **Theme** allows you to modify the global design system of your entire storyboard at once. Instead of adjusting individual widgets, you can change core styling elements such as brand colors, typography, spacing, corner radius, and text scaling. Any updates made in the Theme Editor automatically apply across all screens, ensuring visual consistency without manual updates on each page.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/m9gaNdcurgtuh5xnw0YP?embed&show_copy_link=true"
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

## Export Design

Once your screens are finalized, you can export your design for implementation. FlutterFlow Designer provides flexible export options depending on whether you want static assets, reusable prompts, or direct integration into FlutterFlow.

### Export Options

- **Export Frames as PNGs:** Download high-quality PNG screenshots of your frames. This is ideal for adding to documentation, or presenting visual concepts.
- **Export Agent Prompt:** Download an agent-ready prompt as a Markdown file. This allows you to reuse the generated design structure as context in AI workflows or modify it further using natural language instructions.
- **Export to FlutterFlow:** Copy all frames directly to your clipboard for pasting into a FlutterFlow project. Simply select a widget on a FlutterFlow project page and paste to import all your design instantly.

### Export Whole Design

To export the entire storyboard, open the top-left **FF Designer** menu and choose one of the export options (PNGs, Agent Prompt, or FlutterFlow). This method is best when your full flow is ready for implementation.

![export-all.avif](imgs/export-all.avif)

### Export Individual Frames

To export a single frame, select a specific frame and use the **Export** section in the right panel. Use this when you only need to implement a particular screen.

![export-single-screen.avif](imgs/export-single-screen.avif)
