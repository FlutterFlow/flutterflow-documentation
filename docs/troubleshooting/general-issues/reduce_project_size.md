---
keywords: ['limit', 'size', 'optimize', 'reduce project size']
slug: /troubleshooting/general-issues/reduce-project-size
title: Reduce Project Size in FlutterFlow
---

# Reduce Project Size in FlutterFlow

As your FlutterFlow application grows, you may encounter a warning or restriction due to exceeding the project size limit. This typically occurs when there are too many pages, assets, or repeated configurations within the project.

This article outlines best practices to help optimize and reduce your project’s size without compromising functionality.

![](../assets/20250430121409872946.png)

:::info[Prerequisites]
No special configuration is required to apply these optimizations.
:::

Follow these best practices to minimize your project size:

    1. **Remove Unused Pages**  
    Delete any pages that are no longer needed in your project. Each unused page adds to the total project weight and may slow down compilation.

    2. **Use Network Paths for Large Media**  
    For large assets like videos or audio files, use hosted URLs instead of uploading them directly into your FlutterFlow assets.

    3. **Avoid Repeating Actions**  
    If the same action is used multiple times across widgets or pages, consider using a custom function or variable instead of duplicating logic.

    ![](../assets/20250430121410100752.png)

        :::tip
        Consolidating repeated actions not only reduces size but also makes future maintenance easier.
        :::

:::tip
- Consolidate themes and styles to avoid duplication.
- Remove unused assets from the asset manager.
- Split large applications into smaller feature-based projects if necessary.
:::

By following these best practices, you can keep your project size manageable and ensure a more stable development experience within FlutterFlow.

