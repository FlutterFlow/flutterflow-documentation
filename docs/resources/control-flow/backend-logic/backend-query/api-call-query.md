---
slug: /resources/backend-query/api-call-query
title: API Call Query
description: Learn how to perform an API call query in your FlutterFlow app.
tags: [API Call, Backend Logic, Control Flow, FlutterFlow, Backend Query]
sidebar_position: 4
keywords: [API Call, Backend Logic, Control Flow, FlutterFlow, Backend Query]
---

# API Call Query

You can use the **API Call Query** to trigger an API call automatically as soon as the page or widget is loaded. This is helpful if you want to retrieve the data from an API call and display it on a page or widget. For example, showing a list of items in a ListView, showing users details on several Text widgets.


<p></p>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/7AK7XbMTJTvczmET5utt?embed&show_copy_link=true"
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

Before you add this query, ensure you [create an API call](../api/rest-api.md) in your project
:::

## Adding API Call query

Adding API call query comprises the following steps:

1. [Querying API call](#1-querying-api-call)
2. [Showing query data in UI element](#2-showing-query-data-in-ui-element)

### 1. Querying API call

Go to your project page and follow the steps below to define an **API Call** backend query:

1. Select the **widget** (or page) on which to apply the query.

2. Select **Backend Query** from the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel) (the right menu).
3. Select the **Query Type** as ***API Call***.
4. Choose the API **Group or Call Name** from the dropdown. It would display all the API Calls created in your project.
5. If your API call requires variables (e.g., auth token, query parameters, user id, etc.), pass their value by clicking on the **+ Set Additional Variable** button.
6. Click **Confirm**.

<div class="video-container"><iframe src="https://www.loom.
com/embed/a97de9dc59654495b5fa17d388360379?sid=5bf7009c-cf76-4905-a02e-aa21928882e4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



### 2. Showing query data in UI element

Once you have the API Call query defined, you can use the data retrieved from the query to display on widgets present inside. Follow the steps below:

1. Select the **widget** (e.g., `Text`) on which you want to display the data.

2. From the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel), select **Set from Variable**.
3. Select the **Source** as the **YOUR_API_CALL_NAME Response**.
4. Set the **API response Options** to **JSON Body**.
5. Set the **Available Options** to **JSON Path**.
6. Set the **JSON Path Name** to either the custom JSON path or use the already created JSON 
   path. See how to [**create a JSON path**](../../backend-logic/api/rest-api.md#add-json-predefined-path).
7. Click **Confirm**.

<div class="video-container"><iframe src="https://www.loom.
com/embed/f706a263428b45358c1f6a2c7e3df05d?sid=b35ffd12-e894-4cdd-8cb6-0a11888116c2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


