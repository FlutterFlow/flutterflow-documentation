---
keywords: ['firebase', 'auth', 'authenticated']
slug: /check-firebase-login-method
title: Check Firebase Login Method
---
# Check Firebase Login Method

Understanding which authentication method a user has used can be useful for several reasons. For example, it can be leveraged for analytics, user support, and to customize the user's experience based on their login method. This method, however, is specific to Firebase Authentication.​

In our Flutter app, we can find out which method a user used to authenticate by leveraging Firebase's `User.providerData` property. Let's take a closer look at how this works in the code:


```js
import 'package:firebase_auth/firebase_auth.dart';

String getUserSignInMethod() {
  final user = FirebaseAuth.instance.currentUser;
  String signInMethod;

  for (var info in user!.providerData) {
    signInMethod = info.providerId;
  }

  return signInMethod;
}

```

Here's a breakdown of the code:

  - We first import the [Firebase Auth](https://pub.dev/packages/firebase_auth) package which gives us access to Firebase's authentication methods.

  - Next, we define a function `getUserSignInMethod`. This function will return a string indicating the sign-in method the user used.

  - Inside the function, we obtain the current user from FirebaseAuth using `FirebaseAuth.instance.currentUser`.

  - We then declare a string `signInMethod` that will store the name of the provider used for sign-in.
  
  - `user.providerData` is an iterable that provides UserInfo for each sign-in method used by the user. We loop over this iterable using a `for` loop.
  
  - In each iteration, we assign the `providerId` to our `signInMethod` string. The `providerId` can be 'google.com' for Google, 'facebook.com' for Facebook, and 'password' for email and password.
  
  - After the loop is done, the function returns `signInMethod` string which indicates the sign-in method the user used.
  
  - The function `getUserSignInMethod()` returns a String value which corresponds to the providerId of the user's sign-in method.

Here are examples of how the return value might look like:

- If the user has signed in using Google, the function will return: **`'google.com'`**

- If the user has signed in using Facebook, the function will return: **`'facebook.com'`**

- If the user has signed in using Email and Password, the function will return: **`'password'`**

  These are the identifiers used by Firebase to represent different sign-in methods. Please thoroughly test this function to ensure it fits your specific requirements

:::tip[Use Sign-In Method to Drive Dynamic UI in FlutterFlow]
In FlutterFlow, if you want to display or use the user's sign-in method in your UI logic (example, showing different UIs for Google vs. email login), you can create a custom function using the `providerId` approach shown in the article and **connect it to a custom action**. This allows you to make dynamic decisions inside your app based on how the user authenticated.

Remember to return the result from the custom function and store it in an App State variable for easy access throughout your app.
:::

