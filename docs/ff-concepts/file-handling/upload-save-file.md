---
title: Upload or Save File
slug: /concepts/file-handling/upload-save-file
sidebar_position: 4
tags: [Media, Upload Data, File Management]
keywords: [Media, Upload Data, Firebase Storage, Supabase Storage]
---



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upload or Save File

Using this action, you can upload any type of file to your app (e.g., PDF, MP3, etc.). You can store the file on [Firebase](https://firebase.google.com/docs/storage), [Supabase](https://supabase.com/docs/guides/storage) storage, or your own server using an API. Once uploaded, you can access the file through its generated URL. This URL can be used to display the content immediately or store it in a database for future retrieval.

<p></p>

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
![img.png](imgs/img.png)
<p></p>

3. Apply additional [**security rules**](https://supabase.com/docs/guides/storage/quickstart#add-security-rules) which determine who can access the bucket. **Tip**: If you are uploading to a folder structure like this '*pics/uploads*,' here is how you can add a policy that allows only authenticated users to upload their profile picture.

<div class="video-container"><iframe src="https://www.loom.
com/embed/963ac14f47de43a6b1d77ec1fd2b7228?sid=bced0a6b-4d0c-4b56-9886-5845319b2f9e" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


:::

## Upload File: Tutorial

Let's build a simple example that allows you to upload the PDF file. Here's how it looks:

<div class="video-container"><iframe src="https://www.loom.
com/embed/cdd5061ff6da4793a2f4e1d294008cca?sid=8d7f3f69-505d-4205-9575-f0bc3ab88e0d" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

Building the upload file feature comprises the following steps:

1. [Firebase only: deploying Firebase Storage rules](#1-firebase-only-deploying-firebase-storage-rules)
2. [Optional: enabling Web access](#2-optional-enabling-web-access)
3. [Adding Upload/Save File action](#3-adding-uploadsave-file-action)
4. [Preview uploaded file](#4-preview-uploaded-file)

### 1. Firebase only: deploying Firebase Storage rules

Firebase storage rules define who can access the uploaded file. It is essential to set up and deploy the rules before getting started. First, you must enable the *Firebase Storage* on the *Firebase Console* and then deploy its security rules. You can do this from right inside *FlutterFlow*.

Check [**how to deploy the Firebase Storage rules**](../../ff-integrations/storage/firebase-storage/storage-rules.md).

### 2. Optional: enabling Web access

If you plan to support the web version of your app or want to test the PDF upload feature in the *Run* Mode, you need to complete an additional configuration that is required for some file types, such as PDF, to work. Learn how to [enable web access](upload-data.md#web-access-for-pdfs-and-other-files).

### 3. Adding Upload/Save File action

Go to your project page on FlutterFlow and follow the steps below to define the action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the Properties panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window.
3. Click on the **+ Add Action**.
4. Search and select the **Upload/Save File** (under *Utilities > Upload Data*) action.
5. If you haven't integrated Firebase or Supabase yet, the default upload type will be **[Store media for upload](upload-data.md#local-upload-widget-state)**. However, once integrated, you can choose the **Upload Type** as [Firebase](upload-data.md#firebase), [Supabase](upload-data.md#supabase) or [Local (Widget State)](upload-data.md#local-upload-widget-state).
6. Use the **File Type** dropdown to specify whether you want to upload a **PDF**, **Audio (MP3),** **ANY,** or **Uploaded Media**. The *Uploaded Media* option is there for uploading the media stored on the device. If you choose **Uploaded Media**, ensure you add one more same action (before this action) with **Upload Type** set to [**Local Upload (Widget State)**](upload-data.md#local-upload-widget-state).
7. You can **Allow multiple Files** to be uploaded. After the multiple files are uploaded, you can access them via *Set from Variable menu > Widget State > Uploaded File URLs (`List <String>`).*
8. To let users know whether the file is still being uploaded, you can enable the 'Show Snackbar' option.
9. In *Upload Type*,
    1. If you selected ***Firebase***, you must [deploy the storage rules](../../ff-integrations/storage/firebase-storage/storage-rules.md).
    2. If you selected **Supabase**, provide the **Bucket Name** and set the **Uploaded Folder Path** (e.g., attachments/pdfs). This is the path where the files will be uploaded.
    3. If you selected ***Local Upload (Widget State)**,* you probably want to store the file on the device first and then upload it to your backend server via API. To do so, add the next action as an [**API call**](../../resources/control-flow/backend-logic/api/create-test-api-calls.md) and select the API that will upload the file to your server. **Note** that the request body for this API must be in *Multipart* format. See how to [configure an API for the multipart request body](../../resources/control-flow/backend-logic/api/rest-api.md). **Tip**: When this type is selected, you have an option to directly display the PDF before it gets uploaded to your server; see [here](#41-access-file-from-bytes-in-memorynot-yet-uploaded).


<Tabs>
<TabItem value="1" label="Upload to Firebase" default>
<div class="video-container"><iframe src="https://www.loom.
com/embed/cf233d09473c46adb6451119d937ca49?sid=6a0fae1b-b35e-45ae-a494-3e200ef8d2d8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</TabItem>
<TabItem value="2" label="Upload to Supabase">
![img_13.png](imgs/img_13.png)
</TabItem>
<TabItem value="3" label="Upload file via API">
<div class="video-container"><iframe src="https://www.loom.
com/embed/1efca3f468c843f59ff786a5881ac74a?sid=7cdbd2cf-d1ac-4cdb-bc2f-e2d3130ac297" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
</TabItem>
</Tabs>


### 4. Preview uploaded file

Once the file is uploaded, you get the uploaded file URL. You can use it to display the content inside the supported widget.

Here is an example showing a PDF file in a PdfView widget.

1. Select the **PdfViewer** widget from the widget tree or from the canvas area.
2. Move to the **Properties Panel** (on the right side of your screen) and scroll down to the **PDF Viewer** section.
3. Find the **Network Path** and click on the **Set from Variable**.
4. For media uploaded on **Firebase** or **Supabase**, select the **Source** as ***Widget State*** > ***Uploaded File URL***.
5. For media uploaded via **API**, select the **Source** as **Action Outputs > [Action Output Variable Name] (Api Response)**. This should be the response of the API that was used to upload the file, and it must contain the URL of the uploaded file. To retrieve the url from API response, see how to [use JSON path](../../resources/control-flow/backend-logic/api/rest-api.md).
6. You can display the placeholder until the current file is uploaded. To do so, click the **Set from Variable** and specify a placeholder URL under the **Default Value** property.
7. Click on **Confirm**.

<Tabs>
<TabItem value="1" label="Showing file uploaded on Firebase/Supabase" default>
<div class="video-container"><iframe src="https://www.loom.
com/embed/b7ba8af7cfeb43af88ce032a7fb200ab?sid=84cd3065-9c4c-456b-b7a5-15d012f96dbd" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</TabItem>
<TabItem value="2" label="Showing file uploaded via API">

<div class="video-container"><iframe src="https://www.loom.
com/embed/a6eb546183cc4b95a82feb89ce31d0fe?sid=13c9d7c9-d717-47ed-9d8a-1ed685d85439" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


</TabItem>
</Tabs>

#### 4.1 Access file from bytes (in memory/not yet uploaded)

If you simply wish to display a PDF within your app without uploading it anywhere, or if you'd like to preview the PDF before sending it to your server through an API, you can achieve this by configuring the **PDF Source** as **Uploaded File** and specifying the **Uploaded File** source as **Widget State -> Uploaded Local File**.

<div class="video-container"><iframe src="https://www.loom.
com/embed/299036777ee74e24b19c01a9e4dfa808?sid=a0f3b193-4f9f-4c73-adf2-1911cb69e25f" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

