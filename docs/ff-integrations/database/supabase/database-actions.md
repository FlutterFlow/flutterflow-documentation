---
slug: /integrations/database/supabase/database-actions
title: Database Actions
description: Learn how to insert, upsert, update, delete, and query Supabase rows from your FlutterFlow app.
tags: [Supabase, Database, Actions, Upsert]
sidebar_position: 1
keywords: [FlutterFlow, Supabase, Database, Actions, Upsert Row]
toc_max_heading_level: 5
---

# Supabase Database Actions

Supabase Database Actions allow you to insert, upsert, update, delete, or query rows in a Supabase table.

You can also set up [**Backend Queries**](../../../resources/control-flow/backend-logic/backend-query/backend-query.md) to load Supabase data automatically and keep it updated through real-time streaming.

:::note[Prerequisites]
Before using these actions:

- Complete the [**Supabase setup**](../../supabase/supabase-setup.md).
- Create the table and fields your action will use.
:::

## Types of Supabase Database Actions

The following actions are available for Supabase tables:

- [**Insert Row**](#insert-row-action): Adds a new row to a table.
- [**Upsert Row**](#upsert-row-action): Inserts a new row or updates an existing row when the conflict columns match.
- [**Update Row**](#update-row-action): Updates rows that match specified filters.
- [**Delete Row**](#delete-row-action): Deletes rows that match specified filters.
- [**Query Rows**](#query-rows-action): Retrieves rows from a table based on specific criteria or conditions.

### Insert Row [Action]

Use **Insert Row** when you always want to create a new row.

To configure the action:

1. Select the widget that will trigger the action and open the **Action Flow Editor**.
2. Click **+ Add Action**, then search for and select **Insert Row**.
3. Set **Table** to the Supabase table where you want to add the row.
4. Under **Set Fields**, click **+ Add Field** and select a field.
5. Set its value directly or choose **From Variable** to use data such as a widget state value.
6. Repeat steps 4–5 for each remaining field you want to set.

:::tip[Generated values]
Leave automatically generated fields unset. For example, Supabase can generate `id` when it is configured as an identity column and `created_at` when its default value is `now()`.
:::

### Upsert Row [Action]

The **Upsert Row** action inserts a new row when no existing row has the same values in the selected conflict columns. If a matching row exists, the action updates that row instead. This is useful when you want to save data without first querying the table to determine whether to insert or update it.

For example, you can use `id` as the conflict column when saving a task. If a task with that `id` exists, the action updates its fields. Otherwise, it inserts a new task.

To configure the action:

1. Select the widget that will trigger the action.
2. Open the **Action Flow Editor**.
3. Click **+ Add Action**, then search for and select **Upsert Row**.
4. Set **Table** to the Supabase table you want to modify.
5. Under **Set Fields**, click **+ Add Field** and provide the values to insert or update. Include values for every selected conflict column.
6. Under **On Conflict Columns**, select the primary key or unique columns that identify an existing row.
7. Optional: Enter an **Action Output Variable Name** to use the returned row in later actions.

:::note[Conflict columns]
The selected conflict columns must form a primary key or unique constraint in Supabase. If their values do not match an existing row, the action inserts a new row. For more information, see the [**Supabase Upsert documentation**](https://supabase.com/docs/reference/dart/upsert).
:::

:::tip[Configure RLS]
Because an upsert can either insert or update a row, configure suitable `INSERT` and `UPDATE` row-level security (RLS) policies for the table. If you use the action output, ensure the user can also read the returned row. See the [**Supabase Row Level Security guide**](https://supabase.com/docs/guides/database/postgres/row-level-security) for details on creating policies.
:::

### Update Row [Action]

Use **Update Row** to change one or more existing rows that match your filters.

To configure the action:

1. Select the widget that will trigger the action and open the **Action Flow Editor**.
2. Click **+ Add Action**, then search for and select **Update Row**.
3. Set **Table** to the Supabase table you want to update.
4. Optional: Enable **Return Matching Rows** if you need the updated rows in later actions.
5. Under **Matching Rows**, click **+ Add Filter** and configure the **Field Name**, **Relation**, and **Value**. For example, set **Field Name** to `id`, **Relation** to **Equal To**, and **Value** to the target row's ID.
6. Under **Set Fields**, click **+ Add Field** and provide each new value.

### Delete Row [Action]

Use **Delete Row** to remove one or more rows that match your filters.

To configure the action:

1. Select the widget that will trigger the action and open the **Action Flow Editor**.
2. Click **+ Add Action**, then search for and select **Delete Row**.
3. Set **Table** to the Supabase table from which you want to delete rows.
4. Optional: Enable **Return Matching Rows** if you need the deleted rows in later actions.
5. Under **Matching Rows**, click **+ Add Filter** and configure the **Field Name**, **Relation**, and **Value**. For example, set **Field Name** to `id`, **Relation** to **Equal To**, and **Value** to the target row's ID.

:::caution
Filters determine which rows are updated or deleted. Use a unique field such as `id` when you intend to affect only one row.
:::

:::tip
You can add the [**Refresh Database Request**](../refresh-db-request.md) action after deleting rows to refresh the displayed data.
:::

### Query Rows [Action]

Use **Query Rows** to load data in response to an action, such as a button tap. This is useful when the query should run only after user interaction or when different actions need different data.

To configure the action:

1. Select the widget that will trigger the query and open the **Action Flow Editor**.
2. Click **+ Add Action**, then search for and select **Query Rows**.
3. Select the **Table** you want to query.
4. Optional: Add [filters](#filtering-table-data) or [ordering](#ordering-table-data).
5. Enter an **Action Output Variable Name** to access the returned rows in later actions.

#### Use Query Results

Access the returned rows from **Action Outputs**. To display them in a ListView, generate dynamic children from the action output and bind widgets inside each child to the appropriate row fields.

#### Filtering Table Data

Use filters to return only rows that match specific conditions. For example, you can query only completed assignments.

To add a filter:

1. In the **Query Rows** action properties, click **+ Add Filter**.
2. Set **Field Name** to the column you want to filter.
3. Select a **Relation**.
4. Set **Value**, then click **Confirm**.

:::tip
Choose a filter relation based on the results you need. For example:

- **Equal To**: To show only completed assignments, set **Field Name** to `is_done`, **Relation** to **Equal To**, and **Value** to `True`.
- **Greater Than**: To show only users older than 30, set **Field Name** to `age`, **Relation** to **Greater Than**, and **Value** to `30`.
- **Like**: To find addresses with ZIP codes starting with `35`, set **Field Name** to `zip_code`, **Relation** to **Like**, and **Value** to `35%`. Use these wildcards for pattern matching:
    - **Percent (`%`) Wildcard**: Represents zero or more characters.
        - Example: `'A%'` matches any string starting with `'A'` (e.g., `'Apple'`, `'Apex'`).
        - Example: `'%A%'` matches any string containing `'A'` (e.g., `'Canada'`, `'Australia'`).
    - **Underscore (`_`) Wildcard**: Represents a single character.
        - Example: `'A_'` matches any two-character string starting with `'A'` (e.g., `'An'`, `'At'`).
        - Example: `'A__'` matches any three-character string starting with `'A'` (e.g., `'Ant'`, `'Art'`).
:::

:::info
You can combine multiple filters using **AND** or **OR** operators to create more advanced filtering logic.
:::

#### Ordering Table Data

Use ordering to return rows in a specific sequence, such as assignments ordered by due date.

To specify the order:

1. In the **Query Rows** action properties, click **+ Add Order**.
2. Set **Table Field Name** to the column used for ordering.
3. Set **Order** to **Increasing** or **Decreasing**, then click **Confirm**.

:::tip
To show assignments with the earliest due dates first, set **Table Field Name** to `due_date` and **Order** to **Increasing**.
:::

## Trigger an Action on Data Change

You can trigger an action whenever data changes in a Supabase table. For example, an e-commerce app can notify users when an order's status changes.

To respond to data changes in a Supabase table:

1. Ensure you have added a **Supabase Query** to a widget (e.g., a ListView) with **Single Time Query** disabled to enable real-time updates.
2. On the widget with the **Supabase Query**, open the **Action Flow Editor** and set **On Data Change** as the [Action Trigger](../../../resources/control-flow/functions/action-triggers.md). This ensures that any actions you add will be triggered whenever the data is updated, added, or deleted.
3. [Add an action](../../../resources/control-flow/functions/action-flow-editor.md#adding-an-action-example), such as showing a notification, refreshing the UI, or fetching related data.

:::info
When using this trigger on a ListView, disable **Infinite Scroll**.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ghFiQWGsQuJu5reUyXnl?embed&show_copy_link=true"
        title="Configure an On Data Change action for a Supabase query"
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

## Offline Support for Supabase Apps

For offline support, consider using the [**PowerSync Library**](https://marketplace.flutterflow.io/item/dm1cuOwYzDv6yQL2QOFb), built by the [**PowerSync**](https://www.powersync.com/) team. It syncs Supabase data locally and updates it when the device reconnects.
