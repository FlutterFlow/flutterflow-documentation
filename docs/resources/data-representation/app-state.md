---
slug: /resources/data-representation/app-state
title: App State
description: Learn how to effectively utilize App State Variables in FlutterFlow to maintain and manage global application states across all pages and components.
tags: [App State, FlutterFlow, Data Representation]
sidebar_position: 4
keywords: [App State, FlutterFlow, Data Representation]
---


# App State

App state variables are specific variables that hold the current state of an application. They can be accessed and modified throughout the entire application across all pages and components. This type of variable can be useful for storing data that needs to be shared between different parts of the app, such as user preferences and authentication tokens.

![app-state-variables.avif](../imgs/app-state-variables.avif)

App state variables should be used in scenarios where the same data needs to be accessed and modified from multiple locations within the app. For instance, in a shopping cart app, items in a user's cart are usually accessible across different pages.

App state variables should not be used for temporary data that doesn't impact the overall state of the application. For instance, a user's temporary input in a form should not be stored in an app state variable. It would be more appropriate to use a [page state](#) or [component state](#) variable instead.

## Working with App State Variables

Let’s see how you can manage the app state variable using an example of adding items to a cart in a shopping app. 

### Create app state variable

Head over to the left-side navigation menu and follow the steps below to create a variable.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/QjdQ0cTmGDqUeG6F1JMh?embed&show_copy_link=true"
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
### Update app state variable

To update the app state variable, we need to add an action to the 'Add to Bag' button. Within this action, we'll provide the product details and configure it to add to the current cart list.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/FKv2dXq4jTjjJVLy6nxu?embed&show_copy_link=true"
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
### Use app state variable

The variable can now be accessed via set from variable menu. For example, on the cart page, you can loop through the app state variable to display each item.

![access-app-state-variable.avif](../imgs/access-app-state-variable.avif)