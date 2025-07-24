---
keywords: ['database', 'clear', 'testing']
slug: troubleshooting/test-mode/prepare-database-for-testing
title: Prepare Database Before Running Tests
---

# Prepare Database Before Running Tests

When preparing for major testing or app updates, it's important to ensure that all records in the Firestore database are aligned with the latest data model. Outdated entries may lack newly added fields, leading to potential runtime issues.

## The Issue with Outdated Records

As new fields are introduced to collections, existing records may become incomplete. This can cause:

    - Runtime errors
    - Inconsistent or missing UI elements
    - Unexpected test behavior or broken features

:::info[Prerequisites]
Ensure that you have access to the Firestore database and understand the current schema changes made in the project.
:::

The steps below are the recommended practices:
1. **Clear the Database Before Testing**  
   Remove old data to ensure that only current, schema-compliant records are present.

2. **Migrate Old Records**  
   Use a script or manual update to add missing fields to existing documents.

These steps help maintain consistency across your data and avoid unexpected failures during testing or deployment.

Here is an example scenario:

    1. A new field called `profilePicture` is added to the `Users` collection.
    2. Existing user records do not include the `profilePicture` field.
    3. The app assumes all users have a `profilePicture` value.
    4. Displaying or processing these records causes errors or incomplete rendering.

Solution:
    - Use a Cloud Function, script, or manual update to add default values to existing documents.
    - Alternatively, delete non-compliant test data before starting major testing workflows.

:::tip
Always validate the database structure after schema changes by running test queries to confirm that all expected fields exist across documents.
:::

