---
keywords: ['rive', 'animation', 'loading', 'error']
slug: /rive-animation-loading-errors
title: Rive Animation Loading Errors
---

# Rive Animation Loading Errors

Rive animations may fail to render when the source file is incorrectly linked. This guide outlines how to provide a valid `.riv` file URL for successful animation loading.

:::info[Prerequisites]
- A valid Rive animation is hosted online with a `.riv` extension.
- The animation is added to a FlutterFlow widget that supports Rive.
:::

## Steps to Fix Rive Animation Not Loading

1. **Verify the Rive File URL**  
   Ensure the file URL ends with `.riv` and points directly to a hosted Rive file.

   ```text
   https://public.rive.app/community/runtime-files/1199-2317-jack-olantern.riv
    ```

    If the URL points to a webpage or lacks the `.riv` extension, the animation will not load in FlutterFlow.

2. **Copy the Correct Link from Rive Community:**

    - Go to the animation page on the **[Rive Community](https://rive.app/community/)**.
    - Right-click the **Download** button.
    - Select Copy Link Address.

        The copied link must end with `.riv`. Any URL that redirects to a webpage or file viewer will fail to render.
