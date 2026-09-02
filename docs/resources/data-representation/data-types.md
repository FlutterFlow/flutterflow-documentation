---
slug: /resources/data-representation/data-types
title: Data Types
description: >-
  FlutterFlow supports a variety of data types to accommodate different needs in
  your app.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Resources
  - Data
sidebar_position: 2
keywords:
  - Data Types
  - FlutterFlow
  - Data Representation
---
# Data Types

FlutterFlow uses data types to determine which values a variable, field, parameter, or action input can accept. The available type picker is context-sensitive: App State, component parameters, backend fields, custom code, and action outputs do not all expose the same set of types.

## Primitive Data Types

Primitive data types are the basic value types: **Integer**, **Double**, **Boolean**, and **String**. FlutterFlow's picker uses **String**, not a separate Text data type.

## Composite Data Types

Composite data types organize multiple values. A variable can be configured as a **List**, and a **Data Type** can contain multiple named fields. Backend records and JSON values are also structured values, but their fields and operations depend on their source.

### Custom Data Types
You can also create your own custom data types. This can be especially useful when you need a specific structure for your data that doesn't fit into the predefined types. For example, you might create a custom data type for a user profile, which includes several pieces of data like a name, an email address, and a profile picture.

:::info
Learn more about creating and using [**Custom Data Types**](custom-data-types.md).
:::

## Built-in Data Types

Common built-in types include:

- **Color:** A Flutter color value.
- **Image Path**, **Video Path**, and **Audio Path:** A path or URL for the corresponding media type.
- **Date Time:** A date and time value.
- **JSON:** A JSON value, such as `{"firstName":"John","lastName":"Doe"}`.
- **LatLng:** A latitude and longitude pair.
- **TimestampRange:** A start and end date-time value.
- **GooglePlace:** Place details returned by Google Places workflows.
- **Data Type:** An instance of a project-defined [custom data type](custom-data-types.md).
- **Enum:** One value from a project-defined [enum](enums.md).

Additional types appear only where their backing feature or value source is available:

- **Document Reference** and **Document** for Cloud Firestore references and records.
- **Supabase Row** or another Postgres row type when the project uses a supported Postgres database.
- **SQLite Row** when the project uses SQLite.
- **Uploaded File (Bytes)** for an uploaded file's bytes and metadata.
- **API Response**, **RevenueCat Package**, **RevenueCat Offering**, **Custom Cloud Function Response**, and **Response Stream Message** for outputs produced by those integrations or actions.
- **Action**, **Widget Builder**, **Child Widget**, **Custom Class**, and **Custom Enum** in the specific parameter or custom-code contexts that support them.

If a type does not appear in a picker, first check the variable's scope and whether the required backend or integration is enabled. Do not substitute a similarly named type: for example, a Firestore **Document** and **Document Reference** have different behavior.

## Enums

Enums consist of a fixed set of named values. They provide a type-safe choice for concepts such as a user role (`admin`, `user`, or `guest`) or order status, avoiding misspelled free-form strings.

:::info

Learn more about creating and using enums [**here**](enums.md).

:::
