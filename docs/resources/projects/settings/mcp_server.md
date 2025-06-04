---
slug: mcp-server
title: MCP Server
tags: [MCP, Projects]
keywords: [projects, mcp, mcp server, refactor code]
sidebar_position: 4
---

# MCP Server

The **FlutterFlow MCP Server** allows you to integrate FlutterFlow projects with AI-powered development environments through the [Model Context Protocol (MCP)](https://www.anthropic.com/news/model-context-protocol). It provides access to structured project data (i.e., your FlutterFlow project’s YAMLs), which can be used by IDEs like Cursor IDE or Windsurf for tasks such as creating new pages, modifying components, and automating workflows.

:::warning

The FlutterFlow MCP Server is currently in an Experimental phase.

:::

:::tip[Possibe Use Cases]

- **AI Pair Programming** – Ask the AI Agent to “turn the recurring *Product Card* widget into a reusable component and swap every direct instance for that component throughout the project.” MCP then performs the refactor, and humans can review and approve the changes (diffs) directly within the AI editor.
- **Page and Component Generation** – Feed a list of Figma frames or YAML templates to an agent that calls MCP to scaffold pages and components with pre-wired actions and data models.
- **Enterprise YAML Tooling** – Large organizations parse the `.yaml` files produced by MCP to run custom lint rules, security scans, or internal code-gen, then push patches back through MCP for a safe round-trip.
:::

## Configure MCP Server

:::info[Prerequisites]

Before setting up the FlutterFlow MCP Server, ensure you have the following:

- **MCP-Compatible IDE**: Install an AI-powered code editor that supports MCP integration, such as:
    - [**Cursor IDE**](https://www.cursor.so/)
    - [**Windsurf**](https://windsurf.ai/)
    - [**Claude Desktop**](https://claude.ai/download)
- **FlutterFlow MCP Server Executable**: [Download the `server.exe` file](../../../../static/files/server.exe). This executable is essential, as it acts as an intermediary, enabling communication between your IDE and FlutterFlow project, allowing the AI assistant to read, write, and modify project data.
- **Project Rules File**: [Download the `flutterflow-project-rules.mdc` file](../../../../static/files/flutterflow-project-rules.mdc). This file is essential for the AI agent to understand how to interact with your FlutterFlow project via MCP. 
- **API Key**: Obtain your FlutterFlow API key from the [**Account Dashboard**](../../../accounts-billing/account-management.md#how-do-i-generate-an-api-token).

:::

**Step 1: Set Execution Permissions (macOS/Linux)**

If you're on macOS or Linux, you need to make the `server.exe` file executable with the following command in the Terminal.

```jsx
chmod +x /Users/yourusername/Dev/flutterflow-mcp/server.exe
```

Replace the path `/Users/yourusername/Dev/flutterflow-mcp/server.exe` with the actual location where your `server.exe` file is downloaded.

**Step 2: Update MCP Configuration File**

For this tutorial, we are going to use **Cursor IDE**. Here are the steps to update the MCP configuration file:

1. If you are on **Mac**, navigate to **Cursor > Settings > Cursor Settings > MCP**. For **Windows**, navigate to **Files > Preferences > Cursor Settings > MCP**. Alternatively, you can use the shortcut `Cmd + Shift + J` (macOS) or `Ctrl + Shift + J` (Windows/Linux) to open Cursor Settings.
2. Click on `+ Add New MCP Server`.
3. Configure the server with the following JSON structure:
    
    ```jsx
    {
      "mcpServers": {
        "flutterflow": {
          "type": "stdio",
          "command": "/Users/yourusername/Dev/flutterflow-mcp/server.exe",
          "args": [
            "--dir",
            "/Users/yourusername/Dev/flutterflow-mcp/my_project",
            "--api-key",
            "<YOUR_API_KEY>"
          ]
        }
      }
    }
    ```
    
    In the code snippet above, replace the followings:
    
    - `/Users/yourusername/Dev/flutterflow-mcp/server.exe` with the actual path to your `server.exe` file.
    - `/Users/yourusername/Dev/flutterflow-mcp/my_project` with the path where you want to download the project to make updates.
    - `<YOUR_API_KEY>` with your actual FlutterFlow API key.

:::tip[For macOS Users]

- **Executable Files**: Although `server.exe` is a Windows executable, you can still use it on macOS for configuring the MCP server. In fact, you don’t need to run the file at all; just save it in a directory and reference its path in your configuration.
- **Gatekeeper Bypass**: if macOS blocks the execution of the file due to its security settings and you encounter errors like `"server.exe" cannot be opened because the Apple could not verify "server.exe" is free of malware..."` , you may need to bypass macOS Gatekeeper. Here’s how you do it:
    1. Open **System Settings > Privacy & Security > Security**.
    2. You should see a message about `server.exe` being blocked. Click `Allow Anyway` or `Open Anyway`.
    
    ![unblock-server-file.avif](imgs/unblock-server-file.avif)
    
    3. Alternatively, you can run the following command in the terminal:
        
        ```jsx
        xattr -d com.apple.quarantine /Users/yourusername/Dev/flutterflow-mcp/server.exe
        ```
        

:::


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/STxBkKr0I0FJlMSGP0AF?embed&show_copy_link=true"
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

**Step 3: Add Project Rules**

Project rules for MCP are stored in the `.cursor/rules/` directory within your project. Each rule is a `.mdc` file (Markdown with YAML front matter) that defines context-specific instructions for the MCP server. For FlutterFlow, `flutterflow-project-rules.mdc` file provides the rules and tool definitions needed to interact correctly with your project.

To add the rule file:

1. Open the Cursor IDE and navigate to the project directory where your FlutterFlow project is located (e.g., `/Users/yourusername/Dev/flutterflow-mcp/my_project`).
3. Use the shortcut `Cmd + Shift + J` (macOS) or `Ctrl + Shift + J` (Windows/Linux) to open **Cursor Settings**.
4. Go to the **Rules** tab and click **+ Add new rule** and name the rule file as `flutterflow-project-rules`.
6. After the file is created, replace it with the version you previously downloaded.
7. Ensure you set the **Rule Type** to **Always** when adding or editing the rule in Cursor IDE. This ensures the rule is always active and recognized by the AI agent.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/9CxgCIDRm6DqNi8ube2t?embed&show_copy_link=true"
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

:::info

The `flutterflow-project-rules.mdc` file is crucial for the AI agent to understand the structure and components of your FlutterFlow project. Without this file, the AI may not function correctly within the MCP framework.

:::

## Use MCP

Once your MCP server is configured, follow these steps to interact with your FlutterFlow project:

1. **Download the Project**: Open the chat interface within Cursor IDE and start by downloading your FlutterFlow project using the following command in the chat.
    
    ```jsx
    download project [project-id]
    ```
    

    Replace `[project-id]` with your actual FlutterFlow project ID.

2. **Interact with Your Project**: Use natural language prompts to instruct the AI to modify your FlutterFlow project. For example:
    - "Add a login page with email and password fields."
    - “Change the color scheme of the ‘Dashboard’ page to match the ‘Products’ page.”
3. **Apply Changes**: The AI will process your request but, you need to apply changes to the project files and run tool whenever it is required.
4. **Sync with FlutterFlow App**: To see the changes reflected in the FlutterFlow app:
    - The agent typically updates the project automatically.
    - If changes are not visible, prompt the agent with: "Please update the project."

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/wujfeLC4gK48yN0NXuNR?embed&show_copy_link=true"
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