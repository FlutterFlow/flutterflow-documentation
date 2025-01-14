---
title: Overview
sidebar_position: 1
keywords: [Widget, Widget Tree, Components, Page, UI Building Blocks, Atoms, Molecules, Atomic Design]
tags: [Widget, UI, Widget Tree]
---

# UI Building Blocks

When designing user interfaces in FlutterFlow, understanding the fundamental building
blocks—ranging from atomic to more complex structures—is crucial. The way UI is structured in
FlutterFlow closely resembles the concept of **Atomic Design**, a methodology that segments UI into
distinct levels of complexity.

In **Atomic Design**, we start with the smallest, indivisible components known as "atoms"—these are
your basic building blocks. From there, we combine these atoms to form "molecules," which then
come together to create "organisms" or larger functional units. By applying this hierarchical
structure to FlutterFlow, we streamline the UI development process, making it both efficient
and manageable.

Now, let’s explore how this structured approach plays out in FlutterFlow, from the simplest elements
to the creation of full-fledged interfaces:

- **Atoms**
    - These are the fundamental building blocks that serve as the foundational elements of the UI.
    - **Example:** `TextField`, `Button`, `Icon`.
- **Molecules**
    - These are groups of atoms bonded together and are the smallest fundamental units of a
      compound. These form the basic building blocks of pages but can often be used on their own.
    - **Example:** `EmailSignInField` (which could include an `TextField` atom and an `Icon` atom).
- **Organisms**
    - These are groups of molecules joined together to form a relatively complex, distinct section
      of an interface.
    - Example: `LoginComponent` (which could include the `EmailSignInField` molecule, another
      similar `PasswordSignInField` molecule, and a `SubmitButton` atom).
- **Pages**
    - Pages are complete screens and represent the final visible output that users interact with.
      They are composed of smaller units that work together to provide a full experience,
      including all the necessary functionality and design elements.
    - **Example**: `SignInPage`

Now let's apply the above concepts to what we see in FlutterFlow as we create our first
[project](../projects/what-is-a-project.md).

## Pages

In FlutterFlow projects, a **Page** is essentially a new section or feature of your app that combines 
various UI elements to form a complete screen in the app. When you create a new project in 
FlutterFLow, an empty page called `HomePage` is the first thing you see on your canvas. 

How you define your pages defines the flow of the app and user experience for the user. For 
example, in our [**E-commerce Demo app**](https://bit.ly/ff-docs-demo-v1), after login, the user lands on `ProductListPage` which has a 
NavigationBar at the bottom that takes the user to different Pages in the app such as 
`ProfilePage`, etc. 

:::info
Learn more about creating a new [**Page**](pages/intro-pages.md) and using its [**Page Elements**](pages/page-elements.md) like AppBar, Drawer, etc.
:::

## Widgets

A Page usually contains a combination of widgets and components. 
![everything-widget.png](imgs%2Feverything-widget.png)

Let's talk about widgets first, 
which are the atomic elements or building blocks of the UI structure in FlutterFlow. 

Each widget can be thought of as an atom or a molecule, depending on its complexity and its parent-child
relationship. For example, an atomic widget (such as `TextField`) cannot hold a child element, but 
molecular widgets (such as `Column` or `Row`) can.

:::info
Learn more about the [**basic widgets**](widgets/intro-widgets.md) and how to [**compose widgets**](widgets/composing-widgets/rows-column-stack.md) to build more complex UI.
:::

## Components

In the idea of atomic design, components in FlutterFlow are similar to "organisms." These
organisms are made up of simpler parts called _atoms_ and _molecules_, or simply widgets, which 
together form useful and reusable parts of the user interface.

These components are designed to be reusable, meaning they can be utilized across different screens
and projects to provide consistent functionality and aesthetics without the need to recreate them
from scratch everytime.

:::info
Learn more about [**components**](components/intro-components.md) and [**how to use them**](components/using-components.md) in pages. 
:::


## Classes vs Instances

When you add a UI element to your page, you are utilizing widget **classes** and
creating **instances** of them.

For example, `Icon` is a **widget class**. When you use it in different parts of your application,
you're creating an **instance** of the `Icon` widget class and providing different values to it for
each use.

Think of classes as templates that outline the structure and features of
something you want to create multiple times. For instance, in our demo app [EcommerceFlow](https://bit.ly/ff-docs-demo-v1), we
have a reusable component called `ProductListCard` with specific characteristics such as image,
product information text, and actions it should perform when clicked. Here, we've essentially
created a **class**.

When you place this `ProductListCard` in different Pages of your app, each one you add is
an `instance`. For example, in the `ProductListPage`, we have created an **instance** called
`topSellingProductCard` for use in the Top Selling section. Similarly, in the
`CategoryProductListPage`, we've created an **instance** called `categoryProductCard`.

![Class-Instance.png](imgs/Class-Instance.png)

You can customize each **instance** of your component to perform different
actions or to fit different parts of your app, but they all start from the
template you created (**the class**). This means you only need to design the `ProductListCard`
once and then can reuse and adapt it as needed, simplifying your app development
process and ensuring consistency across your project.


