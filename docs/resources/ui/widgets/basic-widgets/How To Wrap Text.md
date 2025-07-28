---
keywords: ['wrap', 'text']
slug: wrapping-text-in-containers-and-listviews
title: Wrapping Text in Containers and ListViews
---

# Wrapping Text in Containers and ListViews

When working with text inside containers, `ListView`, or other widgets, you may encounter situations where the text overflows or gets clipped. This is often because the text widget isn’t configured to wrap properly.

## Common Use Case: Text Inside a Container in a ListView

If you have a container inside a `ListView` and text is overflowing, follow these steps to enable wrapping:

### 1. Use a `Text` Widget with `softWrap: true` and `maxLines`
Ensure your `Text` widget is configured like this:

```dart
Text(
  'Your long text here...',
  softWrap: true,
  overflow: TextOverflow.visible,
  maxLines: null,
)
```

![](../assets/20250430121501151202.png)Also, would be good to outline any other use cases where text would overflow and it might not be clear how to wrap it


## 2. Avoid Fixed Widths When Possible

If you're using a fixed width for the container, the text may overflow if it's too long. Instead, use constraints like padding or flexible widgets such as `Expanded` or `Flexible`.

## 3. Wrap Text in a Column or Expanded

If you're placing text in a `Row` or a `Column`, make sure the `Text` widget is wrapped in an `Expanded` or `Flexible` widget so it takes up the available space:

```dart
Row(
  children: [
    Expanded(
      child: Text(
        'This is a long line of text that will now wrap correctly.',
      ),
    ),
  ],
)
```

## Other Scenarios Where Text Might Overflow

- **Inside Buttons**: When the button size is too small for the text.
- **In Cards or Custom Widgets**: If the `Text` widget is placed inside a container with hardcoded constraints.
- **Dialog Boxes**: Particularly when the content is dynamically generated and not sized responsively.

Use proper layout and flexible constraints to ensure text displays correctly on all screen sizes.

## Summary

To prevent text overflow:

- Use `softWrap: true` where needed.
- Avoid hardcoded widths and heights.
- Wrap text with layout widgets like `Expanded`, `Flexible`, or `Wrap`.

These practices will help ensure a responsive, consistent, and readable user interface.
