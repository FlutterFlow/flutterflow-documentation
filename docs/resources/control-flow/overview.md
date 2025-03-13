---
slug: /resources/control-flow-overview
title: Overview
tags: [Control Flow]
keywords: [control flow, programming, logic, app development, user inputs, event handling, software engineering, coding, programming constructs, software logic]
toc_max_heading_level: 5
sidebar_position: 1
---

# Control Flow & Logic

Control flow in programming refers to the order in which individual statements, instructions, or
function calls are executed or evaluated. Proper control flow is crucial for determining how your
app responds to user inputs and events. Here are some key elements:

* **[Conditional Flows:](concepts.md)**
  These include `if`, `else if`, and `else` flows that allow your app to make decisions 
  based on
  certain conditions. For example, you might check if a user is logged in and then show different
  content based on their authentication status.

* **[Loops:](functions/loops.md)**
  Loops allow your app to repeat a sequence of logic multiple times. 
  This is useful for tasks like iterating through a list of items or retrying a failed operation.

* **[Event Handling:](functions/action-flow-editor.md#action-triggers)**
  In certain cases, you will execute functions that are triggered by specific events such as user
  interactions (e.g., taps, swipes) or system events (e.g., page load, on focus change).
  Understanding how to handle such events effectively ensures that your app reacts appropriately to
  user interactions or events.

**Logic** or **Functions** refer to the core operations and behaviors that determine how an app 
responds to user actions and interacts with data. This could include: 

* **Business Logic:** This is the part of the app that manages the rules and processes of the real 
world. For example, in an e-commerce app, it handles tasks like processing orders, calculating prices, and managing inventory.

* **User Interface Logic:** This controls how the app looks and interacts with users. It includes 
tasks like validating forms, navigating between screens, and updating content based on user actions.

* **Data Logic:** This manages the app's data. It includes tasks like fetching, storing, updating, 
and deleting data from databases or via APIs.



Let's dive into few more key concepts:

## Functions

A function is a block of code designed to perform a specific task. Functions can be reused
throughout your application to perform common tasks efficiently.

### Triggers or Running a Function

Functions can be executed in various ways: they can be called from properties within the app, such
as performing a quick calculation or number formatting before setting the final value to a variable,
or concatenating strings before setting the string to a text widget. Functions can also run in
response to specific events, such as a button click or a page load.

### Types of Functions

There are different types of functions you can use in your app. Some examples in FlutterFlow are:

* **[Built-in Utility Functions](functions/utility-functions.md):** Functions that perform general utility 
  tasks, such as 
  formatting 
data or performing calculations. In FlutterFlow, you can use 
[**Code Expression**](functions/utility-functions.md#code-expressions) for simple data 
  manipulation tasks or use the 
  **[Combine Text](functions/utility-functions.md#combine-text)** built-in 
  function to concatenate strings.

* **[Actions](functions/action-flow-editor.md):** Sequence of Logic performed in response to 
  user interactions. For example: 
  * **[Updating State Variables:](../../ff-concepts/state-management/state-variables.md)** Functions that modify the current state or data of the app,
    page, or
    component.

  * **Widget-specific Functions:** Functions applicable to various widgets that need specific
    actions, such as scrolling to an item in a ListView, clearing text fields, or calling third-party
    integration functions.

  * **[Custom Actions:](../../ff-concepts/adding-customization/custom-actions.md)** More complex actions written in **Flutter & Dart** that can be added as a node to
    the action flow editor.

* **[Navigation:](../../ff-concepts/navigation-routing/nav-overview.md)** Functions that handle 
  the movement between different pages or screens within
  your app, including opening bottom sheets or dialogs. In FlutterFlow, such functions can
  either run automatically after certain related operations, such as Login/Create Account, or they
  can be added as individual **Actions** if the developer enables it.

* **[Backend Queries:](backend-logic/backend-query/backend-query.md)** Functions that interact with your 
  database or external 
  services to
  retrieve or manipulate data.

* **[Custom Functions:](../../ff-concepts/adding-customization/custom-functions.md)** Complex 
  manipulation code written in **Dart**, used to set 
  properties of a
  widget or an action.




## 