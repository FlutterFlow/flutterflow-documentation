---
slug: /components
title: Components
description: Learn how to create reusable UI components, add variants and toggles, and manage dynamic behavior using parameters and expressions in FlutterFlow Designer.
tags: [Components, FlutterFlow Designer, FlutterFlow, Design]
sidebar_position: 0
keywords: [FlutterFlow components, reusable UI, component variants, toggles, has expression, design system, UI components]
---

# Components

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
