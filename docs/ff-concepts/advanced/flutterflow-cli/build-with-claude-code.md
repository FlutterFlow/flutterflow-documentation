---
slug: /flutterflow-cli/claude-code
title: Claude Code Plugin
description: Use the FlutterFlow plugin in the Claude Code terminal or desktop app to build and edit FlutterFlow apps with AI — automatic CLI install, secure API key setup, and a guided build workflow.
tags: [CLI, AI, Claude Code]
sidebar_position: 5
keywords: [Claude Code, Plugin, CLI, Desktop App, Agentic AI, FlutterFlow AI, FlutterFlow Plugin]
---

# Claude Code Plugin

The **FlutterFlow plugin for [Claude Code](https://www.claude.com/product/claude-code)** packages FlutterFlow's agentic building experience as a Claude Code plugin, and works in both the **Claude Code terminal (CLI)** and the **Claude Code desktop app**. Once installed, it:

- **Installs the FlutterFlow CLI automatically** when a session starts — and if the Dart SDK is missing, points you to the installer instead of failing.
- **Stores your API key securely** — read once from your clipboard, so the key never appears in the chat.
- **Adds a guided build skill** (`/flutterflow:build`) that sets up a workspace, then follows an orient → validate → apply workflow for every change.

The plugin drives the same [FlutterFlow CLI](https://pub.dev/packages/flutterflow_cli) described in [Build with AI Agents](./flutterflow-mcp.md). If you use a different agent (such as Gemini CLI or Codex), or prefer to install the CLI and configure the MCP server yourself, follow that page instead — both paths produce the same result.

<div style={{border: '2px dashed var(--ifm-color-emphasis-400)', borderRadius: '8px', padding: '1rem', margin: '1rem 0', background: 'var(--ifm-color-emphasis-100)'}}>
📸 <strong>Image placeholder — hero.</strong> Side-by-side screenshot: a Claude Code session (terminal or desktop app) that has just applied a change with <code>flutterflow ai run</code> on the left, and the same app open in the FlutterFlow visual builder on the right — showing the plugin editing a real FlutterFlow project. Format: <code>.avif</code> in this folder's <code>imgs/</code>, mirroring the hero on the Build with AI Agents page.
</div>

:::info[Prerequisites]

Before you start, make sure you have:

- **Claude Code** installed and signed in — the terminal CLI, the desktop app, or both. Get them from [claude.com](https://www.claude.com/product/claude-code).
- **Git**, which Claude Code uses to install the plugin.
- **Dart**, bundled with [Flutter](https://docs.flutter.dev/get-started/install) — required by the FlutterFlow CLI. If it's missing, the plugin detects it and links you to the installer.
:::

:::note[Platform support]
macOS and Linux work out of the box. On **Windows**, the plugin's automatic setup requires a `bash` on your PATH (from Git Bash or WSL); without one, install the CLI manually (see [Installation](./overview.md)) and let `flutterflow ai` prompt for your API key — the CLI itself supports Windows end-to-end.
:::

## Choose Your Claude Code Surface

The plugin behaves the same in the Claude Code terminal and the Claude Code desktop app — the FlutterFlow workflow after installation is identical. Only plugin installation and session startup differ. Both surfaces read the same Claude Code configuration, so installing the plugin once makes it available in both.

### Claude Code Terminal (CLI)

Use this path when you run `claude` from a terminal.

1. Install the plugin with two slash commands inside a Claude Code session:

   ```
   /plugin marketplace add FlutterFlow/flutterflow-claude
   /plugin install flutterflow@flutterflow
   ```

   Or run the equivalent commands from your shell:

   ```bash
   claude plugin marketplace add FlutterFlow/flutterflow-claude
   claude plugin install flutterflow@flutterflow
   ```

2. Start a new session from the folder where you want to work — an existing FlutterFlow AI workspace, or the parent folder where a new one should be created:

   ```bash
   cd /path/to/your/projects
   claude
   ```

3. Describe the FlutterFlow outcome you want at the prompt.

If Claude Code was already running when you installed the plugin, start a new session so the build skill and automatic setup load.

:::note
`FlutterFlow/flutterflow-claude` is the GitHub repository the plugin installs from; `flutterflow` after the `@` is the marketplace name.
:::

<div style={{border: '2px dashed var(--ifm-color-emphasis-400)', borderRadius: '8px', padding: '1rem', margin: '1rem 0', background: 'var(--ifm-color-emphasis-100)'}}>
📸 <strong>Image placeholder — terminal install.</strong> Screenshot of a Claude Code terminal session after running the two <code>/plugin</code> commands, showing the marketplace added and the confirmation that the <code>flutterflow</code> plugin is installed and enabled.
</div>

### Claude Code Desktop App

Use this path when you work in the [Claude Code desktop app](https://www.claude.com/product/claude-code) on macOS or Windows. Installation happens entirely in the app — no terminal commands required.

1. In the **Code** tab, start a new session: choose **Local** as the environment, click **Select folder**, and pick the folder where you want to work — an existing FlutterFlow AI workspace, or the parent folder where a new one should be created.

2. Click the **+** button next to the prompt box and select **Plugins**, then **Add plugin**. This opens the plugin browser — find the **FlutterFlow** plugin and install it. (**Manage plugins** in the same menu lets you enable, disable, or uninstall it later.)

3. Start a new session so the plugin's automatic setup runs, then describe the FlutterFlow outcome you want in the prompt box.

<div style={{border: '2px dashed var(--ifm-color-emphasis-400)', borderRadius: '8px', padding: '1rem', margin: '1rem 0', background: 'var(--ifm-color-emphasis-100)'}}>
🎬 <strong>Arcade placeholder — desktop app install.</strong> Arcade walkthrough of the desktop flow: Code tab → new session with <strong>Local</strong> environment and <strong>Select folder</strong> → the <strong>+</strong> button next to the prompt box → <strong>Plugins</strong> → <strong>Add plugin</strong> → finding and installing the FlutterFlow plugin in the plugin browser → starting a new session.
</div>

:::note[Desktop app specifics]

- Plugins are available in the desktop app's **Local** and **SSH** sessions — not in cloud or WSL sessions.
- The desktop app reads your `PATH` when it launches. If Dart or the FlutterFlow CLI was installed while the app was open and a session can't find them, quit and reopen the app.
:::

## Set Up Your API Key

The plugin authenticates with your FlutterFlow API key, and key setup works the same on both surfaces. Until a key is configured, the plugin prints a reminder when a session starts:

```
[flutterflow] No FlutterFlow API key configured.
[flutterflow]   1) Copy an API key from https://app.flutterflow.io/account
[flutterflow]   2) Come back and tell Claude: "I copied my FlutterFlow API key"
```

**Never paste the API key into the chat** — conversations are logged and retained. Instead, hand the key over through your clipboard:

1. Open your [FlutterFlow account page](https://app.flutterflow.io/account) and copy your API key. If you don't have one yet, see [generating an API token](../../../accounts-billing/account-management.md#how-do-i-generate-an-api-token).
2. Come back to Claude Code and say: **"I copied my FlutterFlow API key"**.

Claude runs a script bundled with the plugin that reads the clipboard once, validates the key, stores it in `~/.config/flutterflow/claude-env.sh` with owner-only permissions, and clears the clipboard. The key itself never enters the conversation. If validation fails — for example, you copied something else in the meantime — Claude asks you to copy the key again and retry.

<div style={{border: '2px dashed var(--ifm-color-emphasis-400)', borderRadius: '8px', padding: '1rem', margin: '1rem 0', background: 'var(--ifm-color-emphasis-100)'}}>
🎬 <strong>Arcade placeholder — API key hand-off.</strong> Recording of the key setup end to end: copying the API key on the FlutterFlow account page, telling Claude "I copied my FlutterFlow API key", and Claude's confirmation showing <code>key: STORED (clipboard cleared)</code>. Record with a throwaway key and revoke it afterward — the key value itself must never be visible at any point in the recording.
</div>

:::warning[Clipboard history managers]
Tools like Raycast, Alfred, Windows clipboard history (Win + V), and Apple's Universal Clipboard keep their own copy of everything you copy, even after the system clipboard is cleared. If you use one, purge the key from its history after setup.
:::

Working over **SSH or in a headless environment**? The clipboard hand-off isn't available there, so Claude offers a one-line terminal command that prompts for the key with hidden input. Alternatively, run `flutterflow ai` in your own terminal and let its setup wizard prompt for the key.

:::note
Avoid entering the key through `/plugin configure` for now — its input dialog has known issues in current Claude Code versions ([#73530](https://github.com/anthropics/claude-code/issues/73530), [#62442](https://github.com/anthropics/claude-code/issues/62442)). The clipboard hand-off above is the recommended path.
:::

## Build with FlutterFlow

Start a new Claude Code session in your working folder — `claude` in the terminal, or a **Local** session in the desktop app. On the first session after setup, the plugin installs the FlutterFlow CLI automatically — you'll see a short notice while it works:

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

<div style={{border: '2px dashed var(--ifm-color-emphasis-400)', borderRadius: '8px', padding: '1rem', margin: '1rem 0', background: 'var(--ifm-color-emphasis-100)'}}>
🎬 <strong>Arcade placeholder — build workflow.</strong> Arcade of a full build: prompting Claude for a small app or page change, the skill creating the workspace and running <code>flutterflow ai validate</code> then <code>run</code>, and the finished result opened in the FlutterFlow visual builder.
</div>

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

## Update the Plugin

Plugin installs track the latest version of the FlutterFlow marketplace. To update, run this from a terminal (or `/plugin marketplace update flutterflow` inside a terminal session), then start a new session — the update applies to the terminal and the desktop app alike:

```bash
claude plugin marketplace update flutterflow
```

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
<summary>The desktop app can't find the dart or flutterflow command</summary>
<p>
The desktop app reads your PATH once, when it launches. If Dart or the FlutterFlow CLI was installed while the app was open, quit and reopen the desktop app. On macOS, make sure your shell profile (for example <code>~/.zshrc</code>) exports the path; on Windows, add it to your user PATH.
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
