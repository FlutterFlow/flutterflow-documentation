---
keywords: ['mode', 'mobile', 'text']
author: Unknown
created_at: '1677758942'
slug: /can-t-see-text-when-using-my-app-on-mobile-devices-but-text-is-visible-in-runtest-mode
title: Can't see Text when using my app on mobile devices, but Text is visible in RUN/TEST mode.
updated_at: '1678232534'
url: https://intercom.help/flutterflow/en/articles/7044347-can-t-see-text-when-using-my-app-on-mobile-devices-but-text-is-visible-in-run-test-mode
---

# Can't See Text When Using My App on Mobile Devices, But Text Is Visible in RUN/TEST Mode

---

## Issue

Text widgets are not appearing when the app is tested on a real mobile device, but they are visible in FlutterFlow's **Run/Test Mode**.

![Text visible in Run/Test mode](../assets/20250430121253789974.png)

---

## Troubleshooting This Issue

If you're experiencing this issue, investigate the following potential causes:

---

### ✅ Check Light/Dark Mode Text Colors

The text might be using a color that blends with the background, especially in **dark mode**. To fix this:

1. Navigate to **Settings → Theme → Colors**
2. Review both light and dark mode color schemes.
3. Adjust text and background colors to ensure visibility.

![Theme color settings](../assets/20250430121254079048.png)

Alternatively, disable dark mode if it’s not needed.

---

### ✅ Ensure No Translations Have Been Missed

When translations are missing, text may appear blank in non-default language settings.

#### Fix it by:
- Using FlutterFlow’s **automatic translator** to ensure translations exist for all languages.
- Manually checking for empty translation fields.

![Translation UI](../assets/20250430121254348087.png)
![Empty translations example](../assets/20250430121254635672.png)

---

By addressing both text color visibility and missing translations, you should be able to resolve the issue of disappearing text on real devices.
