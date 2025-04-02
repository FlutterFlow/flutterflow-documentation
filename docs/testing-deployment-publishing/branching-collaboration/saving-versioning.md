---
slug: /collaboration/saving-versioning
title: Saving and Versioning
description: Learn about versioning in your FlutterFlow.
tags: [Versioning]
sidebar_position: 2
keywords: [Saving, Versioning, Collaboration, FlutterFlow, Concepts]
---

# Saving and Versioning

In this section, we discuss the important concepts of saving and versioning in your project. Understanding how to use versions, snapshots and commits can be crucial in preventing loss of work and maintaining progress.

## Versions

:::warning[Project Versions are now deprecated]
You can no longer create new versions in FlutterFlow. However, any previously created versions will remain accessible. Moving forward, we recommend using [**Commits**](#commits), which provides a more robust way to track changes and manage your project history.
:::


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