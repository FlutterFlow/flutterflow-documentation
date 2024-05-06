---
slug: toolbar
title: Toolbar
tags: []
---

# Toolbar

The Toolbar, located at the top of the app builder, provides easy access to numerous tools and features. It includes options for project configuration, saving your app version, accessing help, reporting or debugging issues, viewing project comments, downloading your app code, and running your app directly in FlutterFlow.

![Toolbar.avif](imgs/Toolbar.avif)

## 1. Project info

Hovering over this section reveals the essential information about your project. Here, you can easily check the project name, the current version of FlutterFlow that you're using, along with its release date. Additionally, it shows the Flutter version that your project is currently running on.

## 2. Help

From here, you will get access to essential resource links that will come in handy while building your apps.

### 2.1 Search Docs

If you are a paid user, we allow you to conduct a direct search from our documentation.

### 2.2 Community Forum

We have a vibrant [community](https://community.flutterflow.io/) of users comprising individuals who share a mutual interest in FlutterFlow. This community actively engages in discussions, knowledge-sharing, and collaborative projects centered around FlutterFlow.

### 2.3 Feedback

From here, you can provide feedback and help us improve the product.

### 2.4 Bug report

You can [submit a bug report](#) from here.

### 2.5 Tutorials

From here, you can start the tutorial for building your first app right inside FlutterFlow.

### 2.6 FAQs and Docs

While building your app, you might need to consult our official documentation frequently. This option will redirect you to FlutterFlow documentation.

### 2.7 What's New?

We want to keep you updated with all the latest features and changes that are being made in FlutterFlow. Using this button, you can directly access the updates regarding what's new in FlutterFlow.

### 2.8 Current Status/Known Issues

We want to keep you informed about the current status of FlutterFlow and provide updates regarding any known issues. We aim to ensure transparency and keep you in the loop about the platform's performance and potential issues.

### 2.9 Show/Hide Chat

You can use this option to show or hide the chat button at the bottom right of the app builder.

## 3. Keyboard shortcuts

With keyboard shortcuts, you can perform common actions related to widgets and run your project in Test or Run mode with just a few keystrokes, saving you time and effort. Select this option to see all the shortcuts.

![keyboard-shortcut.avif](imgs/keyboard-shortcut.avif)

## 4. Command Palette

The Command Palette makes it easy to find and use things in the App Builder. Open the Command Palette by clicking the search button or pressing Cmd/Ctrl + K. Search for anything, and to find out where it's used, click the right arrow – we'll show you every place. To directly access the item, just click on it.

![command-palette.avif](imgs/command-palette.avif)

## 5. Canvas size

We allow you to visualize and design your app for various mobile, tablet, and desktop devices. The [canvas](#) size is defined as width (in pixels) x height (in pixels). This size is determined according to the device selected. To set a custom canvas size, click on the Canvas Size and enter the width and height (in pixels) you want.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/6TBNjYNfVDmV4NawxA4f?embed&show_copy_link=true"
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
## 6. Project history

Versions

Versions enable you to save specific named states of your project. This function is particularly useful for recovery purposes. If you accidentally delete a page or component or change settings, you can easily revert to a saved version.

Snapshots

Snapshots are automatically saved as you build.

:::info

Users on the *Free* and *Standard* plans can access only one day of snapshots.

:::

### 6.1 Saving a version

Saving the latest changes will store the current state of your app in the version control. In the future, if anything goes wrong, you can restore your app to the currently saved state.

Ideally, you should save the version whenever you accomplish something important, for example, after finishing a page, adding configuration, etc.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/d1rO0YLeMsrIt3Alb70E?embed&show_copy_link=true"
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
### 6.2 Restoring a version

Restoring the previous version will preserve the current version, then load the changes from the version you're restoring. Before restoration, you may want to view the changes in the previous version. To do this, select the Peek option, which opens the previous version in a new tab.

![Screenshot 2024-05-06 at 10.57.51 AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/09694bda-16f5-490f-aaac-3601b64ca6a2/62cabaee-ff75-496b-be7e-6df40a3cd8f2/Screenshot_2024-05-06_at_10.57.51_AM.png)

## 7. Project comments

This helps you leave your thoughts, opinions, questions, or feedback on a specific widget with your project team or a client. While adding a comment, you can tag users, and they will be able to respond, creating a thread of conversation.

:::info

To tag users, select the @ symbol and choose the project team member(s).

:::

## 8. Optimizations & Enhancements

We scan and suggest enhancements to elevate your app's design and speed. Imagine having a personal consultant for design and performance dedicated to improving the user experience of your app.

Optimizations: We spotlight elements that may slow down your app. For example, a query on a column, unused and duplicate backend query, a widget with unbounded size, etc.

UI Enhancements: We offer tips for a more visually appealing and user-friendly design, like resizing a small tap target of any widget.

:::info

You can control what kind of suggestions you would like to receive by clicking on the settings icon on the right.

:::

![Optimization.avif](imgs/Optimization.avif)

## 9. Project issues

If there are any issues or warnings present in your current project that might result in a build failure or app crash, they will be displayed in this section. You can click this option to view a short description of each issue and navigate to the place where you can fix the issue by clicking on the respective issue.

![Warning-and-errors.avif](imgs/Warning-and-errors.avif)

## 10. Branching

[Branching](#) allows you to create a separate copy of your existing project to build new things without breaking existing features.

## 11. Developer menu

From here, you can view the code for your project, connect to GitHub, and also download the source code for your project.

## 11.1 View Code

This option lets you display the *Dart* code for all the pages of your FlutterFlow project. You can also take a look at the dependencies being used by the app here.

## 11.2 Connect GitHub Repo (Paid Feature)

You can use this option to connect your project with your [GitHub](https://github.com/) account and upload it to a GitHub repository. When you click this option, you will be navigated to the Settings and Integrations > Integrations > Github section.

From there, you can configure your project to add GitHub integration to it. You can get a detailed [step-by-step guide](#) for connecting to GitHub.

### 11.3 Download Code (Paid Feature)

You can download the entire codebase of the app generated by FlutterFlow using this option. It will download a `.zip` file. You can open the contents using any code editor to make modifications.

### 11.4 Download APK (Paid Feature)

Use this to generate a release build of your app. It will automatically download the `.apk` file after the building process is complete.

### 11.5 FlutterFlow CLI

You can also download the code using *[FlutterFlow CLI](https://pub.dev/packages/flutterflow_cli)*. See instructions [here](#).

## 12. Share project

You can make a project public so that others can view and clone your project. Before you share your project, make sure to remove any sensitive information.

:::note

- You can only share projects where you are the owner.
- The share feature can be used to create Marketplace items. You can learn more about this [here](https://docs.flutterflow.io/marketplace/adding-and-purchasing-items#adding-a-marketplace-item).

:::

## 13. Preview

You can use the Preview mode to quickly try out your app on a virtual device without waiting for it to build. This helps you to have a good overview of the navigation and animations you have added to your app. You can also preview your app in the Dark/Light mode and visualize it on various mobile, tablet, and desktop devices.

This mode has a few limitations; you can't use Firebase or perform API calls in the *Preview* mode. However, the onDoubleTap, onLongPress, and onSubmit works in this mode.

A list of unsupported features is displayed in the Known Issues menu in *Preview mode*.

## 14. Testing

This menu allows you to run your app in [Test](#) or [Run](#) mode.