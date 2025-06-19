---
keywords: ['signing', 'codemagic', 'certificate']
slug: /codemagic-signing-certificate-limit
title: Codemagic Signing Certificate Limit
---

# Codemagic Signing Certificate Limit

During deployment, Codemagic attempts to create distribution certificates in your Apple Developer Account. If you have reached the maximum number of allowed distribution certificates, this process will fail, preventing a successful build.

**Full Error Message**

```
Build failed :|Step 3 script `Fetch signing files` exited with status code 1Returned 409: There is a problem with the request entity - You already have a current Distribution certificate or a pending certificate request.
```

This error indicates that Codemagic cannot create a new certificate because existing certificates or pending certificate requests are already using the available slots.

**Solution**

To resolve this issue, delete unused distribution certificates from your Apple Developer account to free up space for new certificates.

    **Steps to Delete Certificates**

        - Open your **[Apple Developer Account](https://developer.apple.com/account/resources/certificates/list)**.
        - Navigate to **Certificates, Identifiers & Profiles**.
        - Under **Certificates**, review the list of existing certificates.
        - Locate and delete any unused or expired **Distribution Certificates**.

    After removing unnecessary certificates, re-run the deployment from FlutterFlow.
    
    :::note
    The deleted certificates will be recreated automatically by Codemagic during the next build process.
    :::

    
