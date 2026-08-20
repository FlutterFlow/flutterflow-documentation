---
slug: carousel
title: Carousel
tags: [Layout Elements]
description: Learn how to add and customize a Carousel widget in your FlutterFlow project.
---

# Carousel

The **Carousel** widget displays a sequence of images or other content within a limited area. Use it for product highlights, onboarding steps, featured articles, testimonials, and other content that users can browse horizontally or vertically.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)',
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/buZIamQKiolwkvo2ATdq?embed&show_copy_link=true"
        title="Carousel widget overview"
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

## Adding a Carousel Widget

To add and configure a Carousel widget:

1. Add the **Carousel** widget from **Layout Elements** in the **Widget Palette**.
2. In the **Properties Panel**, use **Active Page** to select the Carousel Page (slide) you want to preview and edit.
3. Click **+ Add Page** to add a page. To remove one, select its **Carousel Page** in the **Widget Tree** and delete it.
4. Replace the default Image widget or add other widgets to build the content for each page.

:::tip
Each Carousel page can contain a complete widget tree instead of only an image. For example, you can combine text, buttons, images, and other widgets to create onboarding steps or featured-content cards.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)',
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/AoNsIVHV6LTAXukT5HFv?embed&show_copy_link=true"
        title="Add and edit Carousel pages"
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

## Customizing a Carousel Widget

Select the Carousel widget and use the following options in the **Properties Panel**:

- **Axis:** Sets whether users move through the pages horizontally or vertically.
- **Initial Page Index:** Sets the page displayed when the Carousel loads. Page indexes are zero-based: `0` is the first page, `1` is the second, and so on.
- **Loop Carousel Contents:** Allows continuous navigation between the first and last pages.
- **Wrap Items in Center Widget:** Centers the content within each Carousel page.
- **Viewport Fraction:** Sets how much of the available viewport the focused page occupies. Enter a value from `0` to `1`.
- **Shrink Factor:** Scales pages that are not in focus. Enter a value from `0` to `1`, where `1` keeps them at full size and `0.5` displays them at half size.
- **Autoplay:** Automatically advances through the pages. Enable **Loop Carousel Contents** if autoplay should continue from the last page back to the first.
    - **Duration:** Sets the page transition time in milliseconds when autoplay is enabled.
    - **Delay:** Sets, in milliseconds, how long each page remains visible before autoplay advances.

## Using Dynamic Carousel Pages

You can create Carousel pages from a list, such as records returned by a backend query. Select the Carousel widget, open the [**Generate Dynamic Children**](../composing-widgets/generate-dynamic-children.md) tab, and select the list that will provide the Carousel content. Configure the widgets on the generated Carousel page and bind their values to the current list item.

FlutterFlow repeats the Carousel page for every item in the list, making this approach useful for product galleries, promotional content, testimonials, or any collection with a variable number of items.

## Triggering Actions on Page Change

Use the **On Page Change** trigger to run an action whenever the displayed page changes. For instance, you can update a custom page indicator, save the current page index, or show a message.

To add the trigger, select the Carousel widget, open the **Actions** tab in the **Properties Panel**, choose **On Page Change**, and add the action you want to run.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)',
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/BneySAfYYorg5kcCHsPX?embed&show_copy_link=true"
        title="Run an action when a Carousel page changes"
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

:::tip
To use the displayed page index in an action or widget, select **Set from Variable > Widget State > [Carousel name] > Carousel Current Index**.
:::

## Control Carousel [Action]

The **Control Carousel** action lets users navigate the Carousel with a button, icon, or another interactive widget instead of relying only on swiping.

To configure it:

1. Select the button, icon, or other interactive widget that will control the Carousel.
2. Add an action under the appropriate trigger, such as **On Tap**, and select **Control Carousel**.
3. Select the Carousel you want to control and choose an action type.

### Action Types

- **Previous:** Moves to the previous page.
- **Next:** Moves to the next page.
- **First:** Moves to the first page.
- **Last:** Moves to the last page.
- **Jump To:** Moves to a specific page using the same zero-based index described above.
