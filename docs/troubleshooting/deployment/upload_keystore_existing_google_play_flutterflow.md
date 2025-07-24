---
keywords: ['upload', 'existing', 'file']
slug: troubleshooting/deployment/upload-keystore-existing-google-play-flutterflow
title: Upload an Existing Keystore File to FlutterFlow for a Google Play Project
---

# Upload an Existing Keystore File to FlutterFlow for a Google Play Project

If your app was originally published on Google Play using another platform, this guide will help you retrieve or reset your keystore, upload it to FlutterFlow, and deploy the updated version of your app.

- **Option 1: Generate a New Keystore and Upload It to Google Play**

    If you're starting fresh with a new keystore, follow the steps below.

        1. **Create a New Keystore**

            Open your terminal and run the following command:

            ```text
            keytool -genkeypair -alias allyou -keyalg RSA -keysize 2048 -validity 10000 -keystore allyou.keystore
            ```

            This generates a new keystore (`allyou.keystore`) with a validity of 10,000 days.

            ![](../assets/20250430121201175857.png)

            ![](../assets/20250430121201415199.png)

            ![](../assets/20250430121201673795.png)


        2. **Export the PEM Public Key**

            Next, export the public key from the keystore using:

            ```js
            keytool -export -rfc -keystore allyou.keystore -alias allyou -file allyou.pem
            ```

            This creates a file called `allyou.pem`.

        3. **Upload the PEM File to Google Play**

            1. Open the **Google Play Console**.
            2. Submit the `allyou.pem` file during the app signing key setup process.

        4. **Wait for Approval**

            Once submitted, wait for Google Play to approve the key. Monitor your console for updates.

        5. **Upload Keystore to FlutterFlow**

            Once approved:

            1. Open your project in **FlutterFlow**.
            2. Go to **Deploy > Android Settings**.
            3. Upload the `allyou.keystore` file.
            4. Enter the **keystore password**, **key alias**, and **key password**.

            You can now deploy your app using this key.

- **Option 2: Request a New Upload Key from Google Play (If You Lost It)**

    If your upload key was lost or compromised, you can request a reset from Google Play.

        1. **Request a New Key**

            1. Sign in to the **Google Play Console**.
            2. Select your app.
            3. Go to **Setup > App Integrity**.
            4. Click **Request upload key reset**.
            5. Follow the on-screen instructions.

            :::note
            If you can’t find "App Integrity", use the search bar in the Play Console.
            :::

            ![](../assets/20250430121201908772.png)

            ![](../assets/20250430121202201523.png)

            It may take up to **48 hours** for the new key to be issued.

        2. **Verify and Convert the New Key**

            If your key is issued in `.jks` or `.p12` format:

                - To verify the key:

                ```js
                keytool -list -v -keystore path/to/your_new_key.jks
                ```

                - To convert from `.p12` to `.jks` format:

                ```js
                keytool -importkeystore -srckeystore your-key.p12 -srcstoretype pkcs12 -destkeystore your-key.jks -deststoretype JKS
                ```


        3. **Upload the New Keystore to FlutterFlow**

            1. Log into FlutterFlow.
            2. Navigate to **Deploy > Android Settings**.
            3. Upload the `.jks` file.
            4. Provide the password, key alias, and key password.

            ![](../assets/20250430121202456192.png)

            ![](../assets/20250430121202663162.png)

            :::tip
            Run a test build in FlutterFlow using the new keystore to confirm everything works before uploading to Google Play.
            :::

:::note
Your existing keystore used to sign your app can be downloaded from the **Deploy** tab in FlutterFlow by clicking the **orange key icon**.

![](../assets/20250430121202861692.png)
:::

Managing your keystore correctly is critical for app updates on Google Play. Always:

    - Backup your keystore securely.
    - Store passwords safely.
    - Contact Google Play or FlutterFlow Support if you get stuck.

    Deploying with the right keystore ensures seamless updates and app continuity.


