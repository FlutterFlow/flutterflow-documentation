---
slug: /integrations/google-maps/generate-maps-keys
title: Generate Maps Keys
description: Learn how to generate and use Maps keys for Google Maps integration in your FlutterFlow app.
tags: [Google Maps, API Keys, Integration]
sidebar_position: 1
keywords: [FlutterFlow, Google Maps, API Keys, Integration]
---

# Maps & Places APIs

FlutterFlow natively supports **Google Maps**, providing a seamless and efficient way to embed
interactive maps into your FlutterFlow apps. It also supports **Places API** that returns formatted location data and imagery about establishments, geographic locations, or prominent points of interest.

## Add Maps APIs

To enable **Google Maps** in your project, please follow the steps:

### Get API Keys

To start working with **Google Maps APIs**, you need to enable the **Maps API** from the [Google
Cloud Console](https://console.cloud.google.com/).

1. As you land on the Cloud console, make sure you are in the correct Google Cloud project. Then,
  from the right menu, click on [**Library**](https://console.cloud.google.com/apis/library) and
  search for **Maps**.

2. You may receive a prompt from Google Cloud to add a billing account. Please add a billing account
  to continue.

3. You will see options such as the **Maps SDK for iOS, Maps SDK for Android**, and the **Maps
  Javascript API**. Select the platform you wish to support and then click **Enable**.
  If you are running on Run Mode, ensure that your Maps Javascript API is enabled.

<div class="video-container"><iframe src="https://www.loom.
com/embed/b1f6d8ddcc44492a92f833dafa619ec0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p></p>

:::warning
To secure your API keys, refer to the 
[**Best Practices guide: Secure API Keys**](../../google-cloud/secure-keys.md)
:::

- Click on the Credentials menu from the left panel.

- Find the key for the platform you need, and copy the key.

### Add keys to FlutterFlow

Now add the API keys platform wise to FlutterFlow Settings page

![g-maps-settings.png](../imgs/g-maps-settings.png)

### Create a new Key if not available

If you don't find the Android key (auto created by Firebase) or iOS key (auto created by
Firebase) in the Google developer console, here are the steps to create one:

- On your Cloud console, click the **Credentials** menu on the left.

- Click on the **+ Create Credentials** at the top.

- Click on the **API Key** to create a new key for the Android app. Similarly, create one for
  iOS and Web.

<div class="video-container"><iframe src="https://www.loom.
com/embed/2c644aa950c44f76b19c6787784cf3b5?sid=3e22206e-4b4b-4734-b842-0c644d32f344" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


## Add Places APIs

To enable **Places API** in your project, please follow the steps under 
["Add Maps API" section](#add-maps-apis) and additionally also enable Places API from the API 
library if not 
already enabled. 

![places-api.png](imgs/places-api.png)


