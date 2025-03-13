---
slug: /concepts/layouts
title: Building Layout
description: Learn how to build layout in your FlutterFlow app.
tags: [Building Layout, Concepts]
sidebar_position: 1
keywords: [FlutterFlow, Building Layout, Concepts]
---

# Building Layout

In FlutterFlow, you build a page layout using Widgets. **Widgets**, such as [Text](../../resources/ui/widgets/basic-widgets/text.md), [Buttons](../../resources/ui/widgets/basic-widgets/button.md), [Images](../../resources/ui/widgets/basic-widgets/image.md), and [Icons](../../resources/ui/widgets/basic-widgets/icons.md), are visible on the screen. Others, like [Containers](../../resources/ui/widgets/basic-widgets/container.md), Rows, Columns, and Stacks, are not directly visible but help arrange and position the visible elements on the page.

These widgets are categorized into four main types: [Layout Elements](/tags/layout-elements), [Base Elements](/tags/base-elements), 
[Page Elements](../../resources/ui/pages/page-elements.md), and [Form Elements](/tags/form-elements). To build a page, you combine different widgets from these categories to get the desired look and feel of your app.

## Understanding Layout Concept

One of the most common layout patterns is to arrange widgets either **vertically** or **horizontally**. To display widgets in a vertical layout, use the **Column** widget. For a horizontal layout, use the **Row** widget. If you need to place one widget on top of another, use the **Stack** widget.

:::info
**Composing widgets** is a fundamental aspect of creating layouts in FlutterFlow. It involves combining different widgets to form a cohesive and functional user interface. Understanding how to effectively compose widgets allows you to design complex layouts and create intuitive, user-friendly apps. Learn more about composing widgets [**here**](../../resources/ui/widgets/composing-widgets/rows-column-stack.md).

:::

## Building Layouts: Exercise

Let's walk through an exercise to build the following layout:

![build-layout-page.avif](imgs/build-layout-page.avif)

The steps to build the given layout are as follows:

1. [Sketch the layout](#1-sketch-the-layout)
2. [Add Image section](#2-add-image-section)
3. [Add info section](#3-add-info-section)
4. [Add reviews section](#4-add-reviews-section)

#### 1. Sketch the layout

When you are just starting out with building apps, this step is very crucial. Before you actually start adding widgets to the page, sketch a picture of how the main layout will be broken into smaller parts.

Breaking down the given layout into sections looks like this:

![breaking-main-layout-2.png](imgs/breaking-main-layout-2.avif)

Next, identify the widgets that can replace those sections, such as Column, Row, and Stack. Once you have a clear idea of which widgets to use, you can begin adding them.

In the figure above, the main section is replaced with the Column widget and is divided into smaller sections. The next step is to look carefully at these smaller sections and, if required, divide them into further small sections and replace them with the appropriate widget. You can repeat this process until you achieve the desired level of granularity.

Splitting the smaller section further looks like this:

![divide-smaller-section-2.png](imgs/divide-smaller-section-2.avif)


:::info

A page can only have one parent widget. i.e., you can't have two containers (at the same level) inside the HomePage. For that, you can wrap the two containers inside the Column widget, which makes the Column widget a single parent.

![column-as-single-parent.avif](imgs/column-as-single-parent.avif)

:::

#### 2. Add Image section

The top section includes the Image and IconButton widgets. To place the IconButton on top of the Image, wrap them inside a Stack widget. Here's how you do it:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/a4smfd758Oe1RLVUp24V?embed&show_copy_link=true"
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

#### 3. Add info section

The info section consists of a few Text widgets inside the Column.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/G3Z0YSwwQbJgaeZ1qEGL?embed&show_copy_link=true"
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

#### 4. Add reviews section

The review section consists of multiple different widgets. First, add a Column to separate the reviewer's information (image and name) from the actual review text. Next, display the reviewer's information inside a Row widget using the CircleImage and Text widgets. Here’s exactly how you do it:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/q50gJ2Unh0gJ0CGigzDM?embed&show_copy_link=true"
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

## Common Layout Widgets

Apart from Row, Column, and Stack widgets, there are some other widgets that are widely used for building the page layout. Here are some of them:

- [Container](../../resources/ui/widgets/basic-widgets/container.md)
- [Card](../../resources/ui/widgets/built-in-widgets/card.md)
- [ListView](../../resources/ui/widgets/composing-widgets/list-grid.md)
- [GridView](../../resources/ui/widgets/composing-widgets/list-grid.md)
- [TabBar](../../ff-concepts/navigation-routing/special-page-navigation/tabbar-widget.md)
- [PageView](../../ff-concepts/navigation-routing/special-page-navigation/pageview-widget.md)
- [Form](../../resources/control-flow/user-interactivity/forms/forms.md)

## Video guides

To learn more about building layout, watch our videos:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/vQ4dAa8swzU"
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

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/glit6YCj0B0"
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

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/8O4mQKxPn9c"
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
