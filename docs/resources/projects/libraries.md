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

In FlutterFlow, a project can either be used to create an App or used to create a Library. A library allows you to share and reuse resources created in FlutterFlow across multiple projects. More specifically, with libraries, you can publish components, API calls, custom code, and more - all with version control. By using libraries, development becomes more efficient and scalable.

Imagine you're building an e-commerce app, and different teams are working on various features. One team develops a complex payment system. By using  libraries, they can publish the payment system as a reusable library and allow other teams to easily import and integrate it into multiple projects without duplicating development efforts.

![libraries.avif](imgs/libraries.avif)

:::tip[possible usecases]

- **Modular Development**: Build large-scale apps by separating them into smaller, independently managed projects (e.g., UI library, backend integrations, etc.).
- **Team Collaboration**: Share reusable UI components, custom functions, or API integrations across multiple apps
- **Community Sharing**: Publish libraries that can be imported and reused by the broader FlutterFlow community - like UI Kits or utility functions.

:::

### What’s Included When Importing a Library

When you import a library into a FlutterFlow project, the following resources are accessible for use:

- [Components](../resources/ui/components/intro-components.md)
- [Data Types & Enums](../resources/data-representation/custom-data-types.md)
- [App State Variables](../resources/data-representation/app-state.md)
- [Constants](../resources/data-representation/constants.md)
- [API Endpoints](../resources/control-flow/backend-logic/api/rest-api.md)
- [Action Blocks](../resources/control-flow/functions/action-blocks.md)
- [Custom Functions](../ff-concepts/adding-customization/custom-functions.md), [Actions](../resources/control-flow/functions/action-flow-editor.md), and [Widgets](../resources/ui/widgets/intro-widgets.md)
- [Assets](../resources/projects/settings/general-settings.md#app-assets) (Note: These are not versioned)

:::note

Pages and Firestore Collections are still being worked on and may come in future updates.

:::

## Publishing a Library

To publish a project as a library, start by creating a FlutterFlow project as you normally would. Next, go to the **Publish as a Library** page in  **App Settings**. Here you can specify the version number and message for the version you are publishing.

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


You can easily upgrade to newer versions of the libraries as they become available. If a new update causes issues with your existing implementation, you also have the option to revert to a previous version.

![update-library.avif](imgs/update-library.avif)

## Access Library Resources

Once the library is imported, components and resources are accessible within the project. It's important to note that these resources show up where they are instantiated. For example:

- **Components** appear in the widget palette.
- **API calls** appear when making API calls in the action flow editor.
- **App State variables** appear where you can update app state in an action or leverage app state in a widget property.
- **Custom functions** are available when setting up actions or functions within the app.

This ensures that only relevant resources are shown where they are needed, optimizing performance and discoverability.

![access-library-resources.avif](imgs/access-library-resources.avif)


### Manage Dependency Conflict while Import

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