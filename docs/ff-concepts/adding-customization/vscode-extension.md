---
slug: /concepts/custom-code/Visual Studio Code-extension
title: Visual Studio Code Extension
description: Learn how to leverage the Visual Studio Code Extension to write custom code.
tags: [Custom Code, Customizations]
sidebar_position: 2
keywords: [FlutterFlow, Custom Code, Customizations, Flutter, Dart, Pub.dev, Visual Studio Code, Visual Studio, IDE]
# toc_max_heading_level: 4
---

# FlutterFlow Visual Studio Extension

## What is Visual Studio Code?
Visual Studio Code is an IDE (Integrated Development Environment), which is a tool that helps developers write, test, and debug code all in one place. It combines features like code editing, error checking, and running apps.

## Why use the Visual Studio Code Extension?
While you can edit custom code inside of FlutterFlow's in-app code editor, editing the code in Visual Studio Code may be preferrable for a few reasons:

1. **Access the entire codebase**: When writing custom code in Visual Studio Code, you'll see your app's entire codebase - which makes it easier to reference things like Component widget classes, custom data types and enums, and more.
2. **Realtime autocomplete and error detection**: Working on a local machine means you're likely to have more reliable access to realtime error detection and autocomplete within the code editor. This can make your code development more efficient.
3. **Leverage Flutter & Dart tooling**: Working in Visual Studio Code also means you can leverage existing Flutter & Dart tooling. This can make it easier to develop and refactor your custom code.
3. **Leverage AI ecosystem**: Additionally, you can easily leverage AI tooling from the Visual Studio Ecosystem, like Copilot. 


## Installing

- You can install Visual Studio code on your machine from the [Visual Studio Code website](https://code.visualstudio.com/)
- You can install the FlutterFlow extension from the [Visual Studio Code marketplace](https://marketplace.visualstudio.com/items?itemName=FlutterFlow.flutterflow-custom-code-editor&ssr=false#overview)


## Settings
To use the  Visual Studio Code extension, you must set your API key in the  Visual Studio Code extension settings. There are also some optional settings that can be used.

1. Navigate to **Manage** > **Settings** in Visual Studio Code
2. Select the **Extensions** section of Settings and find **FlutterFlow**
3. You can generate an API key from the [FlutterFlow account page](https://app.flutterflow.io/account). 
4. Optionally specify the default **Project ID** and **Branch** to use when pulling and updating code 
5. Optionally set the **Download Location** to use as the initial file location where the code will be downloaded.

<!-- TO DO - add images or arcade demo for settings -->

## Downloading Code
The first step in editing custom code for your FlutterFlow project is to download its code. To download the code for your project, use the  Visual Studio Code command palette (`cmd` + `shift` + `p` or `ctrl` + `shift` + `p`).

In the command palette, you can use the `FlutterFlow: Download Code` command. 

This command will prompt you for three pieces of information:
- **Project ID**: This is the Project ID, or unique identifier, for your FlutterFlow project. You can find the Project ID by hovering over the Project Name in the top left corner inside the FlutterFlow builder.
- **Branch Name:** The name of the FlutterFlow project branch you want to work on. You can leave this blank to work on the main branch.
- **Download Location:** A file picker will be presented for you to choose where to download your project code, the code will be downloaded to 
`thisdirectory`/`projectID`. 

## Initializing a Code Editing Session
After the code has been downloaded, you will need to initiate a **Code Editing** session using the extension. When a Code Editing session has been initiated, you’ll be able to pull and push code from Visual Studio Code to FlutterFlow. 

To start a Code Editing session, run the command `FlutterFlow: Start Code Editing Session` from the Visual Studio Code Command Palette.
This command will also automatically run `flutter pub get`.

![extension-overview.png](imgs/extension-overview.png)

## Editing Custom Code
Once your session has been initialized, you can begin adding or editing custom code. 

Right now, the only resources that are editable are:
- **Custom Actions**: in the `lib/custom_code/actions` directory 
- **Custom Widgets**: in the `lib/custom_code/widgets` directory
- **Custom Functions**: in `lib/flutter_flow/custom_functions.dart`
- **Package Dependencies**: in `pubspec.yaml`

:::note
Custom Actions and Widgets have a 1-to-1 relationship between Actions/Widgets and files. So if you create a new file in the `lib/custom_code/actions` directory, you’ll add a new action that will be available in your FlutterFlow project.

For custom functions they are all in one file `lib/flutter_flow/custom_functions.dart`, you can add, edit and delete custom functions directly in this file.
:::

It’s recommended that you install the [Flutter & Dart Visual Studio Code Extensions](https://docs.flutter.dev/tools/vs-code) which will make it easier to edit Flutter and Dart code. 

## Testing Changes Locally
As you’re writing custom code, you’ll likely need to test it out. We recommend that you call your Custom Function, Action or Widget from within your FlutterFlow project (for example, by adding the Custom Widget to a page). 

You can then choose to test your app from FlutterFlow, using a [Test Mode session](https://docs.flutterflow.io/testing/run-your-app/#test-mode) or [Local Run](https://docs.flutterflow.io/testing/local-run), or run it locally from Visual Studio Code. 

To test using FlutterFlow, make sure to [push your changes](#pushing-changes-from-visual-studio-code) before running.

To run from Visual Studio Code, you should have the Flutter Visual Studio Code extension installed. Then, you can simply press the Run (play) button in Visual Studio Code. For more details, follow [Flutter’s documentation](https://docs.flutter.dev/tools/vs-code#running-and-debugging).

## Pushing Changes from Visual Studio Code
To make your custom code available inside of FlutterFlow, you need to push your changes to FlutterFlow. 

Pushing your changes takes all of the files that have been modified in Visual Studio Code, and overwrites the state of those files within FlutterFlow. 

To see what files have been modified, you can check the **FF: Modified Files section of the Explorer**.
The FF: Modified Files panel should be updated when a file is updated and saved to indicate what has been added, removed, or changed.

![see-modified-files.png](imgs/see-modified-files.png)


To push changes click the `Push to FlutterFlow` status bar icon, or run the `FlutterFlow: Push to FlutterFlow` command in the command palette.

![push.png](imgs/push.png)


:::warning
This action cannot be undone. Make sure that you don’t have changes in FlutterFlow that should not be overwritten by local changes in Visual Studio Code. To help avoid this situation, we recommend pulling your changes from FlutterFlow before editing in Visual Studio Code, and pushing changes as soon as they are complete.
:::

## Pulling Changes from FlutterFlow
As you make changes in FlutterFlow, you’ll want to pull those changes down into your local repository. This is especially useful for when you add new Components, App State Variables or Custom Data Types / Enums that you may want to reference in your custom code.

To pull changes click the `Pull Latest icon` on the lower status bar or run the `FlutterFlow: Pull Latest Changes` command.

![pull.png](imgs/pull.png)


:::warning
Similar to pushing changes mentioned above, it’s important to note that this will override all of your local changes with what was present in FlutterFlow. 
:::

## Renaming Resources

To rename Custom Actions or Custom Widget, use the Visual Studio Code rename symbol functionality. Simply, right click the name of a Custom Action or Widget and select **Rename Symbol**, then type the new name.

If you change the name without doing this, you’ll need to update the name in the file where the Widget or Action is defined, as well as the index file that exports the Widget (`lib/custom_code/widgets/index.dart`) or Action (`lib/custom_code/actions/index.dart`).

## Creating a New Resource

To add a new Custom Action or Widget, create a new dart file in the `lib/custom_code/widgets` or `lib/custom_code/actions` directory and the boilerplate should appear within the new file.

To add a new Custom Function, simply create a new function in the `lib/flutter_flow/custom_functions.dart` file. We do not have automatic support for Custom Function boilerplate code in Visual Studio Code at this time.

## Deleting a New Resource
To delete a Custom Action or Widget, delete the associated file. 

## Adding New Dependencies
You can add custom [pub.dev](pub.dev) package dependencies with the `Dart: Add Dependency` command from the Visual Studio Code command palette. This will update the `pubspec.yaml` file.


