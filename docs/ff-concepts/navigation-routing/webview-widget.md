---
slug: /concepts/navigation/webview
title: WebView
description: >-
  Learn how to use the WebView widget in FlutterFlow to display website content
  directly within your app.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Concepts
sidebar_position: 6
keywords:
  - FlutterFlow
  - WebView
  - Navigation
  - Concepts
---
# WebView

The WebView widget lets you display the website content right inside your app. It's useful in a case where you don't want your users to leave your app to view the web page.


## Adding WebView widget

To add the WebView widget to your app:

1. Add the **WebView** widget from the **Base Elements** tab.
2. In the Properties Panel, set the widget's size and enter a complete **Webview URL**, such as `https://flutterflow.io/`. A valid height is required.
3. If a site blocks ordinary embedding, **Bypass Domain Restrictions** changes how the WebView loads the URL. It cannot guarantee compatibility with every site's authentication, content-security, or anti-embedding policy, so test the actual destination on each platform.
4. Enable **Force Allow Vertical Scrolling** or **Force Allow Horizontal Scrolling** when the WebView needs those gesture recognizers.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/16fa503bf54c4d10b099f38affd71749?sid=b03d8b13-b2d7-4351-85f1-9e9d001356fa" title="WebView interactive tutorial"
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

## Customizing

You can customize the appearance and behavior of this widget using the various properties available under the properties panel.

### Load content from HTML

Sometimes, you might choose to construct your own HTML with the desired styling and structure and then load that HTML into a WebView. For example, display a privacy policy page with a slight variation using modified HTML content (which might be different than the one hosted on your site).

To do so, enable **Load content from HTML** and enter **Webview HTML Content**. Provide an HTML fragment or document content without a `<!DOCTYPE html>` tag. Treat variable HTML as untrusted input: sanitize content you do not control before rendering it with JavaScript enabled.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://www.loom.com/embed/545515a32dc043da9c3320db7dd12b13?sid=7a16bb09-78f4-4ba5-990b-6b0456f1ebbe" title="WebView interactive tutorial"
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
