---
title: Upload or Save Media
slug: /concepts/file-handling/upload-save-media
sidebar_position: 5
tags: [Media, Upload Data, File Management]
keywords: [Media, Upload Data, Firebase Storage, Supabase Storage]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Upload or Save Media

This action allows you to easily upload a photo or video to your app. You have the flexibility to store the file on [Firebase](https://firebase.google.com/docs/storage), [Supabase](https://supabase.com/docs/guides/storage) storage, or your own server using an API. Once uploaded, you can access the file through its generated URL. This URL can be used to display the content immediately or store it in a database for future retrieval.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/lvwbuncuLCcNaJ1gSRDH?embed&show_copy_link=true"
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


## Adding Upload/Save Media action

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Button) on which you want to add the action.
2. Select **Actions** from the **Properties Panel** (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window. If it's the first action, click **+ Add Action** button. Otherwise, click the "**+**" button below the previous action tile and select **Add Action**.
3. Search and select the **Upload/Save Media** (under *Utilities > Upload Data*) action.
4. If you haven't integrated Firebase or Supabase yet, the default upload type will be **[Store media for upload](upload-data.md#local-upload-widget-state)**. However, once integrated, you can choose the **Upload Type** as [Firebase](upload-data.md#firebase), [Supabase](upload-data.md#supabase) or [Local (Widget State)](upload-data.md#local-upload-widget-state).
5. Use the **Media Type/Source** to specify whether you want to upload a photo or a video, or both using this action.
6. Using **Media Source** dropdown, you can choose between ***Camera***, ***Gallery**,* and ***Either Camera or Gallery*** (this option will bring up a bottom sheet from where the user can choose the media source as Camera or Gallery) and **Uploaded Media**. If you choose **Uploaded Media**, ensure you add one more same action (before this action) with **Upload Type** set to **Local Upload (Widget State)**.
7. If you are uploading a photo, you can set a maximum width and height for it by using the **Max Width** and **Max Height** properties, respectively. This will modify the image dimension by maintaining the photo's aspect ratio.
8. You can control the **Image Quality** by using the slider or directly entering the value. The value must be 0 to 100, where 100 is the original quality.
9. To retrieve the uploaded media's dimensions, i.e., width and height, enable **Include Media Dimension**. This computation is expensive, so be sure before you enable it.
10. Use the **Source Picker Style** to tailor the appearance of the bottom sheet UI that opens when selecting either *Camera* or *Gallery*.
11. You can **Allow multiple images**. Note that for this to work, the *Media Source* must be set to only *Gallery*. After the multiple images are uploaded, you can access them via *Set from Variable menu > Widget State > Uploaded File URLs (`List <String>`).*
12. To let users know whether the image is still uploading, you can enable the **Show Snack bar**.
13. If you selected *Either Camera or Gallery*, you would be presented with a few more properties to define the **Source Picker Style** (the bottom sheet design). You can specify the ***Font Family***, ***Text Color***, and ***Background Color*** of the bottom sheet.
14. In *Upload Type*:
    1. If you selected ***Firebase***, you must [deploy the storage rules](../../ff-integrations/storage/firebase-storage/storage-rules.md).
    2. If you selected **Supabase**, provide the **Bucket Name** and set the **Uploaded Folder Path** (e.g., pics/uploaded). This is the path where the media will be uploaded.
    3. if you selected ***Local (Widget State)**,* you probably want to upload the media to your backend server via API. To do so, add the next action as an **API call** and select the API that will upload the file to your server. **Note** that the request body for this API must be in *Multipart* format. See how to [configure an API for the multipart request body](../../resources/control-flow/backend-logic/api/rest-api.md). **Tip**: When this type is selected, you have an option to directly display the image before it gets uploaded to your server; see [here](#display-images-from-bytes-in-memorynot-yet-uploaded).
15. Once you have uploaded the media, see how to display it on a widget in the [next section](#showing-uploaded-media).


<Tabs>
<TabItem value="1" label="Upload to Firebase" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/hEihTxIEzO2iDfalWF8Q?embed&show_copy_link=true"
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

</TabItem>
<TabItem value="2" label="Upload to Supabase">
![img_1.png](imgs/img_1.png)
</TabItem>
<TabItem value="3" label="Upload media via API">
<div class="video-container"><iframe src="https://www.loom.
com/embed/c2a29da556a344318a6cbd51127988c7?sid=d7174674-fcd7-406b-beee-4e3bce56ab30" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
</TabItem>
</Tabs>



### Showing uploaded media

For displaying the media on the same page from where the **Upload/Save Media Action** is called, follow the steps below:

1. Drag and drop the appropriate widget that can display the uploaded media. For example, to display uploaded photo, you can use the **Image** widget. Similarly, for video, use the **VideoPlayer** widget.
2. Move to the properties panel, set its **Type** to **Network**, and click **Set from Variable**.
3. For media uploaded on **Firebase** or **Supabase**, select the **Source** as ***Widget State*** > ***Uploaded File URL***.
4. For media uploaded via **API**, select the **Source** as **Action Outputs > [Action Output Variable Name] (Api Response)**. This should be the response of the API that was used to upload the media, and it must contain the URL of the uploaded media. To retrieve the URL from API response, see how to [use JSON path](../../resources/control-flow/backend-logic/api/rest-api.md).
5. To show the placeholder image/video until the current one is uploaded, click the **Set from Variable** and specify a placeholder image/video URL under the **Default Value** property.
6. Click on **Confirm**.

:::tip
To ensure smooth functionality, it's important to provide a **Default Value** when displaying media on the same page as the upload action. Without it, you may encounter errors during app runtime due to an initially empty URL. Once this action is triggered and the media is successfully stored on Firebase/Supabase Storage, the URL becomes accessible.
:::


<Tabs>
<TabItem value="1" label="Showing media uploaded on Firebase/Supabase" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/jvGJZaXGk39nJpK4YSYs?embed&show_copy_link=true"
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

</TabItem>
<TabItem value="2" label="Showing media uploaded via API">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Bt1mp1lPQ8ER07ruH3LW?embed&show_copy_link=true"
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
</TabItem>
</Tabs>



#### Display images from bytes (in memory/not yet uploaded)

If you simply wish to display an image within your app without uploading it anywhere, or if you'd like to preview the image before sending it to your server through an API, you can achieve this by configuring the **Image Type** as **Uploaded File** and specifying the **Uploaded File** source as **Widget State -> Uploaded Local File**.

<div class="video-container"><iframe src="https://www.loom.
com/embed/6c8c743554434e288aa3120756963dd4?sid=937ca67c-c777-4879-a4cb-11f2f4d8052a" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


### Storing the uploaded media URL

You should store the uploaded media URL in your database (Firebase collection or database table) so that you can easily access it later inside the app.

#### Save URL in Firebase collection

To save URL in a Firebase collection:

1. Ensure you have a **field** that can store a photo or video path, for example, `photo_url (Data Type: Image Path)` or `video_url (Data Type: Video Path)`.
2. Now use the Firebase [Create](../../ff-integrations/database/cloud-firestore/firestore-actions.md#create-document-action)/[Update](../../ff-integrations/database/cloud-firestore/firestore-actions.md#update-document-action) document action to store the URL in a field.

:::note
While choosing *Value Source*, you can set either *Widget State > Uploaded File URL* or directly choose *Uploaded Photo/Video*.
:::


<figure class="centered-caption">
    ![img_2.png](imgs/img_2.png)
  <figcaption class="centered-caption">Saving uploaded URL in Firestore document</figcaption>
</figure>

<figure class="centered-caption">
    ![img_3.png](imgs/img_3.png)
  <figcaption class="centered-caption">Saving uploaded URL in Firestore document</figcaption>
</figure>

<figure class="centered-caption">
    ![img_4.png](imgs/img_4.png)
  <figcaption class="centered-caption">Saving uploaded URL in Firestore document</figcaption>
</figure>

#### Save URL via backend API

You can use your backend AP to store the URL, like you would do for any other data. 

<!--Here's an example of [updating data via API](https://app.gitbook.com/s/-MhFNOxEwcl8ED58MUC_/data-and-backend/api-calls/rest-api-example-airline-passengers).-->

### Adding BlurHash

BlurHash is a new and innovative way of generating image placeholders that are both compact and visually appealing. When you're scrolling through a web or mobile app, you may have noticed that some images take longer to load. This can be frustrating and disrupt the user experience. That's where BlurHash comes in - it provides a way to display a blurred version of the image that looks similar to the original while the real image is loading in the background.

With BlurHash, you can create more visually appealing and contextually relevant placeholders that better reflect the content of the image being loaded. It can be used in a variety of contexts, from photo galleries and social media apps to e-commerce and news apps.

Here's how it looks when images are loaded with BlurHash:

<figure class="centered-caption">
    ![img_5.png](imgs/img_5.png)
  <figcaption class="centered-caption">Using BlurHash to display cat images</figcaption>
</figure>

Here are the steps to generate and use the BlurHash:

1. [Generate BlurHash](#generate-blurhash)
2. [Save BlurHash](#save-blurhash)
3. [Use BlurHash](#use-blurhash)

#### Generate BlurHash

There is no separate action to generate the Blurhash. Instead, you can generate it using the **Upload/Save Media** action. From the page where you upload the image, use this action and simply enable the **Include Blur Hash** option. This will automatically create a Blurhash for the image being uploaded.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/N7vUcRSy5m8n3qCDGwqq?embed&show_copy_link=true"
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

#### Save BlurHash

The generated BlurHash is accessible via the **Widget State > Uploaded Local File > Media Blur Hash**. Before you use the BlurHash, It is recommended to store it in the same collection or table where you save the image URL for convenient access.

<figure class="centered-caption">
    ![img_6.png](imgs/img_6.png)
  <figcaption class="centered-caption">Collection schema to store BlurHash</figcaption>
</figure>

Here's how you access and save the BlurHash in a Firebase collection using [**create document**](../../ff-integrations/database/cloud-firestore/firestore-actions.md#create-document-action) action:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/ta8x8fsrHR8uWCzh7bi2?embed&show_copy_link=true"
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
You can also create a [**custom data type**](../../resources/data-representation/custom-data-types.md) called 'image' and then add two fields such as 'image_url' and 'image_blurhash' like this:

<figure class="centered-caption">
    ![img_7.png](imgs/img_7.png)
  <figcaption class="centered-caption">Custom data type to store image URL and BlurHash</figcaption>
</figure>
:::

#### Use BlurHash

To use BlurHash, select the **Image** widget, move to the **properties panel**, enable the **Use Blur Hash** option, and then set the **Blur Hash String** value from a variable.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/ii2X4Cds5xU5UqiVrEjD?embed&show_copy_link=true"
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