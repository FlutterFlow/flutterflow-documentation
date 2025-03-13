---
slug: calendar
title: Calendar
tags: [Base Elements]
description: Learn how to add Calendar widget in your FlutterFlow project.
---

# Calendar
The Calendar widget shows days in a month and a week. You can use the Calendar widget to filter the event list by date. For example, showing appointments on a specific date.


## Adding Calendar to your project

To add the Calendar widget to your project:

1. Drag the **Calendar** widget from the **Base Elements** tab (in the Widget Panel) or add it directly from the widget tree.
2. On running the app, the calendar widget shows today's date by default. To set a different date, follow the instructions as below.
3. Move to the Properties Panel and scroll down to the **Calendar** section.
4. Find the **Initial Date** property, click **Unset,** and set the date from the variable (app state, API, etc.).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/1GJn5refWUefIpiVeOJH?embed&show_copy_link=true"
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

## Show/save the selected date

When you select/change any date on the calendar, you can display it on the page or save it in a variable/Field (as Timestamp datatype) for later access.

Let's build an example of showing the selected date in a Text widget that looks like the one below:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/flTBTqgrm4qEVJKVX9CK?embed&show_copy_link=true"
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

The steps to show the selected date in the Text widget are as follows:  

### 1. Create an app state variable

Changing the date on the calendar widget emits the selected date in a variable called *calendarSelectedDay*. You can't use this value directly in the Text widget because the Text widget can only accept String values. Hence it would help if you created an app state variable that will store the *calendarSelectedDay* value and then display the selected date in a Text widget (using Date Format Options).

To create the app state variable, please find the instructions [here](../../../../resources/data-representation/app-state.md#create-app-state-variable).

It should look something like this:

![app-state-variable-calendar.avif](imgs/app-state-variable-calendar.avif)

### 2. Saving selected date in app state variable

To save the selected date in an app state variable, you can utilize the ***On Date Selected*** event and then add actions to update the app state variable:

Here are the steps in detail:

1. Select the **Calendar** widget from the widget tree or canvas area.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action flow Editor** in a new popup window.
    1. Click on the **+ Add Action**.
    2. On the right side, search and select the [**Update App State**](../../../../resources/data-representation/app-state.md#update-app-state-action) action.
    3. Set the **Select field to update** to the App State variable **name**.
    4. Choose the **Select Update Type** to **Set Value**.
    5. Set the **Value Source** to **From Variable**.
    6. Set the **Source** to **Widget State**.
    7. Set the **Available Options** to the **calendarSelectedDay**.
    8. If there is a multiple date selection (date range selection), you can choose which date to pick up. You can choose to set the start or end date by setting the **Range Part** to **Start** or **End**. For a single date selection (which is by default), the start and end date would be the same.

  
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/dryKpzgT3k6ddEeKimgO?embed&show_copy_link=true"
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

### 3. Showing date in Text widget from an app state variable

To show the selected date in the Text widget:

1. Select the **Text**, move to the properties panel, and click **Set from Variable**.
2. Select **Source** as **App State** and **Available Options** to the App State Variable **name**.
3. (Optional) Set the **Timestamp Format** to display the date in a specific format.
4. (Optional) Set the default value if you wish to.
5. Click **Confirm**.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/9TfBlx75kKNdo5B9tZXO?embed&show_copy_link=true"
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

## Using a calendar to filter the list

You might need to use the calendar widget to filter the list of events (appointments, meetings, tickets, etc.). You can do so by applying the filter on the backend query and passing the selected date as a parameter.

Let's build an example that shows the Todos list (from the Firestore collection) based on date. Here's how it looks:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/GLkPvB0KKYKZ6zz071KL?embed&show_copy_link=true"
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

The steps to use the calendar to filter the list are as follows:

### 1. Prepare data

Before you use the calendar to filter the list, you need to have a list of items with at least one field that holds the date. This date will be used to match against the date selected from the calendar. Skip if you already have data in such a format.


You can create a Firestore collection with a date field like the one below:

![calendar-prepare-data.avif](imgs/calendar-prepare-data.avif)

### 2. Building UI

Your UI must include at least two calendars and ListView widgets. Here's how you add it:

1. Add the **Calendar** widget. To provide a better user experience, you can switch to the week view.
2. Add the **ListView** and show the data from the Firestore collection.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/4eApAqcwXihUXwegmens?embed&show_copy_link=true"
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

### 3. Apply date filter on backend query

Finally, you can add a filter on the existing backend query or a new one and provide the selected date from the calendar.

To apply filter by date:

1. Select **ListView** from the widget tree or the canvas area.
2. Click on the **Backend Query** tab (on the right side of your screen).
3. Query a collection. Skip if you have already done so.
4. Scroll down and click on the **+ Filter** button at the bottom
5. Find the **Field Name**, click on the Unset, and select the field on which you would like to apply the filter.
6. Find the **Relation** dropdown, click on the **Unset** and choose the relation as **Equal To**.
7. Set the **Value Source** to **From Variable**.
8. Set the **Source** to **Widget State**.
9. Set the **Available Options** to the **calendarSelectedDay**.
10. If there is a multiple date selection (date range selection), you can choose which date to pick up. You can choose to include the start or end date by setting the **Range Part** to **Start** or **End**. For a single date selection (by default), the start and end date would be the same.
11. Click **Confirm**.
12. After this, you can display the actual data in UI elements.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/w3dU6VaYsv6DTvkzXj8m?embed&show_copy_link=true"
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

## Customizing calendar

The Properties Panel can be used to customize the appearance and behavior of your widget.

### Changing icon color

You can change the color of the icons displayed on the top right side of the calendar. to do that:

1. Select **Calendar** from the widget tree or the canvas area.
2. Move to the Properties panel and scroll down to the **Calendar** section.
3. Find the **Icon Colors** property, click on the box next to **Unset**, select the color, and then click **Use Color** or click on **Unset** and enter a Hex Code directly. You can also choose the color by clicking the Palette and Simple button.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/fB2aHoT3Qv9FrlXP4wGV?embed&show_copy_link=true"
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

### Separate title and icons

By default, the calendar title (displaying the current month-year) and the icon for changing the month are positioned on the same row. If you wish to place them in separate rows, navigate to the **Properties Panel > Calendar >** and **enable the Two-row Header** option.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(35.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/C6QmsfHDwktnhPyFkuYi?embed&show_copy_link=true"
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

### Changing row height

Changing the row height allows you to adjust the calendar height as per your design.

To change the row height:

1. Select **Calendar** from the widget tree or the canvas area.
2. Move to the Properties panel and scroll down to the **Calendar** section.
3. Find the **Row Height** property and enter the value.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/srhb02TuijJ6YI555RV0?embed&show_copy_link=true"
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
