---
keywords: ['troubleshooting', 'actions', 'custom']
author: Unknown
created_at: '1710259162'
slug: /custom-actions-troubleshooting
title: Custom Actions Troubleshooting
updated_at: '1712595441'
url: https://intercom.help/flutterflow/en/articles/9061288-custom-actions-troubleshooting
---
# Custom Actions Troubleshooting

Custom actions in FlutterFlow are powerful, but troubleshooting them can be tricky. This guide will help you systematically resolve common issues.

---

## 1. Read the Error Message

> **Always read the error message** printed during test mode, compilation, or local build. The message often provides a clue about the potential issue.

---

## 2. Common Troubleshooting Checklist

### 🔹 **Action Name Mismatch**
- Ensure the name in the action matches the custom action in your code.
- ![](../../assets/20250430121138021235.png)
- **Tip:** Use the **Add BoilerPlate Code** option to generate code with the correct action name.

### 🔹 **Imports and Arguments**
- Do all imports match those declared in the action settings?
- Are all arguments passed within the builder itself?
- ![](../../assets/20250430121138830209.png)
- **Example:**
    - Argument 1: Missing definition in settings panel
    - Argument 2: Correctly imported
    - Argument 3: Nullable selected, but not specified as nullable in code

**How to fix:**
1. Manually update arguments in both the settings panel and your code.
2. Use the **Add BoilerPlate Code** option (on web, copy only what you need; on desktop, it may replace all code).

![](../../assets/20250430121139816551.gif)

### 🔹 **Name Conflicts**
- Avoid using the same name for the action and any argument.
- ![](../../assets/20250430121142594662.png)

### 🔹 **Reserved Keywords**
- Do not use Dart/Flutter reserved keywords as argument names.
- **Examples:** `abstract`, `else`, `import`, `show`, `as`, `enum`, `in`, `static`, `this`
- *FlutterFlow usually warns you, but double-check!*

### 🔹 **Return Type Mismatch**
- Ensure the custom action returns the correct data type as defined in the settings.
- ![](../../assets/20250430121143268592.png)
- *The function should return the type specified in the settings panel.*

### 🔹 **Internal Library Imports**
- If importing internal libraries (e.g., `../../flutterflow`), set **Exclude from compilation** to `true` if needed.

### 🔹 **Pubspec Dependencies**
- Are all required dependencies included in both the code and the PubSpec?
- ![](../../assets/20250430121143614166.png)
- **Check for:**
    - Version conflicts (check on [pub.dev](https://pub.dev))
    - Multiple versions of the same dependency
    - Conflicts with FlutterFlow's auto-imported dependencies
- ![](../../assets/20250430121143935249.png)
- ![](../../assets/20250430121144228150.png)

### 🔹 **Code Errors**
- **Null values:**
    ```dart
    int example = passingIntWhichMayBeNullable ?? 0;
    ```
- **Correct data types:**
    ```dart
    String numberAsString = "5";
    int example = thisWord; // ❌ Passing a string to an int
    ```
    - Use `.toString()`, `.toInt()`, `.toDouble()` as needed.
- **Single elements vs. arrays:**
    - Ensure you are not passing a single element where a list is expected, or vice versa.

### 🔹 **Exclude from Compilation**
- If this is checked, code will not be error-checked during compilation, but will still run in Test/Run Mode.
- ![](../../assets/20250430121144509497.png)

### 🔹 **Duplicate Data Types/Structs**
- Do not redefine data types or structs already defined in FlutterFlow's data schema panel.
- ![](../../assets/20250430121144853131.png)

### 🔹 **Callback Data Types**
- Ensure callback actions return the correct data type.
- ![](../../assets/20250430121145202849.png)

---

## 3. Additional Resources

- **Debugging with the Browser Console:**
    - Use the browser debug console for logic errors.
- **FlutterFlow University Video:**
    - [Custom Actions Video](https://www.youtube.com/watch?v=YOUR_VIDEO_LINK)
- **Official Docs:**
    - [Custom Actions | FlutterFlow Docs](https://docs.flutterflow.io/custom-actions)

---

> **Tip:** When in doubt, regenerate the boilerplate and compare with your code. Consistency between settings and code is key!