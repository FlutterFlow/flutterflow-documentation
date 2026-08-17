---
slug: bar-chart
title: Bar Chart
tags: [Charts, Data Visualization]
description: Learn how to add a Bar Chart widget in your FlutterFlow project.
sidebar_position: 1
---
# Bar Chart

A Bar Chart uses rectangular bars to compare values across categories. The height of each bar represents its value. For example, use it to compare income and expenses across different years.

## Adding a Bar Chart {#adding-bar-chart}

To add a **Bar Chart** widget to your project:

1. Add the **Chart** widget from **Base Elements** or the widget tree.
2. In the properties panel, set **Chart Type** to **Bar**.
3. Open **Chart Data**, then expand **[Bar] Chart Data 1**.
4. Choose a **Data Source**:
   - **Firestore Documents:** Select the document list under **Data**, then choose the **Bar Labels Field** and **Bar Values Field**.
   - **Numbers Lists:** Set the **Bar Labels** and **Bar Values** lists.
5. To display another data series, click **Add Data** and configure its **Bar Values**. New data series appear side by side unless **Stack Bars** is enabled.
6. Under **Chart Properties**, adjust the chart's **Width** and **Height** as needed.

:::tip[Using Firestore Documents]
To use **Firestore Documents**, [**query a collection**](../../../../control-flow/backend-logic/backend-query/query-collection.md) directly on the **Chart** widget or on a top-level widget such as a [**Page**](../../../pages/intro-pages.md) or [**Column**](../../composing-widgets/rows-column-stack.md).
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/mVtcHe2LhRyiqY9zcleA?embed&show_copy_link=true"
        title="Add a Bar Chart"
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

## Customizing the Bars {#customizing-bars}

### Customizing an Individual Data Series {#customize-bar-for-an-individual-chart-data}

Select the **Chart** widget, open **Chart Data**, then expand **Bar Properties** for the selected data series. Configure it using these options:

- **Bar Color:** Sets the bar color for the selected data series.
- **Border Width:** Sets the width of the border around each bar.
- **Border Color:** Sets the color of the bar borders.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/FAm2CXwaLkpVFr7UQkR6?embed&show_copy_link=true"
        title="Customize a Bar Chart Data Series"
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

### Customizing All Bars {#customize-all-bars}

Select the **Chart** widget and open **Bar Styling Properties**. Configure all bars using these options:

- **Bar Width:** Sets the width of each bar.
- **Group Spacing:** Sets the space between groups of bars.
- **Bar Spacing:** Sets the space between adjacent bars within a group.
- **Stack Bars:** Combines multiple data series into stacked bars instead of displaying them side by side.
- **Main Axis Alignment:** Controls how the bars are distributed along the chart's horizontal axis.
- **Axis Bounds:** Sets the lower and upper bounds of the Y-axis using **Min Y** and **Max Y**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/wdZ7D2UsuaKy2eGETnqm?embed&show_copy_link=true"
        title="Customize All Bars"
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
