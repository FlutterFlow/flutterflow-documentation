---
keywords: ['storage', 'firebase', 'flutterflow']
slug: /firebase-storage-limits-in-flutterflow
title: Firebase Storage Limits in FlutterFlow
---

# Firebase Storage Limits in FlutterFlow

Managing Firebase Storage properly is essential for controlling your app's file storage and associated costs in FlutterFlow. This article summarizes the key limits and best practices.

## Firebase Storage Plans and Limits

- **Spark Plan**

    - Includes up to **[1 GB](https://firebase.google.com/pricing)** of Firestore storage.
    - Exceeding this limit requires upgrading to a paid plan.

- **Blaze Plan (Pay-as-you-go)**

    - Charges are based on the amount of storage used.
    - Pricing adjusts based on storage volume.
    - Refer to the **[Firebase Pricing page](https://firebase.google.com/pricing)** for current rates.

## Firebase Storage Operations Limits

    - Firebase limits the number of operations (uploads, downloads, deletes) per day.
    - These limits are stricter on the Spark plan.
    - Review your app’s usage patterns and plan functionality accordingly.

## Best Practices for Managing Firebase Storage

    - Regularly delete unnecessary files.
    - Compress images and videos before uploading.
    - Monitor storage usage in the Firebase Console.
    - For high-volume apps, consider automated file cleanup routines.
    
        :::tip
        Proactive storage management helps reduce costs and prevent usage issues.
        :::


:::info[Additional Resources]
- [Firebase Pricing](https://firebase.google.com/pricing)
- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)
- [FlutterFlow Docs: Storage](/integrations/firebase-storage/storage-rules/)
:::

Review your Firebase plan limits, monitor storage usage, and apply storage optimization techniques to ensure efficient and cost-effective storage management for your FlutterFlow app.

