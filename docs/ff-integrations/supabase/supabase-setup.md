---
slug: /integrations/supabase/setup
title: Supabase Setup
description: Learn how to set up Supabase in your FlutterFlow app for database and authentication functionalities.
tags: [Supabase, Setup, Integration]
sidebar_position: 1
keywords: [FlutterFlow, Supabase, Setup, Integration]
---

# Supabase Setup

You can either use [Supabase OAuth](#connect-with-supabase-oauth) for a quick and secure setup or [connect using API Keys](#connect-with-supabase-api-keys) for self-hosted setups.

## Connect with Supabase OAuth

To connect with Supabase using the OAuth method, follow the steps below:

1. Open **Settings & Integrations** and go to the **Supabase** section.
2. Select the **Connect with Supabase OAuth** tab.
3. Click **Connect to Supabase** to start the connection flow.
4. Choose your Supabase organization and authorize access.
5. After authorization, either select an existing Supabase project or click **Create New Project** to make a new one.
6. If creating a new project, enter the project name and region, then click **Create**.
7. Copy and save the database password, since it will not be shown again.
8. Click **Done** to finish the setup.
9. Once connected, you can view and manage the Supabase project from the Supabase settings, switch projects, or open it in a new browser tab.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/4RrHnQSlk7xXhbf1WMWn?embed&show_copy_link=true"
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

:::tip
After [**creating**](#create-tables-in-supabase) or updating tables in your Supabase database, make sure to click **Get Schema** to refresh and sync the latest table structure in FlutterFlow.
:::

## Connect with Supabase API Keys

To connect using Supabase API Keys, you will manually link your Supabase project with FlutterFlow by providing the required credentials. 

:::warning
Please note that this method is only intended for **self-hosted Supabase databases**.
:::

1. First, create a project in Supabase from the Supabase dashboard.
2. In your Supabase project, navigate to [Project Settings > API](https://app.supabase.com/project/cwnjvtflygqlpxdpsujv/settings/api). Copy the **Project URL**.
3. Return to FlutterFlow, navigate to **Settings and Integrations > Integrations > Supabase**. Turn on the toggle (i.e., enable Supabase) and paste the **API URL**.
4. Similarly, from the Supabase [API section](https://app.supabase.com/project/cwnjvtflygqlpxdpsujv/settings/api), copy the **anon key** (under **Project API keys**) and paste it inside the **FlutterFlow > Settings and Integrations > Integrations > Supabase > Anon Key.**
5. Click on the **Get Schema** button. This will show the list of all tables with their schema (structure) created in Supabase.
6. (Optional) If you have defined an *Array* for any *Column Data Type* in Supabase, you must set its type here. To do so, tap the "**Click to set Array type**" and choose the right one.

:::tip
After [**creating**](#create-tables-in-supabase) or updating tables in your Supabase database, make sure to click **Get Schema** to refresh and sync the latest table structure in FlutterFlow.
:::

<figure>
   <div class="video-container"><iframe src="https://www.loom.
   com/embed/47e1478146f04e83a9cfef5a873ad49b?sid=dea01d9a-7262-4fdd-9cbe-4d7bc50f9ff3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
   
   
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

