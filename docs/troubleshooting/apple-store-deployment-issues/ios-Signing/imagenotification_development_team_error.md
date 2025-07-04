---
keywords: ['requires', 'sign', 'team']
slug: /imagenotification-development-team-error
title: ImageNotification Development Team Error
---

# ImageNotification Development Team Error

This error occurs when the **ImageNotification** entitlement is missing in your Apple Developer account. To resolve it, create a new Identifier for `ImageNotification` in your Apple Developer account.

:::info[Prerequisites]
- Access to your **Apple Developer account**.
- Permission to manage **Certificates, Identifiers & Profiles**.
:::

**Steps to Create the Identifier:**

1. Sign in to your **[Apple Developer account](https://developer.apple.com/)**.  
2. Navigate to **Certificates, Identifiers & Profiles**.  
3. Select **Identifiers**.  
4. Click the **Add (+)** button.  
5. Choose **App IDs** and click **Continue**.  
6. Under **Type**, select **App** and click **Continue**.  
7. In the **Description** field, enter `ImageNotification` (case-sensitive).  
8. In the **Bundle ID** field, enter your full bundle ID followed by `.ImageNotification` (for example: `com.example.app.ImageNotification`).  
9. Click **Continue** and then **Register** to complete the setup.  

Once this Identifier is added, the signing process should proceed without requiring a development team selection.
