---
slug: overview
title: Overview
tags: []
description: Explore the essentials of data representation in app development, focusing on the use of variables in FlutterFlow.
sidebar_position: 0
---

# Overview
Data representation is a fundamental concept in app development. It refers to the methods and structures used to store and manipulate the data. The way data is structured can greatly influence how efficiently an app performs tasks.

## Variable

Data is often represented using variables. A variable is a named space in your app that holds a value that can change over time. In FlutterFlow, you can create variables using fields. It allows the storage of different types of data, such as numbers and strings, and more complex structures, like lists and maps.

![variable](../imgs/variable.avif)

### Scope of variable?

The scope of a variable is determined by where it is created. For instance, if it's created at the app level, it can be accessed throughout the app. However, a variable created at the page level can only be accessed on that page.

### Where are they used?

Variables are used in practically all areas of the app, from the user interface to the functionality of the app. They can store user inputs, hold temporary values for calculations, or store data fetched from a server. They are integral to managing the state of the app and controlling the flow of data.

### Creating a variable

To create a variable, start by defining its name and data type. If it's going to contain a list, you can specify that. Certain variables, such as page state and component state variables, are non-nullable by default, meaning they must contain a value. After defining the variable, you can assign a value to it.

Learn more about creating [app state variables](app-state.md), [page state variables](#), and [component state variables](#).

### Setting and using variables

You can set the value of variables using [actions](#) in FlutterFlow. For instance, when a button is clicked, you can set a variable to a certain value. Variables can be accessed to control the behavior of UI components, such as visibility, text content, and styling. For example, a text widget can display the value of a variable.

Here are examples of setting and using an app state variable ([update](app-state#update-app-state-variable) and [use](app-state#use-app-state-variable)), as well as a page state variable ([set](../../intro/quickstart#42-update-state-variable) and [use](../../intro/quickstart#41-add-state-variable)).

## Data types

Data types are used to define the kind of data that variables can store and manipulate within your app. Managing data types correctly is crucial for ensuring that your app functions as intended, particularly when handling user inputs, storing data, and interacting with databases.

:::info

Learn more about data types [**here**](data-types.md).

:::

## Data mutability

All variables in FlutterFlow are mutable. This means you can change their values at runtime based on user interactions or other events in your app. FlutterFlow also supports immutable data, such as [Constants](constants.md) that cannot be changed once they have been set.

## Global data

Global data are accessible from anywhere within the app. They are helpful, especially when the data is required frequently or by various components or pages. In FlutterFlow, they are available as [Global Properties](global-properties.md).