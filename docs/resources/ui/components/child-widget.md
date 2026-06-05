---
slug: /resources/ui/components/child-widget
title: Child Widget
description: Learn how to use Child Widget to add flexible, customizable content inside components.
tags: [Components, Child Widget]
sidebar_position: 5
keywords: [FlutterFlow, Child Widget, Components, UI, Reusable Components]
---

# Child Widget

Child Widget allows you to create reusable components while keeping part of the layout flexible. Instead of building multiple variations of the same component, you define a fixed structure and leave a specific area open for customization.

- The position is fixed within the component layout
- It accepts any widget (text, button, image, custom widget, and components, etc.)
- Each instance of the component can have different content inside it
- The overall structure of the component remains consistent

This allows you to reuse the same component while adapting its content as needed.

![child-widgets.avif](imgs/child-widgets.avif)

:::info[Common use cases]

- Dashboard cards with different content (charts, stats, lists)
- Settings rows with different controls (toggle, dropdown, button)
- Empty state sections with different actions
- Feature or onboarding cards with varying content
:::

## Using Child Widget

Let’s see how to use the Child Widget by building a simple example of displaying different controls in a settings row.

1. In your Component, add a new parameter and give it a clear name (e.g., `childWidget`).
2. Set the parameter **Type** to **Child Widget**.
3. In the component layout, add a **Child Widget placeholder** where you want dynamic content to appear.
4. Now go to the component instance (the place where you add this component), locate the Child Widget area, and add any widget into it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/2NhpVlBgLyoEWvzikyqo?embed&show_copy_link=true"
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


### Child Widget vs Widget Builder Parameter

Both let you insert custom UI into a component, but they are designed for different workflows. One focuses on visual flexibility, while the other focuses on structured and scalable component design.

**Child Widget**: A Child Widget allows you to drag and drop any widget directly into a component instance. It requires no setup from the component creator and is handled entirely in the visual editor. Each instance can have different content, making it ideal for quick, flexible customization.

[**Widget Builder Parameter**](widget-builder-parameters.md): A Widget Builder Parameter is defined by the component creator and lets you pass UI into a component as a parameter. It works like a function input, providing a more structured and controlled way to customize components, especially for reusable and scalable designs.


### Best Practices

- Place the Child Widget in a predictable area of the layout, such as a trailing section, content block, or action area. Avoid placing it in positions that affect the overall structure (e.g., between tightly coupled layout elements).
- Keep the role of the Child Widget clear. It should represent a specific purpose (e.g. “action area”, “content area”), not a random insertion point.
- Avoid adding too many Child Widgets in a single component, as it can make the component harder to understand and use.
- Test the component with different widget types (small, large, interactive) to ensure the layout remains stable across variations.

### Limitations

- The Child Widget position is fixed inside the component. You cannot move or reposition it differently for each instance.
- It does not enforce any structure on what gets inserted, so inconsistent widgets across instances can lead to inconsistent UI if not carefully designed.
- It is not ideal for highly dynamic, repeated layouts such as product lists or grids, where content is driven entirely by data.
- It relies on manual placement per instance, which can be less efficient for large-scale or system-driven designs.