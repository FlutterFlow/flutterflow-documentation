---
slug: general-settings
title: General Settings
tags: [Project, Assets]
keywords: [project name, package name, asset, download settings, assets, splash screen, launcher icon, adaptive icon]
description: Learn how to configure general settings for your FlutterFlow app.
sidebar_position: 0
---

# General Settings
General Settings serve as the control center for configuring essential aspects of your app.


## App Details
Edit the metadata and app-level settings for your project.

- **Project Name**: The name of your FlutterFlow project. This is the name shown inside FlutterFlow.
- **Project Description**: Optional internal notes about the project. Use this to describe the app, its purpose, or any context that helps collaborators understand the project.

### App Names

Use **App Names** to configure the package and display names for each environment.

- **Current Environment**: Select the environment you want to configure, such as **Production**, **Staging**, or **Development**.
- **Package Name**: The unique package or bundle identifier for your app. You can define different package names for different environments.
- **Display Name**: The name shown to users on the installed app and in stores such as the App Store and Play Store.

:::tip
After changing the package name, errors may appear on the toolbar due to invalidated Firebase config files. To resolve this, generate new config files by going to **Settings & Integrations > Project Setup > Firebase > Regenerate Config Files**.
:::

### Pinned FlutterFlow Version

Use this section to pin the project to a specific FlutterFlow version or keep it on the **Latest Version (Unpinned)**. Pinning can help protect complex projects from unexpected changes caused by platform updates.

For more details, see [Pinning Projects to Stable FlutterFlow Versions](version-management.md).

:::warning
Once pinned, upgrading the FlutterFlow version may introduce breaking changes that could cause errors in your project. If needed, you can revert to the previous version, but any changes made to the project after upgrading will be lost.
:::

### Initial Page

You can specify your app's **Entry Page** and **Logged In Page** from this section.

- **Entry Page**: The Entry Page is the first page users see when they open your app. When authentication is disabled, all users are directed to this page by default. If authentication is enabled, this page becomes the login, signup, or onboarding page for users who are not authenticated.
- **Logged In Page** (*available only if auth is enabled*): This page is displayed when the app starts for authenticated users. If a user successfully signs in, they are automatically redirected to the page specified here. If the user is already authenticated, this page bypasses the Entry Page.


To set the page, choose the page you want to use from the dropdown menu.

![initial-page](imgs/initial-page.avif)

### Download Settings

- **Run "dart fix"**: Enabling this runs the `dart fix` command when downloading the code. This makes the generated code cleaner and potentially more performant.
- **Download Unused Project Assets**: Enable this option to download all assets, including those that are not currently used in the project. This is useful when you need to access and use the assets in custom code or other parts of your project.


### Routing & Deep Linking

Configure global navigation and deep linking settings for your app.

- **Override Default Transition**: Enable this to set a default page transition that applies across the app unless a page or action overrides it.
- **Pages Require Authentication by Default**: Enable this to require authentication for pages by default. You can still configure page-level access as needed.
- **Use Firebase Dynamic Links**: Enable this if your project still relies on Firebase Dynamic Links. If you are setting up deep links for a new project, see the [Deep & Dynamic Linking](../../../ff-concepts/navigation-routing/deep-dynamic-linking.md) guide.
- **URL Scheme**: Defines the scheme and domain values used for deep links. Keep these values unique to your app and aligned with your configured domain.
- **Advanced Route Settings**: Opens additional routing options for configuring app navigation behavior.

### Display Settings

The **Display Settings** section allows you to configure how text scales within your app. This is particularly helpful for accessibility, ensuring that users with visual impairments can comfortably read content.

- **Min Text Scaling Factor**: Defines the minimum allowable scale for text. This prevents text from shrinking below a certain threshold, helping maintain legibility for all users. For example, setting this to `1` ensures text is never rendered smaller than its base size, regardless of device settings or user preferences.
- **Max Text Scaling Factor**: Defines the maximum allowable scale for text. This limits how large text can appear, which is useful for preserving layout consistency on devices with accessibility text scaling enabled. For example, setting this to `10` allows text to scale up to 10× its original size.
- **Persist Text Scaling Factor**: When enabled, the current text scaling factor will be stored and applied even after the app is restarted. This ensures a consistent user experience across sessions. This setting requires both **Min** and **Max Text Scaling Factors** to be set. If either is unset, persistence will have no effect.

:::info
Once the text scaling factors are set, you can use the [**Update Text Scaling Factor**](../../../ff-concepts/localization-accessibility/accessibility.md#update-text-scaling-factor-action) action to let users dynamically adjust text size.
:::


For example, suppose the Min Text Scaling Factor is set to 1.0 and the Max Text Scaling Factor is set to 5.0. If a user's device requests a scaling factor of 2.5, FlutterFlow will accept it because it falls within the allowed range. So, if the base font size is 16.0, the final rendered size would be: `2.5 × 16.0 = 40.0`

If a device requests a scaling factor higher than 5.0 (such as 6.0), it will be capped at 5.0. Thus, for a base font size of 16.0, the final rendered size will be: `5.0 × 16.0 = 80.0`.

Similarly, if a device requests a scaling factor below 1.0 (for example, 0.5), it will be raised to 1.0 to ensure readability. The resulting font size would remain: `1.0 × 16.0 = 16.0`.

### UI Settings

- **Show Component Preview in Palette**: Enable this to show component previews in the Widget Palette. This helps you identify reusable components visually while building.


## App Assets

Use App Assets to upload images for your splash screen and app launcher icon.

### Splash

Splash screens are the first thing users see when your app starts up. They give the app time to get ready while showing users your branding or loading experience. This screen typically contains the image or logo of the app.

To configure the splash screen:

1. Navigate to **Settings and Integrations** from the Navigation Menu > **General** section > **App Assets**.

2. Under the **Splash** section, click **Upload Image** and upload the image you would like to display on the splash screen.
3. You can try any of the **Image Fit** options to determine how the uploaded image should display on the splash screen.
4. To control the image dimensions manually, you can set the **width** and **height** properties.
    - To set an **exact size**, select **PX** and enter the desired values.
    - To set the dimensions as a **% of the screen size**, select **%** and enter the desired value.
5. The **Min Duration** property helps you set how long the splash screen will be visible. For reference, 1000 ms equals 1 second.
6. You can also set a **Background Color** to match the background of the image.
7. In mobile apps, you might occasionally notice a blank white screen briefly appearing (as the Flutter engine loads) before the splash screen is displayed. To change the color of this screen, use the **Pre-loading** Color property.
8. Typically, web apps don't use a splash screen, so if you prefer a more traditional web experience, you can choose to **Disable for Web**.

![splash-image](imgs/splash-image.avif)


### Launcher Icon

The launcher icon, also known as the app icon, represents your application on a user's device. The image asset you upload here is used as the app launcher icon.

To add the app launcher icon:

1. Click **Settings and Integrations** from the Navigation Menu.
2. Under the **General** section, select **App Assets**.
3. Under the **Launcher Icon** section, click **Upload Image**.
4. Use the **Unset** dropdown menu to select from images already uploaded to Project Media/Assets.
5. [Download the project](../../../ff-concepts/advanced/flutterflow-cli/exporting-projects.md) and run the following command in your terminal to generate the launcher icon:
    
    `flutter pub run flutter_launcher_icons:main`
    
6. [Run your app](../../../testing-deployment-publishing/running-your-app/run-your-app.md) on a real device or emulator to see the app launcher icon.

### Android Adaptive Icon

[Adaptive icons](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive) let app icons adapt to different device environments. Unlike traditional launcher icons, adaptive icons are designed to scale and display well across different devices. Adaptive icons consist of two layers:

1. **Foreground layer**: This layer usually contains the logo or main visual element of the icon.
2. **Background layer**: This provides a fill (color or background image) behind the foreground, which can be manipulated by the device’s software.

Here are the steps to add adaptive icons:

1. [Create an adaptive icon](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive#design-adaptive-icons). You can either use this [online tool](https://icon.kitchen/) or use these [resources](#create-adaptive-icon) to create one.
2. Return to FlutterFlow and navigate to **Settings and Integrations > General** > **App Assets > Android Adaptive Icon.**
    1. Upload the **Foreground Icon**. If you use the online tool, you'll find it inside the `IconKitchen-Output > android > res > mipmap-xxxhdpi > ic_launcher_foreground.png`.
    2. For **Background Type**, you can either set the **Color** or **Image**. Use a color that aligns with your app's branding for a cohesive look.
3. [Download the project](../../../ff-concepts/advanced/flutterflow-cli/exporting-projects.md) and run the following command in your terminal to generate the launcher icon:
    
    `flutter pub run flutter_launcher_icons:main`
    
4. [Run your app](../../../testing-deployment-publishing/running-your-app/run-your-app.md) on a real device or emulator to see the app launcher icon.

![adaptive-icons](imgs/adaptive-icons.avif)

#### Useful Resources

See the following resources for more information on Android adaptive icons.

#### Create Adaptive Icon

- [Create app icons in Android Studio](https://developer.android.com/studio/write/create-app-icons#create-adaptive)
- [Figma template](https://material.uplabs.com/posts/adaptive-icon-sticker-sheet) (requires login)
- [Affinity Designer template](https://cyrilmottier.com/2017/07/06/adaptive-icon-template/)
- [Bjango templates](https://github.com/bjango/Bjango-Templates) include adaptive icons
- [Adobe XD template](https://github.com/faizmalkani/adaptive-icon-template-xd)

#### Adaptive Icon Fundamentals

- [Understanding Android Adaptive Icons](https://medium.com/google-design/understanding-android-adaptive-icons-cee8a9de93e2)
- [Designing Adaptive Icons](https://medium.com/google-design/designing-adaptive-icons-515af294c783)
- [Implementing Adaptive Icons](https://medium.com/google-developers/implementing-adaptive-icons-1e4d1795470e)

## Nav Bar and App Bar
See how to configure the [Nav Bar](../../ui/pages/page-elements.md#enable-nav-bar-in-settings) and the [App Bar](../../ui/pages/page-elements.md#appbar).
