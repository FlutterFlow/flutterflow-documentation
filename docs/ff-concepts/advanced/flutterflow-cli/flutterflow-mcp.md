---
slug: /flutterflow-cli/build
title: Build with AI Agents
description: Create and edit FlutterFlow projects from your terminal using your preferred AI coding agent.
tags: [CLI, AI, MCP]
sidebar_position: 3
keywords: [CLI, Agentic AI, Projects, Local Management, MCP]
---

# Build with AI Agents

The FlutterFlow CLI lets you create and edit FlutterFlow apps from the terminal using your own AI coding agent — Claude Code, Gemini CLI, Codex, or any MCP-compatible client. You describe what you want in plain English, the agent plans and applies the changes, and the result lands as a real FlutterFlow project you can open in the visual builder.

A FlutterFlow project is the source of truth. The CLI is how you create or edit it from your local workspace.

![flutterflow-cli-ff-builder-using-same-ff-app](../imgs/flutterflow-ff-builder-using-same-ff-app.avif)

## Architecture

`flutterflow ai init` creates a local **workspace** - a folder pre-configured with an MCP config file pointing at the FlutterFlow MCP server. When you launch your AI agent inside that folder, it discovers the MCP server and gains a set of tools that talk to FlutterFlow's cloud:

1. You prompt the agent.
2. The agent plans changes and calls the MCP server's tools.
3. The MCP server applies those changes to your FlutterFlow project.
4. You verify the result in the FlutterFlow visual builder.

The workspace is just a folder on your disk. The actual project lives in FlutterFlow server.

:::tip[What is MCP?] 
The [**Model Context Protocol**](https://modelcontextprotocol.io) is an open standard that lets AI agents call external tools. The FlutterFlow AI MCP server exposes FlutterFlow's project APIs to your agent so it can read and modify your project on your behalf.
:::

:::info[Remember]
- **FlutterFlow CLI is not a replacement for the visual builder.** FlutterFlow is still faster for most visual work. FlutterFlow CLI is for precision, repeatability, and automation.
- **FlutterFlow CLI doesn't execute your app.** It produces a FlutterFlow project, which you can test and run inside the FlutterFlow visual builder.
:::

:::info[Prerequisites]

Before you start, make sure you have:

- **FlutterFlow CLI installed.** See [**Installation**](./overview.md).
- **A FlutterFlow API key.** See [**generating an API token**](../../../accounts-billing/account-management.md#how-do-i-generate-an-api-token).
- **An MCP-compatible AI agent installed locally** — for example, [**Claude Code**](https://www.claude.com/product/claude-code), [**Gemini CLI**](https://github.com/google-gemini/gemini-cli), or [**Codex**](https://github.com/openai/codex).
- **A FlutterFlow project ID** (only if you're editing an existing project).
::: 

## Setup Workspace

Open your terminal in the folder where you want the workspace to live, then run:

```bash
flutterflow ai init
```

This launches an interactive setup wizard. Walk through the prompts:

1. **Workspace name.** A short, lowercase name with no spaces. This becomes the folder name for your project.
   ```
   Workspace name
     Directory to scaffold the FlutterFlow AI workspace in.
   > mindfly
   ```
2. **Environment.** Use ↑ / ↓ to highlight the FlutterFlow environment you want this workspace to target, then press **Enter**.
3. **Link to an existing FlutterFlow project?** Press **Enter** (default `N`) to create a new app. Answer `y` to bind the workspace to an existing project — the wizard will then ask for the project ID.
   ```
   Link to an existing FlutterFlow project? [y/N]
   ```
4. **FlutterFlow API key.** Paste your API key and press **Enter**. Input is masked.
5. **Register MCP server with detected coding CLIs.** The wizard scans your `PATH` and offers to register the FlutterFlow AI MCP server with each agent it finds (Claude Code, Gemini CLI, Codex). Answer `Y` (default) for each one you plan to use.
   ```
   Register FlutterFlow AI MCP server with coding CLIs
     Detected: claude, gemini, codex
     Register with claude? [Y/n]
   ```
6. **Confirm.** The wizard prints a summary. Review it and press **Enter** (default `Y`) to proceed.
   ```
   Ready to create:
     Workspace:  mindfly
     Project ID: (none — unlinked)
     API key:    set (***abcd)
     Base URL:   https://api.flutterflow.io  (built-in for prod)
     MCP CLIs:   claude, gemini, codex

   Proceed? [Y/n]
   ```

When the wizard finishes, you'll have a workspace folder ready for your agent. Depending on which CLIs you registered, the folder will contain one or more of:

- `.mcp.json` — for Claude Code
- `.gemini/settings.json` — for Gemini CLI
- `.codex/config.toml` — for Codex

Each file points the corresponding agent at the FlutterFlow AI MCP server.

## Launch your Agent

Move into the workspace and start your agent. The example below uses Claude Code; the same pattern applies to any agent you registered in the wizard — `cd` into the workspace and launch the agent's CLI.

```bash
cd mindfly
claude
```

The first time the agent opens the workspace, it detects the new MCP server and asks you to approve it. The exact prompt varies by agent — Claude Code's looks like this:

```
New MCP server found in .mcp.json: flutterflow_ai

MCP servers may execute code or access system resources.
All tool calls require approval.

> 1. Use this and all future MCP servers in this project
  2. Use this MCP server
  3. Continue without using this MCP server
```

Choose **option 1** to approve the FlutterFlow AI MCP server (and any others added to this workspace later) without being asked again.

> **Why approve?** Without the MCP server, the agent can edit local files but can't push changes to your FlutterFlow project. With it approved, the agent has the same tools you'd run yourself from the CLI.

## Generate a New App

With the agent connected, describe the app you want at the prompt:

```
> create a minimalist meditation app
```

Phrase it however you like — `a recipe-sharing app with a social feed`, `a habit tracker with streaks`, `a tip calculator for restaurants`. The agent plans the app, generates the changes, pushes them to FlutterFlow through the MCP server, and reports back. Open FlutterFlow in your browser and navigate to the project — the generated app will be reflected in the visual builder. From there you can keep refining visually or send another prompt to the agent.

Once the app exists, the workspace is bound to it. Follow-up prompts in the same session are treated as edits, not new generations, you'll see the agent acknowledge the switch with something like:

```
The project is bound, so I'll switch to edit mode.
Let me check the workspace and read the edit template.
```

From that point on, the same rules apply as when [editing an existing project](#edit-an-existing-project) - concurrency, branches, scope, and refreshing context.

## Edit an Existing Project

:::info[Prerequisite]
Have your **project ID** ready. Open the project in the FlutterFlow editor. The project ID is the path segment after `/project/` in the URL.
:::

Editing an existing project follows the same flow as [creating a new one](#setup-workspace) — you run `flutterflow ai init` to scaffold a workspace, then drive changes from your agent. The only difference is one step in the wizard: when it asks **Link to an existing FlutterFlow project?**, answer `y` and paste your project ID:

```dart
Link to an existing FlutterFlow project? [y/N] y
Project ID
> my-meditation-app-x7k2p9
```

The workspace is now bound to that project. `cd` into the workspace folder, [launch your agent](#launch-your-agent), and describe the changes you want — "add a profile screen", "switch the primary color to teal", "wire up the login form to Firebase Auth". The agent reads the current project, plans the change, and pushes it through the MCP server. Open FlutterFlow in your browser to verify.

### Concurrent Edits with Builder

You can edit visually while an agent is working, but writes use **optimistic concurrency**: when the agent pushes, the server checks the project's last-modified timestamp against the agent's snapshot. If anyone else (you in the visual builder, a teammate, or another agent) modified the project in between, the push is rejected. The agent will re-read the latest state and retry — which may also mean re-planning, if your change conflicts with what it was about to do.

So nothing gets silently overwritten, but expect occasional retries when you and the agent are editing the same project at once.

## Branches and Rollback

:::warning[Agents commit to main]
Workspaces always target the project's **main branch**. There's no flag to point them at a feature branch. Every successful push creates a commit on main, so for high-stakes projects, work on a clone, make sure version history is enabled, or coordinate with your team before letting an agent run.
:::

To roll back, use FlutterFlow's project version history in the visual builder — the same mechanism you'd use for visual edits. Each agent push lands as a commit there with whatever commit message the agent supplied.

## Refreshing Stale Context

If you've made visual edits since the agent last read the project, the agent's local snapshot is stale. Two ways to fix it:

- **Ask the agent to refresh.** Most agents call the MCP `refreshContext` tool on their own when they detect drift, but you can prompt explicitly: "refresh the project context."
- **Run it from the CLI.** `flutterflow ai context-check` reports whether the local snapshot is behind, and `flutterflow ai refresh-context <project-id>` pulls the latest.

## Switching Projects

A workspace is bound to one project. To work on a different project, run `flutterflow ai init` in a **new** folder and link it to the new project ID. `init` refuses to run in a non-empty directory, so it won't re-bind an existing workspace.

## Agent edit scope

**In scope**

- Pages, components, app state, theme, navigation, action blocks, app events
- Custom functions, actions, widgets, classes, and enums
- API endpoints, queries, custom data types and enums
- Pub and library dependencies, design tokens, GenUI catalog, Firebase Auth wiring

**Out of scope**

- Anything outside the FlutterFlow project itself — running the app, deploying it, creating Firebase projects, managing secrets, App Store submissions.

## MCP server tools

Once approved, the FlutterFlow AI MCP server gives your agent the following tools.

**Core actions**

| Tool | What it does |
| --- | --- |
| `run` | Applies a planned set of changes to your FlutterFlow project. This is how edits get pushed. |
| `validate` | Dry-runs a change without pushing it, so the agent can catch errors before committing. |
| `inspect` | Reads project structure — either a whole-project summary or a scoped view. |
| `resources` | Lists reusable project and library resources (components, custom code, etc.). |
| `init` | Scaffolds a new FlutterFlow AI workspace. |

**Supporting**

`status`, `search`, `refreshContext`, `contextCheck`, `docs`, `history` — used by the agent for project metadata, searching, refreshing its context, looking up FlutterFlow documentation, and reviewing prior tool calls.

The agent calls these tools on your behalf based on your prompts. Every tool call is subject to your agent's approval rules.
