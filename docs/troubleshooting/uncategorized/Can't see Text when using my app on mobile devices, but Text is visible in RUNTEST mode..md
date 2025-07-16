---
keywords: ['mode', 'mobile', 'text']
author: Unknown
created_at: '1677758942'
slug: /can-t-see-text-when-using-my-app-on-mobile-devices-but-text-is-visible-in-runtest-mode
title: Can't see Text when using my app on mobile devices, but Text is visible in
  RUN/TEST mode.
updated_at: '1678232534'
url: https://intercom.help/flutterflow/en/articles/7044347-can-t-see-text-when-using-my-app-on-mobile-devices-but-text-is-visible-in-run-test-mode
---
# Can't see Text when using my app on mobile devices, but Text is visible in RUN/TEST mode.

Issue
Text widget is not showing when I am testing on a real device, but this text is visible in Run/Test Mode (example below).

![](../assets/20250430121253789974.png)Troubleshooting This Issue
If you encounter this issue, there are two specific areas to investigate:​
Check Light/Dark Mode Text Colors
It's possible that the color scheme for the dark mode is leading to poor visibility of text against the background colors. This issue can be resolved by either disabling dark mode if it is unnecessary or adjusting the color scheme for the dark mode to a suitable setting.

Navigate to Settings &gt; Theme &gt; colors to check the color settings.​
![](../assets/20250430121254079048.png)Ensure No Translations Have Been Missed
If a translation has been missed, then the text will appear as an empty string when the application is run in a non-default language setting. To address this issue, you can use the FlutterFlow automatic translator to ensure all pages are translated when a new language is added. 

![](../assets/20250430121254348087.png)Alternatively, you can open the translations and look for any empty cells (example below)

![](../assets/20250430121254635672.png)