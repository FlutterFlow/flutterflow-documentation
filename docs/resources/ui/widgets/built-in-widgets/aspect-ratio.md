---
slug: aspect-ratio
title: AspectRatio
tags: [Base Elements]
keywords: [AspectRatio, Aspect Ratio, Base Element, Widget]
description: Learn how to add an AspectRatio widget in your FlutterFlow app.
---

# AspectRatio

The `AspectRatio` widget lets you maintain a consistent width-to-height ratio for its child widget. Instead of setting fixed pixel dimensions, you define a ratio, and the widget calculates the height automatically based on the available width. This keeps your UI proportionally consistent across all screen sizes without manual math.

Use it whenever a child widget needs to maintain a predictable shape, regardless of the device — media thumbnails, video players, hero images, or uniform card layouts.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(50.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/FI8IKwnZpiO9d3ujpk5I?embed&show_copy_link=true"
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

In the widget tree, AspectRatio sits as a wrapper around a single child widget, typically an `Image` or `Video player`. The structure looks like this:

```
Container
    └── AspectRatio
        └── Image
```

AspectRatio controls the bounding box. Whatever child you place inside fills that box.

## Configuring the Ratio

Select the AspectRatio widget to open its properties panel. Under **Aspect Ratio**, you'll find a **Ratio** dropdown.

### Preset Ratios

The **Aspect Ratio** widget ships with seven presets covering the most common layout needs:

| Preset | Decimal | Best For |
| --- | --- | --- |
| 1:1 | 1.0 | Profile pictures, avatars, square thumbnails |
| 4:3 | 1.333 | Standard photos, product images |
| 3:2 | 1.5 | Photography, editorial cards |
| 16:9 | 1.778 | Video players, YouTube thumbnails, hero banners |
| 9:16 | 0.563 | Vertical video (Reels, Shorts, Stories) |
| 3:4 | 0.75 | Portrait photos, book covers |
| 2:3 | 0.667 | Posters, portrait cards |

### Custom Value

If none of the presets fit your design, select **Custom** from the dropdown. A **Value** field appears where you enter the ratio as a decimal number.

The formula is simple: divide width by height.

- A 5:4 ratio → enter `1.25`
- A 21:9 ultra-wide ratio → enter `2.333`
- A 4:5 Instagram portrait → enter `0.8`

#### Dynamic Ratio with Variable Binding

The **Value** field supports variable binding. This lets you drive the ratio dynamically at runtime.

**Example use case:** You're building a media feed that shows both landscape videos and portrait photos. Store the ratio as an `double` field in your data model and bind the AspectRatio's value to it. When the feed loads, each card adopts the correct shape automatically — no hardcoded layouts needed.

## Constraint Warning

When AspectRatio is placed inside a parent that provides tight constraints in both dimensions, meaning the parent has already fixed both the width and height, the widget displays a warning.

**What it means:** AspectRatio works by taking the available width and calculating height from the ratio. If the parent has locked the height too, there is no room for AspectRatio to do its job. The ratio is ignored, and the child simply fills the parent's fixed dimensions.

**Common triggers:**

- Nesting it inside a `Container` that has both a fixed width and fixed height set
- Placing AspectRatio inside a `Row` without wrapping it in an `Expanded` or `SizedBox`
- Putting it inside a `Column` with `MainAxisSize` set in a way that squeezes available space

**How to fix it:**

- Remove the fixed height from the parent `Container` and let AspectRatio drive the height.
- If inside a `Row`, wrap AspectRatio in an `Expanded` widget so it receives unconstrained width first.