---
keywords: ['deployment', 'error', 'store']
slug: troubleshooting/google-play-store-deployment/fix-keystore-read-error-on-google-play
title: Fix Keystore Read Error on Google Play
---

# Fix Keystore Read Error on Google Play

This error occurs when deploying an app to the Google Play Store and the system fails to access the keystore file required for signing.

The error message is found below:

   ```text
   Error: Failed to read key ******** from store "/tmp/keystore.keystore"
   ```

:::info[Prerequisites]
- Ensure you have access to the original keystore file and its credentials.
- Confirm you are using a paid FlutterFlow plan to enable Android deployment.
:::

Follow the steps below to resolve the issue:

- **Verify Android Deployment Settings**
   Go to `Settings > Android Deployment` and ensure a valid keystore file is uploaded.

- **Check Keystore Credentials**
   Make sure the following values are correctly entered:
      - Keystore Password
      - Key Alias
      - Key Password

- **Generate a New Keystore (If Needed)**
   If the keystore is missing or corrupted, you can generate a new one using the following command:

      ```js
      keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
      ```

4. **Upload the Correct Keystore File**
      Confirm that the correct `.keystore` file is used during deployment.