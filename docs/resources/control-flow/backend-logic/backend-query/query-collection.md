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

To add a Firestore collection or Supabase table query:

1. Select the widget or page where you want to run the query.
2. Open **Backend Query** from the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel) and click **Add Query**.
3. Choose the backend source and records to return:
   - **Firestore:** Set the query type to **Query Collection**, select a **Collection**, then choose **List of Documents** or **Single Document**.
   - **Supabase:** Set the query type to **Supabase Query**, select a **Table**, then choose **List of Rows** or **Single Row**.
4. Configure any filters required by the query:
   - **Firestore:** Under **Filters**, click **+ Filter**, then select a field, relation, and comparison value.
   - **Supabase:** Under **Filters**, click **+ Add Filter**, then select a field, relation, and comparison value. To use the [full-text search](https://supabase.com/docs/guides/database/full-text-search), set **Relation** to **Search (Full-Text)**. Then choose a **Search Type**:
      - **Websearch (Recommended):** Supports user-friendly search syntax, including quoted phrases, `OR`, and excluding terms with a minus sign (`-`).
      - **All Words:** Returns rows that contain every search term.
      - **Phrase:** Returns rows that contain the search terms as a phrase.
      - **Raw tsquery:** Accepts PostgreSQL text-search operators for advanced queries.

      You can optionally, set **Language**, leave it empty to use the database's default configuration. Under **Value**, enter the text you want to find.
5. Under **Ordering**, click **+ Order By** for Firestore or **+ Add Order** for Supabase. Select the field and choose **Increasing** or **Decreasing**.
6. Configure the available optional settings:
   - **Hide Widget If No Match** (Firestore): Hides the queried widget when the query returns no matching documents.
   - **Ignore Empty Filter Values** (Firestore): Disabled by default, meaning the query will attempt to find documents with empty text fields if any filter value is empty. When enabled, the query will ignore fields with empty filter values instead.
   - **Filter on Null Values** (Firestore): By default, if any filter value is null, the query will ignore that filter. Enabling this option will include null filters in the query.
   - [**Enable Infinite Scroll**](../../../ui/widgets/composing-widgets/list-grid.md#infinite-scroll-on-a-list-from-a-firestore-collection-or-supabase-table): Loads list results in pages as the user scrolls. Set the number of records loaded per page using **Page Size**. For Supabase, the table must have a primary key and the query must be ordered by it.
   - **Listen For Changes** (Firestore): Updates displayed documents when their data changes. This is enabled automatically when infinite scroll is turned on.
7. Click **Confirm**.
8. When a list query is applied to a flexible widget such as a **Column**, **Row**, or **ListView**, confirm that you want to generate dynamic children from the returned documents or rows when prompted.

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
