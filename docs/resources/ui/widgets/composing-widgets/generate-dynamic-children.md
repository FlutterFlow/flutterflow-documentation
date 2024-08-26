---
title: Generate Dynamic Children
sidebar_position: 3
---

# Generate Dynamic Children

Widgets capable of handling multiple child widgets have an additional functionality called 
Generate Dynamic Children that helps you generate multiple child widgets from a `List` 
variable.

This is particularly useful when you are retrieving data from an API call, Firebase Query, or a 
State variable that holds a List of items.

Some of the widgets that can handle multiple children include **[Column, Row, Stack](rows-column-stack.md), [ListView, GridView](list-grid.md),** and **[PageView](../../../../ff-concepts/navigation-routing/special-page-navigation/pageview-widget.md)**.

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
        src="https://demo.arcade.software/UA9r3lLaoGsTmO3oulQ2?embed&show_copy_link=true"
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

The value is stored in a variable (in this example, `allCategoriesList`) and can be used to populate any scrollable view. In our example, we populate the `ListView` widget, which creates multiple instances, each holding a Column with a circular Container and Text. 

:::tip[What are Instances? ]
Learn about **[Instances](../../overview.md#classes-vs-instances)** and how it compares with **Classes** in this 
[**document**](../../overview.md#classes-vs-instances).
:::

To make changes, you need to **modify only the first child** and set the variable sources to the first 
child widgets. These changes will be applied to all children widgets in the `ListView`. The number of children will match the length of the List variable unless you have set a limit in the **Max Items** option under the **Generating Dynamic Children** tab.

Let's see a quick demo to set the variable source of the first child widgets: 

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/mOu9z4uYLBdBRmDqi4Jz?embed&show_copy_link=true"
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

