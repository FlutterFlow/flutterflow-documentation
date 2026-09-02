---
slug: /concepts/navigation/generate-current-page-link
title: Generate Current Page Link
description: Learn how to generate the current page link in your FlutterFlow app.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 5
keywords:
  - FlutterFlow
  - Navigation
  - Page Link
  - Concepts
---
# Generate Current Page Link

The built-in **Generate Current Page Link** action creates a Firebase Dynamic Link for the current page and exposes the resulting String as **Current Page Link** for later actions in the flow.

:::warning[Legacy Firebase Dynamic Links only]
This action is enabled only when **Use Firebase Dynamic Links** is enabled in the project. Firebase Dynamic Links was deprecated and shut down on August 25, 2025, and it is unavailable to new Firebase projects. The built-in action does **not** create a Branch link. For a supported replacement, use the [Branch deep-linking library and its Generate Link custom action](deep-dynamic-linking.md#generate-link-custom-action).
:::

<figure>
    <img alt="Dynamic Link Demo in FlutterFlow" src="https://firebasestorage.googleapis.com/v0/b/ecommerceflow-docs/o/dynamic-link-demo.gif?alt=media&token=f6aee025-782a-45b9-baa6-3d357ca30cec"></img>
  <figcaption class="centered-caption">Sharing and opening a dynamic link</figcaption>
</figure>

:::info[Prerequisites]

For a legacy project that still contains this action, its configuration requires the deprecated [**Firebase Dynamic Links setup**](deep-dynamic-linking.md#dynamic-links-with-firebase-dynamic-links-deprecated). New projects should use the Branch workflow linked above.
:::

## Defining Generate Current Page Link action

Go to your project page on FlutterFlow and follow the steps below to define the Action to any widget.

1. Select the **Widget** (e.g. share button) on which you want to define the action.

2. Select **Actions** from the [Properties Panel](../../intro/ff-ui/builder.md#properties-panel)
   (the right menu), and click **Open**. This will open an **Action flow Editor** in a new popup window.
	1. Click on the **+ Add Action**.
	2. On the right side, search and select the **Generate Current Page Link** action and click
	   **Close**.

3. Configure the optional link-preview title, image, and description. You can also choose whether to request a short link and whether iOS should skip the preview page.
4. Add the action that consumes the generated URL after this action, then choose **Current Page Link** from the available action/widget-state output.

<figure>
    <img alt="Adding Share Action in FlutterFlow" src="https://firebasestorage.googleapis.com/v0/b/ecommerceflow-docs/o/adding-share-action.gif?alt=media&token=b94f6e86-1c1f-4a19-ad0b-b83cc66fc08f"></img>
  <figcaption class="centered-caption">Adding Generate Current Page Link action</figcaption>
</figure>
