---
slug: /resources/forms/switch
title: Switch
tags: [Widgets, Form Elements]
keywords: [FlutterFlow, Switch, SwitchListTile]
description: Learn how to add Switch and SwitchListTile widget in your FlutterFlow app.
---
# Switch Widgets

In FlutterFlow, **Switch** widgets provide an intuitive way for users to toggle between two states, such as on/off or enabled/disabled. They are useful for settings, preferences, and other scenarios where a simple binary choice is required. FlutterFlow offers two primary switch widgets: [**Switch**](#switch) and [**SwitchListTile**](#switchlisttile). Each of these widgets provides unique features and use cases, making it easy to incorporate toggle functionality into your app's interface.

## Switch

The **Switch** widget is a straightforward toggle switch. It consists of a sliding button that can be moved between two positions, indicating an on/off state. You can customize the appearance and behavior of the switch, such as its color, and initial state (whether it starts as on or off).

### Adding Switch

Let's see how to add a switch widget and build an example that shows its value on a Text widget. Here's how it looks:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/9tTHM9wMjDmENmJTLWly?embed&show_copy_link=true"
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

Here is a simple way to do it:

1. First, click on the **+ Add Widget**, drag the **Switch** widget from the **Base Elements** tab, or add it directly from the widget tree.
2. Below the Switch, add a [**Text**](../../../../ui/widgets/basic-widgets/text.md) widget, move to the properties panel, click on **Set from Variable** and choose the **Widget State > switchValue** (i.e., name of your switch).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/UJblv7iLnarIVQ249J3I?embed&show_copy_link=true"
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

### Setting initial value

You might want to show the switch with a default status, i.e., ON or OFF. For example, showing the location service setting with a default switch OFF.

To set the initial value:

1. Select the **Switch** widget, move to the properties panel, and see the **Switch Initial Value** property.
2. Use the checkbox to set this value manually, or click **Set from Variable** to set it based on the dynamic value. If you choose *Set from Variable*, ensure you pass the boolean value from the source (e.g., API response, Firestore document field).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/5g70NiKx0Mb5gS2VZ50q?embed&show_copy_link=true"
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

### Saving switch value

You might want to save the switch value as soon as it is toggled ON or OFF. For example, saving in an app state variable or Firestore document field. You can do so by adding the action on the switch widget.

The switch widget provides you with the following types of actions (aka callbacks), which you can use to add actions under it.

1. **On Toggled On**: Actions added under this will be triggered whenever the switch is ON.
2. **On Toggled Off**: Actions added under this will be triggered whenever the switch is OFF.

Here's how you do it:

1. Select the **Switch** widget, select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
2. Select **On Toggled On** or **On Toggled Off** and add an action that will update the value. (e.g., [update app state](../..//../../data-representation/app-state.md#update-app-state-action), [update Firestore record](../../../../../ff-integrations/database/cloud-firestore/firestore-actions.md), etc.)

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/XHgeXkbmfkV2YqbV9enj?embed&show_copy_link=true"
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

### Customizing

You can customize the appearance and behavior of this widget using the various properties available under the properties panel.

#### Changing color

To change the switch colors, select the **Switch** widget, move to the properties panel, and scroll down to the **Switch Properties** section. Here you can [change the color](../../../../ui/widgets/widget-commonalities.md#change-color) for the following properties:

- **Active Color**: The color of the thumb (circle) when the switch is ON.
- **Active Track Color**: The color of a track (the line over which the circle slides) when the switch is ON.
- **Inactive Track Color**: The color of a track (the line over which the circle slides) when the switch is OFF.
- **Inactive Thumb Color**: The color of the thumb (circle) when the switch is OFF.

#### Disable switch

You may need to disable a switch if certain conditions aren't met. For instance, users should only be able to toggle the switch when the connected smart device is operational.

To disable a switch, move to the **Properties Panel** **>** turn on the **Switch Disable Options >** click **Unset,** and set the [**Condition**](../../../functions/conditional-logic.md). Once set, you could also customize the disabled state colors using the *Disabled Active Color, Disabled Active Track Color, Disabled Inactive Track Color,* and *Disabled Inactive Thumb Color* properties.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/66f9aceda7dd45509119c54812236120?sid=d9b31cc8-7f6b-4191-8638-7dc37ac414df"
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

## SwitchListTile

The **SwitchListTile** widget combines the functionality of a switch with a **[ListTile](../../../../ui/widgets/composing-widgets/list-grid.md#listtile-widget)**, providing a more comprehensive option for displaying toggle switches alongside additional information. This widget includes a switch, a title, and an optional subtitle, all within a single, cohesive element. 

SwitchListTile is ideal for use cases where you want to provide more context or descriptive text alongside the switch, such as in a settings menu or a form with detailed options.

### Adding SwitchListTile

Here's an example of how you can use a SwitchListTile widget in your project:

1. Drag the **SwitchListTile** widget from the **Base Elements** tab and drop it inside the **Column**.
2. By default, the switch is enabled initially.
    1. To turn it off, move to the properties panel, and **uncheck** the **Switch Initial Value** property.
    2. To set its value based on the variable (e.g. app state variable, API response), move to the properties panel, click on the **Set from Variable** and choose the **Source**.
3. To set the title, scroll down to the **Title** section and change the **Text** property.
4. Similarly, scroll down, find the **Subtitle** section, and change the **Text** to add the description.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/WkDIpdSWS8sNlazx6ySM?embed&show_copy_link=true"
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

### Setting Platform Type

You can set the platform type to *Adaptive or Android* for this widget. Selecting the Adaptive type will display the widget in its native style. That means the widget will show iOS-style rendering when running on iOS devices and Android-style rendering when running on Android devices.

To set the platform type:

1. Select the **SwitchListTile** widget from the widget tree or the canvas area.
2. Move to the properties panel and open the **Platform** section.
3. Set the **Platform Type** among the **Adaptive** or **Android**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/xhXW6D8ECPtXXNgS8OOw?embed&show_copy_link=true"
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

### Customizing

You can customize the appearance and behavior of this widget using the various properties available under the properties panel.


#### Changing switch color

To change the switch color:

1. Select **SwitchListTile** from the widget tree or the canvas area.
2. Move to the Properties panel and scroll down to the **Switch List Tile Properties** section.
3. To change the color of the thumb (sliding circle), find the **Thumb Color** property and click on the box next to the already selected color, select the color, and then click **Use Color** or click on the already selected color and enter a Hex Code directly.
4. To change the color of the track (the line over which the circle slides), find the **Track Color** property and click on the box next to the already selected color, select the color, and then click **Use Color** or click on the already selected color and enter a Hex Code directly.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Bmg3s6E4HB03OfHbBCV8?embed&show_copy_link=true"
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

#### Showing switch at the start

To make the switch appear before the title:

1. Select **SwitchListTile** from the widget tree or the canvas area.
2. Move to the Properties panel and scroll down to the **Switch List Tile Properties** section.
3. Scroll down and checkmark the **Leading** property (click on it).


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/l9WoMbxvJ5QOzEguXUw1?embed&show_copy_link=true"
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