---
slug: /integrations/search/algolia-search
title: Algolia Search
description: Learn how to implement algolia search functionality in your FlutterFlow app.
tags: [Algolia, Firestore Search]
sidebar_position: 1
keywords: [FlutterFlow, Algolia Search, Firestore Search]
---

# Algolia

[Algolia](https://www.algolia.com/) is a powerful search-as-a-service platform that provides lightning-fast and highly relevant search capabilities. Integrating Algolia into your FlutterFlow app allows you to implement real-time search functionality, making it easier for users to find relevant information within your app.

:::info[Prerequisites]

- Algolia integration in FlutterFlow is tied exclusively to Firestore collections. This means you must [**setup Firebase**](../../ff-integrations/firebase/connect-to-firebase-setup.md) to sync data from Firestore into Algolia for searching.
- **Upgraded** your Firebase project to the [**Blaze Plan**](https://firebase.google.com/pricing) for the Algolia Firebase Extension to work.
- Have at least one **Firestore Collection** on which you want to perform the search queries.

:::

## Algolia integration

Follow the steps below to integrate Algolia in your FlutterFlow apps:

### Setup Algolia

Setting up Algolia involves creating an application, defining an index, and generating an API key with the necessary permissions. Here are the steps in detail:

#### Step 1: Create an Algolia Application

Login to [Algolia](https://www.algolia.com/). If you don’t have an account, sign up for a free account [here](https://www.algolia.com/users/sign_up). During registration, fill in the required details and select a **data center region**. After signing up, you’ll be presented with an **import data screen**, but you can skip this for now (see button at the top right).

Next, name your application by navigating to **Settings > Applications** in the Algolia dashboard. By default, you should see an application called **"(unnamed application)"**. Click the three-dot button beside it, select **Rename**, enter a name for your application, and click **Save**.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/wQwIe7gxylgICytgLS4k?embed&show_copy_link=true"
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

#### Step 2: Create an Index

An **index** in Algolia is like a **database table** where your searchable data is stored. To create an index, go to the **Search** section in the left menu, then select **Index**. Click on **Create Index**, and **provide an exact name that corresponds to the Firestore collection** on which you intend to perform the search queries.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/MxI0L4zldY8smKJhMs4j?embed&show_copy_link=true"
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

#### Step 3: Generate an API Key

To integrate Algolia, you need an **API key** with the correct permissions. In the Algolia dashboard, go to **Settings > API Keys > All API Keys**, then click **New API Key**. Under **Indices**, select the index you created in the previous step. In the **ACL (Access Control List)** field, include these permissions: `addObject`, `deleteObject`, `listIndexes`, `deleteIndex`, `editSettings`, and `settings`. Click **Create**, then copy the generated API Key and keep it handy—you’ll need it next to [configure Algolia Firebase Extension](#sync-firebase-data).


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/IUGq5TFoMK8sdww1qhYi?embed&show_copy_link=true"
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

### Sync Firebase Data

To sync your data from Firebase to Algolia, you must install [Algolia Firebase Extension](https://extensions.dev/extensions/algolia/firestore-algolia-search). It allows you to seamlessly connect **Cloud Firestore** with **Algolia**, ensuring that any updates, additions, or deletions in Firestore are instantly reflected in your search index.

Follow these steps to set up the official Firebase extension for Algolia search:

1. **Open Firebase Extensions:** Go to the [**Search Firestore with Algolia**](https://extensions.dev/extensions/algolia/firestore-algolia-search) extension page, then click **Install in Firebase Console**. Choose your project to proceed with the installation.

2. **Update Extension Instance ID (Optional)**: An extension instance ID uniquely identifies each installed instance of an extension within your Firebase project. This ID is used to manage the extension instance, including updating or uninstalling it.
3. **Review Billing and Usage:** A summary of billing details will appear. After reviewing, click **Next**.
4. **Review APIs Enabled and Resources Created:** This extension automatically creates some resources like Cloud Functions and APIs to interact with Algolia. Check the listed resources, then click **Next**.
5. **Review Access Granted to this Extension:** You'll be presented with a list of specific services and resources that the extension needs access to. Review the permissions, then click **Next**.
6. **Configure Extension:** During installation, you'll be prompted to provide the following details.
    - **Collection Path**: Specify the name of the Firestore collection you want to index for search.
    
    - **Indexable Fields (Optional)**: You can leave this blank to index all fields or manually list fields you want indexed.
    - **Force Data Sync (Optional)**: You can enable this to ensure that the extension performs an additional read operation from Firestore before processing and sending data to Algolia. It guarantees that the most recent and accurate data is indexed.
    - **Algolia Index Name**: The name of the index you created (in [step 2](#step-2-create-an-index)) in Algolia Setup.
    - **Algolia Application ID**: You can go to the Algolia dashboard page and check its URL, `https://www.algolia.com/apps/<applicationid>`. Copy the `application_id` and enter it in the field.
    - **Algolia API Key**: Paste the API key you created (in [step 3](#step-3-generate-an-api-key)) during the Algolia Setup and hit **Create Secret** button.
    - **Full Index Existing Documents**: Set this to **Yes** to import the existing data from the Firestore collection into the Algolia index.
    - **Cloud Functions Location**: Choose the region for deploying the Cloud Function.
7. **Install**: Click **Install extension** to finalize. Allow a few moments for the extension to install completely before proceeding to the next steps.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/xPGV609lNwqYS0T6Ftd1?embed&show_copy_link=true"
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

### Choose Searchable Fields

To limit the fields used for searching in Algolia, you can specify which attributes should be indexed. From the **Algolia dashboard**, go to **Search > Index > Configuration** and click **+ Add a Searchable Attribute**. Enter the field name you want Algolia to use and repeat this step for additional fields.

Once done, click **Review and Save Settings**, then confirm by clicking **Save Settings** in the dialog. Algolia will now search only within the specified fields in your app.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/iQFkL4qm4JE7iT6MPqGs?embed&show_copy_link=true"
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

### Configure in FlutterFlow

To integrate **Algolia Search** into your FlutterFlow app, go to **Settings and Integrations > Algolia** and enable it. Enter the **Application ID**, which you can find in your Algolia dashboard URL (`https://www.algolia.com/apps/<applicationid>`). Next, copy the **Search API Key** from **Algolia Settings > API Keys** and paste it into FlutterFlow. Finally, under **Indexed Collections**, select the Firestore collections you want to make searchable.

Here’s exactly how you do it:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/k3hZtbA1Y7W7Z8obJryV?embed&show_copy_link=true"
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

## Using Algolia Search

You can use Algolia Search in your app using two methods:

- [**Algolia Search Action**](#algolia-search-action): This method is useful when the user enters a search term in a TextField and then interacts with a widget, such as tapping a button, to initiate the search.
- [**Backend Query**](../../resources/control-flow/backend-logic/backend-query/algolia-search-query.md): This approach automatically searches or refreshes search results as the user types in the TextField. It leverages the **Update Page On Text Change** property to dynamically update results.

### Algolia Search [Action]

To configure the **Algolia Search** action in FlutterFlow, begin by selecting the widget that will trigger the search, such as an **IconButton**. In the **Properties Panel**, navigate to the **Actions** tab and click on **+ Add Action**, choose the appropriate gesture, like **On Tap**. Search and select the **Algolia Search** action. 

Next, configure the search parameters: for **Firebase Collection**, select the Firestore collection you intend to search; for **Search Term**, choose **From Variable** and select the TextField's value (e.g., **Widget State > [Your TextField]**); and specify the optional **Max Results** to determine the number of search results.

Here’s an example of how you can add Algolia Search Action:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/n270CWDA7psWmrXEV1Wo?embed&show_copy_link=true"
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

## FAQs
<details>
<summary>
Does Algolia work with other data sources like Supabase?
</summary>
<p>
By default, FlutterFlow’s built-in Algolia integration only supports Firestore as the data source. If you need to use Algolia with another database—such as Supabase—you would have to manage that integration via [**custom code**](../../ff-concepts/adding-customization/custom-code.md). However, out of the box, FlutterFlow currently does not offer an Algolia search on databases beyond Firestore.
</p>
</details>