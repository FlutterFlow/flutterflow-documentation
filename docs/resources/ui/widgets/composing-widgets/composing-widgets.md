---
title: Composing Widgets
sidebar_position: 0
---

# Composing Widgets

In FlutterFlow, creating a complex user interface often involves combining simpler widgets into more intricate layouts. While atomic widgets like **Text, Button, Image**, and **Icon** form the building blocks of your UI, you’ll use molecular widgets like **Row**, **Column**, and **Stack** to arrange these atomic widgets into a structured layout. 

As you grow more comfortable with these, you can advance to using **Lists** and **Grids** for even more dynamic and complex compositions.

## Molecular Widgets: Row, Column, and Stack
To start composing more sophisticated interfaces, FlutterFlow provides essential molecular widgets like **Row, Column**, and **Stack**. These widgets allow you to control the arrangement of atomic widgets within your app.

- **Row:** This widget aligns its children horizontally in a single line, from left to right. It's useful for creating layouts where elements need to be placed side by side, such as icons with labels or buttons in a toolbar.

- **Column:** This widget aligns its children vertically, from top to bottom. It's perfect for creating lists of items or laying out sections of a page vertically.

- **Stack:** This widget allows for overlapping widgets by placing them on top of each other. It’s ideal for creating layered effects, like placing text over an image or adding a badge to an icon.

![row-col-stack.png](..%2F..%2Fimgs%2Frow-col-stack.png)
:::info
Learn more about how to compose widgets with **[Row, Column & Stack](rows-column-stack.md)**.
:::

## Advanced Composition: Lists & Grids

As you become more familiar with using molecular widgets like **Row**, **Column**, and **Stack**, you can begin working with **Lists** and **Grids**. These widgets are specifically designed to handle large sets of data or dynamic content, making them essential for more complex layouts.

- **Lists:** While a `Column` is useful for stacking a few items vertically, a `ListView` is designed to handle potentially infinite items by allowing the content to scroll. This makes it ideal for things like a chat app, news feed, or any list that can grow beyond the screen size. One of the key advantages of using a ListView is also its built-in support for **lazy loading**. 

:::tip[Lazy Loading]
Lazy loading means that the `ListView` only builds and renders the items that are currently visible on the screen. As the user scrolls, `ListView` dynamically loads additional items just in time. This significantly improves performance, especially when dealing with long lists of data, by conserving memory and processing resources.
:::

- **Grids:** A GridView organizes items into a two-dimensional grid. It's perfect for displaying items like photos, products, or any other type of content that benefits from being presented in a grid format, making it visually appealing and easy to navigate.

:::info[List & Grids]
Learn about the advanced properties of **[Lists & Grids](list-grid.md)**. 
:::