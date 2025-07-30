---
keywords: ['error', 'deployment', 'previously']
slug: troubleshooting/app-store-deployment/fix-app-store-bundle-version-error
title: Fix App Bundle Version Error on App Store
---

# Fix App Bundle Version Error on App Store

If you're seeing this error when deploying to the App Store, it's because the **version and build number** of your app match a previously uploaded version. Apple requires each build to have a **higher version or build number** than the last.

The error message is found below: 

   - `NSLocalizedFailureReason=The bundle version must be higher than the previously uploaded version.`
   - `"NSLocalizedDescription": "The provided entity includes an attribute with a value that has already been used"`

:::info[Prerequisites]
Make sure you have access to the previous version and build number submitted to the App Store. You can find this in App Store Connect under the build history for your app.
:::

Follow the steps below to resolve this error:

1. **Check your last uploaded version/build number**  
   For example: version `1.0.1` with build number `12`.

2. **In FlutterFlow, navigate to:**  
   `Settings > Deployment`

3. You have two options:
   - **Option 1: Let FlutterFlow increment automatically**  
     - Keep the version the same.
     - Leave the build number **empty**.
   - **Option 2: Manually increment the build number**  
     - Increase the previous build number by 1 (e.g., from 12 to 13).

4. If the issue persists:
   - Try incrementing both the **version number** (e.g., `1.0.2`) and **build number**, or just leave build number empty to auto-increment.

   ![](../assets/20250430121110741307.png)

Follow the steps below to prevent future errors:

   - If using **manual updates**, always increase the build number before each new deployment.
   - For **automatic handling**, leave the build number field empty to let FlutterFlow manage it for you.