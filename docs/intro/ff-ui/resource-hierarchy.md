---
slug: resource-hierarchy
title: Resource Hierarchy Overview
tags: []
description: Explore the Resource Hierarchy Overview to understand the correlation between traditional Flutter app components and their equivalents in FlutterFlow.
---

# Resource hierarchy overview

Let’s understand the resource hierarchy with the help of the following diagram that illustrates the correlation between traditional Flutter app components and their equivalents within FlutterFlow. 

This diagram serves as a useful guide for developers transitioning from a traditional Flutter coding environment to a more visual development environment.

![ResourceHierarchy.avif](imgs/ResourceHierarchy.avif)

## 1. MyApp to Project

In Flutter, `MyApp` typically represents the root of your application, where you set up routes and other global configurations. In FlutterFlow, the equivalent is the "Project," which encompasses the entire application you are building, including its configurations and settings. Learn more about creating a project [here](../../resources/Projects/how-to-create-find-organize-projects#how-to-create-a-project).

## 2. MyPage to Page

`MyPage` in Flutter represents a specific screen in the app. Similarly, In FlutterFlow, each "Page" corresponds to a screen, where you build the layout and functionality specific to that page of the project. Learn more about pages in FlutterFlow [here](#).

## 3. Column, Button, Text to Built-in widgets

In FlutterFlow, widgets are categorized under "Built-in widgets," which users can drag and drop onto their canvas to build the UI. Learn more about widgets [here](#).

## 4. Custom widget to Component

`CustomWidget` in Flutter indicates user-created widgets that serve specific functions not covered by built-in widgets. FlutterFlow translates this into "Component" allowing you to create and use custom components within your projects. Learn more about creating a component [here](#).

## 5. Theme/style constants to Design System

In Flutter, theme and style constants are used to ensure consistent styling across an app. FlutterFlow uses a "Design System" to manage and apply uniform styles and themes throughout the application. Learn more about design system [here](#).