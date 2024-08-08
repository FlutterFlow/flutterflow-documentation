---
title: PdfViewer
slug: /concepts/file-handling/pdf-viewer
sidebar_position: 1
tags: [Media, Widget]
keywords: [Media, PdfViewer, Display PDF File]
---
# PdfViewer
The PdfViewer widget allows you to show the PDF file from uploaded assets or the URL link.

## Adding PdfViewer Widget

Here's how you can add the PdfViewer widget to your project:

1. Drag the **PdfViewer** widget from the **Base Elements** tab (in the Widget Panel) or add it directly from the widget tree.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **PDF Viewer** section.
3. Find the **Network Path** property and enter the **URL** for the pdf file.

:::info
Every PdfViewer widget added to the project shows a default PDf from an online source.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/zHqODKoDIJNa7XlaoPBo?embed&show_copy_link=true"
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

## Changing PDF Source

By default, the widget is set to show the PDF file from Network. However, you can change this to use the PDF file uploaded directly to your app.

Here's how you can change the PDF source:

1. Select the **PdfViewer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **PDF Viewer** section.
3. Find the **PDF Source** dropdown. Change it to **Asset**.
4. Now, find the **PDF Asset** property, Click on the **Upload Pdf** button, select the pdf file and upload it.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/jcPtu9MVPreMM032Ydfm?embed&show_copy_link=true"
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

:::tip
Once you upload the pdf file, you can use it throughout your app. You can manage your uploaded pdfs with the Project Media/Asset Manager.
:::

To use an uploaded pdf:

1. Select the **PdfViewer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **PDF Viewer** section.
3. Find the **PDF Source** dropdown. Change it to **Asset**.
4. Click on **No asset selected** (inside the dropdown) and choose the pdf file.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/gW1fpZP0QILlMJ7DE9pP?embed&show_copy_link=true"
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

You can customize the appearance and behavior of this widget using the various properties available under the properties panel.

### Changing Scroll Direction

By default, the PdfViewer allows you to scroll to the next pages in the vertical direction. However, you can change this behavior to allow scrolling in the horizontal direction.

To change the scroll direction:

1. Select the **PdfViewer** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **PDF Viewer** section.
3. Enable the **Horizontal Scroll**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/vS9KPa9hRcBKL6UAnZGd?embed&show_copy_link=true"
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
