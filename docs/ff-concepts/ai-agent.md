---
slug: /concepts/ai-agent
title: AI Agent
description: Use AI Agent from the FlutterFlow desktop app to set up supported agent CLI tools, connect them to your project, and build with natural-language prompts.
tags: [AI, AI Agent, Desktop App, FlutterFlow CLI]
sidebar_position: 11
keywords: [FlutterFlow, AI Agent, desktop app, Codex, Claude, FlutterFlow CLI, MCP, live sessions]
---

# AI Agent

AI Agent lets you work with AI coding agents directly from the FlutterFlow desktop app. Instead of manually opening a terminal, navigating to your project, and configuring command-line tools yourself, FlutterFlow checks the required setup and helps prepare the tools needed to work with your project.

After you choose an agent, FlutterFlow helps open the selected agent with the right project context. Depending on the agent and your setup, it may also install or verify the required CLI, initialize or reuse a local FlutterFlow AI workspace, register the FlutterFlow MCP server, and guide the agent through authentication. Once connected, you can describe the change you want, review the agent's plan, and apply updates to your project.

The agent works with your FlutterFlow project through the [FlutterFlow CLI](./advanced/flutterflow-cli/overview.md) and the same agent workflow described in [Build with AI Agents](./advanced/flutterflow-cli/flutterflow-mcp.md).


:::info[Desktop app only]
AI Agent is available only in the FlutterFlow desktop app. It is not available in browser-based FlutterFlow. To use AI Agent, download the [**FlutterFlow desktop app**](https://flutterflow.io/desktop).
:::

:::note[Different from in-app AI Agents]
This page is about using external AI coding agents to build and edit your FlutterFlow project. If you want to create AI-powered chat, text-to-speech, speech-to-text, image generation, or video generation experiences inside your app, see [**AI Agents**](../ff-integrations/ai/ai-agents.md).
:::

AI Agent is useful for project editing tasks such as:

- Creating or updating pages and components
- Adjusting widget properties, layout, styling, and responsiveness
- Wiring actions, action blocks, app state, and app events
- Updating theme values, design tokens, and navigation
- Reviewing project structure and finding issues
- Applying focused changes to a specific widget with Copy AI Selector

For more details about what agents can and cannot edit, see [Agent Edit Scope](./advanced/flutterflow-cli/flutterflow-mcp.md#agent-edit-scope).

## Prerequisites

Before using AI Agent, make sure you have:

- The [FlutterFlow desktop app](https://www.flutterflow.io/desktop) installed and signed in.
- Access to the provider account for the agent you want to use, such as a ChatGPT account for **Codex** or an Anthropic account for **Claude**.

## Set Up AI Agent

When you open AI Agent for the first time, FlutterFlow checks whether the required tools are ready for the selected agent.

:::info
You do not need to download a separate AI agent desktop app before getting started. The setup panel checks the required CLI tools for the selected agent and lets you install missing tools from FlutterFlow.
:::

To set up AI Agent:

1. Open your project in the **FlutterFlow desktop app**.
2. Select the **brain icon** in the toolbar.
3. In the **Set up your AI agent** panel, choose **Claude** or **Codex**.
4. Review the setup checklist. FlutterFlow checks the selected agent CLI, Flutter SDK, FlutterFlow CLI, local workspace, and sign-in status.
5. If any required CLI tools are missing, click **Install required tools**.
6. After installing tools or signing in, click **Re-check** to refresh the setup status.
7. When prompted, sign in with the account for the selected agent, such as your Anthropic account for Claude or your ChatGPT account for Codex.

The selected agent runs on your own account and follows that account's usage and limits. Your conversations stay on your Mac, run through the local coding CLI, and are stored only on your machine. FlutterFlow does not receive or store them.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/iB9pUVMMLggNDnJmL0Hl?embed&show_copy_link=true"
        title=""
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

## Use AI Agent

After setup is complete:

1. Describe what you want the agent to do. For example, "Create a profile settings page," "Fix the login button action," or "Update this card to match the new design." 
2. Review the agent's proposed changes before applying them.
3. Verify the result visually.

:::tip
For targeted widget updates, right-click the widget in the builder and select [**Copy AI Selector**](./advanced/flutterflow-cli/flutterflow-mcp.md#copy-ai-selector). Paste the selector into your prompt so the agent can locate the exact widget you want to update.
:::


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/jJPRPlsUJoFKIj0nuQT4?embed&show_copy_link=true"
        title=""
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

## Settings

Select the **settings** icon in the AI Agent panel to manage how FlutterFlow connects to local agents, stores workspaces, and opens sessions.

- **Workspace location:** Shows where FlutterFlow creates local MCP workspaces on your Mac and displays the current workspace for the open project.
- **Claude:** Lets you sign in to Claude and review the permissions that control which tools Claude can run without asking each time. You can open the Claude permissions file from `~/.claude/settings.json`.
- **Codex:** Shows your signed-in ChatGPT account, plan, and current usage limits as reported by the Codex CLI. You can also log out from here.
- **Codex permissions:** Lets you review the permissions that control which tools Codex can run without asking each time. You can open the Codex permissions file from `~/.codex/config.toml`.
- **Terminal:** Selects which terminal app FlutterFlow uses when you choose **Open in terminal** to resume an agent session.
- **Recap:** Turns the conversation recap on or off. When enabled, FlutterFlow shows a one-line recap above the prompt after a few exchanges in a thread.
- **Troubleshooting:** Lets you download diagnostic logs for agent setup and chat sessions, including tool installs, workspace initialization, CLI launches, and errors. Conversations and personal data are not included in these logs.
- **Privacy:** Confirms that conversations are processed by the coding CLI on your Mac and stored locally. FlutterFlow does not receive or store them.


:::tip
If the setup status does not update after installing tools or signing in, click **Re-check**. If it still does not update, restart the FlutterFlow desktop app and open the AI Agent panel again.
:::


## Best Practices

- Be specific about the outcome you want, not just the widget you want changed.
- Use **Copy AI Selector** when multiple widgets look similar or when the target widget is deeply nested.
- Ask the agent to inspect the current project before making broad changes.
- Review changes in the visual builder before continuing with additional prompts.
- Keep [Live Sessions](./advanced/flutterflow-cli/flutterflow-mcp.md#live-sessions) running only while you are actively using them.
