---
slug: /integrations
title: Integrations
description: Connect FlutterFlow Designer with AI agents and developer tools to generate, edit, and update designs using natural language from your preferred environment.
tags: [AI Agent, MCP, FlutterFlow Designer]
sidebar_position: 0
keywords: [ai agent, mcp, integrations, flutterflow designer, ai app design]
---

# Integrations

You can connect FlutterFlow Designer with external AI agents and developer tools. This enables you to generate, edit, and inspect designs directly from your preferred AI environment instead of working only inside the Designer UI.

For example, you can use an agent like Claude or Codex to open your design, make layout changes, add components, or iterate on styles just by describing what you want in natural language.

:::info[Prerequisites]

Before using integrations, make sure the following are set up:

- [**FlutterFlow Designer Desktop App**](https://storage.googleapis.com/flutterflow-downloads/designer/macos/prod/flutterflow-designer-latest-macos.dmg) is installed (currently available only on macOS)
- **Agent MCPs** are installed via CLI. The install commands are:
    - **Claude Code:** `npm install -g @anthropic-ai/claude-code`
    - **Gemini CLI:** `npm install -g @google/gemini-cli`
    - **Codex CLI:** `npm install -g @openai/codex`
- Supported **IDEs** are installed on your system. To download, use the official links:
    - **Cursor:** https://cursor.com/download
    - **Antigravity:** [https://antigravity.google/download](https://cursor.com/download)
:::

## Installation

To add integrations, go to the **Integrations** section inside FlutterFlow Designer. Here you will see available integrations under **Agent MCPs** (such as Claude Code, Gemini CLI, and Codex) and **IDEs** (such as Cursor, Antigravity). Click **Install** next to any integration you want to use.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/bqLiI2baEv7gksJob02J?embed&show_copy_link=true"
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

## Launch Agent

To launch an agent and update the design:

1. Open your design project and click the agent menu option in the top-right side.
2. Choose where you want to open the project, such as **Open in Claude Code**, **Open in Gemini CLI**, **Open in Cursor**, or **Open in Antigravity**.
3. Once the terminal opens, describe the change you want to make. For example, ask the agent to create more variations of a selected screen or modify the current design.
4. When the agent asks for permission to run a Designer MCP tool, approve the request so it can inspect and update the project.
5. Wait for the agent to complete the task. It will create or update frames inside your current design project.
6. Return to FF Designer and review the generated frames or changes.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/eOAIy1Hup8TfUJO4QIDp?embed&show_copy_link=true"
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


## MCP Calls

MCP Calls let an AI assistant work directly with your current FF Designer project. It can read, edit, create screens, update UI, manage components, adjust themes, and export designs.

There are two main calls:

- `create_session`: Connects the assistant to your open project and returns a session ID with available tools. Must be called first.
- `call_design_script`: Executes actions like editing screens, creating layouts, updating content, or exporting designs.

Using MCP Calls, an assistant can work with:

- **Designs**: Create, open, rename, or export projects
- **Frames (Screens)**: Create, duplicate, edit, or organize screens
- **Nodes (Elements)**: Update text, colors, images, layout, and structure
- **Components**: Create reusable UI, edit once and update everywhere
- **Theme**: Control colors, typography, spacing, and styles
- **Images & Assets**: Upload, replace, generate, and manage media
- **Captures**: Take screenshots of screens or elements
- **Selection**: Work on currently selected items
- **History**: Undo, redo, and review changes

The assistant operates directly on your design, making it easy to iterate quickly and visually.