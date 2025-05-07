---
keywords: ['freezes', 'after', 'opening']
author: Unknown
created_at: '1677516469'
slug: /my-project-freezes-after-opening-how-do-i-fix-this
title: My project freezes after opening, how do I fix this?
updated_at: '1678229690'
url: https://intercom.help/flutterflow/en/articles/7035507-my-project-freezes-after-opening-how-do-i-fix-this
---
# My project freezes after opening, how do I fix this?

Issue
When I try to open my project it freezes. I'm unable to access my project or make changes. How do I fix this?
Background
The most frequent cause of a project freezing is a rendering issue in one of your pages
How To Use Safe Mode To Identify And Resolve The Issue
The best practice to fix a project that is freezing is to open the project in safe mode, go to the place you were working before the crash happened, and undo the changes (e.g. update properties, delete the widget, etc.)

Add ?SAFE_MODE to the URL
Simply add `?SAFE_MODE` to the end of the URL (e.g. https://app.flutterflow.io/project/sample-app-social-app-tx2kqp?SAFE_MODE) which will open it without rendering the UI Builder.

Tip: Don't forget to add the ?​
![](../../assets/20250430121303805249.png)Example project when the UI is not rendered in the Builder:

![](../../assets/20250430121304090825.png)Undo The Changes You Made Before The Crash Happened
Enter the  project in Safe Mode and go to the place you were working last time before the crash happens.​
Undo the changes you made (e.g. delete the widget, change the height back to 50px, etc.)​
After doing the first edit, the editor will exit from the SAFE_MODE. If your project successfully renders, you can return to building. 

Otherwise continue to enter make safe mode and make changes until you find what was breaking your project. 
If you are unable to identify the widget causing the issue, please reach out to support at support@flutterflow.io or via chat.

