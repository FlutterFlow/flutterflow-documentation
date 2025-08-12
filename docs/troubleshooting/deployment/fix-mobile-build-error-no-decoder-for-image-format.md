---
keywords: ['error', 'deployment', 'build', 'no decoder for image format', 'app icon']
slug: /troubleshooting/deployment/fix-mobile-build-error-no-decoder-for-image-format
title: Fix Mobile Build Error No Decoder for Image Format
---

# Fix Mobile Build Error No Decoder for Image Format

This error occurs when the mobile build process fails because the app icon (or another image asset) is in a format that the build tools cannot decode.

In FlutterFlow, it most commonly happens when:

- The app icon is uploaded as **SVG** (unsupported for builds).
- The PNG icon has **transparency** and you are building for **iOS**.
- The file format is not **PNG** or **JPEG**.
- The image is very large or has an unusual color profile.

Example error:

   ```text
   No decoder for image format
   ```

   ![](../assets/20250430121258715184.png)

Follow the steps below to fix this error:

   1. Go to **Settings > App Assets** in your FlutterFlow project.
   2. Replace the current **App Icon** and **Splash Image** with supported formats.
   3. Make sure that:
      - The file format is **PNG** or **JPEG** (SVG and WebP are not supported for app icons).
      - The resolution is **1024×1024 pixels** or smaller.
      - PNG icons for iOS do **not** have transparency.
   4. Save and rebuild your project.

:::info[Recommended Guidelines]
- Use **PNG** or **JPEG** formats only.
- Use an icon of at least **1024×1024 pixels**.
- Avoid transparent PNGs for iOS builds.
- Keep file size reasonable (under 1 MB is recommended).
- Follow [platform-specific icon design guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons) and [Android icon guidelines](https://developer.android.com/develop/ui/views/launch/icon_design).
:::
