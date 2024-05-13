---
slug: enums
title: Enums
tags: []
description: Learn how Enums can enhance the management of application states, product types, and process statuses by providing a robust method to handle predefined sets of values.
sidebar_position: 3
---

# Enums

Enums prevent invalid values from being assigned. For example, if you have an enum for days of the week, you can't mistakenly assign a non-existent day. In contrast, with strings or numbers, you might accidentally use an invalid or misspelled value like "Sundey" or "Sinday".

Here are some real-world examples where using Enums is beneficial:

- **Application States**: A media player might use enums to keep track of playback states (e.g., PLAYING, PAUSED, STOPPED).
- **Product Types, Sizes, or Categories**: A clothing store app might use enums to categorize clothing sizes (SMALL, MEDIUM, LARGE).
- **Order or Process Status**: For tracking the status of orders, processes, or tasks (PENDING, IN_PROGRESS, COMPLETED, CANCELED).

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
1. Access the Enum values by navigating to the **Set from Variable** menu, then selecting **Enums > [your enum name] > Values**.

![enums.avif](../imgs/enums.avif)