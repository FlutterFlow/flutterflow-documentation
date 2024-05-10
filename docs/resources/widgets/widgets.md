---
title: Overview
---

# What's a widget?


In FlutterFlow, a widget is like a building block used to create the user
interface of your app. You can think of it as a UI element that you can use and
customize to build different parts of your app's screen, such as buttons, text
fields, images, and more.

Widgets can be combined and nested to create complex layouts and interactive
elements, making it easier to design your app visually. FlutterFlow provides a
drag-and-drop interface, so you can place these widgets on your app's canvas and
adjust their properties through the interactive interface, without having to
write a lot of code.

## Everything's a widget

FlutterFlow is built with Flutter, Google's popular framework for building
cross-platform apps from a single codebase. In Flutter, _everything is a widget_
—every part of the app's UI is built using widgets that handle layout, styling,
and interaction. FlutterFlow leverages a similar concept by providing a visual
editor where you can create and configure these widgets.

![everything-widget.png](imgs%2Feverything-widget.png)

## Widget categories

In FlutterFlow, we have the following categories of widgets:

- Layout Elements
- Base Elements
- Page Elements
- Form Elements

### Layout Elements

These widgets help organize the structure and layout of your app. They determine
how other widgets are arranged and displayed on the screen. 

Common layout elements include:

| Widget   | Description                                                                                                                                                  | Example                                                    |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| **Row**  | Arrange its child widgets horizontally                                                                                                                       | <img src="/img/widgets/row-example.png" width="300px" />   |
| **Column** | Organizes its child widgets vertically.                                                                                                                      | <img src="/img/widgets/col-example-1.png" width="100px" /> |
| **Stack**    | Layers its child widgets on top of each other, allowing for overlapping elements.                   | <img src="/img/widgets/stack-example.png" width="400px" /> |
|      **Container**        | Provides a box model for a single child widget, with optional padding, margins, borders, box shadow and background color.   | <img src="/img/widgets/cont-example.png" width="400px" />  |

_Check out the builder for the entire list_

### Base Elements

Base elements are the fundamental building blocks for creating the visual and
interactive components of your app. 

Examples include:

| Widget      | Description                                                                                          | Example                                                     |
|-------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Text**        | Displays a string of text and allows you to customize fonts, sizes, and styles.                      | <img src="/img/widgets/text-example.png" width="200px" />   |
| **Image**       | Displays image.  | <img src="/img/widgets/img-example.png" width="200px" />    |
| **Icon**        | Displays icon.                                                                                       | <img src="/img/widgets/icon-example.png" width="200px" />   |
|   **Button**         | A clickable widget that can trigger actions. It can be styled with different colors, borders, and text | <img src="/img/widgets/button-example.png" width="200px" /> |

_...and more._

### Page Elements

In FlutterFlow, the **Page Elements** category comprises widgets like `AppBar`, `FAB`,
`Drawer`, and `End Drawer`, which are essential for structuring pages and
facilitating navigation throughout the app.

:::note
To learn more about **Page Elements** and how to use them, refer to [this doc](#)
:::


### Form Elements

Form elements are widgets specifically used for creating forms where users can
enter data. These are crucial for tasks like user registration, login, and data
entry. 

Examples include:

| Widget           | Description | Example                                                |
|------------------|-------------|--------------------------------------------------------|
| **Text Field**   |  Allows users to enter text. | <img src="/img/widgets/txtfield-ex.png" width="300" /> |
| **Radio Button** | Allows users to select one option from a set. | <img src="/img/widgets/radio-ex.png" width="150" />    |
| **Dropdown**     | Provides a menu with multiple options where users can select one. | <img src="/img/widgets/dropdwn-ex.png" width="300" />  |


Each category in FlutterFlow serves distinct purposes, helping you design both
the appearance and functionality of your app more efficiently.

## Widget Tree

The widget tree in FlutterFlow, organizes the relationships between all the
widgets in your app's user interface. Each widget can contain other widgets
inside it, known as **children**, creating a nested
structure. For example, you might have a **Page** that contains a
Column widget, and inside that column, there are text widgets, button widgets,
and so on.

![widget-tree.png](imgs%2Fwidget-tree.png)
