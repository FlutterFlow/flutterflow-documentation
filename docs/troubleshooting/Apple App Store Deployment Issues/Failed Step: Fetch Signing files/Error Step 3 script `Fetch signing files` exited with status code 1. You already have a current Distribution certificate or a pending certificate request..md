---
keywords: ['signing', 'error', 'fetch']
author: Unknown
created_at: '1677755473'
slug: /error-step-3-script-fetch-signing-files-exited-with-status-code-1-you-already-have-a-current-distribution-certificate-or-a-pending-certificate-request
title: 'Error: Step 3 script `Fetch signing files` exited with status code 1. You
  already have a current Distribution certificate or a pending certificate request.'
updated_at: '1678243075'
url: https://intercom.help/flutterflow/en/articles/7044228-error-step-3-script-fetch-signing-files-exited-with-status-code-1-you-already-have-a-current-distribution-certificate-or-a-pending-certificate-request
---
# Error: Step 3 script `Fetch signing files` exited with status code 1. You already have a current Distribution certificate or a pending certificate request.

**What does this error mean?**
During deployment, Codemagic tried to create distribution certificates in your Apple Console. This failed as you have reached the maximum number of allowed certificates in the Apple Console.
**Full error message**
```
Build failed :|Step 3 script `Fetch signing files` exited with status code 1Returned 409: There is a problem with the request entity - You already have a current Distribution certificate or a pending certificate request.
```
**How to resolve this issue?**
You need to delete a few distribution certificates so that the build can go through.​
**Steps to delete:**

Open the Apple Developer Console in App Store Connect

Select 'Keychain&gt;Login' , then 'Category&gt;My Certificates

Locate and delete your developer, distribution. and server certificates (if applicable)

Note: these certificates are used for signing the application and will be created on-demand during the build.