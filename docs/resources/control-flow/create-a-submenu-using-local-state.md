---
keywords: ['menu', 'submenu', 'local state']
slug: /create-a-submenu-using-local-state
title: Create a Submenu Using Local State
---

# Create a Submenu Using Local State

This guide demonstrates how to implement a toggleable submenu in a FlutterFlow project using local state and conditional visibility logic.

Follow the steps below to create a Submenu using Local State:

   1. **Create a Local State Variable**  
      - Add a boolean local state variable to your page.  
      - This variable will control the visibility of the submenu (`true` = open, `false` = closed).

   2. **Place the Submenu Inside a Stack**  
      - Use a `Stack` widget to layer the submenu on top of the page content.  
      - Position the submenu where you want it to appear.

   3. **Control Visibility with Local State**  
      - Apply a visibility condition on the submenu widget using the boolean state variable.  
      - When the value is `true`, the submenu will be shown; when `false`, it will be hidden.

   4. **Add Toggle Action to Menu Icon**  
      - On the `onTap` event of the menu icon button, add a conditional action:  
      - If the state variable is `false`, set it to `true`.  
      - If it is `true`, set it to `false`.

   5. **Close Menu When Item is Tapped**  
      - After triggering any submenu action, set the local state variable to `false` to close the menu.

   6. **Dismiss Menu When Tapping Page Background**  
      - Wrap the main page content in a `GestureDetector`.  
      - On tap, set the local state variable to `false` to close the menu when the user taps outside it.

:::tip
The `Stack` widget allows placing widgets on top of each other, which is essential for layering the submenu over other UI elements.
:::

:::info[Examples]
- [Project Example](https://app.flutterflow.io/project/sub-menu-840l5q)
- [Run Mode Preview](https://app.flutterflow.io/run/LfzBGTaef8WldndHa2x4)
:::

![](imgs/20250430121319778896.gif)