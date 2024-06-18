---
title: Page Transitions
sidebar_position: 4
---

The animation that plays while going from one page of the app to another is known as the navigation transition. While defining a Navigate To Action on any widget, you will notice the transition type is set as Default but you can change that animation easily.

You can choose from any of the following transition animations:

<!-- gif -->


Here, the transitions are recorded with the duration set to 1000ms to make the animation clearly visible. But inside the app, it's recommended to keep the duration between 200-400ms.


Apply single navigate transition
To set a transition animation for a single navigate action, follow the steps below:

Select a widget on which you want to set the navigation action.
From the Properties Panel (right), click on +Add inside the Actions section.
Make sure you have the On Tap tab selected on top.
Click + Add Action.
Set the action as Navigate To and choose the page you want the user to be navigated to from the dropdown.
To change the transition animation, select an animation from the Transition Type dropdown.
By default, the animations use 300 milliseconds as the duration for which it plays but you can change it by specifying a value inside the Duration (ms) field.
Click Close.


Change global navigate transition
To change the default transition animation of your entire app, follow the steps below:

Go to the Settings and Integrations page from the Navigation Menu (right).
Under the General section, select App Details.
In the Navigation Transition section, check Override Default Transition.
Now, you can set the Transition Type and Duration from here.
While defining any Navigate To action, use the Default transition type. FlutterFlow will automatically pick up the global transition animation that you have set.

