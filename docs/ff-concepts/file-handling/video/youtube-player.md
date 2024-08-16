---
title: YoutubePlayer
slug: /concepts/file-handling/youtube-player
sidebar_position: 1
tags: [Media, Widget]
keywords: [Media, YoutubePlayer, Play YouTube Video]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# YoutubePlayer

The **YouTubePlayer** widget in FlutterFlow allows you to seamlessly integrate and play YouTube videos within your app. It offers customizable playback options and an intuitive interface for enhancing the user experience.

## Adding YoutubePlayer Widget

To add the YoutubePlayer widget in your project:

Simply drag the **YoutubePlayer** widget from the **Base Elements** tab (in the Widget Panel) or add it directly from the widget tree.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/nTmASPts444Z54jaYD1F?embed&show_copy_link=true"
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

## Setting The Video URL

The YoutubePlayer widget uses Youtube's video URL to play the video. When you add the YoutubePlayer to your app, by default the URL is set to play a random video. You can change the Video URL by using the URL property.

To set the Youtube Video URL:

1. Select the **YoutubePlayer** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Youtube Player** section.
3. Find the **URL** property and enter the **URL** for the new video.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/g1fz0AGKH0rs8LTg3WEI?embed&show_copy_link=true"
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


## Control Looping Video

By default, The Youtube video starts playing again after it is finished playing. You can change this behavior using the Loop Video property.

To control looping:

1. Select the **YoutubePlayer** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Youtube Player** section.
3. Find the **Loop Video** property, keep it checked for looping the video or uncheck to stop looping. Click on it.

## Muting The Video

To mute the video:

1. Select the **YoutubePlayer** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Youtube Player** section.
3. Find the **Mute Video** property and click to checkmark it.

## Enable or Disable Video Controls

By default, when the video is being played, different controls are shown such as volume, play-pause, subtitles, fullscreen. You can enable or disable these controls using the *show controls* property.

To enable or disable video controls:

1. Select the **YoutubePlayer** from the widget tree or from the canvas area.
2. Move to the Property Editor and scroll down to the **Youtube Player** section.
3. Find the **Show Controls** property, keep it checked to show controls, or uncheck to hide the controls.
4. (Optional) To disable the fullscreen control, uncheck the **Show Full Screen Control**.

Here's how it looks on enabling and disabling the Controls:

<Tabs>
<TabItem value="1" label="Show Controls Enabled" default>
![show-controls-enabled](../imgs/show-controls-enabled.avif)
</TabItem>
<TabItem value="2" label="Show Controls Disabled">
![show-controls-disabled](../imgs/show-controls-disabled.avif)
</TabItem>
<TabItem value="3" label="Full Screen Control Disabled">
![full-screen-control-disabled](../imgs/full-screen-control-disabled.avif)
</TabItem>
</Tabs>


