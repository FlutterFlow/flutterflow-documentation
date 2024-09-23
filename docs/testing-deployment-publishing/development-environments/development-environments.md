---
slug: /development-environments
title: Development Environments
description: Learn how to create and leverage development environments in FlutterFlow.
tags: [Dev Environments, Backend, Testomg]
sidebar_position: 2
keywords: [Dev, Development, Enviornments, FlutterFlow, Backend]
---

# Development Environments

Development Environments in FlutterFlow allow you to set up multiple environments for your apps, such as `Development`, `Staging`, and `Production`. For each environment, you can create environment-specific values and databases. This allows you to easily point to different backends depending on where you are in your development lifecycle. 


:::note
By default, every FlutterFlow project starts with a `Production` environment.
:::


:::info[When to Use Dev vs. Staging Environments]
- **Dev Environment**: Use for testing and developing new features without affecting production data.
- **Staging Environment**: Use to simulate the production environment before launching, and is isolated from the actual production data.

*This is a common best practice, but you can create custom environments with different names for your own workflow.*
:::

### Create and Switch Development Environments

You can create and switch environments in the **Dev Environments** page in **App Settings**. You can always see the current environment that is selected by looking in the top left hand corner of the project.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/yR8P5pFPOKtuQ0jFSOJ7?embed&show_copy_link=true"
        title="Creating and Switching Development Environments"
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

The selected environment is used to generate the proper app code when you run, test, deploy or export your app. The only things that change between environment are the [Firebase Project](#configuring-firebase-for-each-environment) or variables that are tied to [Environment Values](#use-environment-values)


### Use Environment Values
Environment Values can be used to dynamically change parts of your app's code based on the environment that is being used. 

For example, in an e-commerce app, you might define an `apiUrl` Environment Value that points to different API URLs for Development, Staging, and Production. This allows you to test new features without affecting the live production environment, where real customer orders are processed.

Let's see an example of creating and using `apiUrl`:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/bAVpkNAanVDlBTyeRwJy?embed&show_copy_link=true"
        title="Creating and Using Environment Values"
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
After switching to an environment, FlutterFlow generates code specific to that environment, for any of the following interactions:
- Test / Run mode sessions
- Local Run
- Code export
- Deployment

You also may see different project errors depending on which environment you have selected.
:::

### Configuring Firebase for each Environment
A single FlutterFlow project can have **multiple environments**, each mapped to its **own Firebase project**. This ensures that environments like `Development`, `Staging`, and `Production` remain independent, giving you better control over your app's data and behavior throughout different stages of development.

![flutterflow-environment](../imgs/flutterflow-environment.avif)

If your project uses Firebase, you'll need to [**manually configure a new Firebase project**](../../../ff-integrations/firebase/connect-to-firebase-setup.md#connect-an-existing-firebase-project-manually) for each environment. This requires setting up a new project in the Firebase console and linking it to the selected environment in FlutterFlow. 

:::info
- You must complete the Firebase setup for the new environment before fully testing it. However, this doesn't stop you from continuing to run and test your app in other environments. Just switch back to production, and you can keep testing while finishing the setup for the new environment.
- Additionally, you must manually set up [**Firebase rules**](../../../ff-integrations/database/cloud-firestore/firestore-rules.md) and [**collections**](../../../ff-integrations/database/cloud-firestore/creating-collections.md) for the new environment.
- Data that you add to Firebase through the Content Manager is specific to the Firebase project, and environment, that you have selected
:::



### FAQ

<details>
<summary>How can you push code from one environment to another?</summary>
<p>
It’s important to note that the **Development Environments** feature in FlutterFlow is primarily designed to configure different backends for testing

If you are building new features, you should consider using [**Branching**](../../../testing-deployment-publishing/branching-collaboration/branching.md). You can develop and test new features on a new branch by selecting a development environment. Once tested, you can merge the branch into `main` and switch to the `Production` Environment to go live.
</p>
</details>

<details>
<summary>Are you using Flutter flavors under the hood?</summary>
<p>

No, FlutterFlow does not use Flutter flavors. Instead, it generates code based on the environment selected in FlutterFlow. The environment-specific code is generated and applied for the following actions:

- Test / Run mode sessions
- Local Run
- Code export
- Deployment
</p>
</details>

