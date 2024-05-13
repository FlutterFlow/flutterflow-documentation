---
slug: constants
title: Constants
tags: []
description: Explore the importance of using Constants in FlutterFlow to define unchanging values throughout your application.
sidebar_position: 5
---

# Constants
Constants are used to define values that remain unchanged throughout the lifetime of an application. Using constants is a good practice for values that do not need to be recalculated or reassigned.

Here are some real-world examples where using constants is beneficial:

- **Educational Apps**: Constants for course-related data like the number of questions in a quiz or passing grade percentage.
- **Fitness Apps**: Standard values like target heart rate zones or calorie burn rates based on specific exercises.
- **Game Development**: Constants for game settings like default player health, speed, or levels. For example, `const int maxHealth = 100;`.

:::tip

**When to use Constants?**
Use constants when the same value is used in multiple places, and changing the value will change it everywhere it's used.

**How are Constants different from the [App state variables](app-state.md)?**
Constants don't change. Once you set its value, you can't change it from within the app. On the other hand, app state variables are dynamic. They can change and manage the app's changing data, like user status or preference.

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