---
keywords: ['storage', 'firebase', 'flutterflow']
slug: troubleshooting/firebase/firebase-storage-limits-in-flutterflow
title: Firebase Storage Limits in FlutterFlow
---

# Firebase Storage Limits in FlutterFlow

Managing Firebase Storage properly is essential for controlling your app's file storage and associated costs in FlutterFlow. This article summarizes the current limits and best practices following Firebase’s September 2024 changes.

## Firebase Storage Plans and Limits

- **Blaze Plan (Pay-as-you-go)**

    - Firebase Storage (Cloud Storage for Firebase) is only available on the Blaze plan for new Firebase projects.
    - Storage charges are based on usage volume.
    - The price per GB/TB decreases as your usage increases.
    - Refer to the **[Firebase Pricing page](https://firebase.google.com/pricing)** for current rates.

- **Spark Plan (Free Tier)**

    - For projects created after September 2024, Cloud Storage for Firebase is **no longer available** on the Spark plan.
    - To use file storage (uploads, images, videos, etc.) with Firebase Storage, you must upgrade to the Blaze plan.

:::info
If your Firebase project was created before the September 2024 policy change, you may still have limited access to Firebase Storage under legacy conditions. However, new projects must follow the updated Blaze-only policy.
:::

## Firebase Storage Operations Limits

    - Firebase imposes limits on the number of operations (uploads, downloads, deletes) based on your plan.
    - With Blaze, these limits are generally higher but still subject to quotas depending on your usage volume.
    - Monitor your app’s usage patterns to avoid unexpected failures or costs.

## Best Practices for Managing Firebase Storage

    - Regularly delete unused or unnecessary files.
    - Compress large files (especially images and videos) before uploading.
    - Actively monitor storage usage in the Firebase Console.
    - Set up automated cleanup processes for apps with large or growing data volumes.

:::tip
Proactive storage management helps control costs and maintain app performance.
:::

:::info[Additional Resources]
- [Firebase Pricing](https://firebase.google.com/pricing)
- [Firebase Storage FAQ (September 2024 Changes)](https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024)
- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)
- [FlutterFlow Docs: Storage](/integrations/firebase-storage/storage-rules/)
:::

Always review your Firebase plan details to ensure you're aligned with the most current pricing model and storage policies.
