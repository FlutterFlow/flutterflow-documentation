---
slug: /concepts/file-handling/clear-delete-media
title: Clear or Delete Media
description: Learn how to add clear and delete file actions into your FlutterFlow app.
sidebar_position: 4
tags:
  - FlutterFlow
  - Concepts
keywords:
  - Media Files
  - Clear Data
  - Delete Data
  - Firebase Storage
  - Supabase Storage
last_verified: 2026-09-02
---
# Clear or Delete Media

The **Clear** and **Delete** **Media** actions provide essential functionalities for managing media files efficiently.

## Clear Uploaded Data [Action]

The **Clear Uploaded Data** action clears the widget-state output associated with an earlier upload action. Choose the matching upload action by its **Name**. Clearing this state does not delete a file that has already been uploaded to Firebase Storage or Supabase Storage.

:::info

For this action to work, the [**Upload or Save Media**](uploading-files.md#upload-or-save-media-action) action must already be added to the actions workflow.

:::

## Delete Data [Action]

The **Delete Data** action permanently removes uploaded media—such as images, videos, and PDF files—from [Firebase Storage](https://firebase.google.com/docs/storage) or [Supabase Storage](https://supabase.com/storage).

Select the correct **Upload Type**, then provide the file's **Public Storage URL** directly or from a variable. The URL normally comes from the corresponding upload action. The authenticated user must also be allowed to delete that object by your Firebase Storage rules or Supabase Storage policies.

:::tip

Always prompt users for confirmation before deleting media files to prevent accidental loss of data.

:::
