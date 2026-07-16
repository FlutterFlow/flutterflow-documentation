---
slug: /flutterflow-cli/build-with-claude-code
title: Build with Claude Code
description: Install the FlutterFlow plugin for Claude Code to build and edit FlutterFlow apps with AI — automatic CLI install, secure API key setup, and a guided build workflow.
tags: [CLI, AI, Claude Code]
sidebar_position: 5
keywords: [Claude Code, Plugin, CLI, Agentic AI, FlutterFlow AI, FlutterFlow Plugin]
---

# Build with Claude Code

The **FlutterFlow plugin for [Claude Code](https://www.claude.com/product/claude-code)** packages FlutterFlow's agentic building experience as a Claude Code plugin. Once installed, it:

- **Installs the FlutterFlow CLI automatically** when a session starts — and if the Dart SDK is missing, points you to the installer instead of failing.
- **Stores your API key securely** — read once from your clipboard, so the key never appears in the chat.
- **Adds a guided build skill** (`/flutterflow:build`) that sets up a workspace, then follows an orient → validate → apply workflow for every change.

The plugin drives the same [FlutterFlow CLI](https://pub.dev/packages/flutterflow_cli) described in [Build with AI Agents](./flutterflow-mcp.md). If you use a different agent (such as Gemini CLI or Codex), or prefer to install the CLI and configure the MCP server yourself, follow that page instead — both paths produce the same result.

:::info[Prerequisites]

Before you start, make sure you have:

- **Claude Code** installed and signed in. Get it from [claude.com](https://www.claude.com/product/claude-code).
- **Git**, which Claude Code uses to install the plugin.
- **Dart**, bundled with [Flutter](https://docs.flutter.dev/get-started/install) — required by the FlutterFlow CLI. If it's missing, the plugin detects it and links you to the installer.
:::

:::note[Platform support]
macOS and Linux work out of the box. On **Windows**, the plugin's automatic setup requires a `bash` on your PATH (from Git Bash or WSL); without one, install the CLI manually (see [Installation](./overview.md)) and let `flutterflow ai` prompt for your API key — the CLI itself supports Windows end-to-end.
:::

## Install the Plugin

Run these two slash commands inside Claude Code:

```
/plugin marketplace add FlutterFlow/flutterflow-claude
/plugin install flutterflow@flutterflow
```

Or the equivalent from a terminal — the Claude Code CLI and desktop app share plugin state:

```bash
claude plugin marketplace add FlutterFlow/flutterflow-claude
claude plugin install flutterflow@flutterflow
```

:::note
`FlutterFlow/flutterflow-claude` is the GitHub repository the plugin installs from; `flutterflow` after the `@` is the marketplace name. To update the plugin later, run `/plugin marketplace update flutterflow`.
:::

## Set Up Your API Key

The plugin authenticates with your FlutterFlow API key. Until one is configured, it prints a reminder when a session starts:

```
[flutterflow] No FlutterFlow API key configured.
[flutterflow]   1) Copy an API key from https://app.flutterflow.io/account
[flutterflow]   2) Come back and tell Claude: "I copied my FlutterFlow API key"
```

**Never paste the API key into the chat** — conversations are logged and retained. Instead, hand the key over through your clipboard:

1. Open your [FlutterFlow account page](https://app.flutterflow.io/account) and copy your API key. If you don't have one yet, see [generating an API token](../../../accounts-billing/account-management.md#how-do-i-generate-an-api-token).
2. Come back to Claude Code and say: **"I copied my FlutterFlow API key"**.

Claude runs a script bundled with the plugin that reads the clipboard once, validates the key, stores it in `~/.config/flutterflow/claude-env.sh` with owner-only permissions, and clears the clipboard. The key itself never enters the conversation. If validation fails — for example, you copied something else in the meantime — Claude asks you to copy the key again and retry.

:::warning[Clipboard history managers]
Tools like Raycast, Alfred, Windows clipboard history (Win + V), and Apple's Universal Clipboard keep their own copy of everything you copy, even after the system clipboard is cleared. If you use one, purge the key from its history after setup.
:::

Working over **SSH or in a headless environment**? The clipboard hand-off isn't available there, so Claude offers a one-line terminal command that prompts for the key with hidden input. Alternatively, run `flutterflow ai` in your own terminal and let its setup wizard prompt for the key.

:::note
Avoid entering the key through `/plugin configure` for now — its input dialog has known issues in current Claude Code versions ([#73530](https://github.com/anthropics/claude-code/issues/73530), [#62442](https://github.com/anthropics/claude-code/issues/62442)). The clipboard hand-off above is the recommended path.
:::

## Build with FlutterFlow

Start a new Claude Code session. On the first session after setup, the plugin installs the FlutterFlow CLI automatically — you'll see a short notice while it works:

```
[flutterflow] Installing the FlutterFlow CLI…
[flutterflow] ✓ FlutterFlow CLI installed — you're ready for agentic building.
```

After that, describe what you want to build — the build skill triggers on FlutterFlow tasks, or you can invoke it explicitly with `/flutterflow:build`:

```
> Create a FlutterFlow app for tracking daily habits
> Add a profile page with an avatar, display name, and a settings list
> Change the primary color to teal and update the home page title
```

Under the hood, the skill follows a disciplined workflow:

1. **Workspace.** Ensures you have a FlutterFlow AI workspace (`flutterflow ai init`), bound either to a new app or to an existing project. If you're editing an existing project but don't have its ID handy, Claude lists your account's projects and asks which one to use.
2. **Orient.** Reads the project before changing it, using commands like `status`, `inspect`, `resources`, and `search`.
3. **Author → validate → apply.** Writes changes as declarative Dart files, checks them with `flutterflow ai validate` first, and only then applies them with `flutterflow ai run`.

Each applied change lands as a commit in your FlutterFlow project. Open the project in the visual builder to verify the result, then keep refining — visually or with follow-up prompts.

:::note[MCP server approval]
Workspaces created by `flutterflow ai init` also register the FlutterFlow AI MCP server with Claude Code via a project-scoped `.mcp.json`. If Claude Code asks to approve a new MCP server named `flutterflow_ai` when you open a session in the workspace, approve it — the build skill and the MCP server drive the same project state. See [Build with AI Agents](./flutterflow-mcp.md#launch-your-agent) for details.
:::

:::tip[Everything works from the terminal too]
The plugin drives the standard `flutterflow ai` CLI, so the same commands work in any terminal — for example `flutterflow ai init my-app`, `flutterflow ai status`, `flutterflow ai validate`, and `flutterflow ai run`. See the [MCP tools reference](./flutterflow-mcp.md#mcp-tools) for the full command list.
:::

## Managing Your API Key

**Rotate the key.** Create a new API key on your [account page](https://app.flutterflow.io/account), copy it, and tell Claude *"I copied my FlutterFlow API key"* again — the stored key is replaced and used for subsequent commands.

**Remove the key entirely.** Delete the stored key file and clear the CLI's cached credentials:

```bash
rm -f ~/.config/flutterflow/claude-env.sh
flutterflow ai logout --all
```

**If a key ever appears in the chat**, treat it as compromised: delete it on your [account page](https://app.flutterflow.io/account) and create a new one.

## Troubleshooting

<details>
<summary>The CLI installed, but the flutterflow command isn't found</summary>
<p>
The CLI installs to Dart's pub-cache, which may not be on your PATH. Add it to your shell profile and restart the session:

```bash
echo 'export PATH="$HOME/.pub-cache/bin:$PATH"' >> ~/.zshrc
```
</p>
</details>

<details>
<summary>The CLI didn't install because Dart is missing</summary>
<p>
The FlutterFlow CLI requires the Dart SDK, which ships with Flutter. Install <a href="https://docs.flutter.dev/get-started/install">Flutter</a> (recommended) or <a href="https://dart.dev/get-dart">Dart on its own</a>, then start a new Claude Code session — the plugin retries the install automatically.
</p>
</details>

<details>
<summary>Nothing happens on session start (Windows)</summary>
<p>
The plugin's automatic setup runs as a bash script, so it needs a bash on your PATH — install Git Bash or WSL. Alternatively, install the CLI manually with <code>dart pub global activate flutterflow_cli</code> and let <code>flutterflow ai</code> prompt for your API key the first time you run it.
</p>
</details>

<details>
<summary>FlutterFlow rejected my API key (401 error)</summary>
<p>
The key is invalid or was revoked. Copy a fresh key from your <a href="https://app.flutterflow.io/account">account page</a> and tell Claude <strong>"I copied my FlutterFlow API key"</strong> — don't paste the key into the chat.
</p>
</details>
