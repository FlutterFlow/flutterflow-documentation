---
keywords: ['github', 'push', 'repository', 'initialize', 'error']
slug: troubleshooting/github/initialize-github-repository
title: Initialize GitHub Repository
---

# Initialize GitHub Repository

When pushing code to GitHub, the following error may occur:

```js
Error pushing repository. Make sure your repository is initialized
```

This typically happens if the GitHub repository was not initialized correctly or if the project exceeds GitHub’s file size limits.

:::info[Prerequisites]
- Access to your GitHub account.
- A FlutterFlow project with GitHub integration enabled.
:::

Follow the steps below to initialize a GitHub repository:

1. **Create a New Repository**

   - Go to **[GitHub](https://github.com/)** and click **New** to create a repository.
   - Enable the option **Add a README file** during creation.

2. **Connect Repository to FlutterFlow**

   - Open your FlutterFlow project.
   - Navigate to **GitHub Integration** and follow the instructions to connect the new repository.

      ![](../assets/20250430121522561282.gif)

3. **Download and Inspect Your Project**

   - Download the full source code from FlutterFlow.
   - Navigate to the `assets` folder.
   - Identify any files larger than **25MB**.

      :::warning[Check Your Asset Size]
      GitHub does not allow individual files larger than 25MB. Large image or video files may cause push failures.
      :::


      :::tip[Tips to Reduce Project Size]
      - Use **network assets** instead of uploading large media files directly to FlutterFlow.
      - Optimize images using tools like TinyPNG or ImageOptim before uploading.
      :::

:::info[Additional Resources]
- **[Connect a GitHub Repo](/exporting/push-to-github/#connect-a-github-repo)**
- **[State Management](/concepts/state-management/)**
:::