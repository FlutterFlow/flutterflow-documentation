---
keywords: ['saving', 'changes', 'issue']
author: Unknown
created_at: '1677498114'
slug: /have-an-issue-saving-my-work-in-my-project-my-changes-not-save
title: Have an issue saving my work in my project. my changes not save.
updated_at: '1677500555'
url: https://intercom.help/flutterflow/en/articles/7034395-have-an-issue-saving-my-work-in-my-project-my-changes-not-save
---
# Have an issue saving my work in my project. my changes not save.

If you have reached the size limit for your FlutterFlow project, it's important to check the browser developer console to confirm this. Here's how you can do that in Google Chrome:​
![](../../assets/20250430121308006359.png)

Press F12 to open the developer console.

Click on the console tab.

Wait for any errors to appear while you work on your project.​
![](../../assets/20250430121308259919.png)

For instance, if you receive an error message when trying to work on a project that has reached its limit, unfortunately, there is no way to increase the project size limit. However, you can reduce the project size by optimizing it. Here are some steps you can take:

Remove any unnecessary assets from the asset folder and try to use their URLs instead. You can upload your assets to Firebase Storage, grab the URL, and use them in your project. Only use assets if you need them offline and have no other choice.

Remove any temporary pages or components from the project.

If you keep some UI elements in the project just in case you need them later, put them in a clone version of the project instead of keeping them in the current one.

Save a version of your project and remove any unused or unnecessary UI elements. If you need something later, you can retrieve it from an older version or snapshot and paste it into your current project.

Convert any UI element you use more than once into a reusable component to reduce the project size.

If you are creating a page repeatedly, make it more dynamic or convert it into a modal and use it in different places.

By following these steps, you can optimize your FlutterFlow project and reduce its size to avoid hitting the size limit.​