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

* **Code Expression:**  This feature allows you to perform simple calculations and data
  manipulations
  quickly and efficiently.



## Combine Text

Oftentimes, you will encounter scenarios where you need to show two variables in a single String or
Text widget. For example, in our [Ecommerce Demo](https://bit.ly/ff-docs-demo-v1) app, we have a price object in the following
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

## Code Expressions

Oftentimes, you may need to quickly format data, convert a data type from one form to another,
or perform a simple calculation before setting the variable to a data source, such as a widget
value source.

**Code Expression** built-in functions can help with
these tasks. A code expression is a piece of code that combines operators, variables, and/or values
to produce a result. It can be used for arithmetic and logical operations, among other tasks.

To perform a code expression, open the Variable Setter dialog wherever it's possible to set a
dynamic value and choose the values that will be part of the code expression.

For example, we may want to quickly calculate the discount amount of a product where the discount is
18% of the MRP of the product.

The expression would be `cost - (cost * discount)`.

:::warning[Precedence of operations]
Code expressions for math operations follow typical precedence (e.g., multiplication/division before
addition/subtraction), but parentheses can change the order.
:::

In this case, the variables we need are `cost` and `discount`.

So, we create two arguments in the **Code Expression** dialog where they hold the value of `cost`
and `discount`, assign the data type for each of the arguments, and define the return type of the
final value. In this case, the return type is a `double` since it holds the **subtotal** amount.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/I6UcltVn7ssAIWmipeFY?embed&show_copy_link=true"
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

Now you can write the code expression in the **Expression** field and click on **Check Errors** to
see if the expression is valid. If it is valid, you will see the generated code for the same.

The arguments in a Code Expression can take the following properties:

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





## Custom Functions

You can also use custom functions to handle slightly more complex calculations or to process a wider range of data types that are not supported in Code Expression.

:::info
Learn more about [**Custom Functions**](../../../ff-concepts/adding-customization/custom-functions.md).
:::