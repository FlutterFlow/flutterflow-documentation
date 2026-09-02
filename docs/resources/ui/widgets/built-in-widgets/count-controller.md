---
slug: count-controller
title: Count Controller
tags:
  - FlutterFlow
  - Resources
  - UI
description: >-
  Learn how to add, configure, and use a Count Controller widget in your
  FlutterFlow app.
keywords:
  - Count Controller
  - Built In Widgets
  - Widgets
---
# Count Controller

The **Count Controller** widget lets users increase or decrease a numeric value. Use it for product quantities, guest counts, ticket selections, or any input that must stay within a defined range.

## Adding a Count Controller Widget

To add a Count Controller widget:

1. Add the **Count Button** widget from **Form Elements** in the **Widget Palette**.
2. To configure the count behavior, use the following options:

    - **Initial Count:** Sets the value displayed when the widget loads. The default is `0`. To set this value dynamically, select **Set from Variable**.
    - **Step Size:** Sets how much the value increases or decreases with each tap. The default is `1`.
    - **Minimum:** Sets the lowest value users can select.
    - **Maximum:** Sets the highest value users can select.

For an inventory selector, you might set **Initial Count**, **Step Size**, and **Minimum** to `1`, and set **Maximum** to the available stock.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)',
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/qg0cKxDggM5svqebUoK4?embed&show_copy_link=true"
        title="Add and configure a Count Controller widget"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameBorder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

<p></p>

## Accessing the Current Count

The Count Controller stores its latest value in its [**widget state**](../../../../ff-concepts/state-management/widget-state.md). To use the value in another widget or action, select **Set from Variable > Widget State > [Count Controller name]**.

You can use this value to calculate a total price, control conditional visibility, pass a quantity to an action, or save the selection to your backend.

## Triggering an Action When the Count Changes

Use the **On Count Changed** trigger to run an action whenever the user increases or decreases the value:

1. Select the Count Controller widget and open the **Actions** tab in the **Properties Panel**.
2. Select **On Count Changed** and add the action you want to run.
3. Use the Count Controller's current widget state value wherever the action requires the latest count.

## Customizing a Count Controller Widget

Select the Count Controller in the **Widget Tree** or on the canvas, then use the following sections in the **Properties Panel**.

### Style Properties

- **Decrement Icon:** Select the icon used to decrease the count, then set its **Icon Size** and **Icon Color**.
- **Increment Icon:** Select the icon used to increase the count, then set its **Icon Size** and **Icon Color**.
- **Disabled Icon Color:** Sets the color of the decrement icon when the count reaches its minimum value and the increment icon when it reaches its maximum value.
- **Count Text Style:** Controls the appearance of the count using **Theme Text Style**, **Font Family**, **Font Weight**, **Font Size**, **Text Color**, **Line Height**, **Letter Spacing**, and **Text Align**.

### Container Properties

- **Shape:** Displays the Count Controller in a rectangular or circular container.
- **Width and Height:** Sets the container dimensions using pixels or percentages.
- **Fill Color:** Sets the container's background color.
- **Border Color:** Sets the container border color.
- **Border Radius:** Rounds the container corners. You can apply the same value to every corner or configure each corner separately.
- **Border Width:** Sets the thickness of the container border.
- **Elevation:** Adds a shadow beneath the container to create visual depth.
- **Gradient:** Applies a gradient to the container background.
