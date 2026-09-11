---
slug: /integrations/database/supabase/database-functions
title: Database Functions
description: Learn how to call Supabase database functions from your FlutterFlow app.
tags: [Supabase, Database, Functions, RPC]
sidebar_position: 2
keywords: [FlutterFlow, Supabase, Database Functions, PostgreSQL Functions, RPC]
---

# Supabase Database Functions

[Supabase database functions](https://supabase.com/docs/guides/database/functions) are reusable PostgreSQL functions that run inside your Supabase database. FlutterFlow can call these functions through a [Remote Procedure Call (RPC)](https://supabase.com/docs/reference/dart/rpc), pass values to their arguments, and use the returned data in your app.

Database functions are useful for calculations, aggregated results, complex queries, and operations that are difficult to perform with a standard Supabase query. For example, the following app uses a database function to calculate and display the completion percentage for each project.

![A FlutterFlow app displaying task completion percentages returned by a Supabase database function.](imgs/task-completion-results.avif)

:::info[Prerequisites]
- Complete the [**Supabase setup**](../../supabase/supabase-setup.md) and connect your project to FlutterFlow.
- For this example, create the `tasks` table and the columns used by the function.
- Configure suitable database permissions and [**Row Level Security (RLS)**](https://supabase.com/docs/guides/database/postgres/row-level-security) policies for the data the function accesses.
:::

## When to Use a Database Function

Use a database function when you need to:

- Return data from complex queries or multiple related tables.
- Run a calculation or aggregation close to the data.
- Reuse the same database logic in different parts of your app.
- Perform multiple related database operations together.

For straightforward row operations, such as inserting, updating, deleting, or querying rows, use [Supabase Database Actions](database-actions.md). Use a [Supabase Edge Function](../../../ff-concepts/adding-customization/cloud-functions.md#supabase-edge-functions) when the operation needs server-side TypeScript, secrets, or calls to external services.

## 1. Create a Database Function

You can create a database function from the Supabase Dashboard using the SQL Editor, as described in the [Supabase database functions guide](https://supabase.com/docs/guides/database/functions#getting-started).

The following `get_project_progress` function reads the task counts for each project and returns each project's completion percentage:

```sql
create or replace function public.get_project_progress()
returns table (
  id text,
  project_name text,
  number_tasks bigint,
  completed_tasks bigint,
  completion_percentage numeric
)
language sql
security invoker
as $$
  select
    t.id,
    t.project_name,
    t.number_tasks,
    t.completed_tasks,
    case
      when coalesce(t.number_tasks, 0) = 0 then 0
      else round(
        (coalesce(t.completed_tasks, 0)::numeric / t.number_tasks) * 100,
        2
      )
    end as completion_percentage
  from public.tasks t;
$$;
```

To create the database function in Supabase:

1. Open your project in the Supabase Dashboard.
2. Go to **SQL Editor** and write your SQL query.
3. Click **Run** and review the returned rows.
4. Go to **Database > Functions** to verify that your function is listed.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/GeEEeDyH5a14KyMqaxrT?embed&show_copy_link=true"
        title="Create a database function in the Supabase SQL Editor"
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

:::tip[Function security]

Use `security invoker` unless the function specifically needs to run with the function creator's permissions. With invoker security, the function runs using the permissions of the signed-in user. Also review who has permission to execute the function and protect the tables it accesses with RLS. See the [**Supabase database functions guide**](https://supabase.com/docs/guides/database/functions) and [**API security guide**](https://supabase.com/docs/guides/api/securing-your-api).

:::

## 2. Import Database Functions into FlutterFlow

After creating or changing a function in Supabase, refresh the schema in FlutterFlow:

1. Open **Settings and Integrations > Supabase**.
2. Confirm that the correct Supabase project is connected.
3. Click **Update Schema**.

This fetches the latest database definitions and makes compatible PostgreSQL functions available as **Supabase RPC** actions. Repeat this step whenever you change a function's name, arguments, or return type.

![The Update Schema button in FlutterFlow's Supabase settings.](imgs/update-supabase-schema.avif)

## 3. Call a Database Function

You can call an imported database function using any appropriate action trigger. For example, call a function on page load to retrieve the latest progress when the page opens.

1. Select the widget or page where you want to call the function and open the **Action Flow Editor**.
2. Select an existing trigger or add a new one.
3. Select a **Supabase RPC** action.
4. If the function accepts arguments, set each one using a specific value or a variable.
5. Enter an **Action Output Variable Name** so you can use the returned data in later actions.

![Calling a Supabase database function from the Action Flow Editor.](imgs/call-supabase-database-function.avif)

## 4. Use the Function Output

The data available from the action output is determined by the function's declared return type. A function can return a single value, one object, or multiple rows. For example, [`get_project_progress`](#1-create-a-database-function) uses `returns table (...)` to declare a tabular result with columns for the project name, task counts, and calculated completion percentage:

```sql
returns table (
  id text,
  project_name text,
  number_tasks bigint,
  completed_tasks bigint,
  completion_percentage numeric
)
```

Here, `returns table` defines the columns returned by the function. It does not create or refer to a physical table in Supabase. Supabase returns the generated rows as a JSON array, with each row represented as an object:

```json
[
  {
    "id": "c45a5311-3899-437b-9be5-72b4b342751a",
    "project_name": "Mobile App Release - Discovery",
    "number_tasks": 13,
    "completed_tasks": 5,
    "completion_percentage": 38.46
  }
]
```

To use these rows as structured data, create a [Custom Data Type](../../../resources/data-representation/custom-data-types.md), such as `ProjectProgress`. Its field names must exactly match the JSON field names, including capitalization and underscores:

| JSON field | Custom Data Type field | FlutterFlow data type |
| --- | --- | --- |
| `id` | `id` | String |
| `project_name` | `project_name` | String |
| `number_tasks` | `number_tasks` | Integer |
| `completed_tasks` | `completed_tasks` | Integer |
| `completion_percentage` | `completion_percentage` | Double |

Because this function returns multiple rows, create a page-state variable that holds a list of `ProjectProgress` values. In an **Update Page State** action, use the RPC **Action Output** as the source and map the returned JSON array to that variable. You can then use the structured list in widgets and later actions on the page.

:::note
You do not need to save the result in page state when only subsequent actions need it. In that case, use the RPC result directly from **Action Outputs**.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/3uFh2PpbmJmpCAwhdYMY?embed&show_copy_link=true"
        title="Map a Supabase RPC result to a FlutterFlow Custom Data Type"
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

## FAQs

<details>
<summary>Why doesn't my database function appear in FlutterFlow?</summary>

Confirm that the function exists in the connected Supabase project, then click **Update Schema**. If it still does not appear, review the function's schema, arguments, and return type.

</details>

<details>
<summary>Why does my app receive a permission error when calling a function?</summary>

Check the function's [execute privileges](https://supabase.com/docs/guides/database/functions#function-privileges) and the permissions for every table it accesses. For a `security invoker` function, the calling user must be allowed to access the underlying data, including through applicable [RLS policies](https://supabase.com/docs/guides/database/postgres/row-level-security).

</details>

<details>
<summary>Why does the action show old arguments or output fields?</summary>

Click **Update Schema** after changing the function. Then reopen the **Supabase RPC** action and verify its arguments, output variable, and any widgets or state variables that use the result.

</details>
