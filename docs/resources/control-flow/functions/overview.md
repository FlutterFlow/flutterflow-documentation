---
slug: overview
title: Overview
tags: [ ]
toc_max_heading_level: 5
sidebar_position: 1
---

# Control Flow & Logic

Control flow in programming refers to the order in which individual statements, instructions, or
function calls are executed or evaluated. Proper control flow is crucial for determining how your
app responds to user inputs and events. Here are some key elements:

* **Conditional Statements:**
  These include `if`, `else if`, and `else` statements that allow your app to make decisions based on
  certain conditions. For example, you might check if a user is logged in and then show different
  content based on their authentication status.

* **Loops:**
  Loops such as `for` and `while` allow your app to repeat a string of logic multiple times. 
  This is useful for tasks like iterating through a list of items or retrying a failed operation.

* **Event Handling:**
  In certain cases, you will execute functions that are triggered by specific events such as user
  interactions (e.g., taps, swipes) or system events (e.g., page load, API response).
  Understanding how to handle such events effectively ensures that your app reacts appropriately to
  user interactions.

And **Logic** or **Functions** refer to the core operations and behaviors that determine how an app 
responds to user actions and interacts with data. This could include: 

* **Business Logic:** This is the part of the app that manages the rules and processes of the real 
world. For example, in an e-commerce app, it handles tasks like processing orders, calculating prices, and managing inventory.

* **User Interface Logic:** This controls how the app looks and interacts with users. It includes 
tasks like validating forms, navigating between screens, and updating content based on user actions.

* **Data Logic:** This manages the app's data. It includes tasks like fetching, storing, updating, 
and deleting data from databases.



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

* **[Built-in Utility Functions](built-in-functions/overview):** Functions that perform general utility 
  tasks, such as 
  formatting 
data or performing calculations. In FlutterFlow, you can use Code Expression for simple data manipulation tasks or use the Combine Text built-in function to concatenate strings.

* **[Actions](actions)** : Sequence of Logic performed in response to user interactions:
  * **Updating State Variables:** Functions that modify the current state or data of the app,
    page, or
    component.

  * **Widget-specific Functions:** Functions applicable to various widgets that need specific
    actions, such as scrolling to an item in a ListView, clearing text fields, or calling third-party
    integration functions.

  * **Custom Actions:** More complex actions written in **Flutter & Dart** that can be added as a node to
    the action flow editor.

* **Navigation:** Functions that handle the movement between different pages or screens within
  your app, including opening bottom sheets or dialogs. In FlutterFlow, such functions can
  either run automatically after certain related operations, such as Login/Create Account, or they
  can be added as individual **Actions** if the developer enables it.

* **Backend Queries:** Functions that interact with your database or external services to
  retrieve or manipulate data.

* **Custom Functions:** Complex manipulation code written in **Dart**, used to set properties of a
  widget or an action.




## 