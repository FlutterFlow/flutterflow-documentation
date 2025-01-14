---
slug: /resources/style-guide
title: How to name variables? 
description: 
tags: [Style Guide, Variables]
keywords: [Style Guide, Variables]
---

# Naming Variables

Follow a consistent naming convention for variables, functions, and components to make your code more readable and maintainable.

Best practices for naming conventions in app development, especially for projects using Flutter, aim to improve code readability, maintainability, and consistency across the application. Here are some general guidelines tailored for different aspects of a Flutter project:

Various naming styles (as suggested by [Dart Effective Style Guide](https://dart.dev/effective-dart/style#identifiers)):

- **UpperCamelCase** names capitalize the first letter of each word, including the first.

- **lowerCamelCase** names capitalize the first letter of each word, except the first which is always lowercase, even if it's an acronym.

- **lowercase_with_underscores** names use only lowercase letters, even for acronyms, and separate words with _.

![various-naming-styles.png](imgs/various-naming-styles.png)

**General Principles**
- **Be Consistent:** Whatever conventions you choose, apply them consistently across the project.
- **Be Descriptive:** Names should be self-explanatory, reducing the need for additional comments to explain what a variable, function, or class does.
- **Avoid Abbreviations:** Unless it's a well-known abbreviation, spell out words to avoid confusion.



### Pages & Components
Use **UpperCamelCase** for all widget, component, page, and screen names to maintain consistency and readability. FlutterFlow ensures clarity by automatically adding "Widget" to widget names when generating code. For components, you can suffix the name with "Component" to clearly distinguish them. 

Similarly, for pages and screens, include "Page" or "Screen" in the name to indicate their purpose. This approach aligns with Dart conventions for class names and ensures a well-organized project structure.

:::tip[Do's]
- **Use UpperCamelCase for Names:** Always use **UpperCamelCase** for widgets, components, pages, and screens. Examples: `CustomButton`, `UserProfilePage`, `MainViewComponent`.

- **Include "Screen" or "Page" in Page Names:** Use "Screen" or "Page" in file names to identify UI screens or pages. Examples: `LoginScreen`, `SettingsPage`.

- **Use Prefixes for Clarity When Necessary:** Add a prefix if it significantly improves clarity or prevents naming conflicts. Example: `AdminUserProfile` (to differentiate it from `CustomerUserProfile` or `UserProfile`).

- **Be Descriptive and Clear in File Names:** Ensure names are descriptive enough to convey their purpose at a glance. Examples: `OrderConfirmationScreen`, `ProductDetailsPage`.
:::

:::danger[Don'ts]
- **Don’t Use Unnecessary Prefixes:** Avoid prefixes that do not add clarity or are redundant. Bad Example: `AppPrimaryButton` (if `PrimaryButton` is sufficient).

- **Don’t Add "Widget" Explicitly:** Avoid adding "Widget" to class or component names manually, as FlutterFlow already appends it during code generation. Bad Examples: `ButtonWidget`, `ProfileCardWidget`.

- **Don’t Use LowerCamelCase for Class Names:** Reserve **lowerCamelCase** for variables and methods, not for components, or pages. Bad Examples: `loginButton`, `userProfile`.

- **Don’t Mix Naming Conventions:** Maintain consistency with UpperCamelCase for all widgets, components, pages, and screens. Bad Examples: `userLogin`, `Profilecard`, `headerView`.

- **Don’t Use Generic Names Without Purpose:** Avoid overly generic names that do not clearly convey the file’s intent. Bad Examples: `Main`, `View`, `Screen1`.

:::

### Custom Data Types & Enums

When naming custom data types and enums, use UpperCamelCase for consistency and clarity. Ensure that names are descriptive, providing a clear representation of the entity or purpose.

:::tip[Do's]

- **Use UpperCamelCase for Custom Data Types:** Name your custom data types using **UpperCamelCase**. Ensure that names are clear, concise, and descriptive, reflecting the entity they represent. Good Examples: `UserModel`, `ProductDetails`, `OrderItem`.

- **Use consistent naming for Enum Names and Values:** Use **UpperCamelCase** for the enum name such as `Status`, `ConnectionState`, `UserRole` and **lowerCamelCase** for its values for e.g `{active, inactive, pending}`. This approach aligns with Dart's enum naming guidelines and ensures consistency.

- **Use Plural Names for Lists:** If the data type represents a List, use a plural name to clarify its purpose. Good Example: `OrderItems` (to represent multiple `OrderItem` objects).
:::

:::danger[Don'ts]

- **Don’t Use All Lowercase or Mixed Case for Custom Data Types:** Avoid using all lowercase or inconsistent casing in data model class names, as it reduces readability. Bad Example: `usermodel`, `product_details`.

- **Don’t Use Vague or Non-Descriptive Names**: Avoid using generic or unclear names that do not clearly describe the data entity. Bad Example: `DataModel`, `Entity`, `Item`.

- **Don’t Mix Naming Conventions for Enums:** Maintain consistent capitalization between enum names and their values. Bad Example: `enum UserRole { Admin, EDITOR, viewer }`
:::

### Constants

Flutter prefers using a lowercase `k` prefix for constants to indicate their immutability, especially for project-specific constants. This approach is more concise and aligns with Dart's common practices. Use **SCREAMING_SNAKE_CASE** only when contributing to global or legacy projects where it is already in use.

:::tip[Do's]
- **Start Constants with a k Prefix:** Always use a lowercase `k` followed by **UpperCamelCase** for constants in FlutterFlow projects.
- **Use Descriptive and Contextual Names:** Clearly describe the purpose of the constant. Avoid using abbreviations unless they are widely understood. Examples: `kUserRoleAdmin`, `kMaxUploadSizeMb`
:::

:::danger[Don'ts]
- **Don’t Omit the k Prefix for Constants:** Avoid using plain names for constants in a Flutter-specific project, as they might conflict with variables or methods. Bad Examples: `maxItems`, `apiEndpoint`.
- **Don’t Use Vague or Generic Names:** Avoid using names that fail to describe the purpose of the constant. Bad Examples: `VALUE`, `DATA`, `X`, `Y`.
:::
