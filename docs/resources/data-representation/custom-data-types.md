---
slug: /resources/data-representation/custom-data-types
title: 'Custom Data Types: Data Representation'
description: >-
  Learn how to create and utilize custom data types in FlutterFlow to handle
  complex data structures that predefined types can't cover.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Resources
  - Data
sidebar_position: 3
keywords:
  - Custom Data Types
  - FlutterFlow
  - Data Representation
---
# Custom Data Types

In FlutterFlow, custom data types allow you to define structured data models that enhance data management and consistency across applications. These data types serve as blueprints for organizing related data attributes.

For instance, you can define a custom data type "Book" that combines predefined data types, such as a string for the title, an integer for the year of publication, and a list of strings for the authors.

Custom data types have several key advantages:

- **Reusable**: Define once, use everywhere.
- **Easy to Update**: Change data structure in one place, and see it reflected throughout your app.
- **Consistent**: Keeps data format uniform across the application.
- **Efficient**: Simplifies complex data handling, reducing errors and redundant code.

:::info
- Use a custom data type when one primitive value, such as an _Integer_ or _String_, is not enough to represent an object.
- FlutterFlow also supports some [**Built-in Data Types**](data-types.md#built-in-data-types).
:::
![custom-data-types.avif](../imgs/custom-data-types.avif)

When you create a custom data type, FlutterFlow represents it as a data struct. A struct is a composite value that combines named fields, and each field has its own data type and optional list setting.

:::info
In exported code, FlutterFlow appends `Struct` to the UpperCamelCase data type name. For example, a custom data type named `Cart` generates a `CartStruct` class under `lib/backend/schema/structs/`.
:::

## Creating Custom Data Type

To create a custom data type, specify its name and the corresponding fields. Each field can have a distinct data type. You can also specify if a field should allow multiple entries using the **Is List** toggle.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/fdx2RldmRxm5VeQdaHyd?embed&show_copy_link=true" title="Custom Data Types: Data Representation interactive tutorial"
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

:::tip[Naming Convention]
When naming custom data types, always use **UpperCamelCase**, as recommended by the Dart Style Guide. To learn more, refer to the guide on **[Naming Variables & Functions](../../resources/style-guide.md)**.
:::

## Accessing Custom Data Type

After creating a custom data type, its definition describes the fields but does not hold a particular value. To work with actual data, such as one user profile or review, create an **instance** of that type.

Creating an instance allows you to:

- Assign specific values to each field in your custom data type.
- Store the instance in app state, page state, or pass it between widgets.
- Access individual fields wherever needed.

To store an instance in state, first [create a state variable](../../ff-concepts/state-management/state-variables.md#creating-state-variables) with the **Data Type** field type and choose the project data type. When assigning its value, open **Set from Variable > Create Data Type Object > Project Data Type**, select the type, and provide its field values. You can also receive or return a custom data type from compatible custom code.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/qNNwqEm7vrvuWszmhf9R?embed&show_copy_link=true" title="Custom Data Types: Data Representation interactive tutorial"
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

### Custom Data Type in Custom Code
Sometimes, you might want to access the custom data type in your custom code. Our custom code editor allows you to receive and pass data into a variable of a custom data type. For example, you could manipulate or analyze the data as needed, and then return the modified result in the custom data type.

![custom-data-in-custom-code.avif](../imgs/custom-data-in-custom-code.avif)

## Use case: mapping JSON responses from API calls

Consider a case where you're calling an API that returns product details. You could create a custom data type 'Product' representing the JSON structure and then map the JSON values to the custom data type field.

So, if the JSON response looks like this:

```json
{
  "id": "a1b2c3d4e5f678901234567",
  "name": "Jacket",
  "price": 199.99,
  "reviews": [
    {
      "id": "rev101",
      "username": "mike",
      "rating": 4,
      "comment": "This product exceeded my expectations in every way. Highly recommended!"
    },
    {
      "id": "rev102",
      "username": "kera",
      "rating": 2,
      "comment": "Great quality, but the color was not as shown in the picture."
    }
  ]
}
```

Here’s how you map into a custom data type:

![mapping-json-to-custom-data-type.avif](../imgs/mapping-json-to-custom-data-type.avif)
