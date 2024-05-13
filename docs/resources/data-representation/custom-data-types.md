---
slug: custom-data-types
title: Custom Data Types
tags: []
description: Learn how to create and utilize custom data types in FlutterFlow to handle complex data structures that predefined types can't cover.
sidebar_position: 2
---

# Custom Data Types

Sometimes, the predefined data types may not be enough to store certain kinds of information. In such cases, you can create a custom data type, which is a combination of predefined data types.

## Creating Custom Data Type

To create a custom data type, specify its name and the corresponding fields. Each field can have a distinct data type. You can also specify if a field should allow multiple entries.

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

### Accessing custom data type in custom code

Sometimes, you might want to access the custom data type in your custom code. Our custom code editor allows you to receive and pass data into a variable of a custom data type.

For example, you could manipulate or analyze the data as needed, and then return the modified result in the custom data type. Let's extend the previous example and see how to do this.

So, from the JSON response, we want to convert the 'review' JSON array into a list of a custom data type named 'reviews'. In custom code, here's how we access, modify, and return the list of the custom data type.

![custom-data-type-custom-code.avif](../imgs/custom-data-type-custom-code.avif)

Here's the rundown of what's happening in the custom code editor:

1. The return value is set to **List** of **Data Type** of 'Review.'
2. Defined an argument with the name 'jsonArray', which is a list of dynamic types representing ‘reviews’ JSON array.
3. Inside the body of the code:
    - For each item in the `jsonArray`, it calls the `fromMap` constructor of `ReviewsStruct` and adds the resulting object to the `listOfStruct`.
    - After iterating through all the items, the function returns the populated `listOfStruct`, which is a list of 'Review' data types.