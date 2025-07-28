---
title: Switch Firestore from Datastore to Native Mode
slug: /switch-firestore-datastore-to-native-mode
keywords: ['mode', 'firestore', 'datastore']
---

# Switch Firestore from Datastore to Native Mode

## Background

In some cases, **Cloud Firestore** is configured in **Datastore Mode** by default. This mode is **not recommended** when working with FlutterFlow. You should switch your Firestore setup to **Native Mode** for full compatibility.

![Firestore Mode Warning](../assets/20250430121205509269.png)

---

## Steps to Switch to Native Mode

1. Click on **Go to Google Cloud Console**.
2. In the console, click **Switch To Native Mode**.

![Switch to Native Mode](../assets/20250430121205798445.png)

3. After switching the mode, return to Firebase and reload **Cloud Firestore**.

---

![Reload Firestore](../assets/20250430121206162085.png)

## Troubleshooting

If the error still appears after following the steps above, please reach out to FlutterFlow support via chat or email at [support@flutterflow.io](mailto:support@flutterflow.io).
