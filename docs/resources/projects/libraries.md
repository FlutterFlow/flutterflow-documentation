---
slug: libraries
title: Libraries
tags: [Libraries]
keywords: [Libraries, Share, Reuse, Collaborate, Modularize, Dependency]
description: Learn how to share and reuse entire FlutterFlow projects using libraries.
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Libraries

Libraries enables you to share and reuse entire FlutterFlow projects as dependencies across multiple projects. This allows teams and developers to modularize their apps by creating shared libraries that include components, API calls, custom code, and more. By using libraries, development becomes more efficient and scalable.

:::info
A **Dependency** refers to an external library or resource that your project relies on to function correctly. When you create a new FlutterFlow project, certain dependencies are automatically added to support the generated code. Also, when you use a [**Custom Widget**](../../ff-concepts/adding-customization/custom-widgets.md), you are essentially adding dependencies to your project. Libraries take this concept further by allowing you to add entire FlutterFlow projects as dependencies.
:::

Imagine you're building an e-commerce app, and different teams are working on various features. One team develops a complex payment system. By using the Libraries, they can publish the payment system as a reusable library and allow other teams to easily import and integrate it into multiple projects without duplicating development efforts.

![libraries.avif](imgs/libraries.avif)

### Importance of Libraries

Previously, FlutterFlow offered several methods to share resources between projects, such as team code libraries, design systems, API libraries, and by leveraging marketplace items. However, these methods had limitations, including the inability to share custom data types or custom functions alongside components or API calls and the absence of version control.

With Libraries, you can publish the complete FlutterFlow project as a library and import it as a dependency into other projects.

:::tip[possible usecases]

- **Modular Development**: Build large-scale apps by separating them into smaller, independently managed projects (e.g., UI library, backend integrations, etc.).
- **Team Collaboration**: Share reusable UI components, custom functions, or API integrations across multiple apps within a team.
- **Community Sharing**: Publish libraries that can be imported and reused by the broader FlutterFlow community.

:::

## Publishing a Library

To publish a FlutterFlow project as a library, start by creating a FlutterFlow project as you normally would, then follow these steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/CTuBPgISjpRWy5TT6rRD?embed&show_copy_link=true"
        title="Publishing a Library"
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
<p></p>

:::info
- You can only publish libraries if you have access to branching, which is available to Pro+ users.
- Libraries can only be published from the main branch, and each published version is linked to a specific commit, ensuring robust version control.
- You must commit your changes before publishing a new version of the library.
- It's recommended to include a message that tells users what has changed in the version your are publishing.
:::

### Disabled Features in a Library

When a project is converted into a library, the following features are disabled to ensure compatibility and functionality limitations:

- App settings 
  - Firebase 
  - Development environment
  - Authentication
  - Push notifications 
  - Mobile deployment 
  - Web deployment 
  - Stripe 
  - Braintree 
  - Razorpay 
  - Google Analytics 
  - OneSignal 
  - Mux 
- Cloud functions
- Firestore Collections

## Importing a Library

To import a library project into another FlutterFlow project, you must go to the **Project Dependencies** page in **App Settings**. Here you can specify the library project and version you are importing.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DrzjKuhTWZXOxBB5yGJn?embed&show_copy_link=true"
        title="Importing a Library"
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
<p></p>

:::info

- You can only select a library if you have at least read access on the library project. 
- For a library project to show in the drop down, you must be added as a collaborator on the project and the library project must have a published version.
- You can import publicly accessible libraries by specifying the project ID in the text field when adding a library dependency.
- By default, the latest published version of the library is imported, but you can choose to depend on an earlier version if needed.
- You can also import the `current` version of the library to use the latest state of the library on the main branch - however, this is not recommended.
- You must have a paid plan to import a library.

:::


### Dependency Conflicts

A **Dependency Conflict** occurs when two or more libraries added by a project depend on different versions of the same dependency. This creates a situation where the project cannot resolve which version to use, leading to a project error.

![dependency-conflict.avif](imgs/dependency-conflict.avif)

Let's say you are building an eCommerce app that uses multiple libraries for different purposes:

- **User Auth Library** is used for handling user authentication.
- **Payment Gateway Library** is used for managing the payment gateway.

Both library projects depend on a common library called **Components Library** but imports different versions respectively:

- **User Auth Library** depends on `Components Library v1.5.0`.
- **Payment Gateway Library** depends on `Components Library v2.0.0`.

In this scenario, the eCommerce project will detect the dependency conflict because it can't add both `v1.5.0` and `v2.0.0` of the Components Library at the same time.

#### Fixing Dependency Conflicts

Follow these steps to ensure both libraries rely on the same version of Components Library:

1. **Upgrade both libraries**: If updates are available, start by upgrading both the User Auth Library and Payment Gateway Library to their latest versions. Often, newer versions of libraries are designed to use the latest version of the Components Library, which can help resolve conflicts.
2. **Modify Libraries**: If you have access to the library projects, adjust the dependencies of either User Auth Library or Payment Gateway Library (or both) to use the same version of the Components Library.
3. **Contact Library Maintainers**: If you do not own the library yourself, reach out to the maintainers of the library projects. They may provide guidance, suggest workarounds, or release a version that addresses the conflict.

## Access Library Resources

Once the library is imported, following resources are accessible for use:

- [Components](../../resources/ui/components/intro-components.md)
- [Data Types & Enums](../../resources/data-representation/custom-data-types.md)
- [App State Variables](../../resources/data-representation/app-state.md)
- [Constants](../../resources/data-representation/constants.md)
- [API Calls](../../resources/control-flow/backend-logic/api/rest-api.md)
- [Action Blocks](../../resources/control-flow/functions/action-blocks.md)
- [Custom Functions](../../ff-concepts/adding-customization/custom-functions.md), [Actions](../../resources/control-flow/functions/action-flow-editor.md), and [Widgets](../../resources/ui/widgets/intro-widgets.md)
- [Assets](../../resources/projects/settings/general-settings.md#app-assets) (Note: These are not versioned) 

:::note
Pages and Firestore Collections are still being worked on and may come in future updates.
:::

It's important to note that these resources show up where they are instantiated. For example:

- **Components** appear in the widget palette.
- **API calls** appear when making API calls in the action flow editor.
- **Custom functions** are available when setting up actions or functions within the app.

This ensures that only relevant resources are shown where they are needed, optimizing performance and discoverability.

![access-library-resources.avif](imgs/access-library-resources.avif)

## Library Versioning
Library versioning allows you to manage different versions of a library project over time. Using versioning, library users can control which version of a library to use in a project, ensuring compatibility and reducing the risk of breaking changes.

:::info[Importance of Library Versioning]
- **Maintain Backward Compatibility**: It ensures older versions of the library continue to work as expected while introducing new features.
- **Roll Back Changes**: In case of bugs or issues in a new version, you can easily revert to a previous stable version.
- **Control Updates**: Library users can decide when to upgrade to the latest version, rather than being forced into changes.
:::

### Publish New Version

When you're ready to update your library, ensure that all modifications are committed to the main branch of the library project and then publish as per instructions [here](#publishing-a-library).

:::tip

- While publishing a new version, add a description to highlight what's new or changed in this version.
- Each time a new version is published, the version number will automatically increment.

:::

### Import Specific Version

When importing a library into a project, you have the flexibility to choose which version of the library to use. By default, the latest version will be selected.

![import-specific-library-version.avif](../imgs/import-specific-library-version.avif)

### Update to Latest Version

You can easily upgrade to newer versions of the libraries as they become available.

:::tip

- If a new update causes issues with your existing implementation, you also have the option to revert to a previous version.
- Always test your app after upgrading to ensure that the new library version works well with your existing project.

:::

![update-library](imgs/update-library.avif)

## FAQs

<details>
<summary>What will happen to existing team libraries?</summary>
<p>
Team code and API libraries will be migrated to library Projects. These projects will be imported as a library with the latest version specified as the version. The components within team design systems will move into their own projects, while design systems will continue to exist but only containing the theme settings.
</p>
</details>

<details>
<summary>Will libraries work with Marketplace?</summary>
<p>
We plan to allow users to import a marketplace project as a library, making it easier to integrate marketplace resources into your projects.
</p>
</details>

<details>
<summary>How do libraries work with themes?</summary>
<p>
The parent project's design system takes precedence over the imported library's design system. For example, if a library uses the standard FlutterFlow color scheme, the values defined in the parent project will override those in the library. However, if the library project has a custom color that the parent project does not have, it will be used as-is in the parent project.
</p>
</details>

<details>
<summary>How are API keys shared?</summary>
<p>
We're working on Library Values, which will allow users to set specific values when they import a library. This feature will be available soon.
</p>
</details>

<details>
<summary>How does nested dependencies work?</summary>
<p>
Projects can import libraries that themselves have imported other Libraries as dependencies. However, if the project and the library share the same dependency, the version must match exactly to avoid conflicts.
</p>
</details>