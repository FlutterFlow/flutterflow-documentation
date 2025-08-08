---
keywords: ['app store', 'deploy', 'codemagic', '503 error', 'large assets']
slug: /fix-app-store-deploy-button-not-working
title: Fix App Store Deploy Button Not Working
---

# Fix App Store Deploy Button Not Working

When deploying your application to the App Store, the **Deploy** button may become unresponsive. In such cases, inspecting your browser’s developer console may reveal the following error:

   ```bash
   POST https://api.flutterflow.io/v1/codemagicBuildRequest 503
   ```

This error usually occurs when your FlutterFlow project exceeds the maximum size limit allowed by Codemagic. Large assets such as videos or high-resolution images can cause the project to surpass this limit.

   Recommended project size: 50 MB or less

**Resolution Steps**

Follow the steps below to fix the issue:

   - Remove Large Assets:

      - Identify and remove large media files (e.g., videos, high-resolution images) from your project.

      - Consider hosting these assets externally using a CDN or cloud storage service, then use the network URLs in your project.

   - Check and Reduce Project Size

      - Ensure your total project size is under 50 MB before deploying.

         Projects exceeding 50 MB are likely to fail during deployment. Always monitor your asset size.