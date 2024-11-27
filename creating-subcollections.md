---
slug: /integrations/database/cloud-firestore/creating-subcollections
title: Creating Subcollections
description: Learn how to create subcollections in Firestore for your FlutterFlow app, including organizing documents within subcollections.
tags: [Firestore, Database, Subcollections, Cloud Firestore]
sidebar_position: 4
keywords: [FlutterFlow, Firestore, Database, Subcollections, Cloud Firestore]
---

# Creating Subcollections

[Collections](creating-collections.md) that are created inside the document are called subcollections. For example, 
you could have a 'comments' subcollection inside the 'posts' collection to store a post's comments.

Subcollection is best when you have several queries/filters or search on a collection based on the other collection. For example, loading or searching the comments of a specific post. (i.e., show all comments of a post with more likes.)

:::caution[Feature Completion]
At this time, FlutterFlow supports one level of nesting (e.g., collection -> subcollection). Second-level nesting is not currently supported ( e.g., collection -> subcollection 1 -> subcollection 2.)
:::

![img_21.png](img_21.png)

:::info[Getting Started: Things to Know First]

- Get to know how to [**structure the Firebase Database**](getting-started.md#structuring-the-database).
- Ensure you've gone through and completed every step in the [**Firebase Setup**](../../firebase/connect-to-firebase-setup.md)
  for your project.
  :::

## Working with subcollections

In this section, you'll learn to work with subcollections by building an example that allows you to see all messages and post a new message in a chat room (example below).

:::tip[Here are a few tips on how subcollections work in FlutterFlow:]

* You can create a subcollection document under an existing reference if there is a subcollection defined.
* You can either specify the reference to query a subcollection (UserA -> favorites) or can do a “collectionGroup” query across all subcollections (all Users -> Favorites) by not specifying the reference.

:::

Before we begin, we need to identify the collections and define the database structure. So looking at the requirements, it's very clear that we'll need two collections. One for storing chat room details and another for storing its messages. And we need to display the messages only for a specific chat room. So, having the message collection as a subcollection of the chat rooms seems to be a good option.

Here's what the database structure looks like:

![img_22.png](img_22.png)

Building the chat room example comprises the following steps:

1. [Creating a collection](#1-creating-a-collection)
2. [Creating a subcollection](#2-creating-a-subcollection)
3. [Add data to the collection](#3-add-data-to-the-collection)
4. [Building chat room listing page](#4-building-chat-room-listing-page)
5. [Building messages page](#5-building-messages-page)

### 1. Creating a collection

[**Create the collection**](creating-collections.md) called *chat_rooms*. This will be used to hold the chat room 
details.
While defining the schema for *chat_rooms* collection, add the fields to display its name, i.e., *chat_room_name.*

![img_23.png](img_23.png)

### 2. Creating a subcollection

To create the subcollection:

1. Click on the **Firestore** from the Navigation Menu (left side of your screen).

2. Click on the **(+)** Plus sign button.
3. A popup will appear; enter the collection name as '*messages.'*
4. **Turn on** the **Is Subcollection** toggle.
5. The dropdown list with existing collections will appear. Click on the **Unset** and select the parent collection, *chat_rooms* in this case.
6. Click **Create** Button.
7. Next, [define the document schema](creating-collections.md#define-schema-creating-fields). While defining the schema for 
   the 'messages' 
   subcollection, add the fields such as *message* (to store the message body) and *from* (to store the sender name).

<div class="video-container"><iframe src="https://www.loom.
com/embed/242ba30097fd4a3986844489027185d9?sid=1c4e4ba9-dc46-4959-8b3f-5463ab004229" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>


### 3. Add data to the collection

Add some default chat room details using [Firestore Content Manager](firebase-content-manager.md).

<div class="video-container"><iframe src="https://www.loom.
com/embed/83997a551b964d38a2bfcad0634717d6?sid=64db9c57-c8ef-4930-bcc5-a544eff502a5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>


### 4. Building chat room listing page

The first page shows the chat room listing, and when you tap, it opens the new page and shows all messages.

The steps to build the chat room page are as follows:

1. Query the **chat_rooms** collection and display the chat room names in a ListTile (inside 
ListView).

2. Add the **[Navigate To](../../../ff-concepts/navigation-routing/nav-overview.md#navigation-actions)** action **on 
   Tap** of the **ListTile** and open the messages page. **Note**: While navigating, pass the 
   chat room record to the next page. Learn how to 
[pass data to the next page](../../../ff-concepts/navigation-routing/passing-data.md). .

<div class="video-container"><iframe src="https://www.loom.
com/embed/4ff47a7a33d64386a2e2865f87574fc2?sid=b84bf267-e569-4d3b-9b63-e20d92d2fe6f" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>


### 5. Building messages page

The next page shows all the messages and allows you to send messages in the chat room.

The steps to build the chat room page are as follows:

1. Use the **ListView**, **ListTile**, **TextField**, and **Button** widgets to design a page that looks like the below:

![img_24.png](img_24.png)

2. On the ListView, query a subcollection as you would query any 
   other collection; except 
   for the subcollection, you must provide its parent collection reference (i.e., chat_rooms reference in this case). This way, you'll only see messages from that specific chat room.

<div class="video-container"><iframe src="https://www.loom.
com/embed/e069c07b5dd14b228099534464997bca?sid=05c512e7-60f7-4495-89e7-e0fb9f915bfa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

3. On tap of 'Send' button, add the [create document](firestore-actions.md#create-document-action) 
   action for 
   `messages` collection and provide current `chat_rooms` reference. Also, provide the message 
   to add via **From Variable > Widget State > [TextFieldName]**.

<div class="video-container"><iframe src="https://www.loom.
com/embed/5a2bfb932a074f0981786ec992bd9138?sid=6bb3b363-f32f-4c71-a161-6365049dba21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>




