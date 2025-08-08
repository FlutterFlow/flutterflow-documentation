---
keywords: ['deployment', 'error', 'value']
slug: troubleshooting/deployment/invalid-pem-private-key-error
title: Invalid PEM Private Key Error
---

# Invalid PEM Private Key Error

When deploying to the App Store, you may encounter the following error in the console:

    ```text
    app-store-connect: error: argument --private-key: Provided value is not a valid PEM encoded private key
    ```

    This typically appears during the Fetch Signing Files step and may look like this:

        ```text
        Failed Step: Fetch Signing files usage: app-store-connect ...
        error: argument --private-key: Provided value is not a valid PEM encoded private key
        ```

:::info[Prerequisites]
An active Apple Developer account and a valid PEM-encoded private key file generated from your App Store Connect account.
:::

This error indicates that the private key provided is either invalid or incorrectly formatted. The App Store requires a valid PEM-encoded private key for deployment authentication.

Follow the steps below to resolve the error:

1. **Navigate to App Settings**

    Go to **App Settings** > **Mobile Deployment** > **App Store**.

2. **Re-upload Private Key**

    - Re-upload a valid PEM-encoded private key.
    - Ensure the file is not corrupted and follows the proper PEM format.

    :::tip
    If the App Store configuration has not been set up yet, refer to the deployment documentation for detailed setup steps.
    :::