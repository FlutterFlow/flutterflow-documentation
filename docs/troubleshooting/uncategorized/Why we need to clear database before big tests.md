---
keywords: ['database', 'clear', 'before']
author: Unknown
created_at: '1653044001'
slug: /why-we-need-to-clear-database-before-big-tests
title: Why we need to clear database before big tests?
updated_at: '1653044023'
url: None
---
# Why Do We Need to Clear the Database Before Big Tests?

When running tests or developing your application, you may add items to your database. Later, as your app evolves, you might add new fields to your collections and start using those fields in your code.

## The Problem
If you do not clear out old data from your database, you may end up with records that are missing the new fields. When your app tries to load or use these old records, it can cause errors or unexpected behavior because the required data is missing.

## Best Practice
- **Clear your database before running major tests or after making significant schema changes.**
- This ensures all records are up-to-date and match your current data structure, preventing issues with missing fields.

## Example Scenario
1. You add a new field to a collection (e.g., `profilePicture`).
2. Old records do not have this field.
3. Your app expects every record to have `profilePicture`.
4. Loading old records causes errors or incomplete data display.

**Solution:** Clear out old data or update it to include the new fields before running tests or deploying your app.