---
keywords: ['android', 'flutterflow', 'import']
slug: /sync-limitations-modified-source-code
title: Sync Limitations with Modified Source Code
---

# Sync Limitations with Modified Source Code

Manually editing FlutterFlow-generated code in an external IDE such as **Android Studio** or **VS Code** can be useful for advanced customization. However, FlutterFlow does **not** support importing or syncing these changes back into the FlutterFlow visual builder.

:::warning
Once code is modified outside of FlutterFlow, those edits **cannot** be re-imported or synced with your FlutterFlow project.
:::

:::info[Prerequisites]
- A FlutterFlow project exported to your local IDE (VS Code, Android Studio, etc.).
- GitHub connection configured if running in Test Mode.
:::

**Recommendations**

   If you require significant customizations:

      1. **Export Your Code**  
         Use the **Download Code** feature in FlutterFlow to export your project to an IDE.

      2. **Maintain a Separate Codebase**  
         Continue development independently in your IDE without expecting reverse compatibility with FlutterFlow.

      3. **Use GitHub for Test Mode**  
         You can connect your GitHub repository to FlutterFlow and run your modified app using **Test Mode**.

         ![](../imgs/20250430121235199536.png)

      4. **Document External Changes**  
         Track custom code modifications separately as they won't reflect in your FlutterFlow project.

:::note
- All visual development and features within FlutterFlow must be maintained in the builder itself.
- The exported project becomes a standalone Flutter project once modified outside of FlutterFlow.
:::