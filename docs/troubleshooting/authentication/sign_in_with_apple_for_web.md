---
keywords: ['firebase', 'sign', 'apple']
slug: /sign-in-with-apple-for-web
title: Sign in With Apple (for Web)
---

# Sign in With Apple (for Web)

To enable **Sign in with Apple** on the web, you must complete additional steps in both your **Apple Developer Account** and **Firebase Console**. These steps allow Apple to identify your website and authorize the use of Apple login on web platforms.

:::warning
The **Sign in with Apple (Web)** functionality cannot be tested in Test/Run Mode. You must **deploy** your app to a live domain before testing.
:::

Take the following steps to set up Sign in with App (for Web):

1. **Configure Apple Developer Account**

   Follow these steps in your [Apple Developer Account](https://developer.apple.com/account/):

   1. **Register a New Identifier**  
      - Select **App IDs** and fill in the required details.  
      - Enable the **Sign in with Apple** capability.

   2. **Create a New Service ID**  
      - Provide a name and a unique identifier.  
      - This will be used as the **Service ID** in Firebase.

   3. **Configure Sign in With Apple**  
      - Add your domain and return URL (from Firebase).  
      - Save the configuration.

   4. **Create a New Key**  
      - Enable **Sign in with Apple**.  
      - Download the generated private key (`.p8` file).


2. **Set Up in Firebase Console**

   After downloading the private key, configure your Firebase app by doing the following:

      1. Go to **Authentication → Sign-in method → Apple**.
      2. Enter the following details:
         - **Apple Team ID**
         - **Key ID**
         - **Private Key** (from the `.p8` file)
      3. Set the **Service ID** to match the one created in the Apple Developer account.

      Once these steps are completed, your **Sign in with Apple (Web)** setup should be active.

:::note[Still Not Working?]
If the sign-in process fails after completing these steps, please contact [FlutterFlow Support](mailto:support@flutterflow.io) via Chat or Email.
:::


:::info[Helpful Resources]
- [Apple Developer - Sign in with Apple](https://developer.apple.com/sign-in-with-apple/)
- [Firebase Authentication - Apple Provider](https://firebase.google.com/docs/auth/web/apple)
- [FlutterFlow Authentication Docs](https://docs.flutterflow.io/authentication)
:::