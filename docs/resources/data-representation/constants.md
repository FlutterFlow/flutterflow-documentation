---
slug: /resources/data-representation/constants
title: Constants
description: >-
  Explore the importance of using Constants in FlutterFlow to define unchanging
  values throughout your application.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Resources
  - Data
sidebar_position: 6
keywords:
  - Constants
  - FlutterFlow
  - Data Representation
---
# Constants
Constants define app-wide values that cannot be changed by actions at runtime. Use them for values you configure once in the builder and reuse in widgets, actions, or expressions.

Examples include a public API base URL, a standard mathematical value, or a maximum size imposed by a business rule. A project constant is compiled into the exported app, so never use it for API keys, passwords, or other secrets.

:::tip[When to use Constants vs **[App state variables](app-state)?**]
Constants don't change. Once you set a constant's value in the builder, the running app cannot reassign it. App State variables are dynamic and can be updated in response to interactions such as a button tap.
:::

## Create and use Constants

1. Open **App Values > Constants** from the left-side navigation menu.
2. Select **Add App Constant**, then enter its name, optional description, type, list setting, and value.
3. In a compatible property or action input, open **Set from Variable > Constants > Project Constants** and select it.

Project constants currently support Integer, Double, String, Color, Image Path, Video Path, Audio Path, and Boolean values; each can also be configured as a list. Exported code emits them as `static const` fields in `lib/app_constants.dart` when the project defines constants.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/Dftl0AAL3w3fw6TjaiBR?embed&show_copy_link=true" title="Constants interactive tutorial"
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

:::tip[Naming Convention]
Prefer a lowercase `k` prefix for constants, such as `kMaximumUploadSize`, to signal immutability. To learn more, refer to **[Naming Variables & Functions](../../resources/style-guide.md)**.
:::
