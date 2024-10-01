---
slug: /collaboration/saving-versioning
title: Saving and Versioning
description: Learn about the crucial concepts of saving and versioning in your FlutterFlow project.
tags: [Saving, Versioning, Collaboration]
sidebar_position: 2
keywords: [Saving, Versioning, Collaboration, FlutterFlow, Concepts]
---

# Saving and Versioning

In this section, we discuss the important concepts of saving and versioning in your project. Understanding how to use versions, snapshots and commits can be crucial in preventing loss of work and maintaining progress.

## Versions

Versions enable you to save specific named states of your project. This function is particularly useful for recovery purposes. If you accidentally delete a page or component or change settings, you can easily revert to a saved version.

### Saving a version

Saving the latest changes will store the current state of your app in the version control. In the future, if anything goes wrong, you can restore your app to the currently saved state.

Ideally, you should save the version whenever you accomplish something important, for example, after finishing a page, adding configuration, etc.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/nxgOUj0g3jwszbXnCSXE?embed&show_copy_link=true"
        title="Sharing a Project with a User"
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

### Restoring a version

Restoring the previous version will preserve the current version, then load the changes from the version you're restoring. Before restoration, you may want to view the changes in the previous version. To do this, select the **Peek** option, which opens the previous version in a new tab.

![restore-version](../imgs/restore-version.avif)


## Commits

Commits are similar to versions in that you can save the state of your project at a point in time. Commits are saved to a specific branch's history. With commits you can view the specific changes made in that commit and restore a branch to the state of a specific commit. For more details see this page on [Branching and Commits](../branching-collaboration/branching.md#commits).

## Snapshots

Snapshots are automatic saves of your project's state as you build it. They allow you to **Peek** or **Revert** to a previous state of the project if needed.

![snapshots](../imgs/snapshots.avif)

:::info

Users on the *Free* and *Standard* plans can access only one day of snapshots.

:::