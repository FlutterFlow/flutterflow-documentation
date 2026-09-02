---
keywords:
  - rive
  - animation
  - loading
  - error
slug: /troubleshooting/widget/rive-animation-loading-errors
title: Rive Animation Loading Errors
description: Rive animations may fail to render when the source file is incorrectly linked.
tags:
  - FlutterFlow
  - Troubleshooting
  - Widget
last_verified: 2026-09-02
---
# Rive Animation Loading Errors

Rive animations may fail to render when the source file is incorrectly linked. This guide outlines how to provide a valid `.riv` file URL for successful animation loading.

:::info[Prerequisites]
- A valid Rive animation is hosted online with a `.riv` extension.
- The animation is added to a FlutterFlow widget that supports Rive.
:::

## Steps to Fix Rive Animation Not Loading

1. **Verify the Rive File URL**
   Ensure the URL returns the Rive binary itself over HTTPS without requiring a browser session. A `.riv` suffix is a useful signal, but the response content, access permissions, redirects, and CORS policy determine whether the app can load it.

   ```text
   https://public.rive.app/community/runtime-files/1199-2317-jack-olantern.riv
    ```

    If the URL returns a webpage, login redirect, expired signed URL, or blocked cross-origin response, it will not load reliably.

2. **Copy the Correct Link from Rive Community:**

    - Go to the animation page on the **[Rive Community](https://rive.app/marketplace)**.
    - Right-click the **Download** button.
    - Select Copy Link Address.

        Prefer a stable direct asset URL and confirm it in a private window. Do not make a private bucket public just to fix loading; configure an appropriate authenticated or intentionally public delivery path.

## Related documentation

See [Custom Widget Errors](/troubleshooting/widget/custom-widget-errors) for a related FlutterFlow workflow.
