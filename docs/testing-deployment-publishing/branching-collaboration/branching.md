---
slug: branching
title: Branching
tags: []
description: Learn how branching in FlutterFlow allows you to add new features without disrupting your current progress. Understand the workflow of creating and merging branches, resolving conflicts, and the difference between merging and rebasing, with practical examples and tips.
sidebar_position: 1
---

# Branching
Branching creates a separate copy of your work, so you can add new features without disrupting your current progress. It enables multiple developers or teams to work simultaneously on different features without interfering with each other.

Suppose you have a digital cookbook app and you want to introduce a new feature, such as a shopping list. Instead of adding it directly to your main app and possibly causing issues, you create a branch to work on this new feature. Once it's done, you can bring it back into the main app.

:::info

This feature is only available for teams and enterprise users.

:::


:::warning

Creating a branch here doesn't create one on GitHub. Branches stay and are managed solely within FlutterFlow. If you are looking to manage custom code in GitHub, check out the tutorial [**here**](../exporting-code/push-to-github#manage-custom-code-in-github).

:::
## Create and merge branch

Before you create and merge a branch, it is essential to understand the general workflow. Here's what it looks like:

![branching](../imgs/branching.avif)

First, create a new branch from the 'main' branch. After making your changes and finalizing the feature, proceed to merge this new branch back into the main branch. If there are any conflicts, you must resolve them, and you'll able to merge the new branch into the main branch successfully.

:::note Few things to note here

- At the moment, FlutterFlow only supports merging into `main`.
- Only the user who initiated the merge can access both the `main`` branch and the branch during an ongoing merge.
- Changes that don't conflict are resolved automatically.
- You cannot current undo a merge, but a merge can be aborted if you want to start over.
- If you leave the project during the merging and come back, the progress you have made on the merge will be preserved.

:::

Let's see how to create, merge branches, and resolve conflicts with a practical example. Here's how you do it.

1. Create a new branch from the ‘main’ branch.

:::tip

You can also create a new branch from any existing branch.

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/5n61rPZR7WuWxs0lTFkE?embed&show_copy_link=true"
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

2. Make some changes in the new branch, and from the same menu, select the **Merge** option.

:::info

- You could also select the **Rebase** option, which rewrites the feature branch's history to appear as if it was built directly on top of the latest 'main' branch. However, It's **important to note** that if you're working in a collaborative setting where maintaining an accurate historical record is important, it's safer to simply use the **Merge** option.
- Know more about Merge vs Rebase [**here**](#merge-vs-rebase).

:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/VHuZbhTfT8Q8GbaMzMWA?embed&show_copy_link=true"
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

3. Now, you'll see a screen that will display if there are any conflicts. If you don’t have any conflicts, you can simply go ahead and click **Merge Branch**.

![merge](../imgs/merge.avif)

### Resolve conflicts
While you make changes in the new branch, if there is any change in the 'main' branch for the same page at the same location, you'll likely get conflicts. Here’s how you resolve them.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Ttcvg8zDKtlQSakqppOf?embed&show_copy_link=true"
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

### Resolve conflicts manually
If you choose to resolve manually, you can directly make changes in the **Accepted Changes** section. Note that if you cancel a manual resolution, you can choose to either keep or discard the changes you have made since starting the manual resolution.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/xZsRHG7d5rfNf5z937hZ?embed&show_copy_link=true"
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

:::info

If the visual editor doesn't display something in the split screen UI that you need to manage during a merge, click the **Edit Project** button and edit the project as usual.

:::

## Merge vs Rebase

The **Merge** option combines changes from different branches with a new commit, keeping a branched history. It's easier and more suitable for teams with simultaneous updates.

The **Rebase** option applies branch commits in a linear history onto the main branch, which is more complex but creates a cleaner timeline. Ideal for individual work and active main branches.

Let's understand the difference in detail with a scenario; Imagine you are working on a feature in your own branch while your colleague is making updates to the main branch.

### Before merging or rebasing

Your feature branch has two commits: Commit 1 and Commit 3 (which are your changes), and Commit 2 (made by a colleague in the main branch).

Before Merging/Rebasing

![before-merge-rebase](../imgs/before-merge-rebase.avif)

### After merging

It creates a new merge commit. This merge commit ties together the histories of the feature and main branches. The result is a divergent history that converges with the merge commit, preserving the sequence of commits as they were originally made.

![after-merging](../imgs/after-merging.avif)

### After rebasing

Your commits (Commit 1 and Commit 3) are replayed on top of Commit 2, which is the latest in the main branch. This makes it look like your changes were made after your colleague's changes, creating a clean, linear history.

![after-rebasing.avif](../imgs/after-rebasing.avif)

:::warning

It's essential to be cautious with rebasing, as it can rewrite commit history and potentially cause confusion for other collaborators. Merging is a safer option when working with shared branches in collaborative projects.

:::