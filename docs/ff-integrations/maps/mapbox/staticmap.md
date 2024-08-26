---
slug: /integrations/mapbox/staticmap-widget
title: Static Map Widget
description: Learn how to add and configure the StaticMap (Mapbox) widget in your FlutterFlow app.
tags: [Widget, Integration]
sidebar_position: 2
keywords: [StaticMap, Mapbox, Widget, Integration]
---

# Static Map Widget
The StaticMap widget shows an image of the map from the [mapbox](https://www.mapbox.com/). This widget is a good choice when you want to display a location on a map without interactivity or controls such as zoom-in, zoom-out, and map scrolling.

:::tip
To display a map with interactivity or controls, use the [**GoogleMaps**](../google-maps/google-maps-widget.md) widget.
:::


## Adding StaticMap widget

Here's an example of how you can add the StaticMap widget to your project:

1. First, drag the **StaticMap** widget from the **Base Elements** tab (in the Widget Panel) or add it directly from the widget tree.
2. You'll need the Mapbox API key to render the map image. Get the API key by creating the [Mapbox account](https://account.mapbox.com/auth/signup/) and then return to FlutterFlow, move to the properties panel, scroll down to the Static Map section and enter the key into the **Mapbox API Key** input box.
3. To display your location on the map, enter the **Latitude** and **Longitude** values inside the **Lat** and **Lng** input boxes.

:::tip
To get the lat long values for any location, open to Google Map, right-click on any place and click on the first item from the list. It should look like this `19.080045795863743`, `72.8794235725136`.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/z1kDG18cXxXzIiddhQFP?embed&show_copy_link=true"
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

You can customize the appearance and behavior of the widget using the various properties available under the [properties panel](../../../intro/ff-ui/builder.md#navigation-menu).

### Changing the map style

Changing the map style allows you to change the overall theme and type of the map, such as Light, Dark, Street, and Satellite.

To change the map style:

1. Select **StaticMap** from the widget tree or the canvas area.
2. Move to the properties panel and scroll down to the **Static Map** section.
3. Find the **Map Style** property and choose among the *Light*, *Dark*, *Outdoor*, *Street*, *Satellite*, and *Detailed* *Satellite*.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/LYxQn4Fx5msgR68Di4cr?embed&show_copy_link=true"
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

### Set zoom, tilt, and rotation

You can define the zoom level, adjust the map tilting and rotate the map as per your requirement.

To set the zoom, tilt, and rotation value for the map:

1. Select **StaticMap** from the widget tree or the canvas area.
2. Move to the properties panel and scroll down to the **Static Map** section.
3. Find the **Map Zoom** property and set the value that is good enough to highlight the place. The value starts from 0 (which is a full zoom-out). To zoom in, set the higher value.
4. Find the **Map Tilt** property and enter the value to display the map in the sloping position.
5. Find the **Map Rotation** property and enter the value to rotate the map.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/e2jMy8ZdRYCmmmdEIx2C?embed&show_copy_link=true"
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

### Customizing marker

By default, the marker is invisible on the map. You can make it visible by setting the marker color. You can also change the marker icon/image from the URL link.

To customize the marker:

1. Select **StaticMap** from the widget tree or the canvas area.
2. Move to the properties panel and scroll down to the **Static Map** section.
3. To show the marker, find the **Map Marker Color** property, click on the box next to **Unset**, select the color, and then click **Use Color** or click on **Unset** and enter a Hex Code directly.
4. To display the custom marker image/icon, enter the URL into the **Map Marker URL** input box.

This widget does not resize the marker image from the URL link. Make sure you provide the image with the appropriate size.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/05eD7crtpMH3QiD2ibk8?embed&show_copy_link=true"
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

### Caching map image

Enabling the cache will store the map image and display it when the internet is unavailable.

To cache the map image:

1. Select **StaticMap** from the widget tree or the canvas area.
2. Move to the properties panel and scroll down to the **Static Map Image** section.
3. Find the **Cache** toggle and turn it on.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/9xLVUrfd9LNufOxX5EfI?embed&show_copy_link=true"
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

### Changing the box fit

Changing the box fit value allows you to control how the map should display inside the StaticMap widget. Various options under the Box Fit property help you scale (grow or shrink in size) the map image.

To change the box fit value:

1. Select the **StaticMap** from the widget tree or the canvas area.
2. Move to the properties panel (on the right side of your screen) and scroll down to the **Static Map Image** section.
3. Find the **Box Fit** dropdown, and try changing it to the other values.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/I9UHGeEUeFKMZiSSP70p?embed&show_copy_link=true"
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