---
keywords: ['wrap', 'text', 'container', 'overflow']
slug: /wrap-text-in-containers
title: Wrap Text Inside Containers
---

# Wrap Text Inside Containers

When building responsive layouts, text may overflow its container if not properly configured. This guide explains how to wrap text so that it fits within the container, especially in layouts such as ListView or Column.

:::info[Prerequisites]
- Basic understanding of how to use widgets in FlutterFlow.
- A text element placed inside a container or layout widget (e.g., ListView, Row, Column).
:::

Follow the steps below to properly wrap text:

   1. **Select the Text Widget**  
      Choose the text element you want to wrap inside a container.

   2. **Enable Soft Wrap**  
      In the properties panel, locate the **Text Styling** section and enable **Soft Wrap**. This allows the text to break into multiple lines.

   3. **Set Max Lines (Optional)**  
      You can optionally set a **Max Lines** limit to control how many lines the text should wrap into before being truncated.

   4. **Use Expanded or Flexible (When in Row)**  
      If your text is inside a `Row`, wrap it in an `Expanded` or `Flexible` widget to prevent overflow.

   5. **Adjust Container Width**  
      Ensure the container has a defined or constrained width. Unlimited width will cause the text to expand rather than wrap.

   6. **Use Overflow Handling (Optional)**  
      Set the **Overflow** property to `ellipsis`, `clip`, or `fade` depending on how you want to handle excess text.

   ![](imgs/20250430121501151202.png)

:::tip
When using a `Row`, wrapping long text will not work unless the text widget is inside an `Expanded` or `Flexible` widget. This ensures the text takes only available space and can wrap as needed.
:::

:::note
- Avoid placing long text directly inside a Row without constraints.
- Soft wrap works best when the container or parent widget has width restrictions.
:::

:::info[Additional Rescources]
- [Flutter Text Overflow Class](https://api.flutter.dev/flutter/widgets/TextOverflow-class.html)
:::