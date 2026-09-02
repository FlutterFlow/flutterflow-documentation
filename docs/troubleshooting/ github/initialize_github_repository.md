---
keywords:
  - github
  - push
  - repository
  - initialize
  - error
slug: /troubleshooting/github/initialize-github-repository
title: Initialize GitHub Repository
description: >-
  When pushing code to GitHub, the following error may occur: This typically
  happens if the GitHub repository was not initialized correctly or if the
  project exceeds GitHub’s file...
tags:
  - FlutterFlow
  - Troubleshooting
  - GitHub
last_verified: 2026-09-02
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

      <video className="docs-video" autoPlay loop muted playsInline controls aria-label={"Initializing a GitHub repository from FlutterFlow"}><source src={require("../assets/20250430121522561282.mp4").default} type="video/mp4" /></video>

3. **Download and Inspect Your Project**

   - Download the full source code from FlutterFlow.
   - Navigate to the `assets` folder.
   - Identify large generated assets. GitHub warns for files over 50 MiB and blocks regular Git objects over 100 MiB; the 25 MiB limit applies to files uploaded through the browser UI. FlutterFlow or an integration can impose an additional limit, so inspect the exact error and build logs.

      :::warning[Check Your Asset Size]
      Do not commit large generated media merely to bypass an integration error. Optimize it, host it through an appropriate asset service, or use Git LFS only if the FlutterFlow workflow and deployment support LFS end to end.
      :::


      :::tip[Tips to Reduce Project Size]
      - Use **network assets** instead of uploading large media files directly to FlutterFlow.
      - Optimize images using tools like TinyPNG or ImageOptim before uploading.
      :::

:::info[Additional Resources]
- **[Connect a GitHub Repo](/exporting/push-to-github/#connect-a-github-repo)**
- **[State Management](/concepts/state-management/)**
:::
