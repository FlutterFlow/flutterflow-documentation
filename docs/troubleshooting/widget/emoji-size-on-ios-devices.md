---
keywords: ['ios', 'emoji', 'text', 'size']
slug: /troubleshooting/widget/emoji-size-on-ios-devices
title: Emoji Size on iOS Devices
---

# Emoji Size on iOS Devices

On iOS devices, emojis can appear oversized when rendered inside text widgets, disrupting the intended design and layout. This guide explains how to maintain consistent emoji sizing across all devices using container constraints and auto-sizing configuration.

:::info[Prerequisites]
- You are using a `Text` widget that includes emojis.
- You are targeting iOS devices as part of your app deployment.
:::

## Steps to Maintain Consistent Emoji Size

1. **Wrap the Text Widget in a Container**  
   Create a `Container` with fixed width and height (example `32x32 pixels`) to restrict the emoji size.

2. **Place the Emoji Inside a Text Widget**  
   Add a `Text` widget containing the emoji and place it inside the container.

3. **Set a Font Size**  
   Apply a specific font size to the `Text` widget (example, `16`, `24`, etc.).

4. **Enable Auto-Size**  
   Turn on **Auto-Size** in the `Text` widget to allow responsive resizing within the fixed container.

   ![](../assets/20250430121253238523.png)

   This ensures that the emoji will resize according to the container's constraints and not exceed the intended bounds.

   :::tip
   Auto-Size works best when combined with fixed container dimensions. This approach prevents oversized emojis and supports responsive layouts.
   :::


