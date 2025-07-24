---
keywords: ['generate', 'certificates', 'flutterflow']
slug: /troubleshooting/backend/generate-sha-certificates-flutterflow
title: How to Generate SHA Certificates in FlutterFlow
---

# How to Generate SHA Certificates in FlutterFlow

FlutterFlow makes it easy to generate the necessary **SHA certificates** using the **Automatic Firebase Setup** feature. These certificates are required for enabling Firebase integrations like authentication, dynamic links, and more.

:::info[Prerequisites]
You must have connected your project to Firebase using FlutterFlow’s **Automatic Firebase Setup**.
:::

Ways to generate SHA Certificates in FlutterFlow:

- **Automatically Generating SHA Certificates**

    When you use **Automatic Firebase Setup**, FlutterFlow automatically generates the required SHA certificates for you. These certificates are:

        - **SHA-1**
        - **SHA-256**

        The generated SHA values are automatically uploaded to your Firebase project and stored under your app settings in the Firebase console.

- **Manually Generating or Replacing SHA Certificates**

    If you prefer to manually generate or update your SHA certificates, follow the steps below:

        1. Open **Android Studio** or a terminal with **Java Development Kit (JDK)** installed.
        
        2. Run the following command to generate the SHA-1 certificate:

            ```bash
            keytool -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android
            ```

        4. Locate the SHA-1 and SHA-256 values in the output.

        5. Go to your Firebase Console:
                - Select your project.
                - Navigate to Project Settings > General.
                - Under Your apps, find your Android app.
                - Click Add Fingerprint and paste the SHA-1 or SHA-256 values.

        6. Save your changes.