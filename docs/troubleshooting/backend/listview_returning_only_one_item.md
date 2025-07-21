---
keywords: ['listview', 'returning', 'only']
slug: /troubleshooting/backend/listview-returning-only-one-item
title: ListView Returning Only One Item
---
# Fix ListView Only Returning One Item

If your **ListView** is only showing one item, this guide will walk you through the common reasons and how to resolve the issue.

:::info[Prerequisites]
- A working Firebase or CMS integration.
- A dynamic layout widget such as `ListView`, `GridView`, or `Column`.
- At least two documents in your Firestore collection for testing.
:::

Follow the steps below to resolve the issue:

1. **Use a Dynamic Widget**  
   Make sure you're using a widget like `ListView`, `GridView`, or `Column` that supports dynamic content.

2. **Confirm the Query Type**  
   Ensure the query is set to return a **list of documents**, not a single document.

3. **Review Applied Filters**  
   If you are using filters, check that multiple records in your database satisfy those filter conditions.

4. **Check Firestore Data**  
   Open your Firestore collection and verify that it contains **multiple records**.

5. **Verify List Type Fields**  
   If querying a single field, confirm it's defined as a **List** in both Firebase and FlutterFlow.

:::tip
To test your setup, remove all filters temporarily and use a basic list query. This helps isolate whether the issue is with filtering or the query type.
:::