---
slug: /concepts/custom-code/cloud-functions
title: Cloud Functions
description: Learn how to use Cloud Functions in your FlutterFlow app for serverless backend functionality.
tags: [FlutterFlow, Cloud Functions, Serverless, Integration]
sidebar_position: 6
keywords: [FlutterFlow, Cloud Functions, Serverless, Integration]
---

# Cloud Functions

[Cloud Functions](https://firebase.google.com/docs/functions) allows you to run backend code in response to events triggered by Firebase features and HTTPS requests. For example, you want to automatically send a welcome email to users when they sign up for your app. You can do this using a Cloud Function that triggers on Firebase Authentication's user creation event.

We allow you to write and deploy Firebase Cloud Functions directly within the platform. With an integrated code editor, writing JavaScript cloud functions is quick and user-friendly. Each function has customizable boilerplate settings, including pre-configured essentials like memory, region, and timeout.

:::note
Read up on some interesting use cases of 
[**Cloud Functions**](https://firebase.google.com/docs/functions/use-cases).
:::

## Adding Cloud Functions

Let's see how to add a *Cloud Function* by building an example that generates logos based on user prompts. Here's how it looks:

<div class="video-container"><iframe src="https://www.loom.
com/embed/9ccf3523d9ce4564a712b6abad926b30?sid=ca4872c1-4cdb-4ea4-8b60-7d9011bef33e" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

The Cloud Function takes input from a TextField widget and initiates an API call to an [image generation API](https://platform.openai.com/docs/api-reference/images/create). Once the image URL is retrieved, it's displayed within an Image widget.

Here are the step-by-step instructions to build such an example:

1. [Add page state variables](#1-add-page-state-variables)
5. [Build a page](#2-build-a-page)
8. [Create and deploy Cloud Function](#3-create-and-deploy-cloud-function)
11. [Optional: Add package](#4-optional-add-package)
14. [Trigger Cloud Function](#5-trigger-cloud-function)
17. [Optional: Use Cloud Function result](#6-optional-use-cloud-function-result)

:::info[Before you Begin]

* Make sure the project is on Blaze plan on Firebase.
* Completed all steps in the
[**Firebase Setup**](../../ff-integrations/firebase/connect-to-firebase-setup.md).
:::

### 1. Add page state variables

For this example, you'll need to set up two [page state variables](/data-and-backend/state-management/page-state#1.-creating-page-state-variable):

1. **generatingImage (*****Type: Boolean*****)**: This is used to control the visibility of a 
loading indicator during the logo creation process. Its value is set to *True* before initiating the API call and switched to *False* once the logo generation is complete.
5. **logoImage (*****Type: ImagePath*****)**: This is used to hold the generated logo image. After a successful API call, the retrieved image URL is stored here, allowing the logo to be displayed in the Image widget.

<p></p>
![img_6.png](imgs%2Fimg_6.png)

### 2. Build a page

Let's add a page that allows users to enter the prompt. To speed up, you can add a page from the [template](/getting-started/adding-new-page#add-page) or use [AI Page Gen](/getting-started/adding-new-page#ai-gen-page). Here is the page added using AI Page Gen, and after some modification, it looks the below:

Also, see how to [build a page layout](/widgets-and-components/ui-and-layout-101) if you want to build a page from scratch.

![img_7.png](imgs%2Fimg_7.png)

Few things to note here:

* We use the [ConditionalBuilder](/widgets-and-components/widgets/base-elements/conditionalbuilder) widget to show/hide the loading indicator based on the *generatingImage* variable. **Tip**: The Else branch of this widget is nothing but a ProgressBar inside the Container with a [rotating loop animation](/widgets-and-components/animations#4.-rotate).
* The Image widget uses the *logoImage* variable to display the logo.

### 3. Create and deploy Cloud Function

To create and deploy a *Cloud Function* :

1. Click on the **Cloud Functions** from the [*Navigation Menu*]
(/getting-started/ui-builder/navigation-menu) (left side of your screen).
5. Click **+ Add**. This will add the default newCloudFunction*.*
8. Set the **Cloud Function Name**.

#### Boilerplate Settings

On the right side, you can configure the following Boilerplate Settings:
1. **Memory Allocation**: You can specify the amount of memory your function should have when 
    it's executed based on its complexity and needs. This setting is crucial as it influences the function's performance and the cost of running it. More memory can enhance performance for intensive tasks but also increase costs.
5. **Timeout (s)**: This refers to the maximum amount of time, in seconds, that a function is allowed to run before it is automatically terminated. If your function takes longer to execute, increasing the timeout setting may be necessary. However, be aware that longer timeouts can incur higher costs since billing is based on execution time.
8. **Require Authentication**: Turn on this setting if you want users to be authenticated to execute this cloud function.
11. **Cloud Function Region**: This determines the geographical location of the servers where your functions are hosted and executed. Ideally, you should keep this same as your *Default GCP resource location* and the Cloud Function Region specified in the Firebase Advanced Settings.

![img_8.png](imgs%2Fimg_8.png)

#### Configuring Input & Output

Your cloud function might need some data to process and return the result. You can do so 
by configuring the input and output.

1. To receive output from a Cloud Function, enable the **Return Value** and choose an 
        appropriate Type for the output, like 'String' for text. For this example, set it to *ImagePath* to get the URL of the generated logo.
5. To input data: Click **+ Add parameters**. **Name** the parameter, select its **Type**, choose single or multiple items (**Is List** option), and uncheck **Nullable** if the value can be null. For this example, add a parameter 'prompt' with *Type* set to *String*.
8. When using [Custom Data Types](/data-and-backend/custom-data-types), Cloud Function expects JSON, matching each field in the Data Type to a key-value pair in the JSON. If the Data Type is a list, the function expects a list of JSONs. For example, for a custom data type named 'Person' with fields 'Name' and 'Age,' the function should return:

 ```
        //JSON:
        { "Name": "John", "Age": 30 }
		
        //Example Cloud Function Code:
        return {
          "name": person.name,
          "age": person.age
        };
```

For a list, the function should return:
		
        
```
        //JSON
         [ { "Name": "John", "Age": 30 }, { "Name": "Jane", "Age": 25 } ]
		 
        //Example Cloud Function Code:
        return filteredpersons.map(filteredpersons => {
          return {
            "name": filteredpersons.name,
            "age": filteredpersons.age
          };
        });
```
    
#### To deploy
1. Click the `[</>]` icon to view the boilerplate code; a popup will open with the updated 
code, and then click **`</> Copy to Editor`**. **Tip**: To see if you are able to deploy the cloud function (before adding your own code), proceed directly with steps 8 and 9.
2. Inside the code editor, add the cloud function code. **Tip**: You can copy the boilerplate code 
   to [ChatGPT](https://chat.openai.com/) and ask it to write the desired code based on that.
3. Click **Save Cloud Function**.
4. Click **Deploy**.

Here's the code used for this example:

```
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const https = require('https');

exports.logoMaker = functions.region('us-central1')
    .runWith({
        timeoutSeconds: 10,
        memory: '512MB'
    }).https.onCall((data, context) => {
        return new Promise((resolve, reject) => {
            const prompt = data.prompt;
            if (!prompt) {
                reject(new functions.https.HttpsError('invalid-argument', 'No prompt provided'));
                return;
            }

            const postData = JSON.stringify({
                model: "dall-e-3",
                prompt: prompt,
                n: 1,
                size: "1024x1024"
            });

            const options = {
                hostname: 'api.openai.com',
                port: 443,
                path: '/v1/images/generations',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR-APIKEY`,
                    'Content-Length': postData.length
                }
            };

            const req = https.request(options, (res) => {
                let responseBody = '';

                res.on('data', (chunk) => {
                    responseBody += chunk;
                });

                res.on('end', () => {
                    try {
                        const responseJSON = JSON.parse(responseBody);
                        if (responseJSON.data && responseJSON.data.length > 0) {
                            // Retrieve the URL of the first image
                            const firstImageUrl = responseJSON.data[0].url;
                            resolve(firstImageUrl);
                        } else {
                            reject(new functions.https.HttpsError('not-found', 'No images found'));
                        }
                    } catch (error) {
                        reject(new functions.https.HttpsError('internal', 'Error processing response', error));
                    }
                });
            });

            req.on('error', (error) => {
                reject(new functions.https.HttpsError('internal', 'Error generating image', error));
            });

            req.write(postData);
            req.end();
        });
    });
```

:::tip[Important]
Always regenerate and use the updated boilerplate code or adjust your own code accordingly whenever there are changes in the code, boilerplate settings, or input/output parameters.
:::

<div class="video-container"><iframe src="https://www.loom.
com/embed/1dc13a747b6b4f6d9c9f6d3e1721e488?sid=a756ed68-f20a-4723-8a89-bc1462ede168" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



### 4. Optional: Add package

Your cloud function may require third-party packages to work. You can include any npm package (dependency) by listing it in the `package.json` file. This file not only manages the npm package dependencies for your functions but also holds project metadata, sets up scripts for tasks such as deployment and outlines the compatible Node.js versions.

To add a dependency, open the `package.json` file and specify your package in the `dependencies` section.

![img_9.png](imgs%2Fimg_9.png)

### 5. Trigger Cloud Function

The newly created *Cloud Function* will be available as an action when you are adding one. For this example, on click of a button, we'll first set the *generatingImage*to *True* and then [trigger the Cloud Function](/actions/actions/cloud-function).

<div class="video-container"><iframe src="https://www.loom.
com/embed/5c712863f95c4fcabd5c3851a3cbe56b?sid=a7ac875f-11b5-4b5a-b3e2-8ae03ce49571" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


### 6. Optional: Use Cloud Function result

To use the *Could Function* result, ensure you provide the *Action Output Variable Name* while adding the action, and then you can access it via the **Set from Variable menu > Action Outputs > [Action Output Variable Name]**.

For this example, we'll use the result (i.e., generated logo image URL) and set it to *logoImage*variable. Here's how you do it:

<div class="video-container"><iframe src="https://www.loom.
com/embed/0c4306c1951a4d9099aa96324c7561af?sid=69709110-ad60-4e98-bf53-36a50a99e425" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



## FAQs

<details>
<summary>I am getting Cloud Function Deployment Errors</summary>

![img_10.png](imgs%2Fimg_10.png)

<p></p>

If you encounter deployment errors, it may be helpful to check out [this community post](https://community.flutterflow.io/discussions/post/how-to-fix-cloud-function-deployment-errors-all-solutions-discussion-wgfMLgpLrBlmnUI) for possible solutions and insights.

</details>




