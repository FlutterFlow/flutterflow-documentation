---
slug: card
tags:
  - FlutterFlow
  - Resources
  - UI
description: Learn how to add and customize a Card widget in FlutterFlow.
title: Card
keywords:
  - Card
  - Built In Widgets
  - Widgets
---
# Card

The [Card](https://api.flutter.dev/flutter/material/Card-class.html) widget displays related content on a surface with rounded corners and a shadow. Use it for product details, restaurant details, profiles, or other content that should appear as a single item.

![Card widgets used for products and team profiles](imgs/card-widget-use-cases.avif)

## Adding a Card Widget

To add a Card widget:

1. Add the **Card** widget from the **Layout Elements** section of the [Widget Palette](../../../../intro/ff-ui/widget-palette.md).
2. Add a layout widget, such as a **Row** or **Column**, as its child.
3. Add and arrange the content inside the layout widget.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/qKDu4ZWB9UbIk1lMlp9a?embed&show_copy_link=true"
        title="Add a Card Widget"
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

## Card vs Container

Use a **Card** when you want a Material-style surface with built-in elevation, rounded corners, and a background color. Use a [**Container**](../basic-widgets/container.md) when you need more control over dimensions, alignment, borders, gradients, or other decorations.

## Using Cards with Dynamic Data

To display repeated records, place a **Card** inside a **ListView** or **GridView**, then [**generate dynamic children**](../composing-widgets/generate-dynamic-children.md) from a list or backend query. Bind the widgets inside the Card to the current item to show information such as a product image, name, price, or user profile.

## Customizing a Card Widget

Select the **Card** widget and use the **Card Properties** section to customize its appearance:

- **Color:** Sets the card's background color.
- **Elevation:** Controls the card's shadow and visual depth. Use `0` to remove the shadow.
- **Border Radius:** Rounds the card's corners. Apply one value to every corner or configure each corner separately.
