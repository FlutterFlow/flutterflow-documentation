---
slug: passing-data
title: Passing Data
tags: []
description: Learn how to pass data between pages in FlutterFlow.
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Passing Data between Pages

As you build your app, you'll often encounter the need to pass through or transfer data from one page to another. For instance, when a user taps on a ListView item, you may want to send a Todo item to the next page to display its details.

This process of passing data between pages is accomplished using parameters.

:::info

Passing data can only be tested in **Run** and **Test** Mode (it can not be tested in Preview Mode).

:::

![passing-data](imgs/passing-data.png)

## How to pass data

To enable data passing between pages, start by defining the parameter(s) on the destination page. Next, on the first page, add the [navigate](#) action and pass the desired parameter value. On the subsequent page, you can utilize the parameter value just as you would with any other variable.

The figure below illustrates the data passing flow:

![passing-data-2](imgs/passing-data-2.avif)

## What you can pass

You can pass any supported data from one page to another via *page parameter(s)*. You can think of a *page parameter* as a variable that holds the value being passed from one page to another.

If you are using Firestore Database, most of the time, you would pass the *Document* (an actual record inside the Firestore collection) and *Document Reference (points to actual document)* between the pages.

### When to use which data type

Let's see what all types of data you can pass and when to use them:

- **Integer**: To pass numbers such as 100, 4302, 50000, etc.
- **Double**: To pass a decimal number such as 12.43, 3233.50, 65.5666, etc.
- **String**: To pass plain text such as title, description, etc.
- **Image Path**: To pass the URL of the uploaded image.
- **Video Path**: To pass the URL of the uploaded video.
- **Audio Path**: To pass the URL of the uploaded audio.
- **Boolean**: To pass either a True or False value.
- **Color**: To pass color value.
- **Document Reference**: To pass a reference of a document. Passing a document reference helps you fetch the document data. For example, fetching user's details based on the user reference.
- **Document**: To pass the actual document (i.e., a Firestore document). For example, passing the whole todo item to the next page.
- **DateTime**: To pass the date and time value.
- **JSON**: To pass the JSON value such as `{"firstName":"John", "lastName":"Doe"}`.
- **TimestampRange**: To pass the start date-time and end date-time values.
- **Lat Lng**: To pass the latitude and longitude of a particular place.
- **GooglePlace**: To pass the GooglePlace data.
- **Uploaded File (Bytes)**: To pass the uploaded file in *Bytes*.

---

## Common use cases for passing data

This section provides instructions on how to build some everyday use cases in your app.

Here are they:

1. [Passing data to the next page](#1-passing-data-to-the-next-page)
2. [Passing ListView item](#2-passing-listview-item)
3. [Passing a document reference](#3-passing-a-document-reference)
4. [Passing data to a component](#4-passing-data-to-a-component)

### 1. Passing data to the next page

Let's see how to send the typed message to the next page.
![passing-data-next-page](imgs/passing-data-next-page.gif)

The steps to pass data from one page to another are as follows:

1. [Building the first page](#11-building-the-first-page)
2. [Building the second page](#12-building-the-second-page)
3. [Add a parameter on the second page](#13-add-a-parameter-on-the-second-page)
4. [Pass data from the first page](#14-pass-data-from-the-first-page)
5. [Showing parameter value in UI element](#15-showing-parameter-value-in-ui-element)

:::info

If you have already created your pages, you can skip to [**Step 3**](#13-add-a-parameter-on-the-second-page).

:::

#### 1.1 Building the first page

Before you pass any data to the next page, you must capture the data on the first page. To do so, you can add a [TextField](#) and [Button](#). Here's how it looks:

![build-first-page](imgs/build-first-page.png)

#### 1.2 Building the second page

Now, create a second page to receive the data. To show a message on the second page, simply add a **Text** widget to a page.
![build-second-page](imgs/build-second-page.png)

#### 1.3 Add a parameter on the second page

The parameter on the second page will be used to hold the data from the first page.

To add a parameter:

1. Select the second page.
2. On the right side, find the **Page** **Parameters** section and click on the **+** button.
3. Click on **+ Add Parameter** and enter the **Parameter Name** (e.g., message).
4. Set the **Type** to **String** and check the **Required** option because this parameter is mandatory(must contain a value) for this page to work. This allows you to accept a plain text value from the previous page.
5. Optionally you can also add a default value to this parameter which will be displayed if the incoming value is null or empty.
6. Click **Confirm**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/f0fe32f0bb1f486b9577b477e26b5ee2?sid=490b8932-68a1-4823-ae40-bd4e295fadf5"
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


#### 1.4 Pass data from the first page

To pass data from the first page:

1. Select the first page. On the Button widget, add the [**Navigate To**](../../resources/ui-building-blocks/pages/navigation#navigate-to-action) action.
2. Select the page you want to navigate to (e.g., *PageB).*
3. Click on the **Pass** button below. Now the parameter (created on the second page) will be displayed. Tip: You can also define a new parameter for the second page from here itself by clicking on the **+ Define** button.
4. Click on the parameter name. This will open the set from variable menu.
5. Now select **Widget State -> TextFieldName** (that accepts the message).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/00543aa0026d4eb08e7fd4e9c536f0c0?sid=a8a0ddf7-7410-43c3-98e1-e113cc507168"
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

#### 1.5 Showing parameter value in UI element

To show data from parameters in the Text widget:

1. Select the second page.
2. Select the **Text** widget, move to the properties panel, and click **Set from Variable**.
3. Select the **Page Parameters > parameter name** (defined on this page).
4. Click **Confirm**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/5023210283704558ac5dc654b79d250d?sid=b2be9ba7-9149-4d73-9729-7ce83ecbc1f3"
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

### 2. Passing ListView item

Let's see how to pass the ListView items (from Firestore Database or API call) to the next page (e.g., a details page).

![passing-listview-item](imgs/passing-listview-item.gif)

Passing a record from a ListView to a details page includes the following steps:

1. [Show list of items](#21-show-list-of-items)
2. [Building a details page](#22-building-a-details-page)
3. [Add the parameter on the details page](#23-adding-parameter-on-the-details-page)
4. [Passing item](#24-passing-item)
5. [Show item details from the parameter](#25-show-item-details-from-the-parameter)

:::info

If you already have a list of items displayed on a screen, you can skip to [**Step 3**](#23-adding-parameter-on-the-details-page).

:::

#### 2.1 Show list of items

Add the first page with [ListView](#) and display some items using the [Firestore Database](#) or [API call](#).

#### 2.2 Building a details page

Add a page with some [**Text**](#) widgets that look like the below:

![build-listview-details-page](imgs/build-listview-details-page.png)

#### 2.3 Adding parameter on the details page

To add a parameter:

1. Select the details page and then select the first widget with the page name.
2. On the right side, find the **Page** **Parameters** section and click on the **+** button.
3. Click on **+ Add Parameter** and enter the parameter name (e.g., todoItem).
4. Set the **Type** of item you will receive on this page.
    1. To receive the Firestore document, set it to **Document** and choose the **Collection Type**. This allows you to carry a single document/record from the previous page.
    2. To receive the item of API response, set it to **JSON**.
5. Click **Confirm**.

<Tabs>
<TabItem value="1" label="Adding parameter to receive Firestore Document" default>
![adding-parameter-details-page](imgs/adding-parameter-details-page.gif)
</TabItem>
<TabItem value="2" label="A parameter that will receive JSON item from API call">
![todo-details-copy](imgs/todo-details-copy.png)
</TabItem>
</Tabs>

#### 2.4 Passing item

An item inside the ListView can be passed to the next page by adding a [navigate](../../resources/ui-building-blocks/pages/navigation#navigate-to-action) action.

To do so:

1. On ListTile, add the [navigate](../../resources/ui-building-blocks/pages/navigation#navigate-to-action) action.
2. While adding this action, click on the **Pass** button below. Now the parameter (created on the second page) will be displayed. **Tip**: You can also define a new parameter for the next page from here itself by clicking on the **+ Define** button.
3. Click on the **UNSET** and select the source of the item:
    1. To pass the Firestore Document, select the **[collection_name] Document** and then select **Document (collection_name)**.
    2. To pass the item of API response, select the **[dynamic_children_variable_name] item**.
4. Click **Confirm**.

<Tabs>
<TabItem value="1" label="Passing Firestore Document" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/d367b6f1ee9e4cde92836ab605223c3e?sid=5c1abd27-9a8e-4a82-9e36-bdccd371644a"
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
<TabItem value="2" label="Passing an item from API response">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/4f6fd5242e154e79a3be1e3e8837d71b?sid=a9910d56-3038-4fed-af22-38767dbd2297"
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

#### 2.5 Show item details from the parameter

Once the item is passed to the next page, you can display it using the parameter.

To display item information from parameter:

1. Select the Details page.
2. Select the **Text** widget, move to the properties panel, and click on the **Set from Variable**. This will open a popup on the left side.
3. Select the **Page Parameters >** **parameter name** (defined on this page).
    1. If it's a Firestore Document, set the **Document Properties** to the **Field** that you want to display.
    2. If it's a JSON, set the **Available Options** to **JSON Path** and **JSON Path** to the custom JSON path. See how to [create a JSON path](#).
4. Click **Confirm**.

<Tabs>
<TabItem value="1" label="Show the item (Firestore Document) details" default>
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/1fea92f534ec43229f91eac11a4c2612?sid=c8edb137-3ef6-4b93-bbb9-5233f2656fd9"
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
<TabItem value="2" label="Show the item (API response - JSON) details">
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/e17424550a1a4730b203c8575ee7790d?sid=aab44d49-1eb8-462e-b84b-a461a35e19a6"
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

### 3. Passing a document reference

A Document Reference points to the location where the record (actual data) resides in the Firestore collection. You can use the document reference to retrieve the additional data associated with that record. For example, you could use the user document reference inside the Todo document to identify the user and its details (e.g., name, location, etc.).

![pass-doc-reference](imgs/passing-doc-reference.png)

In Firestore Data Manager, the document reference looks like this:

![firestore-data-manager](imgs/firestore-data-manager.avif)

**When you should pass document reference**

Sometimes, when you pass data to another page, it might not contain all the data to be displayed on the another page. In that case, you can pass a document reference and add a query to pull the required information.

Here's an example of this situation:

- The Todo detail page shows the profile picture of the user who created it.
- When a user clicks on the profile photo on the Todo Details Page, you want to open the next page (i.e., UserDetails) that shows the user's additional information, such as user name and email.
- However, the Todo Details page only contains the user photo and does not have the additional information you want to display.

For this situation, you'll build an example that passes the document reference of the user to the next page and then query additional user details.

![pass-doc-reference](imgs/pass-doc-reference.gif)

Passing a document reference to another page includes the following steps:

1. [Building Todo details page (first page)](#31-building-todo-details-page-first-page)
2. [Building a user details page (second page)](#32-building-a-user-details-page-second-page)
3. [Adding a parameter on the user details page](#33-adding-a-parameter-on-the-user-details-page)
4. [Passing item reference](#34-passing-item-reference)
5. [Query a document based on document reference](#35-query-a-document-based-on-document-reference)
6. [Showing data in UI elements](#36-showing-data-in-ui-elements)

If you have already created your pages, you can skip to [**Step 3**](#33-adding-a-parameter-on-the-user-details-page).

#### 3.1 Building Todo details page (first page)

To show a list of documents (query collection), find the instructions [here](#).

To show a single document data, follow the instructions [here](#).

The Todo details page looks like this:

![doc-reference-todo-details](imgs/doc-reference-todo-details.png)

#### 3.2 Building a user details page (second page)

The user details page consists of [CircleImage](#) widget and two [Text](#) widgets:

![doc-reference-todo-details-2](imgs/doc-referenence-todo-details.png)

#### 3.3 Adding a parameter on the user details page

To add a parameter:

1. Select the User Details page and then select the first widget with the page name.
2. On the right side, find the **Page** **Parameters** section and click on the **+** button.
3. Click on **+ Add Parameter** and enter the parameter name (e.g., userReference).
4. Set the **Type** to **DocumentReference**. This allows you to carry a single document/record reference from the previous page.
5. Set the **Collection Type** to the Firestore collection that holds the data.
6. Click **Confirm**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/480b60fd745d4b30836f083fdf6de6a1?sid=2e561f97-8c8a-4f2a-a6d5-a0d852436c33"
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

#### 3.4 Passing item reference

A document reference can be passed to another page by adding a navigate action and passing a reference in a parameter on the tap of any widget.

To add an action:

1. Select the first page (page with ListView).
2. Select **ListTile**, head over to **Properties Panel > Actions** and click **+ Add Action**.
3. Search and select the **Navigate To** action.
4. Select the page you want to navigate to.
5. Click on the **Pass** button below. Now the parameter (created on the second page) will be displayed. Tip: You can also define a new parameter for the second page from here itself by clicking on the **+ Define** button.
6. Set the **Source** to a document and then set the **Document Properties** to the **Field** that holds the document reference (e.g., *created_by* field).
7. Click **Confirm**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/606a0efefdb14087b80dac461005e3d5?sid=2a5021f7-22d9-44f8-ae4a-887440438601"
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

#### 3.5 Query a document based on document reference

Once you have access to the document reference, you can use it to query the additional information on a page or a widget. The ideal place to query a document is at the page level so that you can access the document data from anywhere within a page.

1. Select the next page (User details).
2. Click on the **Backend Query** tab (on the right side of your screen).
3. Set the **Query Type** to **Document from Reference**.
4. Scroll down to find the **Collection** dropdown and change it to your collection.
5. Click on the **UNSET** and select the parameter name that holds the document reference.
6. Click **Confirm**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/a485d26487984edaab6b24bd7a3f41dc?sid=810d6422-827c-4988-9a85-5ae2352a03ba"
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

#### 3.6 Showing data in UI elements

To show data on the user details page:

1. Select the **Image** widget, move to the property panel, and scroll down to the **path** property.
2. Click on the **Set from Variable** text. This will open a popup on the left side.
    1. Select the document (retrieved in the previous step as a source (e.g., **[collection_name] Document**).
    2. Now select the field that holds the image URL path.
3. Similarly, show the data for other UI elements.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/4a8ec8485b8e4031bea857e6cd6eb0ef?sid=d1584e13-7cce-412d-aa50-d86687fefb37"
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

### 4. Passing data to a component

See how to [pass data from a page to your component](#).

---

## Video guide

If you prefer watching a video tutorial, here's the one for you:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/F_4O1uWm22g"
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