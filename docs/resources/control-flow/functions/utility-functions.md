---
slug: /resources/functions/utility
title: Utility Functions
description: Learn about the built-in utility functions available in FlutterFlow to enhance your app's UI logic.
tags: [Functions]
sidebar_position: 1
keywords: [Built-in Functions, Backend Query, Backend Logic, Control Flow, FlutterFlow]
---

# Utility Functions

Utility functions are crucial for simplifying common tasks in app development, such as performing
quick calculations, formatting data, and concatenating strings.

In FlutterFlow, you can effortlessly integrate these utility functions when setting variables to
value sources. This allows you to simplify processes like calculations, data formatting, and text
manipulation directly within the visual builder.

FlutterFlow has the following built-in functions:

* **Combine Text:** A built-in function that lets you concatenate strings, making it easy to join
  multiple text elements together seamlessly.

* **Inline Function:**  This feature allows you to perform simple calculations and data manipulations quickly and efficiently.



## Combine Text

Oftentimes, you will encounter scenarios where you need to show two variables in a single String or
Text widget. For example, in our [Ecommerce Demo](https://bit.ly/ff-docs-demo-v2) app, we have a price object in the following
format:

```json

"price": {
"currency": "$",
"amount": 25.50
}

```

However, when displaying the data in the UI, we should combine both the currency value and amount,
as they make sense only together.

In such cases, we can use the **Combine Text** built-in function available in all value sources
that take a `String`. You can combine any number of _dynamic_ and _static_ variables together, even
if they are not `Strings` themselves. In the end, the final value is always a String since it is set
to a widget that only accepts `String` data types.

Here is a quick demo:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/v6bfWg0Nfpd1K5RjrTNx?embed&show_copy_link=true"
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

:::warning[Combine Text vs RichText widget]
The **Combine Text** built-in function only allows you to combine multiple values (dynamic or
static)
together, with the same text style applied to all of them. If you need to combine multiple String
values with different text styles for each, consider using the **[RichText](../../ui/widgets/basic-widgets/text.md#richtext-widget)** widget.
:::


## Inline Function (Code Expressions)

:::info
**Code Expressions** was renamed to **Inline Functions** starting from FlutterFlow 6.0 version.
:::

Often times, you may need to quickly format data, convert a data type from one form to another, or perform a simple calculation before setting the variable to a data source, such as a widget value source.

Inline Function is a piece of code that combines operators, variables, and/or values to produce a result. It can be used for arithmetic and logical operations, among other tasks.

To add inline function, open the Set from Variable dialog wherever it's possible to set a dynamic value and choose the values that will be part of the inline function.

For example, we may want to quickly calculate the discount amount of a product where the discount is 18% of the MRP of the product. The expression would be `cost - (cost * discount)`.

:::tip
Looking for more power and flexibility? Use the new [**Custom Code Expression**](#custom-code-expression). It’s a more advanced version of Inline Functions that lets you access FlutterFlow generated resources without passing them as arguments. You also get real-time autocomplete and inline error checking for faster, more accurate logic.
:::

**Precedence of operations**

Inline Function for math operations follow typical precedence (e.g., multiplication/division before addition/subtraction), but parentheses can change the order.

In this case, the variables we need are `cost` and `discount`.

So, we create two arguments in the **Inline Function** dialog where they hold the value of `cost` and `discount`, assign the data type for each of the arguments, and define the return type of the final value. In this case, the return type is a `double` since it holds the **subtotal** amount.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/qM8kjAlMJl6WyH3tXN4X?embed&show_copy_link=true"
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

Now you can write the inline function in the **Expression** field and click on **Check Errors** to see if the expression is valid. If it is valid, you will see the generated code for the same.

The arguments in a Inline Function can take the following properties:

| DataType | Supports Nullable | Supports List |
|----------|-------------------|---------------|
| String   | ✅                 | ✅             |
| Integer  | ✅                 | ✅             |
| Double   | ✅                 | ✅             |
| Boolean  | ✅                 | ✅             |
| Colors   | ✅                 | ✅             |


### Common Examples 

Here are some common expressions you can use for your business logic: 

| Expression                         | Description                                             | Example                    | Return Type    |
|------------------------------------|---------------------------------------------------------|----------------------------|----------------|
| `contains()`                       | Checks if a **string** contains a particular substring. | `text1.contains(text2)`    | `bool`         |
| `split()`                          | Splits a **string** into a list of substrings.          | `text.split(",")`          | `List<String>` |
| `toLowerCase()` or `toUpperCase()` | Converts all characters in a **string** to lowercase.   | `text.toLowerCase()`       | `String`       |
| `contains()`                       | Checks if a **list** contains a particular element.     | `fruits.contains("apple")` | `bool`         |
| `max()`                            | Returns the larger of two numbers.                      | `math.max(a, b)`           | `int`            |
| `toDouble()`                       | Converts the **integer** to a **Double**.               | `intValue.toDouble()`      | `double`         |
| `int.parse(s)`                     | Convert the **String** into an **integer.**             | `int.parse(stringValue)`   | `int`            |


## Custom Code Expression

**Custom Code Expression** lets you write short Dart code directly in widget property fields and action flows in FlutterFlow. It’s a more powerful version of [**Inline Function**](#inline-function-code-expressions), allowing you to directly access FlutterFlow generated classes, global variables, widget properties, parameters, and more without needing to manually pass them as inputs.

Custom Code Expressions also support real-time autocomplete, making it easy to discover available fields as you type. For example, when you type `FFAppState().`, it will suggest all available app state variables along with their types.

In addition, inline validation provides immediate feedback as you write, helping you catch syntax errors or invalid property references.

:::info
To use Custom Code Expression, you must have an active [**FlutterFlow paid plan**](https://www.flutterflow.io/pricing).
:::

:::tip
- To explore what you can access within a Custom code expression, refer to the [**Common Examples**](../../../ff-concepts/adding-customization/common-examples.md) page.
- Press `^ + Space` (or `Ctrl + Space`) while typing to see suggestions for what you can access in your Custom code expression.
- You can access values inside custom structs. For example, you can use `FFAppState().localDeviceInfo.osVersion` if that field exists in your app state.
- To use Custom code expressions better, it's helpful to understand how FlutterFlow builds your project behind the scenes. You can check the [**State Management**](../../../generated-code/state-mgmt-gen-code.md) page and other **Generated Code** sections to learn how everything is set up.

:::

Here are a couple of examples showing how to access App State and Page State within a Custom code expression:

- **App State Access:** For example, to check if dark mode is enabled using an App State variable:

    ```jsx
    FFAppState().enableDarkMode ? 'Dark Mode On' : 'Light Mode Off'
    ```

    This accesses the global `enableDarkMode` boolean stored in `FFAppState`, and returns a string based on its value.

- **Page and Component State Access:** For example, to access a page or component state variable like `searchText`, you start with `_model.` and then select the variable from the autocomplete suggestions.

    ```jsx
    _model.searchText.isEmpty ? '' : 'Searching for "${_model.searchText}"'
    ```

    This expression checks if the `searchText` variable (defined as a page state) is empty, and returns an appropriate message. The `_model` object refers to the current page’s generated state model.

Here's an example of adding a Custom Code Expression:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/6RV03v2ByVqRgCTeg3QF?embed&show_copy_link=true"
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

### Execute Custom Code [Action]

To use a Custom Code Expression when triggering actions in FlutterFlow (i.e., inside an Action Flow), you can use the **Execute Custom Code** action. This allows you to run a Dart expression when something happens, such as tapping a button or after a page loads.

![execute-custom-code.avif](img/execute-custom-code.avif)

The Execute Custom Code action can be really helpful in scenarios where the home page is removed early from the navigation stack and standard navigation using the local context may fail. To prevent this, you can [use the global navigator context](../../../ff-concepts/navigation-routing/deep-dynamic-linking.md#using-global-context-to-navigate) inside a code expression.

## Custom Functions

You can also use custom functions to handle slightly more complex calculations or to process a wider range of data types that are not supported in Inline Function.

:::info
Learn more about [**Custom Functions**](../../../ff-concepts/adding-customization/custom-functions.md).
:::

## FAQS
<details>
<summary>
How is a Custom Code Expression different from an Inline Function?
</summary>
<p>
Custom Code Expression is a more advanced and flexible version of Inline Function.

With Inline Functions, you had to manually pass values as arguments. In contrast, Custom Code Expressions let you directly reference FlutterFlow generated resources (such as `FFAppState()`, `_model`, context, and more) without needing to pass them in.

You can write any valid Dart expression in a Custom code expression, even multi-line logic using anonymous functions. Plus, Custom Code Expressions support real-time autocomplete and inline error validation, making it much easier to discover available variables and avoid mistakes.

</p>
</details>