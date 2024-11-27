---

title: Launch Map
slug: /integrations/maps/launch-map
description: Learn how to open Map app installed on your device from your FlutterFlow app.
sidebar_position: 2
tags: [Maps, Action]
keywords: [FlutterFlow, Launch Maps, Action,]
---
# Launch Map
Using this action, you can open the Map app installed on your device. For example, you could add this action on an event page to let users know more about the place inside the map apps like Google Maps, Apple Maps, and Waze app.

You can specify the Lat Long details or full address of any place to access the additional information such as directions, call details, timings, photos, street view, reviews, and more.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/g8KeY6nO6mdwNP7wUdJA?embed&show_copy_link=true"
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

## Types of Map apps

This action lets you specify the type of map app to open. If it's not installed, the default map app of the platform will be used. For example, opening the Google Maps on iOS devices. If not installed, it will open the default Apple Maps app.

You can launch the following types of maps apps:

1. **System Default**: Opens the default map app. That is opening Google Maps on Android devices and Apple Maps on iOS devices.
2. **Google Maps**: Google's default map app on Android devices.
3. **Apple Maps**: The default map app on iOS devices from Apple.
4. [**Waze**](https://play.google.com/store/apps/details?id=com.waze): App that tells you about real-time traffic, police, crashes, and more.

### Adding Launch Map [Action]

Go to your project page on FlutterFlow and follow the steps below to define the Action to any widget.

1. Select the **Widget** (e.g. Location icon, Address text) on which you want to define the action.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
    1. Click on the **+ Add Action**.
    2. On the right side, search and select the **Launch Map** action.
    3. Set the **Preferred Map Type** among the **System Default**, **Google Maps**, **Apple Maps,** and **Waze**.
    4. To open the map app using lat long:
        1. Set the **Place Type** to **Location**.
        2. Inside the **Location** section, enter the values in the **Latitude** and **Longitude** input boxes. You can also specify these values from a variable, such as an app state variable or a variable from an API response by clicking on the **Set from Variable**.
        3. (Optional) To set the place name (which will be displayed when the map app is opened), Inside the **Title** section, enter the place name in the **Value** input box. To set it from the variable, click on the **Set from Variable**.
    5. To open the map app using address:
        1. Set the **Place Type** to **Address**.
        2. Inside the **Address** section, enter the address into the **Value** input box. You can also specify the address from a variable, such as an app state variable, or a variable from an API response by clicking on the **Set from Variable**.
        3. (Optional) To set the place name (which will be displayed when the map app is opened), Inside the **Title** section, enter the place name in the **Value** input box. To set it from the variable, click on the **Set from Variable**.
    6. Click **Close**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/QYMvBgTlTwlYUVmh24L6?embed&show_copy_link=true"
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