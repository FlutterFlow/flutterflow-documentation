---
slug: /import-export
title: Import & Export
description: Learn how to import screens from FlutterFlow into Designer and export your designs as assets, prompts, or directly back into FlutterFlow.
tags: [Import, Export, FlutterFlow Designer]
sidebar_position: 0
keywords: [Import from FlutterFlow, export design, FlutterFlow Designer export, UI handoff, design to FlutterFlow, export frames PNG, agent prompt export]
---

# Import & Export

## Import from FlutterFlow

Importing from FlutterFlow allows you to bring your existing app screens directly into the Designer environment. Instead of rebuilding UI from scratch, you can enhance layouts, explore new styles, and refine user experience faster. This is especially helpful when you want to modernize an existing app, experiment with different design directions, or quickly generate improved versions of your current screens.

To import screens from FlutterFlow, select **Export to Designer** from the canvas menu options, then choose the pages you want to send in the export dialog. Once selected, click the export button to transfer them. After the process completes, the selected pages will open in FF Designer, where you can continue customizing and iterating on them.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(52.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/uP7GVnLeypzWRm4fkqQg?embed&show_copy_link=true"
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


## Export Design

Once your screens are finalized, you can export your design for implementation. FlutterFlow Designer provides flexible export options depending on whether you want static assets, reusable prompts, or direct integration into FlutterFlow.

### Export Options

- **Export Frames as PNGs:** Download high-quality PNG screenshots of your frames. This is ideal for adding to documentation, or presenting visual concepts.
- **Export Agent Prompt:** Download an agent-ready prompt as a Markdown file. This allows you to reuse the generated design structure as context in AI workflows or modify it further using natural language instructions.
- **Export to FlutterFlow:** Copy all frames directly to your clipboard for pasting into a FlutterFlow project. Simply select a widget on a FlutterFlow project page and paste to import all your design instantly.

### Export Whole Design

To export the entire storyboard, open the top-left **FF Designer** menu and choose one of the export options (PNGs, Agent Prompt, or FlutterFlow). This method is best when your full flow is ready for implementation.

![export-all.avif](imgs/export-all.avif)

### Export Individual Frames

To export a single frame, select a specific frame and use the **Export** section in the right panel. Use this when you only need to implement a particular screen.

![export-single-screen.avif](imgs/export-single-screen.avif)

