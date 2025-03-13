---
slug: /concepts/animations/rive-animation
title: Rive Animation
description: Learn how to add Rive animation in your FlutterFlow app.
tags: [Rive Animation, FlutterFlow, Animations]
sidebar_position: 2
keywords: [Rive Animation, FlutterFlow, Animations]
---

# Rive Animation
[Rive](https://rive.app/) is a real-time interactive design and animation tool. Using the **RiveAnimation** widget you can easily import your Rive assets to FlutterFlow and use them inside your app.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/4J9fgyM4CwQA4tC0HrQ8?embed&show_copy_link=true"
        title=""
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
<p></p>

## Designing Animation

You can create an animation from scratch by using [Rive Editor](https://editor.rive.app/).

1. Click **+ New File**.
2. Specify the **Artboard dimensions** (Width and Height).
3. Click **Create**.

Use the Rive [design tools](https://help.rive.app/editor/fundamentals/shapes-and-paths) or import image files to start designing your animation. Once your design is ready you can use the [Timeline](https://help.rive.app/editor/animate-mode/timeline) and use keying to easily animate your design.

:::info
You should have at least one [**Artboard**](https://help.rive.app/editor/fundamentals/artboards) inside your Rive file but you can add an infinite amount of Artboards.
:::


After you have completed designing your animation, you can either download it as an asset (having `.riv` extension) or you can share it with others by publishing it to the Rive community.

To download the Rive file, click the **Export icon** (top-left corner of the Rive toolbar), and select **Download -> For newest runtime**.

To publish the file to the community, click the **Export icon** (top-left corner of the Rive toolbar), and select **Publish to Community**. Give a **title** and **description** to your animation and click **Publish to Community**.

:::warning
For using a Rive animation file inside FlutterFlow, you should either download or publish the file to the community.
:::

Instead of creating an animation from scratch, you can also use any Rive asset shared in the [Community](https://rive.app/community/).

## Adding RiveAnimation widget

Follow the steps below to use a Rive animation:

1. Drag and drop the **RiveAnimation** widget onto the canvas.
2. Select the **Animation Source** as either ***Network*** or ***Asset***.
3. If you have selected ***Network***, enter the **Path** (download URL) ****of the animation. Get the path by navigating to the Rive animation published in the community, right-click on the **Download** button and copy the link address.
4. If you have selected ***Asset***,
5. Choose an **Artboard** from the dropdown list.
6. Select the **Animations** that you want to use (these are imported from the Rive asset). After selecting one or more animation(s), you can use the **Preview Animations** button to play it.
7. The **Animation Type** is selected as ***Once*** by default. If the selected animations contain a loop or boomerang, you will have an option to select ***Continuous***. On choosing this option, if the animation contains a loop it will play continuously.
8. By default, the **Auto Animate** checkbox remains checked, which means that the animation will play as soon as the page loads. But if you want to use an Action to trigger the animation, uncheck this.
9. Specify the **Width** and **Height** of the RiveAnimation widget, and select a **Box Fit** type.
10. (Optional) If you plan to use an Action to trigger the animation, you can give an appropriate **Name** to this *RiveAnimation* widget for it to be easily identifiable.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/rbKXOTaDS8aVCS26oeS0?embed&show_copy_link=true"
        title=""
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
<p></p>

## Control animation using action

To trigger a RiveAnimation to start playing using an Action, you can use the **Rive** **Animation Action**. 

### Adding Rive Animation [Action]

Follow the steps below to define an action to start the animation:

1. Select the **widget** (eg., `Button`) on which you want to define the action.
2. Select **Actions** from the Properties Panel.
3. Click **+ Add Action** button.
4. Choose a gesture from the dropdown among **On Tap, On Double Tap,** or **On Long Press**.
5. Select the **Action Type** as ***Animation**.*
6. Set **Choose Animation Type** to ***Rive Animation***.
7. Under **Choose Rive Animation**, select the `RiveAnimation` widget (If you have given your `RiveAnimation` widget a name, that will be displayed here).

:::info
You should have the **Auto Animate** unchecked inside the properties of `RiveAnimation` widget to take advantage of this action.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/J2r1YaFGhp1CbmEcfBpl?embed&show_copy_link=true"
        title=""
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
<p></p>
