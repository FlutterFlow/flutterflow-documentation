---
slug: ratingbar
title: RatingBar
tags: [RatingBar, Form Elements]
keywords: [FlutterFlow, RatingBar, Form Widget, App Development, Input Field, Flutter]
description: Learn how to add RatingBar in your FlutterFlow app.
---


# RatingBar

The RatingBar widget is used to show a rating or collect ratings from users (this is an interactive RatingBar). For example, you can use the RatingBar widget inside an e-commerce app to show ratings for a product.

## Adding a RatingBar to Your Project

Here's an example of how you can use the RatingBar widget in your project:

1. First, drag the **Column** widget from the **Layout Elements** tab (in the Widget Panel) or add it directly from the widget tree. Set its **Cross Axis Alignment** to **Start**.
2. Now add one **Image** widget inside the column and set its **Width** property to **inf** and **Height** property to 200.
3. Add a **Text** widget (Inside the Column). Change the **name** to **Item Name** and the **Theme Style** to **Title 1.** Set the **Left Padding** to 10.
4. Add another **Text** widget. Change the **name** to **Item Description** and the **Theme Style** to **Subtitle 2.** Set the **Left Padding** to 10.
5. Finally, add the **RatingBar** widget from the **Form Elements** tab or add it directly from the widget tree.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/8G9OWpSmjbaFjj1hLNQX?embed&show_copy_link=true"
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

### Collectings Ratings from Users (Interactive RatingBar)

To collect ratings from users:

1. Select **RatingBar** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Rating Bar Properties** section.
3. Find the **Interactive** property and checkmark it (click on it).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/OhWfsoMXReWrsHMnaRQ4?embed&show_copy_link=true"
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

### Setting The Rating Value

The Rating can be set by inputting an amount or set from a variable. This is only for a RatingBar that is not interactive.

To manually set the Rating value for the RatingBar:

1. Select **RatingBar** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Rating Bar Properties** section.
3. Find the **Rating** property and change the default value.

:::info
You can also enter the value in decimal such as 1.5. When a decimal is used, a portion of the icon will be colored.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/hsPSBo24i4hxfJve3vl8?embed&show_copy_link=true"
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

### Customize the Icon

Here's an example of how you can customize the icons appearing in the RatingBar:

1. Select **RatingBar** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Rating Bar Properties** section.
3. Find the **Icon Count** property and change the value to 10.
4. Set the **Icon Size** property to 30.
5. Find the **Icon Selector** property below, Click on the **Start Rounded** button, then search and select the icon name with **FontAwesome.smile**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/lUJy6VbMx2PNQklgzPW5?embed&show_copy_link=true"
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

### Changing the Rated/Unrated Color

To change the rated and unrated color (color for icons that are not filled in) for the RatingBar:

1. Select **RatingBar** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Rating Bar Properties** section.
3. Now, find the **Rated Color** property, Click on the box next to **Secondary**, select the color, and then click **Use Selected Color** or click on **Secondary** and enter a Hex Code directly. You can also choose the color by clicking on the Palette and Simple button.
4. Similarly, set the **Unrated** **Color** as well.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Pnb2vacIrQyuP1OaeFbQ?embed&show_copy_link=true"
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

### Add Padding between Icons

To add padding between icons:

1. Select **RatingBar** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Rating Bar Properties** section.
3. Find the **Icon Padding** property and enter the values.

:::info
Use the Lock button to change the Left, Top, Right and Bottom padding all at the same time. Unlocking will allow you to modify each value separately.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/8aKvluQtEv1ketMPGsZL?embed&show_copy_link=true"
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

### Changing the Axis

In a very rare case, you may want to make all icons (inside the RatingBar) appear vertically. This can be done using the Axis property.

To change the Axis:

1. Select **RatingBar** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Rating Bar Properties** section.
3. Find the **Axis** dropdown and change it to **Vertical**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/xsg3sYQEV250Fj20DanU?embed&show_copy_link=true"
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
See how to [**trigger an action when a selection changes**](../../widgets/widget-commonalities.md#trigger-action-on-selection-change) on this widget.
:::