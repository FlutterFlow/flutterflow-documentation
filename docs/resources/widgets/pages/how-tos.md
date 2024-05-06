---
title: How-to
sidebar_position: 2
---

#

FlutterFlow allows you to easily create new pages using the Page Selector
button, which is available in the Widget Tree menu (Tab+2). This will help you
quickly start and add new pages to your app.

![page-selector.png](imgs%2Fpage-selector.png)

## Create an empty page

To create an empty FlutterFlow page from scratch, follow the steps:

<iframe src="https://demo.arcade.software/rtOPRXVUByUAXxUynd8T?embed&show_copy_link=true" title="app.flutterflow.io/authentication" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>

## Create a page from a popular template

FlutterFlow simplifies the process of page creation by offering a variety of
popular template use cases. These templates provide a basic structure for your
pages, which you can quickly customize with your own styling, widgets, and text.

To utilize a template from FlutterFlow, follow these steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/bkaz68ipgi497Pf4v8EB?embed&show_copy_link=true"
        title="Create a page from a popular template"
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

## Create an AI generated page

FlutterFlow's 'AI Gen' feature allows you to generate various elements,
including pages, from a prompt. This can be particularly useful when you're
unsure where to start.

Once the page is generated, you can preview it with different color schemes, in
both light and dark themes, and add new themes as desired. You also have the
option to view the page's code and regenerate images as needed.

To create an AI Generated page, follow the steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/hLpE44TVjb72rzTTpxRK?embed&show_copy_link=true"
        title="Create an AI generated page"
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

In FlutterFlow, setting page properties is an essential step to customizing the
behavior and appearance of your app’s pages. Here’s an overview of how you can
set and manage
these properties in FlutterFlow:

## Modifying Page Properties

### How to navigate?

Within an app, navigation is the process of moving between different pages,
enabling users to interact with various features and content
efficiently. Let's see how to do that in FlutterFlow: 

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/EwmbXvNO5SvWtQdQyTBK?embed&show_copy_link=true"
        title="Navigate"
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

### Page Parameters

As discussed in the [Page Concepts](resources/widgets/pages/#page-parameters)
page, Page Parameters are used to pass data between pages.

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

When a page parameter is set to Required, it indicates that this parameter is
mandatory when navigating to this page. Users must provide this value;
otherwise, FlutterFlow will throw errors. However, if you are creating an
optional parameter, please ensure this option is unchecked.

Additionally, you can specify a default value in the Default Parameter Value
field to safeguard against incoming values that are empty or null. This step is
optional.

![Page-Params.png](..%2Fimgs%2FPage-Params.png)

If you have created a Required Page Parameter and there is a Navigation Action
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





:::info[When to use Page Parameters?]
Page parameters are used to pass essential data between pages that is not
persisted in the app’s global state but is necessary for specific
functionalities or displays on the subsequent page. Here’s a
breakdown of typical uses:

**Contextual Data:** Information that defines the context of the new page, such
as
identifiers for items or entities that the page must display. This could include
identifiers for transactions, specific products, or user profiles that were
selected on the previous page.

**Configuration Options:** Settings or options chosen by the user that affect
how
the next page functions or appears. For example, filter or sort preferences
selected on a list page that need to be applied on a subsequent results page.

**Operational Parameters:** Values needed for calculations or logic on the next
page
that are generated through user activities on the current page. These could be
values like quantities, dates, or configuration details necessary to perform
operations or initiate processes on the next page.

Page parameters are thus essential for maintaining a seamless user experience,
enabling the new page to function as intended based on the specific needs and
inputs from a previous interaction.
:::

### Creating / using page state		