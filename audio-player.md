---
title: AudioPlayer
slug: /concepts/file-handling/audio-player
sidebar_position: 0
tags: [Media, Widget]
keywords: [Media, AudioPlayer, Play Audio File]
---

# AudioPlayer

The AudioPlayer widget plays audio from uploaded assets or the URL link.

## Adding AudioPlayer Widget

Here's how you can add the AudioPlayer widget to your project:

1. Drag the **AudioPlayer** widget from the **Base Elements** tab (in the Widget Panel) or add it directly from the widget tree.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Audio Options** section.
3. Find the **Title** property and enter the value to display the audio title. You can also set this from the variable, such as the app state variable, API response variable, Firestore document, and more. To do so, click on the **Set from Variable**.
4. Find the **Path** property and enter the **URL** for the new audio file.
5. By default, the audio stops when you move to another page using the **Pause on Forward Navigation** property.
6. When an app goes in the background while the audio player is running, you can control the audio player's behavior using the **Play in Background** property, which has following options:
    1. **Enabled**: This keeps the audio player running.
    2. **Disabled, restore on foreground**: This pauses the audio player and starts playing again as soon as the app is visible.
    3. **Disabled, pause**: This stops the audio player as soon as the app goes in the background.

:::info
By default, every AudioPlayer widget added to the project will play a sample audio file from a network URL.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/38c64816aac64930ac4f06d3876a1670?sid=ea8345b2-7d01-4b80-b901-a2348d5d46ce"
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

## Use Audio from assets

By default, the widget is set to play audio from the internet. However, you can change this to use the audio uploaded directly to your app.

Here's how you can change the audio type:

1. Select the **AudioPlayer** widget from the widget tree or the canvas area.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Audio Options** section.
3. Find the **Audio Type** dropdown and select **Asset**.
4. Now, find the **Asset Audio** property, click the **Upload Audio** button, select the audio and upload it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/X5tUcGCnQC7xA8jTQlGJ?embed&show_copy_link=true"
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

:::info
Once you upload the audio, you can use it throughout your app. You can manage your uploaded audio files with the Project Media Asset Manager.
:::

To use the uploaded audio:

1. Select the **AudioPlayer** widget from the widget tree or the canvas area.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Audio Options** section.
3. Find the **Audio Type** dropdown and select **Asset**.
4. Click on **No asset select** (inside the dropdown) and choose the audio.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Tq8hYJxP6ZH2HAMzbeMA?embed&show_copy_link=true"
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


## Customization

You can customize the appearance of this widget using the various properties available under the properties panel.

### Changing colors

To change the audio tile colors:

1. Select the **AudioPlayer** widget from the widget tree or the canvas area.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Audio Player Properties** section.
3. To change the background color of the tile, Find the **Fill Color** property click on the box next to the already selected color, select the color, and then click **Use Color** or click on an already selected color and enter a Hex Code directly. You can also choose the color by clicking the **Palette** and **Simple** button.
4. Similarly, you can change the **Playback Button Color** (play and pause button) and **Active Track Color** (the bar color that shows the progress of the currently playing audio).

### Changing elevation

To change the elevation (depth or Z-axis) of the audio tile:

1. Select the **AudioPlayer** widget from the widget tree or the canvas area.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Audio Player Properties** section.
3. Find the **Elevation** input box and enter the value to see the drop shadow effect below the badge. The Higher value sets the bigger size of the shadow, whereas the 0 value removes the shadow.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/fL5C3loHQhty5O1STFIo?embed&show_copy_link=true"
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

### Styling title text

To change the title text style:

1. Select the **AudioPlayer** widget from the widget tree or the canvas area.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Title Text Style** section.
3. Find the **Theme Text Style** property and change the style as per instructions [here](../../../resources/ui/widgets/basic-widgets/text.md#common-text-styling-properties).


### Styling playback duration text

To change the playback duration text style:

1. Select the **AudioPlayer** widget from the widget tree or the canvas area.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Playback Duration Text Style** section.
3. Find the **Theme Text Style** property and change the style as per instructions [here](../../../resources/ui/widgets/basic-widgets/text.md#common-text-styling-properties).