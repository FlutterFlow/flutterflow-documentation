---
slug: /resources/data-representation
title: Overview
description: Explore the essentials of data representation in app development, focusing on the use of variables in FlutterFlow.
tags: [Data Representation, FlutterFlow, Variables]
sidebar_position: 0
keywords: [Data Representation, FlutterFlow, Variables, Data Types, Global Data, Encapsulation]
---

# Overview
Data representation is a fundamental concept in app development. It refers to the methods and structures used to store and manipulate the data. The way data is structured can greatly influence how efficiently an app performs tasks.

## Variable
In FlutterFlow, variables are key to managing dynamic data, ensuring your app remains interactive and responsive. They enable you to capture user inputs, track changes, and share data across different parts of your app.

:::info
Dig deeper into **[variables and variable scopes](variables.md)**.
:::

## Data types

Data types are used to define the kind of data that variables can store and manipulate within your app. Managing data types correctly is crucial for ensuring that your app functions as intended, particularly when handling user inputs, storing data, and interacting with databases.

:::info

Learn more about primitive and composite data types in this [**detailed guide**](data-types.md) and then create your own **[custom data type](custom-data-types.md)**.

:::

## Data mutability

All variables in FlutterFlow are mutable. This means you can change their values at runtime based on user interactions or other events in your app. FlutterFlow also supports immutable data, such as [**Constants**](constants.md) that cannot be changed once they have been set.

## Global Properties

Global properties in FlutterFlow are built-in variables that you can use across your app, but they cannot be created or modified by users. Learn how to leverage these [**predefined properties**](global-properties.md) to simplify common tasks.

## Encapsulation

Encapsulation is a key concept in object-oriented programming (OOP). It bundles the data (fields) and the methods (functions) to manipulate the data. It also limits direct access to some data to prevent accidental changes. This concept is essential in improving security and functionality by managing data access and modification.

### How Encapsulation is achieved in FlutterFlow

FlutterFlow supports the principles of encapsulation through its visual development environment. Let’s understand this with some examples:

1. **Custom Widgets and Components**: In FlutterFlow, you can create custom widgets or use built-in widgets that encapsulate specific functionalities. These widgets can include both logic and UI elements that are bundled together.

    For example, if you are creating a user profile page, you can create a custom component that includes the user's photo, name, and contact button. This component can be reused wherever a user profile needs to be displayed in the app, ensuring that changes to the profile layout or functionality are centralized within this widget.
    
2. **Backend Actions**: FlutterFlow allows you to define backend actions that can be called from different parts of your app. These actions can encapsulate complex logic, such as processing user input, interacting with databases, or calling external APIs.
    
    By defining such actions, you can manage how data is processed and passed around in your applications. This helps in maintaining a clear separation between the UI and business logic, which is a core principle of encapsulation.
    
### Benefits of Encapsulation in FlutterFlow

- **Reusability**: Encapsulated components are reusable across different parts of the application without requiring duplication of widgets.
- **Maintainability**: Changes to the application’s data handling or business logic can be made in a single place using action blocks rather than having to make widespread modifications across many actions.
- **Scalability**: Applications can grow more naturally and with less complexity when their components are well-encapsulated.