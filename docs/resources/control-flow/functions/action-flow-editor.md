---
slug: /resources/functions/action-flow-editor
title: Actions
description: >-
  Learn how to use the Action Flow Editor in your FlutterFlow app to manage and
  streamline your backend logic.
tags:
  - FlutterFlow
  - Resources
  - Functions
toc_max_heading_level: 5
sidebar_position: 2
keywords:
  - Action Flow Editor
  - Actions
  - Backend Query
  - Backend Logic
  - Control Flow
  - FlutterFlow
last_verified: 2026-09-02
---
# Actions

Effectively managing user interactions is essential for developing interactive applications.
Designing interactivity involves two steps:

1. Listening for Interaction (**Action Triggers**)
2. Responding to Interaction (**Actions**)

**Action Triggers** represent a specific event, while **Actions** are functions executed in response to the
triggered event. Common triggers are:

- **On Tap:** Triggered when a user taps a supported widget.
- **On Selected:** Triggered when a value changes in a supported selection widget.
- **On Page Load:** Triggered when a page loads.

Actions are tasks or operations that are performed in response to an event detected by a trigger.

## Action Flow Editor

The Action Flow Editor is a visual, node-based editor used to configure the functions that run in
response to a trigger. This editor simplifies the process of creating and managing business logic.

![Action Flow Editor](img/actions.avif)

### Action Triggers

When you open the Action Flow Editor, no triggers are added by default. To add a trigger, simply search for and select the desired one from the available options. The Action Triggers bar, located at the left of the editor, displays all added triggers.

:::info
To learn more about **Action Triggers** and its types, refer [**here**](action-triggers.md).
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/2kuQfhvjyPnW8PvbsaUw?embed&show_copy_link=true" title="Actions interactive tutorial"
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

:::warning[Exposed by FlutterFlow]
Please note that Action Triggers are exposed by FlutterFlow and are not user-generated. You can
only work with the ones provided in the Action Flow Editor.
:::

Each trigger has its own separate node-editor, allowing you to create distinct logic flows for
different events. When you switch between triggers, the node-editor will update to display the logic
specific to the selected trigger.

<div className="arcade-container" style={{
    position: 'relative',
    paddingBottom: 'calc(55.670103092783506% + 41px)', // Preserves the original aspect ratio and padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/IazHon14tfvS4UljRsqu?embed&show_copy_link=true"
        title="Switching Triggers"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light',
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>


:::info
It's important to note that the logic defined in the node-editor is associated with the selected
trigger. This means that the actions you set up will only be executed when that particular trigger
is activated.
:::

### Node Editor

This central area of the editor is where you define and visualize the logic/actions that will
execute in response to the selected trigger. The actions are laid out in a flowchart-like manner,
making it easy to understand and modify the flow of actions.

Actions in an ordinary path execute sequentially. FlutterFlow waits for a blocking asynchronous action before starting the next action, so a named action output is available to later actions in that path.

:::tip[Synchronous vs Asynchronous]
**Synchronous actions** finish immediately in the current sequence. A blocking **asynchronous action** is awaited before the sequence continues. Enable **Non-Blocking** only when following actions do not depend on its output or side effects. Use **Parallel Actions** for independent branches that should start concurrently and rejoin after every branch completes.
:::

### Creating Action

Select the plus icon at the start of a flow or after an existing node to choose one of the available structures:

1. **Add Action**: Adds a single action node to the flow. Add more nodes to create a sequential path.

2. **Add Conditional Action**: Adds a conditional node with an input for a boolean expression and
   two action branches. The actions in each branch will be executed based on the evaluation of the
   boolean expression.
3. **Add Loop**: Adds either a **While Condition** loop or an **Over List** loop. Add a break node and a finite bound where needed.
4. **Add Parallel Action**: Adds independent branches that start concurrently. The flow after the parallel block waits for all branches.
5. **Paste Action(s)**: Allows you to paste actions previously copied to the clipboard.

After creating an action node, select and configure its action in the right panel. Rename outputs when a clear name will make later bindings easier to understand.

<div className="arcade-container" style={{
    position: 'relative',
    paddingBottom: 'calc(55.32786885245902% + 41px)', // Keeps the original aspect ratio and padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/I9valjo4KqgEs8qol2Wp?embed&show_copy_link=true"
        title="Create New Action"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light',
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### Right Panel

The Right Panel serves two main purposes:

1. **Selecting Actions**: Choose the specific actions you want to add to your action flow.
2. **Configuring Actions**: Configure the properties, parameters, and output names of the selected
   action.

<div className="arcade-container" style={{
    position: 'relative',
    paddingBottom: 'calc(55.441478439425055% + 41px)', // Maintains the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/oHXsShi0Kyo5hbOIYZL5?embed&show_copy_link=true"
        title="Arcade Flow (Fri May 10 2024)"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light',
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### Widget Binding

In the Action Flow Editor, the icon in the upper left corner indicates the widget to which the current action flow is bound.

![Widget Binding](img/widget-binding.avif)

:::info
If you rename your widget, the new name will automatically be updated and associated with this action flow. This makes it easier to keep track of the logic associated with each widget, ensuring clarity and better organization of your action flows.
:::

### Issues

The bug icon will display warnings and errors in any of the action flows bound to this widget. Note,
these are neither issues in the whole project nor issues in all of the action flow but *only* issues
generated from the action flows bound to *this* widget. This includes *all* the action flows on
*all* the triggers and not just currently visible action flow on the selected trigger.

![Issues](img/action-errors.avif)

### Action Blocks

The diamond icon in the Action Flow Editor opens a menu where you can create and edit Action Blocks.
**Action Blocks** are reusable action flows that can accept parameters and return values, promoting code
reusability and modularity.

![action-block.avif](img/action-block-icon.avif)

:::tip[Deep Dive on Action Blocks]
Learn more about different types of **[Action Blocks](action-blocks.md)** and their scopes.
:::

## Adding an Action [Example]

Here's a quick demo of how you can add an action or multiple sequential actions to a widget:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/pzHtQyaiPVeLC01vbgbs?embed&show_copy_link=true" title="Actions interactive tutorial"
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

## Verify an action flow

Run each trigger in **Test Mode** with success, empty, cancel, and error inputs. Confirm actions execute in the intended order, conditional branches are mutually correct, loops terminate, parallel branches are independent, and non-blocking actions do not supply values to immediate follow-up actions. Review the action-flow issue indicator before publishing.
