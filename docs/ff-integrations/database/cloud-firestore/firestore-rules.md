---
slug: /integrations/database/cloud-firestore/firestore-rules
title: Deploy Firestore Rules
description: >-
  Learn how to deploy Firestore rules in your FlutterFlow app to manage data
  access and security.
tags:
  - FlutterFlow
  - Integrations
  - Database
sidebar_position: 2
keywords:
  - FlutterFlow
  - Firestore
  - Database
  - Rules
  - Cloud Firestore
  - deploy Firestore security rules from FlutterFlow
ai_queries:
  - deploy Firestore security rules from FlutterFlow
last_verified: 2026-09-02
---
# Firestore Rules

Firestore security rules are essential in safeguarding your Firebase data from potential malicious users. These rules not only enhance security but also give you control over data access within your application. With Firestore rules, you can enforce restrictions, ensuring that only authorized users can interact with specific data.

For instance, you can configure Firestore rules to permit appointment creation only for authenticated users, such as those who have signed in via Email, Google Sign-in, or other authenticated methods.

:::tip
If you are brand new to Firestore rules, check out this overview about [**Getting Started With Firestore Rules**](https://firebase.google.com/docs/firestore/security/get-started).
:::

## Creating Firestore Rules

There are two ways you can set the Firestore Rules:

1. [Using FlutterFlow Firestore setting](#1-using-flutterflow-firestore-settings)
2. [Using Firestore Database Console](#2-using-firestore-database-console)

### 1. Using FlutterFlow Firestore Settings

To set up basic rules, you can use the *Firestore Setting* available right inside FlutterFlow.

#### Overview of Firestore Rules inside of FlutterFlow

You can control the following operations that can be performed on a document:

* **Create:** Allow users to create a new document inside the collection.
* **Read:** Allow users to read documents inside the collection.
* **Write:** Allow users to update an existing document in a collection.
* **Delete:** Allow users to delete a document of a collection.

<figure>
    ![img_3.png](img_3.png)
  <figcaption class="centered-caption">Default Rules</figcaption>
</figure>

We provide various levels of access control that allow you to define user permissions for data access:

* **Everyone**: Grants the selected operation to any client, including unauthenticated users. Use it only for data intentionally public for that operation; it is not appropriate for private user data or unrestricted writes.

* **Authenticated Users**: Grants the selected operation to any signed-in user. Authentication proves that a session exists; it does not prove ownership, role, or permission to another user's document.

* **Tagged Users**: Allow users to read/update/delete a document if they are tagged in that
  document. For example, say there is a "posts" collection with a `created_by` field representing the user who created the post. Then the "Tagged User" rule can be set on the `created_by` field to only allow accessing (read/update/delete) the post if the logged-in user is the one who created it.

<figure>
    ![img_4.png](img_4.png)
  <figcaption class="centered-caption"></figcaption>
</figure>

* **Users Collection**: Allow users whose authentication id is the same as the id of a document. Tip: This option is only applicable to a 'users' collection.
* **No One**: No one is allowed to create/read/write/delete a document.

:::caution[Note]
For 'Tagged Users,' the document must contain a field that can either be a reference to the user or a string with the user id.
:::

#### Default rules applied to new collections

When you create a new collection inside the [Firestore Content Manager](../../database/cloud-firestore/firebase-content-manager.md), below are the default rules applied to the collection:

* **Create -> Everyone**: All users can create a document.
* **Read -> Everyone**: All users can read documents.
* **Write -> No One**: No one can update a document.
* **Delete -> No One**: No one can delete a document.

<figure>
    ![img_5.png](img_5.png)
  <figcaption class="centered-caption">Default Rules</figcaption>
</figure>

These broad defaults are suitable only for an empty or disposable prototype. Before adding real data, restrict every operation according to ownership and roles. Marking a collection **Has Private Data** displays a warning, but the flag does not enforce authorization by itself.

For example, a newly created 'notes' collection allows everyone to read all notes by default. In
reality, only the user who created it should be able to read it. But because we have marked it
as '**Has Private Data**' it will show a warning like the one below, and you can modify the
rules that allow only a user to read notes who created it.

<figure>
    ![img_6.png](img_6.png)
  <figcaption class="centered-caption">Firestore Warning</figcaption>
</figure>

If you want more control over a specific collection, you can remove the FlutterFlow generated rule by checking the **Exclude** option. And then, you can set up advanced or custom security rules using the Firestore Database console.

:::info
To bring the rules into effect, you must deploy them. Click the **Deploy** button from here, and
you will see the deployed rules at **Firebase Console > Firebase Database > Rules.**
:::

When a user is deleted from your app, you might also want to delete records associated with that user. Set **Tagged Users** for the Delete rule, select **Delete on User Delete** for the applicable collections, deploy the generated user-deletion function, and test the lifecycle end to end. This cleanup is backend behavior and is separate from whether the deleted user could delete documents from a client app.

<div class="video-container"><iframe title="Deploy Firestore Rules interactive tutorial" src="https://www.loom.com/embed/583cfc171fac4f589330b64742f96cd2?sid=ef8957e2-d66a-46b8-be10-4b8a9735f153" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



#### Example: How to use Firestore Rules?

Let's take an example to set up the rules on a *todos* collection for the following requirements:

* Only authenticated users should be able to create a Todo item.
* All users (authenticated/unauthenticated) can see all the Todo items.
* Only a user who created the Todo item can update it.
* No one can delete a Todo item.

To set up the Firestore Rules for the above requirements:

1. Inside the **Firestore Rules** section, set the **Create** to **Authenticated Users**.
2. Set the **Read** to **Everyone**.
3. Set the **Write** to **Tagged Users**. This will open a popup named **Tag Users**.
    2. Inside the dropdown, click on **Unset** and select the field that contains either user reference or user id.
    5. Click **Save Changes**.
4. Set the **Delete** to **No One**.
5. Now you can [deploy](#deploy) the rules.

:::caution
The rules set in the above examples are for simplification purposes. You should carefully understand your requirements and set the rules accordingly.
:::
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/jyev2F2KqwIlZEFU6zJl?embed&show_copy_link=true" title="Deploy Firestore Rules interactive tutorial"
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

### 2. Using Firestore Database Console

To set up more advanced or custom rules you can use the Firebase Cloud Firestore Console.

:::warning[Choose one source of truth]
Publishing rules from FlutterFlow, the Firebase console, or the Firebase CLI can replace the currently deployed rules. Keep the canonical rules in one controlled workflow, review the complete diff before deployment, and copy intentional console changes back to that source. If a collection is managed by custom rules, exclude its generated FlutterFlow rule to avoid conflicting ownership.
:::

Let's take an example to set up the rules on a *todos* collection for the following requirements:

* To create a Todo item, a user must be authenticated and verified via email or phone, and it must be a valid Todo item.
* All users (authenticated/unauthenticated) can see all the Todo items.
* Only a user who created the Todo item can update it with valid Todo details.
* Only a user who created the Todo item can delete it.

To set up the Firestore Rules for the above requirements:

1. Open the Firebase console of your project, and click on the **Firestore Database** in the left
side menu.
2. Select the **Rules** tab.
3. Paste the following code and click on **Publish**.

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // 1.
    function isSignedIn() {
      return request.auth != null;
    }

    // 2.
    function verified() {
      return request.auth.token.email_verified == true
          || request.auth.token.phone_number != null;
    }

    // 3.
    function isValidItem(data) {
      return data.name is string && data.name.size() > 0;
    }

    match /todos/{document} {
      // 4.
      allow create: if isSignedIn()
                    && verified()
                    && isValidItem(request.resource.data)
                    && request.resource.data.created_by ==
                       /databases/$(database)/documents/users/$(request.auth.uid);
      // 5.
      allow read: if true;
      // 6.
      allow update: if isSignedIn()
                    && isValidItem(request.resource.data)
                    && resource.data.created_by ==
                       /databases/$(database)/documents/users/$(request.auth.uid)
                    && request.resource.data.created_by == resource.data.created_by;
      // 7.
      allow delete: if isSignedIn()
                    && resource.data.created_by ==
                       /databases/$(database)/documents/users/$(request.auth.uid);
    }
  }
}
```
Here’s a quick rundown of what’s going on in the code above:

1. **isSignedIn()**: This checks whether a user is authenticated.
2. **verified()**: This checks whether the user is verified via email or phone.
3. **isValidItem()**: This checks that the Todo name is a non-empty string.
4. **create**: Allows a verified, signed-in user to create a valid Todo only when `created_by` points to that user's document.
5. **read**: Allow all users to see all Todo items.
6. **update**: Allows the creator to update a valid Todo while preventing ownership from being changed.
7. **delete**: Allows only the creator to delete the Todo.

This is an intentionally public-read example. Replace `allow read: if true` when Todo data should be private, and make the corresponding FlutterFlow query satisfy the read rule. Firestore rules are not filters: if a query could return any forbidden document, the entire query is denied.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/kzuJJDsEaahl4oxQKipi?embed&show_copy_link=true" title="Deploy Firestore Rules interactive tutorial"
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

## Deploy

To deploy the Firestore Rules, simply hit the **Deploy** button.

Before you finally deploy the new rules, a popup asks you to review your changes. Here, you can check the difference between the before and after versions of the Firestone Rules and then click **Deploy Now**.

:::caution
* You must deploy rules every time you make a change.
* Before publishing your app, ensure you remove default Firestore rules, such as 'allow read, write: if request.time < timestamp.date(2024, 5, 31);' and exit Test mode.
* Test authenticated, unauthenticated, owner, non-owner, invalid-data, and query cases with the Firebase Rules simulator or Emulator Suite. Server Admin SDKs bypass Firestore Security Rules and must be protected with IAM and backend authorization.
:::

![img_7.png](img_7.png)

## Reverting to previous rules

You can go back to the previous rule state with Firebase Cloud Firestore Console:

1. Open the Firebase console of your project, and click on the **Firestore Database** in the left
side menu.
2. Select the **Rules** tab.
3. Select and copy the previous rule from the left-side menu.
4. Select the current rule from the left side menu and paste the previous rule.
5. Click on **Publish**.

:::tip[Learn More]
Learn more about [**creating custom Firestore Rules**](https://firebase.google.com/docs/firestore/security/rules-conditions).
:::

## FAQs

<details>
<summary>Getting an error, "cloud resource location is not set," "It looks like you haven't used Cloud Firestore in this project before" or a red alert while deploying rules.</summary>

**Error-1**

![img_8.png](img_8.png)

**Error-2**

![img_9.png](img_9.png)

If you encounter such issues, the 'Default GCP resource location" is probably not set in your Firebase project. To fix this issue:

1. First, ensure that you have
[**configured the Cloud Firestore**](../../firebase/connect-to-firebase-setup.md#enable-firestore-for-database-access)
2. And then, head over to the second link (from the error) and set the GCP resource location.

<figure>
    ![img_10.png](img_10.png)
  <figcaption class="centered-caption">Highlighted Link</figcaption>
</figure>

<figure>
    ![img_11.png](img_11.png)
  <figcaption class="centered-caption">Set the link to Firebase Console > General
Settings > Default GCP Resource Location </figcaption>
</figure>

</details>
