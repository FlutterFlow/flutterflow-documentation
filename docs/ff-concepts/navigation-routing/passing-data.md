---
slug: /concepts/navigation/passing-data
title: Passing Data
description: Learn how to pass data between pages in FlutterFlow.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 2
keywords:
  - FlutterFlow
  - Passing Data
  - Navigation
  - Concepts
  - pass data or parameters between FlutterFlow pages
ai_queries:
  - pass data or parameters between FlutterFlow pages
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Passing Data between Pages

As you build your app, you'll often encounter the need to pass through or transfer data from one page to another. For instance, when a user taps on a product item, you may want to send product data to the next page to display its details.

## Page parameters
This process of passing data between pages is accomplished using **Parameters**. When navigating
from one page to another, you can send parameters to configure the destination
page based on the data from the current page. This is useful for tasks like
passing a user ID to a profile page or specific details to a detailed view page.

To create a page parameter, follow the steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/oZV2X0pKNYO61p1jhY22?embed&show_copy_link=true"
        title="Create Page Parameters"
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

When a page parameter is **Required**, every navigation to that page must supply a compatible value unless the parameter has a default. FlutterFlow reports a project error when a required parameter with no default is missing. Leave **Required** off when the destination can handle no value.

You can set **Default Parameter Value (Optional)** as a fallback when the navigation does not supply a value. A default also satisfies the requirement for a non-nullable parameter.

![Page-Params.png](imgs/Page-Params.png)

If you have created a **Required** Page Parameter and there is a Navigation Action
already set on your previous page, FlutterFlow will throw errors because this
required parameter has not yet been sent from the previous page. Let's fix that:


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/kp34JJipEW24hz0u5RsW?embed&show_copy_link=true"
        title="Send Page Parameters"
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

<figure>

  <figcaption class="centered-caption"></figcaption>
</figure>

:::info
Passing data can only be tested in **Run** and **Test** Mode (it can not be tested in Preview Mode).
:::

## When to use Page Parameters?
Page parameters are used to pass essential data between pages that is not
persisted in the app’s global state but is necessary for specific
functionalities or displays on the subsequent page. Here’s a
breakdown of typical uses:

- **Contextual Data:** Information that defines the context of the new page, such
as
identifiers for items or entities that the page must display. This could include
identifiers for transactions, specific products, or user profiles that were
selected on the previous page.

- **Configuration Options:** Settings or options chosen by the user that affect
how
the next page functions or appears. For example, filter or sort preferences
selected on a list page that need to be applied on a subsequent results page.

- **Operational Parameters:** Values needed for calculations or logic on the next
page
that are generated through user activities on the current page. These could be
values like quantities, dates, or configuration details necessary to perform
operations or initiate processes on the next page.

Page parameters are thus essential for maintaining a seamless user experience,
enabling the new page to function as intended based on the specific needs and
inputs from a previous interaction.

## Allowed Data Types

Page parameter types include the primitive and built-in types supported by the page parameter picker: Integer, Double, String and media paths, Boolean, Color, Date Time, JSON, Timestamp Range, LatLng, Google Place, Enum, Data Type, Uploaded File (Bytes), and supported backend record/reference types when their integration is configured. The picker is the authority for the current project because database-specific types appear conditionally.

Pass the smallest stable value the destination needs. For a details page, an ID or document reference is often safer than copying a large mutable record. Do not pass API keys, passwords, or access tokens in page parameters; routed apps may serialize supported parameter values into navigation state or URLs.

:::info
For Firestore, **Document** passes an available record value, while **Document Reference** passes a reference that the destination can use to fetch the current record. Choose based on whether the destination needs the existing snapshot or should retrieve fresh data.
:::
---

## Video guide

If you prefer watching a video tutorial, here's the one for you:
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.youtube.com/embed/F_4O1uWm22g" title="Passing Data interactive tutorial"
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

## Related documentation

See [Bottom Sheet](/concepts/navigation/bottom-sheet) for a related FlutterFlow workflow.
