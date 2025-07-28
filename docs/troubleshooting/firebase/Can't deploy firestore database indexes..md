---
keywords: ['database', 'firestore', 'deploy']
author: Unknown
created_at: '1677502144'
slug: /can-t-deploy-firestore-database-indexes
title: Can't Deploy Firestore Database Indexes
updated_at: '1677879784'
url: https://intercom.help/flutterflow/en/articles/7034528-can-t-deploy-firestore-database-indexes
---

# Can't Deploy Firestore Database Indexes

When you add or update a query with new filters in FlutterFlow, the platform prompts you to deploy the necessary Firestore indexes. This process creates the appropriate indexes in your Firebase Firestore database to support those queries.

> 📘 Learn more about Firestore indexes in [this guide](https://docs.flutterflow.io/data/firestore/using-indexes) before proceeding.

![Index Deployment Prompt](../assets/20250430121307457486.png)

---

## 🛠 Troubleshooting Steps

If you’re unable to deploy indexes, follow these steps to resolve the issue:

### ✅ 1. Enable Email Sign-In

Ensure that **Email/Password** sign-in is enabled in your Firebase Authentication settings.

> 🔗 [Enable Firebase Email Authentication](https://docs.flutterflow.io/integrations/firebase/authentication#emailpassword)

---

### ✅ 2. Assign Required Cloud Permissions

Grant the following roles to `firebase@flutterflow.io` in your Firebase project:

- **Editor**
- **Cloud Functions Admin**
- **Service Account User**

> 🔗 [How to assign Firebase roles](https://docs.flutterflow.io/integrations/firebase/permissions)

---

### ✅ 3. Update Firebase Rules

Make sure your Firebase rules allow access for FlutterFlow to deploy indexes.

> 🔗 [Update Firebase Rules](https://docs.flutterflow.io/data/firestore/setting-up-firestore#step-5-update-firestore-rules)

---

### ✅ 4. Refresh FlutterFlow and Clear Cache

- Reload FlutterFlow with `Ctrl + R` (or `Cmd + R` on Mac).
- Log out and log back in.
- Clear your browser cache.

---

### ✅ 5. Check Index Limits in Firebase

If you still can't deploy indexes, you may have hit the **index quota limit** for your Firebase plan.

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project.
3. Navigate to **Firestore Database** > **Indexes**.
4. Check for any warnings or quota-related errors.

> 🔢 Firebase allows up to **200 composite indexes** by default, though this may vary based on your project or pricing plan.

---

## 🔄 When Index Deployment is Required

Anytime you **modify**, **add**, or **remove** a query in FlutterFlow, you'll be prompted to re-deploy indexes. This ensures your app continues to query data efficiently.

---

## Still Need Help?

If none of these steps resolve the issue, reach out to our support team at [support@flutterflow.io](mailto:support@flutterflow.io).
