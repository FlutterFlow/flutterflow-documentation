---
keywords: ['email', 'input', 'update']
slug: update-user-record-from-email-input
title: Update a User Record from Email Input
---

# Update a User Record from Email Input

In some cases, you may want users to enter an email address, and if a user with that email exists in your Firebase collection, update their record or associate their reference to another document.

FlutterFlow does not support direct query-based actions out-of-the-box, but you can achieve this using widget queries and local state.

## Prerequisites

Before starting, ensure you have:

- Completed Firebase setup in your project.
- Created a Firebase collection that contains user documents.
- Added user data to your Firebase database.

## Step 1: Set Up the TextField

Create a `TextField` widget to accept the email address from the user.

- Enable **Update Page on Change** for the `TextField`. This refreshes the page and allows queries to react to every character typed.

![](../assets/20250430121457646837.png)

## Step 2: Add a Query-Driven Result Widget

Next, create a widget (e.g., a container or a button) that shows query results.

- Attach a **Single Document Query** to this widget to search for a user with the provided email.
- Enable **Hide Widget If No Result** in the query settings. This ensures the widget only appears if a match is found.

![](../assets/20250430121457985825.png)

If the widget is visible, it means a matching user was found and their document is available for update.

## Step 3: Add the Update Action

In the button's **Action Flow**, add an **Update Document** action.

- Use the result of the query (user document) as the target.
- Update the fields you want.
- Optionally, display a snackbar to confirm the update.

![](../assets/20250430121458204938.png)

## Alternative: Use Local State

If you prefer not to use “Update Page on Change”:

1. Store the `TextField` value in **Local State**.
2. Trigger the local state update using a button.
3. Use that local state value to filter your query.

This gives you more control over when queries are triggered.

## Example

You can explore a working example in this FlutterFlow project:

👉 [Open Project](https://app.flutterflow.io/project/flutterflow-adcdi2) and check the `UpdateUser` page.

---

This method allows you to simulate dynamic queries in FlutterFlow by combining `TextField`, `Single Document Query`, and conditional widget visibility.
