---
title: Action Parameters (Callbacks)
sidebar_position: 4
tags: [Components, Actions]
keywords: [Components, Actions, Action Parameter, Callbacks]
description: Learn how to add action parameters or callbacks to custom components.
---

# Action Parameters (Callbacks)

In FlutterFlow, callbacks are a way to pass down actions from parent entities (like pages or other
components) to child entities (such as custom widgets or components). This allows the parent to
define specific behaviors that the child entity should execute when certain events occur.

It enables dynamic and interactive behavior in child components, allowing them to perform actions
defined by the parent, such as navigation, data updates, or displaying dialogs.

For example, if you have an *image upload component*, the parent can define what should happen after an image is successfully uploaded. Using callbacks, the *image upload component* can execute a parent-defined action, such as:

- Resize and compress the image to reduce storage size.
- Update the user's database record with the new image URL.
- Refresh the UI to display the updated profile picture.

This makes the *image upload component* component reusable, as it doesn't need to know the specifics of what should happen post-upload. Instead, the parent controls the behavior by passing the appropriate actions via a callback.

![action-parameters-callbacks](imgs/action-parameters-callbacks.avif)

:::tip[Benefits of Using Callbacks in FlutterFlow]

- **Modularity:** Separate the logic of what happens when an event occurs from the child component,
  making your component widget more modular and reusable.
- **Reusability:** Use the same child component in different contexts with different behaviors,
  simply by passing different callbacks.
  :::


## Adding Callbacks

Let’s continue with our previous example (*image upload component*) and see how to add callbacks on it:

### Creating a Callback Parameter

In order to create a component that will execute a callback, you must create a component with a parameter of **Type** **Action**. You can create an action parameter called `uploadAction`, which represents the action that will be executed after the image is uploaded.

When you create an action parameter, you can also specify parameters that will be passed into the action. For this example, the action that will be executed will likely need to know the uploaded image URL to process it further. So, you can specify an action parameter called uploadedURL.

Now, the page or component that uses this button can utilize this parameter in its own action flow. An example of this is shown below.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/BRHcXG6zWBYLCxaa9ifG?embed&show_copy_link=true"
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

### Executing a Callback

You can execute the action passed into the component by using the **Execute Callback** action within the component's action flows.

For example, you can execute the above callback after the image is successfully uploaded and the pass the uploaded image URL into the callback.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/XEap1vCGTJ4x9Y1lswe3?embed&show_copy_link=true"
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

### Passing in an Action to a Component

When you add a component to the widget tree of a page or another component, you can define values for its parameters, including action parameters.

For instance, when you add an *image upload component*, you can specify the action flows to be executed when the callback is triggered. For this example, we simply update the profile picture.

:::info

You can access the value passed to the callback by navigating to the **Set Variable** menu > **Callback Parameters**.

:::


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/61EV732tfLpqQAIzLP8G?embed&show_copy_link=true"
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


Now that we have an *image upload component* with action parameters set up, it can be reused across different pages or contexts, as it relies on the parent to define the post-upload logic. For example, the same component can be used to upload an image while posting reviews for a product, eliminating the need to create a separate component for this functionality.

![component-action-parameters.avif](imgs/component-action-parameters.avif)


## More Examples

Let's see some more examples of adding action parameters (callbacks) to deepen the understanding and use it in real-world scenarios.

### Example 1: Dynamic Dialog Component

Let’s take another example of a reusable dialog component that uses callbacks to handle context-specific actions like confirming a deletion, logging out, or saving data. In one context, "Yes" deletes an item. In another, it logs out a user.

The specific logic for each action is defined by the parent component or page using the dialog. The dialog itself does not need to know of what should happen—it simply executes the callback passed to it when users click on the "Yes" button.

![dialog-component-action-parameters.avif](imgs/dialog-component-action-parameters.avif)

### Example 2: Custom Navigation Bar in Super App

Using Action Parameters to build a Custom Navigation Bar in a Super App is an excellent way to create a dynamic, reusable, and modular navigation solution. A **Super App** typically hosts multiple mini-apps or features, each requiring specific navigation logic. Action Parameters allows you to define navigation behavior dynamically, depending on the active context, making it perfect for this scenario.

Here, the navigation bar doesn’t require hardcoded routes. Instead, the navigation logic can be customized for each mini-app, allowing the navigation bar to remain focused solely on its UI role.

For example, in an **ecommerce mini-app**, the home button navigates to the product listing page, while the main (middle) button opens the shopping cart. In contrast, in a **cab booking mini-app**, the home button navigates to the dashboard, and the main (middle) button opens the quick booking page.

![navigation-bar-action-parameters.avif](imgs/navigation-bar-action-parameters.avif)
