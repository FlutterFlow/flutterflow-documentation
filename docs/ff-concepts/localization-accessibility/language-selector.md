---
slug: /concepts/multiple-languages/language-selector
title: Language Selector Widget
tags: [Multilingual, Base Elements]
keywords: [FlutterFlow, Language Selector, Base Widget, Multilingual, Localization, Internationalization]
description: Learn how to add the LanguageSelector widget in your FlutterFlow app.
---

# LanguageSelector
The LanguageSelector widget is used to allow a user to set the language of your app. The LanguageSelector widget shows the currently selected language and opens up a list of all languages (that you support) when you tap on it.

For example, you can use the LanguageSelector widget on the onboarding screen to let users choose the app language.

## Adding LanguageSelector Widget

Let's build an example of adding the LanguageSelector and see how the app language changes when selecting a different language from the LanguageSelector. Here's how it looks:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/yHRU7CbH70L4brfnIAFQ?embed&show_copy_link=true"
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

To add LanguageSelector to your project:

1. Make sure you have added multi-language support to your app. If you haven't already done so, find the instructions here.
2. First, drag the **Column** widget from the **Layout Elements** tab (in the Widget Panel).
3. Now, add the **LanguageSelector** widget (inside Column) by dragging it from the **Base Elements** tab or adding it directly from the widget tree. Align it in the center.
4. Add the [**Text**](../../widgets/built-in-widgets/text.md) widget to show the text.
5. Translate the text by navigating to Settings and Integration -> General -> Languages -> App Content Translations -> Page Name -> Your Text.
6. Find the language dropdown above the canvas and try changing it to other languages and see the translated text appear on the canvas.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/fhDyEymKhaq0amxgvQkv?embed&show_copy_link=true"
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


## Customization

You can customize the behavior of this widget using the various properties available under the [properties panel](../../../../intro/ff-ui/builder.md#navigation-menu).

### Customizing Flag

By default, the LanguageSelector widget shows the country flag before the language name. You can change the flag's size, adjust the spacing between flag and language name or completely hide the flag.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/42ca2WpXy8Vi3sFOZHAW?embed&show_copy_link=true"
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

### Adding Space between Flag and Text

To add some space between the flag and the language name:

1. Select the **LanguageSelector** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Language Selector** section.
3. Find the **Flag & Text Gap** property and enter the value.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/S9jTRxew8s3mACc4Bu6t?embed&show_copy_link=true"
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

### Hiding the Flag

To hide the flag:

1. Select the **LanguageSelector** widget from the widget tree or from the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Language Selector** section.
3. Checkmark the **Hide Flags** property to hide the flag (click on it).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/mBDmeXu7zZEJiye8HlNJ?embed&show_copy_link=true"
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