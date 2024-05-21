---
title: Overview
sidebar_position: 1
---

# Components

Components in FlutterFlow are reusable elements you design once and utilize throughout your app
to save time, ensure consistency, and simplify maintenance.

Components help in the following ways:

- **Consistency:** Components provide a consistent look and behavior, reducing the likelihood of
  discrepancies that can occur when the same UI elements are recreated multiple times.

- **Centralized Updates:** By creating a component once and reusing it across
  different parts of your app, you ensure that any design or functionality changes are made in
  one place. When that component is updated, all instances of that component across the
  app automatically reflect those changes. This significantly reduces the effort required to
  maintain and update the app.

  :::tip[CLasses vs Instances]
  Learn more about **[Classes and their Instances](..%2Foverview.md)** and what they mean in
  FlutterFlow.
  :::

- **Error Reduction:** Since components reduce design duplication, the risk of errors
  decreases. Fixing an issue in a component means it is fixed everywhere, leading to fewer bugs and
  inconsistencies.

- **Scalability:** As your app grows, maintaining a DRY codebase through components makes it easier
  to scale. Adding new features or modifying existing ones becomes more straightforward and less
  prone to introducing errors.
  :::tip[DRY PRINCIPLE]
  The **DRY (Don't Repeat Yourself)** principle is a software development concept that emphasizes
  the
  importance of reducing repetition within code and design.
  :::

Leveraging components effectively helps you build a consistent, efficient, and maintainable app.

## Types of Components in FlutterFlow

- **Built-in Widgets:** FlutterFlow includes a variety of built-in pre-defined widgets that
  serve as ready-made components, such as the `CreditCard` or `Signature` widget. These are
  out-of-the-box solutions provided by FlutterFlow that can be directly integrated into any project
  to offer specific functionalities.

- **User-Defined Components:** Users can also build their own components by assembling multiple
  widgets using FlutterFlow’s drag-and-drop interface. This method involves strategically
  positioning atomic widgets such as `TextField`, `Button`s, or `Image`s, etc within the molecular
  widgets like `Row`, `Column`, or `Stack` to create a combined widget that serve a specific
  function, like a `LoginComponent` or a `SearchBar`.

- **Custom Widgets:** For scenarios where more complex functionalities are required, FlutterFlow
  allows users to develop their own Custom Widgets. This involves writing Flutter code from
  scratch, offering the highest level of customization and flexibility.

- **Themed Widgets:** Themed widgets can be reused across your app, making it easy to update styles
  universally. If you decide to change any properties, such as color schemes or fonts, you can
  update the theme widget instead of modifying each widget individually.

## Common Use-cases

Components can be used in various scenarios to accelerate your app development process. Here are
some common use-cases.

1. Design a **standard button once** and reuse it across multiple screens to maintain a cohesive
   look.

2. Utilize components for **card designs** frequently used in your app, such as product cards, user
   profiles, or news articles.

3. **Standardize input forms** for tasks like user registration, login, or feedback collection,
   ensuring
   a consistent user experience.

4. Design **pop-up messages or dialogs** that match the overall theme of your app, enhancing visual
   consistency.

5. Build interactive elements such as **custom sliders, ratings, or progress bars**, and use them
   across various parts of your app.

6. Design sections of a screen that are frequently repeated, such as testimonials, image galleries,
   or feature highlights, and reuse them to maintain a cohesive layout.

Here's an example of all the widely used components used in the EcommerceFlow demo app.
// Image will be added once all components are built in project

