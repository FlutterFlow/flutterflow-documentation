---
title: Action Blocks
---


An Action Block is a set of actions that perform a specific task and can be reused in different parts of the app. If you find yourself repeatedly performing a particular set of operations in your app, it may be helpful to create an Action Block. This allows you to break down complex actions into smaller, more manageable units, making them easier to understand and modify in the future.

Action Blocks have different scopes, which determine their availability:

- **App Level Action Blocks:** Usable across the entire app.
- **Page Level Action Blocks:** Restricted to the page in which they were created.
- **Component Level Action Blocks:** Restricted to the component in which they were created.

## App Level Action Blocks

You can create an app level action block from any Page or Component and it wil be accessible for 
viewing or editing from any Page or Component as well. This makes it easier for you to access the 
app level action blocks and quickly get to editing it without leaving the page you are in. 

Internally an action block can only access the state variables available in its scope (for e.g 
component level action b)
