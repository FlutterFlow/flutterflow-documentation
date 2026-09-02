---
slug: /integrations/authentication-types
title: Auth Services
description: >-
  Learn about integrating various authentication services like Firebase,
  Supabase, and Custom Authentication in FlutterFlow.
keywords:
  - FlutterFlow
  - Authentication
  - Firebase
  - Supabase
  - Custom Authentication
  - App Settings
sidebar_position: 1
tags:
  - FlutterFlow
  - Integrations
  - Authentication Types
last_verified: 2026-09-02
---
# Overview
FlutterFlow supports **Firebase**, **Supabase**, and **Custom Authentication**. In your project, open **Settings and Integrations > App Settings > Authentication**, enable authentication, choose the authentication type, and configure the entry and logged-in pages. Then complete the provider-specific setup before adding authentication actions.

## Firebase Authentication

In FlutterFlow, you can seamlessly connect with **Firebase** and utilize the available authentication
methods.

Firebase Authentication integrates with other Firebase services and supports standards and provider flows such as OAuth 2.0 and OpenID Connect. If your own backend participates in authentication, mint or verify tokens only in a trusted server environment and follow Firebase's server-side guidance.

:::info
Learn how to enable [**Firebase Authentication**](../authentication/firebase-auth/auth-initial-setup.md) and integrate popular auth providers in your FlutterFlow
app.
:::

## Supabase Authentication

In FlutterFlow, you can also integrate Supabase to manage authentication efficiently.

Supabase provides a powerful and flexible authentication solution, similar to Firebase but with some
unique advantages like support for PostgreSQL.

:::info
Discover how to set up [**Supabase Authentication**](../authentication/supabase-auth/initial-setup.md) and link it with available auth providers within your
FlutterFlow app.
:::

## Custom Authentication

In FlutterFlow, you have the flexibility to implement custom authentication solutions tailored to
your specific needs. This allows for a highly personalized approach to security, enabling you to
design and integrate authentication mechanisms that perfectly fit the unique requirements of your
application. Whether you need to work with legacy systems or have specific security protocols,
custom authentication provides the necessary control.

:::info
Explore how to implement [custom authentication](../authentication/custom-auth/custom-auth.md) strategies in your FlutterFlow app, ensuring your
authentication flow aligns with your business requirements.
:::
