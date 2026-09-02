---
slug: /integrations/authentication/generated-code
title: Generated Code
description: Learn about the generated code behind enabling authentication in FlutterFlow.
tags:
  - FlutterFlow
  - Integrations
  - Authentication
keywords:
  - FlutterFlow
  - Authentication
  - Generated Code
  - Custom Authentication
  - Firebase
  - Supabase
sidebar_label: Generated Code
last_verified: 2026-09-02
---
# Authentication: Generated Code

When you enable authentication, FlutterFlow generates provider-specific files under `lib/auth/` and connects authentication state to routing and **Authenticated User** variables. Generated filenames and implementations can change as FlutterFlow and its dependencies evolve; inspect the code exported from your current project before extending it.

## File structure

Custom Authentication projects currently include:

```text
lib/
  auth/
    custom_auth/
      auth_util.dart
      custom_auth_manager.dart
      custom_auth_user_provider.dart
```

Firebase Authentication projects currently include a shared base provider plus provider-specific managers and helpers:

```text
lib/
  auth/
    base_auth_user_provider.dart
    firebase_auth/
      auth_util.dart
      firebase_auth_manager.dart
      firebase_user_provider.dart
      email_auth.dart
      # Additional provider helpers are generated when used.
```

Supabase Authentication follows the same shared-provider pattern under `lib/auth/supabase_auth/`.

## Custom authentication responsibilities

The generated custom-auth manager stores the values supplied by **Log In** and **Update Authenticated User**, including the authentication token, refresh token, expiry timestamp, user ID, and optional user data. It publishes authentication-state changes so routing and authenticated-user bindings can react.

If **Persist Auth Sessions** is disabled, the session is in memory only and your app owns startup behavior. If it is enabled, initialization restores the previous session. Keep **Store Auth Session Securely** enabled so generated projects use the platform's protected-storage integration for persisted custom-auth data.

:::warning[Web storage limitation]
Protected browser storage cannot defend a token from malicious JavaScript already executing in the app's origin. Prevent cross-site scripting, use a strict Content Security Policy where possible, and consider server-managed `HttpOnly`, `Secure` cookies for higher-risk web applications.
:::

See [Custom Authentication](custom-auth/custom-auth.md) for the editor workflow and [Tokens](custom-auth/token.md) for token lifecycle and security guidance.

## Extending generated authentication code

Before editing generated auth files:

1. Export the latest project and keep the generated baseline under version control.
2. Prefer FlutterFlow custom actions or supported configuration when they can express the change.
3. Never embed provider secrets, service-account keys, refresh tokens, or administrative keys in client code.
4. Re-export into a separate branch and review the diff; future exports can replace generated files.
5. Test logged-out startup, successful and failed login, token expiry, refresh failure, logout, deep links, and protected-route redirects on every target platform.

Do not copy generated authentication files between projects without reviewing package names, provider configuration, routes, platform setup, and dependency versions.
