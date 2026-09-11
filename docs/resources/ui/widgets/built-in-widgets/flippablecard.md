---
slug: flippable-card
title: Flippable Card
tags: [Layout Elements, Components]
keywords: [Flippable Card, Layout Element, Component, Widget]
description: Learn how to add and customize a FlippableCard widget in your FlutterFlow app.
---

# Flippable Card

The **FlippableCard** widget displays two sides of content in the same space. It shows the front side by default and flips to the back side when a user taps it. You can use it for flashcards, product details, coupon terms, or other content that users can reveal on demand.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/ww957rvU5mAJNFAO8dtd?embed&show_copy_link=true"
        title="Preview a FlippableCard interaction"
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

## Adding a FlippableCard Widget

To add the FlippableCard widget:

1. Open the [**Widget Palette**](../../../../intro/ff-ui/widget-palette.md) and add the **FlippableCard** widget from **Layout Elements**.
2. In the **Widget Tree**, select **Card Front**. Customize the default **Container** or replace it with another widget that shows the content you want users to see first.
3. Select the **FlippableCard** widget. In the **Properties Panel**, open **Flippable Card Properties** and enable **Edit Back of Card**.
4. In the **Widget Tree**, select **Card Back**. Customize the default **Container** or replace it with another widget that shows the content users should see after the card flips.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/gzh0tAzumLsgveKcnlxR?embed&show_copy_link=true"
        title="Add and configure a FlippableCard widget"
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

Select the **FlippableCard** widget in the **Widget Tree**, then open **Flippable Card Properties** in the **Properties Panel**.

### Editing the Back of the Card

Enable **Edit Back of Card** to show and edit the back of the card on the **Canvas**. Disable it to return to the front. This option changes only which side is visible while editing; it does not affect the card's runtime behavior.

### Changing the Flip Direction

By default, the card flips horizontally. Use **Flip Direction** to choose one of the following options:

- **Horizontal:** Flips the card from left to right or right to left.
- **Vertical:** Flips the card from top to bottom or bottom to top.

### Changing the Animation Duration

The flip animation lasts `400 ms` by default. Set **Flip Animation Duration** to a shorter duration for a faster animation or a longer duration for a slower one. Enter the duration in milliseconds; for example, `1,000 ms` equals 1 second.

### Disabling Flip on Tap

The card flips when tapped by default. Disable **Flip on Tap** if tapping the card should not switch between its front and back sides.

## Best Practices

- Use the same dimensions for the front and back sides and test dynamic content to ensure it does not overflow or get clipped.
- Make it clear that the card is interactive by using a label, icon, or other visual cue.
- Avoid placing essential information only on the back of the card.
- Use a short animation duration so the interaction feels responsive.
