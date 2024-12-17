---
slug: /deployment/deploy-for-environments
title: Deploy for Development Environments
description: Learn how to deploy your apps for development environments.
tags: [Apple App Store, Google Play Store, Deployment, Dev Environments]
sidebar_position: 6
keywords: [Apple App Store, Google Play Store, Deployment, Dev Environments]
---
# Deploy for Development Environments

FlutterFlow provides flexibility in configuring deployment settings for different [environments](../development-environments/development-environments.md), allowing you to manage your app builds for both mobile and web apps.

With deployment settings tailored to each environment, you can test, isolate app functionality, and optimize for various use cases without impacting production builds.

## Mobile Deployment

You can configure and publish environment-specific builds of your app for both iOS and Android platforms, allowing each build to coexist and function independently for different environments.

To set up deployment for different environments, go to **Settings & Integrations > App Settings > Mobile Deployment**, and select the desired environment from the **Current Environment** dropdown on the right side.

Now, to submit an environment-specific build to the App Store and Play Store, you must have unique package names representing each environment. To set this up, go to **Settings & Integrations > General > App Details > Package Name**, select the **Current Environment** from the dropdown (on the right), and specify the package name for that environment. This ensures that when you switch environments, the package name changes and you can submit separate builds to the App Store and Play Store.

For example, in an ecommerce app, you can set package names such as `io.flutterflow.ecommerceflow.dev` for the development environment and `io.flutterflow.ecommerceflow.staging` for the staging environment.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/WecD2unE4ERmisWzAVgz?embed&show_copy_link=true"
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

Once this setup is complete, you can deploy to [App Store](apple-appstore-deployment.md) and [Play Store](google-playstore-deployment.md) as usual.

:::tip[For iOS]

- You can publish your apps as unlisted on the App Store to allow different builds without public exposure.
- You must configure provisioning profiles, certificates, and App IDs unique to each environment to ensure secure and streamlined publishing.

:::

## Web Deployment

Web deployment in FlutterFlow provides you with the ability to configure the entire web deployment for each environment, including custom URLs, page titles, metadata, and deployment history.

To set up deployment for different environments, navigate to **Settings & Integrations > App Settings > Web Deployment**, and select the desired environment from the **Current Environment** dropdown on the right side. Then, set a new **Site URL** for the selected environment and [publish](web-publishing.md) your app as usual.

![deploy-web-app-for-environments.avif](imgs/deploy-web-app-for-environments.avif)
