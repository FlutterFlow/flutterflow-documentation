---
slug: /quickstart
title: Quickstart Guide
tags: []
description: Build your first interactive FlutterFlow app by creating a layout, customizing its style, managing state, and testing the result.
---

# Quickstart Guide

Welcome to the FlutterFlow Quickstart Guide! This guide introduces the basic FlutterFlow concepts through a short, hands-on exercise. You'll build a product quantity selector that allows users to adjust the quantity of an item before adding it to their shopping cart.

:::info[Before You Begin]
To complete this guide, you need:

- A [**FlutterFlow account**](https://app.flutterflow.io/).
- A web browser.
- About 15-20 minutes.
:::

Below is a preview of what your completed app will look like:

![Quick start demo app](../../static/img/flutterflow-quick-start-app-demo.avif)

## What You'll Learn

- Build a layout with widgets.
- Customize widget styles.
- Add interactivity with actions.
- Manage page state in response to user input.
- Run and test your app.

Follow these steps to build the app:

1. [Clone the starter project](#clone-project)
2. [Build the UI](#build-ui)
3. [Customize styles](#customize-style)
4. [Manage state](#manage-state)
5. [Run the app](#run-app)

## 1. Clone the Starter Project {#clone-project}

This guide uses a prepared starter app so you can focus on building the interaction. Open the [FlutterFlow Quickstart project](https://app.flutterflow.io/project/f-f-quick-start-app-umu392), click **Clone**, and the project will be added to your account.

To begin with a separate project instead, see [Create a Project](../resources/projects/how-to-create-find-organize-projects.md#how-to-create-a-project).

![clone-project.avif](imgs/clone-project.avif)

After cloning the project, you’ll see a page with product images and a description. You’ll add a feature that allows users to update the product quantity.

![final-quick-start.avif](imgs/final-quick-start.avif)

## 2. Build the UI {#build-ui}

Build the quantity control by combining layout and display widgets in the product page's Widget Tree.

1. Open the product page and locate the content below the product description.
2. Add a **Container** to hold the quantity control.
3. Add a **Row** inside the Container.
4. Add a **Text** widget for the "Quantity" label.
5. Add controls for decreasing the quantity, displaying its current value, and increasing it.
6. Arrange the widgets so the label appears on the left and the quantity controls appear on the right.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/13kkejiZuiFeo9Fj8aWz?embed&show_copy_link=true"
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

:::info
To learn more, see [**Building Layouts**](../ff-concepts/layout/building-layout.md) and the [**Widget Overview**](../resources/ui/widgets/intro-widgets.md).
:::

## 3. Customize Styles {#customize-style}

Next, style the quantity control to match the rest of the product page. Use the [Properties Panel](../intro/ff-ui/builder.md#properties-panel) to adjust each selected widget.

1. Adjust the spacing and alignment of the Row. 
2. Select the Container that holds the quantity control and adjust its background color, padding, size, and corner radius.
3. Style the "Quantity" label and value so they are easy to read.
4. Customize the decrease and increase controls with suitable icons, colors, and sizes. 
5. Compare the result with the completed preview and make any final visual adjustments.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/mA0EGCPhuyJ6UUQFPDUP?embed&show_copy_link=true"
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

## 4. Manage State {#manage-state}

Once your UI is set up, make your app interactive by adding a page state variable. A state variable stores data that can change as users interact with the page. In this exercise, it stores the current product quantity and updates the displayed value when users select the increase or decrease control.

### 4.1 Add a State Variable

Add a [page state variable](../resources/ui/pages/page-lifecycle.md) that will hold the current quantity value. Here's how to add and use the state variable:

1. Select the page's root widget in the Widget Tree.
2. Open the page's state management settings and add a new field.
3. Name the field `quantity`, set its data type to **Integer**, and give it an initial value of `1`.
4. Select the Text widget that displays the quantity.
5. Set its value from **Page State > quantity**.

:::info
To learn more about this workflow, see [**Creating a Page State**](../resources/ui/pages/page-lifecycle.md#creating-a-page-state).
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/T8dg4g238t37cct3vrD2?embed&show_copy_link=true"
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

### 4.2 Update the State Variable

Use actions to change `quantity` when a user selects the increase or decrease control:

1. Select the increase control and add an **On Tap** action.
2. Choose **Update Page State**, select `quantity`, and set it to its current value plus `1`.
3. Select the decrease control and add another **On Tap** action.
4. Update `quantity` to its current value minus `1`.
5. Confirm that both controls update the Text widget bound to `quantity`.

:::info
See the [**Action Flow Editor**](../resources/control-flow/functions/action-flow-editor.md) and [**Update Page State**](../resources/ui/pages/page-lifecycle.md#update-page-state-action) guides for more details.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/rmxuLzwsP7uGgGQUI4YO?embed&show_copy_link=true"
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

## 5. Run the App {#run-app}

Use [**Test Mode**](../testing-deployment-publishing/running-your-app/run-your-app.md#test-mode) to try the interaction and see changes quickly. Test Mode runs a web version of your app and can automatically sync changes from the FlutterFlow builder.

1. Select **Test Mode** from the left-side menu.
2. Wait for the test session to start.
3. Click or tap the increase and decrease controls and confirm that the displayed quantity changes.

[**Run Mode**](../testing-deployment-publishing/running-your-app/run-your-app.md#run-mode) creates a fully functional build that can include live data and be shared with project members. Because it creates a new build, it typically takes longer and does not support hot reload.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/hdpwwkbCYcvsjsrkygDX?embed&show_copy_link=true"
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

Congratulations! You've built your first app with FlutterFlow.

## Verify the Result

Before moving on, confirm that:

- The initial quantity is displayed correctly.
- The increase control raises the quantity.
- The decrease control lowers the quantity.
- The layout remains aligned as the value changes.
- The interaction works in Test Mode.

## Next Steps

Continue learning with these guides:

- [Building Layouts](../ff-concepts/layout/building-layout.md)
- [Widget Overview](../resources/ui/widgets/intro-widgets.md)
- [Page State](../resources/ui/pages/page-lifecycle.md#page-state)
- [Action Flow Editor](../resources/control-flow/functions/action-flow-editor.md)
- [Run and Test Your App](../testing-deployment-publishing/running-your-app/run-your-app.md)

## Need Help?

If you're experiencing any issues with the app, review the steps above and verify that each widget and action is configured as described.

For additional help, ask a question in the [Community Forum](https://community.flutterflow.io/) or contact FlutterFlow Support.
