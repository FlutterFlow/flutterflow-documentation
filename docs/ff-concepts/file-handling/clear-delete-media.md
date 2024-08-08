---
title: Clear or Delete Media
slug: /concepts/file-handling/clear-delete-media
sidebar_position: 6
tags: [Media, Action]
keywords: [Media, Clear Data, Delete Data Firebase Storage, Supabase Storage]
---

# Clear or Delete Media

The Clear and Delete Media actions provide essential functionalities for managing media files efficiently.

## Clear Uploaded Data

By utilizing this action, you can clear the *Uploaded File URL*. This functionality is handy when you want to offer users a straightforward method to remove any uploaded media, such as images or recordings, by providing them with an explicit option to do so.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/kvwTWagvs71aE973iZX1?embed&show_copy_link=true"
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
Before you use this action, you must have the [**Upload Data**](upload-save-media.md) action already added.
:::

### Adding Clear Uploaded Data action

Follow the steps below to add this type of action to any widget:

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **+ Add Action**.
3. Search and select the **Clear Uploaded Data** (under *Utilities*) **> [Name of uploaded data]** (given in the [Upload Data](upload-save-media.md)) action.

![Adding Clear Uploaded Data action](imgs/adding-clear-uploaded-data-action.avif)

## Delete Data

Using this action, you can delete the uploaded media, such as photos, videos, and PDF files, from the [Firebase Storage](https://firebase.google.com/docs/storage).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/fIboVzBCehvRIditcSCp?embed&show_copy_link=true"
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
Before you add this action, ensure you can access the *Uploaded File URL* of the media. Check out the [**upload media**](upload-data.md) section to see how to get it.
:::

### Adding Delete Media action

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **+ Add Action**.
3. Search and select the **Delete Media** (under *Utilities*) action.
4. Inside the **URL** section, provide a valid media URL. This must be either the direct **Uploaded File URL** or a variable that holds the URL.
5. To let users know about the successful deletion of the media, you can [add the snackbar message](../../resources/ui/pages/page-elements.md#snackbar).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ColbgtU1jVqrvKp0OKeB?embed&show_copy_link=true"
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