---
keywords: ['rive', 'animation', 'loading', 'error']
slug: /rive-animation-is-not-loading
title: Rive Animation Is Not Loading
---

# Rive Animation Is Not Loading

If your Rive animation is not loading in FlutterFlow, it is often due to an incorrectly formatted URL. Follow the step to resolve the issue.

- **Verify the URL Format**

    Ensure that the Rive file URL you are using includes the correct `.riv` file extension. The URL should look like:

    ```js
    https://public.rive.app/community/runtime-files/1199-2317-jack-olantern.riv

    ```

    If the file extension is missing or the link points to a webpage instead of the actual .riv file, the animation will not load correctly in FlutterFlow.

    Here is how to get the correct URL:
        
        To obtain the correct network URL for a community Rive animation:

            - Navigate to the animation on the Rive Community.
            - Right-click the Download button.
            - Select Copy Link Address to copy the correct .riv file URL.

                ![](../assets/20250430121524709613.gif)
                
                The copied URL must end with .riv. If it does not, FlutterFlow will not be able to render the animation.

                By ensuring you are using the correct .riv file URL, your Rive animations should load and display properly in FlutterFlow.
