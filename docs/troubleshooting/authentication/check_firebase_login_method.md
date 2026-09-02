---
keywords:
  - firebase
  - auth
  - authenticated
slug: /troubleshooting/authentication/check-firebase-login-method
title: Check Firebase Login Method
description: >-
  Understanding which authentication method a user has used can be useful for
  several reasons.
tags:
  - FlutterFlow
  - Troubleshooting
  - Authentication
last_verified: 2026-09-02
---
# Check Firebase Login Method

Understanding which authentication method a user has used can be useful for several reasons. For example, it can be leveraged for analytics, user support, and to customize the user's experience based on their login method. This method, however, is specific to Firebase Authentication.​

In our Flutter app, we can find out which method a user used to authenticate by leveraging Firebase's `User.providerData` property. Let's take a closer look at how this works in the code:


```js
import 'package:firebase_auth/firebase_auth.dart';

List<String> getUserSignInMethods() {
  final user = FirebaseAuth.instance.currentUser;
  if (user == null) return const [];
  return user.providerData
      .map((info) => info.providerId)
      .toSet()
      .toList();
}

```

Here's a breakdown of the code:

  - We first import the [Firebase Auth](https://pub.dev/packages/firebase_auth) package which gives us access to Firebase's authentication methods.

  - Next, we define `getUserSignInMethods`. It returns all providers currently linked to the Firebase user.

  - Inside the function, we obtain the current user from FirebaseAuth using `FirebaseAuth.instance.currentUser`.

  - If no user is signed in, the function returns an empty list instead of throwing on `user!`.

  - `user.providerData` contains one `UserInfo` entry for each linked provider. The code deduplicates and returns their `providerId` values.

Here are examples of how the return value might look like:

- A user linked to Google might return: **`['google.com']`**

- A user linked to Facebook might return: **`['facebook.com']`**

- A user linked to both email/password and Google might return: **`['password', 'google.com']`**

These identifiers describe linked providers; they do not reliably identify which provider completed the most recent sign-in. Do not use them as proof of recent reauthentication or as an authorization decision on a trusted server.

:::tip[Use Sign-In Method to Drive Dynamic UI in FlutterFlow]
In FlutterFlow, you can create a custom function using the `providerId` approach and use its result in UI logic, such as showing provider-specific account-management instructions.

Treat this as display state only. Re-read the authenticated user when correctness matters, because linked providers can change during a session.
:::

## Related documentation

See [App Starts from HomePage in Run Mode](/troubleshooting/authentication/app-starts-from-homepage-in-run-mode) for a related FlutterFlow workflow.
