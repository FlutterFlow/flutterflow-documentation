---
slug: /concepts/custom-code/custom-actions
title: Custom Actions
description: Learn how to create and use custom actions in your FlutterFlow app to enhance functionality.
tags: [Custom Actions, Custom Code]
sidebar_position: 4
keywords: [FlutterFlow, Custom Actions, Customizations, Flutter, Dart, Pub.dev]
---

# Custom Actions

Custom Actions in FlutterFlow differ from custom functions in that they always return a `Future`.
This makes them particularly useful for complex operations that may take time to complete, such
as querying a database or calling a function that returns results after a delay. Additionally,
Custom Actions are beneficial when you want to add a third-party dependency from `pub.dev`,
allowing you to extend the capabilities of your application with external packages.

:::tip[What is a Future?]
Futures in **Flutter** represent an asynchronous operation that will return a value or an error at
some point in the future. `Future<T>` indicates that the future will eventually provide a value of
type `T`. So if your return value is a `String`, then the Custom Action will return
a `Future<String>`, and the `String` return value will be output at some point in the future.
:::

## Key Use Cases

- **Database Queries:** Perform complex queries to retrieve or update data in a database.
- **API Calls:** Make asynchronous HTTP requests to external APIs and handle the responses.
- **File Operations:** Manage file reading or writing operations that require time to complete.
- **Third-Party Integrations:** Incorporate external packages and dependencies to enhance
  functionality, such as an external analytics package.



## Using a Custom Action

Once your Action code is finalized, saved, and compiled, you can start using this action as a part
of your Action flow.

In the following example, we have a Custom Action called `executeSearch` that takes an argument
`searchItem` that is the search string from the search **TextField** of an ecommerce
app's `HomePage`.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/ZwlkhlPX867DW6cPQxKk?embed&show_copy_link=true"
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

## Using the Custom Action Result

In our previous example, we enabled the **Return Value** of the Custom Action to return a
`List<Product>` when the search keyword is valid. With this change the code will change from

```js
Future executeSearch(String searchItem) async {
  // Add your function code here!
}
```

to

```js
Future<List<ProductStruct>> executeSearch(String searchItem) async {
// Add your function code here!
}
```

Let's modify our Action Flow now so we can use the custom action result values within our Action
Flow.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Phny5irmH6G2A2TJili0?embed&show_copy_link=true"
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


:::tip[LOOKING for other CUSTOM action properties?]
To learn more about Custom Action settings, such as the 
[**Exclude From Compilation toggle**](custom-code.md#exclude-from-compilation), 
[**Include Build Context toggle**](custom-code.md#include-buildcontext), 
and other properties like [**Callback Actions**](custom-code.md#callback-action-as-parameter), 
[**Pubspec Dependencies**](custom-code.md#adding-a-pubspec-dependency), please check out this
[**comprehensive guide**](custom-code.md).
:::






