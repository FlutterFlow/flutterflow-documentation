---
title: MediaDisplay
slug: media-display
tags: [Components, Base Elements]
keywords: [Media, Image, Video, Widget, Base Elements]
description: Learn how to add MediaDisplay widget in your FlutterFlow app.
---
# MediaDisplay
The **MediaDisplay** widget in FlutterFlow automatically detects the type of media fetched from a URL and adjusts the widget accordingly. For instance, if the URL returns an image, the widget will behave as an Image widget.

This versatility allows you to easily present various types of media within your app. For example, it can be integrated into scrollable widgets like [ListView](../../widgets/composing-widgets/list-grid.md#listview-widget) for displaying activity feeds or [GridView](../../widgets/composing-widgets/list-grid.md#gridview-widget) for presenting photos and videos together.

## Adding MediaDisplay widget

Let's build an example of using the MediaDisplay widget inside the ListView and display the photos and videos from the Firestore database.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/cTIAYlFFDrAl5YV3KDtn?embed&show_copy_link=true"
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

The steps to add and use the MediaDisplay are as follows:

1. Add the **MediaDisplay** widget from the **Base Elements** tab and drop it inside the **ListView**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/UPaIcU5AojvqG0MTP374?embed&show_copy_link=true"
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

2. Create a collection and add data with some image and video URLs.
3. Query a collection to get a list of documents from the Firestore collection and show them in the ListView.
4. To display media inside the widget, move to the properties panel > **Media Path** > Set from Variable menu. Select the source as **[collection_name] Document** and select the field that holds the URL path from the **Available Options** list.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/1IREtjiFSv5HyQbjhsOo?embed&show_copy_link=true"
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

## Customizing

You can customize the appearance and behavior of the widget using the various properties available under the properties panel.

### Customizing Image

To customize the widget when image is displayed, refer [here](../../widgets/basic-widgets/image.md#common-image-properties).

### Customizing Video

To customize the widget when video is displayed, refer [here](../../../../ff-concepts/file-handling/displaying-media.md#videoplayer).