---
slug: /resources/data-representation/custom-data-types
title: Custom Data Types
description: Learn how to create and utilize custom data types in FlutterFlow to handle complex data structures that predefined types can't cover.
tags: [Custom Data Types, FlutterFlow, Data Representation]
sidebar_position: 3
keywords: [Custom Data Types, FlutterFlow, Data Representation]
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
- Use custom data type when predefined data types, such as _integer_ and _string_ may not be enough to store certain kinds of information.
- FlutterFlow also supports some [**Built-in Data Types**](data-types.md#built-in-data-types).
:::
![custom-data-types.avif](../imgs/custom-data-types.avif)

When you create a custom data type, it internally creates a Struct. A struct, or structure, is a composite data type that lets you combine fields of different data types to construct a data structure to suit your specific needs.

:::info
The class name for such data types is generated by appending "Struct" to the name of the data type. For example, if you create a custom data type called "Cart", the corresponding class would be named "CartStruct". 
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
        src="https://demo.arcade.software/fdx2RldmRxm5VeQdaHyd?embed&show_copy_link=true"
        title="Sharing a Project with a User"
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

After creating a custom data type, it’s treated internally as a [Dart class](https://dart.dev/language/classes). However, just defining the custom data type doesn’t hold any real data. To work with actual data, such as storing a user profile or a review, you need to create an **instance** of custom data type.

Creating an instance allows you to:

- Assign specific values to each field in your custom data type.
- Store the instance in app state, page state, or pass it between widgets.
- Access individual fields wherever needed.

To create an instance of a custom data type, first you need to [create a state variable](../../ff-concepts/state-management/state-variables.md#creating-state-variables) (of type **Data Type**) that will hold the instance. Then, to create and add the instance to the state variable, open the **Set from Variable** dialog and select **Create Data Type Object > Project Data Type**. Choose the data type you want to use. After that, set values for each of the required fields.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/qNNwqEm7vrvuWszmhf9R?embed&show_copy_link=true"
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
      "comment": "This product exceeded my expectations in every way. Highly recommended!",
    },
    {
      "id": "rev102",
      "username": "kera",
      "rating": 2,
      "comment": "Great quality, but the color was not as shown in the picture.",
    }
  ],
}
```

Here’s how you map into a custom data type:

![mapping-json-to-custom-data-type.avif](../imgs/mapping-json-to-custom-data-type.avif)

