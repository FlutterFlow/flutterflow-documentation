---
title: Overview
sidebar_position: 1
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

Now let's the apply the above concepts to what we see in FlutterFlow as we create our first
project.

## Pages

In FlutterFlow, a **Page** is essentially a new section or feature of your app that combines 
various UI elements to form a complete screen in the app. When you create a new project in 
FlutterFLow, an empty page called HomePage is the first thing you see on your canvas. 

How you define your pages defines the flow of the app and user experience for the user. For 
example, in our E-commerce Demo app, after login, the user lands on ProductListPage which has a 
NavigationBar at the bottom that takes the user to different Pages in the app such as 
ProfilePage, etc. 


## Widgets

A Page usually contains a combination of widgets and components. 
![everything-widget.png](imgs%2Feverything-widget.png)

Let's talk about widgets first, 
which are the the atomic elements or building blocks of the UI structure in FlutterFlow. 

Each widget can be thought of as an atom or a molecule, depending on its complexity and its parent-child
relationship. For example, an atomic widget (such as `TextField`) cannot hold a child element, but 
molecular widgets (such as `Column` or `Row`) can.

This brings us to the concept of the **Widget Tree**. 

### Widget Tree
Widget Tree is a visual and structural representation of how widgets—atomic & molecular elements—organized within a **Page**. It outlines the parent-child relationships that define the layout and functionality of your UI, analogous to how atoms and molecules interact in atomic design.

:::info[WIDGET TREE BREAKDOWN]
![tree.png](imgs/tree.png)

The above diagram illustrates a widget tree for an `ExamplePage`. The page is
structured using a hierarchy of widgets that define its layout and functionality.

- **ExamplePage**: The root of the widget tree, representing the entire Page.
    - **Column**: Directly under the root, this widget organizes its child widgets vertically. It is
      the main layout widget for this Page.
        - **Container**: A molecular widget that contains another widget, providing padding,
          margins, borders, or color to its child.
            - **Text**: An atomic widget, this displays a string of text within the `Container`.
        - **Row**: A molecular widget that arranges its children horizontally. It contains multiple
          `Icon` widgets.
            - **Icon**: These are atomic widgets, each representing an `Icon` image. They are
              repeated here
              twice under the `Row`.
        - **Image**: An atomic widget placed directly under the `Column`, used here to display an
          image.
        - **Button:** An atomic widget also under the `Column`, used for user interaction.

Each widget in this tree plays a specific role in constructing the user interface, from basic
elements like `Text` and `Image` to layout structures like `Row`s and `Column`s that organize these
elements.

Here's how this widget tree would be represented in FlutterFlow:
![widget-tree-new.png](imgs%2Fwidget-tree-new.png)
:::

Understanding the widget tree is crucial for developers using FlutterFlow because it helps visualize
the composition of the application's interface. It shows how individual widgets (atoms) combine and
nest within each other to form more complex widgets (molecules and organisms) and ultimately
complete pages.

### Widget categories

In FlutterFlow, we have the following categories of widgets:

- [Layout Elements](#layout-elements)
- [Base Elements](#base-elements)
- [Page Elements](#page-elements)
- [Form Elements](#form-elements)

#### Layout Elements

These widgets help organize the structure and layout of your app. They determine
how other widgets are arranged and displayed on the screen.

Common layout elements include:

| Widget        | Description                                                                                                               | Example                                                    |
|---------------|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| **Row**       | Arrange its child widgets horizontally                                                                                    | <img src="/img/widgets/row-example.png" width="300px" />   |
| **Column**    | Organizes its child widgets vertically.                                                                                   | <img src="/img/widgets/col-example-1.png" width="100px" /> |
| **Stack**     | Layers its child widgets on top of each other, allowing for overlapping elements.                                         | <img src="/img/widgets/stack-example.png" width="400px" /> |
| **Container** | Provides a box model for a single child widget, with optional padding, margins, borders, box shadow and background color. | <img src="/img/widgets/cont-example.png" width="400px" />  |

Find the entire list on this [**index page**](/tags/layout-elements). 

#### Base Elements

Base elements are the fundamental building blocks for creating the visual and
interactive components of your app.

Examples include:

| Widget     | Description                                                                                                                            | Example                                                     |
|------------|----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Text**   | Displays a string of text and allows you to customize fonts, sizes, and styles.                                                        | <img src="/img/widgets/text-example.png" width="200px" />   |
| **Image**  | Displays image.                                                                                                                        | <img src="/img/widgets/img-example.png" width="200px" />    |
| **Icon**   | Displays icon.                                                                                                                         | <img src="/img/widgets/icon-example.png" width="200px" />   |
| **Button** | A widget meant to trigger actions and take users to another flow in the app. It can be styled with different colors, borders, and text | <img src="/img/widgets/button-example.png" width="200px" /> |

Find the entire list on this [**index page**](/tags/base-elements).

#### Page Elements

In FlutterFlow, the **Page Elements** category comprises of widgets like `AppBar`, `FAB`,
`Drawer`, and `End Drawer`, which are essential for structuring pages and
facilitating navigation throughout the app.

:::note
Learn more about **[Page Elements](pages/page-elements.md)** and how to use them.
:::

#### Form Elements

Form elements are widgets specifically used for creating forms where users can
enter data. These are crucial for tasks like user registration, login, and data
entry.

Examples include:

| Widget           | Description                                                       | Example                                                                        |
|------------------|-------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **Text Field**   | Allows users to enter text.                                       | <img src="/img/widgets/txtfield-ex.png" width="300" alt="Textfield Example" /> |
| **Radio Button** | Allows users to select one option from a set.                     | <img src="/img/widgets/radio-ex.png" width="150" alt="Radio Button Example" /> |
| **Dropdown**     | Provides a menu with multiple options where users can select one. | <img src="/img/widgets/dropdwn-ex.png" width="300" alt="Dropdown Example" />   |

Find the entire list on this [**index page**](/tags/form-elements).

Each category in FlutterFlow serves distinct purposes, helping you design both
the appearance and functionality of your app more efficiently.

## Components

In the idea of atomic design, components in FlutterFlow are similar to "organisms." These
organisms are made up of simpler parts called _atoms_ and _molecules_, or simply widgets, which 
together form useful and reusable parts of the user interface.

These components are designed to be reusable, meaning they can be utilized across different screens
and projects to provide consistent functionality and aesthetics without the need to recreate them
from scratch everytime.

### Types of Components in FlutterFlow:

- **Built-in Widgets:** FlutterFlow includes a variety of built-in widgets that serve as ready-made
  components, such as the `CreditCard` or `Signature` widget. These are out-of-the-box solutions 
  provided by FlutterFlow that can be directly integrated into any project to offer specific functionalities.

- **User-Defined Components:** Users can also build their own components by assembling multiple
  widgets using FlutterFlow’s drag-and-drop interface. This method involves strategically
  positioning atomic widgets such as `TextField`, `Button`s, or `Image`s, etc within the molecular
  widgets like `Row`, `Column`, or `Stack` to create a combined widget that serve a specific 
  function, like a `LoginComponent` or a `SearchBar`.

- **Custom Widgets:** For scenarios where more complex functionalities are required, FlutterFlow
  allows users to develop their own Custom Widgets. This involves writing Flutter code from
  scratch, offering the highest level of customization and flexibility.

Components, whether built-in, user-created, or custom, are essential for developing UI
efficiently as they allow developers to build complex UIs quickly, ensure consistency across
the app, and facilitate easier maintenance and updates by isolating functionalities into
manageable units.

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


