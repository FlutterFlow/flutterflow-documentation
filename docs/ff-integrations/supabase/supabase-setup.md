---
slug: /integrations/supabase/setup
title: Supabase Setup
description: Learn how to set up Supabase in your FlutterFlow app for database and authentication functionalities.
tags: [Supabase, Setup, Integration]
sidebar_position: 1
keywords: [FlutterFlow, Supabase, Setup, Integration]
---

# Supabase Setup

Connecting your FlutterFlow app to Supabase is quick and easy. Simply add your Supabase **API 
URL** and **Anon Key** in the **Settings & Integrations** section, and your data will be ready to 
use in FlutterFlow. With this integration, you can authenticate users and store and retrieve data from Supabase.

Follow the steps below to setup the Supabase:
## Create Keys

- Create a new [**Supabase account**](https://app.supabase.com/sign-up). If you already 
have an account, [login](https://app.supabase.com/sign-in).

- To use Supabase with your FlutterFlow project, you'll need to create a project in Supabase 
first. If you haven't done so already, simply click on **+ New Project**, fill in the required information, and wait a few minutes for the process to complete.

<figure>
    <div class="video-container"><iframe src="https://www.loom.
com/embed/19ede54035c54b88bb07e043c5c0d60e?sid=dc8e9438-ffc9-4b51-ab44-02ed4931224c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

  <figcaption class="centered-caption"></figcaption>
</figure>


## Create Tables in Supabase

If you haven't already, [create table(s)](https://supabase.com/docs/guides/database/tables#creating-tables). If you're just getting started, you can uncheck the **Enable Row Level Security (**[**RLS**](https://supabase.com/docs/guides/auth/row-level-security)**)** option to remove any restrictions on accessing the table data.

:::warning[Note]
It's important to note that while disabling Row Level Security (RLS) can be useful for testing and development purposes, **it's recommended that you re-enable RLS** and implement an access policy that aligns with your app's requirements before deploying your app.
:::

Here's an example of creating an "assignments" table with a [foreign key relationship](https://supabase.com/docs/guides/database/tables#joining-tables-with-foreign-keys) from `created_by` column to `public.users.id` with `on delete cascade`. This ensures that if a user is deleted from the "public.users" table, any data related to that user stored in your "assignments" table will also be deleted.

<figure>
    <div class="video-container"><iframe src="https://www.loom.
com/embed/048ec7fadee04a11acab7c0ff65e0593?sid=3a429983-8512-4d60-af85-f2ffc1bac862" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  <figcaption class="centered-caption"></figcaption>
</figure>



:::note
To use Supabase authentication, you must 
[**create a "users" table**](../authentication/supabase-auth/initial-setup.md#1-creating-a-users-table).

:::

## Add Keys to FlutterFlow


Follow the steps below to add the API URL and Anon key:

1. In your Supabase project, navigate to [Project Settings > API](https://app.supabase.com/project/cwnjvtflygqlpxdpsujv/settings/api). Copy the **Project URL**.
2. Return to FlutterFlow, navigate to **Settings and Integrations > Integrations > Supabase**. Turn on the toggle (i.e., enable Supabase) and paste the **API URL**.
3. Similarly, from the Supabase [API section](https://app.supabase.com/project/cwnjvtflygqlpxdpsujv/settings/api), copy the **anon key** (under **Project API keys**) and paste it inside the **FlutterFlow > Settings and Integrations > Integrations > Supabase > Anon Key.**
4. Click on the **Get Schema** button. This will show the list of all tables with their schema (structure) created in Supabase.
5. (Optional) If you have defined an *Array* for any *Column Data Type* in Supabase, you must set its type here. To do so, tap the "**Click to set Array type**" and choose the right one.

:::note
Whenever you make changes related to tables in Supabase, hit the **Get Schema** button again to reflect the changes here.
:::

<figure>
   <div class="video-container"><iframe src="https://www.loom.
   com/embed/47e1478146f04e83a9cfef5a873ad49b?sid=dea01d9a-7262-4fdd-9cbe-4d7bc50f9ff3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
   
   
  <figcaption class="centered-caption"></figcaption>
</figure>


Now you have completed the Supabase Setup! You can continue to learn about how to add Supabase [Authentication](../authentication/supabase-auth/initial-setup.md) and [Database](../database/supabase/database-actions.md).
