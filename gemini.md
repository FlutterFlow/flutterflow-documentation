---
slug: /integrations/gemini
title: Gemini
description: Learn how to get started with the Gemini action in your FlutterFlow app to generate text, process text-and-image inputs, and count tokens.
tags: [Gemini, Text Generation, Token Counting, Integration]
sidebar_position: 1
keywords: [FlutterFlow, Gemini, Text Generation, Token Counting, Integration]
---


# Gemini

With the Gemini action, you can generate text, process text-and-image inputs, and effortlessly count tokens.

<div class="video-container"><iframe src="https://www.loom.
com/embed/1e7a383897334f6da96c58639e7abcfc?sid=b8363cff-ccfb-4ade-98fc-22a2a587e68e" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



## Setup

Integrating [Gemini AI](https://gemini.google.com/app) into FlutterFlow unlocks Google's advanced AI capabilities right within your app. Follow this guide to integrate Gemini AI:

1. Visit [**Google AI Studio**.](https://aistudio.google.com/) and click on **Get API Key** > 
   **Create API key**. You can create an API key within a new Google Cloud project by selecting *Create API key in new project*, or choose an existing Google Cloud project. 

2. Once the API key is generated, copy it.

:::tip
To secure your API keys, refer to the Best Practices guide: [Secure API Keys](../google-cloud/secure-keys.md)
:::

1. Go back to FlutterFlow and navigate to **Settings and Integrations > Integrations > Gemini**. 

2. Toggle on the **Enable Gemini** option and paste the copied **API key** into the designated 
   field. 

3. Now, you can add [Gemini actions](#gemini-action) at appropriate events 
within your app.

With these steps, you’re all set to enhance your FlutterFlow app with powerful AI features.


## Gemini [Action]

To add a Gemini Action, follow these steps:

1. Select the **Widget** (e.g., Container, Button, etc.) on which you want to add the action.

2. Select **Actions** from the Properties Panel (the right menu), and click **Open**. This will open an **Action Flow Editor** in a new popup window. Click on the **+ Add Action**.

3. On the right side, search and select the **Gemini** (under *Integrations*) action. 

4. Set the [**Action Type**](#types-of-gemini-action). **Note** that If you set this type to *Text from Image*, you must provide the image as well.

5. Provide the **Text prompt** that will be used to generate the result from the Gemini AI model. For this example, we use this prompt: `When users upload a photo, you analyze the food in the photo and tell if it is healthy to eat`. 

6. Provide the **Action Output Variable Name** where the result of the generation will be stored. Later, you can access this variable from anywhere on the page.

<div class="video-container"><iframe src="https://www.loom.com/embed/8b57fff59e3f496b84eb719f0a41bc85" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Types of Gemini action

Following are the types of Gemini actions you can add:

### Generate Text

This action allows you to create natural language text based on the text prompts you provide.

**Example**:

* **Input**: *Text prompt* - "Write a brief summary of the benefits of exercise."
* **Output**: *Action Output Variable Name* - "Exercise can improve mental health, increase lifespan, enhance physical fitness, and reduce the risk of chronic diseases."

### Count Tokens

With this action, you can analyze the number of tokens in a given text prompt. This is particularly useful for applications that need to monitor or restrict the length of text inputs, ensuring that content stays within desired limits or quotas.

A token can be a word, but it can also be a part of a word or even punctuation. The division of text into tokens depends on the tokenization algorithm being used. For Gemini models, a token is equivalent to about 4 characters. 100 tokens are about 60-80 English words.

**Example**:

* **Input**: *Text prompt* - "Gemini is fun!"
* **Output**: *Action Output Variable Name* - 5

### Text from Image

This action enables your app to analyze images and generate descriptive text about them. It can interpret the content of an image, such as identifying objects, scenery, or activities, and then provide a textual description.

**Example**:

* **Input**: *Text prompt* - "Identify the object in the image?"
* **Input**: *Image Type* - There are two ways you can provide an image.

	+ **Image Network URL**: You can provide the URL of the image hosted on the internet. If you upload an image to **Firebase** or **Supabase**, you can provide the image via ***Widget State > Uploaded File URL****.*
	+ **Uploaded Image File**: You can also provide an image file directly [from your device](#) via ***Widget State > Uploaded Local File****.*
* **Output**: *Action Output Variable Name* - "This is a pipe organ. It is a large musical instrument that is used in churches, concert halls, and other large buildings. The sound of a pipe organ is very powerful and can be used to create a wide variety of music."



 