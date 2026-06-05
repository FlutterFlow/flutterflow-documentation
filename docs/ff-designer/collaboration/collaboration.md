---
slug: /designer/collaboration
title: Collaboration
description: Work on the same design together — in real time, with comments and shared access.
tags: [Collaboration, FlutterFlow Designer, FlutterFlow, Design]
sidebar_position: 0
keywords: [collaboration, share design, real-time editing, presence, comments, live cursors]
---

# Collaboration

Collaboration lets multiple people work on the same design at once. Edits, cursors, and comments all stay in sync, so a team can explore and refine a design together without passing files back and forth.

{/* 🎬 CLIP: Two editors on one canvas — live cursors moving, a frame updating for both. ~8s */}

## Sharing & Access

Designs are shared by email. You invite someone by entering their email address, and they get access to that specific design — there are no public links or anonymous access.

Each collaborator is given one of two roles:

- **View** — open the design and follow along, without making changes.
- **Edit** — make changes to the design alongside everyone else.

The owner manages who has access and can add, change a role, or remove collaborators at any time. Access is granted per design, so sharing one design doesn't expose anything else in your workspace.

### Add a Collaborator

1. Open the design you want to share, then open the **Collaboration** dialog from the share control. The owner is shown at the top, with everyone the design is shared with listed under **Shared with**.
2. In the email field (`name@company.com`), type the address of the person you want to add.
3. Use the role dropdown next to the field to set their access — **View** or **Edit**. New collaborators default to **Edit**.
4. Select **Add** (or press Enter). They appear in the **Shared with** list, and live collaboration turns on for the design.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ayByDYPuSd7gotwlbgGE?embed&show_copy_link=true"
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

### Change a Collaborator's Role

In the **Shared with** list, open the role dropdown on that person's row and switch between **View** and **Edit**. The change applies immediately.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/LNyH0fGNgGrCHh1d5wvE?embed&show_copy_link=true"
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

### Remove a Collaborator

In the **Shared with** list, select the remove icon on that person's row. They lose access right away. Removing the last collaborator turns off live collaboration for the design.

## Real-Time Editing

Everyone with Edit access works on the same canvas at the same time. Changes appear instantly for all collaborators, like adding a frame, restyling an element, or updating the theme is reflected for everyone as it happens, with no manual saving or refreshing.

Because changes are merged automatically as they're made, multiple people can edit at the same time without overwriting each other's work or running into "who saved last" conflicts.

{/* 🎬 CLIP: One person edits a frame's layout while another watches it update live. ~8s */}

Active collaborators are shown on the canvas as you work, so you always know who else is in the design and what they're focused on:

## Comments

Comments let you leave feedback directly on a design — pinned to a frame, an element, or the canvas itself — so discussion stays anchored to what it's about. Each comment opens a thread for replies, and the Designer Agent can act on a comment to make the change for you.

### Add a Comment

1. Right-click on the canvas, a frame, or an element, and choose **Comment**. A **New comment** popover opens, anchored where you clicked.
2. The popover shows the target above the input — **On Canvas**, **On Frame …**, or the element name — so you know what the comment is pinned to.
3. Type in the **Add a comment** field (up to 4,000 characters).
4. Select **Send** (or press Enter). A canvas comment drops a pin with your avatar; a frame or element comment adds a count bubble to the frame.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/X3GbUt5WHU9ZetKXMPQN?embed&show_copy_link=true"
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


### View and Reply in a Thread

1. Select a canvas **pin**, or a frame's **comment bubble** (tooltip: *View comments*). A bubble with multiple threads opens a list first — pick the one you want.
2. The thread shows the original comment and all replies, oldest to newest. Long threads load more replies as you scroll.
3. Type in the **Write a reply** field at the bottom and press Enter or select **Send**.


### Edit or Delete Your Own Comment

These actions appear only on comments you authored.

1. Hover the comment you wrote and select the **⋯** menu (tooltip: *Comment actions*).
2. Choose **Edit**, change the text in place, and send. The comment is marked **Edited**.
3. Choose **Delete** to remove the comment. To remove an entire thread you started, use the **Delete thread** action in the thread header.

### Ask the Designer Agent

1. Hover a comment or open its thread, then select **Ask agent to fix** (the sparkles action). It's available from a comment row, the thread header, and individual messages.
2. The agent reads the full thread, original comment and replies and applies the requested change to the target frame or element. It's unavailable while the editor is already busy.
3. When it finishes, the agent posts a reply in the thread confirming the change. 

:::info
For comments on the canvas, this action instead creates a new frame from the comment.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/mDkGWhglYCynNSOYkCWD?embed&show_copy_link=true"
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


