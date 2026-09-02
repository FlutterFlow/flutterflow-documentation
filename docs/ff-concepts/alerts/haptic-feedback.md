---
title: Haptic Feedback
slug: /concepts/alerts/haptic-feedback
sidebar_position: 4
tags:
  - FlutterFlow
  - Concepts
keywords:
  - FlutterFlow
  - Actions
  - Alerts & Notifications
  - Haptic Feedback
description: >-
  Add light, medium, heavy, selection, or vibration haptic feedback to a
  FlutterFlow action flow and understand platform and Preview Mode limits.
last_verified: 2026-09-01
---
# Haptic Feedback
Use the **Haptic Feedback** action to request tactile feedback from a user's device after an interaction, such as selecting an item or completing an important action. FlutterFlow generates calls to Flutter's `HapticFeedback` API; the exact sensation depends on the operating system, device hardware, and user settings.

## Types of Haptic Feedback

Choose the feedback type that communicates the meaning of the interaction:

| FlutterFlow option | Generated Flutter call | Intended use |
| --- | --- | --- |
| **Light** | `HapticFeedback.lightImpact()` | A light impact. |
| **Medium** | `HapticFeedback.mediumImpact()` | A medium impact. |
| **Heavy** | `HapticFeedback.heavyImpact()` | A heavy impact. |
| **Selection Click** | `HapticFeedback.selectionClick()` | Moving between discrete selections, such as picker values. |
| **Vibrate** | `HapticFeedback.vibrate()` | The platform's short, standard vibration. |

:::note Platform support
Flutter's impact and selection APIs have no effect on iOS versions below 10. Android maps each option to a platform haptic constant; **Heavy** has no effect below Android API 23. Other results can still vary by device and system settings. See Flutter's [HapticFeedback API](https://api.flutter.dev/flutter/services/HapticFeedback-class.html) for current platform mappings.
:::

## Adding Haptic Feedback [Action]

To add the action:

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the Properties panel (the right menu), and click **+ Add Action**.
3. Search and select the **Haptic Feedback** (under *Alerts/Notifications*) action.
4. Set the **Feedback Type** among the **Light**, **Medium**, **Heavy**, **Selection Click**, and **Vibrate**.

Haptic feedback does not run in FlutterFlow Preview Mode; the editor displays a warning instead. Test the behavior on the target platform and, preferably, a physical device. Do not use haptics as the only signal for critical state—pair them with visible or accessible feedback.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/MfWI3yPIBv4WmHTl99Iq?embed&show_copy_link=true" title="Haptic Feedback interactive tutorial"
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

## Related documentation

See [Alert Dialog](/concepts/alerts/alert-dialog) for a related FlutterFlow workflow.
