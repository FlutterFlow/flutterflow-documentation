---
keywords: ['code', 'edits', 'github', 'branches']
slug: troubleshooting/github/manage-code-edits-with-github-branches
title: Manage Code Edits Without Overwrites When Using GitHub
---

# Manage Code Edits Without Overwrites When Using GitHub

When working with GitHub integration in FlutterFlow, it’s important to understand how FlutterFlow manages branches to prevent your custom code edits from being overwritten.

:::info[Prerequisites]
- A FlutterFlow project linked to a GitHub repository.
- Basic understanding of Git branches and merge workflows.
:::

FlutterFlow pushes updates only to the `flutterflow` branch of your GitHub repository. You **should not** make local changes directly to this branch, as they will be **overwritten** every time the project syncs from FlutterFlow.

Follow the steps below to safely make and retain local code changes:

1. **Push from FlutterFlow to GitHub**  
   This sends the latest generated code to the `flutterflow` branch.

2. **Create a New Branch for Local Edits**  
   Checkout a separate branch (e.g., `main`) and copy the code from the `flutterflow` branch into it.

   ```bash
   git checkout -b main
   git merge flutterflow
   ```

3. **Make Changes on Your Custom Branch**
   Apply any local modifications on the custom branch (not on flutterflow).

4. **Push Again From FlutterFlow When Needed**
   When you push new changes from FlutterFlow, it will update the flutterflow branch. Your custom branch will remain unchanged.

5. **Merge and Resolve Conflicts**
   After FlutterFlow updates the flutterflow branch, merge it into your custom branch and resolve any conflicts:

      ```js
      git checkout main
      ```
      ```js
      git merge flutterflow
      ```
      This allows you to selectively retain or discard changes as needed.

:::warning
Do not make direct changes to the flutterflow branch, as any future push from FlutterFlow will overwrite it.
:::