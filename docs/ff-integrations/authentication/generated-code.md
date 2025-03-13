---
slug: /integrations/authentication/generated-code
title: Generated Code
description: Learn about the generated code behind enabling authentication in FlutterFlow.
tags: [Authentication, Generated Code, Custom Authentication, Firebase, Supabase]
keywords: [FlutterFlow, Authentication, Generated Code, Custom Authentication, Firebase, Supabase]
sidebar_label: Generated Code
---

# Authentication: Generated Code

In FlutterFlow, enabling Authentication is a very simple task. You can check the documentation for the same here but ideally it is just enabling Authentication in Settings, choose your Authentication Type and adding an Action to your desired Auth button. But behind the scenes, a lot of code generation happens to enable this function for you, lets go through it one by one. 

We will first discuss the base authentication architecture and then discuss the code changes when we choose custom authentication vs Firebase/Supabase auth. 

## File structure
When we enable Authentication in the Settings dashboard, it creates the following folders in our file structure to manage custom authentication. 
```
lib/
    auth/
         custom_auth/
              auth_util.dart
              custom_auth_manager.dart
              custom_auth_user_provider.dart
```
         
Similarly, when we enable say Firebase authentication, the following files and folders are generated for you. 

```
lib/
    auth/
         firebase_auth/
              auth_util.dart
              email_auth.dart (along with other providers)
              firebase_auth_manager.dart
              firebase_user_provider.dart
         auth_manager.dart
         base_auth_user_provider.dart
```

:::info
This documentation is exclusively focused on the generated code for Custom Authentication. For instructions on integrating custom authentication into your FlutterFlow app, please refer here.
:::

# Custom Auth Manager
The most crucial component of our generated authentication system is the ``CustomAuthManager`` class. It is responsible for managing authentication session attributes such as the ``authenticationToken``, ``refreshToken``, ``tokenExpiration``, and user-specific attributes like `uid` and `userData`. 

This class provides essential functionalities including:
`signIn()`: Handles user sign-in processes. 

`signOut()`: Manages user sign-out actions. 

`updateAuthUserData()`: Updates authentication and user data. 

`persistAuthData()`: Persists authentication data across sessions for persistent login capabilities.

In addition to the `CustomAuthManager`, we have another important file in our authentication framework: `custom_auth_user_provider.dart. `

This file defines a class, ``<ProjectName>AuthUser``, to encapsulate the state of an authenticated user. It leverages BehaviorSubject from the [rxdart](https://pub.dev/packages/rxdart) package to manage a stream of the user object, enabling real-time updates to the user's authentication state. This stream is initially set with a user object that indicates a logged-out state. Subsequent authentication actions will update this stream, enabling real-time adjustments to any part of the application that depends on the user's authentication status.

Building on our authentication framework, the `custom_auth_manager.dart` file brings in the currentUser variable, an instance of the ``<ProjectName>AuthUser`` class. This global reference allows for quick and centralized access to the currently signed-in user's information, enabling access to their authentication state across the application. 

The `loggedIn` property further simplifies verifying if a user is logged in by checking the currentUser's status.

## Auth Manager Initialization
Then, we have the auth_util file, which contains a singleton instance of `CustomAuthManager`

```
final _authManager = CustomAuthManager();
CustomAuthManager get authManager => _authManager;
```

The `authManager.initialize()` is called in `main()` before runApp is executed. 

The `initialize()` method creates an instance of SharedPreferences, preparing it for `authToken`, `refreshToken`, etc, and also handles the logic for token expiration, including the automatic logout when these tokens expire.

:::info
Also note that this initialization occurs only because the 'Persist Auth Sessions' option has been enabled in the Custom Authentication Settings.

<img src="/img/persist-auth-session.png" alt="Alt text for the image" />

:::

This file also offers easy-to-use getters for essential information such as the user's ID, login token, and other data. This setup simplifies the process of accessing and managing login details throughout your app.

## Log in Implementation
When the Log In action is activated by tapping a button, we initiate a series of operations behind the scenes to ensure a smooth login process. 

Upon calling the signIn method, it triggers the `_updateCurrentUser` method from `CustomAuthManager` internally. 

This method receives various parameters such as `authenticationToken`, `refreshToken`, `tokenExpiration`, `authUid`, and `userData`, updating the CustomAuthManager class's properties with these details. Consequently, this stores the current session's authentication and user information effectively.

:::info
To learn more about the concepts of Authentication Token, Refresh Token, and Token Expiry Time, please refer the [Concepts](custom-auth/token.md) doc.
:::

A new user object, marked as logged in (`loggedIn` set to true), along with the provided `authUid` and `userData`, is then added to the user object stream mentioned earlier. This update informs all the stream's subscribers about the changed user state, signaling that the user has successfully logged in.

Additionally, the `persistAuthData` method is invoked to save the updated authentication details (tokens, expiration, user ID, etc.) for future sessions.

After signing in, `context.goNamedAuth('AuthPage', context.mounted);` is called that navigates the user to the Logged In Page specified in FlutterFlow's Authentication Settings.

