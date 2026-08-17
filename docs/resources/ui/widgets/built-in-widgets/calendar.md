---
slug: calendar
title: Calendar
tags: [Base Elements]
description: Learn how to use the Calendar widget in your FlutterFlow project.
---

# Calendar

The **Calendar** widget allows users to view and select dates, making it ideal for booking appointments, managing schedules, displaying events, or filtering records by date.

## Adding a Calendar Widget

To add and configure a calendar:

1. Add the **Calendar** widget from the **Base Elements** section of the Widget Palette.
2. Under **Calendar Properties**, enable **Week View** to display one week at a time. Leave it disabled to display the full month.
3. Use the **Calendar** property to set the date displayed when the calendar first opens. If no date is set, the calendar uses the current date.
4. Configure the available selection and appearance settings for your use case.

The initially displayed date can come from app state, backend data, an API response, or another dynamic source.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/rn6hKu0Iaosf4y31G18d?embed&show_copy_link=true"
        title="Add and Configure the Calendar Widget"
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

## Using the Selected Date

Selecting a date provides both a value and an event:

- **calendarSelectedDay widget state:** Holds the date currently selected in the Calendar. To use it as a value, choose **Set from Variable > Widget State > calendarSelectedDay**. Use it to display the selected date, filter a list, or pass it to a query.
- **On Date Selected event:** Runs an Action Flow each time the user selects a date. To configure it, select the Calendar widget and open **Actions > On Date Selected**. Use it when something should happen immediately, such as updating state, refreshing data, or showing available appointment times.

The widget state and event can be used together. For example, use **On Date Selected** to trigger an update-state action, then set the action's value from **Widget State > calendarSelectedDay**. The event determines _when_ the action runs, while the widget state provides _which date_ was selected.

:::tip
For range selection, **calendarSelectedDay** provides start and end values. Choose **Start** or **End** under **Range Part** when using the value. Both values return the same date for single-date selection.
:::

## Customizing the Calendar Widget

Select the **Calendar** widget and use the **Calendar Properties** section to customize its appearance and behavior:

- **Calendar:** Sets the date displayed when the Calendar opens.
- **Icon Colors:** Sets the color of the calendar navigation icons.
- **Two-row Header:** Displays the calendar header across two rows instead of one.
- **Week View:** Shows one week at a time instead of the full month.
- **Start week on Monday:** Uses Monday as the first day of each week. When disabled, the week starts on Sunday.
- **Row Height:** Sets the height of each calendar row.
- **Title Style:** Customizes the month and year title.
- **Day of Week Style:** Customizes the weekday labels shown above the dates.
- **Date Style:** Customizes the appearance of regular dates.
- **Selected Date Style:** Customizes the appearance of the currently selected date.
- **Inactive Date Style:** Customizes inactive dates, such as dates outside the currently displayed month.
