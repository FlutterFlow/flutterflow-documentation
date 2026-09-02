---
keywords:
  - database
  - firestore
  - loading
slug: /troubleshooting/test-mode/loading-spinner-run-mode
title: Loading Spinner in Run Mode
description: >-
  A persistent loading spinner in FlutterFlow's Run Mode usually indicates an
  issue with your Firestore rules configuration.
tags:
  - FlutterFlow
  - Troubleshooting
  - Test Mode
last_verified: 2026-09-02
---
# Loading Spinner in Run Mode

A persistent spinner means an expected completion state was never reached. Firestore rules are one possible cause; unresolved futures, repeated actions, a missing error branch, connectivity, and null-dependent UI can look the same.

:::info[Prerequisites]
- You have already connected your FlutterFlow project to Firebase.
- You have access to your Firebase Console.
:::

Here are the steps to fix this error:

1. **Copy Firestore Rules from FlutterFlow**

    1. Open your project.
    2. Navigate to **Firestore** → **Settings**.
    3. Click the **Copy** icon to copy the default Firestore rules.

    ![Loading Spinner in Run Mode in FlutterFlow](../assets/20250430121355282620.gif)

2. **Paste the Rules in Firebase Console**

    1. Open the **[Firebase Console](https://console.firebase.google.com/)**.
    2. Select your project and go to **Firestore Database**.
    3. Open the **Rules** tab.
    4. Paste the copied rules into the editor and click **Publish**.

    ![Loading Spinner in Run Mode in FlutterFlow](../assets/20250430121355575413.gif)

3. **Retest Your Project in FlutterFlow**

    Review the rule diff and test it before publishing. Never deploy a permissive rule merely to remove the spinner. Then reproduce in Run Mode and inspect the first error plus network/backend logs.

:::tip
Always keep your Firestore rules up to date after making structural changes to your database in FlutterFlow.
:::

## Related documentation

See [Black Screen During Run Mode](/troubleshooting/test-mode/black-screen-during-run-mode) for a related FlutterFlow workflow.
