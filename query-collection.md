---
slug: /resources/backend-query/query-collection
title: Query Collection / Table
description: Learn how to query a collection in your FlutterFlow app.
tags: [Query Collection, Backend Query, Backend Logic, Control Flow, FlutterFlow]
sidebar_position: 2
keywords: [Query Collection, Backend Query, Backend Logic, Control Flow, FlutterFlow]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Query Collection / Table

Quering Firestore Collection or Supabase Table helps you to retrieve a record (or a list of records) automatically whenever a
user navigates to the page containing the query. The information that is present in the record can
be used to update any widget present inside.

:::info[Prerequisites]
- To query Firestore collection, complete the [**Firebase setup**](../../../../ff-integrations/firebase/connect-to-firebase-setup.md) and have some data in a [**Collection**](../../../../ff-integrations/database/cloud-firestore/creating-collections.md).
- To query Supabase table, complete the [**Supabase**](../../../../ff-integrations/supabase/supabase-setup.md) Setup and have some data in a [**table**](../../../../ff-integrations/supabase/supabase-setup.md#create-tables-in-supabase).
:::

## Defining the Query

Go to your project page on FlutterFlow and follow the steps below to define a **Query Collection**
backend query:

1. Select the **widget** (or page) on which to apply the query.
2. Select **Backend Query** from
   the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel) (the right menu).
3. Select the **Query Type** as ***Query Collection***.
4. Choose the Firestore **Collection** to use for performing the query.
5. Under **Query Type**, select either ***List of Documents*** (returns a list of document
   references) or ***Single Document*** (returns only one document reference).
6. If you have selected the **List of Documents**in the previous step, you can set a **Limit** to
   the maximum number of documents returned.
7. If you want to apply any **filter** for retrieving the documents, click **+ Filter** button.
   Select a **Field Name** that you want to use as the filter, choose a **Relation** (
   eg, `Equal To`, `Greater Than`), and then select the **Value Source** (either as
   a `Specific Value` or `From Variable`) with which the relation is to be checked.
8. You can also set the **order** in which the documents should be returned, click **+ Order By**
   button. Select a **Field Name** to be used for ordering, and choose the **Order** to be
   either `Increasing` or `Decreasing`.
9. Below are some optional settings that you can configure based on your requirements:
    - **Single Time Query**: When this is disabled, the query results will automatically refresh whenever documents or rows are created, updated, or deleted. However, for **Supabase**, this option is enabled by default, meaning the query will run only once. To enable real-time updates, you must turn it off.
    - **Ignore Empty Filter Values**: Disabled by default, meaning the query will attempt to find documents with empty text fields if any filter value is empty. When enabled, the query will ignore fields with empty filter values instead.
    - **Filter on Null Values**: By default, if any filter value is null, the query will ignore that filter. Enabling this option will include null filters in the query.
    - **Enable Infinite Scroll**: To implement infinite scrolling, enable this option and follow the instructions here.
10. Click **Confirm**.
11. If the selected query returns a list of documents and if it's applied to any flexible widget (like `Column`, `Row`, or `ListView`) then FlutterFlow will generate the children widgets
    dynamically. A dialog will be displayed with a similar message, click **Confirm**.

:::info
The instructions to query a Supabase table are almost the same, except that for **Query Type**, you should select **Supabase Query**.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/gnze0w6tZ9INvYmqO6SS?embed&show_copy_link=true"
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

:::warning[Limitations of Supabase Streaming with Filters]
When using Supabase query with real-time updates enabled, you have the following limitations:

- **Only One Filter is Supported:** Supabase streaming supports only a single filter. Combining multiple filters (e.g., `isActive = true AND city = 'Los Angeles'`) is not allowed.
- **Delete Events are not Filterable:** Streaming queries do not detect deletions, even if the deleted row matches the filter condition. For example, If you are streaming rows with the filter `city = 'New York’` and a row is deleted, the query output will not reflect the deletion.
- **Updates that remove Rows from Filters are not Tracked:** Changes that make a row no longer match the filter condition (e.g., updating `isActive` from `true` to `false`) will not trigger an update in the query output.

For more details, refer to the limitations mentioned in the [**official Supabase docs**](https://supabase.com/docs/guides/realtime/postgres-changes?queryGroups=language&language=js&queryGroups=database-method&database-method=dashboard#delete-events-are-not-filterable).
:::

## Using Query Data

The documents retrieved from the backend query can be used to set the record values to the widgets
present inside. Follow the steps below to use the document record data:

1. Select the **widget** (eg, `Text`, `Image`, or `ToggleIcon`) on which you want to set the record
   data.
2. From the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel), select **Set from
   Variable**.
3. Choose the **Source** as the record variable (the variable gets automatically generated when you
   add the Collection query).
4. Under **Available Options**, select a field name from the dropdown.
5. You can also specify a **Default Value** (it is used if the record field is empty).
6. Click **Save**.

You can follow similar steps for using the record data on the other widgets as well.

<Tabs>
<TabItem value="1" label="Display Data from Firestore Collection" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/lduCQak3hFCUC1xNVP1c?embed&show_copy_link=true"
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
</TabItem>
<TabItem value="2" label="Display Data from Supabase Table">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/utIKpcL7km05zSnZvLaz?embed&show_copy_link=true"
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
</TabItem>
</Tabs>

## FAQs
<details>
<summary>Why aren't real-time updates working for my table in Supabase project?</summary>
<p>
First, ensure that the **Single Time Query** option is disabled in the query where you've added it. Then, verify that the real-time feature is enabled for your table in Supabase project. You can find this option in the top-right corner of the table viewer.

![enable-realtime-updates-sb-table.avif](../imgs/enable-realtime-updates-sb-table.avif)

Additionally, you can enable real-time updates when creating a new table.

![enable-realtime-updates-sb-table.avif](../imgs/enable-realtime-updates-sb-table-2.avif)
</p>
</details>