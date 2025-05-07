---
keywords: ['carousel', 'image', 'create']
author: Unknown
created_at: '1663664206'
slug: /how-to-create-an-image-carousel-in-flutterflow
title: How To Create An Image Carousel In FlutterFlow
updated_at: '1669518269'
url: https://intercom.help/flutterflow/en/articles/6572448-how-to-create-an-image-carousel-in-flutterflow
---
# How To Create An Image Carousel In FlutterFlow

The following are the widgets and actions that will be required to build an image carousel in FlutterFlow:

 ***Widgets ***

Page View Widget
***Action (User Interaction)***

Control Page View
Step 1: ​
![](../assets/20250430121316839720.png)Add a **Page View Widget** to the canvas or displayed screen.Step 2: Add an action to the scaffold, on '**page load**'
![](../assets/20250430121317144058.png)Step 3: Under, '**define actions**', select '**control page view**' This makes it possible to set up which page view should be displayed, at the first, last, or next
![](../assets/20250430121317463225.png)Step 4: Select the page view control type among the options shown in the attached image. 
1. **Previous**: Scroll to the previous page in the pageview.
2. **Next**: Scroll to the next page in the pageview.
3. **First**: Scroll to the first page in the pageview.
4. **Last**: Scroll to the last page in the pageview.​
![](../assets/20250430121317664413.png)Step 5: For purposes of demonstration, the initial page view control was set to '**first**'. This action should be followed by a wait action that sets the transition interval between the current page view and the next. ​
![](../assets/20250430121317919420.png)Step 6: The page view action type should be set to '**next**'  for displaying the subsequent page view. If a user has more page views to display, the actions setup should be extended 
![](../assets/20250430121318137795.png)Demonstration 
![](../assets/20250430121318472792.gif)