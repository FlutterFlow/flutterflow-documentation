---
title: Pages
---

In FlutterFlow, **Pages** represent individual screens within your app. Each
page is
a container for various UI elements and widgets that collectively define the
complete interface and functionality for a specific part of your app.

When you
create a new page in FlutterFlow, you're essentially designing a new section or
feature of your app, whether it be a login screen, a profile page, or a settings
menu.

Here's how pages work in FlutterFlow:

#### Structure and Layout

Each page can be structured using layout widgets like
Rows, Columns, and Stacks, which help organize the other widgets on the page.
This organization is crucial for creating intuitive and user-friendly
interfaces.

#### Navigation

Pages in FlutterFlow are also the main units of navigation. You
design your app's flow by linking pages together through navigation widgets,
like buttons or menu items, that can take users from one page to another. This
makes it possible to build complex multi-page apps with varying functionalities.

#### Interactivity

By integrating interactive widgets, like buttons and form
elements, you can make each page responsive to user inputs, leading to a dynamic
user experience where actions on one page can lead to changes on another or
alter the overall app behavior.

## Behind a FlutterFlow Page

In FlutterFlow, each page you create is fundamentally structured using a
**Scaffold**, which is
a [widget from Flutter](https://api.flutter.dev/flutter/material/Scaffold-class.html)
that provides the basic material design
visual layout structure. The Scaffold widget offers a consistent framework for
each page, allowing you to define and organize its structure, including the
header (AppBar), body, floating action buttons, drawers, and other typical page
components. In FlutterFlow, you will find these page widgets under Page
Elements.

:::tip[Generated Code]

[See how](../generated-code.md) FlutterFlow converts your page into Flutter
code
:::

Here's how the Scaffold contributes to page design in FlutterFlow:

#### AppBar

The Scaffold allows you to easily include an AppBar at the top of the page,
which can house the title, navigation controls, and other actions.

#### Floating Action Button (FAB)

The Scaffold provides a specific spot for a FAB, which is used for a primary
action on the page, such as adding a new item or composing a message.

#### Drawer & End-Drawer

You can also include side menus (drawers) that slide in from the edges,
typically used for navigation links or additional settings.

Parameters
Scaffold / properties Properties of pages, app bar + nav bar

## Page state

## Page lifecycle

## Navigation / routing	
	
