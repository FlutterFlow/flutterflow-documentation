---
slug: /integrations/database/refresh-db-request
title: Refresh DB Request Action
description: Learn how to use the Refresh DB Request action in your FlutterFlow app to refresh your database content.
tags: [Database, Refresh, Action]
sidebar_position: 4
keywords: [FlutterFlow, Database, Refresh, Action]
---


# Refresh Database Request [Action]

Using this action, you can see the updated values of an item inside the scrollable widgets such as ListView, GridView, StaggeredView, Row, and Column.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/RHeXnnQJzE4LsuzxJQTE?embed&show_copy_link=true"
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

:::info[Prerequisites]
If you are querying data via a Backend Query, ensure you have enabled the **Single Time Query** in the Backend Query properties (Query Collection or API Call) on any scrollable widget.
:::

Go to your project page on FlutterFlow and follow the steps below to define the Action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the Properties Panel (the right menu), and click **Open**. This will open an **Action flow Editor** in a new popup window.
3. Click on the **+ Add Action**.
4. On the right side, search and select the **Refresh Database Request** (under *Backend/Database*) action.

   1. From the dropdown, select the widget (e.g., ListView, GridView, etc.) on which you have 
   added the backend query.
    
   2. By default, the **Wait for Result** option is enabled. That means the subsequent action(s) will only trigger after this action is finished. If any subsequent action is not dependent on this action or you want to trigger them regardless of the completion of this action, you can turn off this option.
   3. When the **Wait for Result** is enabled, you can specify the **Min Wait Time** and **Max Wait Time** in ms (e.g., 1000ms = 1 second).
       * **Min Wait Time**: Time before triggering the following action(s) or refreshing the UI.
       
       * **Max Wait Time**: Time after which the subsequent action(s) will trigger regardless of the completion of this action.
5. Click **Close**.


<p></p>

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Jd0cQRUg50L0WXNJd56y?embed&show_copy_link=true"
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