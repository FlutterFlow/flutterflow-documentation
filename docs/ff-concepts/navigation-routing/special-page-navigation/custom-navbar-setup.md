---
keywords: ['custom', 'navbar', 'navigation', 'app bar']
slug: /custom-navbar-setup
title: Custom Navigation Bars
---

# Custom Navigation Bars

Build a custom `Navigation Bar` (NavBar) to support dynamic views, role-based access, or complex widget layouts such as embedded cart counters or animated icons. Unlike the default NavBar widget, this approach gives full control over design and visibility.

![](../assets/20250430121449657102.png)

:::info[Prerequisites]
- A component to be used as the custom NavBar.
- Pages with `Stack` layout to allow overlay positioning.
- Local State variable or conditional logic to control visibility.
:::

Follow the steps below:

1. **Build the NavBar Component**

   1. Create a **Component** and design your NavBar layout.
   2. Add widgets as needed: icons, labels, counters, conditional containers, etc.
   3. Ensure the NavBar’s height is consistent across screens (e.g., `100px`).

2. **Add the NavBar to Your Pages**

   1. Wrap the page layout in a `Stack`.
   2. Place the NavBar component inside a `Container` widget.
      - Set the container’s vertical alignment to `1` (bottom).
      - Set its width and height to match screen width and desired NavBar height.

      ```plaintext
      Page
      └─ Stack
         ├─ Main Page Content
         └─ Container (height: 100px, align: bottom)
               └─ NavBar Component
      ```

3. **Configure NavBar Behavior**

   1. Add `Bottom Padding` to your main page content equal to the NavBar’s height. This prevents the NavBar from overlapping other widgets.

   ![](../assets/20250430121450015102.png)

   2. Use `Local State`, `App State`, or conditional logic from a database (e.g., `is_admin`) to control:
      - Which version of the NavBar appears.
      - Whether the NavBar is visible at all.

   :::warning
   Avoid placing the custom NavBar on subpages. NavBar components should only be used on top-level pages. Adding back navigation (e.g., `Pop` actions) to these pages may result in routing issues.
   :::

**Example: Conditional NavBar Logic**

   You can conditionally display different layouts depending on the user’s role:
      - **Admin** users may see extra items or a different layout.
      - **Standard** users may have limited options.
      - Use the `is_admin` field from the `Users` collection to control this logic dynamically.

**Sample Project:**

   A public sample project is available demonstrating:
      - A basic custom NavBar
      - A conditional NavBar that changes layout based on user role

      **How to Use the Sample:**

         1. Launch the project.
         2. Tap **Login** using the pre-configured test user.
         3. Navigate to:
            - **Custom NavBar/AppBar** to view a static NavBar layout.
            - **Conditional NavBar** to explore role-based NavBar behavior.
            - Toggle the `is_admin` field to test both states.

         ![](../assets/20250430121450326812.png)

         ![](../assets/20250430121450591399.png)
         
         ![](../assets/20250430121450801118.png)
