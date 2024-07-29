---
title: Creating a Component
sidebar_position: 1
slug: creating-components.md
keywords: [Custom Components]
---

# User Defined Components

User-defined Components or just Custom Components in FlutterFlow are custom elements you create to meet specific needs in your app. These components can be designed using FlutterFlow's drag-and-drop interface, allowing you to
create reusable UI elements. This approach ensures consistency, saves
time, and simplifies maintenance across your project.

## Creating a component from scratch

To create a component from scratch, you can do the following:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/h9WUKl6igLbyoCPewFLr?embed&show_copy_link=true"
        title="Create Component From Scratch"
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

## Convert into a component

If you have already built a complex widget into your page and realize later that it can serve as a
reusable component, you can convert that entire widget into a component and reuse it multiple times.

To convert a complex widget into a reusable component, select the root widget that contains the
entire widget you want to convert, and follow these steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/if0fCrWpn6wVDdcGbW0E?embed&show_copy_link=true"
        title="Convert into a component"
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

## Creating a component from a popular template

FlutterFlow offers multiple popular templates for components across various use cases that you can
apply to your project in seconds, saving you a lot of time.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/z3yZcGihUz7yGc3jgIbK?embed&show_copy_link=true"
        title="Create from template"
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

## Create an AI generated component

FlutterFlow's **AI Gen** feature allows you to generate various elements,
including components, from a prompt. This can be particularly useful when you're
unsure where to start. Once the component is generated, you can preview it with different color
schemes, in both light and dark themes, and make modifications as desired.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Tv2kaRClaUD9TQnpaXmJ?embed&show_copy_link=true"
        title="AI Generated Component"
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

## Component Properties Panel

When you select a component from the widget tree, the properties panel opens up on the right
side of the interface. It plays a crucial role in configuring and managing the various aspects of
your components.

Here’s a detailed look at what you can typically find and modify in this panel:

![components-configurations.png](../../imgs/components-configurations.png)

### Component Parameters

In FlutterFlow, component parameters are values passed down from a parent entity like a page or another component. These parameters make the component adaptable and dynamic, adjusting to the context in which it is used.

:::info
Learn [**how to add a component to an entity,**](using-components) such as a page or another
component, and how to pass parameters.
:::

### Actions

This tab allows you to define and manage interactions or events triggered by user actions. For
example, you can configure a button to navigate to another page or execute a callback action from
the page using the current component.

Adding an action to a component element is exactly the same experience as adding actions to any page elements. Here's a quick overview:

![component-actions.png](../../imgs/component-actions.png)

For component actions, you can establish specific behaviors or functions that are triggered by
certain events related to the component's lifecycle, such as **On Initialization**.

:::info
To learn more about component lifecycle and adding **On Initialization** action to your component 
[**refer here.**](component-lifecycle.md)
:::

### State Management

Components can have their own internal state variables that track information like form inputs,
toggles, or other user interactions. Components can update their state in response to user
actions (e.g., clicking a button) or external events (e.g., receiving new data from an API).

Effective state management ensures that components dynamically update their UI to reflect changes in
state, providing a responsive user experience.

:::info 
Learn how to **[Create a State variable](component-lifecycle.md#creating-a-component-state)** 
for your components and how to 
**[Update them](component-lifecycle.md#update-component-state-action)**.
:::
