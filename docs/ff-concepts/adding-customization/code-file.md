---
slug: /concepts/custom-code/code-file
title: Code File
description: Learn how to create and use custom classes and enums in FlutterFlow.
tags: [Code File, Custom Code]
sidebar_position: 5
keywords: [FlutterFlow, Custom Classes, Custom Enums, Customizations, Flutter, Dart, Pub.dev]
---

# Code File

FlutterFlow allows you to add your own custom Dart files with [classes](https://dart.dev/language/classes) and [enums](https://dart.dev/language/enums). This means you can create reusable building blocks to manage your app’s data and logic more easily. Using custom classes, you can create custom data types, use their properties in the UI, call methods in action flows, and much more.

## Key Use Cases

- **Custom Models**: Define your own data models, such as `UserProfile`, `Product`, or `Order`, and use them throughout your app.
- **Business Logic**: Add reusable utility methods like tax calculations, formatting, or conditional evaluations.
- **Reusable Enums**: Define enums and use them in UI conditions and dropdowns.

:::warning[Limitations]

- **No Generics:** Classes with generic types (e.g., `class ApiResponse<T> {}`) are currently not supported.
- **No Function-Typed Parameters:** Methods or fields that have function types as parameters or fields are ignored (e.g., void Function(int) onTap).
- **No Extensions:** Dart Extensions (e.g., `extension StringX on String { … }`) are not supported yet.

:::

## Create Custom Class

To add a custom class, go to the **Custom Code** from the left navigation menu, click **plus (+)** button, and select **Code File**. Set the name of the file, add your code, and hit the **Save** button. Now, you must **validate** your code in the editor to catch basic syntax errors. If there are no errors, click the **Parse** button. FlutterFlow will scan your code and automatically detect supported classes and enums.

Here’s an example of adding a `Review` custom class:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/sX8BKGhdsUGj7IZJCSpN?embed&show_copy_link=true"
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

Here's the code snippet of the `Review` custom class:

```jsx
class Review {
  String id;
  String productId;
  String userId;
  String userName;
  String comment;
  double rating; // out of 5
  ReviewStatus reviewStatus;
  DateTime date;
  int helpfulCount = 0;

  Review(
    this.id,
    this.productId,
    this.userId,
    this.userName,
    this.comment,
    this.rating,
    this.reviewStatus,
    this.date,
  );

  // Method: Get a short version of the comment
  String shortComment() {
    if (comment.length <= 50) return comment;
    return comment.substring(0, 47) + "...";
  }

  // Method: Get formatted date as string (e.g., "2024-05-22")
  String formattedDate() {
    return "${date.year}-${_twoDigits(date.month)}-${_twoDigits(date.day)}";
  }

  String _twoDigits(int n) {
    return n >= 10 ? "$n" : "0$n";
  }

  // Method: Check if review is positive (4 stars or more)
  bool isPositive() {
    return rating >= 4.0;
  }

  // Method: Check if review is recent (within last 30 days)
  bool isRecent() {
    final now = DateTime.now();
    return now.difference(date).inDays <= 30;
  }

  // Method: Mark this review as helpful
  void markHelpful() {
    helpfulCount += 1;
  }
}
```
:::tip
You can also include import statements and access generated classes within your custom class files. For more details, [**see the examples**](common-examples.md) on how to access generated classes.
:::

## Create Custom Class Instance

You need to create an instance of a class so you can work with actual data and use the class’s properties and methods in your app. Here’s a simple explanation:

- A **class** is like a blueprint or template. For example, the `Review` class describes what a review is, but doesn’t hold any real review information itself.
- An **instance** (or “object”) is a real, usable item made from that blueprint. See the code snippet below:
    
    ```jsx
    Review review1 = Review(
      'r001',
      'p123',
      'u456',
      'Alex Morgan',
      'Great quality T-shirt!',
      4.5,
      DateTime(2025, 5, 22),
      3,
      ReviewStatus.approved,
    );
    ```
    
- You can reuse the same class structure multiple times with different review data.

When you create an instance of a class, you can:

- Store actual review details.
- Access and update the fields (e.g., `review1.rating` or `review1.comment`).
- Call methods that do something with that data (e.g., `review1.markHelpful()` or `review1.shortComment()`).

To create an instance of a custom class, open the **Set from Variable** dialog and select **Create Custom Class Instance**. Choose the class you want to use, then select the class name from the **Constructor** dropdown. After that, set values for each of the required fields.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/0CQju0ZUuhOEnkRhbxP4?embed&show_copy_link=true"
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

<!-- :::tip[When You Don't Need an Instance]

You can skip instance creation when everything in the class is `static`, meaning it's shared across all uses (like a utility class). For example, look at the class below:

```jsx
class Utils {
  static int square(int x) => x * x;
}
```

In such cases, you can directly access the class data and methods via the **Set from Variable** menu.

![static-class-methods.avif](imgs/static-class-methods.avif)
::: -->

## Using Custom Class

Once the custom class is added successfully, you can access its fields and methods in the Variable Dialog, call its methods in the Action Flow Editor, assign instances to state variables, pass them to page or component parameters, and use enum values in dropdowns or conditionals.

### Custom Class as Data Type

You can select your custom class as a Type for variables, state, or parameters, just like a [Custom Data Type](../../resources/data-representation/custom-data-types.md).

![custom-class-as-data-type.avif](imgs/custom-class-as-data-type.avif)

### Access Fields and Methods

You can use custom class fields to display values directly in the UI, and call its methods in variable dialogs to return a result.

![access-fields-methods.avif](imgs/access-fields-methods.avif)

### Call In Action Flows

You can also add your custom class’s methods directly within an Action Flow. For example, you can trigger the `markHelpful()` method when a user taps a “Mark as Helpful” button to update a field or increment the helpful count of a review.

## Custom Enums

Similar to how you add a custom class, you can also add Custom Enums in your app. [Enums](../../resources/data-representation/enums.md) are a great way to define a fixed set of values, such as user roles, order statuses, or content types. Once parsed, these enums become available throughout your app and can be used in dropdowns, conditionals, and UI bindings.

For example, you could define an enum called `ReviewStatus` with values like `pending`, `approved`, and `rejected`.

![custom-enums.avif](imgs/custom-enums.avif)

You can access the custom enums from **Set from Variable** menu > **Custom Enum** section. You’ll see your Dart file listed by name. Select the enum you want to use, such as `ReviewStatus`, and then choose the specific value you want to assign.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/wFd9NKYGdb2Jp7ZYkaR8?embed&show_copy_link=true"
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

## Tips & Best Practices

- Keep your custom class files modular and focused; ideally one class per file for better organization and reusability.
- Avoid advanced Dart features that are not supported by FlutterFlow’s parser, such as generics or function-typed fields.
- Re-parse your code after making changes to ensure FlutterFlow updates the parsed structure correctly.
- Document your code with comments to make your custom classes easier to understand and maintain over time.