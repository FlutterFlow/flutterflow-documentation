---
keywords: ['requires', 'sign', 'team']
author: Unknown
created_at: '1650490445'
slug: /what-to-do-when-sign-in-for-imagenotification-requires-a-development-team
title: What To Do When Sign In for "ImageNotification" Requires a Development Team
updated_at: '1721943894'
url: https://intercom.help/flutterflow/en/articles/6157025-what-to-do-when-sign-in-for-imagenotification-requires-a-development-team
---

# What To Do When Sign In for "ImageNotification" Requires a Development Team

To resolve this issue, you’ll need to create an Identifier on [developer.apple.com](https://developer.apple.com/) called: `[yourbundleID].ImageNotification`.

## Adding the Identifier
You must add an Identifier to be able to send push notifications to iOS devices after you deploy your app to the App Store.

### Steps to Add an Identifier

1. From your **Apple Developer account**, open the **Identifiers** section.
2. Click on the **(+)** button on the right side of the **Identifiers** label.
3. Select **App IDs** and click **Continue**.
4. Select the *Type* **App** and click **Continue**.
5. Enter the **Description** as `ImageNotification` (make sure to use the exact same letters and capitalization: `ImageNotification`).
6. Enter the **Bundle ID** as your package name and add `.ImageNotification` at the end.
7. Click **Continue** and then click **Register**.


