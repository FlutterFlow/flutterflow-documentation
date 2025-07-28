# App Store Deploy Button Not Working

---

**Problem:**
When attempting to deploy your application to the App Store, the deploy button may become unresponsive. If you inspect the browser's console, you might see the following error:

```text
POST https://api.flutterflow.io/v1/codemagicBuildRequest 503
```

---

## Why Does This Happen?
This error typically occurs when your project contains very large assets (such as videos or large images). If the total project size exceeds the recommended limit, the deployment request is rejected by Codemagic.

- **Recommended project size:** 50 MB or less

---

## How to Fix
1. **Remove Large Assets:**
   - Identify and remove large files (especially videos or high-resolution images) from your project assets.
   - Instead, host these files externally (e.g., on a CDN or cloud storage) and access them via network URLs.
2. **Check Project Size:**
   - Ensure your project remains under the 50 MB limit.

---

## Still Not Working?
If you have reduced your project size and the issue persists, please contact FlutterFlow support via [Chat](https://flutterflow.io/support) or email: [support@flutterflow.io](mailto:support@flutterflow.io).