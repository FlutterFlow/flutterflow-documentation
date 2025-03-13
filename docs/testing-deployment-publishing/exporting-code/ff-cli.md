---
slug: /exporting/ff-cli
title: FlutterFlow CLI
description: Learn how to download and manage your FlutterFlow projects locally using the FlutterFlow CLI.
tags: [CLI, Collaboration, FlutterFlow]
sidebar_position: 1
keywords: [CLI, Collaboration, FlutterFlow, Projects, Local Management]
---


# FlutterFlow CLI

The [FlutterFlow CLI](https://pub.dev/packages/flutterflow_cli) tool allows you to quickly and easily download your project files directly from FlutterFlow to your local machine.

## Installation

To use the FlutterFlow CLI, you first need to install it globally using Dart's package manager with the following command:

```
dart pub global activate flutterflow_cli
```

## Usage

Follow the steps below to export your project.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Rc3s1P8DFypUKoPzVITL?embed&show_copy_link=true"
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

### API Token
To use the CLI, you'll need to create an API token and use it in your requests. See the documentation [here on how to generate an API token.](/accounts-billing/account-management)

### CLI command details

- If you wish to exclude assets from the download, use `-no-include-assets` in your command. This will download the project code without the assets. For example: `flutterflow export-code --project your_project_id --dest path_to_output_folde --no-include-assets --token your_token`
    
- You can download code from a specific branch by switching to that branch and using the toolbar command, or by including the `-branch-name` or `-b` flag in your command and specifying the branch you wish to download from.

#### All supported command options

| Flag | Behavior | Default |
| --- | --- | --- |
| --dest / -d | Specifies a destination folder other than the current directory. | Current directory |
| --[no]-include-assets | Option to download assets (images, GIFs). Useful for consecutive code exports if the assets folder hasn't changed. | False |
| --branch-name / -b | Downloads from a specific branch. | Main |
| --[no]-fix | Option to run dart fix on the code after downloading. | False |
| --[no]-parent-folder | Option to download the code into a subfolder instead of directly into the directory. | False |
| --[no]-as-module | Whether to generate the project as a Flutter module. | False |
| --[no]-as-debug | Whether to generate the project with debug logging to be able to use FlutterFlow Debug Panel inside the DevTools. | False |
| --project-environment | Which [development environment](../development-environments/development-environments.md) to be used. If empty, the current environment in the project will be downloaded. | Current environment |

## Filtered exports

We've developed [a solution](https://github.com/krabhishek/flutterflow-filtered-pull) that allows you to use the CLI tool without overwriting specific files or directories. This is especially useful if you're managing code outside of FlutterFlow and want to prevent it from being overwritten during a code export.

## FAQ
<details>
<summary>I am getting an error as FormatException: Missing argument for…</summary>
<p>
This error likely indicates that you haven't correctly entered the command option along with its value. Double-check that all required information has been entered. If everything is correct and you're still encountering the error, it might be due to using an outdated version of the FlutterFlow CLI. To resolve this, you can update to the latest version by running the installation command:
```
dart pub global activate flutterflow_cli
```
This should update the CLI and fix the issue.
</p>
</details>