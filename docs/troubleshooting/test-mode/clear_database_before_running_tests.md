---
keywords: ['database', 'clear', 'before']
slug: clear-database-before-running-tests
title: Clear Database Before Running Tests
---

# Clear Database Before Running Tests

When testing or developing your application, previously added records in your database can lead to inconsistencies if the data schema has changed.

## Problem

As your app evolves, you may add new fields to your database collections. Older records might not include these new fields. When the app expects those fields and they are missing, it can lead to errors or unexpected behavior.

## Solution

:::tip
Clear your database before running significant tests or after making changes to the data schema. This ensures all records follow the latest structure and prevents issues with missing data.
:::

## Example Scenario

1. A new field such as `profilePicture` is added to a collection.
2. Older records do not contain this field.
3. The app expects the `profilePicture` field for all records.
4. Attempting to display or process old records results in errors or incomplete data.

To resolve this, either update all records to match the new schema or remove outdated entries before running tests or deploying the app.
