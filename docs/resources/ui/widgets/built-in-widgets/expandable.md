---
tags:
  - FlutterFlow
  - Resources
  - UI
title: Expandable
description: >-
  An Expandable widget is a user interface component used to show or hide
  content dynamically.
keywords:
  - Expandable
  - Built In Widgets
  - Widgets
last_verified: 2026-09-02
---
# Expandable

An Expandable widget is a user interface component used to show or hide content dynamically. It consists of a header that can be tapped to reveal or collapse additional content. This functionality is particularly useful in interfaces where space is at a premium, such as in mobile applications or complex forms, enabling users to access information on demand without overwhelming the screen with too much content all at once.

**Default Widget Tree for Expandable Widget**

When you add an **Expandable** widget, the default widget tree typically includes:

- **Header:** The visible part of the widget when it is both collapsed and expanded. This usually contains a label or icon indicating what the expandable content relates to.
- **Collapsed View:** The default state showing minimal content or summarization.
- **Expanded View:** Contains more detailed information or additional controls that are visible when the widget is expanded.

![expandable-widget-tree.avif](imgs/expandable-widget-tree.avif)

## Expandable Widget Properties

- **Icon Properties:** For Icon Properties, check out the **[Icon](../../widgets/basic-widgets/icons.md)** guide.
- **Expandable Properties:**
  - **Active View:** Chooses whether the UI Builder is editing the Collapsed or Expanded child. It does not set the initial state in the running app.
  - **Initially Expanded:** Determines if the widget should be expanded by default when the view is first loaded.
  - **Tap Header to Toggle:** Allows the user to expand or collapse the content by tapping the header.
  - **Tap Body to Expand:** Allows a tap on the Collapsed child to expand the panel.
  - **Tap Body to Collapse:** Allows a tap on the Expanded child to collapse the panel.

- **Style Properties:**
  - **Width & Height:** Dimensions of the widget, which can be set to infinity to take full width or height.
  - **Background Color:** The color behind the expandable content.
  - **Header Alignment:** Vertically aligns the header and toggle icon at the top, center, or bottom.

- **Icon Properties:** Use **Has Icon** to show or hide the control. When enabled, you can choose separate **Collapsed Icon** and **Expanded Icon** values, plus icon size, color, and padding.

By default, a new Expandable starts collapsed, toggles when its header is tapped, shows an icon, and uses centered header alignment. Body-tap expansion and collapse are off until enabled.

## Respond to expansion changes

Use the **On Toggle** action trigger when another part of the app should respond after the panel opens or closes. For a non-dynamic Expandable, its Boolean expanded state is also available from **Widget State**. Instances created as dynamic children manage their state independently and do not expose one shared controller state.

## Verify the interaction

Run the page and tap the header. The Collapsed child should be replaced by the Expanded child and the icon should change. Reload the page to confirm **Initially Expanded** controls the starting view. If body taps should toggle the panel, test the Collapsed and Expanded children separately because they use different properties.

### Practical use of Expandable
This setup allows for a highly customizable Expandable widget, making it suitable for FAQs, forms, lists, or other content that benefits from a clean, compact initial appearance with options for more detailed information. The ability to fine-tune how and where icons appear, along with the behavior of the widget's expandability, gives developers significant control over user experience and interface design.
