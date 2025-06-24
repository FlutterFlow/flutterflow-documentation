---
keywords: ['custom widget', 'widget errors', 'widget troubleshooting', 'flutterflow']
slug: /troubleshooting-custom-widgets
title: Troubleshooting Custom Widgets
---

# Troubleshooting Custom Widgets

This article demonstrates common errors and issues that may occur when creating a `Custom Widget` in FlutterFlow, along with steps to resolve them. In this example, an `Animated Text Widget` is used.

![](../assets/20250430121322843622.gif)

**Project URL:** [Animated Kit Widget Project](https://app.flutterflow.io/project/animated-kit-widget-fyqw6j)  

**Run Mode URL:** [Animated Kit Widget Run Mode](https://app.flutterflow.io/run/QP62FwanUTRs7O3HJzdo)


:::tip[Best Practices Before Creating a Custom Widget]
- Set a unique name for the custom widget in the left panel `Side Widget` field.
- Start with the boilerplate code template provided by FlutterFlow. Copy it and modify your code from there.
:::

![](../assets/20250430121323364253.gif)


**Common Errors and Solutions:**

    1. **Widget Name Conflicts with Package Name**

        One common issue is using a widget name that conflicts with the name of a package you have imported as a dependency.

        ![](../assets/20250430121324152439.png)

        ![](../assets/20250430121324382074.png)

        Avoid using generic or conflicting names like `main` or `widget`. Always use unique widget names that do not overlap with any package names.

    2. **Missing Package Imports in Code**

        After adding an external package as a dependency, it is required to import the package at the top of your code. If you forget to do this, you may encounter errors such as:

        "The method X isn't defined..."

        ![](../assets/20250430121324695186.png)

        Here is how to fix this issue:

            - Visit the package page on **[pub.dev](https://pub.dev/)** and locate the import line in the package details section.
            - Copy and paste the correct import statement into your custom widget code.

                Example:

                ![](../assets/20250430121324981835.png)  
                ![](../assets/20250430121325311155.png)


    3. **Missing Indirect Dependencies**

        Some packages may rely on additional external packages. Ensure that all required dependencies are also imported in your code.

        ![](../assets/20250430121325659677.png)

        In this example, the package depends on another package named `silver_tools`, which must also be imported:

        ![](../assets/20250430121325972589.png)

        Always review the dependency chain for any external packages you add.


    4. **Widget Name Mismatch Between UI and Code**

        If you forget to update the widget name in the boilerplate code, a mismatch may occur between the widget name defined in FlutterFlow and the class name in your code. This will lead to compilation errors.

        Incorrect example:

        ![](../assets/20250430121326300880.png)

        Corrected version with matching names:

        ![](../assets/20250430121326628836.png)

        Ensure that the widget name matches exactly in both places.


By following these best practices and carefully reviewing package imports, dependencies, and widget names, most common issues with `Custom Widgets` in FlutterFlow can be avoided.

