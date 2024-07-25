---
slug: /resources/backend-query/algolia-search-query
title: Algolia Search Query
description: Learn how to perform an Algolia search query in your FlutterFlow app.
tags: [Algolia, Search, API, Backend Logic, Control Flow, FlutterFlow]
sidebar_position: 5
keywords: [Algolia, Search, API, Backend Logic, Control Flow, FlutterFlow]
---

# Algolia Search Query

You can set up an Algolia Search backend query to automatically trigger a search once the user navigates to the page. This will help users to find any document present inside a Firestore Collection by providing a search term.

:::info[Prerequisites]

There are some prerequisites before you start defining the search query:

1. A properly configured **Algolia account**.
2. Have at least one **Firestore Collection** connected to the Algolia account.
3. Completed Algolia configuration on **FlutterFlow**.
:::

:::warning[Complete setup]
If you haven't completed these steps, please follow the instructions present on the following 
page before proceeding: [Algolia Search](#)
:::

## Building Search UI

You will need a text to be used as the **search term** while using the Algolia search backend query. Let's build a search UI to take the term as user input and display the results returned from the query in a list. You can use a `TextField` to take the search term as input and a `ListView` to display the results.

Follow the steps below to create this UI:

1. Drag a TextField widget from the [Widget Panel]
(/getting-started/ui-builder/navigation-menu/widget-and-component-panel) and drop it onto the canvas. (In the demo below, the TextField is placed inside the AppBar of the app).
2. You can customize the TextField properties to match your app's design style. Add a search Icon to signify that it's a search field.
3. Check the **Update Page On Change** checkbox. This helps to update the page as the user types inside the TextField. This would be required to use the latest text field value as the search term.
4. Set an **Update Delay** (in milliseconds). This specifies the amount of time after the user stops typing to update the page.
5. Now, drag and drop a ListView widget onto the canvas.
6. Similarly, you can add widgets inside the ListView that you need for displaying the search result. (In the following demo, you will find that two Text widgets are added inside a Column).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/9FuHgvGaYMcNyy6SaO45?embed&show_copy_link=true"
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

## Define Algolia Search Backend Query

Once the UI of the page is ready, you can move on to the next step, that is, defining an Algolia Search Backend Query.

Follow the steps below to define the Backend Query:

1. Select the **widget** (or page) on which to apply the query. In this case, it's recommended to 
apply the query on the `ListView` widget.
2. Select **Backend Query** from the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel) (the right menu).
3. Select the **Query Type** as ***Algolia Search***.
4. Choose the **Firebase Collection** on which to perform the search.
5. Define from where to get the **Search Term**. You can either choose ***Specific Value*** or ***From Variable***. If you want to use a `TextField` value as the search term, you should choose *From Variable*.
6. If you have chosen **Specific Value**,define the term inside the field present.
7. If you have chosen ***From Variable***, select a **Source** from the dropdown menu and then select an option from the **Available Options**. For example, if you want to use the value of a `TextField`, select the Source as ***Widget State*** and choose the field name under Available Options.
8. Set the number of maximum search results to fetch under **Max Results**. Keep this field blank if you want to fetch all the matching search results.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/WdDxin8loDO8Pt3um1H0?embed&show_copy_link=true"
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

## Display Search Results

Follow the step below to display the search results inside the `ListView`:

1. Select a **widget** present inside the `ListView`, for example, a `Text` widget.
2. Click **Set from Variable** from the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel) (right menu).
3. From the **Source** dropdown menu, choose the response of the Algolia Search that you had defined on the ListView widget.
4. Under **Available Options** select the name of the field whose value you want to use.
5. (Optional) You can specify a **Default Value** that would be shown if the field value is empty.
6. Click **Save**.
7. Repeat **Steps 1 to 6** for using the search response data on any other widget.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/rlecxtQjsAojNh7V4hlD?embed&show_copy_link=true"
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

