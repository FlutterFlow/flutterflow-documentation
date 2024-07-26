---
slug: /resources/forms/set-form-field
title: Set Form Field [Action]
tags: [Action, Form]
keywords: [FlutterFlow, set form field, form action, user interface, mobile app development, input prefill, form management]
description: Learn how to add Set Form Field action in your FlutterFlow app.
sidebar_position: 0
---
# Set Form Field [Action]

This action allows you to set a value for the Form widgets. For example, you could use this action to auto-populate a form based on a user's previous submission.

You could also dynamically update a dropdown menu based on a user's previous selection, such as showing relevant cities based on a selected country.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/7YwkCFeBsQ6rnYzr3zQh?embed&show_copy_link=true"
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

## Adding Set Form Field action

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Button, etc.) on which you want to add the action.
2. Select **Actions** from the properties panel. If it's the first action, click the **+ Add Action** button. Otherwise, click the "**+**" button below the previous action tile (inside *Action Flow Editor*) and select **Add Action**.
3. Search the **Set Form Field** (under *State Management*) action and select the widget you would like to set.
4. Now, you can set its value directly or from a variable.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/dnZobgoW5fi0Jm4OkFvL?embed&show_copy_link=true"
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

:::info
You can also set form fields that are inside the components.
<p></p>
![set-form-field-in-component](../../imgs/set-form-field-in-component.avif)
:::