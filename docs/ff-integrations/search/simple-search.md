---
slug: /integrations/search/simple-search
title: Simple Search
description: Learn how to implement simple search functionality in your FlutterFlow app to search local data on a device.
tags: [Simple Search, Local Search, Firestore]
sidebar_position: 0
keywords: [FlutterFlow, Simple Search, Local Search, Firestore]
---

# Simple Search 

The simple search allows you to search the data present locally on a device. For example, you could search from the list of strings (stored in a variable) and from the Firestore collection and documents already retrieved on the user's device (displayed on the screen).

:::caution[When to use Simple Search vs Algolia]
We advise using a simple search only for the smaller Firestore collection (with limited records).
Otherwise, it can be slow and/or expensive. For a more extensive collection, consider using the 
[**Algolia search**](../search/algolia-search.md).
:::

<div class="video-container"><iframe src="https://www.loom.
com/embed/af535343b8b648c8b0bdaf29911e2eb3?sid=f842a537-14fa-42a5-b6bf-56fb714458a5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

## Types of Simple Search

There are three types of search you can add to the page:

- **Firestore collection**: To search from the Firestore collection.
- **Documents**: To search from the list of documents stored in a variable.
- **Strings**: To search from the list of strings stored in a variable such as app or 
  page state variable.





## Simple Search [Action]

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the [Properties Panel](../../intro/ff-ui/builder.md#properties-panel) (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.

    1. Click on the **+ Add Action**.
    2. On the right side, search and select the **Simple Search** action.
    3. Select the **Search Type** among the **Firestore Collection**, **Documents**, and **Strings**.
    4. If you select the **Firestore Collection**:
	
       1. Set the **Collection** to the one that you want to search from.
       2. **Select Searchable Fields** to the field that you want to perform the search on.
    5. If you select the **Documents**:
	
       1. Set the **Source** to the variable that holds the list of documents. For example, the 
       result of the query at a top-level widget such as **Page** or **Column**
       2. **Select Searchable Fields** to the field that you want to perform the search on.
    6. If you select the **Strings**:
	
       1. Set the **Source** to the variable that holds the list of strings (e.g., app or page 
       state variable).
    7. Inside the **Search Term** section, set **Widget State > TextField** (where users enter a search term).

<div class="video-container"><iframe src="https://www.loom.
com/embed/b756621799e2437aa8cc7dcef6383f13?sid=29926e1c-864c-4f60-a956-01731b7ae99d" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

