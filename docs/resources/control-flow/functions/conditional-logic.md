---
slug: /resources/functions/conditional-logic
title: Conditional Logic
description: >-
  Learn how to implement conditional logic in your FlutterFlow app to control
  the flow of actions or generate properties based on certain conditions.
tags:
  - FlutterFlow
  - Resources
  - Functions
sidebar_position: 4
keywords:
  - Conditional Logic
  - Backend Query
  - Backend Logic
  - Control Flow
  - FlutterFlow
last_verified: 2026-09-02
---
# Conditional Logic

Conditional logic is a fundamental concept in programming and software development. It involves making decisions in code based on certain conditions. This is achieved using conditional statements, which evaluate expressions to determine whether they are true or false. Depending on the result, different actions or outcomes are executed.

## Conditional logic behavior

- **Condition:** An expression that evaluates to either true or false.
- **True Path:** The set of actions to execute if the condition is true.
- **False Path:** The set of actions to execute if the condition is false.

![true-false.png](img/true-false.png)
## Conditional Flows
Conditional flows enhance basic true-false logic by handling multiple conditions and executing specific actions based on those conditions. This is achieved through more complex flows, such as single conditions, multiple conditions (using AND/OR), and conditional values with If/Then/Else logic.

### Single Condition
This flow allows you to define a condition based on the comparison of two values, which can be set manually or derived from variables. The condition will return **True** or **False**.

Available comparison operators depend on the value's data type. Common operators include:

- Equal To
- Not Equal To
- Less Than
- Greater Than
- Less Than Or Equal To
- Greater Than Or Equal To
- Is Set
- Is Not Set

For strings and lists, the picker can also distinguish an unset value from an empty value. Choose the operator that matches your data contract; `null`, an empty string, and an empty list are different states.

![single-condition.png](img/single-condition.png)
### Multiple Conditions (AND/OR)
This flow lets you combine multiple single conditions using logical AND or OR operators. It is useful for more complex decision-making processes.

- **AND** is true only when every child condition is true.
- **OR** is true when at least one child condition is true.

Group mixed AND/OR rules explicitly and test each branch; changing the group structure can change the result even when the individual comparisons stay the same.

![multiple-condition.png](img/multiple-condition.png)

### Conditional Value (If/Then/Else)
Conditional Value allows you to set a dynamic variable based on different conditions. For each condition, you can specify a value that will be assigned if the condition is true. A default value can be provided if none of the conditions are met.

Conditions are evaluated in order, and the first matching branch supplies the value. Every branch and the default must produce a value compatible with the destination property.

See the example **[below](#setting-widget-properties-with-conditional-logic).**

## Setting Widget Properties with Conditional Logic

FlutterFlow allows you to dynamically set the properties of widgets based on conditional logic. Depending on the expected data type of the property, you can use a combination of conditional flows to achieve your desired logic.

Here's an example where we use Conditional Logic to determine the value of a Text widget:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)',
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/zTJw7GmAolmmE1S6vTvv?embed&show_copy_link=true" title="Conditional Logic interactive tutorial"
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

<figure>
  <figcaption class="centered-caption">If the `placePicker` widget state is set, then return the placePicker address string. Else, if the `defaultAddress` component parameter is set and not empty, then return that as a string. Otherwise, return a default address value.</figcaption>
</figure>


## Conditional Actions

When you need to execute actions based on specific conditions, you can do so in the Action Flow Editor. By combining simple single conditions or multiple conditions, you can create complex logical flows. These conditions can be configured as learned in the Setting Properties section, allowing your action flows to follow **True/False** logic or **If-Else, If-Else If-Else** structures.

Here's a quick demo to illustrate a simple Single Condition Action flow:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/Fq8aWMfDhT6W6NztdkMb?embed&show_copy_link=true" title="Conditional Logic interactive tutorial"
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

You can easily convert a single condition action flow into a multiple condition action flow by
enabling the Multiple Conditions toggle. Here's how:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/XgXNr05yL21n3IgZPsxS?embed&show_copy_link=true" title="Conditional Logic interactive tutorial"
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

## Related documentation

See [Action Blocks](/resources/functions/action-blocks) for a related FlutterFlow workflow.

## Verify conditional logic

Create test cases for every branch, including null, empty, boundary, and unexpected values. In **Test Mode**, confirm only the intended action branch runs and each conditional property resolves to the expected type. Pay particular attention to the first matching condition when rules overlap.
