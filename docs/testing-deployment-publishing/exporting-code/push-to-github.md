---
slug: /exporting/push-to-github
title: Push to GitHub Repo
description: Learn how to connect your FlutterFlow project to a GitHub repository and manage custom code.
tags: [GitHub, Custom Code]
sidebar_position: 0
keywords: [GitHub, Collaboration, FlutterFlow, Custom Code]
---

# Push to GitHub Repo

This guide provides instructions on how to connect your FlutterFlow project to a GitHub repository and manage custom code.

## Connect a GitHub repo

In this section, we'll learn how to connect your FlutterFlow project to a GitHub repository. This includes creating a new repository, installing the FlutterFlow GitHub App, and pushing your code to the repository.

Here’s how you do it:

1. First, go to your GitHub account and create a new repository.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/UhBD10h3wufXyozCBFhK?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

2. Once the repository is created, install the [FlutterFlow GitHub App](https://github.com/apps/flutterflow-github-app) in your GitHub account.
    
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/bxvvWOrBV7RFzfa2lEDP?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

3. You can now push your code to the repository.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/f6L33Z7nNg7QNKeWQMWg?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

:::tip
- FlutterFlow always pushes changes to a branch named `flutterflow`. Avoid making direct changes to this branch, as your changes will be overwritten by the next push from FlutterFlow.
- If you need to modify the code, make changes in a separate branch. Learn more about managing custom code.
:::

## Manage Custom Code on GitHub

Writing custom code allows you to add features that are not supported by FlutterFlow's current functionality. This section outlines how you can manage custom code using GitHub to prevent FlutterFlow from overriding it.

![manage-custom-code](../imgs/manage-custom-code.avif)

The diagram illustrates the flow or process of managing code in GitHub. This process allows you to leverage all the features from FlutterFlow and deploy your app with a custom code.

Here's a step-by-step explanation:

### 1. Connect FlutterFlow to GitHub

First, set up the connection between your FlutterFlow project and GitHub repository. [Follow these steps](#connect-a-github-repo) if you haven’t already done so.

### 2. Establish a custom code branch

After pushing your FlutterFlow code to GitHub, it lands in the `flutterflow` branch. To safeguard your custom modifications from being overwritten by future pushes, create a `develop` branch.

1. Navigate to your GitHub repository.
2. Switch from `main` to `flutterflow` in the branch dropdown.
3. In the branch creation field, enter `develop` and create the branch from `flutterflow`.

### 3. Add custom code

Once your `develop` branch is ready, [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local machine. Open the project in your IDE, switch to the `develop` branch, and add your custom code.

After making changes, commit and push them back to the `develop` branch.

### 4. Merge changes from FlutterFlow

To integrate the latest updates of your FlutterFlow project into your custom code:

1. Create a pull request on GitHub from `flutterflow` to `develop`.
2. Review and merge the changes, resolving any conflicts if necessary.

### 5. Final testing and deployment

After testing the changes in `develop`:

1. Merge `develop` into `main` via a new pull request on GitHub.
2. Once reviewed and merged, deploy your application from the `main` branch using FlutterFlow’s deployment features.

:::tip
Also, see how you can download the code using [**FlutterFlow CLI**](ff-cli) and [**Local Run**](../running-your-app/local-run.md).
:::