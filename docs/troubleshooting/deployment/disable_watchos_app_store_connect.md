---
keywords: ['connect', 'store', 'turn']
slug: /troubleshooting/deployment/disable-watchos-app-store-connect
title: Disable watchOS Deployment in App Store Connect
---

# Disable watchOS Deployment in App Store Connect

When deploying your FlutterFlow app to the App Store, you might encounter an error related to **watchOS**. This typically happens if the build includes watchOS support that isn't needed for your app.

This article explains how to disable the **watchOS** option for a specific App ID in your Apple Developer account.

:::info[Prerequisites]
You must have access to the Apple Developer portal and appropriate permissions to manage App IDs.
:::

## Steps to Disable watchOS for an App

    Follow these steps to turn off watchOS support for a specific app:

    1. **Sign in** to your **[Apple Developer account](https://developer.apple.com/)**.

    2. From the dashboard, click **Certificates, Identifiers & Profiles**.

    3. In the left-hand menu, choose **Identifiers**, then click **App IDs**.

    4. Locate the App ID associated with your FlutterFlow project and click **Edit**.

    5. Scroll to the **WatchKit App** section.

    6. **Uncheck** the box labeled **Enable for this App ID**.

    7. Click **Continue**, then **Save** your changes.

:::note
- This change applies **only** to the App ID you edited.
- To disable watchOS for other apps, repeat these steps for each App ID individually.
:::

