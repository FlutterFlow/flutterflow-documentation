
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
If asked, you must grant the access requested from 'flutterflow.io' to be able to create and configure the Firebase project on your behalf. Here, you can **Select all** and click **Continue**.

<img src="/img/firebase/warning-firebase.png" alt="Alt text" />

Once initiated, FlutterFlow will handle the rest of the project creation in the background.

Here's a quick walkthrough:
<iframe src="https://demo.arcade.software/C4Db1hkZU3Dyqd5VmY99?embed&show_copy_link=true" title="Shopping App - FlutterFlow" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>




## Connect an existing Firebase project manually 

If you already have a Firebase project created and want to connect with a FlutterFlow project, select Settings & Integrations > Project Setup > Firebase, click Firebase Setup Wizard, enable Setup Firebase, click Next Step, and then follow the steps below:

1. Enable access to your project
In the Firebase dashboard of your project, navigate to the far left menu. Select **Project Settings -> Users and Permissions**.

2. Select **Add Member** from the top right.

3. Add **firebase@flutterflow.io** as an "**Editor**" for your project and select **Done**. Then press **Add Member**.

4. On the same page (i.e., Users and Permissions), select **Advanced Permission Settings** (small blue text below the table). This will open the Google Cloud console in a new browser window.

<img src="/img/firebase/project-settings.png" alt="Steps 2, 3 and 4" />

5. Find the row containing *firebase@flutterflow.io* and select **Edit principal** (pencil on the far right of the row).

<img src="/img/firebase/firebase-principal.png" alt="In the Google Cloud console page" />

6. Select **+ Add Another Role.**

7. Under **Select A Role**, search for **Service Account User** (you may need to scroll to find this). Select **Service Account User**.

<img src="/img/firebase/service-account-user.png" alt="On choosing Select A Role and searching for Service Account User" />

8. Select **+ Add Another Role** again. Under **Select A Role**, search for **Cloud Functions Admin**. Select **Cloud Functions Admin**.

:::info
Note: The option to add Cloud Functions Admin may only show up if you are on a Firebase Blaze plan. In addition, you may need to  [enable cloud functions](https://console.cloud.google.com/marketplace/product/google/cloudfunctions.googleapis.com) first.
Cloud Functions Admin permissions are required for several FlutterFlow features (e.g., Push Notifications). Adding this Cloud Functions Admin is optional, but not doing so will prevent you from using any functions that require Cloud Functions.
:::


## Connect to Firebase on Creating a New FlutterFlow Project

If you know you'll be integrating Firebase as you create your project, you can do the following: 

#### Step 1: Create a new project and enable Firebase

First, create a new project, and while doing so, keep the Setup Firebase option enabled and click Next Step.

<img src="/img/firebase/create-project-enable-firebase.png" alt="Alt text" class="small-image"/>

#### Step 2: Connect to Firebase  

If you'd like FlutterFlow to create a Firebase project for you, click **"+ Create Project"** and follow the [related steps](#create-a-new-firebase-project-from-flutterflow). Alternatively, if you wish to connect an existing Firebase project manually, please follow the [manual steps here](#connect-an-existing-firebase-project-manually).