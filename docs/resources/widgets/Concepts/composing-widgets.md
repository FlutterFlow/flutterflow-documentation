---
title: Composing Widgets
sidebar_position: 2
---

# Composing widgets

When creating a user interface in FlutterFlow, you can think of using widgets
like building with blocks. Each widget can be
combined with others to form more complex parts of your app's interface. For
instance, you might use a basic widget like a Text or Button, and place it
inside a layout widget such as a Row or Column to position it alongside other
elements. As you nest these widgets inside one another, you create a layered and
interconnected structure.

## Rows vs Columns vs Stack

In Flutter, Rows, Columns, and Stacks are fundamental layout widgets that help
you structure the UI by organizing other widgets in different visual
arrangements. Here's how each one works:

### Row

A Row arranges its child widgets in a horizontal line. This is useful when you
want to place elements side by side across the screen.

The **main-axis** for a Row is horizontal, meaning that its primary direction of
alignment and spacing concerns the horizontal layout.

### Column

A Column organizes its child widgets vertically, stacking them from top to
bottom. This is ideal for placing elements that need to appear in a vertical
sequence, such as a list of messages in a chat app or entries in a form. The
main axis for a Column is vertical, focusing on the vertical arrangement of its
contents.

### Stack

A Stack layers its child widgets on top of each other, allowing for overlapping
elements. In a Stack, widgets can be positioned absolutely relative to the edges
of the Stack, giving you control over the exact location of each element.

Each of these widgets serves different purposes and choosing between them
depends on how you need to arrange your UI components:

Use a **Row** for side-by-side layout.
Use a **Column** for a top-to-bottom layout.
Use a **Stack** for overlapping elements.

## Alignment

### Main Axis

The main axis is the primary direction in which child widgets are laid out in a
Row or Column.

**Row:** The main axis runs horizontally. Child widgets are arranged from left
to right.

**Column:** The main axis runs vertically. Child widgets are laid out from top
to bottom.

Manipulating the main axis allows you to control how widgets are spaced and how
they should expand or align in relation to each other along this primary
direction.

### Cross Axis

The cross axis is perpendicular to the main axis and controls the alignment and
spacing of widgets across this secondary direction.

**Row:** The cross axis runs vertically. It determines how child widgets are
aligned from top to bottom within the row.

**Column:** The cross axis runs horizontally. It controls how child widgets
align from left to right within the column.

### Stack Alignment

For Stacks, the concept of main and cross axes is less applicable because
widgets are aligned relative to the entire area of the Stack. In
FlutterFlow you can control the Stack children's alignment using the
Stack property called Default Child Alignment which positions the children using
X and Y coordinates.

Understanding these axes and their properties is essential for effectively
designing layouts that behave as expected on different screen sizes and
orientations, ensuring a robust and flexible UI.

