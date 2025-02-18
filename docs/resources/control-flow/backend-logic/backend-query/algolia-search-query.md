---
slug: /resources/backend-query/algolia-search-query
title: Algolia Search Query
description: Learn how to perform an Algolia search query in your FlutterFlow app.
tags: [Algolia, Search, API, Backend Logic, Control Flow, FlutterFlow]
sidebar_position: 5
keywords: [Algolia, Search, API, Backend Logic, Control Flow, FlutterFlow]
---

# Algolia Search Query

You can set up an **Algolia Search Backend Query** to automatically trigger a search as soon as the user navigates to the page. This allows users to find documents within a Firestore Collection by simply providing a search term.

This approach is particularly useful for enhancing the user experience, such as dynamically refreshing search results in a **ListView** as the user types in a TextField, like real-time updates.

:::info[Prerequisites]
Before proceeding, ensure that you have **completed the [Algolia integration](../../../../ff-integrations/search/algolia-search.md#algolia-integration)** in FlutterFlow.
:::

To add an **Algolia Search Query**, begin by selecting the scrollable widget that will fetch the results, such as a **ListView**. In the **Properties Panel**, navigate to the **Backend Query** tab, click on **Add Query**, and set the **Query Type** to **Algolia Search**.

Next, configure the search parameters: for **Firebase Collection**, select the Firestore collection you intend to search; for **Search Term**, choose **From Variable** and select the TextField's value (e.g., **Widget State > [Your TextField]**); and specify the optional **Max Results** to determine the number of search results.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/iGWZLhKhNild9c9lNwJt?embed&show_copy_link=true"
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