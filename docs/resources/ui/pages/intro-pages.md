---
title: Introduction to Pages
slug: /resources/ui/pages
sidebar_position: 1
---

# Introduction to Pages

In FlutterFlow, a **Page** represents a single screen in your app. Under-the-hood pages use a **Scaffold**, a [foundational widget from Flutter](https://api.flutter.dev/flutter/material/Scaffold-class.html) that provides a structured layout for a screen within your app. The Scaffold offers essential elements like the AppBar and Body, allowing you to easily build screens.

Pages are composed of various UI elements, or widgets. Widgets are added to a page when they are added to the page's **Widget Tree**. 

:::note[Widget Tree]
The **Widget Tree** is a structural representation of how widgets are organized within a Page. To learn more, check out the [**Widget Overview**](../widgets/intro-widgets.md#widget-tree) documentation.
:::

In FlutterFlow, pages are automatically configured to handle [routing](https://docs.flutterflow.io/resources/ui/pages/properties#route-settings). Additionally, pages can have [input parameters](https://docs.flutterflow.io/resources/ui/pages/properties#page-parameters) and [state variables](https://docs.flutterflow.io/resources/ui/pages/page-lifecycle#page-state). 

:::info
For more details on how to use Scaffold and the various Page Elements in FlutterFlow, see the dedicated **[Page Elements](page-elements.md)** guide.
:::


## Creating a Page

In FlutterFlow, you can seamlessly craft a page tailored to your needs and design preferences.
Whether you're starting from scratch, using a template, or leveraging AI tools,
there are several pathways to achieve the desired functionality and aesthetic of your desired Page.

:::tip[Generated Code]
When you create a page in FlutterFlow, a `Widget` class and a corresponding `Model` class are automatically generated. You can view these in the Code Viewer. To explore the details of the generated `Model` class, take a closer [**look at the code**](../../../generated-code/pages-generated-code.md).
:::

FlutterFlow allows you to easily create new pages using the **Add Page, Component, or Flow** button, 
which is available from the **Page Selector** tab in the **Navigation Menu**. This will help you
quickly start and add new pages to your app.

<img src="/img/page-selector.png" width="50%" />

### Create an Empty Page

When creating your page in FlutterFlow, one option is to start with an empty page, providing you
with a blank canvas. This approach allows you to build your UI from the ground up by composing
widgets and components together according to your specific design vision and functional
requirements.

To create an empty FlutterFlow Page from scratch, follow the steps:

<iframe src="https://demo.arcade.software/rtOPRXVUByUAXxUynd8T?embed&show_copy_link=true" title="app.flutterflow.io/authentication" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>

### Create a Page from a Popular Template

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

### Create an AI Generated Page

You can quickly create a page using FlutterFlow AI by describing what you want in natural language. The AI uses your description or visual reference, along with your project context, to build the page with relevant widgets. This is especially helpful when you're starting from scratch or prototyping ideas rapidly. 

To create and add an AI-generated page, open the **Widget Tree**, click **Generate with AI** (magic wand) button, and select the **Page** tab. Next, describe the page you want to build, and hit the **Send** (up arrow) button.

FlutterFlow will process your request and display progress in the **AI Generation History** panel in the toolbar. Once the page is ready, you can preview it in both light and dark themes and apply various color schemes. If you're happy with the result, give it a name and add it to your project.

:::tip

- You can also upload a screenshot or image of the page you want to build. FlutterFlow AI will use it as a reference to generate the layout.
- While the AI is generating your page, you can continue working on other tasks within FlutterFlow, but make sure you don’t close the FlutterFlow app.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/DScLZeZG1NbGxO3Dufr3?embed&show_copy_link=true"
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

#### Import from Figma Frame

You can also quickly turn your Figma designs into functional pages in FlutterFlow. By providing a Figma Frame URL, FlutterFlow AI will analyze the design and automatically generate UI layouts that closely match your mockup.

To import from a Figma Frame, first, connect your Figma account, [import the Figma theme](../../../ff-concepts/design-system/design-system.md#import-figma-theme), and map your colors and typography accordingly. Next, open the **Generate with AI** dialog and click the **Plus (+)** button. Select **Import from Figma**, enter your **Figma frame URL**, and press **Send**.

A preview of the frame you are importing will appear. To finalize the import, click **Send** again. Once completed, the page will appear in the AI Generation History, where you can preview and add it to your project.

:::warning

Currently, we don't support importing SVG elements from Figma frames. However, you can manually add the SVGs directly to your project [**assets**](../../../generated-code/directory-structure.md#assets) after generation is complete, or replace them in Figma with supported image formats like PNG or JPEG.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/fPKzHNv7avhcUJ7IZ5hm?embed&show_copy_link=true"
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




	
