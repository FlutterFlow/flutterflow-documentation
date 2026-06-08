---
slug: /designer/slides
title: Slides
description: Turn a FlutterFlow Designer project into a presentation deck. Design 16:9 slides, present with presenter view, and import or export PowerPoint files.
tags: [Slides, Presentation, FlutterFlow Designer, PowerPoint]
sidebar_position: 6
keywords: [slides, presentation, pptx, powerpoint, presenter view, speaker notes, deck]
---

# Slides

**Slides** turns a FlutterFlow Designer project into a presentation deck. Instead of designing phone, tablet, or desktop screens, each frame becomes a 16:9 slide. You get speaker notes, a real present-with-presenter-view mode, and two-way PowerPoint support: import an existing `.pptx` to edit, or export your deck back out to `.pptx`.

## Set up a slide deck

1. Switch the project's device type to **Slides**.
2. Frames become fixed presentation sizes: **1280×720** (720p) or **1920×1080** (1080p).
3. Describe the deck you want in the prompt textbox (your topic, key points, and how many slides) and let Designer generate it.
4. Once the deck is generated, refine each slide manually, just like any other design project.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/kLxWDk3C9ljvrF6gpsDd?embed&show_copy_link=true"
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


### Speaker notes

Each slide gets its own **speaker notes** field in the right-hand panel. These notes show up in presenter mode and travel with PowerPoint import and export.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/1jvNbr0CcofNvzXvhW5J?embed&show_copy_link=true"
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



## Present the slideshow

To start, click the **Present** button in the top bar (only visible on Slides projects), or use the present keyboard shortcut.

You get a two-window setup:

- A full-screen **audience view**: clean, black background, showing exactly what the room sees.
- A separate **presenter window** showing the current slide, a preview of the next slide, your speaker notes, an elapsed-time timer, and prev/next controls.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/98HnO7uCcjcrLiHFYqLm?embed&show_copy_link=true"
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

### Navigation shortcuts

| Action | Keys |
|--------|------|
| Next | `→` · `↓` · `Space` · `Page Down` · or click/tap the slide |
| Previous | `←` · `↑` · `Page Up` |
| Exit | `Esc` |

:::tip
You can keep editing slides while presenting, and changes sync live into the presentation. When you exit, the canvas jumps back to whatever slide you ended on.
:::

## Export to PowerPoint

In the left panel, choose **Export to PowerPoint**, or use the **Export presentation (.pptx)** button in the right panel.

The result is a real, editable PowerPoint file: text stays as editable text and shapes stay as shapes (not flattened images) wherever possible. Charts export as native charts; icons that can't be represented natively are rendered as images.
