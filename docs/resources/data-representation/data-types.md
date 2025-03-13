---
slug: /resources/data-representation/data-types
title: Data Types
description: Dive into the diverse range of data types supported by FlutterFlow, from basic primitives like integers and strings to complex composite types and built-in functionalities tailored for app development.
tags: [Data Types, FlutterFlow, Data Representation]
sidebar_position: 2
keywords: [Data Types, FlutterFlow, Data Representation]
---

# Data Types

FlutterFlow supports a variety of data types to accommodate different needs in your app. These data types range from the basic, such as integers and strings, to more complex types like lists, maps, and built-in data types.

## Primitive Data Types

Primitive data types are the most basic data types. They include **integers**, **doubles**, **booleans**, and **strings**. These are the building blocks and are essential in any kind of app development.

## Composite Data Types

Composite data types are made up of primitive data types. They can hold multiple values and can be used to structure and organize data in a more meaningful way. Examples of composite data types include **lists** and **custom data types**.

### Custom Data Types
You can also create your own custom data types. This can be especially useful when you need a specific structure for your data that doesn't fit into the predefined types. For example, you might create a custom data type for a user profile, which includes several pieces of data like a name, an email address, and a profile picture.

:::info
Learn more about creating and using [**Custom Data Types**](custom-data-types).
:::

## Built-in Data Types

FlutterFlow's built-in data types are essential for effectively managing and organizing diverse information. They ensure data consistency and easy data retrieval. They handle functionalities from storing simple color values and media URLs to complex geographical data.

For instance, the **GooglePlace** data type manages location data like coordinates, place name, and address, while the **Uploaded File** type handles uploaded file data, including file name, binary data, and image dimensions. This standardization is crucial as it allows you to focus on higher-level application logic without worrying about the underlying data handling specifics.
Below is a list of all supported built-in data types:

- **Color**: Stores color values.
- **Image Path**: Stores the URL of uploaded images.
- **Video Path**: Stores the URL of uploaded videos.
- **Audio Path**: Stores the URL of uploaded audio files.
- **Document Reference**: Stores references to documents, simplifying data fetching.
- **Document**: Stores actual Firestore documents.
- **Date Time**: Stores date and time values.
- **Json**: Stores JSON values, such as `{"firstName":"John", "lastName":"Doe"}`.
- **LatLng**: Stores the latitude and longitude of specific locations, aiding Google Maps integration.
- **TimestampRange**: Stores start and end date-time values.
- **GooglePlace**: Stores GooglePlace data.
- **Data Type**: Stores custom data types.
- **Supabase Row**: Stores actual row data from a Supabase table.
- **Uploaded File (Bytes)**: Stores uploaded files in Bytes.

## Enums

Enums, or enumerated types, are a special kind of data type that consists of a set of related values. They can be used to create a type-safe way of dealing with a specific set of values. For instance, you may have an enum for user roles, such as 'admin', 'user', and 'guest'.

:::info

Learn more about creating and using enums [**here**](enums).

:::
