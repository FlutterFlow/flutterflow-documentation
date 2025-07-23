---
title: Fix Codemagic Build ErrorRecord
slug: troubleshooting/deployment/fix-codemagic-build-error-end-of-central-directory
keywords: ['error', 'build', 'format']
---

# Fix Codemagic Build Error: Format Exception

When triggering a build through Codemagic from a connected GitHub repository, you may encounter the following error:

    ```text
    Codemagic build error: Format Exception: Could not find End of Central Directory Record
    ```
    This issue typically occurs when the **branch name** is entered incorrectly—especially if you include the repository name in the input field.

:::info[Prerequisites]
- You must have already connected your GitHub repository to your FlutterFlow project.
- You should be using Codemagic for automated deployment.
:::

To fix this issue, ensure that you only enter the **branch name**, not the full path with the repository name.

:::tip
Use only the branch name. Avoid formats like `repo-name/branch-name`.
:::

Incorrect input:

    ![](../assets/20250430121235746050.png)

Correct input:

    ![](../assets/20250430121235981602.png)

If the issue persists after correcting the branch name, contact **[support@flutterflow.io](mailto:support@flutterflow.io)** for additional help.
