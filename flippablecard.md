---
slug: flippable-card
title: Flippable Card
tags: [Layout Elements, Components]
keywords: [Flippable Card, Layout Element, Component, Widget]
description: Learn how to add Flippable Card widget in your FlutterFlow app.
---

# FlippableCard
The FlippableCard widget provides the visual interaction called 'Flip card animation'. Initially, it shows the front side of the card, and when you tap on it, it shows the back side.

You could use this widget to show and hide details of an item (e.g., credit card, online course card, coupon card, etc.)

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/LZAcR5zEXTZKvOpNEWWx?embed&show_copy_link=true"
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

## Adding FlippableCard widget

To add the FlippableCard widget:

1. First, click on the **+ Add Widget** and drag the **FlippableCard** widget from the **Layout Elements** tab or add it directly from the widget tree.
2. Select the **Card Front** from the widget tree and customize or replace the **Container** with the widget of your choice. For example, replacing it with a **Credit Card** widget (under the Templates > Card Views).
3. To edit the back side of the card, select the **FlippableCard**, move to the properties panel, scroll down to the **Flippable Card Propertie**s and enable the **Edit Back of Card**.
4. Now select the **Card Back** from the widget tree and customize or replace the **Container** with the widget of your choice. For example, again, add the Credit Card widget and customize it to show the details.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/bflCPrd9dwZZH7rrDDU4?embed&show_copy_link=true"
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

## Customizing

You can customize the appearance of this widget using the various properties available under the properties panel.

### Changing flip direction

By default, this widget flips the card in the horizontal direction (i.e., from left to right and right to left).

To change the flip direction:

1. Select the **FlippableCard** widget from the widget tree or canvas area.
2. Move to the properties panel, and scroll down to the **Flippable Card Properties** section.
3. Find the **Flip Direction** dropdown and change it to **Horizontal** or **Vertical**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/GnyuJgdxLVatkROyWGEk?embed&show_copy_link=true"
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

### Changing flip animation duration

When you tap on this widget, the flip animation completes in 400ms (milliseconds). You can change this duration if you wish to make it a little faster or slower.

To change the flip animation duration:

1. Select the **FlippableCard** widget from the widget tree or canvas area.
2. Move to the properties panel, and scroll down to the **Flippable Card Properties** section.
3. Find the **Flip Animation Duration** property and change the value. Note: The value should be in milliseconds (e.g., 1000ms = 1 second).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/BUNRQ05cQIv4eAW8QZpk?embed&show_copy_link=true"
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

### Disable flip on tap

By default, the card flips when you tap on it. To disable this behavior, move to the **properties panel > Flippable Card Properties** > disable **Flip on Tap** toggle.