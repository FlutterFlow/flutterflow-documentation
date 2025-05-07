---
keywords: ['load', 'working', 'scroll']
author: Unknown
created_at: '1677847910'
slug: /scroll-to-action-is-not-working-when-used-on-page-load
title: Scroll To Action Is Not Working When Used On Page Load
updated_at: '1678287585'
url: https://intercom.help/flutterflow/en/articles/7047006-scroll-to-action-is-not-working-when-used-on-page-load
---
# Scroll To Action Is Not Working When Used On Page Load

If your Scroll To Action is not working as expected when triggered on page load, follow this guide to understand the cause and apply the recommended solution for a smooth user experience.

---

## 1. Issue Overview

> **Problem:**
> - Using Scroll To Action in an On Page Load action chain does not work as expected.
> - The scrollable widget may not exist yet when the action is triggered.

![](../../assets/20250430121250214649.png)

---

## 2. Why Does This Happen?

- When you add an action to a page load, it executes before everything else.
- The Scroll To Action may try to scroll to a widget that hasn't been built yet.

---

## 3. Solution & Best Practices

### ⏳ Add a Delay Before Scrolling
- Wait until the page is fully loaded before executing the scroll action.
- Add a **Delay Action** before the Scroll To Action (e.g., 500–700 milliseconds).
- This gives the page time to build, ensuring the scrollable widget exists when the action runs.

![](../../assets/20250430121250453056.png)

### 🎬 Add an Animation for a Smoother Experience
- You can also add an animation to the scrollable widget (e.g., On Load animation).
- This way, the widget animates in, and then the scroll action executes, preventing a visible jump or break in the UI.
- **Example:**
    - Fade animation for 1200 ms on your ListView
    - Delay for 700 ms
    - Then perform the scroll action
    - Users experience a seamless transition

---

> **Summary:**
> - Add a delay before the Scroll To Action on page load
> - Optionally, use an animation for a smoother UI
> - This ensures the scrollable widget exists before scrolling

For more details, see the [official support article](https://intercom.help/flutterflow/en/articles/7047006-scroll-to-action-is-not-working-when-used-on-page-load).