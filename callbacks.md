---
title: Action Parameters (Callbacks)
sidebar_position: 4
---

# Action Parameters (Callbacks)

In FlutterFlow, callbacks are a way to pass down actions from parent entities (like pages or other
components) to child entities (such as custom widgets or components). This allows the parent to
define specific behaviors that the child entity should execute when certain events occur.

It enables dynamic and interactive behavior in child components, allowing them to perform actions
defined by the parent, such as navigation, data updates, or displaying dialogs.

:::tip[Benefits of Using Callbacks in FlutterFlow]

- **Modularity:** Separate the logic of what happens when an event occurs from the child component,
  making your component widget more modular and reusable.
- **Reusability:** Use the same child component in different contexts with different behaviors,
  simply by passing different callbacks.
  :::


## Creating a Callback Parameter
In order to create a component that will execute a callback, you must create a component with a parameter of type Action. 

When you create an action parameter, you can also specify parameters that will get passed into the action. For example, 
you might have a button that allows your app to add an item to a user's cart. 

You can create a parameter called `onAddToBag` which represents the action that will be executed when the button is tapped. 

The action that will be executed will likely need to know which item is being added to the cart. So, you can also specify an action parameter - 
`item`. Now, the page or component that leverages this button can use this parameter in its own action flow. You can see an example of that below.

![action-parameters.png](imgs/action-parameters.png)

## Executing a Callback 

You can execute the action that is passed into the component by using the **Execute Callback** action in the component's action flows. 

For example, you may want to execute the above callback when the button is tapped. 

![execute-callback.png](imgs/execute-callback.png)

## Passing in an Action to a Component

When you add a component to the widget tree of a page or another component, you can set values for its parameters. 

This holds true for action parameters as well. For example, when you create an instance of the button component mentioned above, you can specify the action flows that should be used when the callback is executed.

![execute-callback.png](imgs/set-action-callback.png)




