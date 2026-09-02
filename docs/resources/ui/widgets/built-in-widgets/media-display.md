---
title: MediaDisplay
slug: media-display
tags:
  - FlutterFlow
  - Resources
  - UI
keywords:
  - Media
  - Image
  - Video
  - Widget
  - Base Elements
description: Learn how to add MediaDisplay widget in your FlutterFlow app.
last_verified: 2026-09-02
---
# Media Display
The **MediaDisplay** widget chooses an image or video presentation from a media URL. Runtime detection uses the URL's file extension: MP4 and MPEG video paths use the video player, while other paths use the image presentation. Query parameters do not affect the extension check.

:::warning
MediaDisplay does not inspect the downloaded response body or its HTTP `Content-Type`. Use a direct URL with a recognizable file extension. Extensionless URLs, unsupported video formats, and redirect URLs that hide the extension may be treated as images.
:::

This versatility allows you to easily present various types of media within your app. For example, it can be integrated into scrollable widgets like [ListView](../../widgets/composing-widgets/list-grid.md#listview-widget) for displaying activity feeds or [GridView](../../widgets/composing-widgets/list-grid.md#gridview-widget) for presenting photos and videos together.

## Adding MediaDisplay widget

Let's build an example of using the MediaDisplay widget inside the ListView and display the photos and videos from the Firestore database.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/cTIAYlFFDrAl5YV3KDtn?embed&show_copy_link=true" title="MediaDisplay interactive tutorial"
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

The steps to add and use the MediaDisplay are as follows:

1. Add the **MediaDisplay** widget from the **Base Elements** tab and drop it inside the **ListView**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/UPaIcU5AojvqG0MTP374?embed&show_copy_link=true" title="MediaDisplay interactive tutorial"
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

2. Create a collection and add data with some image and video URLs.
3. Query a collection to get a list of documents from the Firestore collection and show them in the ListView.
4. In the Properties panel, select **Media Path > Set from Variable**. Choose **[collection_name] Document**, then select the field containing the direct media URL. MediaDisplay requires **Media Path** to come from a variable.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/1IREtjiFSv5HyQbjhsOo?embed&show_copy_link=true" title="MediaDisplay interactive tutorial"
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

## Customizing

You can customize the appearance and behavior of the widget using the various properties available under the properties panel.

**UI Builder View** switches the canvas preview between **Image** and **Video Player** so you can edit the relevant settings. It does not override runtime detection. Image settings include size, border radius, fit, and caching. Video settings include size, aspect ratio, autoplay, looping, controls, full screen, playback speed, and pause-on-forward-navigation behavior.

### Customizing Image

To customize the widget when image is displayed, refer [here](../../widgets/basic-widgets/image.md#common-image-properties).

### Customizing Video

To customize the widget when video is displayed, refer [here](../../../../ff-concepts/file-handling/displaying-media.md#videoplayer).

## Verify the result

Run the page with at least one direct image URL and one direct `.mp4` or MPEG URL. Confirm that each item uses the expected presentation and that video controls behave as configured. If a video renders as a broken image, first check the final URL's extension and accessibility from the target device.
