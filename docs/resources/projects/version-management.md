---
slug: flutterflow-version-management
title: FlutterFlow Version Management
tags: [Versioning]
keywords: [Versioning, FlutterFlow Version Management, Pin project FlutterFlow, Downgrade FlutterFlow version, Upgrade FlutterFlow version, FlutterFlow stable releases]
description: Learn how to manage FlutterFlow version for your project.
sidebar_position: 7
---

# FlutterFlow Version Management

FlutterFlow is constantly evolving to provide new features, address bugs, and keep up-to-date with Flutter and third-party packages. However, frequent updates can sometimes introduce unwanted changes or conflicts that break existing projects—especially those that rely on custom code or specific Flutter/package versions.

To mitigate these issues, FlutterFlow offers you a **Version Management** system that allows you to pin your project to a particular stable release of FlutterFlow. Projects pinned to a stable release will **not** automatically receive the latest FlutterFlow updates, giving you more control and stability over your development environment.

:::info

The FlutterFlow Version Management feature is available only on [**paid plans**](https://www.flutterflow.io/pricing).

:::

## Why Version Management Matters

- **Prevents Unexpected Breakage:** Frequent updates to FlutterFlow can break your project—particularly custom code—if underlying Flutter or package versions change. Pinning to a stable release ensures that your project’s code will not be affected by unexpected FlutterFlow updates.
- **Offers Control Over Update Timing:** FlutterFlow updates might occur at inopportune times (e.g., right before you plan to deploy). Version Management allows you to choose **if and when** to move your project to a newer release.
- **Enhances Reliability:** By using the pinned version, you can be confident that the same version of FlutterFlow, Flutter, and packages that you’ve tested will remain consistent, preventing surprises during critical development or deployment stages.

## Key Concepts

Below are the foundational ideas behind FlutterFlow’s Version Management system. Understanding these concepts will help you maintain project stability and control when upgrading.

### Stable Release

A **stable release** of FlutterFlow is a version that has passed rigorous testing and is frozen to specific:

- Flutter version
- Pubspec dependencies
- FlutterFlow frontend
- Project code generation

Stable releases are chosen on a regular cadence (e.g., quarterly or monthly). **Note** that each stable release will be supported for a set duration (6 months by default).

### Pinning Your Project

When you “pin” your project to a stable release, no updates from FlutterFlow will apply to your project during the pinned period. Each stable release will have associated web and desktop frontends, allowing you to continue working on your project without interruptions.

:::info
- **For Desktop**: You will download and install the dedicated binary for the pinned stable release. This binary won’t auto-update to give you a consistent development environment.
- **For Web**: You will access a unique URL to open the FlutterFlow pinned to that specific release.
- **No forced upgrades**: You won’t be prompted to switch to the latest FlutterFlow release until your pinned version’s support window (e.g., 6 months) has ended.
:::

To pin a project, navigate to **Settings and Integrations > Project Setup > Pin Version** and select the stable release you want to lock into.

### Project Upgrades

When your project is pinned, you can only upgrade to a later stable release (downgrading to a previous stable release is not allowed) once you decide to move on from the current pinned version. You can unpin your project at any time, which will automatically update it to the latest available FlutterFlow release.

## FlutterFlow Version Workflow

Let’s understand the versioning workflow of setting up and managing a pinned project with an example. Understanding each phase ensures you can confidently control your project’s FlutterFlow version.

![versioning-workflow.avif](imgs/versioning-workflow.avif)

1. **Encounter a Breaking Change**: Suppose you upgrade from **FlutterFlow version 4.2** to **4.3**, and notice breaking changes in your custom code. Rather than scrambling to fix these errors or getting stuck in version 4.3, you can opt to **pin your project to version 4**, a reliable stable release.
2. **Pin a Project**: By pinning your project to version 4, you effectively freeze the Flutter version, pubspec dependencies, and code generation at that stable point. This prevents all new updates from affecting your project or introducing further breakage.
3. **Skip Intermediate Versions**: While FlutterFlow continues to release newer versions (4.3, 4.4, 4.5), you remain on 4 until you decide it’s time to upgrade. This approach lets you safely build and publish your app without worrying about incremental breaking changes.
4. **Upgrade Directly to the Next Stable Release**: When FlutterFlow designates a future stable release, you can jump straight from 4 to 4.5 or 5, bypassing any issues in the in-between versions. This way, you only upgrade once, reducing the risk of multiple compatibility checks along the way.
5. **Stay in Control**: While pinned to a stable release, FlutterFlow will **not** automatically update your project. You alone decide when (and if) to move to a later stable release or whatever latest version by unpinning the project.

## FAQs

<details>
<summary>
What happens if I downgrade to a lower version of FlutterFlow after making changes in a higher version?
</summary>
<p>
Any changes made in a higher version will be lost when you revert to a lower version (e.g., by pinning to the last stable release). 
**To avoid data loss, thoroughly test your app after upgrading to ensure you want to continue with the updated version before downgrading.**
</p>
</details>

<details>
<summary>Can I downgrade my project after upgrading to a new stable release?</summary>
<p>
You will not be able to downgrade a project to a prior stable release. You can only choose to ‘pin’ your project to the next stable release that occurs (or has occurred) after your project change.
</p>
</details>

<details>
<summary>
Can I open the same project in multiple versions of FlutterFlow simultaneously?
</summary>
<p>
No, you cannot open the same project in two different versions of FlutterFlow at the same time.
</p>
</details>
