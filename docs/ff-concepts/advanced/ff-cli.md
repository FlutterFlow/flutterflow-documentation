---
slug: /exporting/ff-cli
title: FlutterFlow CLI
description: Learn how to download and manage your FlutterFlow projects locally using the FlutterFlow CLI.
tags: [CLI, Collaboration, FlutterFlow]
sidebar_position: 1
keywords: [CLI, Collaboration, FlutterFlow, Projects, Local Management]
---


# FlutterFlow CLI
The [FlutterFlow CLI](https://pub.dev/packages/flutterflow_cli) lets you manage FlutterFlow projects from the command line. You can create new projects, modify existing ones using AI agents, and download them to your local machine.

## Installation

To use the FlutterFlow CLI, you first need to install it globally using Dart's package manager with the following command:

```
dart pub global activate flutterflow_cli
```

### Get API Token
To use the CLI, you'll need to create an API token and use it in your requests. See the documentation [here on how to generate an API token.](../../accounts-billing/account-management.md#how-do-i-generate-an-api-token)

## Build Projects
The FlutterFlow CLI lets you build and edit FlutterFlow apps in the terminal instead of in the visual builder. You can use it to create brand-new apps or for changes to ones you already have. It's designed for AI agents, so you can hand work off and review their changes like any other code.

:::info[Remember]

- **FF CLI is not a replacement for the visual builder.** FlutterFlow is still faster for most visual work. FF CLI is for precision, repeatability, and automation.
- **FF CLI doesn't execute your app.** It produces a FlutterFlow project, which you can test and run inside FlutterFlow visual builder.
:::

A FlutterFlow project is the source of truth. FF CLI is how you create or change it from code. You can write an app in the terminal, open the result in FlutterFlow's visual editor, and keep going in either direction. Both paths give you the same FlutterFlow app.

![ff-cli-ff-builder-using-same-ff-app.avif](imgs/ff-cli-ff-builder-using-same-ff-app.avif)

### Create Projects

Let’s walk through using the FlutterFlow CLI by building a simple meditation app:

#### 1. Start the workspace setup

Open your terminal in the folder where you want the workspace to live, then run:

```bash
flutterflow ai init
```

This launches an interactive setup wizard.

#### 2. Name your workspace

The wizard will ask for a workspace name or path. Type a short, lowercase name with no spaces. This becomes the folder name for your project.

```
Workspace name or path
> mindfly
```

#### 3. Pick an environment

Next you'll see a list of FlutterFlow environments to connect to. Use ↑ / ↓ to highlight your choice and press **Enter**.


#### 4. Paste your FlutterFlow API key

The wizard will ask for your API key. Paste it and press **Enter**.

```
FlutterFlow API key
> your-api-key-here
```

#### 5. Choose: New app or Edit existing

The wizard now asks whether you want to edit an existing FlutterFlow project or create a new one:

```
Existing project ID to edit (press Enter to create a new app)
> paste-your-project-id-here
```

Press **Enter** with no input to create a new app. (To edit an existing project instead, paste its project ID here.)

#### 6. Confirm the setup

The wizard prints a summary of what it's about to do:

```
Ready to create FlutterFlow AI workspace:
   Workspace:   /Users/.../projects/mindfly
   Flow:        Create a new app
   Environment: beta
   SDK:         0.1.6 (build aed0f835)
   Base URL:    https://api.flutterflow.io/v2-staging

Proceed? [Y/n]
```

Review the workspace path, environment, and flow. If everything looks right, press **Y** and **Enter**.


#### 7. Move into the workspace and launch your agent

Move into the new workspace folder and start your preferred coding agent. This example uses Claude Code:

```bash
cd mindfly
```
and then...
```bash
claude
```

#### 8. Approve the FlutterFlow AI MCP server

The first time the agent opens the workspace, it will detect the new MCP server and ask for permission:

```
New MCP server found in .mcp.json: flutterflow_ai

MCP servers may execute code or access system resources.
All tool calls require approval.

> 1. Use this and all future MCP servers in this project
  2. Use this MCP server
  3. Continue without using this MCP server
```

Choose **option 1** to use the FlutterFlow AI MCP server (and any others added to this workspace later) without being asked again. Press **Enter** to confirm.

> **Why approve?** Without the MCP server, the agent can edit local files but can't actually push changes to your FlutterFlow project. With it approved, the agent has the same tools you'd run yourself from the CLI.
> 

#### 9. Describe your app in plain English

Claude Code is now connected to your workspace and the FlutterFlow AI MCP server. Type what you want to build at the prompt:

```
> create a minimalist meditation app
```

Press **Enter**. The agent will plan the app, generate the code, push it to FlutterFlow through the MCP server, and report back.

#### 10. Verify the app in the FlutterFlow visual builder
Open FlutterFlow in your browser and navigate to your project. You’ll see the generated app reflected in the visual builder. From here, you can continue refining the app visually or iterate further using the AI agent.

### Modify Projects
To modify an existing project, [paste your project ID](#5-choose-new-app-or-edit-existing) when prompted instead of pressing Enter. This connects the workspace to your current FlutterFlow app. Once set up, you can use the AI agent to make changes, and updates will be pushed directly to the existing project.


## Download Projects

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


### Command Details

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
| --project-environment | Which [development environment](../../testing-deployment-publishing/development-environments/development-environments.md) to be used. If empty, the current environment in the project will be downloaded. | Current environment |

### Filtered exports

If you are updating an existing project and do not want certain files to be overwritten during a code export, you can create a `.flutterflowignore` file in the root of your project directory. This file should contain a list of files to be ignored using globbing syntax.

#### Example:
If your project is located at:  
```
/Users/yourname/projects/my_flutterflow_app/
```
Then, place the `.flutterflowignore` file in:  
```
/Users/yourname/projects/.flutterflowignore
```

#### Example `.flutterflowignore` contents:
```
my_flutterflow_app/android/app/build.gradle    # Prevents FlutterFlow from overwriting native Android build configuration
my_flutterflow_app/ios/Runner/Info.plist       # Keeps iOS app metadata unchanged
my_flutterflow_app/web/index.html              # Ensures custom modifications to the web entry file are retained
```
This ensures that the specified files and directories are not overwritten during code export.

For more details on globbing syntax, refer to [this guide](https://pub.dev/packages/glob#syntax).


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
