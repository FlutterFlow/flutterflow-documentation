---
title: VideoPlayer
slug: /concepts/file-handling/video-player
sidebar_position: 0
tags: [Media, Widget]
keywords: [Media, VideoPlayer, Play Video]
---

# VideoPlayer

The VideoPlayer widget is used to show video from uploaded assets or the URL link. The VideoPlayer widget can play various video formats that include but are limited to MP4, MOV, WAV, MPEG, JPEG motion photo, and so on.

## Adding VideoPlayer Widget

Here's how you can add the VideoPlayer widget to your project:

1. Drag the **VideoPlayer** widget from the **Base Elements** tab (in the Widget Panel) or add it directly from the widget tree.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Find the **Path** property and enter the **URL** for the new video.

:::info
By default, every VideoPlayer widget added to the project will show a sample video from a network URL.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/nHAgkrH8h6iYcJztASwU?embed&show_copy_link=true"
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

## Changing the Video Type

By default, the widget is set to play a video from the internet. However, you can change this to use the video uploaded directly to your app.

Here's how you can change the Video Type:

1. Select the **VideoPlayer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Find the **Video Type** dropdown. Click on **Network** (inside the dropdown) and select **Asset**.
4. Now, find the **Asset Video** property, Click on the **Upload Video** button, select the video and upload it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ojeirHeMPqSHS5VNoHcu?embed&show_copy_link=true"
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

If you want to use the same video multiple times in your app, you don't need to upload the same video multiple times. You can use the uploaded video for other VideoPlayer widgets as well.

:::tip
Once you upload the video, you can use it throughout your app. You can manage your uploaded videos with the Project Media Asset Manager.
:::

To use the uploaded video:

1. Select the **VideoPlayer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Find the **Video Type** dropdown. Click on **Network** (inside the dropdown) and select **Asset**.
4. Click on **No asset select** (inside the dropdown) and choose the video.

## Customization

You can customize the appearance of this widget using the various properties available under the properties panel.

### Setting Aspect Ratio

Setting the *Aspect Ratio* to the VideoPlayer allows you to show video in a specific aspect ratio. The height of the widget is determined by applying the given aspect ratio to the width, expressed as a ratio of width to height. For example, setting the value of 1.7 will show the video in a 16:9 aspect ratio.

To set the aspect ratio:

1. Select the **VideoPlayer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Find the **Aspect Ratio** property, if you want to set the aspect ratio of 16:9, enter the value as 1.7 (Simply divide the 16 by 9).

:::tip
Try changing the width of VideoPlayer and the height will be adjusted as per the aspect ratio.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/jA0siXyl8MvI4Gs3tYAR?embed&show_copy_link=true"
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

### Controlling the AutoPlay

The *AutoPlay* property allows you to configure whether the video should start playing as soon as it loads. By default, this property is disabled and you have to click on the play button to start watching the video.

To enable/disable auto-playing a video:

1. Select the **VideoPlayer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Enable the **Auto Play** property.

### Enable or Disable Looping of Video

The Loop Video property allows you to configure whether the video should start playing again after it ends. By default, this property is enabled and the video keeps on playing after it ends.

To enable/disable the looping of video:

1. Select the **VideoPlayer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Find the **Loop Video** property, enable or disable to change the looping video behavior.

### Show or Hide Video Controls

The *Show Controls* property allows you to configure whether the player should show the controls over the video such as play-pause button, seek bar, and so on. By default, this property is enabled and all the video controls are visible over the video.

To show/hide video controls:

1. Select the **VideoPlayer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Find the **Show Controls** property, Use it to show or hide controls over the video.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/sHKR3xUKXhi09D5rnypM?embed&show_copy_link=true"
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

### Controlling Full Screen

The *Allow Full Screen* property allows you to configure whether the player should show the full-screen icon in video controls. By default, this property is enabled and users can open video in full-screen mode by tapping the full-screen icon at the bottom right corner of the player.

To enable/disable full-screen icon:

1. Select the **VideoPlayer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Find the **Allow Full Screen** property, checkmark/uncheck to show/hide the full-screen mode icon.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/HxVxSGkGKa6e6Wz2udiW?embed&show_copy_link=true"
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

### Showing Playback Speed Menu

The *Include Speed Playback Menu* property allows you to configure whether the player should show the playback speed menu. The playback speed menu helps users to increase or decrease the speed of the video. By default, this property is disabled.

To show the playback speed menu:

1. Select the **VideoPlayer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Video Player** section.
3. Find the **Include Playback Speed Menu** property, checkmark it (click on it).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/3ahTxFfMNRog2PcMmejb?embed&show_copy_link=true"
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