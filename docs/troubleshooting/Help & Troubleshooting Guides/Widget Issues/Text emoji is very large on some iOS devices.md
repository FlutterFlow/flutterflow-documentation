---
keywords: ['ios', 'large', 'emoji']
author: Unknown
created_at: '1677759916'
slug: /text-emoji-is-very-large-on-some-ios-devices
title: Text emoji is very large on some iOS devices
updated_at: '1678231287'
url: https://intercom.help/flutterflow/en/articles/7044370-text-emoji-is-very-large-on-some-ios-devices
---
# Text Emoji is Very Large on Some iOS Devices

If text emojis are rendering much larger than expected on some (or all) iOS devices, use this guide to understand the cause and apply effective workarounds.

---

## 1. Issue Overview

> **Problem:**
> - Text emoji appears oversized on certain iOS devices.
> - This can disrupt the intended design and user experience.

![](../../assets/20250430121252902305.png)

---

## 2. Troubleshooting & Workarounds

### 📏 Enable Auto-Sizing and Use a Fixed-Width Container
- **Why:** Emoji size can be affected by device configuration and text widget settings.
- **Solution:**
    - Enable auto-sizing on the text widget.
    - Wrap the text widget in a container with a fixed width.
    - This restricts the text size from exceeding the container's width, so the emoji will not be larger than the container even with auto-sizing enabled.

---

## 3. Example Implementation

![](../../assets/20250430121253238523.png)

- **Scenario:**
    - Create a container with a fixed size (e.g., 32x32 pixels).
    - Insert a text widget with an emoji and set the font size.
    - Enable auto-sizing on the text widget.
    - The font size will adjust based on the widget's dimensions, but cannot exceed the container's size.
    - This ensures the emoji remains within the intended bounds.

---

> **Summary:**
> - Enable auto-sizing on the text widget.
> - Wrap the text widget in a fixed-width container.
> - This limits the maximum emoji size and ensures consistent appearance across iOS devices.

For more details, see the [official support article](https://intercom.help/flutterflow/en/articles/7044370-text-emoji-is-very-large-on-some-ios-devices).