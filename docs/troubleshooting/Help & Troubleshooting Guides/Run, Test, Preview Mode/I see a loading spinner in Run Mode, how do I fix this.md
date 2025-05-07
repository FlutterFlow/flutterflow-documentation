---
keywords: ['database', 'mode', 'spinner']
author: Unknown
created_at: '1657659506'
slug: /i-see-a-loading-spinner-in-run-mode-how-do-i-fix-this
title: I see a loading spinner in Run Mode, how do I fix this?
updated_at: '1657659579'
url: https://intercom.help/flutterflow/en/articles/6381392-i-see-a-loading-spinner-in-run-mode-how-do-i-fix-this
---
# I see a loading spinner in Run Mode, how do I fix this?

If you see a loading spinner in run mode then please try to run the application once again after updating your project's Firestore rules.​
Here are the steps to update Firestore rules:

Go to **Firestore** and then select **Settings**.

Copy the Firestore rules by selecting the copy icon.

![](../../assets/20250430121355282620.gif)

Next, go to Firebase console and open you application. 

Select **Firestore Database** and then select the **Rules tab.**

Paste the copied rules(from FlutterFlow) there.

Now return to FlutterFlow and re-run your project

![](../../assets/20250430121355575413.gif)