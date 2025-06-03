---
keywords: ['storage', 'firebase', 'flutterflow']
slug: /understanding-firebase-storage-limits-in-flutterflow
title: Understanding Firebase Storage Limits in FlutterFlow
---

# Understanding Firebase Storage Limits in FlutterFlow

Understanding the limits of **Firebase Storage** is essential for managing your app's files and costs in FlutterFlow. This guide summarizes the key points and best practices.


## 1. Firebase Storage Plans & Limits

### 🔹 Spark Plan (Free)
- Up to **5 GB** of storage at no cost.
- Once you reach this limit, you must upgrade to continue storing files.

### 🔹 Blaze Plan (Pay-as-you-go)
- Charges are based on the amount of storage used.
- The price per TB decreases as your usage increases.
- For the latest details, always check the [Firebase Pricing page](https://firebase.google.com/pricing).


## 2. Firebase Operations Limit

- Firebase also limits the **number of operations** (uploads, downloads, deletes) per day, especially on the Spark plan.
- Plan your app's functionality and user experience with these limits in mind.


## 3. Managing Firebase Storage Wisely

:::tip
Proactive management helps avoid unexpected costs and storage issues.
:::

Here's how to manage Firebase storage:

- **Delete unneeded files** regularly.
- **Compress files** (especially images and videos) before uploading.
- **Monitor** your storage usage in the Firebase Console.
- For apps with high data volume or large files, set up automated cleanup routines if possible.

## 4. Additional Resources

- [Firebase Pricing](https://firebase.google.com/pricing)
- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)
- [FlutterFlow Docs: Storage](https://docs.flutterflow.io/storage)

## Summary:
- Know your plan's limits.
- Monitor usage and operations.
- Clean up and compress files to save space and costs.

Stay informed and manage your storage to keep your FlutterFlow app running smoothly!


