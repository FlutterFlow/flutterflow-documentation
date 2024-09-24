---
slug: signature
title: Signature
tags: [Form Elements, Components]
keywords: [Signature, Form Element, Component, Widget]
description: Learn how to add Signature widget in your FlutterFlow app.
---

# Signature

The signature widget allows you to capture a signature. This widget tracks your finger or mouse pointer on a screen and draws the line accordingly on a signature pad.

You can use this widget to get the user consent on an agreement or contract in digital form.

## Adding Signature widget

Here's an example of how you can add the Signature widget to your project:

1. First, drag the **Signature** widget from the **Form Elements** tab (in the Widget Panel) or add it directly from the widget tree.
2. Move to the properties panel, scroll down to the **Signature** section and adjust the **width** and **height** of the widget.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/4huLa1RkIgZCItrdOyKG?embed&show_copy_link=true"
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

## Saving signature to Firestore document

You might be using the Firestore database to store your app data in the collection-document model. Let's see how you can save the signature into the Firestore document.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/vjJ0MSgwTU633CviGIhq?embed&show_copy_link=true"
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

The drawn signature is first uploaded and stored as an image into the [Firebase Storage](https://firebase.google.com/docs/storage) using the *Upload Signature* action. This returns the uploaded URL, which can be stored inside the Firestore document for later access.


:::info[Prerequisites]
Ensure you incorporate all the mentioned prerequisites.
- Be familiar with [**Structuring the Firebase Database**](../../../../ff-integrations/database/cloud-firestore/getting-started.md#structuring-the-database).
- Complete all steps in the [**Firebase Setup**](../../../../ff-integrations/firebase/connect-to-firebase-setup.md) section for your project.
- [**Firebase Authentication**](../../../../ff-integrations/authentication/firebase-auth/auth-initial-setup.md) must be properly configured.
- [**Firebase Storage**](../../../../ff-integrations/storage/firebase-storage/storage-rules.md) rules must be deployed.
:::

Saving signature to Firestore document comprises the following steps:

### 1. Create Image Path field
Create a Firestore Collection with the schema that contains a field with an Image Path data type.
![image-path-field](imgs/image-path-field.avif)

### 2. Upload signature [Action]

Using this action, you can upload the drawn signature to [Firebase Storage](https://firebase.google.com/docs/storage). This action returns the Uploaded URL, which you can use to show its content or store in a database to access it later.


Follow the steps below to define the Action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to define the action.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
    1. Click on the **+ Add Action**.
    2. On the right side, search and select **Upload Signature**.
    3. Set the **Signature to Upload** to the name of the signature widget. (i.e., Signature by default).
3. Click **Close**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/BwGSm5VOzeXSNdI9Wu65?embed&show_copy_link=true"
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

### 3. Passing signature image URL into document field

The *Upload Signature* action (added in the previous step) returns the URL of the signature image. You can use it to pass into the document field by adding the action that creates or updates the document, such as [Create Document](../../../../ff-integrations/database/cloud-firestore/firestore-actions.md#create-document-action) or [Update Document](../../../../ff-integrations/database/cloud-firestore/firestore-actions.md#update-document-action).

Here are the steps in detail:

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
    1. Select the already added **Upload Signature Action**, click on the **+** button at the bottom of the box and select **Add Action**.
    2. On the right side, search and select **Create Document** or **Update Document**.
    3. If you select **Create Document**.
        1. Set the **Collection** to your collection name (e.g., todo).
    4. If you select **Update Document**, set the document reference to update.
        1. If you have access to the document, set the **Source** to the **actual document** and **Available Options** to **reference**.
    5. Under the **Set Fields** section, click on the **+ Field** button.
    6. Click on the Field name until you see the fields that store the slider value.
        1. Set the **Value Source** to **From Variable**.
        2. Click on the **UNSET** (this will open a popup on the left side).
        3. Select the **Widget State** and then select **Uploaded Signature URL**.
    7. **Close** the action flow editor.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/HaeRTfVwkdJR0tG85A5w?embed&show_copy_link=true"
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

## Clear signature [Action]

You can allow users to delete the signature if they make a mistake or want to get the perfect signature. You can do this by adding the *Clear Signature* action.

Follow the steps below to define the Action to any widget.

1. Select the **Widget** (e.g., IconButton with canceling or delete icon) on which you want to define the action.
2. Select **Actions** from the Properties panel (the right menu), and click **+ Add Action**.
    1. Search and select **Clear Signatures**.
    2. Select the **Signature Fields** from the list below. This helps when you have multiple signature widgets on a page and want to clear only selected one(s).
3. Click **Close**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/I4OJh5NBzqn1iBFD30uU?embed&show_copy_link=true"
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

You can customize the appearance and behavior of this widget using the various properties available under the properties panel.

### Customizing pen

To change the pen color and stroke width:

1. Select the **Signature** widget from the widget tree or the canvas area.
2. Move to the properties panel, and scroll down to the **Signature** section.
3. Find the **Pen Color** property and click on the box next to the already selected color, select the color, then click **Use Color** or click on an already selected color and enter a Hex Code directly.
4. Find the **Pen Stroke Width** property and enter the value. The higher value increases the thickness of the stroke.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/0BgwEMjdDmtyjOIhbjqD?embed&show_copy_link=true"
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