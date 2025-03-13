---
slug: /integrations/database/supabase/database-actions
title: Database Actions
description: Learn about Supabase Database actions in your FlutterFlow app, including how to perform various database operations.
tags: [Supabase, Database, Actions]
sidebar_position: 1
keywords: [FlutterFlow, Supabase, Database, Actions]
toc_max_heading_level: 5
---

# Supabase Database Actions

The Supabase Database Actions allow you to **Insert, Update**, or **Delete a Row** from a Supabase table. 

Note that beyond actions, you can also setup [**Backend Queries**](../../../resources/control-flow/backend-logic/backend-query/backend-query.md) for Supabase. This includes realtime streaming queries.


:::note[Prerequisites]
Before getting started with this section, ensure you have,

1. Completed all steps in the [**Supabase setup**](../../supabase/supabase-setup.md)
2. Ensure you have a table created for adding, updating, and deleting data.
:::


## Types of Supabase Database Actions

Following are the types of actions you can perform on a Supabase table.

- [**Insert Row**](#insert-row-action): Adds a new row in a table.
- [**Update Row**](#update-row-action)**:** Updates a row with the specified values.
- [**Delete Row**](#delete-row-action)**:** Deletes a row from a table.
- [**Query Rows**](#query-rows-action): Retrieves 
	rows from a table based on specific criteria or conditions.

### Insert Row [Action]

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the Properties Panel (the right menu), and click **Open**. This will 
   open an **Action Flow Editor** in a new popup window.

    1. Click on **+ Add Action**.
    2. On the right side, search and select the **Supabase** > **Insert Row** action.
    3. Set the **Table** to your table name (e.g., assignments).
    4. Under the **Set Fields** section, click on the **+ Add Field** button.
    5. Click on the Field name.

       1. Scroll down to find the **Value Source** dropdown and change it to **From Variable**.
       2. Click on **UNSET** and select **Widget State > Name** of the TextField.
    6. Similarly, add the field for the other UI elements.

:::tip[Pro Tip]
While adding this action, you can leave the **id** (if marked as *Primary*) and 
        **created_at** (if default value is `now()`) fields. Supabase will automatically add values for these fields.
:::

<div class="video-container"><iframe src="https://www.loom.
com/embed/f2a75f9b0e144f6aab06cc1f0965541b?sid=6f57ff8a-ca2a-4c47-833d-03fa928b8301" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



### Update Row [Action]

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the Properties Panel (the right menu), and click **Open**. This will 
   open an **Action Flow Editor** in a new popup window.

    1. Click on **+ Add Action**.
    2. On the right side, search and select the **Supabase** > **Update Row** action.
    3. Set the **Table** to your table name (e.g., assignments).
    4. Optional: If you want to get the rows after the update is finished, enable the **Return Matching Rows** option.
    5. Now, you must set the row you want to update. Usually, this is done by finding a row in a table that matches the current row ID. To do so, click **+ Add Filter** button inside the **Matching Rows** section.

       1. Set the **Field Name** to the field that contains the IDs. Typically, this is the 
       **id** column.
       2. Set the **Relation** to **Equal To** because you want to find a row with the exact id.
       3. Into the **Value Source**, you can select the **From Variable** and provide the id of the row for which you just updated values in the UI.
    6. Under the **Set Fields** section, click on the **+ Add Field** button.
    7. Click on the Field Name.
	
       1. Scroll down to find the **Value Source** dropdown and change it to **From Variable**.
       2. Click on **UNSET** and select **Widget State > Name** of the TextField.
    8. Similarly, add the field for the other UI elements.


:::tip[How to & Tips]

<div class="video-container"><iframe src="https://www.loom.
com/embed/08cb8a851350428bbc226f2e7ce9d2b3?sid=b3d097cf-6f84-4f69-893a-3a363cbf7143" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

If you have a flow like this, *HomePage* -> *AssignmentDetailsPage* ->
*UpdateAssignmentPage*, you can enable the **Replace Route** option (see point no. 5 [here](../../../ff-concepts/navigation-routing/page-navigation.md#navigate-to-action)) when you navigate from *AssignmentDetailsPage* to *UpdateAssignmentPage*. And then chain the [Navigate Back](../../../ff-concepts/navigation-routing/page-navigation.md#navigate-back-action) action after the update action. This will directly open the *HomePage* after the row is updated.
:::



### Delete Row [Action]

Go to your project page on FlutterFlow and follow the steps below to define the Action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the Properties Panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.

    1. Click on **+ Add Action**.
    2. On the right side, search and select the **Supabase** -> **Delete Row** action.
    3. Set the **Table** to your table name (e.g., assignments).
    4. Optional: If you want to know which rows were deleted from a table, enable the **Return 
       Matching Rows** option.
    5. Now, you must set the row you want to delete. Usually, this is done by finding a row in a table that matches the current row ID. To do so, click **+ Add Filter** button inside the **Matching Rows** section.

       1. Set the **Field Name** to the field that contains the IDs. Typically, this is the 
       **id** column.
       2. Set the **Relation** to **Equal To** because you want to find a row with the exact id.
       3. Into the **Value Source**, you can select the **From Variable** and provide the id of the row you want to delete.

<div class="video-container"><iframe src="https://www.loom.
com/embed/309e0e40832146df8909c2e533e9b11e?sid=34f4ba89-cc53-47c3-8b8d-8859c03a0f6f" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>
:::tip

You can chain the [**Refresh Database Request**](../refresh-db-request.md) action after this action to remove the 
deleted items from the list.

:::

### Query Rows [Action]

There are certain scenarios where you may want to query a Supabase table manually. For example, you might want to only fetch data in response to a specific user action, such as clicking on a button.

Additionally, if your app fetches different data under different conditions, you might find it more convenient to manually call queries. For example, you might fetch different tasks for admin and team members.

To manually query a Supabase table, follow the steps below to define this action to any widget:

1. Select the **Widget** (e.g., Button) on which you want to define the action.

2. Select **Actions** from the Properties Panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
3. Click on **+ Add Action**.
4. On the right side, search and select the **Supabase** > **Query Rows** action.
5. Select the **Table** you want to query.
6. You can also [Filter](#filtering-table-data) and [Order](#ordering-table-data) the query results.
7. Provide the **Action Output Variable Name**. This will be used to store the query result.

<p></p>

<div class="video-container"><iframe src="https://www.loom.
com/embed/99f47689b5b147678ed197c6ea0facf6?sid=615f2ecf-c8d0-4124-b2fa-ca9798893c92" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>


8. Now, you can use the **Action Output Variable Name** provided in the previous step to generate 
children from a variable on **ListView**.
9. Finally, you can display data in a **Text** widget. To do so, select the **Text widget > Properties Panel > Text > Set from Variable menu > ***[children_from_variable_name]*** item > Get Row Field > select the row field** you want to display.

<div class="video-container"><iframe src="https://www.loom.
com/embed/d30acf8e4451459689b0d295b87bb5f9?sid=9a4f5aec-59ef-4fa3-9e76-0de72e75f278" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


#### Filtering table data
Sometimes you might want to filter a list based on a condition. For example, showing only 
completed assignments. You can do so by adding the Filter while you query a Supabase table.

Let's see how to filter the Supabase table to display only desired items:

- In your **Action properties** of Query Rows action, scroll down and click on the **+ Add Filter** 
  button at the bottom.

- Find the **Field Name**, click on the Unset, and select a column on which you would like to apply 
  the filter.
- Find the **Relation** dropdown, click on the Unset, and choose the relation amongst the list.
- Find the **Value** property and set it to an appropriate value and click Confirm.

:::tip
You could choose a filter relation based on your requirements. For example:

- **Equal To**: To show only completed assignments, set the **Field Name** to the column that holds the completion status (e.g., **is_done**), set the **Relation** to **Equal To**, and set the **Value** to **True**.
- **Greater Than**: To show only users older than 30, set the **Field Name** to the **age** column, set the **Relation** to **Greater Than**, and set the **Value** to 30.
- **Like**: For filtering addresses with zip codes starting with '35,' set the **Field Name** to the **zip_code** column, set the **Relation** to **LIKE**, and set the **Value** to **35%**. In the value field, you use the following wildcards to perform flexible pattern matching to filter your data effectively.
    - **Percent (`%`) Wildcard**: Represents zero, one, or multiple characters.
        - Example: `'A%'` matches any string starting with `'A'` (e.g., `'Apple'`, `'Apex'`).
        - Example: `'%A%'` matches any string containing `'A'` (e.g., `'Canada'`, `'Australia'`).
    - **Underscore (`_`) Wildcard**: Represents a single character.
        - Example: `'A_'` matches any two-character string starting with `'A'` (e.g., `'An'`, `'At'`).
        - Example: `'A__'` matches any three-character string starting with `'A'` (e.g., `'Ant'`, `'Art'`).
:::

:::info
You can combine multiple filters using **AND** or **OR** operators to create more advanced filtering logic. This enables you to refine your data query to match specific conditions.
:::

<div class="video-container"><iframe src="https://www.loom.
com/embed/b5a62eac1f5d4d9698d30b064c395326?sid=4e8c4972-7fac-4c9b-b495-c9f0cb783717" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


#### Ordering table data
You might want to show a list from the Supabase table in a specific order. For example, showing assignments in order of the due date.

To specify the order:

- In your **Action properties** of Query Rows action, scroll down and click on the **+ Add Order** 
button at the bottom.
- Set the **Table Field Name** to the column you would like to choose for ordering.
- Find **Order** dropdown, click on the Unset and choose the order either **Increasing** or **Decreasing** and 
  click **Confirm**.

:::tip
You could choose the order based on your requirements. For example, to show assignments in order of due date, set Table Field Name to due_date and Order to Increasing.
:::

<div class="video-container"><iframe src="https://www.loom.
com/embed/244eea2a4f694120b08524b7b8cf67de?sid=13d47ef5-5d48-4986-88da-d335ce23bd06" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>
:::info
Additional Note: Currently, you can only add "and" conditions to Supabase query filters. If you want to add an "or" filter like "status == 5 or status == 8", you can consider logic to apply "status in (5,8)" or any other logic. Fully customizable using API calls or custom actions.
:::

## Trigger Action On Data Change

Sometimes, you may want to trigger an action whenever data changes in a Supabase table. For instance, in an ecommerce app, you might want to notify users on the orders page when the status of their order is updated.

To respond to data changes in a Supabase table:

1. Ensure you have added a **Supabase Query** to a widget (e.g., a ListView) with **Single Time Query** disabled to enable real-time updates.
2. On the widget with the **Supabase Query**, open the **Action Flow Editor** and set **On Data Change** as the [Action Trigger](../../../resources/control-flow/functions/action-triggers.md). This ensures that any actions you add will be triggered whenever the data is updated, added, or deleted.
3. You can now [add any action](../../../resources/control-flow/functions/action-flow-editor.md#adding-an-action-example) you want to perform, such as showing a notification, refreshing the UI, or fetching related data.

:::info
If you are using this trigger on a ListView, make sure to **disable** the **Infinite Scroll**.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ghFiQWGsQuJu5reUyXnl?embed&show_copy_link=true"
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