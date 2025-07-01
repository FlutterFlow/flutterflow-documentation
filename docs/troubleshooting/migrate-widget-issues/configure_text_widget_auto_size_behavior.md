---
keywords: ['widget', 'auto size', 'text widget']
slug: /configure-text-widget-auto-size-behavior
title: Configure Text Widget Auto Size Behavior
---

# Configure Text Widget Auto Size Behavior

The `Auto Size` option allows the `Text` widget to automatically reduce its font size to fit within its parent widget. This guide outlines the expected behavior and conditions required for this feature to function correctly.

:::info[Prerequisites]
- A `Text` widget has been added to the canvas.
- The widget is placed inside a parent widget such as a `Container` or `Stack`.
:::

## Configure Parent Widget Dimensions

  To enable `Auto Size`, the `Text` widget must be inside a widget that has both defined width and height. Without these constraints, the font size cannot be adjusted automatically.

  1. Select the `Text` widget.
  2. Check its parent widget.
  3. Ensure both width and height are explicitly defined.

  :::warning
  Without defined dimensions, the `Auto Size` feature may not behave as expected.
  :::

  **Behavior Scenarios:**

    The following examples illustrate how `Auto Size` behaves under different container configurations:

      - Container with width set to `infinity` and height set to `100px`, `Auto Size` disabled. The text may overflow beyond the container.

      - Container with width set to `infinity` and height set to `100px`, `Auto Size` enabled. The font size adjusts to fit the defined height.

      - Container with width set to `30%` and no height defined, `Auto Size` enabled. The feature has no visible effect due to missing height constraint.

      - Container with width set to `70%` and height set to `50px`, `Auto Size` enabled. The text is resized to the minimum allowed font size to remain within the container.

        ![](../assets/20250430121459696014.png)

  :::tip
  Use `Auto Size` with percentage-based dimensions for better responsiveness. For example, set the container width to `30%` and enable `Auto Size` to allow the text size to adjust as the screen size changes.
  :::

  :::note
  The `Auto Size` feature has a minimum font size threshold. If the container becomes too small, text may clip or overflow when resizing is no longer possible.
  :::