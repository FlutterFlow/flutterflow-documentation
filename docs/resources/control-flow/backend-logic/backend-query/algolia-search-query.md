---
slug: /resources/backend-query/algolia-search-query
title: Algolia Search Query
description: Learn how to perform an Algolia search query in your FlutterFlow app.
tags:
  - FlutterFlow
  - Resources
  - Backend Query
sidebar_position: 5
keywords:
  - Algolia
  - Search
  - API
  - Backend Logic
  - Control Flow
  - FlutterFlow
last_verified: 2026-09-02
---
# Algolia Search Query

You can set up an **Algolia Search** backend query on a page or widget to search an indexed Firestore collection when that query is built. Bind **Search Term** to a string such as **Widget State > [TextField]** to make results respond to user input.

This approach is particularly useful for enhancing the user experience, such as dynamically refreshing search results in a **ListView** as the user types in a TextField, like real-time updates.

:::info[Prerequisites]
Before proceeding, ensure that you have **completed the [Algolia integration](../../../../ff-integrations/search/algolia-search.md#algolia-integration)** in FlutterFlow.
:::

To add an **Algolia Search Query**, begin by selecting the scrollable widget that will fetch the results, such as a **ListView**. In the **Properties Panel**, navigate to the **Backend Query** tab, click on **Add Query**, and set the **Query Type** to **Algolia Search**.

Next, configure the search parameters: for **Firebase Collection**, select the indexed Firestore collection; for **Search Term**, provide a string or select a variable; and optionally set **Max Results**. Leaving **Max Results** empty applies no FlutterFlow result limit. Collections with a location field can also expose a search location and radius.

When the term comes from a TextField, enable an appropriate debounce and consider a minimum term length before searching. This avoids a remote query for every keystroke and reduces transient, low-quality results.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/iGWZLhKhNild9c9lNwJt?embed&show_copy_link=true" title="Algolia Search Query interactive tutorial"
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

## Verify the search query

Test an empty term, exact and partial matches, no-match text, special characters, the result limit, and location filtering when used. Confirm the UI distinguishes loading, empty, and error states and that displayed fields come from the current search result rather than a stale list item.
