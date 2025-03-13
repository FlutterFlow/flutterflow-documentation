---
slug: /resources/forms/radiobutton
title: RadioButton
tags: [Widget, RadioButton, Form]
keywords: [FlutterFlow, RadioButton, form input, user interface, mobile app development, Flutter widget, selection control]
description: Learn how to add RadioButton widget in your FlutterFlow app.
---

# RadioButton

The RadioButton widget is used to allow a user to select one option from multiple selections.

You can use the **RadioButton** widget for implementing a single selection such as gender selection, notification preferences, etc.

:::tip[Widget State]
Before diving into form widgets, check out our guide on [**Widget States**](../../../../../ff-concepts/state-management/widget-state.md) to efficiently manage the state and behavior of your form elements.
:::


## Adding RadioButton to Your Project

Here's an example of how you can use the RadioButton widget in your project:

1. First, drag the **Column** widget from the **Layout Elements** tab (in the Widget Panel) or add it directly from the widget tree. Set its **Cross Axis Alignment** to **Stretch**.
2. Now add the **RadioButton** widget from the **Form Elements** tab or add it directly from the widget tree.

:::info
The RadioButton widget adds a single option named **Option 1** by default.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/uwTpWnFeSb9XfXbLwnmq?embed&show_copy_link=true"
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

### Changing Option Name

To change the name of the option:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Define Options** section.
3. Find the **Option 1** property and change the **name**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/dWJ8ApFRyGHK6QJwYQRT?embed&show_copy_link=true"
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

### Adding or Removing Option

To add or remove an option from the RadioButton:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Define Options** section.
3. Click on the **Add Option** text.
4. Enter the name in **Option 2 Text**.
5. To remove the option, simply click on the cancel icon () displayed in the **Option name** property.
    

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/dwOVrA7UXfNYNCJU2niE?embed&show_copy_link=true"
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

### Setting Initial Option

When you run the app, no option is selected by default.

To set the initial option:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Initial Option** property.
3. Enter the **name** of the option. For example, entering a value as **Jupiter** will show the second option selected on running the app.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/q2WMmLXgDBHxa8Q2ToHV?embed&show_copy_link=true"
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

### Styling Selected Option

To change the text style of the selected option:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Radio Button Text Style** section.
3. Checkmark the **Change Selected Text Style**. (Click on it)
4. Under the **Radio Button Selected Text Style** section, change the text style.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(35.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/on8RaGEIy2DoY9DkGBv8?embed&show_copy_link=true"
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

## Retrieving RadioButton Selection

Let's build an example of showing the selected option in a Text widget.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/SrCgHmkDwxuUnnL7CISA?embed&show_copy_link=true"
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
For simplification purposes, the selected option is shown in the Text widget. In a real-world scenario, you may pass the RadioButton selection to your Backend (Firestore Database/API call).
:::

To retrieve the user's selection:

1. Add the [**Text**](../../../../ui/widgets/basic-widgets/text.md) widget to your page.
2. Move to property editor and click on the **Set from Variable** text. (This will open a new panel)
3. Set the **Source** to **Widget State**.
4. Set the **Available Options** to **RadioButton**.
5. (Optional) Set the default value if you wish to.
6. Click **Save**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/pOctjajxyXfATzcV4mIx?embed&show_copy_link=true"
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


## Changing the Properties

The Properties Panel can be used to customize the appearance and behavior of your widget.

### Changing Options Height

To change the height of all options:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Radio Button Properties** section.
3. Enter the desired height into the **Option Height** box.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/CJW7yVt563za26klU2Mb?embed&show_copy_link=true"
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

### Adding Space Around Option Text

To add some space around the option text:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Radio Button Properties** section.
3. Find the **Margin** property and enter the values.
4. Click on the Refresh icon to reset the values.
    
:::info
Use the Lock button to change the Left, Top, Right and Bottom padding all at the same time. Unlocking will allow you to modify each value separately.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/6Pm0bPjJG6wMMDblFXFM?embed&show_copy_link=true"
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

### Showing Options Horizontally

By default, all options are shown as if they were inside the Column widget. Using *Axis* property, you can change this behavior to display all options horizontally as if they are inside the Row widget.

To display all options horizontally:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Radio Button Properties** section.
3. Find the **Axis** property, change it to **Horizontal**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/o4YRXamuP9uJxZNNFLkJ?embed&show_copy_link=true"
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

### Aligning Options

Changing the alignment will change how the options are distributed in the horizontal space.

To change the option alignment:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Radio Button Properties** section.
3. Find the **Alignment** dropdown and select from the options displayed that include Start, Center, End.
4. If the **Axis** property is set to **Horizontal**, you will see options that include Start, Center, End, Space evenly, Space between, and Space around.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/likoUqGPJhPJsUhu57jJ?embed&show_copy_link=true"
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

### Changing Button Position

If you want to display the button on the opposite side of the option text i.e right side, you can do so using the *Button Position* property.

To change the button position:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Radio Button Properties** section.
3. Find the **Button Position** property, change it to **Right**.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/kWA0nm3WfmJIhm0oAeCJ?embed&show_copy_link=true"
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

### Styling Radio Button

To change the color of selected and unselected options:

1. Select **RadioButton** from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Radio Button Properties** section.
3. Find the **Selected Color** property, click on the box next to **Unset**, select the color, and then click **Use Selected Color** or click on **Unset** and enter a Hex Code directly. You can also choose the color by clicking on the Palette and Simple button.
4. Find the **Unselected Color** property, click on the box next to **Unset**, select the color, and then click **Use Selected Color** or click on **Unset** and enter a Hex Code directly. You can also choose the color by clicking on the Palette and Simple button.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Wgs9lGUinPRvTGaOM0j0?embed&show_copy_link=true"
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
See how to [**trigger an action when a selection changes**](../../../../ui/widgets/widget-commonalities.md#trigger-action-on-selection-change) on this widget.
:::