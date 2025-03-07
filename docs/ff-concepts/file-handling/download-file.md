---
slug: /concepts/file-handling/download-file
title: Download File
description: Learn how to add download file action into your FlutterFlow app.
tags: [Media Files, Download Data]
sidebar_position: 3
keywords: [Media Files, Download Data, Firebase Storage, Supabase Storage]
---


# Download File

The **Download File** action allows you to enable users to download or save files locally on their devices.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/dhlZ7J8kDFNDypyv5TcO?embed&show_copy_link=true"
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

:::tip[File Download Location]
- **Windows, macOS, Linux, and Web**: Files are saved in the **Downloads** folder by default.
- **iOS**: Files are downloaded in the **Application Documents Directory**.
- **Android**: Files are saved in the application's directory at `Android/data/your.package.name/files/your_file.extension`.

:::

## Download File [Action]

To add a Download File action, select the **Widget** (e.g., button or any interactive widget) where you want users to initiate the file download and set the **Source** to one of the following.

- **From URL**: Use this option for downloading files that are accessible through a direct link and specify the URL of the file that should be downloaded.
- **From File (Bytes)**: Use this option when the file is uploaded to the device using the [Local Upload (Widget State)](uploading-files.md#local-upload-widget-state). You can access the file via ***Widget State > Uploaded Local File***.

Optionally, you can specify a **Filename** to be used when the file is downloaded.

![file-download-action](imgs/file-download-action.avif)
