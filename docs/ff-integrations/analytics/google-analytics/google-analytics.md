---
id: getting-started
title: Getting Started
slug: '/integrations/google-analytics'
---

# Google Analytics

Google Analytics allows you to track app-related events. 

## Setup 

Simply navigate to **Settings and Integrations** > **Integrations** > **Google Analytics** and turn on the **Enable Google Analytics** toggle. You can see all the logged events inside the Analytics dashboard of your [Firebase console](https://console.firebase.google.com/).

## Default Events
Currently, we support automatic logging for the following events:

* **On Page Load**: This logs an event when a user opens a page. It is logged with the Firebase recommended name, i.e., **screen_view,** but you will find the actual screen name, i.e., page title, inside the parameter (click on the screen_name to reveal the parameter).

* **On Action Start**: This logs an event when a user interacts with widgets to trigger an action. It will be logged as
`{WIDGET_NAME}_{TRIGGER_TYPE}` For example, when the user taps a button and navigates to the 
  next page, the event will be logged as **Button_navigate_to**.

* **On Each Individual Action**: This logs an event for every individual action or action chain for a given widget. It will be logged as `{WIDGET_NAME}_{TRIGGER_TYPE}` For example, when the user taps on a button and adds the *Upload Media* action followed by the *Update App State* action, the event will be logged as `Button_upload_media` and `Button_update_local_state`.

* **On Authentication**: This logs an event for every authentication action. That means whenever you signup, log in, log out, reset your password, or delete your account. The event will be logged as `{ACTION_TYPE}` (e.g., sign_up, login, etc.).

:::tip
To clearly identify the widgets (on which the events are logged) in the analytics dashboard, you can rename and provide an easily recognizable name to the widget (e.g., BuyButton instead of just Button).
:::

## Google Analytics Event [Action]

This action allows you to log custom events. By using this action, you can record additional information associated with the event in the form of parameters.

Go to your project page on FlutterFlow and follow the steps below to define the Action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to define the action. 

2. Select **Actions** from the [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) (the right menu), and click **+ Add Action**.
	* Search and select the **Google Analytics Event** action.
	* Enter the name of the event in the **Value** input field. This name will be displayed on 
      the Analytics dashboard.


:::note
All the logged events can be accessed from the Analytics dashboard of your [Firebase console](https://console.firebase.google.com/).
:::

:::tip
Event names must be 40 characters or less. Event names may only contain alphanumeric characters and underscores ("_"), and must start with an alphabetic character.
:::

<figure>
    ![adding-analytics-action.gif](adding-analytics-action.gif)
  <figcaption class="centered-caption">Adding Google Analytics Event Action</figcaption>
</figure>

### Add Parameters

At times, you may need to log additional details such as the time, user type, and widget placement when an event occurs.

Here's how you can log an event by the tab name when a tab within the TabBar is selected or changed:

1. Select the **Tab** (inside TabBar) on which you want to define the action. 

2. Select **Actions** from the [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) (the right menu), and click **+ Add Action**.
	* Search and select the **Google Analytics Event** action.
	* Enter the name of the event in the **Value** input field, such as *Tabbar_On_Tap*.
	* Click on the **+ Add Parameter** and open the **Param 1** section.
	* Inside the **Key** section, enter **Value** as **Tab_Name**.
	* Inside the **Value** section, enter the **Value** as the name of the tab (e.g., *Upcoming*, 
	  *Past)*.
   
3. Similarly, add this action for other tabs as well.

![adding-analytics-action-with-parameter.gif](adding-analytics-action-with-parameter.gif)
