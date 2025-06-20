---
keywords: ['deployment', 'error', 'releases']
slug: /google-play-draft-release-error
title: Google Play Draft Release Error
---
# Google Play Draft Release Error

```js
Google Play failed to upload artifacts. Only releases with status draft may be created on draft app.: {    "error": {        "code": 400,        "message": "Only releases with status draft may be created on draft app.",        "status": "INVALID_ARGUMENT"    } }
```

The error above indicates that Google Play only allows you to create a **Draft Release** when your app is still marked as a draft in your Google Play Console. You likely have missing or incomplete app information in Google Play preventing full release submission.

One of the most common causes of a publishing error when deploying to the Google Play Store is when you haven't filled out all the necessary information in the Play Store before deploying the application.

Follow these steps to fix the issue:

:::note
Make sure that you fill out all the information in the Play Store including the store listing information and the setup information.
:::

- **Step 1**: 

    On the projects dashboard, navigate to the **settings and integrations** section.​

    ![](../../assets/20250430121320431269.png)

- **Step 2**:

    Navigate to the **Mobile Deployment** section.​

    ![](../../assets/20250430121320759595.png)

- **Step 3**:

    Under the Google Play Store Deployment section, toggle on **submit as draft**.

    ![](../../assets/20250430121321051936.png)
