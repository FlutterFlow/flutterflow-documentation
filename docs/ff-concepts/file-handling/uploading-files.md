---
slug: /concepts/file-handling/uploading-files
title: Uploading Files
description: Learn how to upload media in FlutterFlow.
tags: [Media Files, Upload Data]
sidebar_position: 1
keywords: [Media Files, Upload Data, Media Management, Firebase, Supabase, Upload Actions]
---

# Uploading Files

Uploading files is an essential feature for many apps, enabling users to share images, videos, documents, and more. FlutterFlow offers flexible actions to handle file uploads, whether you’re using Firebase, Supabase, or your own backend server. You can customize the upload process to suit your app’s needs, such as resizing media, setting quality, or temporarily storing files locally before uploading.

This guide covers the available upload methods, configuration options, and workflows, including how to save media locally and upload it via an API.

## Types of Media Uploads

FlutterFlow provides three methods for uploading media files, each catering to different needs:

### Firebase

Media files can be uploaded directly to **Firebase Storage**, a reliable cloud-based solution. Once the upload is complete, you can use the **Widget State > Uploaded File URL** to preview the media or store the file URL for later use.

![upload-type-firebase.avif](imgs/upload-type-firebase.avif)

### Supabase

You can upload media to a **Supabase bucket** at a specified location. After the upload, the file's URL is accessible via **Widget State > Uploaded File URL**, enabling you to preview the media or save the URL for later use in your app.

![upload-type-supabase.avif](imgs/upload-type-supabase.avif)

### Local Upload (Widget State)

This method saves your media to the device first. You can access it via **Widget State > Uploaded Local File**. Then, make an API call to transfer the file to your server. **Ensure** that this API call returns the URL of the uploaded file, which you can later use to preview the media.

![upload-type-local-and-api.avif](imgs/upload-type-local-and-api.avif)

## Upload or Save Media [Action]

This action allows you to upload a photo or video to your app. You can choose to store the file on [Firebase](#firebase), [Supabase](#supabase) storage, or your own server using an API. Once uploaded, you can access the file through its generated URL. This URL can be used to display the content immediately or store it in a database for future retrieval.

:::info[Prerequisites for Firebase]
1. **Firebase** should be connected to your project. Follow the instructions on [**this page**](../../ff-integrations/database/cloud-firestore/getting-started.md) for integrating Firebase with FlutterFlow.
2. **Firebase Authentication** must be properly configured. Check out [**this page**](../../ff-integrations/authentication/firebase-auth/auth-initial-setup.md) for setting up authentication.
3. **Firebase Storage** must be set up and properly configured. It takes just a second! Follow the instructions on [**this page**](../../ff-integrations/storage/firebase-storage/storage-rules.md).
4. At least one **Firebase Collection** should be configured for the project so that you can store the generated URL.
:::


:::info[Prerequisites for Supabase]
1. Make sure to [**integrate Supabase**](../../ff-integrations/supabase/supabase-setup.md) into your app.
2. [**Create a storage bucket**](https://supabase.com/docs/guides/storage/quickstart#create-a-bucket) in Supabase.
   **Tip**: To let anyone download the uploaded media, you can enable the 'Public bucket.'

<p></p>
![supabase-storage-bucket.png](imgs/supabase-storage-bucket.png)
<p></p>

3. Apply additional [**security rules**](https://supabase.com/docs/guides/storage/quickstart#add-security-rules) which determine who can access the bucket. **Tip**: If you are uploading to a folder structure like this '*pics/uploads*,' here is how you can add a policy that allows only authenticated users to upload their profile picture.

<div class="video-container"><iframe src="https://www.loom.
com/embed/963ac14f47de43a6b1d77ec1fd2b7228?sid=bced0a6b-4d0c-4b56-9886-5845319b2f9e" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

:::

To create an upload media workflow, add the **Upload/Save Media** action to the widget (e.g., a button or any interactive element) where you want users to initiate the file upload. Next, set the [**Upload Type**](#types-of-media-uploads). In the **Media Type/Source** section, specify the type of media to upload: photo, video, or both. Then, use the **Media Source** dropdown to choose the source of the media:

- **Camera**: Directly capture media using the device's camera.
- **Gallery**: Select existing media from the device's gallery.
- **Either Camera or Gallery**: Allows users to choose the source via a bottom sheet, letting them select either the camera or the gallery as the media source.

Once the media is uploaded, see how to display it on a widget in the [next section](displaying-media.md).

:::info

When you set **Upload Type** to:

- **Firebase**: You must [**deploy the storage rules**](../../ff-integrations/storage/firebase-storage/storage-rules.md).
- **Supabase**: Provide the **Bucket Name** and set the **Uploaded Folder Path** (e.g., pics/uploaded). This is the path where the media will be uploaded.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Pu6LihtPxFTaT5tI3srn?embed&show_copy_link=true"
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

### Configure Upload or Save Media [Action]

The Upload Media action offers various settings to control how media files are uploaded, resized, and processed in your app. Below is a breakdown of all the available properties.

![configure-upload-media-action.avif](imgs/configure-upload-media-action.avif)

- **Max Width** and **Max Height**: If you are uploading a photo, you can set a maximum width and height using these properties. This resizes the image while maintaining its original aspect ratio.
- **Image Quality**: Control the image quality by adjusting the slider or entering a value between 0 and 100, where 100 retains the original quality.
- **Include Media Dimensions**: Enable this option to retrieve the dimensions (width and height) of the uploaded media. Keep in mind that this operation is resource-intensive, so enable it only if necessary.
- **Include Blur Hash**: Automatically generates a BlurHash for the uploaded image, allowing you to display a blurred placeholder while the full image loads. For more information, refer to the [BlurHash](displaying-media.md#blurhash) section.
- **Source Picker Style**: Customize the appearance of the bottom sheet UI that appears when selecting a media source (e.g., Camera or Gallery).
- **Allow Multiple Images**: Enable this option to allow users to select multiple images. Note that this requires the **Media Source** to be set to **Gallery**. Once multiple images are uploaded, you can access their URLs via **Set from Variable menu > Widget State > Uploaded File URLs (`List<String>`)**.
- **Show Snackbar**: Enable this option to notify users about the upload progress with a snackbar message.

### Store Media for Upload

You can also save the media file temporarily on the device before uploading it to cloud storage. This method is especially useful when you’re working with your own backend server, as it provides more control over the upload process.

For example, In social media apps, users upload photos for posts or stories. The app temporarily saves the image on the device while users edit or apply filters, and then uploads the final image to cloud storage. 

Here’s an example of how you can use this action to upload media to your server via an API:

First, set the **Upload/Save Media** action with the **Local Upload (Widget State)** upload type. then, add the next action as an **API call** and select the API that will upload the file to your server. After the API call is complete, ensure your server returns the uploaded file's URL. Use this URL to save in the database or [display the uploaded image](displaying-media.md).


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/aGtMNp5Gz0H9PuncokfT?embed&show_copy_link=true"
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

The request body for the API must be in *Multipart* format. See how to [**configure an API for the multipart request body**](../../resources/control-flow/backend-logic/api/rest-api.md#multipart-format).

:::

## Upload or Save File [Action]

You can upload any type of file to your app, such as PDFs, MP3s, and more. The process for uploading files is almost similar to the [Upload or Save Media Action](#upload-or-save-media-action).

:::info[Web access for PDF files]

If you plan to support the web version of your app or test the PDF upload feature in **Run Mode**, you’ll need to complete additional configuration steps required for certain file types (e.g., PDFs). Learn how to [**enable web access**](displaying-media.md#web-access-for-pdfs-and-other-files).

:::