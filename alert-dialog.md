---
title: Alert Dialog
slug: /concepts/alerts-notification/alert-dialog
sidebar_position: 0
tags: [Actions, Alerts & Notifications]
keywords: [FlutterFlow, Actions, Alerts & Notifications, Alert Dialog]
---

# Alert Dialog

The action allows you to alert the user of important situations that require acknowledgment in the form of a pop-up or custom-designed dialog. With this feature, you can choose to display a pre-built pop-up or create a custom design that suits your specific requirements.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/i3HbwgcbqbLyJQPRjr8a?embed&show_copy_link=true"
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

### Types of Alert Dialog

We allow you to define two types of Alert Dialog Actions:

- **Informational Dialog:** To show some information the user should be aware of before interacting with the app. Contains only a single action button.
- **Confirm Dialog:** This dialog can contain two action buttons. It can trigger the subsequent action based on whether a user confirms the action. It can also be used before performing any non-revertable user action, for example, before deleting a user account.
- **Custom Dialog**: This is a fully customizable dialog that you can create using [components](../../resources/ui/components/intro-components.md).

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
        src="https://demo.arcade.software/99GFeVxk2dvIX7kFatOP?embed&show_copy_link=true"
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

### Adding Confirm Dialog [Action]

Follow the steps below to add this type of action to any widget:

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
    1. Click on the **+ Add Action**.
    2. On the right side, search and select **Alert Dialog**.
    3. Set the **Alert Dialog Type** to **Confirm Dialog**.
    4. Provide the **Title** and **Message** for the dialog. Note: You can also set it from a variable; for example, a combined text with a value from a variable.
    5. Now, enter a **Dismiss Text** (shown on the action button that will cancel the Action) and a **Confirm Text** (shown on the action button that will trigger the Action that you will define in the next step).
    6. Now, click on the **+** button and select **Add Conditional**.
    7. On the right side (**Set Condition for Action**), set the **Source** to **Confirm Dialog Response**.
        1. Under the **TRUE** section, add an action that will be triggered if a user gives confirmation.
        2. Under the **FALSE** section, add an action that will be triggered if a user cancels this dialog.
3. Click **Close**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/zlP2hl64nrid2ODbN8wb?embed&show_copy_link=true"
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

### Adding Custom Dialog [Action]

Before you add this action, ensure you [create a component](../../resources/ui/components/creating-components.md) that you want to display as a custom dialog. Now follow the steps below to add this type of action to any widget:

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **+ Add Action**.
3. Search and select the **Alert Dialog** (under *Alerts/Notifications*) action.
4. Set the **Alert Dialog Type** to **Custom Dialog** and **Select Component**.
5. It is recommended to set the appropriate **Width** and **Height** for the custom dialog.
6. Optionally, you can set the **Background** and **Barrier Color** for this dialog.
    
    ![Setting background color and barrier color](imgs/custom-dialog.avif)
    
7. By default, this type of action blocks the following action (if any) from triggering while this action is in progress, meaning the dialog is present on the screen. However, in some cases, you might want to allow the next action (after this) to execute, for example, making an API call immediately after showing the custom loading dialog. To do so, enable **Non Blocking** option.
8. By default, **Non Dismissble** option closes the dialog when you click outside of it. To disable this behavior, enable this option.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/F5SinThEDKDwc337AM60?embed&show_copy_link=true"
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
    
9. By default, the custom dialog appears in the center of the screen. However, you can use the **Dialog Alignment** property to decide where to position the dialog on the screen.
    
    ![Align custom dialog](imgs/align-custom-dialog.avif)
    
10. To position the dialog around the widget that opened it, enable the **Align with the Target Widget**, and then align using the **Target Alignment** property. **Tip**: If dialog goes out of the screen, enable **Avoid Overflow**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DwufbH1LAEpjw1dBSRYX?embed&show_copy_link=true"
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