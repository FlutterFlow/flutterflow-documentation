---
slug: /resources/backend-query/document-from-reference
title: Document From Reference
description: Learn how to retrieve a document from a reference in your FlutterFlow app.
tags: [Document, Reference, Backend Query, Backend Logic, Control Flow, FlutterFlow]
sidebar_position: 3
keywords: [Document, Reference, Backend Query, Backend Logic, Control Flow, FlutterFlow]
---

# Document from Reference

This backend query would help you in retrieving information from a document reference. You will require the **Document from Reference** query if you have passed a document reference to a different page of the app and want to retrieve the actual document information from the reference.

:::info[Prerequisites]
In order to use this backend query, you should have:
* Completed all the steps of 
[Firebase Setup](../../../../../docs/ff-integrations/firebase/connect-to-firebase-setup.md) for 
  your project.
* At least one **Firestore Collection** is defined in your project.
:::

## Defining the Query

Go to your project page on FlutterFlow and follow the steps below to define a **Document from Reference** backend query:

1. Select the **widget** (or page) on which to apply the query.
2. Select **Backend Query** from the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel) (the right menu).
3. Select the **Query Type** as ***Document from Reference***.
4. Choose a **Collection** from the dropdown to which the document reference belongs.
5. Select the **Source** as the record reference name.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/JysXfUz97eaNKO3IIunP?embed&show_copy_link=true"
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

## Using Query Data

The document information retrieved from the backend query can now be set on the widgets present inside. Follow the steps below:

1. Select the **widget** (eg, `Text`) on which you want to set the record data.
2. From the [Properties Panel](../../../../intro/ff-ui/builder.md#properties-panel), select **Set from Variable**.
3. Choose the **Source** as the record variable.
4. Under **Available Options**, select a field name.
5. You can also specify a **Default Value** (it is used if the record field is empty).
6. Click **Save**.

You can follow similar steps for using the record data on the other widgets as well.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/4g6osWEytpPIaVkc3uCZ?embed&show_copy_link=true"
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