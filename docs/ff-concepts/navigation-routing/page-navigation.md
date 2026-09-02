---
slug: /concepts/navigation/page-navigation
title: Page Navigation
description: Learn how to navigate between pages in FlutterFlow.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 1
keywords:
  - FlutterFlow
  - Page Navigation
  - Navigation
  - Concepts
  - navigate from one FlutterFlow page to another
ai_queries:
  - navigate from one FlutterFlow page to another
---
# Page Navigation

Page Navigation in FlutterFlow is handled through routing, where each page is identified by a unique route.
Navigation can be programmed to happen on events like button clicks, leading to
actions such as pushing a new route (opening a new page) or popping a route (returning to a previous
page). FlutterFlow simplifies the routing process, allowing you to visually design the navigation
flow of your app.

Let's see how to do that in FlutterFlow:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/EwmbXvNO5SvWtQdQyTBK?embed&show_copy_link=true"
        title="Navigate"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

### Navigate To [Action]

The Navigate To Action allows you to set the next page and modify other
navigation-related properties:

| Action Property Name      | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Allow Back Navigation** | Toggle    | When enabled, keeps the existing route history so the user can navigate back. When disabled, FlutterFlow clears the previous route stack during this navigation.                                                                                                                                                                                                                                |
| **Replace Route**         | Toggle    | Use this option to replace the current page in the navigation stack. For example, if a user navigates from Page A to Page B and then to Page C, pressing the back button on Page C would normally return to Page B. However, if **Replace Route** is enabled on Page B, the route changes to Page A -> Page C; therefore, pressing the back button on Page C will take the user back to Page A. |
| **Transition Type**       | Drop Down | Select **Default, Instant, Fade, Slide Up, Slide Down, Slide Left, Slide Right,** or **Scale**.                                                                                                                                                                                                                                                                                                    |
| **Duration (ms)**         | Integer   | Set the transition duration in milliseconds. It is not shown for an Instant transition.                                                                                                                                                                                                                                                                                                         |
| **Page Parameters**       |          | Use this to send data to the next page during navigation.                                                                                                                                                                                                                                                                                                                                       |

:::info[Note]
**Allow Back Navigation** does not affect the Android back button. To disable the Android back
button,
set **Disable Android Back Button** property on the destination page.
:::

<figure>
    ![Nav.png](imgs/Nav.png)
  <figcaption class="centered-caption">Properties of a Navigate To Action</figcaption>
</figure>

### Navigate Back [Action]

In the next page you are navigating to, ensure that you add a 'Navigate Back'
action to the AppBar or wherever you want users to navigate from. Let's add a '
Navigate Back' action to our subsequent page, from which we navigated in the
previous section:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/SmD3l5fyhjR21ZYPntal?embed&show_copy_link=true" title="Page Navigation interactive tutorial"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

When routing is enabled, **Navigate Back** can also expose **Navigate to Root Page on Failure**. Enable it when pressing Back with no previous route should return to the root page instead of doing nothing.

## Related documentation

See [Bottom Sheet](/concepts/navigation/bottom-sheet) for a related FlutterFlow workflow.
