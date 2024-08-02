---
slug: /integrations/search/algolia-search
title: Algolia Search
description: Learn how to implement algolia search functionality in your FlutterFlow app.
tags: [Algolia, Firestore Search]
sidebar_position: 1
keywords: [FlutterFlow, Algolia Search, Firestore Search]
---

# Algolia

Using Algolia you can add search functionality to your FlutterFlow app. It allows you to search for documents present inside a Firestore Collection. Learn how to integrate Algolia Search with your app by following this tutorial.

:::info[Prerequisites]
Make sure you:
- Complete [**Firebase Setup**](../../ff-integrations/firebase/connect-to-firebase-setup.md) for your project.
- Upgraded your Firebase project to [**Blaze Plan**](https://firebase.google.com/pricing).
- Have at least one **Firestore Collection** on which you want to perform the search queries.
:::

## Algolia integration

Alogolia integration comprises the following steps:

1. [Setup Algolia](#1-setup-algolia)
2. [Integrate with Firebase](#2-integrate-with-firebase)
3. [Import existing documents](#3-import-existing-documents)
4. [Algolia configuration on FlutterFlow](#4-algolia-configuration-on-flutterflow)
5. [Choose searchable fields](#5-choose-searchable-fields)
6. [Using Algolia Search](#6-using-algolia-search)

### 1. Setup Algolia

You need to create an Algolia account for using their search service. Follow the steps below to setup Algolia:

1. Login to [Algolia](https://www.algolia.com/). If you don't have an account, create your free Algolia account by going [here](https://www.algolia.com/users/sign_up).
2. For a new account, fill up the required details and select a region of the data center.
3. Once you reach the dashboard of Algolia, go to **Settings**.
4. Select **Applications**. By default, you should already have an application called "(unnamed application)".
5. Click on the button with three dots present beside it, and select **Rename**.
6. Enter a name for the Application and click **Save**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/E6un54DC3mZ70DuxpxIY?embed&show_copy_link=true"
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

### 2. Integrate with Firebase

You have to configure Firebase for integrating the Algolia search, follow the steps below:

1. Go to your **Firebase project dashboard**.
2. Click on **Extensions**.
3. Click **Install** under ***Search with Algolia***.
4. In ***Step 1*** (Review billing and usage), it will show some information related to billing, click **Next**.
5. In ***Step 2*** (Review APIs enabled and resources created), this extension automatically creates a Cloud Function to interact with Algolia, click **Next**.
6. In ***Step 3*** (Configure extension), you have to fill in some information related to Algolia:
    1. Enter the **Collection Path** which is actually the name of the Collection that you want to make searchable using Algolia.
    2. You can skip the **Indexable Fields**.
    3. For **Algolia Index Name**, go to the Algolia dashboard and create a new index. Enter the same name in this field.
    4. For **Algolia Application Id**, you can go to the Algolia dashboard page, and check its URL, `https://www.algolia.com/apps/<applicationid>`. Copy the `application_id` and enter in the field.
    5. For **Algolia API Key**, from the Algolia dashboard go to `Settings > API Keys > All API Keys` and click **New API Key**. Under **Indices**, select the Index that you created earlier. In the **ACL** field, include these options: `addObject`, `deleteObject`, `listIndexes`, `deleteIndex`, `editSettings` & `settings`. Click **Create**. Copy the generated API Key and enter it in the respective field.
    6. Select a **Cloud Functions location**.
    7. Click **Install Extension**.

Wait for the extension to get installed before proceeding to the next phase.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/hmva1isgCM0baipfhfyt?embed&show_copy_link=true"
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

### 3. Import existing documents

Once you have the Algolia extension installed on Firebase, it starts monitoring the Collection and automatically adds the documents that are created or updated in the Firestore Collection to Algolia Index.

But for the documents that were present in the Firestore Collection before the extension was installed, won't get added to Algolia Index automatically.

:::info
You will find the specific instructions for importing your documents to Algolia by going to **Extensions > Manage (under Search with Algolia) > How this extension works** page. To keep it simple, the steps are listed below.
:::

To use the import script you'll need a **Firebase service account**, follow the steps below:

1. Go to your Firebase project dashboard.
2. Click **Settings** (the gear icon on the left menu), and select **Project settings**.
3. Go to the **Service accounts** tab.
4. Under ***Firebase Admin SDK***, click **Generate new private key**.
5. In the dialog that opens up, click **Generate key**.

This will download the service account private key to your system, store it in a secure location, and don't share this key anywhere.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/U18d5ZZMcunS4yKJNlZv?embed&show_copy_link=true"
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


Follow the steps below to import your existing documents to Algolia:

1. To run the script, you need to have `npx` installed on your system. If you don't have it installed, install [Node.js](https://www.nodejs.org/) (`npx` comes along with it).
2. From the Firebase dashboard, go to **Extensions > Manage (under Search with Algolia) > How this extension works** page. Copy the import script and run it on your system, the command will look like this:

```
  LOCATION=us-central1\
  PROJECT_ID=<firebase_project_id>\
  ALGOLIA_APP_ID=<algolia_application_id>\
  ALGOLIA_API_KEY=<algolia_api_key>\
  ALGOLIA_INDEX_NAME=<algolia_index_name>\
  COLLECTION_PATH=<firebase_collection_name>\
  GOOGLE_APPLICATION_CREDENTIALS=</path/to/service/account/key>\
  npx firestore-algolia-search
```

:::warning
Don't use the above script directly, you need to replace all the angle brackets with the appropriate values of those fields.

It's **recommended** to just copy the script from the page specified above (it will contain all the values specific to your Collection), remove the `FIELDS` and `TRANSFORM_FUNCTION` params if it contains `{ unspecified parameter }`, enter the correct credentials path, and run it.
:::

After running this command if you navigate to the Algolia Search Index page, you will find all your existing Firebase documents imported there.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(46.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/SOL4iX1pJ1uie2nLL7EA?embed&show_copy_link=true"
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


### 4. Algolia configuration on FlutterFlow

In order to use Algolia Search in your apps, you have to configure Algolia on FlutterFlow. Follow the steps below:

1. Go to the [FlutterFlow dashboard](https://app.flutterflow.io/).
2. Click **Settings and Integrations** (the gear icon) from the Navigation Menu (left side menu).
3. Select **Integrations > Algolia**.
4. On the **Algolia Configuration** page, first, you have to enter the **Application ID**. You will find it on the Algolia dashboard page, copy the application ID from the URL: `https://www.algolia.com/apps/<applicationid>`.
5. You will get the **Search API Key** by going to `Algolia Settings > API Keys`. Copy the **Search-Only API Key** and paste it into the respective field of FlutterFlow.
6. Under **Indexed Collections**, select the Collections to be indexed by Algolia Search.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/CEZQ1uZDpWNjvaQGAkIl?embed&show_copy_link=true"
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


### 5. Choose searchable fields

If you don't want all the fields of any Collection to be used for searching a document, you can choose the fields that you want to be indexable by Algolia.

Follow the steps below:

1. From the Algolia dashboard, select **Search** (present on the left menu).
2. Select **Index** under **Configure**, and go to the **Configuration** tab.
3. Click **+ Add a Searchable Attribute** button.
4. Enter the **name** of the field that you want Algolia to use while searching.
5. Repeat **Steps 3 & 4** if you want to add more fields.
6. Click **Review and Save Settings**, and then **Save Settings** inside the dialog that opens up.

Now, Algolia will only use the fields that you specified here while searching for any term in your app.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/11Oduz8XqMMpNWGasShW?embed&show_copy_link=true"
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


### 6. Using Algolia search

There are two methods of using Algolia Search in your app:

- Add an **Action** to trigger the [Algolia Search](#algolia-search) by passing the search term, based upon a user gesture.
- Add the API Call as a [Backend Query](../../resources/control-flow/backend-logic/backend-query/algolia-search-query.md) that gets triggered automatically as the user navigates to the page.

## Algolia Search

You can trigger an Algolia Search using this Action. This will help users to search for documents present inside a Firestore Collection by providing a search term.

From this page, you will learn to define an Algolia Search Action on FlutterFlow.

### Building Search UI

You need a text that would be provided as the search term while triggering the search query. Usually, you should take the term as user input. A basic search UI contains a TextField and a search IconButton widget.

Follow the steps below to define a search user interface:

1. Drag a TextField widget from the [Widget Panel](../../intro/ff-ui/widget-palette.md) and drop it onto the canvas.
2. You can customize the TextField properties to match your app's design style.
3. Now, drag a IconButton widget and drop it onto the canvas. You can use a Row widget to keep both the TextField and the IconButton in the same row. In some cases, it's possible to add them inside the AppBar as well (watch the demo below).
4. Change the icon of the IconButton widget to a search icon, and customize it if required.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(45.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/7xk9Xz0AcInCccouV90C?embed&show_copy_link=true"
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


This completes the building of a simple search user interface. Move on to the next step to define the Search Action.

### Define Algolia Search Action

Follow the steps below to define an Algolia Search Action:

1. Select the **widget** (eg., IconButton) on which you want to define the action.
2. Select **Actions** from the Properties panel (the right menu).
3. Click **+ Add Action** button.
4. Choose a gesture from the dropdown among **On Tap, On Double Tap, or On Long Press**.
5. Select the **Action Type** as ***Algolia Search**.*
6. Choose the **Firebase Collection** on which to perform the search.
7. Now, you have to define from where to get the **Search Term**. You can either choose ***Specific Value*** or ***From Variable***. If you want to use a TextField value as the search term, you should choose *From Variable*.
8. If you have chosen **Specific Value**, define the term inside the field present.
9. If you have chosen ***From Variable***, select a **Source** from the dropdown menu and then select an option from the **Available Options**. For example, if you want to use the value of a TextField, select the Source as ***Widget State*** and choose the field name under Available Options.
10. Finally, you can set the number of maximum search results to fetch under **Max Results**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Kehu7a4u4RX1fuhqEyNS?embed&show_copy_link=true"
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


### Display Search Results

Once you have the Search Action defined, you need to show the results on the UI.

Follow the step below to display the search results in your app:

1. Drag and drop a ListView widget onto the canvas. Create a widget inside the ListView for displaying each of the search results.
2. Select the ListView widget, click on **Generate Dynamic Children** from the Properties Panel.
3. Enter a **Variable Name** so that the Algolia search results can be referenced while displaying them inside widgets or while passing it to a different page of the app.
4. Select the **Source** as the name of the results variable where Algolia search data is stored.
5. Click **Save**. Then, click **Ok** in the dialog box that pops up.
6. **Set** the Algolia Search data correctly to each of the widgets where want to display the data.
For example, if you want to show data inside a Text widget, select the widget, click **Set from Variable**, choose **Source** as the variable name where you stored each of the Algolia search data (in step 3), choose the field name from the **Available Options** dropdown whose data who want to display, click **Save**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/fJPcFSHLQ0Di51NyNfso?embed&show_copy_link=true"
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


### Passing Search Result to another page

You can use the Algolia search result data from any of the widgets present inside the ListView. To pass this data to a different page of the app, that page should have a **Parameter** defined having the same data type.

Follow the steps below to define a parameter:

1. Go to the page where you want to pass the data.
2. Click **Define parameters** button present on top of the Properties Panel.
3. Click **+ Add Parameter**.
4. Enter a **Parameter Name**.
5. Select the **Type** as ***Record Reference***.
6. Choose the **Record Type** from the dropdown menu.
7. Click **Save**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/RsIzF6uF5vvEWzyGkCUe?embed&show_copy_link=true"
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


Follow the steps below to pass each to the search result to a different page:

1. Select the widget present inside the ListView on which you want to apply the [Navigate](../../ff-concepts/navigation-routing/page-navigation.md#navigate-to-action) Action.
2. Select **Actions** from the Properties panel (the right menu).
3. Click **+ Add Action** button.
4. Choose a gesture from the dropdown among **On Tap, On Double Tap, or On Long Press**.
5. Select the **Action Type as Navigate**.
6. Choose Navigation Type as Navigate to Page, select the page under **Navigate To**.
7. Click **+ Pass in Parameter**.
8. Select the **Parameter** name from the dropdown.
9. Choose the **Source** as the Algolia search result variable and select **reference** under **Available Options**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/5lIm4lZQXMZwA3Z9rw9v?embed&show_copy_link=true"
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


