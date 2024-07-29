---
slug: app-assets
title: App Assets
tags: [assets, splash screen, launcher icon, adaptive icon]
keywords: [assets, splash screen, launcher icon, adaptive icon]
description: Learn how to configure app assets for your FlutterFlow app.
sidebar_position: 1
---

# App Assets

This allows you to upload the images to be used by the app. From here, you can upload the Initial splash image and the image for the app launcher icon.

## Splash

Splash screens are the first thing users see when your app starts up. They give the app time to get ready while showing you something fun or informative. This screen typically contains the image or logo of the app.

The steps to configure the splash screen are as follows:

1. Navigate to the **Setting and Integrations** from the Navigation Menu > **General** section > **App Assets**.

2. Under the **Splash** section, click on the **Upload Image** button and upload the image you would like to display on the splash screen.
3. You can try any of the **Image Fit** options to determine how the uploaded image should display on the splash screen.
4. To control the image dimension by yourself, you can set the **width** and **height** properties.
    - To set an **exact size,** select **PX** and enter the desired values.
    - To set the dimensions as a **% of the screen size**, select **%** and enter the desired value.
5. The **Min Duration** property helps you set the time for which the splash screen will be visible, where (1000ms = 1 second).
6. You can also set a **Background Color** to match the background of the image.
7. In mobile apps, you might occasionally notice a blank white screen briefly appearing (as the Flutter engine loads) before the splash screen is displayed. To change the color of this screen, use the **Pre-loading** Color property.
8. Typically, web apps don't use a splash screen, so If you prefer a more traditional web experience, you can choose to **Disable for Web**.

![splash-screen-configuration](../imgs/splash-screen-configuration.png)

## Launcher Icon

The launcher icon (also known as the app icon) represents your application. When you open the launcher app, it shows the app icons for all the installed apps. It acts as an entry point for your app. The image asset that you will upload here will be used as the app launcher icon.

To add the app launcher icon:

1. Click on the **Setting and Integrations** from the Navigation Menu (left side of your screen).
2. Under the **General** section, select **App Assets**.
3. Under the **Launcher Icon** section, click on the **Upload Image** button.
4. By clicking on the **Unset** dropdown menu, you can also select from the already uploaded images to the Project Media/Assets.
5. [Download the project](../../../testing-deployment-publishing/exporting-code/ff-cli.md) and run the following command in your terminal to generate the launcher icon:
    
    `flutter pub run flutter_launcher_icons:main`
    
6. [Run your app](../../../testing-deployment-publishing/running-your-app/run-your-app.md) on a real device or emulator to see the app launcher icon.


## Android Adaptive Icon

[Adaptive icons](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive) are a design specification that allows app icons to adapt to different device environments without losing consistency in appearance. Unlike traditional launcher icons, which are static and can appear out of place or poorly scaled on different devices, adaptive icons consist of two layers:

1. **Foreground layer**: This layer usually contains the logo or main visual element of the icon.
2. **Background layer**: This provides a fill (color or background image) behind the foreground, which can be manipulated by the device’s software.

Here are the steps to add adaptive icons:

1. [Create an adaptive icon](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive#design-adaptive-icons). You can either use this [online tool](https://icon.kitchen/) or use these [resources](#create-adaptive-icon) to create one.
2. Return to FlutterFlow and navigate to **Setting and Integrations > General** > **App Assets > Android Adaptive Icon.**
    1. Upload the **Foreground Icon**. If you use the online tool, you'll find it inside the `IconKitchen-Output > android > res > mipmap-xxxhdpi > ic_launcher_foreground.png`.
    2. For **Background Type**, you can either set the **Color** or **Image**. It's recommended to use a color that aligns with your app's branding for a cohesive look.
3. [Download the project](../../../testing-deployment-publishing/exporting-code/ff-cli.md) and run the following command in your terminal to generate the launcher icon:
    
    `flutter pub run flutter_launcher_icons:main`
    
4. [Run your app](../../../testing-deployment-publishing/running-your-app/run-your-app.md) on a real device or emulator to see the app launcher icon.

![android-adaptive-icon](../imgs/android-adaptive-icon.png)

### Useful resources

See the following resources for more information on Android adaptive icons.

### Create Adaptive Icon

- [Create app icons in Android Studio](https://developer.android.com/studio/write/create-app-icons#create-adaptive)
- [Figma template](https://material.uplabs.com/posts/adaptive-icon-sticker-sheet) (requires login)
- [Affinity Designer template](https://cyrilmottier.com/2017/07/06/adaptive-icon-template/)
- [Bjango templates](https://github.com/bjango/Bjango-Templates) include adaptive icons
- [Adobe XD template](https://github.com/faizmalkani/adaptive-icon-template-xd)

### Adaptive Icon Fundamentals

- [Understanding Android Adaptive Icons](https://medium.com/google-design/understanding-android-adaptive-icons-cee8a9de93e2)
- [Designing Adaptive Icons](https://medium.com/google-design/designing-adaptive-icons-515af294c783)
- [Implementing Adaptive Icons](https://medium.com/google-developers/implementing-adaptive-icons-1e4d1795470e)

