---
keywords: ['firebase', 'android', 'package']
author: Unknown
created_at: '1656590920'
slug: /package-name-in-firebase-android-config-must-match-your-app-s-package-name
title: Package name in firebase android config must match your app's package name
updated_at: '1713554289'
url: https://intercom.help/flutterflow/en/articles/6349025-package-name-in-firebase-android-config-must-match-your-app-s-package-name
---
# Package name in firebase android config must match your app's package name

This is a common issue which arises when the package name defined in FlutterFlow is changed recently and when it doesn't matches with the Firebase config files.

Tip: Make sure that your package name matches exactly in FlutterFlow and Firebase (this includes capitalization, spacing, etc.)

In order to resolve this issue please follow the following steps.

You'll need to Regenerate the config files from FlutterFlow. To do this, open your app in **FlutterFlow** and then click on **Settings** **&gt;** **Firebase**.

![](../assets/20250430121404176944.png)

Here, Click on the **Regenerate Config Files **button, Enter the new package name and then Click on **Generate File.**

![](../assets/20250430121404592193.png)

This issue should now be resolved. You can now re-test to confirm that the issue has been fixed.
