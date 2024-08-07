---
slug: /resources/data-representation/global-properties
title: Global Properties
description: Discover the role of Global Properties in FlutterFlow, which provide universal access across all pages of your app to facilitate common tasks and enhance functionality.
tags: [Global Properties, FlutterFlow, Data Representation]
sidebar_position: 6
keywords: [Global Properties, FlutterFlow, Data Representation]
---

# Global Properties

Global properties are accessible across all pages of your app. They act as a utility function to accomplish a common task regardless of the type of app you are developing. 

For instance, you may need to redirect to a different page if a user is not logged in. Or, you may want to enable specific functionality based on the platform. In such scenarios, global properties are useful.

You can access these properties via the **Set from Variable menu > Global Properties**.

![global-properties.avif](../imgs/global-properties.avif)

:::note
Global properties are exposed by FlutterFlow. You can't create one by yourself.
:::

## List of Global Properties

A list of all the available global properties is as follows:

- **Is User Logged In:** Indicates whether a user is currently logged into the app. Useful for providing exclusive features to registered users or adjusting UI elements based on login status.
- **Current Time:** Retrieves the current date and time.
- **Current Device Location:** Obtains the user's current location, useful for updating the user's position on Google Maps or storing in a backend database.
- **Link To Current Page:** Provides the deep link of the current page. Learn more about [adding deep links here](../../ff-concepts/navigation-routing/deep-dynamic-linking.md#adding-deep-link).
- **Fraction of Screen Width:** Determines the proportional width of the device's screen.
- **Fraction of Screen Height:** Determines the proportional height of the device's screen.
- **Screen Width:** Provides the total width of the current device's screen in pixels.
- **Screen Height:** Provides the total height of the current device's screen in pixels.
- **Is Android:** Determines if the user is accessing the app on an Android device.
- **Is iOS:** Determines if the user is accessing the app on an iOS device.
- **Is Web:** Determines if the user is accessing the app through a web browser.
- **Is Debug Mode:** Indicates if the app is currently running in debug mode, useful for displaying features or performing actions only during debugging.
- **Is Dark Mode:** Checks if the app's current theme mode is set to dark.
- **Is Light Mode:** Checks if the app's current theme mode is set to light.
- **Is On-Screen Keyboard Visible:** Checks if the on-screen or soft keyboard is visible. This is helpful in making UI adjustments if keyboard is visible on screen.


:::tip[Generated Code]
Learn more about the [**Generated Code**](../../ff-concepts/state-management/generated-code.md#global-state) behind Global Properties.
:::