---
slug: /concepts/navigation/share-action
title: 'Share [Action]'
description: Learn how to use the Share Action in your FlutterFlow app to share content.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 8
keywords:
  - FlutterFlow
  - Share Action
  - Navigation
  - Concepts
---
# Share [Action]

The **Share Action** enables users to send text or URLs from your app using the native sharing capabilities of their device. This functionality allows users to share information through various applications installed on their devices, such as email, messaging apps, or social media platforms.

To configure it, add **Share** to an action flow and set **URL/Text Value** to a literal value or a compatible String or media-path variable. FlutterFlow passes that value to the iOS or Android native share sheet.

:::warning
The Share action is generated only for iOS and Android. It is not supported in Preview, Test, Run, or published web builds. Test it by [**running the app on an iOS or Android device or emulator**](../../testing-deployment-publishing/running-your-app/local-run.md).
:::

![share-action](imgs/share-action.avif)
