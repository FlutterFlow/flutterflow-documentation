---
slug: /flutterflow-ui/storyboard
title: Storyboard
description: Master the Storyboard view in FlutterFlow to visualize your app’s design and user navigation. The Storyboard allows you to see screens and interactions, ensuring a seamless user experience.
tags: [Storyboard, FlutterFlow, UI, User Navigation]
sidebar_position: 3
keywords: [Storyboard, FlutterFlow, UI, User Navigation]
---

# Storyboard

The Storyboard view allows you to visualize the overall design and navigation of your app. On Storyboard, you can see different screens and user interactions that make up your app. This allows you to see how users will navigate through your app and ensure that the user experience is as intuitive and user-friendly as possible.

:::info

This feature is currently in Beta. It is optimized for projects with 30 pages or less.

:::

![storyboard.avif](imgs/storyboard.avif)

## Storyboard legend

In a storyboard, a legend is a visual key or guide that explains the meaning of the different lines, icons, and colors used inside the canvas.

We use the following elements inside the storyboard:

![storyboard-legend.avif](imgs/storyboard-legend.avif)

1. The solid line is used to represent the [Navigate](../../ff-concepts/navigation-routing/page-navigation.md#navigate-to-action) or Login action.
2. The dotted line is used to represent the Bottom Sheet action.
3. The right arrow icon represents hidden widgets. These widgets may not be visible in the current page view (e.g., they might be on another tab) but they still have a navigation action to display them.

## Highlight routes on a page

With so many pages displayed on a Storyboard, it may be difficult to identify the route path from a specific page, especially when lines overlap each other. To highlight the pathways leading into and out of a specific page, just click on a page, and the routes will be highlighted in blue color.

![highlight-routes.avif](imgs/highlight-routes.avif)

## Move pages

You might want to adjust the default arrangements of pages on canvas and group the pages that belong to the same feature. To do so, select the page and drag it to the desired place.

## Open a page from Storyboard

You can also open a page directly from a Storyboard. To do so, simply double-click on a page.

---

## Video guide

Watch this video if you prefer watching a video tutorial.
<div class="video-container"><iframe width="760" height="428" src="https://www.youtube.com/embed/ukBii81pwm4" title="Navigating Pages &amp; Storyboard | FlutterFlow University" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
---

## FAQs

<details>
<summary>I am getting "Error: Unable to initialize Storyboard</summary>
<p>This error typically occurs because the initial page has not been set. To resolve this, please set the initial page in the [App Details](../../resources/projects/settings/general-settings.md#app-details) settings of your project.</p>
</details>
