---
slug: /concepts/custom-code/custom-functions
title: Custom Functions
description: Learn how to create and use custom functions in your FlutterFlow app to add custom functionalities.
tags: [Custom Functions, Custom Code]
sidebar_position: 2
keywords: [FlutterFlow, Custom Functions, Customizations, Flutter, Dart, Pub.dev]
---

# Custom Functions
Custom Functions in FlutterFlow allow you to perform simple Dart calculations and logic. These functions are ideal for tasks that require immediate results, such as data transformations, mathematical calculations, or simple logic operations. **Custom Functions** enable you to encapsulate reusable logic, making your code more organized and maintainable. Let's see some common examples:

**To calculate discount given price and discount rate:**

```js
double calculateDiscount(double price, double discountRate) {
    return price - (price * discountRate / 100);
}
```

**To capitalize a String input:**

```js
String capitalize(String input) {
    return input.isNotEmpty ? '${input[0].toUpperCase()}${input.substring(1)}' : '';
}
```

**To convert Celsius to Fahrenheit**

```js
double celsiusToFahrenheit(double celsius) {
    return (celsius * 9/5) + 32;
}
```

## Key Use Cases

- **Data Transformation:** Convert or manipulate data before displaying it in the UI.
- **Mathematical Calculations:** Perform complex calculations directly within your app.
- **String Manipulation:** Format or parse strings based on specific requirements.
- **Conditional Logic:** Implement logic that determines output based on given inputs.



## Test Functions

Custom Functions are typically straightforward input-output expressions designed to perform specific tasks. It is highly recommended to test your Custom Functions before integrating them into your project. Testing the Custom Function code ensures that it works as expected with various inputs, helping you catch potential issues early. Overall, it boosts your confidence in shipping your app to production, knowing that your logic is reliable and robust.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/BnrHbpxrV7WaNtmn1HLB?embed&show_copy_link=true"
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

:::tip[LOOKING for other CUSTOM Function properties?]
To learn more about Custom Function properties such as
[**Input Arguments**](custom-code.md#input-arguments) and
**[Return Values](custom-code.md#return-values)**, please
check out this
[**comprehensive guide**](custom-code.md).
:::


## FAQs

<details>
<summary>I can't add imports!</summary>

You can't have imports in a custom function. To be able to add imports, consider using a Custom Action.

</details>


<details>
<summary>Getting error: The function 'FFAppState' isn't defined.</summary>

You can't use the app state variable (i.e., `FFAppState().variablename`) directly in your custom 
function code. Instead, you can pass the app state variable as a parameter and then use it in your code.

</details>


<details> 
<summary>How do I convert a string to a double in FlutterFlow using a custom function?</summary>

If you need to convert a string (for example, `"123.45"`) into a `double` in FlutterFlow, you can do this with a Custom Function.

Below is a simple Dart example:

```dart
double stringToDouble(String value) {
return double.tryParse(value) ?? 0.0;
}
```
Steps to use in FlutterFlow:

- Go to Custom Functions in the left panel.
- Click + Add Function.
- Name the function (e.g., stringToDouble).
- Add a String parameter (e.g., value).
- Paste the code above.
- Save and use the function anywhere in your app (such as in a binding or conditional logic).

:::tip
- You don’t always need to write your own function — FlutterFlow’s **[Utility Functions Library](https://marketplace.flutterflow.io/item/ZVBmWMGpXe6vqnASRHDA)** already contains a stringToDouble method (and many others) that can save you time.
- You can install it from the Marketplace and use it immediately without creating custom code.
:::
</details>

## Utility Functions Library
Instead of building everything from scratch, explore our **[Utility Functions Library](https://marketplace.flutterflow.io/item/ZVBmWMGpXe6vqnASRHDA)** — packed with 50+ helpful functions for everyday tasks like formatting text, manipulating dates, validating input, and more. Easily plug them into your custom logic to save time and reduce errors.
