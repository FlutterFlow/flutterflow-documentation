---
title: Using Components
sidebar_position: 2
---

# Using Components

Components in FlutterFlow can be added to either a page or another component. They help streamline
development by allowing you to reuse design and functionality throughout your app. Components can
accept parameters, making them adaptable to specific contexts. Additionally, you can use callbacks
to pass actions from parent entities to child components, enabling dynamic and interactive behavior.

## Callbacks

In FlutterFlow, callbacks are a way to pass down actions from parent entities (like pages or other
components) to child entities (such as custom widgets or components). This allows the parent to
define specific behaviors that the child entity should execute when certain events occur, ensuring
modular and reusable code.

It enables dynamic and interactive behavior in child components, allowing them to perform actions
defined by the parent, such as navigation, data updates, or displaying dialogs.

:::tip[Benefits of Using Callbacks in FlutterFlow]

- **Modularity:** Separate the logic of what happens when an event occurs from the child component,
  making your component widget more modular and reusable.
- **Reusability:** Use the same child component in different contexts with different behaviors,
  simply by passing different callbacks.
  :::

TODO Add diagram

### Execute Callback [Action]

Using this action, you can execute any action passed as a parameter to the component. This is
particularly useful for triggering actions defined in a parent page (outside the component) from
within a widget inside the component. For example, you can pass a navigation action from the page to
a button component, allowing the button to trigger the navigation action when clicked.

## Component Parameters

Component parameters are values that a component receives from its parent entity, such as a page or
another component. These parameters allow the component to be dynamic and adaptable based on the
context in which it is used. By using parameters, you can customize components for different
scenarios without altering the base design or functionality.

### To add a Parameter

You can choose to pass primitive data, a custom data type object, or an action for the component to
execute. To add a parameter, select the component and follow the steps below:

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

## To add a Component to Page

To add a component to a Page, choose the Page where you want to add the new component, and follow
the steps:


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/EBpdB2PtNGPGzKh7O2eQ?embed&show_copy_link=true"
        title="Add component to Page"
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

### Pass down values

In FlutterFlow, each component instance can receive unique values from its parent entity, allowing
for dynamic and context-specific customization. This process involves passing parameters from the
parent entity (such as a page or another component) to the component, ensuring that each instance
can adapt to different data and behavior.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/t4r4TKLGrRvdthCZYdvm?embed&show_copy_link=true"
        title="Pass Down Values"
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

## Add Components to Components

//TODO Will add in a new PR when new feature gets deployed. 