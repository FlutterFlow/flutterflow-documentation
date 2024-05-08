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
`Rows`, `Columns`, and `Stacks`, which help organize the other widgets on the page.
This organization is crucial for creating intuitive and user-friendly
interfaces.

#### Navigation

**Pages** in FlutterFlow are also the main units of navigation. You
design your app's flow by linking pages together through navigation widgets,
like _buttons_ or _menu items_, that can take users from one page to another. This
makes it possible to build complex multi-page apps with varying functionalities.

#### Interactivity

By integrating interactive widgets, like `Button` and `Form
Elements`, you can make each page responsive to user inputs, leading to a dynamic
user experience where actions on one page can lead to changes on another or
alter the overall app behavior.

## Behind a FlutterFlow Page

In FlutterFlow, each page you create is fundamentally structured using a
**Scaffold**, which is
a [widget from Flutter](https://api.flutter.dev/flutter/material/Scaffold-class.html)
that provides the basic material design
visual layout structure. The `Scaffold` widget, or in FlutterFlow often referred to as a Page,
offers a consistent framework for
each page, allowing you to define and organize its structure, including the
**Header** (`AppBar`), **Body**, **Floating Action Button, Drawer,** and other typical page
components. In FlutterFlow, you will find these page elements under **Page
Elements**.

:::tip[Generated Code]

[See how](../generated-code.md) FlutterFlow converts your page into Flutter
code
:::

Here's how the `Scaffold` contributes to page design in FlutterFlow:

**AppBar** : Scaffold allows you to easily include an `AppBar` at the top of the
page,
which can house the title, navigation controls, and other actions.

**Floating Action Button (FAB)**: An action button that is commonly used for
primary actions on the screen, like adding a new contact or composing a message.

**Drawer & End-Drawer**: A slide-in menu that allows navigation to different views within the app,
accessible from the `AppBar` or by swiping from the side.

**SnackBar:** A temporary, lightweight message that appears at the bottom of the screen.

**BottomNavigationBar:** A bottom bar that can display multiple items for navigation purposes.

**Body:** The main content area where you place your widgets. In FlutterFlow,
you
won't find a section explicitly labeled "Body". However, the widget tree that
you assemble under your "PageNameWidget" essentially functions as the body of the
page. This is where you add and organize all the interactive and static elements
that make up the user interface of that particular page.

![body-page.png](..%2Fimgs%2Fbody-page.png)

## Navigation / Routing

Navigation in FlutterFlow involves moving between different pages. This is
handled through routing, where each page is identified by a unique route.
Navigation can be programmed to happen on events like button clicks, leading to
actions such as pushing a new route (opening a new page) or popping a route (
returning to a previous page). FlutterFlow simplifies the routing process,
allowing you to visually design the navigation flow of your app.

Learn more about the [navigation actions](how-tos.md#navigation) in FlutterFlow.

## Page Parameters

Parameters in FlutterFlow are used to pass data between pages. When navigating
from one page to another, you can send parameters to configure the destination
page based on the data from the current page. This is useful for tasks like
passing a user ID to a profile page or specific details to a detailed view page.

To manage creation and updation of Page parameters, [see here](how-tos.md#page-parameters)

## Page state

**Page state** refers to the information that a page tracks about its current
condition or the data it displays. This can include things like which tabs are
active, the contents of a form, or any user interactions. Managing state is
crucial for dynamic pages that interact with user inputs or load varying data.

To manage creation and updation of Page State variables, [see here](how-tos.md#page-state)

## Page Lifecycle

In FlutterFlow and Flutter, understanding the page lifecycle is crucial as it
involves the stages a page goes through from creation to disposal. Recognizing
these stages is essential for managing resources and data effectively.

Let's delve into the key moments in the page lifecycle:

* **Initialization**: During initialization, you should set up
  controllers or initialize the initial state of the page. This is where you may
  set initial page states or fetch initial data from an API.
* **Rendering**: The rendering stage occurs when the page is built and displayed
  to
  the user. This is where the UI elements are created and arranged according to
  the current state of the page.
* **Updating**: The updating stage occurs when data changes, and the page needs
  to
  reflect those changes. This may involve rebuilding the UI to display updated
  information, such as when the user interacts with the page or when new data is
  received from an API.
* **Disposal**: The disposal stage occurs when the page is closed or removed
  from the
  screen. This is where resources associated with the page, such as controllers,
  event listeners, or subscriptions, need to be released to free up memory and
  prevent memory leaks.

FlutterFlow only exposes the [OnPageLoad Action Trigger](how-tos.md#page-action-triggers) to allow
you to set up
any initial logic of the page and also allows you to rebuild the page on data
changes. [See the Update Page State action](how-tos.md#update-page-state-action).
The rest of the lifecycle logic is handled internally by FlutterFlow. 






	
