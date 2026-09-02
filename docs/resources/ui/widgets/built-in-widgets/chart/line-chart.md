---
slug: line-chart
title: Line Chart
tags:
  - FlutterFlow
  - Resources
  - UI
description: Learn how to add a Line Chart widget in your FlutterFlow project.
sidebar_position: 0
keywords:
  - Line Chart
  - Chart
  - Built In Widgets
---
# Line Chart

A Line Chart connects data points with a continuous line and is typically used to visualize changes over time. For example, use it to present progress in a format that is easier to understand than a table of values.

## Adding a Line Chart {#adding-line-chart}

To add a **Line Chart** widget to your project:

1. Add the **Chart** widget from **Base Elements** or the widget tree. The Line Chart is the default chart type.
2. In the properties panel, open **Chart Data** and then expand **[Line] Chart Data 1**.
3. Choose a **Data Source**:
   - **Firestore Documents:** Select the document list under **Data** and then choose the **X Value Field** and **Y Value Field**.
   - **Numbers Lists:** Set the **X Data** and **Y Data** lists. You can also provide **X Labels** and **Y Labels**.
4. To display another line, click **Add Data** and configure the additional line.
5. Under **Chart Properties**, adjust the chart's **Width** and **Height** as needed.

:::tip[Using Firestore Documents]
To use **Firestore Documents**, [**query a collection**](../../../../control-flow/backend-logic/backend-query/query-collection.md) directly on the **Chart** widget or on a top-level widget such as a [**Page**](../../../pages/intro-pages.md) or [**Column**](../../composing-widgets/rows-column-stack.md).
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/57wgyRIi6jONQnLJcTUT?embed&show_copy_link=true"
        title="Add a Line Chart"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameBorder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

## Customizing the Line {#customizing-line}

Select the **Chart** widget, open **Chart Data**, then expand **Line Properties**. Configure the line using these options:

- **Line Color:** Sets the line color.
- **Line Thickness:** Sets the width of the line.
- **Dashed Line:** Displays the line using a dashed pattern.
- **Curved Lines:** Connects data points with a smooth curve. Disable this option to use straight lines.
- **Prevent Overshooting:** Keeps curved lines from extending beyond the actual data values.
- **Show Dots:** Displays a dot at each data point.
- **Fill Below Line:** Fills the area below the line. Use **Fill Color** to set the fill color.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/PYOt3H79AtqvQgUCMhaG?embed&show_copy_link=true"
        title="Customize a Line Chart"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameBorder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

## Customizing the Chart {#customizing-chart}

You can [customize the chart](chart.md#customizing-chart) to match your design by changing the background color, setting axis bounds, showing grid lines, displaying borders, and more.
