---
slug: /resources/data-representation/constants
title: Constants
description: Explore the importance of using Constants in FlutterFlow to define unchanging values throughout your application.
tags: [Constants, FlutterFlow, Data Representation]
sidebar_position: 6
keywords: [Constants, FlutterFlow, Data Representation]
---

# Constants
Constants are used to define values that remain unchanged throughout the lifetime of an application. Using constants is a good practice for values that do not need to be recalculated or reassigned.

Constants are used to define values that you believe are fixed, like API endpoints, standard mathematical values, maximum size limits set by business rules, etc.

:::tip[When to use Constants vs **[App state variables](app-state)?**]
Constants don't change. Once you set its value (in builder), you can't change it from within the app. On the other hand, app state variables are dynamic. They can be updated in response to interactions in the application, such as a user clicking a button or entering data.
:::

## Create and use Constants

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Dftl0AAL3w3fw6TjaiBR?embed&show_copy_link=true"
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

:::tip[Naming Convention]
Prefer using a lowercase `k` prefix for constants to indicate their immutability, especially for project-specific constants. This approach is more concise and aligns with Dart's common practices. To learn more, refer to the guide on **[Naming Variables & Functions](../../resources/style-guide.md)**.
:::
