---
keywords: ['menu', 'sample', 'create']
slug: /create-sub-menu-with-local-state
title: Create a Sub Menu With Local State
---

# Create a Sub Menu With Local State

This guide demonstrates how to implement a toggleable sub-menu using a boolean local state variable in FlutterFlow.

> **Project Preview**  
> **Editor**: [https://app.flutterflow.io/project/sub-menu-840l5q](https://app.flutterflow.io/project/sub-menu-840l5q)  
> **Run Mode**: [https://app.flutterflow.io/run/LfzBGTaef8WldndHa2x4](https://app.flutterflow.io/run/LfzBGTaef8WldndHa2x4)

![Sub Menu Demo](../assets/20250430121319778896.gif)

## Overview

You will create a local state variable to control the visibility of the sub-menu. The value `true` means the menu is open, and `false` means it is hidden.

This implementation requires the **Stack** widget to overlay the menu correctly.

## Implementation Steps

### 1. Create a Local State Variable

- Add a **local state variable** of type **boolean**
- Default value: `false`

This variable will control whether the menu is visible.

### 2. Add the Sub Menu to Your UI

- Place the sub-menu where it best fits your design.
- Wrap the menu in a **Visibility** widget.
- Set the visibility condition to your local state variable.

> 💡 Use a **Stack** widget to ensure the menu overlays the main content properly.

### 3. Toggle Menu Visibility With the Menu Icon Button

- Add an **IconButton** to open/close the menu.
- On tap, add a conditional action:
  - If the local state variable is `false`, set it to `true`.
  - If it is `true`, set it to `false`.

### 4. Hide the Menu After Selecting an Item

- For each menu item:
  - Add your desired navigation or action.
  - After the action, set the local state variable to `false`.

### 5. Close the Menu When Tapping Outside

- Wrap your page’s main widget (usually the body) with a **GestureDetector**.
- On tap, set the local state variable to `false`.

This ensures the menu closes when users tap anywhere outside of it.

---

By following this structure, you can create a dynamic sub-menu that behaves like a typical mobile drawer or contextual menu, using FlutterFlow’s local state system.

