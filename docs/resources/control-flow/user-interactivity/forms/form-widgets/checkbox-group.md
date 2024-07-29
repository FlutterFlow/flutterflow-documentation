---
slug: /resources/forms/checkbox-group
title: CheckboxGroup
tags: [Widget, CheckboxGroup, Form]
keywords: [FlutterFlow, CheckboxGroup, form input, user interface, mobile app development, Flutter widget, multiple choice]
description: Learn how to add CheckboxGroup widget in your FlutterFlow app.
sidebar_position: 3
---


# CheckboxGroup

The CheckboxGroup widget is used to allow a user to select multiple items. The checkbox is displayed before the item name, which you can check/uncheck to make/remove the selection.

You can use the CheckboxGroup widget for implementing multiple selections such as repeating days for alarm, languages a user can speak, and allowing users to select pizza toppings.

## Adding CheckboxGroup

Here's an example of how you can use the CheckboxGroup widget in your project:

1. First, add the **CheckboxGroup** widget from the **Form Elements** tab or add it directly from the widget tree.
2. By default, the CheckboxGroup widget adds a single option named **Option 1**. To change the name, move to the properties panel (on the right side of your screen), and scroll down to the **Define Options** section. Find the **Option 1** property and change the **name**.
3. To add more options, move to the properties panel, and scroll down to the **Define Options** section.
    1. Click on the **Add Option** text.
    2. Enter the name in **Option 2 Text**.
4. To remove the option, click on the cancel icon displayed in the **Option name** property.
5. Click on the **Set from Variable** to show the options from a variable such as app state variable, API response variable, or Firestore Document.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/BivwFwCwbnuPjT1qotFD?embed&show_copy_link=true"
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

## Setting initial selection

Sometimes you might want to display the CheckboxGroup with some options already selected. For example, selecting the topping options that are already served with Pizza itself. You can do so by setting the initial selection for the CheckboxGroup.

To set initial selection manually:

1. Select the **CheckboxGroup** from the widget tree or the canvas area.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Initially Selected** section.
3. Click on the **Add Selected** and enter the option name that you would like to display as selected. **Note**: Make sure you enter the correct name and it matches with the option name added inside the define options section.
4. Similarly, you can display the other option(s) as selected.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/eMhn9p6EcEzpXDyu0JiR?embed&show_copy_link=true"
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


## Clear/Select all items [Action]
You might want to allow users to clear or select all items in one go. You can do so by adding the following action.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/tD2lM1FUYmHHCvCTdirJ?embed&show_copy_link=true"
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

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the properties panel (the right menu), If it's the first action, click **+ Add Action** button. Otherwise, click the "**+**" button below the previous action tile (inside *Action Flow Editor*) and select **Add Action**.
3. Search and select the **Clear All/Select All** (under *Widget/UI Interactions*) action.
4. **Choose Multiselect Widget** name from the dropdown.
5. Finally, set the **Action Type** to **Clear All** or **Select All**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/7BS0z0v8um66Bk7tkgjf?embed&show_copy_link=true"
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


## Customization

You can use the Properties Panel to customize the appearance of your widget.

### Set padding around the checkbox

To create empty space around the checkbox:

1. Select the **CheckboxGroup** from the widget tree or the canvas area.
2. Move to the properties panel and find the **Item Padding** property.
3. Set the padding for the L(Left), T(Top), R(Right), and B(Bottom) sides. Use the  Lock button to change all values at the same time. Unlocking will allow you to modify each value separately.
    

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/iynhZSd2TAW2xVjZEoy3?embed&show_copy_link=true"
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

### Changing checkbox color

To change the checkbox color:

1. Select the **CheckboxGroup** from the widget tree or the canvas area.
2. Move to the properties panel and scroll down to the **Checkbox Style** section.
3. To change the active color (i.e. color when the checkbox is selected), find the **Active Color** property, click on the box next to the already selected color, select the color, and then click **Use Color** or click on **Unset** and enter a Hex Code directly. You can also choose the color by clicking the **Palette** and **Simple** button.
4. the Similarly you can change the check color (i.e color of the done/tickmark icon inside the checkbox).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Wjf3hh1DVpcpx0q7ETY4?embed&show_copy_link=true"
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

### Customizing checkbox border

To customize the checkbox border:

1. Select the **CheckboxGroup** from the widget tree or the canvas area.
2. Move to the properties panel and scroll down to the **Checkbox Style** section.
3. To change the checkbox border color, find the **Check Border Color** property, click on the box next to the already selected color, select the color, and then click **Use Color** or click on **Unset** and enter a Hex Code directly. You can also choose the color by clicking the **Palette** and **Simple** button.
4. To adjust the border corner, find the **Border Radius** property and enter the values in the TL (Top left), TR (top right), BL (bottom left), and BR (bottom right) boxes. Use the  Lock button to change all values at the same time. Unlocking will allow you to modify each value separately.
    

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DXD3GgcFS4vk95v82NTa?embed&show_copy_link=true"
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

:::info[Trigger action on change]
See how to [**trigger an action when a selection changes**](../../../../ui/widgets/widget-commonalities#trigger-action-on-selection-change) on this widget.
:::