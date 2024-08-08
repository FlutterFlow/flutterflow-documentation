---
title: Haptic Feedback
slug: /concepts/alerts-notification/haptic-feedback
sidebar_position: 4
tags: [Actions, Alerts & Notifications]
keywords: [FlutterFlow, Actions, Alerts & Notifications, Haptic Feedback]
---
# Haptic Feedback
Using this action, you can vibrate the user's device. Typically this is used to draw users' attention to the action they have performed. For example, vibrating the user's device on setting the alarm.

## Types of Haptic Feedback

Depending on the action a user has performed (e.g., bookmark an item, on-off flashlight), you can set the different vibration intensity and duration types.

Here are the types of haptic feedback:

1. **Light**: This creates a very low-intensity vibration similar to pressing a virtual on-screen key.
2. **Medium**: This creates a medium-intensity vibration similar to pressing a key on a keyboard.
3. **Heavy**: This creates a high-intensity vibration similar to clicking an item.
4. **Selection Click**: This vibrates the device when selection changes through discrete values. Similar to changing hours and minutes on the clock app.
5. **Vibrate**: This creates a vibration for a short duration.

:::warning
- The *Light*, *Medium*, *Heavy*, and *Selection Click*, these types of haptic feedback only work on iOS version 10 and above.
- The *Selection Click* type only works on Android API levels 23 and above.
:::

## Adding Haptic Feedback [Action]

Go to your project page on FlutterFlow and follow the steps below to define the Action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the Properties panel (the right menu), and click **+ Add Action**.
3. Search and select the **Haptic Feedback** (under *Alerts/Notifications*) action.
4. Set the **Feedback Type** among the **Light**, **Medium**, **Heavy**, **Selection Click**, and **Vibrate**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/MfWI3yPIBv4WmHTl99Iq?embed&show_copy_link=true"
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