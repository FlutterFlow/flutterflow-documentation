---
slug: /integrations/mux
title: Mux Livestream
description: Learn how to get started with MuxBroadcast in your FlutterFlow app for live video broadcasting.
tags: [MuxBroadcast, Integration, Setup]
sidebar_position: 2
keywords: [FlutterFlow, MuxBroadcast, Integration, Setup, Mux, LiveStream]
---

# Mux Livestream

Mux Livestream allows you to integrate live video streaming capabilities directly into your FlutterFlow app. It leverages Mux’s powerful streaming API, providing real-time broadcasting features. For a deeper understanding, check out [how live streaming works](https://blog.flutterflow.io/flutter-mux-live-streaming/#how-does-live-streaming-work).

:::tip[Possible use cases]

- **Live Events**: Stream conferences, workshops, or meetups.
- **Educational Apps**: Conduct live classes, webinars, or tutorials.
- **Social Platforms**: Allow users to broadcast and share real-time video content.
- **Customer Support**: Provide interactive support sessions via live video streaming.

:::

## Setting Up Mux Integration

To get started, go to **Settings and Integrations > Integrations > Mux Livestream** in FlutterFlow and enable **Mux Broadcast**.

Then, create a Mux account and go to **Settings > API Access Tokens**. Click **Generate new token**, choose an environment (Development or Production), check **Mux Video** with **Write** access, name the token, and generate it. Copy the **Access Token ID** and **Secret Key**, paste them into FlutterFlow, and click **Deploy**.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/RF81sxAhJB2Ot4ZHSx4l?embed&show_copy_link=true"
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

## Adding MuxBroadcast Widget

To create a live stream, start by adding the **MuxBroadcast** widget to your page. Navigate to the page where you want the livestream to appear, then drag and drop the widget onto the canvas. After placing it, configure its properties using the options available in the right-side panel.

The MuxBroadcast widget comes with three key properties to control the live stream:

- **Show Streaming View**: By default, this option is disabled, meaning the widget only displays the starting interface (camera preview and "Start Stream" button). Enabling this option shows the live streaming UI on the canvas during design time, which helps with layout and styling previews.
- **Broadcast Latency**: Choose between **Standard**, **Reduced**, and **Low** latency modes. Lower latency provides faster interaction but may reduce video quality or reliability depending on the network.
- **Broadcast Audio Channel**: Select **Stereo** or **Mono** audio. Stereo provides richer sound with left and right audio separation, while Mono offers broader device compatibility and lower bandwidth usage.

![muxbroadcast-widget.avif](imgs/muxbroadcast-widget.avif)

You can also customize the **MuxBroadcast** widget to match your app's design using various styling properties. These include:

- **Start Button Style, Text, and Icon:** Adjust the appearance, label, and icon of the broadcast start button.
- **Stop Button:** Customize how the stop button looks.
- **Flip Camera Button:** Modify the button used to switch between front and rear cameras.
- **Live Text Style:** Change the appearance of the "LIVE" text.
- **Live Container & Icon:** Style the container and icon shown during live broadcast.
- **Duration Text Style:** Customize how the elapsed time is displayed.
- **Duration Container:** Style the container holding the duration display.

## Start and Stop Livestream

You can manage livestreaming using the built-in action triggers available on the **MuxBroadcast** widget: **On Broadcast Start** and **On Broadcast Stop**. These allow you to trigger workflows when a stream begins or ends.

![streaming-action-triggers.avif](imgs/streaming-action-triggers.avif)

### On Broadcast Start [Action Trigger]

The actions under this trigger execute when the user clicks the **Start Stream** button. From here, you can access the livestream URL via **Widget State → Mux Playback URL** and perform tasks such as creating a new database record to indicate the livestream has started.

![on-broadcast-start.avif](imgs/on-broadcast-start.avif)

### On Broadcast Stop [Action Trigger]

The actions under this trigger execute when the user stops the stream. You can use this trigger to update your database, such as setting a livestream's `is_live` status to `false`, saving the end time, or navigating away from the stream page.

![on-broadcast-stop.avif](imgs/on-broadcast-stop.avif)

## View Livestream

When a livestream is active, you can access the broadcast instantly via the **Mux Playback URL** provided by the **MuxBroadcast** widget. If the livestream has already ended, additional steps are required to retrieve the archived playback URL and enable playback of the recorded session.

### Viewing Active Livestream

Once your livestream is active, viewers can watch it in real-time using the **Mux Playback URL**. This URL can be passed to a dedicated page (for example, **ViewBroadcast**) to stream the live session.

To display the livestream:

1. Navigate to your desired list or overview page where livestreams are listed.
2. When a viewer taps on a live broadcast card (e.g., from a `ListView`), navigate to the **ViewBroadcast** page and pass the **Mux Playback URL** as a page parameter.
3. Inside the **ViewBroadcast** page, the **Mux Playback URL** can then be used in a [**VideoPlayer**](../../ff-concepts/file-handling/displaying-media.md#videoplayer) widget to stream the live video.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/l1y5UxJYN4tWQBesZDUO?embed&show_copy_link=true"
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

### Viewing Past Livestream

When a livestream ends, its original **Mux Playback URL** becomes invalid. To replay an ended session, you need to fetch the archived asset's playback URL that was automatically created during the livestream.

To achieve this, you will need to retrieve the live stream ID from its playback ID, then get the associated asset's playback ID from the livestream's recent assets.

:::tip
You'll need to write a [**custom code expression**](../../resources/control-flow/functions/utility-functions.md#custom-code-expression) or [**custom function**](../../ff-concepts/adding-customization/custom-functions.md) to extract the playback ID from the current Mux Playback URL (e.g., from `https://stream.mux.com/iSHXmiVyFshIPgeZf2F78OrvOGnEQd02Api00ipWRwWaQ.m3u8` extract `iSHXmiVyFshIPgeZf2F78OrvOGnEQd02Api00ipWRwWaQ`, which is a playback ID of a livestream) and then reconstruct the new playback URL using the asset's playback ID in the same format.
:::

![get-past-stream-id.avif](imgs/get-past-stream-id.avif)

The flow involves using three Mux APIs in sequence:

- [**GET /video/v1/playback-ids/`{PLAYBACK_ID}`**](https://www.mux.com/docs/api-reference/video/playback-id/get-asset-or-livestream-id): Gives the livestream ID from the livestream playback ID.
- [**GET /video/v1/live-streams/`{LIVE_STREAM_ID}`**](https://www.mux.com/docs/api-reference/video/live-streams/get-live-stream): Retrieves the livestream details including `recent_asset_ids` array. Extract the Asset ID from this api response.
- [**GET /video/v1/assets/`{ASSET_ID}`**](https://www.mux.com/docs/api-reference/video/assets/get-asset): Fetches the asset details to get its playback ID from the `playback_ids` array.

Now, use conditional logic to check the livestream status and pass the appropriate playback URL. For example, if the broadcast is live, use the current livestream playback URL directly. If the livestream has ended, call the APIs in sequence to get the asset's playback ID and construct the archived stream's playback URL.