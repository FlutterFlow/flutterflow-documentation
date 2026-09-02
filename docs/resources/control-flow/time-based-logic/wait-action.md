---
slug: /resources/time-based-logic/wait-action
title: 'Wait (Delay) [Action]'
description: >-
  Learn how to use the Wait Action in your FlutterFlow app to pause actions for
  a specified duration.
tags:
  - FlutterFlow
  - Resources
  - Time Based Logic
sidebar_position: 1
keywords:
  - Wait Action
  - Time-Based Logic
  - FlutterFlow
last_verified: 2026-09-02
---
# Wait (Delay) [Action]

The **Wait (Delay)** action pauses the current action flow for a duration in milliseconds, then continues to the next action. The duration can be a fixed integer or an integer value from a variable.

:::tip[Possible use cases]
- **Show Splash Screen:** Delay the transition to the next page to allow the splash screen to be visible for a few seconds.
- **Step-by-Step Tutorials:** Introduce timed delays between steps to guide users through a tutorial or onboarding flow.
- **Chain Animations:** Add a deliberate delay between independent animation steps when an animation-completion action is not available.
:::

Wait is a fixed delay; it does not wait for a condition, server response, widget render, or data query to become ready. Prefer the completion of the action that owns the asynchronous work. A client-side delay is also not a reliable scheduler after the app is backgrounded or terminated.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/84gU4TTmjwX3STESd5z9?embed&show_copy_link=true" title="Wait [Action] interactive tutorial"
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

## Verify the delay

Add visible actions immediately before and after **Wait (Delay)**, then run the flow in **Test Mode**. Confirm the duration uses milliseconds, the following action does not start early, navigation or disposal does not create an unintended side effect, and a variable duration cannot become negative or unexpectedly large.

## Related documentation

See [Periodic Action](/resources/time-based-logic/periodic-action) for a related FlutterFlow workflow.
