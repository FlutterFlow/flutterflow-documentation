---
keywords: ['dependencies', 'pubspec.yaml', 'custom widgets', 'flutterflow']
slug: /add-custom-dependencies
title: Add Dependencies to Custom Widgets or Actions
---

# Add Dependencies to Custom Widgets or Actions

FlutterFlow does not currently support adding dependencies to the entire project via the `pubspec.yaml` file. However, you can include dependencies by associating them with specific **Custom Widgets** or **Custom Actions**.

This approach ensures that only the relevant code includes the necessary packages.

:::info[Prerequisites]
To use this method, you must have a custom widget or action already created within your FlutterFlow project.
:::

## Steps to Add a Dependency

1. **Open the Custom Widget or Action**  
   Navigate to your custom widget or action in FlutterFlow.

2. **Add the Dependency**  
   In the **Dependencies** tab, add the required package name and version.

3. **Refresh the Dependencies**  
   Click the **Refresh** icon to update the packages in your `pubspec.yaml` file.

4. **Import the Package**  
   Use an import statement in your Dart code, such as:  
   ```dart
   import 'package:your_package/your_package.dart';
    ```

    ![](../assets/20250430121235199536.png)

:::note
- Dependencies added this way are scoped to the custom code where they are declared.
- You can repeat these steps for each custom widget or action requiring additional packages.
:::