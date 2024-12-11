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

To submit an environment-specific build to the App Store and Play Store, you must have unique package names representing each environment. To achieve this, create [environment values](../development-environments/development-environments.md#use-environment-values) for the package name and set it into **Settings & Integrations > General > App Details > Package Name**. This ensures that when you switch environments, the package name changes and you can submit separate builds to the App Store and Play Store.

For example, in an ecommerce app, you can set environment values for package names such as `io.flutterflow.ecommerceflow.dev` for the development environment and `io.flutterflow.ecommerceflow.staging` for the staging environment.

Once this setup is complete, you can deploy to [App Store](apple-appstore-deployment.md) and [Play Store](google-playstore-deployment.md) as usual.

[TK]

:::tip[For iOS]

- You can publish your apps as unlisted on the App Store to allow different builds without public exposure.
- You must configure provisioning profiles, certificates, and App IDs unique to each environment to ensure secure and streamlined publishing.

:::

## Web Deployment

Web deployment in FlutterFlow provides you with the ability to configure the entire web deployment for each environment, including custom URLs, page titles, metadata, and deployment history.

To set up deployment for different environments, navigate to **Settings & Integrations > App Settings > Web Deployment**, and select the desired environment from the **Current Environment** dropdown on the right side. Then, set a new **Site URL** for the selected environment and [publish](web-publishing.md) your app as usual.

![deploy-web-app-for-environments.avif](imgs/deploy-web-app-for-environments.avif)

## FAQs