---
title: Creating a Component
sidebar_position: 1
slug: creating-components
keywords: [Custom Components]
tags: [Components]
---
import setComponentParam from '@site/static/img/set-component-parameter.png';
import levComponentParam from '@site/static/img/leverage-component-parameter.png';

# Components

Components are reusable widgets you create to meet the specific needs of your app. This approach ensures consistency, saves
time, and simplifies maintenance across your project.

## Creating a component from scratch

To create a component from scratch, click the **Add Button** in the **Page Selector** or **Widget Tree** tab. Then choose **New Component.**

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

If you have already built a complex widget in your page, you can convert that entire widget into a component and reuse it throughout your app.

To convert a complex widget into a reusable component, right click on the root widget that contains the
entire widget tree you want to convert, then select **Convert to Component.**

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

![components-configurations.png](../imgs/components-configurations.png)

## Component Parameters

Component parameters are values that a component receives from its parent entity, such as a page or
another component. These parameters allow the component to be dynamic and adaptable based on the
context in which it is used. By using parameters, you can customize components for different
scenarios without altering the base design or functionality.

### Creating a Component Parameter

To create a component parameter, go to the root widget in the component's widget tree.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/chgEkWJpUFAIUzoB0LuG?embed&show_copy_link=true"
        title="Adding a Parameter"
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

### Bind the Parameter

Once you have created a component parameter, you can link data from the parent entity to your
component.

Here's a small example of how we can bind the parameters created in `ProfileListItem` to their
respective widgets and action triggers.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/ixR32sxe5W97bEaS1hTt?embed&show_copy_link=true"
        title="Bind Parameters in Components"
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


Aside from standard data types used throughout FlutterFlow, you can also create parameters that are of type:

- **Action (callback)**: This allows you to pass in actions into the component. The component can then invoke the action, usually referred to as a callback, in its own action flows. Callbacks are often using to handle events, like updating a parent's state when a button has been pressed. [You can learn more about how to use callbacks here.](/resources/ui/components/callbacks)

- **Widget Builders**: Widget builders allows you to pass in widgets to be used within the component's widget tree. This is especially useful when you want to dynamically substitute content for some part of a component - like displaying an item in a custom dropdown, or creating a component for some consistent layout. [You can learn more about how to use Widget Builders here.](widget-builder-parameters.md)


### Actions

This tab allows you to define and manage interactions or events triggered by user actions. For
example, you can configure a button to navigate to another page or execute a callback action from
the page using the current component.

Adding an action to a component element is exactly the same experience as adding actions to any page elements. Here's a quick overview:

![component-actions.png](../imgs/component-actions.png)

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
