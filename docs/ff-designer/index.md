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

Because FlutterFlow Designer is built to quickly turn ideas into fully editable designs, it empowers both non-technical creators and development teams to move faster during early UX and UI exploration.

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

1. You can select [**Explore Styles**](#explore-styles) to first browse and refine design ideas, or choose **Instant Generation** to skip that step and quickly create designs from your prompt.
2. Go to the **main prompt box** and write your app vision with important details (e.g., app type, target users, key screens, primary actions, and any must-have features). For example: *"Design a travel planning app with a modern card-based layout, destination image grids, a bottom navigation bar with Explore, Trips, Bookings, and Account tabs, saved itineraries, map integration, and a trip detail screen with timeline and booking information."*
3. Optionally, [**attach an image**](#add-image-attachments) such as a sketch, wireframe, or screenshot using the image attachment button below the prompt field. The Designer will use it as a reference to transform it into a fully editable design.
4. Use the mobile and desktop toggle to set your target platform. This ensures your designs are generated with the correct layout and screen dimensions for your intended device.
5. Click the **submit** (up-arrow) button to generate your design storyboard.
6. Review the generated screens. Scan through the generated frames to confirm:
    - The right screens exist (and no critical screens are missing)
    - The overall flow makes sense
    - The UI direction matches your intent
7. Select a screen to refine. You can [**use the prompt bar**](#use-ai-prompt) to request changes to the selected screen.
8. You can also make precise tweaks from the [**Properties panel**](#use-properties-panel). Select an element and adjust its properties on the right side , such as text, typography, spacing, styling,.
9. To add a new screen, click on an empty area of the canvas, then in the bottom prompt input, describe the screen you want to add. Include its purpose, key UI elements, and how it connects to the overall flow, then submit.
10. Open the **Theme** tab to edit global styling like colors, typography, spacing, and radius so the entire design stays consistent.
11. You can generate a **shareable link** for feedback and review.
12. To export your design, open the top-left app menu (FF Designer) and choose an **export option**.

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
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
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

After generating your initial storyboard, you can refine and improve your screens in two ways: [editing visually](#edit-visually) on the canvas and [using AI prompts](#use-ai-prompt). Each method is useful depending on the type of change you want to make.

### Edit Visually

This is useful when you want precise control over layout and structure. It makes it easy to quickly add or adjust elements exactly where you want them.

To start, click on any UI element in the canvas. The selected element will be highlighted, and small dots will appear around it. You can click any of these dots to add a new UI element at that position. When you click a dot, a selector pop-up opens, allowing you to choose and insert a new element.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/AcWFYJYNcqzMDoNEngxx?embed&show_copy_link=true"
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

You can also rearrange elements using drag and drop. Simply select an element and move it to a new position within the layout.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/6EktGdKPOazdR6fwXFg5?embed&show_copy_link=true"
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

#### Use Properties Panel

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

## Components

A **component** is a reusable UI building block that you can use across your app design. Instead of creating the same UI again and again, you build it once as a component and reuse it wherever needed. This helps keep your app design consistent and easier to maintain.

When you update a component, all places where it is used automatically get updated.

Imagine you are having a settings screen with multiple rows, such as:

- Notification toggle
- Privacy option
- Account settings

Each row has a similar layout with an icon, text, and an action such as switch or arrow. Instead of having each row separately, you can create one **Settings Item component** and reuse it multiple times with different content.

### Creating Component

To create a new component, start by selecting an existing UI block on the canvas. Then click **Create Component** from the right-side panel, give your component a name, and choose the parameters you want to include (such as text, image, or icon). Once you confirm, the component is created and opens in Component Studio.

Inside Component Studio, you can bind these parameters to different UI elements. Select an element, then connect its properties (like text or image) to a parameter from the right panel. You can also add new parameters if needed. This allows each instance of the component to display different content while keeping the same structure and design.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/UL7BkkQMcum84CQnfFAT?embed&show_copy_link=true"
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

:::tip

Once the component is created, you can also use AI to quickly update your component by describing the changes instead of manually editing everything.

:::

### Create Variants

A **variant** is a different version of the same component that allows you to change its appearance without creating a new component. Variants help you manage multiple styles, states, or layouts in one place to make your components more flexible and reusable. For example, a button component can have variants like **Filled** and **Outlined**.

To create a variant, first open your component and click **Add variant**. This creates a new option for the current component, such as an alternate style or layout. Once the new variant appears, select it and customize its properties to make it visually different from the default version, such as changing borders, spacing, colors, or other styling details.

If you want to introduce a completely new category of variation, click **+ Add variant** again to create a new dimension for the component.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/KBmUhJavLxBjxwA8IqjE?embed&show_copy_link=true"
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

### Add Toggle

A **toggle** lets you switch between two states of a component, such as on/off or active/inactive, within the same component. For example, a settings item can have a toggle to show **enabled** or **disabled** states, or a card can toggle between **selected** and **unselected** styles.

To add a toggle, open your component and click **Add toggle** from the variants panel. This creates a new toggle dimension for your component. Once added, you’ll see two states (i.e., true/false). Select each state and customize the component to define how it should look in each case.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/fN1S8VFY034VMJU0vJ0p?embed&show_copy_link=true"
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

#### The `Has` Expression

The `Has` expression lets you automatically control a Boolean property based on whether a component parameter has been provided. This is useful when you want part of a component to appear only when data exists, without manually setting a separate true/false value each time.

For example:

- Show an image only when `image_url` is set
- Show a subtitle only when `subtitle` is set
- Show a time row only when `time` is set

A `Has` expression checks whether a parameter contains a value. If it does, the result is `true`. If it does not, the result is `false`.

Suppose you have a flight booking card component with an optional image on the right side. Instead of adding both `image_url` and a separate `show_image` flag, you can just use `image_url` and bind the **Visible** property to `has(image_url)`. If an image is provided, the card displays the image, and if not, it just appears as a text-only layout.

![control-using-has-expression](imgs/control-using-has-expression.avif)

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
