---
title: Implicit Animations
sidebar_position: 2
description: Learn how to add implicit animations in FlutterFlow.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Implicit Animations
In Implicit Animation, the widget automatically animates to a new property's value when they are updated. For example, the container widget animates whenever you change its size and colors.

:::info
Implicit Animation is recommended only when you want to run the animation once (after the properties are changed).
:::

Here's an example of how it looks when you update the container properties with and without Implicit Animation.

<Tabs>
<TabItem value="1" label="Without Implicit Animation" default>
![Without Implicit Animation](animation_gifs/without-implicit-animation.gif)
</TabItem>
<TabItem value="2" label="With Implicit Animation">
![With Implicit Animation](animation_gifs/with-implicit-animation.gif)
</TabItem>
</Tabs>

Here's how you add the Implicit Animation on Container widget:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/3rbT4yu7bm4fXgLSpzXU?embed&show_copy_link=true"
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