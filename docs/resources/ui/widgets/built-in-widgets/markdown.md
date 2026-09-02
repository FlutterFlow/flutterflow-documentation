---
tags:
  - FlutterFlow
  - Resources
  - UI
title: Markdown
description: The Markdown widget is used to input and display text using Markdown syntax.
keywords:
  - Markdown
  - Built In Widgets
  - Widgets
last_verified: 2026-09-02
---
# Markdown

The Markdown widget is used to input and display text using [Markdown syntax](https://www.markdownguide.org/basic-syntax/). It allows you to format text easily, without the complexity of a full-fledged WYSIWYG (What You See Is What You Get) editor or the need to write HTML code.

You could use this widget in various applications like note-taking apps, forums, and blogging platforms. They are particularly popular in technical and coding communities for their ease of formatting code snippets and descriptions.

![img.png](imgs/img.png)

## Adding Markdown widget

To add a Markdown widget:

1. Open the [Widget Palette](../../../../intro/ff-ui/widget-palette.md) and locate the **Markdown** widget under the **Base Elements** tab. You can either drag it into your desired location or add it directly from the widget tree.
2. In the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel), enter Markdown in **Data** or bind **Data** to a String variable.
3. Use **Selectable** to control whether readers can select and copy the rendered text. It is enabled on a newly added Markdown widget.

Markdown links are interactive in the running app and open their URL through the platform's available URL handler. Use complete, valid URLs and test them on every target platform. Markdown is rendered as formatted text; do not rely on arbitrary embedded HTML or scripts.

<div class="video-container"><iframe title="Markdown interactive tutorial" src="https://www.loom.com/embed/e4c33cdb4bbf44e194dccbb3c357a317?sid=24c80624-af62-47d4-a60f-53b5f1faeaec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Verify the result

Run the page and confirm that headings, emphasis, and links render instead of appearing as Markdown source. If **Selectable** is enabled, select and copy part of the text. Test every link and sanitize or validate user-provided Markdown and destinations before displaying them.

## Related documentation

See [Launch URL](/concepts/navigation/launch-url) for URL formats and platform considerations.
