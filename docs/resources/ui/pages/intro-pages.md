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

In FlutterFlow, you can craft a page tailored to your needs and design preferences.
Whether you're starting from scratch, using a template, or leveraging AI tools,
there are several pathways to achieve the desired functionality and aesthetic of your desired Page.

:::tip[Generated Code]
When you create a page in FlutterFlow, a `Widget` class and a corresponding `Model` class are automatically generated. You can view these in the Code Viewer. To explore the details of the generated `Model` class, take a closer [**look at the code**](../../../generated-code/pages-generated-code.md).
:::

FlutterFlow allows you to easily create new pages from the **Page Selector** tab in the **Navigation Menu**.

![create-new-page.avif](imgs/create-new-page.avif)

### Create Empty Page

When creating your page in FlutterFlow, one option is to start with an empty page, providing you
with a blank canvas. This approach allows you to build your UI from the ground up by composing
widgets and components together according to your specific design vision and functional
requirements.

To create an empty FlutterFlow Page from scratch, follow these steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ocBbnPspp26FKv75YggO?embed&show_copy_link=true"
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

### Create Page from Template

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
        src="https://demo.arcade.software/JBhxcBBPb7r1Yk6YwehS?embed&show_copy_link=true"
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

### Generate with Designer

You can quickly create a page with [FlutterFlow Designer](https://designer.flutterflow.io/) by describing what you want in natural language. Designer uses your description along with your project context, to build the page with relevant widgets. This is especially helpful when you're starting from scratch or prototyping ideas rapidly.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/oRmGZOkvdnM844VZfHLq?embed&show_copy_link=true"
        title="Generate with Designer"
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

### Import from Figma Frame

You can quickly turn your Figma designs into functional FlutterFlow pages using **Import from Figma**. Simply provide a Figma Frame URL, and FlutterFlow AI will analyze the design and generate a UI layout that closely matches your mockup.

To get started, first [connect your Figma account](../../../ff-concepts/design-system/design-system.md#import-figma-theme). Then, when creating a new page, select **Import from Figma** from the available options. Paste the Figma Frame URL and click **Import**.

FlutterFlow will display a preview of the selected frame. Review the preview, then click **Generate** to create the page. Once completed, the page will appear in the **AI Generation History**, where you can preview and add it to your project.

:::warning

Currently, FlutterFlow doesn't support importing SVG elements from Figma frames. However, you can manually add the SVGs directly to your project [**assets**](../../../generated-code/directory-structure.md#assets) after generation is complete, or replace them in Figma with supported image formats like PNG or JPEG.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/3JLrZYc1ZgRp6upm087m?embed&show_copy_link=true"
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




	
