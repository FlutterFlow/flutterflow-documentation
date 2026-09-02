---
title: Generate Dynamic Children
sidebar_position: 3
description: >-
  Widgets capable of handling multiple child widgets have an additional
  functionality called Generate Dynamic Children that helps you generate
  multiple child widgets from a variable.
tags:
  - FlutterFlow
  - Resources
  - UI
keywords:
  - Generate Dynamic Children
  - Composing Widgets
  - Widgets
last_verified: 2026-09-02
---
# Generate Dynamic Children

Widgets capable of handling multiple child widgets have an additional functionality called
Generate Dynamic Children that helps you generate multiple child widgets from a `List`
variable.

This is particularly useful when you are retrieving data from an API call, Firebase Query, or a
State variable that holds a List of items.

Some of the widgets that can handle multiple children include **[Column, Row, Stack](rows-column-stack.md), [ListView, GridView](list-grid.md),** and **[PageView](../../../../ff-concepts/navigation-routing/special-page-navigation/pageview-widget.md)**.

## Generate children from a list

1. Add one child to the multi-child widget. FlutterFlow uses the first child as the template for every generated item.
2. Select the parent widget and open **Generate Dynamic Children** in the Properties Panel.
3. Select **Generate Children from Variable**.
4. Enter a descriptive **Variable Name** for the current item, then set **Value** to a variable whose value is a list.
5. Optional: set **Max Items** to cap the number of generated children. Leave it empty to use the full list.
6. Select **Save**.
7. In the template child, bind text, images, actions, or component parameters to the current item using the variable name you created.

:::warning
If the parent already has multiple child widgets, enabling dynamic children keeps the first child as the template and removes the additional children. Move any content you need into the first child before confirming.
:::

In the following example, we will use an `AppState` called `categoryList` that holds a List of
Product Categories and set the variable to the categoryList widget that is a ListView.

:::note
In the demo app, we have predefined custom `DataTypes`. One such DataType is "**Category**," which includes the fields `categoryImg` and `categoryName`. In our App State, **categoryList** is a `List<Category>` that holds multiple Category objects. We use this list variable as the value source for our `ListView` widget.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/UA9r3lLaoGsTmO3oulQ2?embed&show_copy_link=true" title="Generate Dynamic Children interactive tutorial"
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

The value is stored in a variable (in this example, `allCategoriesList`) and can be used to populate a compatible multi-child widget. In our example, the `ListView` creates one instance of the template for each included list item. Each instance contains a Column with a circular Container and Text.

:::tip[What are Instances? ]
Learn about **[Instances](../../overview.md#classes-vs-instances)** and how it compares with **Classes** in this
[**document**](../../overview.md#classes-vs-instances).
:::

To make changes, modify the template child and its descendants. Those changes apply to every generated instance. The number of children matches the list length unless **Max Items** sets a lower limit. An empty list produces no generated children.

Let's see a quick demo to set the variable source of the first child widgets:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/mOu9z4uYLBdBRmDqi4Jz?embed&show_copy_link=true" title="Generate Dynamic Children interactive tutorial"
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

## Verify generated children

Run the page in **Test Mode** with an empty list, a one-item list, and a list longer than **Max Items**. Confirm that the empty state is handled, each rendered child uses the corresponding current item, actions operate on that same item, and the item count respects the limit.
