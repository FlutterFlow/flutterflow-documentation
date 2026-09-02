---
keywords:
  - signing
  - codemagic
  - certificate
slug: /troubleshooting/apple-store-deployment/codemagic-signing-certificate-limit
title: Codemagic Signing Certificate Limit
description: >-
  During iOS deployment, Codemagic attempts to create distribution certificates
  in your Apple Developer Account.
tags:
  - FlutterFlow
  - Troubleshooting
  - Apple Store Deployment
last_verified: 2026-09-02
---
# Codemagic Signing Certificate Limit

During iOS deployment, Codemagic attempts to create distribution certificates in your Apple Developer Account. If the maximum number of certificates has already been reached, the build will fail with a certificate creation error.

## Error Message

```bash
Build failed :|Step 3 script `Fetch signing files` exited with status code 1
Returned 409: There is a problem with the request entity - You already have a current Distribution certificate or a pending certificate request.
```

This message indicates that Codemagic cannot proceed because no additional distribution certificates can be created.

:::info[Prerequisites]
- You are deploying an iOS app using Codemagic.
- Your Apple Developer Program account is active and linked.
:::

**Steps to Resolve Certificate Limit Error:**

1. **Access Your Apple Developer Account**
   Log into your Apple Developer account to manage certificates:

        - Go to the **[Apple Developer Certificates List](https://developer.apple.com/account/resources/certificates/list)**.

2. **Navigate to the Certificates Section**
   In the **Certificates, Identifiers & Profiles** section:

        - Click on **Certificates**.
        - Locate all existing **Distribution Certificates**.

3. **Remove Unused or Expired Certificates**
   Review and delete any unused, expired, or redundant distribution certificates to free up space.

   :::warning
   Revoking a certificate can break signing for other apps, CI systems, extensions, or team members that still depend on its private key. Identify its owners and consumers, preserve required signing assets, and coordinate the revocation with your Apple Developer Account Holder or administrator. Do not delete certificates solely because their names look unfamiliar.
   :::

4. **Re-run Deployment**
   After deleting the certificates, initiate the build process again in FlutterFlow. Codemagic will automatically generate a new certificate as needed.

    :::note
    Codemagic can request a replacement when account permissions and limits allow, but revoking an in-use certificate is not automatically harmless. Verify the affected provisioning profiles and subsequent release signing.
    :::

## Related documentation

See [Codemagic Install Pods Failure](/troubleshooting/apple-store-deployment/codemagic-install-pods-failure) for a related FlutterFlow workflow.
