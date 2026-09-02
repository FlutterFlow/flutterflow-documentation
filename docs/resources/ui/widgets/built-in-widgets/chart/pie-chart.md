---
slug: pie-chart
title: Pie Chart
tags:
  - FlutterFlow
  - Resources
  - UI
description: Learn how to add a Pie Chart widget in your FlutterFlow project.
sidebar_position: 2
keywords:
  - Pie Chart
  - Chart
  - Built In Widgets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pie Chart

A Pie Chart divides a circle into sections to show how values are distributed across categories. For example, use it to compare the distribution of different pet types in a survey.

## Adding a Pie Chart

To add a **Pie Chart** widget to your project:

1. Add the **Chart** widget from **Base Elements** or the widget tree.
2. In the properties panel, set **Chart Type** to **Pie**.
3. Open **Chart Data**, then expand **[Pie] Chart Data 1**.
4. Choose a **Data Source**:
   - **Firestore Documents:** Select the document list under **Data**, then choose the **Legend Labels Field** and **Section Values Field**.
   - **Numbers Lists:** Set the **Legend Labels** and **Section Values** lists. The number of labels must match the number of values.
   - **Single Value:** Set the **Section Value**, then click **Add Data** for each additional section.
5. Under **Pie Chart Properties**, click **Add Color** under **Pie Chart Color**. Add at least one color for each section so every section has a distinct color.
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
        src="https://demo.arcade.software/d4bRTcxb5UrhAITleFxo?embed&show_copy_link=true"
        title="Add a Pie Chart Using Firestore Documents"
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


## Customizing the Sections

Select the **Chart** widget, open **Chart Data**, then expand **Pie Chart Properties**. Configure the sections using these options:

- **Pie Chart Radius:** Sets the overall size of the pie chart.
- **Section Borders:** Use **Border Color** and **Border Width** to style the border around each section.
- **Pie Chart Colors:** Sets the color of each section. Click **Add Color** to add more colors or use the delete icon to remove one.
- **Width and Height:** Set the overall chart dimensions under **Chart Properties**.
- **Show Legend:** Displays a legend that associates each section label with its color.
- **Donut Hole Radius:** Adds an inner circle and sets its size, turning the pie chart into a donut chart.
- **Donut Hole Color:** Sets the color of the inner circle.
- **Section Spacing:** Sets the space between adjacent sections.
- **Start Angle:** Sets the angle at which the first section begins.
- **Section Label Type:** Choose **None** to hide labels, **Value** to display the section values, or **Percent** to display their percentage of the total. When labels are enabled, use **Label Position**, **Label Format Type**, and **Section Label Style** to configure the theme text style, font family, font weight, font size, text color, alignment, and shadows.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/nfZCOlJyfaBvn858tVwR?embed&show_copy_link=true"
        title="Customize a Pie Chart"
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

## Customizing the Chart

You can [customize the chart](chart.md#customizing-chart) to match your design by changing the background color, showing and styling the legend, displaying borders, and more.
