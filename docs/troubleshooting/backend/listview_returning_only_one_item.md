---
keywords:
  - listview
  - returning
  - only
slug: /troubleshooting/backend/listview-returning-only-one-item
title: ListView Returning Only One Item
description: >-
  If your ListView is only showing one item, this guide will walk you through
  the common reasons and how to resolve the issue.
tags:
  - FlutterFlow
  - Troubleshooting
  - Backend
last_verified: 2026-09-02
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

   Also check any limit, unique-item transformation, conditional child, and pagination configuration. Firestore security rules do not filter results: if a query could return unauthorized documents, the entire query fails rather than returning only allowed rows.

4. **Check Firestore Data**
   Open your Firestore collection and verify that it contains **multiple records**.

5. **Verify List Type Fields**
   If querying a single field, confirm it's defined as a **List** in both Firebase and FlutterFlow.

:::tip
In a non-production test project, simplify the query one condition at a time. Do not remove authorization rules or expose production data merely to make a query return more rows.
:::

## Related documentation

See [ListView Gray Box and Red Screen Errors](/troubleshooting/backend/listview-gray-box-and-red-screen-errors) for a related FlutterFlow workflow.
