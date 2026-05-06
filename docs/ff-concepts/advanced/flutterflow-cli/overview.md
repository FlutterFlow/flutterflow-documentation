---
slug: /flutterflow-cli
title: Installation
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
To use the CLI, you'll need to create an API token and use it in your requests. See the documentation [here on how to generate an API token.](../../../accounts-billing/account-management.md#how-do-i-generate-an-api-token)


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
