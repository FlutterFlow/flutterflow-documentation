---
slug: /integrations/database/refresh-db-request
title: Refresh DB Request Action
description: >-
  Learn how to use the Refresh DB Request action in your FlutterFlow app to
  refresh your database content.
tags:
  - FlutterFlow
  - Integrations
  - Database
sidebar_position: 4
keywords:
  - FlutterFlow
  - Database
  - Refresh
  - Action
last_verified: 2026-09-02
---
# Refresh Database Request [Action]

Use this action to rerun a supported one-time backend query and rebuild its target widget with the result. Typical targets include ListView, GridView, StaggeredView, Row, and Column.

Refreshing does not bypass database security rules, API authorization, query filters, or backend errors. It also does not guarantee that another system has finished an earlier asynchronous write. Chain the refresh after the write completes when the refreshed data depends on that write.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/RHeXnnQJzE4LsuzxJQTE?embed&show_copy_link=true" title="Refresh DB Request Action interactive tutorial"
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

   2. By default, the **Wait for Result** option is enabled. Subsequent actions wait for this request. Keep it enabled when later actions use the new data or need to handle completion in order. Disable it only when the following work is independent; a later action must not assume the refresh succeeded.
   3. When the **Wait for Result** is enabled, you can specify the **Min Wait Time** and **Max Wait Time** in ms (e.g., 1000ms = 1 second).
       * **Min Wait Time**: Time before triggering the following action(s) or refreshing the UI.

       * **Max Wait Time**: Time after which subsequent actions may continue even if the refresh has not completed. Treat this as a timeout, not as proof of success, and provide an error or retry path where appropriate.
5. Click **Close**.


<p></p>

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/Jd0cQRUg50L0WXNJd56y?embed&show_copy_link=true" title="Refresh DB Request Action interactive tutorial"
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

## Related documentation

See [Backend Query](/resources/backend-query) to configure the query this action refreshes.
