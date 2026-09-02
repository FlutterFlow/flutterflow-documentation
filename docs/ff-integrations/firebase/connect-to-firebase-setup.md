---
slug: /integrations/firebase/connect-to-firebase
title: Connect to Firebase
description: >-
  Learn how to integrate Firebase with your FlutterFlow app to add user
  authentication, cloud storage, real-time databases, and more.
tags:
  - FlutterFlow
  - Integrations
  - Firebase
sidebar_position: 0
keywords:
  - FlutterFlow
  - Firebase
  - Integration
  - User Authentication
  - Cloud Storage
  - Real-Time Database
  - connect a FlutterFlow project to Firebase
ai_queries:
  - connect a FlutterFlow project to Firebase
last_verified: 2026-09-02
---
# Connect to Firebase

Firebase integration in FlutterFlow provides an effortless way to enhance your apps with powerful features such as user authentication, cloud storage, real-time databases, and more. This setup guide will walk you through integrating Firebase with FlutterFlow, empowering you to easily create feature-rich, scalable applications.

## Create a new Firebase project from FlutterFlow

FlutterFlow allows you to automatically create a Firebase project directly from the builder using a quick three-step process.

#### Step 1: Set Up Your Project
Go to **Settings & Integrations > Project Setup > Firebase** in FlutterFlow to get started.

#### Step 2: Select Your Region
Hit **+ Create Project**. You’ll see a popup where you can confirm your project's name and choose the Firebase region that best serves your users.

#### Step 3: Connect Your Google Account
Choose **Create** or **Sign in with Google** to link your Firebase account.
If Google asks for permission, review the requested scopes and grant the access required for FlutterFlow to create and configure the project on your behalf. Use an account and organization policy appropriate for the project; do not grant access from an unrelated or personal production account without reviewing the permissions.

<img src="/img/firebase/warning-firebase.png" alt="Alt text" class="small-image"/>

Once initiated, FlutterFlow will handle the rest of the project creation in the background.

Here's a quick walkthrough:
<iframe src="https://demo.arcade.software/C4Db1hkZU3Dyqd5VmY99?embed&show_copy_link=true" title="Shopping App - FlutterFlow" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>
As soon as the process is completed, you will see the following view in your Firebase Settings dashboard.
<img src="/img/firebase/firebase-created-managed.png" alt="Firebase Project Created" class="landscape-image"  />

#### Enable Firebase Authentication
If your app uses Firebase Authentication, enable Authentication in the Firebase console and configure only the sign-in providers your app needs. The Firestore Content Manager connection also requires Email/Password sign-in to be enabled for its managed access flow.

#### Enable Firebase Storage
If you plan to use Firebase storage in your app, click on the Enable Storage on Firebase and enable it on Firebase console.

#### Download Firebase Config files
The configuration files are necessary when connecting to Firebase. It contains various settings and keys that enable your project to communicate with Firebase services. To generate those files, click on Auto Generate Config Files and then click Generate Files.


## Connect an existing Firebase project manually

If you already have a Firebase project and want to connect it to your current FlutterFlow project, go to **Settings & Integrations > Project Setup > Firebase** and click on the Firebase Setup Wizard. A pop-up dialog will appear. Follow these steps:

#### Setup Firebase

In the dialog, scroll down to **Setup Firebase**, check that option, and click **Next Step**. The second page of the dialog will open. Before filling in more information, you need to allow FlutterFlow to access your Firebase project. The following section will guide you through this process.

#### Allow FlutterFlow to Access Your Project

1. Go to the Firebase console of your existing project, navigate to the far left menu, and select **Project Settings -> Users and Permissions**.

2. Select **Add Member** from the top right.

3. Add **firebase@flutterflow.io** as an "**Editor**" for your project and select **Done**. Then press **Add Member**.
![firebase-add-member.png](firebase-add-member.png)
4. On the same page (i.e., Users and Permissions), select **Advanced Permission Settings** (small blue text below the table). This will open the Google Cloud console in a new browser window.

<img src="/img/firebase/project-settings.png" alt="Steps 2, 3 and 4" />

5. Find the row containing *firebase@flutterflow.io* and select **Edit principal** (pencil on the far right of the row).

<img src="/img/firebase/firebase-principal.png" alt="In the Google Cloud console page" />

6. Select **+ Add Another Role.**

7. Under **Select A Role**, search for **Service Account User** (you may need to scroll to find this). Select **Service Account User**.

<img src="/img/firebase/service-account-user.png" alt="On choosing Select A Role and searching for Service Account User" class="small-image"/>

8. Select **+ Add Another Role** again. Under **Select A Role**, search for **Cloud Functions Admin**. Select **Cloud Functions Admin**.

:::info
Cloud Functions Admin permissions are required for FlutterFlow features that deploy Cloud Functions, such as Push Notifications. This role is optional if you do not use those features. Enabling the Cloud Functions API and upgrading the Firebase project to the Blaze plan are separate prerequisites for deploying functions; the billing plan does not control whether the IAM role appears.
:::

:::caution[Grant only required project access]
These roles let FlutterFlow configure resources in this Firebase project. Grant them only to the documented FlutterFlow principal and only on the intended project. Periodically review project members and remove access when FlutterFlow no longer needs to manage the project.
:::

#### Connect and autogenerate files

1. From the Firebase dashboard of your project, navigate to the far left menu and select **Project Settings**.

2. Under Your Project, find the **Project ID**, right-click it, and copy.

3. Return to FlutterFlow, enter your Firebase Project ID in the dialog, and click Connect. A green checkmark will appear once the connection is successful.

4. Under Config Files, choose **Generate Config Files** and then select **Generate Files**.

:::info
Do not close or refresh the page while the files are being generated.
:::


## Connect to Firebase on Creating a New FlutterFlow Project

If you know you'll be integrating Firebase as you create your project, you can do the following:

#### Step 1: Create a new project and enable Firebase

First, create a new project, and while doing so, keep the Setup Firebase option enabled and click Next Step.

<img src="/img/firebase/create-project-enable-firebase.png" alt="Alt text" class="small-image"/>

#### Step 2: Connect to Firebase

If you'd like FlutterFlow to create a Firebase project for you, click **"+ Create Project"** and follow the [related steps](#create-a-new-firebase-project-from-flutterflow). Alternatively, if you wish to connect an existing Firebase project manually, please follow the [manual steps here](#connect-an-existing-firebase-project-manually).


#### Step 3: Enable Authentication

Turn on the Enable Authentication to allow users to log into your app using various sign-in methods, including email and password, social media providers, and even phone number.

**Note:** this step only enables authentication. You will need to complete an additional setup to implement authentication logic later.

<img src="/img/firebase/enable-auth-option.png" alt="Enable Authentication During Project Creation" class="small-image"  />


## Enable Firestore for Database Access

If you plan to use Firestore Database as your backend, follow these additional steps to enable Firestore. This will allow you to create collections and add documents directly from FlutterFlow.

To configure Firestore Database:

1. From the Firebase dashboard of your project, navigate to the far left menu. Under Build, select Firestore Database and then select Create Database (marked in yellow in the screenshot).

<img src="/img/firebase/firebase-db-enable.png" alt="Alt text"  />

2. Next, set your **Firebase security rules**. Prefer production mode and deploy rules that match your app's access model. If you temporarily select **Start in test mode** for a disposable prototype, treat the database as publicly accessible during the test window and replace those rules before adding real user data or sharing the app.

<img src="/img/firebase/firebase-security.png" alt="Alt text"  />

:::warning
Test-mode rules are not production security. Configure, test, and deploy [Firestore Security Rules](../database/cloud-firestore/firestore-rules.md) before storing sensitive data. Authentication alone does not restrict a collection unless the rules enforce the intended authorization.
:::

3. Next, you will need to choose the location where your Firestore data will be stored. From the dropdown, select a location and then select Enable. Please see this link for additional information on Firebase locations.

<img src="/img/firebase/firebase-location.png" alt="Alt text"  />

On completion, you land at the panel view of Cloud Firestore and can start creating collections and documents right away!

### Adding Indexes

Deploying indexes is necessary to perform certain queries in your Firestore database. Firestore automatically adds indexes for the most basic queries. However, when you apply both filtering and ordering while querying a collection, an index is necessary, and a warning will be generated to add it.

We create indexes for you. The only thing you need to do is deploy them to your Firestore database.

Here are the steps to deploy indexes.

- Click on the Firestore from the Navigation Menu (left side of your screen).
- Switch to the **Settings** tab.
- Scroll down to the **Firestore Indexes** section and click on **Deploy**.

:::caution[Please note]
If you add a filtering/ordering on the query or change the existing filtering/ordering settings, you should deploy the Firestore Indexes again.
:::

<div class="video-container"><iframe title="Connect to Firebase interactive tutorial" src="https://www.loom.com/embed/1abddd1120db477da2c085dbc6b7a742?sid=5b161c8b-3957-4ac9-b27f-dc5ebc03f550" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>




## Enable Billing

To deploy [Cloud Functions](https://firebase.google.com/products/functions) used by features such as Braintree payments or Push Notifications, or to use [Cloud Storage for Firebase](https://firebase.google.com/products/storage), place the project on the pay-as-you-go Blaze plan. Since February 3, 2026, Cloud Storage for Firebase requires Blaze to provision or retain access to buckets; eligible no-cost usage can still apply on Blaze.

1. From the Firebase dashboard of your project, navigate to the far left menu. Under Build, select **Functions** and then select **Upgrade project**.

2. Select **Purchase**. If this is your first time enabling billing, you will be taken to a page to provide payment information. Otherwise, you can select an existing billing account. Configure budgets and alerts, but remember that budget alerts notify you and do not automatically cap usage or charges. Review [Firebase pricing](https://firebase.google.com/pricing) and the [current Cloud Storage billing requirements](https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024).

<img src="/img/firebase/billing.png" alt="Alt text"  />

## Related documentation

See [App Check](/integrations/firebase/app-check) for a related FlutterFlow workflow.
