---
title: Alert Dialog
slug: /concepts/alerts/alert-dialog
sidebar_position: 0
tags:
  - FlutterFlow
  - Concepts
keywords:
  - FlutterFlow
  - Actions
  - Alerts & Notifications
  - Alert Dialog
description: >-
  Learn how to show informational, confirmation, and custom dialogs in
  FlutterFlow, return a result, and control dismissal and positioning.
last_verified: 2026-09-01
---
# Alert Dialog

Use the **Alert Dialog** action to pause an action flow and show an informational, confirmation, or custom dialog. Informational and confirmation dialogs use FlutterFlow's built-in layout. A custom dialog displays one of your components and can return a value to the action flow that opened it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/i3HbwgcbqbLyJQPRjr8a?embed&show_copy_link=true" title="Alert Dialog interactive tutorial"
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

### Types of Alert Dialog

FlutterFlow provides three alert dialog types:

- **Informational Dialog:** To show some information the user should be aware of before interacting with the app. Contains only a single action button.
- **Confirm Dialog:** Shows dismiss and confirm buttons and produces a Boolean **Confirm Dialog Response** for a following conditional action. Use it before a consequential operation, such as deleting an account.
- **Custom Dialog:** Displays a reusable [component](../../resources/ui/components/intro-components.md). The component can dismiss itself and optionally return a typed value.

### Adding Informational Dialog [Action]

Follow the steps below to add this type of action to any widget:

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **+ Add Action**.
3. Search and select the **Alert Dialog** (under *Alerts/Notifications*) action.
4. Set the **Alert Dialog Type** to **Informational Dialog**.
5. Provide the **Title** and **Message** for the dialog. Note: You can also set it from a variable; for example, a combined text with a value from a variable.
6. Also, enter a **Dismiss Text** that will be shown on the action button.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/99GFeVxk2dvIX7kFatOP?embed&show_copy_link=true" title="Alert Dialog interactive tutorial"
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

### Adding Confirm Dialog [Action]

Follow the steps below to add this type of action to any widget:

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** in the Properties panel and open the **Action Flow Editor**.
3. Select **+ Add Action**, search for **Alert Dialog**, and choose **Confirm Dialog**.
4. Set the **Title**, **Message**, **Dismiss Text**, and **Confirm Text**. Text values can be set from variables.
5. Add a **Conditional** action immediately after the dialog.
6. Set the condition **Source** to **Confirm Dialog Response**.
7. Add confirmed actions under **TRUE** and canceled actions under **FALSE**. Closing the dialog without confirming also produces `false`.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/zlP2hl64nrid2ODbN8wb?embed&show_copy_link=true" title="Alert Dialog interactive tutorial"
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

### Adding Custom Dialog [Action]

Before you add this action, ensure you [create a component](../../resources/ui/components/creating-components.md) that you want to display as a custom dialog. Now follow the steps below to add this type of action to any widget:

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **+ Add Action**.
3. Search and select the **Alert Dialog** (under *Alerts/Notifications*) action.
4. Set **Alert Dialog Type** to **Custom Dialog**, then choose the component under **Display Component**. Supply any required component parameters.
5. Optionally set the dialog **Width** and **Height**. The displayed component controls its own background; **Barrier Color** controls the modal overlay behind it.

    ![Setting background color and barrier color](imgs/custom-dialog.avif)

6. Leave **Non-Blocking** off when later actions must wait for the dialog to close or read its returned value. Enable it only when the action flow should continue immediately after opening the dialog, such as when displaying a loading component while another action starts.
7. By default, tapping the barrier outside the component dismisses the dialog. Enable **Non Dismissible** to prevent dismissal by a barrier tap. This setting does not add a close control; add a button with the [Dismiss Custom Dialog](dismiss-custom-dialog.md) action when the user needs an explicit way to close it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/F5SinThEDKDwc337AM60?embed&show_copy_link=true" title="Alert Dialog interactive tutorial"
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

8. Use **Dialog Alignment** to position a global custom dialog within the screen. Its default alignment is centered.

    ![Align custom dialog](imgs/align-custom-dialog.avif)

9. To position the dialog relative to the widget that opened it, enable **Align with the Target Widget**, then combine **Target Alignment** with **Dialog Alignment**. Enable **Avoid Overflow** if the aligned dialog would extend beyond the screen.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/DwufbH1LAEpjw1dBSRYX?embed&show_copy_link=true" title="Alert Dialog interactive tutorial"
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

### Returning a value from a custom dialog

Add **Dismiss Custom Dialog** to a widget inside the displayed component and enable its **Has Value** option. FlutterFlow derives the custom dialog's output type from that dismiss action. Back on the opening **Custom Dialog** action, set **Action Output Variable Name** and use that output in later actions.

All value-returning dismiss actions in the same component must use the same type. Keep **Non-Blocking** off when the next action depends on the returned value. See [Dismiss Custom Dialog](dismiss-custom-dialog.md) for the complete workflow.
