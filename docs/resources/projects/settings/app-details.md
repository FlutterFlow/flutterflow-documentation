---
slug: app-details
title: App Details
tags: [Project, Downlod, Asset, Settings]
keywords: [Project Name, Package Name, Asset, Download Settings]
description: Learn how to configure app settings for your FlutterFlow app.
---

# App Details

The page allows you to configure the settings related to your app.

## Change Project, Package, and Display Name

If you didn't decide on the app or package name when creating a new project, you might have entered a random name. From here, you can change the name anytime.

You can set a different name for the *App Store* and *Play Store* using the **Display Name**.

:::tip
After changing the package name, errors may appear on the toolbar due to invalidated Firebase config files. To resolve this, generate new config files by going to **Settings & Integrations > Project Setup > Firebase > Regenerate Config Files**.
:::
---

## Initial Page

You can specify your app's **Entry Page** and **Logged In** **Page** from this section.

- **Entry Page**: This is the home page for your app. If authentication is enabled, users who are not logged in will see this page, which is typically set to a login/signup or onboarding page.
- **Logged In Page** (*available only if auth is enabled*): This page is displayed on the app start if a user is already logged in. Users are automatically navigated to the page you specify here on a successful sign-in attempt.

To set the page, simply choose the page that you want to use from the dropdown menu.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(35.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/EgYmUSzJ4IkHhG6fgpQ0?embed&show_copy_link=true"
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

---

## Folder Organization

If you want the improved folder organization for your project, **Enable Updated Folder Organization**.  This is especially helpful for older projects; for new projects, this is enabled by default.

---

## Asset Download

Enable the **Download Unused Project** **Assets** option to download all assets, including those that are not currently used in the project. This is useful when you need to access and use the assets in custom code or other parts of your project.

---

## Routing & Deep Linking

From here, you can specify the navigation transition style and deep link URL for your app.

### Routing

To override the default transition, turn on the **Override Default Transition** toggle. This will reveal the dropdown menu for choosing the **Transition Type** and the field for specifying the **Transition Duration**.

:::info
Though this overrides the default navigation transition style of the entire app, you can still use a different transition style between specific screens by selecting it while defining [**Navigate To**](../../../ff-concepts/navigation-routing/page-navigation.md#navigate-to-action).
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(35.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/pwFCEHARwziKxFKNqNHQ?embed&show_copy_link=true"
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
If you prefer watching a video tutorial, here is the guide for you:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(35.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/H_3yQsa8wT8"
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

### Deep Linking

Learn about adding deep link in your app [here](../../../ff-concepts/navigation-routing/deep-dynamic-linking.md).