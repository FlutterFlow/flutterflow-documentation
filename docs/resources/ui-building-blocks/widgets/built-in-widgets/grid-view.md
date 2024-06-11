---
title: GridView
---

The GridView properties you've shared help configure how items are organized and displayed within a grid structure. Each property serves to adjust the layout, spacing, and the overall interactive behavior of the GridView. Here's what each property means:

Axis:

Defines the scrolling direction of the GridView. "Vertical" means items will be scrolled vertically. The other option, typically, is "Horizontal" for horizontal scrolling.
Cross Axis Count:

Determines the number of columns (in a vertically scrolling grid) or rows (in a horizontally scrolling grid). Here, it is set to 3, meaning there are three columns in a vertical grid.
Cross Axis Spacing:

Specifies the space between each column (in a vertical grid) or row (in a horizontal grid). Set to 10, this means there is 10 pixels spacing between each column or row.
Main Axis Spacing:

Sets the spacing between items along the main axis. For a vertical grid, this would be the vertical spacing between rows of items, also set to 10 pixels here.
Child Aspect Ratio:

Defines the ratio of the width to the height of items within the grid. An aspect ratio of 1 means each child within the grid will be as wide as it is tall, forming a perfect square.
Start Spacing and End Spacing:

These properties allow for additional spacing at the beginning and end of the GridView along the main axis. This can be used to add padding at the start or end of the grid content.
Shrink Wrap:

When enabled, this property makes the GridView only occupy as much space as is needed by the children, rather than expanding to fill the available space. This is useful when you want the GridView to be as compact as possible.
Primary:

If set to true, this makes the GridView the primary scrollable content in the surrounding context, which can affect how it interacts with other scrolling views.
These properties collectively configure how the GridView behaves and appears, providing flexibility in handling various layout needs within your application.