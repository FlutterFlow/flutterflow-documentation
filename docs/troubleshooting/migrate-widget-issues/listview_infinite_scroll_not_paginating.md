---
keywords: ['listview', 'infinite scroll', 'pagination', 'flutterflow']
slug: /listview-infinite-scroll-not-paginating
title: ListView Infinite Scroll Not Paginating Properly
---

# ListView Infinite Scroll Not Paginating Properly

If your `ListView` with `Infinite Scroll` enabled is loading all items at once instead of paginating, this guide explains why this happens and how to resolve it using best practices in FlutterFlow.

**Problem:**

    - `Infinite Scroll` is enabled, but `ListView` loads all items at once instead of fetching them page by page.
    - This may cause performance issues or unexpected behavior.


    This issue is because of the following reasons:

        - `ListView` expands indefinitely when there is no height constraint.
        - Without a defined height, it cannot determine the visible viewport size, and therefore, all items are fetched and loaded immediately.

**Best Practices to Resolve the Issue:**

    - **Ensure ListView Has a Defined Height**

        For proper pagination, `ListView` must know the available space to calculate how many items to load per page.

        For example, if the available space is `800px` and each item height is `100px`, it will load 10 items (8 fully visible and 2 partially out of view), and continue loading more items as the user scrolls.

        **Implementation in FlutterFlow**

            You can configure `ListView` correctly using one of the following approaches:

                1. **Let ListView Handle Scrolling**

                    - Disable scrolling on the parent `Column` or any parent scrollable widget.
                    - Enable the `Primary` option and set the `Expanded` property for `ListView`.
                    - This allows `ListView` to control its own scrolling behavior and correctly calculate pagination based on viewport height.

                    ![](../assets/20250430121248035007.png)

                2. **ListView Inside Another Scrollable Widget**

                    - If you need `ListView` inside a scrollable parent, wrap it inside a `Container` with a fixed or maximum height.
                    - Example: If the parent widget is a `Column`, wrap `ListView` inside a `Container` with a height of `500px`. The `ListView` will handle its own scroll until the end, and then the parent scroll will take over.


    - **Common Configuration Mistake:**

        - If `ListView` is not inside an `Expanded` widget or lacks a height constraint, it cannot calculate how many items to load, resulting in loading all items at once.
        - If the parent `Column` is scrollable, `ListView` cannot calculate its own height and will load all data immediately.

        ![](../assets/20250430121248379992.png)


        To ensure proper infinite scrolling behavior:

            - Always provide a height constraint for `ListView` either directly or through layout structure.
            - Allow `ListView` to handle its own scrolling where possible.
            - Avoid placing `ListView` inside another scrollable widget without defining its height.

            ![](../assets/20250430121249048672.gif)

For a complete example, refer to this **[ListView Scroll Example Project](https://app.flutterflow.io/project/list-view-scroll-example-wdv076)**.

