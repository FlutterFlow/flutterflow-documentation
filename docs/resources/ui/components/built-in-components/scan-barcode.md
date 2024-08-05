---
slug: scan-barcode
title: Scan Barcode / QR code
tags: [Layout Elements, Components]
keywords: [Scan Barcode, Scan QR Code, Layout Element, Component, Action]
description: Learn how to add scan barcode and QR code feature in your FlutterFlow app.
---

# Scan Barcode / QR code

Using this Action, you open a barcode or QR code interface and scan a code using the device camera.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/tI9UOnpYhVyOrvxhmAuo?embed&show_copy_link=true"
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

## Adding Scan [Action]

Go to your project page on FlutterFlow and follow the steps below to define a Scan Action to any widget.

1. Select **Actions** from the Properties panel (the right menu)
2. Click **+ Add Action** button
3. Choose a gesture from the dropdown among ***On Tap**, **On Double Tap**, or* **On Long Press**
4. Select the **Action Type** as ***Scan Barcode/QR code**.*
5. If you check the **Barcode Mode** checkbox then the UI will look like a barcode scanner. Otherwise, the UI will be like a QR code scanner.
6. **Cancel button text** would be ***Cancel*** by default, but you can specify any other text if you want.
7. In the **Output Variable Name** field, you can specify the name of the variable where the scanned text would be saved and then you can access it via the **Set from Variable menu > Action Outputs > [Action Output Variable Name]**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Uk6JLbnrMDFFAACn5No6?embed&show_copy_link=true"
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


