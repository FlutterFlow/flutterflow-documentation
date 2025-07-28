---
keywords: ['error', 'deployment', 'build']
author: Unknown
created_at: '1677591886'
slug: /deploymentbuild-for-mobile-error-nodecoderforimageformatexception
title: 'Deployment/Build for mobile error: NoDecoderForImageFormatException'
updated_at: '1677592263'
url: https://intercom.help/flutterflow/en/articles/7038400-deployment-build-for-mobile-error-nodecoderforimageformatexception
---

# Deployment/Build for Mobile Error: `NoDecoderForImageFormatException`

## What does this error mean?

This error occurs during deployment or build when the icon launcher image you selected is in an unsupported format or has invalid properties. For example, if the icon is an **SVG file**, the build will fail because FlutterFlow cannot generate launcher icons from unsupported formats.

## How to Fix It

1. Navigate to **Settings > App Assets** in FlutterFlow.
2. Replace both your **App Icon** and **Splash Image**.

### Requirements for App Icon:

- Use **PNG** or **JPEG** format (❌ Avoid SVG and other formats).
- The recommended minimum size is **1024×1024 pixels**.
- Ensure the file size isn’t too large.
- **Avoid transparent areas** in the PNG if targeting iOS.

> ⚠️ FlutterFlow uses the same icon asset to generate both Android and iOS icons, so it must comply with the guidelines of **both platforms**.

## Additional Resources

- [Android Icon Design Specifications](https://developer.android.com/distribute/google-play/resources/icon-design-specifications)
- [Apple App Icon Guidelines](https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/)

![Invalid Icon Example](../assets/20250430121258715184.png)
