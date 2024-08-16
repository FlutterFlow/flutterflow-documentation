

# Consistency

## Variable Naming

Follow a consistent naming convention for variables, functions, and components to make your code more readable and maintainable.

Best practices for naming conventions in app development, especially for projects using Flutter, aim to improve code readability, maintainability, and consistency across the application. Here are some general guidelines tailored for different aspects of a Flutter project:

Various naming styles (as suggested by [Dart Effective Style Guide](https://dart.dev/effective-dart/style#identifiers)):

- **UpperCamelCase** names capitalize the first letter of each word, including the first.

- **lowerCamelCase** names capitalize the first letter of each word, except the first which is always lowercase, even if it's an acronym.

- **lowercase_with_underscores** names use only lowercase letters, even for acronyms, and separate words with _.

**General Principles**
- **Be Consistent:** Whatever conventions you choose, apply them consistently across the project.
- **Be Descriptive:** Names should be self-explanatory, reducing the need for additional comments to explain what a variable, function, or class does.
- **Avoid Abbreviations:** Unless it's a well-known abbreviation, spell out words to avoid confusion.



### Components and Widgets  

Use UpperCamelCase for all widget and component names to maintain consistency and readability. Always suffix widget names with their type (e.g., "Widget" or "Component") to clearly indicate their purpose.This aligns with Dart conventions for class names.

:::tip[Do's]
- **Use UpperCamelCase for Widget Names:** Always write widgets and component names in UpperCamelCase. Example: `MyCustomButton`, `UserProfileWidget`, `MainViewComponent`.

- **Suffix Widget Names with the Type of Widget:** When naming widgets, include a suffix that indicates the type of widget. Example: `LoginButtonWidget`, `ProfileCardComponent`, `HeaderViewWidget`.

- **Use Prefixes for Clarity When Necessary:** Add a prefix only if it significantly improves clarity or helps avoid naming conflicts. Example: `AppUserProfileWidget` (if `UserProfileWidget` is already in use).
:::


:::danger[Don'ts]
- **Don’t Use Prefixes Unnecessarily:** Avoid adding prefixes that do not enhance clarity or that are redundant. Bad Example: `MyAppButtonWidget` (if `ButtonWidget` would suffice).

- **Don’t Use LowerCamelCase for Class Names:** Avoid using **lowerCamelCase** for class names, which is generally reserved for variables and method names. Bad Example: `loginButtonWidget`, `userProfileComponent`.

- **Don’t Mix Naming Conventions:** Stick to **UpperCamelCase** consistently for all class names and widgets. Mixing conventions can reduce code readability. Bad Example: `userLoginWidget`, `ProfilecardComponent`, `headerView`.
:::

### Pages & Screens

Use **UpperCamelCase** for page and screen file names with "Screen" or "Page" in the name to ensure clarity and consistency. This helps developers quickly identify and distinguish UI elements, improving project organization and readability.

:::tip[Do's]
- **Use UpperCamelCase for Page Names:** Name your Pages using UpperCamelCase to clearly indicate their purpose. Example: `HomePage`, `SearchResultsScreen`, `UserProfilePage`.

- **Include "Screen" or "Page" in the Page Name:** Always include the word "Screen" or "Page" in the file name to clearly identify UI screens or pages. Example: `LoginScreen`, `SettingsPage`.

- **Be Descriptive and Clear in File Names:** Ensure that file names are descriptive enough to convey their purpose or content at a glance. Example: `OrderConfirmationScreen`, `ProductDetailsPage`.
:::

:::danger[Don'ts]
- **Don’t Use All Lowercase or Mixed Case in Page Names:** Avoid using all lowercase or inconsistent casing in file names, as it can lead to confusion and reduce readability. Bad Example: `homepage`, `searchResultscreen`.

- **Don’t Use Generic Names Without Purpose:** Avoid generic names that do not clearly indicate the file’s purpose or content. Bad Example: `Main`, `View`, `Screen1`.

- **Don’t Mix Naming Conventions:** Consistently use UpperCamelCase for all page names related to pages and screens. Mixing conventions can make your project harder to navigate. Bad Example: `search_results_screen`, `Userprofilepage`.
:::


### Custom Data Types

When naming data types, use **UpperCamelCase** for consistency and opt for descriptive names that clearly represent the entity. 

:::tip[Do's]

- Use UpperCamelCase for Custom Data Types: Name custom data types using UpperCamelCase and ensure that the class names are clear and descriptive, accurately reflecting the entity they represent Example: `UserModel`, `ProductDetails`, `OrderItem`.
:::

:::danger[Don'ts]

- **Don’t Use All Lowercase or Mixed Case for Custom Data Types:** Avoid using all lowercase or inconsistent casing in data model class names, as it reduces readability. Bad Example: `usermodel`, `product_details`.

- **Don’t Use Vague or Non-Descriptive Names**: Avoid using generic or unclear names that do not clearly describe the data entity. Bad Example: `DataModel`, `Entity`, `Item`.