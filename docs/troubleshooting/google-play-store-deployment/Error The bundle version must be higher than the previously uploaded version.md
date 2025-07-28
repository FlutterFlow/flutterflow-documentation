---
keywords: ['error', 'deployment', 'previously']
author: Unknown
created_at: '1718224962'
slug: /error-the-bundle-version-must-be-higher-than-the-previously-uploaded-version
title: 'Error: The Bundle Version Must Be Higher Than the Previously Uploaded Version'
updated_at: '1727117531'
url: None
---

# Error: The Bundle Version Must Be Higher Than the Previously Uploaded Version

:::tip
Not sure which type of error your project has? Check out this article on how to identify your Codemagic error.
:::

## What Does This Error Mean?

The error you are encountering occurs because the version and build number of the app you are trying to deploy are the same as the previously deployed version. Each new deployment must have a higher build number than the last one to be accepted by the Apple Store.

### Error Message

```text
NSLocalizedFailureReason=The bundle version must be higher than the previously uploaded version.;
"NSLocalizedDescription": "The provided entity includes an attribute with a value that has already been used"
```


## How to Resolve the Issue

You need to ensure that the build number is higher than the last deployed version. In **FlutterFlow**, you can configure the build number to automatically increment with each deployment attempt.

### Here’s What to Do:

1. **Check the latest version and build number** uploaded to TestFlight.  
   For example, if your last version was `1.0.1` with build number `12`.

2. Navigate to **FlutterFlow > Settings > Deployment** and find the section where you specify the version and build number.  
   ![](../assets/20250430121110741307.png)

3. You have two options:
   - **Option 1:** Keep the version the same and leave the **build number** field empty, allowing FlutterFlow to automatically increment it for you.
   - **Option 2:** Manually increment the **build number** by 1.  
     For example, if the last build number was `12`, change it to `13`.

4. If manually incrementing the build number does not resolve the issue, try incrementing the **version number** as well.  
   For instance, change it to `1.0.2` and leave the **build number** field empty, then attempt the deployment again.

## Preventing Future Errors

To avoid this error in future deployments:

- If you prefer to **manually** increment the build number, be sure to increase it by **one (1)** before each new deployment.
- Alternatively, leave the **build number** field empty altogether, allowing FlutterFlow to handle the increment **automatically**.

## The Issue Was Not Resolved

If this does not resolve the issue, contact FlutterFlow Support at **support@flutterflow.io**
