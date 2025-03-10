---
slug: /concepts/file-handling/clear-delete-media
title: Clear or Delete Media
description: Learn how to add clear and delete file actions into your FlutterFlow app.
sidebar_position: 4
tags: [Media Files, Clear Delete Data]
keywords: [Media Files, Clear Data, Delete Data, Firebase Storage, Supabase Storage]
---

# Clear or Delete Media

The **Clear** and **Delete** **Media** actions provide essential functionalities for managing media files efficiently.

## Clear Uploaded Data [Action]

When users upload media files, these files are first stored in a local state variable, i.e., *Uploaded File URL* for immediate access and display. This action is helpful when you want to offer users a straightforward method to remove any uploaded media, such as images or recordings.

:::info

For this action to work, the [**Upload or Save Media**](uploading-files.md#upload-or-save-media-action) action must already be added to the actions workflow.

:::

## Delete Data [Action]

The **Delete Data** action permanently removes uploaded media—such as images, videos, and PDF files—from external storage platforms like [Firebase Storage](https://firebase.google.com/docs/storage) and [Supabase Storage](https://supabase.com/storage).

Inside the **URL** section, provide a valid media URL. This must be either the direct **Uploaded File URL** or a variable that holds the URL.

:::tip

Always prompt users for confirmation before deleting media files to prevent accidental loss of data.

:::