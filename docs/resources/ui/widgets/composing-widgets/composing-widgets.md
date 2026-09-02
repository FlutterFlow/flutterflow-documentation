---
title: Composing Widgets
sidebar_position: 0
description: >-
  In FlutterFlow, creating a complex user interface often involves combining
  simpler widgets into more intricate layouts.
tags:
  - FlutterFlow
  - Resources
  - UI
keywords:
  - Composing Widgets
  - Widgets
  - Ui
last_verified: 2026-09-02
slug: /resources/ui/widgets/composing-widgets
---
# Composing Widgets

In FlutterFlow, creating a complex user interface often involves combining simpler widgets into more intricate layouts. While atomic widgets like **Text, Button, Image**, and **Icon** form the building blocks of your UI, you’ll use molecular widgets like **Row**, **Column**, and **Stack** to arrange these atomic widgets into a structured layout.

As you grow more comfortable with these, you can advance to using **Lists** and **Grids** for even more dynamic and complex compositions.

## Molecular Widgets: Row, Column, and Stack

To start composing more sophisticated interfaces, FlutterFlow provides essential molecular widgets like **Row, Column**, and **Stack**. These widgets allow you to control the arrangement of atomic widgets within your app.

- **Row:** This widget aligns its children horizontally in a single line, from left to right. It's useful for creating layouts where elements need to be placed side by side, such as icons with labels or buttons in a toolbar.

- **Column:** This widget aligns its children vertically, from top to bottom. It is useful for a small, fixed group of items or for laying out sections of a page vertically. Use a scrollable list for a long or data-driven collection.

- **Stack:** This widget allows for overlapping widgets by placing them on top of each other. It’s ideal for creating layered effects, like placing text over an image or adding a badge to an icon.

![row-col-stack.png](..%2F..%2Fimgs%2Frow-col-stack.png)
:::info
Learn more about how to compose widgets with **[Row, Column & Stack](rows-column-stack.md)**.
:::

## Advanced Composition: Lists & Grids

As you become more familiar with using molecular widgets like **Row**, **Column**, and **Stack**, you can begin working with **Lists** and **Grids**. These widgets are specifically designed to handle large sets of data or dynamic content, making them essential for more complex layouts.

- **Lists:** While a `Column` is useful for stacking a few items vertically, a `ListView` supports scrolling and builds dynamically generated children as they enter the viewport. This makes it suitable for a chat, feed, or another collection that can grow beyond the screen.

:::tip[Lazy Loading]
Here, lazy loading refers to building and rendering list widgets as they approach the visible viewport. It does **not** automatically paginate a backend query or fetch another page of records. Configure query limits and pagination separately when the data source is large.
:::

- **Grids:** A GridView organizes items into a two-dimensional grid. It's perfect for displaying items like photos, products, or any other type of content that benefits from being presented in a grid format, making it visually appealing and easy to navigate.

:::info[List & Grids]
Learn about the advanced properties of **[Lists & Grids](list-grid.md)**.
:::

## Verify the layout

Run the page in **Test Mode** and check the layout at each supported screen size. Confirm that fixed groups fit without overflow, long collections scroll, stacked widgets overlap in the intended order, and a data-driven list does not request more backend records unless you configured pagination.
