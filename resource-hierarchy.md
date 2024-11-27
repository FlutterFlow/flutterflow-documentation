---
slug: /flutterflow-ui/resource-hierarchy
title: Resource Hierarchy Overview
description: Explore the Resource Hierarchy Overview to understand the correlation between traditional Flutter app components and their equivalents in FlutterFlow.
tags: [Resource Hierarchy, FlutterFlow, Project Management]
sidebar_position: 5
keywords: [Resource Hierarchy, FlutterFlow, Project Management]
---


# Resource hierarchy overview

This guide aims to help you understand the structure and elements of a typical FlutterFlow project. It will walk you through some important parts of the app, from the overall project down to individual design elements, explaining their purpose and how they relate to traditional Flutter app components.

## FlutterFlow App Parts

The diagram below illustrates how a FlutterFlow app is structured.

![FlutterFlow app part.avif](imgs/ff-app-part.avif)

1. **Project**: Represents the overall application you are building in FlutterFlow. It encompasses all the other elements listed below and serves as the container for your entire app development effort within FlutterFlow. Learn more about creating a project [here](../../resources/projects/how-to-create-find-organize-projects.md#how-to-create-a-project).
2. **Page**: Refers to individual screens within the FlutterFlow project. Each page represents a part of the user interface where users can interact with the app. Multiple pages collectively make up the complete user interface of your application. Learn more about pages in FlutterFlow [here](../../resources/ui/pages/intro-pages.md#creating-a-page).
3. **Built-in-widgets**: These are pre-designed widgets provided by FlutterFlow that you can use to build your app’s user interface. Built-in widgets simplify the development process by offering common UI elements such as buttons, text fields, sliders, etc.
4. **Component**: A component in FlutterFlow is a reusable UI block that can be used across different pages within the project. Components are useful for maintaining consistency and reducing redundancy in the app design, as the same component (like a custom dialog box) can be inserted wherever needed. Learn more about creating a component [here](../../resources/ui/components/intro-components.md).
5. **Design System**: This refers to a set of standards for design within your FlutterFlow project. A design system in FlutterFlow includes predefined styles that ensure visual consistency throughout the app. Learn more about design system [here](../../ff-concepts/design-system/design-system.md).

## Flutter to FlutterFlow

If you are coming from Flutter, it is beneficial for you to understand the Flutter to FlutterFlow mapping. The diagram below illustrates the correlation between traditional Flutter app components and their equivalents within FlutterFlow. 

![Flutter to FlutterFlow app parts](imgs/flutter-to-flutterflow.avif)

1. **MyApp to Project**: In Flutter, `MyApp` typically represents the root of your application, where you set up routes and other global configurations. In FlutterFlow, the equivalent is the "Project," which encompasses the entire application you are building, including its configurations and settings. Learn more about creating a project [here](../../resources/projects/how-to-create-find-organize-projects.md#how-to-create-a-project).
2. **MyPage to Page**: `MyPage` in Flutter represents a specific screen in the app. Similarly, In FlutterFlow, each "Page" corresponds to a screen, where you build the layout and functionality specific to that page of the project. Learn more about pages in FlutterFlow [here](../../resources/ui/pages/intro-pages.md#creating-a-page).
3. **Column, Button, Text to Built-in widgets**: In FlutterFlow, widgets are categorized under "Built-in widgets," which users can drag and drop onto their canvas to build the UI. Learn more about widgets [here](../../resources/ui/overview.md#widgets).
4. **Custom widget to Component**: `CustomWidget` in Flutter indicates user-defined widgets that serve specific functions not covered by built-in widgets. FlutterFlow translates this into "Component" allowing you to create and use custom components within your projects. Learn more about creating a component [here](../../resources/ui/components/intro-components.md).
5. **Theme/style constants to Design System**: In Flutter, theme and style constants are used to ensure consistent styling across an app. FlutterFlow uses a "Design System" to manage and apply uniform styles and themes throughout the application. Learn more about design system [here](../../ff-concepts/design-system/design-system.md).