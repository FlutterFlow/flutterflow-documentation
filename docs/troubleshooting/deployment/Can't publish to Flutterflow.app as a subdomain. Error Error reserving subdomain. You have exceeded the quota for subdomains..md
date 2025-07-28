---
keywords: ['error', 'exceeded', 'subdomains']
author: Unknown
created_at: '1677756386'
slug: /can-t-publish-to-flutterflow-app-as-a-subdomain-error-error-reserving-subdomain-you-have-exceeded-the-quota-for-subdomains
title: "Can't publish to Flutterflow.app as a subdomain. Error: Error reserving subdomain. You have exceeded the quota for subdomains."
updated_at: '1678233842'
url: https://intercom.help/flutterflow/en/articles/7044258-can-t-publish-to-flutterflow-app-as-a-subdomain-error-error-reserving-subdomain-you-have-exceeded-the-quota-for-subdomains
---

# Can't Publish to `flutterflow.app` Subdomain

---

## ❗ Issue

You are trying to publish your web app to the `.flutterflow.app` domain and encounter the following error:

```text
Error reserving subdomain. You have exceeded the quota for subdomains.
```

![Error message screenshot](../assets/20250430121255479960.png)

---

## 🧠 Why You Are Seeing This Error

There is a limit to how many **custom subdomains** you can publish under the `flutterflow.app` domain:

- **Free plan:** up to **3 subdomains**
- **Paid plan:** up to **10 subdomains**

> **Note:** Only *custom* subdomains count toward this quota. If your subdomain uses the **project ID**, it does **not** count.

---

## ✅ Solutions

### 1. Change the Subdomain Name to Your Project ID

Use your **project ID** as the subdomain name (set in the “Site URL” field). This avoids counting against your quota.

![Using project ID as subdomain](../assets/20250430121255810538.png)

---

### 2. Unpublish Other Projects

If you've reached your subdomain quota, unpublish some of your existing projects:

1. Go to **Web Publishing**
2. Click the **Unpublish** button on older projects.

![Unpublish a project](../assets/20250430121256121119.png)
