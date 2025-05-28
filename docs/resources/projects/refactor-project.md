---
slug: refactor-project
title: Refactor Project
tags: [Refactor]
keywords: [FlutterFlow, Refactor Project, developer tools, large-scale edits, rename , key reference search, developer menu]
description: Learn how to refactor your project in FlutterFlow.
sidebar_position: 7
---

# Refactor Project

:::tip[PLANS]
Refactor Project feature is available on the **Standard** plan and higher. Check our [**pricing plans**](https://flutterflow.io/pricing).
:::

**Refactor Project** is a developer‑focused mode that opens your FlutterFlow project as a set of YAML files so you can perform large-scale edits in a single, consistent operation.

For example, if you want to use a custom data type from a Library and update all references, you don’t have to manually edit each page or component. With this mode enabled, you can update all references at once using a single refactor pass.

It makes managing large projects easier and more reliable. You can make changes across hundreds of references in just seconds, saving time and effort compared to manual edits. It also lets you preview changes and dismiss anything you don’t want to update.

:::tip[possible use cases]
- **Type Refactoring**: Rename a custom data type (e.g., `OrderDetails` → `OrderInfo`) across all bindings, forms, and logic in a single pass.
- **String Replacement**: Find and replace hardcoded (magic) strings like `"admin"`, `"true"`, or `"completed"` to improve clarity and maintainability.
- **Library Migration**: Replace a project-based custom data type (e.g., `UserProfile`) with its Library counterpart throughout the app without manually editing each reference.
- **Key Updates**: Update outdated keys—for example, replace all instances of `old_api_key` with the new `new_api_key` value.
- **Cleanup Unused Items**: Locate and remove unused fields or stale references (e.g., `oldFieldName`) from your YAML files to keep your project clean.
:::

:::info

You can refactor the project only if you're on a [**paid plan**](https://www.flutterflow.io/pricing).

:::

To refactor a project, go to **Toolbar > Developer Menu > Refactor Project**. You’ll need to commit any unsaved changes before entering the refactor view. This opens your project in a YAML-based editor, where you can search, edit, and replace values across multiple files.

You can also use **key reference** search by toggling the **key** icon—currently supported for data types, enums, pages, and components. Changes are color-coded: added lines appear in green, and removed lines appear in red. As you make changes, FlutterFlow provides inline YAML validation to help you catch and fix issues in real time.

When you're done, click **Commit** to save the changes. After that, test your app to make sure all widgets, actions, and bindings still work as expected.

:::tip
You can exclude any item from the replacement by right-clicking on it and selecting **Dismiss**.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Uy4bDoJSGEIJtm4an8G6?embed&show_copy_link=true"
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
