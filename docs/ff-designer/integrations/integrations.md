---
slug: /integrations
title: Integrations
description: Connect FlutterFlow Designer with AI agents and developer tools to generate, edit, and update designs using natural language from your preferred environment.
tags: [Integrations, FlutterFlow Designer, FlutterFlow, Design]
sidebar_position: 0
keywords: [integrations, flutterflow designer, ai app design]
---

# Integrations

You can connect FlutterFlow Designer with external AI agents and developer tools. This enables you to generate, edit, and inspect designs directly from your preferred coding or AI environment instead of working only inside the Designer UI.

For example, you can use an agent like Claude or Gemini to open your design, make layout changes, add components, or iterate on styles just by describing what you want in natural language.

:::info[Prerequisites]

Before using integrations, make sure the following are set up:

- [**FlutterFlow Designer Desktop App**](https://storage.googleapis.com/flutterflow-downloads/designer/macos/prod/flutterflow-designer-latest-macos.dmg) is installed (currently available only on macOS)
- **Agent MCPs** are installed via CLI. The install commands are:
    - **Claude Code:** `npm install -g @anthropic-ai/claude-code`
    - **Gemini CLI:** `npm install -g @google/gemini-cli`
    - **Codex CLI:** `npm install -g @openai/codex`
- Supported **IDEs** are installed on your system. To download, use the official links:
    - **Cursor:** [https://cursor.com/download](https://cursor.com/download)
    - **Antigravity:** [https://antigravity.google/download](https://cursor.com/download)
:::

To add integrations, go to the **Integrations** section inside FlutterFlow Designer. Here you will see available integrations under **Agent MCPs** (such as Claude Code, Gemini CLI) and **IDEs** (such as Cursor, Antigravity). Click **Install** next to any integration you want to use.

Once installed, open the respective tool (for example, Claude Code). Start by asking something:

```
Open FlutterFlow Designer tool, I want to make some changes.
```

After the Designer context loads, describe the change you want. For example:

```
Update the booking card layout to have a larger image and add a status badge.
```

The agent will connect to your Designer canvas, understand your project structure, and apply the requested changes directly. This allows you to iterate on designs faster without manually navigating the UI.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/wCdp0Edg8MkH5Nylflsn?embed&show_copy_link=true"
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

:::tip
For IDE-based integrations, you can interact via **Agent Mode** inside the IDE.
:::
