---
slug: libraries
title: Libraries
tags: [Libraries]
keywords: [Libraries, Share, Reuse, Collaborate, Modularize, Dependency]
description: Learn how to share and reuse entire FlutterFlow projects suing libraries.
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Libraries

The Libraries feature enables you to share and reuse entire FlutterFlow projects as libraries across multiple projects. This allows teams and developers to modularize their apps by creating shared libraries that include components, API calls, custom code, and more. By using libraries, development becomes more efficient and scalable.

Imagine you're building an e-commerce app, and different teams are working on various features. One team develops a complex payment system. By using the Libraries, they can publish the payment system as a reusable library and allow other teams to easily import and integrate it into multiple projects without duplicating development efforts.

![libraries.avif](imgs/libraries.avif)

### Why Libraries

Previously, FlutterFlow offered several methods to share resources between projects, such as team code libraries, design systems, API libraries, and by leveraging marketplace items. However, these methods had limitations, including the inability to share custom data types or custom functions alongside components or API calls and the absence of version control.

With the Libraries, you can publish the complete FlutterFlow project as a library and import it as a dependency into other projects.

:::tip[possible usecases]

- **Modular Development**: Build large-scale apps by separating them into smaller, independently managed projects (e.g., UI library, backend integrations, etc.).
- **Team Collaboration**: Share reusable UI components, custom functions, or API integrations across multiple apps within a team.
- **Community Sharing**: Publish libraries that can be imported and reused by the broader FlutterFlow community.

:::

### Library Resources

When you import a library into a FlutterFlow project, the following resources are accessible for use:

- [Components](../resources/ui/components/intro-components.md)
- [Data Types & Enums](../resources/data-representation/custom-data-types.md)
- [App State Variables](../resources/data-representation/app-state.md)
- [Constants](../resources/data-representation/constants.md)
- [API Calls](../resources/control-flow/backend-logic/api/rest-api.md)
- [Action Blocks](../resources/control-flow/functions/action-blocks.md)
- [Custom Functions](../ff-concepts/adding-customization/custom-functions.md), [Actions](../resources/control-flow/functions/action-flow-editor.md), and [Widgets](../resources/ui/widgets/intro-widgets.md)
- [Assets](../resources/projects/settings/general-settings.md#app-assets) (Note: These are not versioned)

:::note

Pages are still being worked on and may come in future updates.

:::

## Publishing a Library

To publish a project as a library, start by creating a FlutterFlow project as you normally would, then follow these steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/CTuBPgISjpRWy5TT6rRD?embed&show_copy_link=true"
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
<p></p>

:::info

- You can only publish libraries if you have access to branching, which is available to Pro+ users.
- Libraries can only be published from the main branch, and each published version is linked to a specific commit, ensuring robust version control.
- You can add new features and publish updated versions of the library. Each time a new version is published, the version number will automatically increment.

:::

## Importing a Library

Open the FlutterFlow project where you'd like to import a library, then follow these steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DrzjKuhTWZXOxBB5yGJn?embed&show_copy_link=true"
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
<p></p>

:::info

- You can only select a library if you have been added as a collaborator in that library project. To use a library, you must have one of these roles in the library project: Owner, Manager, Editor, or Read-Only.
- By default, the latest version of the library is imported, but you can choose to depend on an earlier version if needed.

:::

### Updating a Library

You can easily upgrade to newer versions of the libraries as they become available. If a new update causes issues with your existing implementation, you also have the option to revert to a previous version.

![update-library.avif](imgs/update-library.avif)

### Manage Dependency Conflict while Import

A **Dependency Conflict** occurs when two or more libraries added by a project depend on different versions of the same dependency. This creates a situation where the project cannot resolve which version to use, leading to a project error.

![dependency-conflict.avif](imgs/dependency-conflict.avif)

Let's say you are building an eCommerce app that uses multiple libraries for different purposes:

- **User Auth Library** is used for handling user authentication.
- **Payment Gateway Library** is used for managing the payment gateway.

Both libraries depend on a common library called **Components Library** but with different versions:

- **User Auth Library** depends on Components Library **v1.5.0**.
- **Payment Gateway Library** depends on Components Library **v2.0.0**.

In this scenario, eCommerce App project will detect the dependency conflict because it can't add both v1.5.0 and v2.0.0 of Components Library at the same time.

#### Steps to Fix Dependency Conflict

Follow these steps to ensure both libraries rely on the same version of Components Library:

1. **Upgrade both libraries**: Start by upgrading libraries to their latest versions. Often, newer versions are built to rely on a common or more flexible version of Components Library, which can resolve conflicts.
2. **Modify libraries**: If you have access to the library projects, adjust the dependencies of either User Auth Library or Payment Gateway Library (or both) to use the same version of Components Library.
3. **Contact library maintainers**: If you cannot resolve the conflict yourself, reach out to the maintainers of User Auth Library and Payment Gateway Library. They may provide guidance, suggest workarounds, or release a version that addresses the conflict.

## Access Library Resources

Once the library is imported, components and resources are accessible within the project. It's important to note that these resources show up where they are instantiated. For example:

- **Components** appear in the widget palette.
- **API calls** appear when making API calls in the action flow editor.
- **Custom functions** are available when setting up actions or functions within the app.

This ensures that only relevant resources are shown where they are needed, optimizing performance and discoverability.

![access-library-resources.avif](imgs/access-library-resources.avif)

## FAQs
Here are the FAQs in the requested format:

<details>
<summary>What will happen to existing team libraries?</summary>
<p>
Team code and API libraries will be migrated to Library Projects. These projects will be imported as a library with the latest version specified as the version. The components within team design systems will move into their own projects, while design systems will continue to exist but only containing the theme settings.
</p>
</details>

<details>
<summary>Will Libraries work with Marketplace?</summary>
<p>
We plan to allow users to import a marketplace project as a library, making it easier to integrate marketplace resources into your projects.
</p>
</details>

<details>
<summary>How do Libraries work with themes?</summary>
<p>
The parent project's design system takes precedence over the imported library's design system. For example, if a library uses the standard FlutterFlow color scheme, the values defined in the parent project will override those in the library. However, if the library project has a custom color that the parent project does not have, it will be used as-is in the parent project.
</p>
</details>

<details>
<summary>How are API keys shared?</summary>
<p>
We're planning to leverage environment variables, as part of the Development Environment features, to allow users to add their API keys to their own projects. This ensures that the API key is not shared when the project is published as a library.
</p>
</details>

<details>
<summary>How does nested dependencies work?</summary>
<p>
Projects can import Libraries that themselves have imported other Libraries as dependencies. However, if the project and the Library share the same dependency, the version must match exactly to avoid conflicts.
</p>
</details>