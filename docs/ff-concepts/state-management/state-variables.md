---
slug: /concepts/state-management
title: State Variables
description: An overview of state management & state variables in FlutterFlow.
sidebar_position: 0
---
# State Management 
State management is a crucial concept focused on maintaining and controlling the **state** of an application. Simply put, it involves monitoring the changes within your app and updating the user interface to reflect these changes. 

The UI (user interface) displays information based on state variables. When these state variables change, the UI updates to reflect the changes.

## State Variables

In FlutterFlow, there are a few types of state variables that you can create:

<figure>
   ![app stage overview](state_management_overview.png)
  <figcaption class="centered-caption">App State is shared across multiple pages in the application. Component State is specific to a component. Page State is shared across widgets on the page.</figcaption>
</figure>


- State variables are themselves [**variables**](../../resources/data-representation/overview.md#variable) - meaning they have a *name* and a *data type*. 
- They also have an initial value that is set when you create the variable. 
- Once you create a state variable, it's value can be used to change the configuration of widget properties - like any other variable. 
- You can update the value of state variables using the **[Update State Variable](#updating-state-variables)** action.

### Creating State Variables
- To create an **App State variable**, refer to this **[guide](../../resources/data-representation/app-state.md#create-app-state-variable)**.
- To create a **Page State variable**, refer to this [**guide**](../../resources/ui/pages/page-lifecycle.md#creating-a-page-state).
- To create a **Component State variable**, refer to this [**guide**](../../resources/ui/components/component-lifecycle.md#creating-a-component-state).

Note: Users cannot create **widget state variables**. These are automatically exposed by FlutterFlow when a Form widget is used.



### Updating State Variables
- To update an **App State variable**, refer to this **[guide](../../resources/data-representation/app-state.md#update-app-state-action)**.
- Refer to the [**Page Lifecycle**](../../resources/ui/pages/page-lifecycle.md) guide to learn about updating **[Page State variables](../../resources/ui/pages/page-lifecycle.md#update-page-state-action)**.
- Refer to the [**Component Lifecycle**](../../resources/ui/components/component-lifecycle.md) guide to learn about updating **[Component State variables](../../resources/ui/components/component-lifecycle.md#update-component-state-action)**.

<p></p>


:::tip[Learn from video]
You can learn more about state management from this video:
<div class="video-container">
<iframe src="https://www.youtube.com/embed/jD6L4xjYjJA?si=-RjniUB-K0ZsMoB1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
:::




