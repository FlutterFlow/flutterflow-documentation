---
slug: /flutterflow-ui/toolbar
title: Toolbar
description: Learn how to use the FlutterFlow Toolbar to access project management, version control, help, testing, and development tools.
tags: [Toolbar, FlutterFlow, UI, Tools, Project Management]
sidebar_position: 1
keywords: [Toolbar, FlutterFlow, UI, Tools, Project Management]
---

# Toolbar

The Toolbar, located at the top of the app builder, provides easy access to numerous tools and features. It includes options for project configuration, saving versions of your app, accessing help, reporting or debugging issues, viewing project comments, downloading your app code, and running your app directly in FlutterFlow.

![toolbar](imgs/toolbar.avif)

## Project Info

Click on the project info to view the project name, branch, environment, FlutterFlow version and release date, and the Flutter version used by the project.

## Help Menu

From here, you can access essential resource links that can help you while building your app.

1. **Search Docs**: Paid users can search the FlutterFlow documentation directly from the builder.
2. **Community Forum**: Visit the [Community Forum](https://community.flutterflow.io/) to participate in discussions, share knowledge, and collaborate with other FlutterFlow users.
3. **Feedback**: You can provide feedback and help us improve the product.
4. **Bug Report**: You can submit a bug report from here.
5. **Generate Bug Report Code**: Click this option to generate a unique code that helps the FlutterFlow team assess and troubleshoot your issue. Include this code when submitting a bug report.
6. **Tutorials**: You can start the tutorial for building your first app directly in FlutterFlow.
7. **FAQs and Docs**: While building your app, you might need to consult our official documentation frequently. This option opens the FlutterFlow documentation.
8. **What's New?**: View the latest FlutterFlow features, improvements, and product updates.
9. **Current Status/Known Issues**: View FlutterFlow's current system status and any known issues.
10. **Show/Hide Chat**: You can use this option to show or hide the chat button at the bottom right of the app builder.

## Keyboard Shortcuts

With keyboard shortcuts, you can perform common actions related to widgets and run your project in Test Mode or Run Mode with just a few keystrokes, saving you time and effort. Select this option to see all the shortcuts.

![keyboard-shortcuts.avif](imgs/keyboard-shortcuts.avif)

## Command Palette

Open the Command Palette by selecting the search button or pressing **Cmd/Ctrl + K**. Search for an item, then select the right arrow to see where it is used. Select a result to open it directly.

![command-palette.avif](imgs/command-palette.avif)

## AI Agent

[AI Agent](../../ff-concepts/ai-agent.md) lets you work with AI coding agents directly from the FlutterFlow desktop app. It is helpful for making project updates with natural-language prompts, such as creating pages, adjusting widgets, wiring actions, or reviewing your project structure.

## AI Generation History

The **AI Generation History** panel lets you track the status of your AI-generated items. It provides a list of all previously generated pages and components, and you can easily preview them in the panel.

## Project Comments

Project Comments let you leave thoughts, questions, or feedback on a specific widget for your project team or client. While adding a comment, you can tag users, and they will be able to respond, creating a thread of conversation.

:::info

To tag users, select the **@** symbol and choose the project team member(s).

:::



## Project Suggestions

Project Suggestions identifies opportunities to improve your app's design and performance.

**Optimizations**: This identifies elements that may slow down your app, such as queries on columns, unused or duplicate backend queries, and widgets with unbounded sizes.

**UI Enhancements**: This provides tips for creating a more visually appealing and user-friendly design, such as increasing the size of a widget's tap target.

:::info

You can control which types of suggestions you receive by selecting the settings icon on the right.

:::

![optimizations-UI-enhancements.avif](imgs/optimizations-UI-enhancements.avif)

## Project Issues

This section displays errors and warnings that may cause build failures or app crashes. Select an issue to view its description and navigate to the relevant location in your project.

:::tip[Errors vs Warnings]
**Errors** prevent your app from compiling and running. These must be resolved in order to run the app. They can be due to missing actions, errors in custom code, incorrect data types, and so on.

**Warnings**, while not preventing compilation, indicate potential issues such as incorrect rule configuration or performance problems. Although it's possible to ignore warnings, addressing them can enhance the quality of your app and prevent future issues.
:::

![warnings-errors.avif](imgs/warnings-errors.avif)


## Version Control
**Version Control** is a system that tracks changes to your project's files over time, allowing you to revert to previous states if needed. In FlutterFlow, you can use [Branching](../../testing-deployment-publishing/branching-collaboration/branching.md) to create a separate copy of your project to build or test features without affecting the main version.


## Developer Menu
The Developer Menu provides access to tools such as code viewing, GitHub integration, and source code download capabilities.

1. **View Code**: This option lets you view the *Dart* code for all the pages of your FlutterFlow project. You can also view the dependencies used by the app here.

2. **Connect GitHub Repo**: You can use this option to connect your project to a [GitHub](https://github.com/) repository and upload its code. See [Connect a GitHub Repository](../../testing-deployment-publishing/exporting-code/push-to-github.md#connect-a-github-repo) for step-by-step instructions.

3. **Download Code**: You can download the entire codebase of the app generated by FlutterFlow using this option.

4. **Download APK**: Use this to generate a release build of your Android app. It will automatically download the `.apk` file after the build is complete.

5. **FlutterFlow CLI**: You can also download the code using *[FlutterFlow CLI](https://pub.dev/packages/flutterflow_cli)*. See instructions [here](../../ff-concepts/advanced/flutterflow-cli/exporting-projects.md).

:::note
_Connect GitHub Repo_, _Download Code_, and _Download APK_ features require a [**paid plan**](https://flutterflow.io/pricing).
:::

6. **Open in VSCode**: This option lets you open your entire FlutterFlow project in a VS Code environment, offering a richer development experience. You’ll have real-time autocomplete and error detection, easier access to existing Flutter and Dart tooling, and the ability to leverage the AI ecosystem.

7. **Refactor Project**: This option opens your FlutterFlow project in a YAML-based file editor, allowing you to perform bulk edits more efficiently. You can search, edit, and replace values across multiple files—useful for renaming keys, updating data types, or migrating resources to a Library. Check out the [**Refactor Project**](../../resources/projects/refactor-project.md) documentation for more details.

## Share Project

You can make a project public so that others can view and clone your project. Before sharing your project, make sure to remove any sensitive information.

:::note

- You can only share projects where you are the owner.
- The share feature can be used to create Marketplace items. See [**FlutterFlow Marketplace**](../../marketplace/index.md) for more information.

:::

## Preview App

You can use this option to run your app in [Preview mode](../../testing-deployment-publishing/running-your-app/run-your-app.md#preview-mode).

## Test Mode

Use this menu to run your app in [Test Mode](../../testing-deployment-publishing/running-your-app/run-your-app.md#test-mode) or [Run Mode](../../testing-deployment-publishing/running-your-app/run-your-app.md#run-mode).
