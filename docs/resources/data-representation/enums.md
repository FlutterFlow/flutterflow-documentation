---
slug: /resources/data-representation/enums
title: Enums
description: Learn how Enums can enhance the management of application states, product types, and process statuses by providing a robust method to handle predefined sets of values.
tags: [Enums, FlutterFlow, Data Representation]
sidebar_position: 4
keywords: [Enums, FlutterFlow, Data Representation]
---

# Enums

In FlutterFlow, Enums (enumerations) provide a method for defining a set of named constants. They are typically used to represent a group of related values in a more readable and safe manner. 

They prevent invalid values from being assigned. For example, if you have an enum for days of the week, you can't mistakenly assign a non-existent day. In contrast, with strings or numbers, you might accidentally use an invalid or misspelled value like "Sundey" or "Sinday".

![enums](../imgs/enums-fi.avif)

Here are some real-world examples where using Enums is beneficial:

1. **Application States**: A media player might use enums to keep track of playback states (e.g., playing, paused, stopped).
2. **Product Types, Sizes, or Categories**: A clothing store app might use enums to categorize clothing sizes (small, medium, large).
3. **Order or Process Status**: For tracking the status of orders, processes, or tasks (pending, inProgress, completed, canceled).

## Create and use Enums

1. You can create Enums from the left side navigation menu and add values to it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/U6crZTuELtgYinr4ZxQp?embed&show_copy_link=true"
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

2. Access the Enum values by navigating to the **Set from Variable** menu, then selecting **Enums > [your enum name] > Values**.

![enums.avif](../imgs/enums.avif)

:::tip[Naming Convention]
When naming enums, always use **UpperCamelCase**, and for enum values, use **lowerCamelCase**, as recommended by the Dart Style Guide. To learn more, refer to the guide on **[Naming Variables & Functions](../../resources/style-guide.md)**.
:::
