---
title: Add Code Customization
sidebar_position: 1
toc_max_heading_level: 4

---

# Code Customization

While FlutterFlow provides a wide range of pre-built components and functionalities, there may be
times when you need to extend your app with custom logic or features that are not readily available.
This
is where writing custom code comes into play. We provide the following features to accommodate
these needs:

* **Custom Functions:** Write custom Dart functions to perform specific tasks or calculations.
* **Custom Actions:** Implement custom actions that can be triggered by user interactions or
  other action triggers.
* **Custom Widgets:** Create custom Flutter widgets to achieve unique UI designs or behaviors.
* **Custom Files:** Ability to edit some parts of the `main.dart` file.

:::tip[Why Write Custom Code?]

- **Extend Functionality:** Add features that are not included in the standard FlutterFlow
  components.
- **Custom Integrations:** Integrate with third-party packages or APIs / databases that require
  specific handling.
- **Unique UI Elements:** Create unique user interface elements that require custom rendering or
  interactions.
  :::

## Common Properties

There are several properties and settings that are common to each type of custom code in
FlutterFlow. Most of these common properties are highlighted in the diagram below. For more
information about some of these properties, see the details provided below.

![custom-code-common.png](imgs%2Fcustom-code-common.png)

### Code Copilot

Code Copilot is an AI-assisted feature that helps you generate code snippets,
functions, or entire blocks of code based on natural language descriptions of what you want to
achieve. It simplifies the app-building process by allowing you to describe the functionality you
need, such as 'calculate the total price of items in a cart', and then the Copilot generates the
necessary code.

This can significantly speed up the building process and reduce the need for in-depth programming
knowledge, making it especially useful for custom functions and actions.

**Limitation:** The prompts are limited to 100 characters currently. 

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/nHrVL2cgyzjIgoSUu36F?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>


###  Compile Code 

When you are done adding your code snippets, you can compile it to ensure there are no 
compilation errors. To do so, click the **Compile Code** button.


<figure>
    ![compile-errors.png](imgs%2Fcompile-errors.png)
  <figcaption class="centered-caption">How to recognize compile time errors</figcaption>
</figure>


###  Code Analyzer 

The code analyzer is available in all your custom code snippets and ensures the quality and correctness of your custom code. It automatically checks your Dart code for errors and warnings, providing real-time feedback as you write.
![code-analyzer.png](imgs%2Fcode-analyzer.png)
When there is a compilation error, the code analyzer will stop running and display the errors caught by the compiler. Once fixed, save the code and rerun the Compile Code button. The code analyzer should then be reconnected. You can also manually reconnect it if needed.

### Custom Code Settings




#### Adding a Pub Dependency

:::tip[Scope]
You can only add a pub dependency to Custom Action & Custom Widgets.
:::

If you plan to use a dependency from [*pub.dev*](https://pub.dev/) into a custom widget or action, you must go through the following steps:

1. [Choosing dependency](#1-choosing-dependency)
5. [Copying dependency/package name](#2-copying-dependency-name)
8. [Copying import statement](#3-copying-import-statement)

##### 1. Choosing dependency

You will find varieties of dependencies for a specific requirement, and choosing the best one can be challenging. This section helps you identify the right dependency by examining its score.

When you search for any dependency in *pub.dev*, you will get a list of dependencies. You can filter out the result based on which dependency is more inclined toward your needs. You can do so by opening and checking each dependency manually.

Once you have a handful of dependencies, consider the following factors while choosing the final one.

- **WEB**: It must support Web to run your app in our Run/Test Mode.
- **Likes**: This shows how many developers have liked a dependency.
- **Pub Points**: Tells the quality of the dependency (out of 130) based on code style, platform 
  support, and maintainability.
- **Popularity**: This metric indicates how many apps use the package. A high popularity score 
  (out of 100%) can suggest that the package is stable and trusted by many developers.
- **Documentation:** A well-documented package will save you time and reduce ambiguity. Check if 
  the package has clear usage examples, a comprehensive README, and ideally API documentation.
- **Maintenance & Updates**: Check the last update date. A regularly updated package is more 
  likely compatible with the latest Dart/Flutter versions and has fewer bugs.

<p></p>

![Dependency-score.png](imgs%2FDependency-score.png)


##### 2. Copying dependency name
To use the dependency code in our code editor, copy its name with the version. To do so, click 
the **Copy to Clipboard** icon.

<p></p>

![img.png](imgs%2Fimg.png)

<p></p>

:::warning
The current dependency might depend on other dependencies to work.So make sure you also copy the name and version of all the additional dependencies to specify in the code editor.
:::

You can check if the current dependency has any additional dependencies inside the '*Dependencies'* section at the bottom right side.

![img_1.png](imgs%2Fimg_1.png)

##### 3. Copying import statement

An import statement points to where the dependency's code is located. When making a custom widget or action, place this statement at the beginning of the code editor.

Open the dependency page and select the installing tab; under the Import it section, you'll find 
the import statement. To copy, click the **Copy to Clipboard**  icon.

![img_2.png](imgs%2Fimg_2.png)






