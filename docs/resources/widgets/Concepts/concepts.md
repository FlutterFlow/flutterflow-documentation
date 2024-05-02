---
title: Concepts
---
#
When building widgets and pages in FlutterFlow, it's important to understand what's
happening behind the scenes. Let's explore some key concepts that are beneficial
to know.
## Classes vs Instances

When you create UI elements for your app using the widget tree or through drag &
drop, you are utilizing widget classes and creating instances of them.

For example, `Icon` is a widget *class*. When you use it in different parts of
your application, you are creating an instance of the `Icon` widget class and
providing different values to it in each usage.

Think of classes as templates that outline the structure and features of
something you want to create multiple times. For instance, if you design an icon
button with specific characteristics—like size, color, and actions it should
perform when clicked—you've essentially created a class.

When you place this button in different parts of your app, each one you add is
an instance. You can customize each instance of your button to perform different
actions or to fit different parts of your app, but they all start from the
template you created (the class). This means you only need to design the button
once and then can reuse and adapt it as needed, simplifying your app development
process and ensuring consistency across your project.

FlutterFlow has already created a bunch of such template widget classes for you
that you can use in different places in your app with your own characteristics.

:::info [More about Built-in Widgets]
To know more about the built-in widgets, refer to the Widgets category & Built In Widgets section
:::

You can also create custom classes (called Components in FlutterFlow), where you
set the properties and behavior that you can reuse in multiple places of the
app.

:::info [More about Components]
To know more about components, refer here.
:::