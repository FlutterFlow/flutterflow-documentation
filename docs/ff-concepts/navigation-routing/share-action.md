---
slug: /concepts/navigation/share-action
title: Share [Action]
description: Learn how to use the Share Action in your FlutterFlow app to share content.
tags: [FlutterFlow, Share Action, Navigation, Concepts]
sidebar_position: 6
keywords: [FlutterFlow, Share Action, Navigation, Concepts]
---

# Share [Action]

Share Action can be used to send a text using the Android or iOS device's share dialog. You can send the text using email, message, or any other application present on the device that supports sharing functionality.

<figure>
    <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceflow-docs/o/share-example.gif?alt=media&token=f902c889-56e0-4f40-9413-7e5852d5d8c2"></img>
  <figcaption class="centered-caption"></figcaption>
</figure>

## Define Share Action

Go to your project page on FlutterFlow and follow the steps below to define an Upload Photo/Video Action to a widget:

1. Select the **widget** in which you want to set the Action.

2. Select the **Actions** from the Properties Panel (the right menu).

3. Click **+ Add Action** button.

4. Choose a gesture from the dropdown among ***On Tap****,* ***On Double Tap****,**or* **On Long 
   Press**.

5. Select the **Action Type** as ***Share***.

6. Now, you need to specify a **URL/Text Value**. It can be set either by defining a **Specific 
   Value** or by using **From Variable** to use a value stored inside a variable. 
   - If you are using **Specific Value**, enter the text in the **Value** field. 
   - If you are using **From Variable**, you need to select the **Source**.

Demo of defining Share Action using a **Specific Value** is as follows:

<img src="https://firebasestorage.googleapis.com/v0/b/ecommerceflow-docs/o/share-with-value.gif?alt=media&token=415cf039-dae7-4ee0-ad3c-c31a8c5c4a50"></img>

<p></p>

Alternatively, a demo of defining Share Action using **From Variable** option is as follows:

<p></p>


<figure>
    <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceflow-docs/o/share-with-variable.gif?alt=media&token=7d77df34-7c82-47fe-ba50-8eedf699c6ea"></img>
  <figcaption class="centered-caption"></figcaption>
</figure>


:::warning
You won't be able to try out this Action using FlutterFlow's *Run Mode* or *Preview Mode*. To 
test this Action, you have to run it on an iOS or Android device or emulator. You can either 
**Download the Code** (by going to `Developer Menu > Download Code`) and build it for your 
device, or use the **Build APK** button (present on the [**Tool Bar**](../../intro/ff-ui/toolbar.md) to generate an APK that 
you can run on your Android device.
:::
