---
keywords: ['google sign-in', 'authentication', 'firebase', 'web', 'run mode', 'test mode']
slug: /troubleshooting/authentication/google-signin-run-test-web
title: Enable Google Sign-In for Web, Run Mode, and Test Mode
---

# Enable Google Sign-In for Web, Run Mode, and Test Mode

Google Sign-In and other social authentication methods (e.g., Facebook, Microsoft) may not work in **Run/Test mode** or your **published web app** unless your domain is properly authorized in Firebase.

Firebase enforces domain restrictions for security when handling OAuth-based sign-ins.

:::info[Prerequisites]
- A Firebase project connected to your FlutterFlow app.
- Social authentication (e.g., Google, Facebook, Microsoft) already set up.
- Access to the Firebase Console with editor or owner permissions.
:::

## Authorize Your Domain in Firebase

1. **Open the Firebase Console**  
   - Visit [Firebase Console](https://console.firebase.google.com) and select your project.

2. **Go to Authentication Settings**  
   - Navigate to **Authentication > Settings**.
   - Scroll to the **Authorized Domains** section.

3. **Add Your Required Domains**  
   - Click **Add Domain** and input the relevant domains:

     - For **Run Mode**:
       ```text
       app.flutterflow.io
       ```

     - For **Published Web App** (hosted on FlutterFlow):
       ```text
       yourapp.flutterflow.app
       ```

     - For **Test Mode Debug Sessions**:  
       - Copy the domain shown in the "Known Issues" section in FlutterFlow or from the test run browser URL.

   ![](../assets/20250430121454943811.png)
   
   ![](../assets/20250430121259325933.png)

:::tip
If Google Sign-In or other auth methods fail in Run/Test mode, it's often because the test domain hasn’t been added to Firebase’s authorized domains list.
:::

:::note
- Firebase blocks sign-in attempts from **unauthorized domains** for security.
- If your app uses **multiple environments** (e.g., staging, test, production), be sure to add all relevant domains.
:::


Once your domains are added and saved in Firebase, social sign-ins like Google will work correctly in all deployment modes in FlutterFlow.
