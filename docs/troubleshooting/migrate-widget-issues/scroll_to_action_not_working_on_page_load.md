---
keywords: ['scroll to action', 'page load', 'delay', 'animation']
slug: /scroll-to-action-not-working-on-page-load
title: Scroll To Action Not Working on Page Load
---

# Scroll To Action Not Working on Page Load

If the `Scroll To Action` does not work as expected when triggered during the page load, follow this guide to understand the cause and apply the recommended solution.

When using `Scroll To Action` in an `On Page Load` action chain, it may fail because:

    - The scrollable widget does not exist yet at the time the action is triggered.
    - The page may still be building its widgets.

        ![](../assets/20250430121250214649.png)

        The reason why this happens is because actions assigned to `On Page Load` execute immediately when the page starts rendering. If the `Scroll To Action` tries to scroll to a widget that has not yet been built, it will not function correctly.

    Follow the steps below to apply the recommended solution and best practices for resolving the issue where the Scroll To Action fails to execute on page load.

        - **Add a Delay Before Scrolling:** Introduce a `Delay Action` before triggering the `Scroll To Action`:

            - Set a delay of approximately 500–700 milliseconds.
            - This allows sufficient time for the scrollable widget to render before the scroll action executes.

                ![](../assets/20250430121250453056.png)

        - **Use Animations for a Smoother Experience**

            To create a visually smoother experience:

                1. Apply an `On Load` animation (e.g., `Fade`) to the scrollable widget (such as `ListView`).
                2. Set the animation duration (e.g., 1200 milliseconds).
                3. Add a `Delay Action` after the page load but before the scroll action (e.g., 700 milliseconds).
                4. Trigger the `Scroll To Action` after the delay.

                This ensures that the widget is fully visible and avoids sudden UI jumps.

:::tip Additional Resources
For more detailed information, see the **[FlutterFlow support article](https://intercom.help/flutterflow/en/articles/7047006-scroll-to-action-is-not-working-when-used-on-page-load)**.
:::
