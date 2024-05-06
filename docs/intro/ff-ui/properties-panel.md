---
slug: properties-panel
title: Properties Panel
tags: []
---
# Properties Panel

The Properties Panel enables you to modify the visual appearance and behavior of the widget and page. It provides access for specifying [Actions](#), setting up a [Backend Query](#), and adding [Animations](#) and [Documentation](#) to the chosen widget. When a page is selected, an option to add a [page state variable](#) also becomes available.

## Widget Properties

From here, you can customize the properties for the selected widget. Properties may vary based on the type of widget.

![widget-properties.avif](imgs/widget-properties.avif)

### 1. Widget name

Upon selecting a widget, its name is displayed on the properties panel. The default name for each widget corresponds to its type. For instance, if you select the `Container` widget, 'Container' becomes visible as its name. However, the name can be modified by using the edit icon located on the right.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/BgsrkEQ6WgcdHDaCtLqh?embed&show_copy_link=true"
        title="Sharing a Project with a User"
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

### 2. Create a component

From here, you can create a [component](#) using the selected widget.

### 3. Save as a template

From here, you can save the selected widget as a [template widget](#).

### 4. Save as a theme widget

From here, you can save the selected widget as a [theme widget](#).

### 5. Properties

In this tab, you can modify the properties of the selected widget. If no widget is selected, this panel will display the page's properties, i.e., [Scaffold](#) properties.

### 6. Actions

The Actions allow you to define what should happen when a user interacts with the app elements/widgets, such as by tapping on a button. Actions differ according to the widget selected (on some widgets, you can't apply any actions).

:::info

Learn more about adding actions [here](#).

:::

### 7. Backend Query

This tab allows you to define any backend queries that should be triggered when the widget appears on the screen. For example, you may want to load data from a database. Once the data is loaded, it becomes accessible to all widgets under this widget.

:::info

Learn more about adding a backend query [here](#).

:::

### 8. Generate Dynamic Children

The widgets that can handle multiple children widgets, such as `Column`, `Row`, and `ListView` have an additional tab called Generate Dynamic Children. It helps you to generate multiple child widgets from a [List](#) variable.

:::info

This is usually helpful when you are retrieving data from an API call.

:::

### 9. Animations

From here, you can apply animations to a widget.  Learn more about adding animations [here](https://docs.flutterflow.io/widgets-and-components/animations). 

### 10. Documentation and Semantic Labels

From here, you can add [documentation](#) and semantic labels for your widgets.

## Page Properties

From here, you can customize the properties for the selected page. Learn more about page properties [here](#).