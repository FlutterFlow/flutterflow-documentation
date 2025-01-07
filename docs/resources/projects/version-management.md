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
Currently, the ability to pin a FlutterFlow project to a stable version is only available to **Enterprise** users.
:::

## Why Version Management Matters

- **Prevents Unexpected Breakage:** Frequent updates to FlutterFlow can break your project—particularly custom code—if underlying Flutter or package versions change. Pinning to a stable release ensures that your project’s code will not be affected by unexpected FlutterFlow updates.
- **Offers Control Over Update Timing:** FlutterFlow updates might occur at inopportune times (e.g., right before you plan to deploy). Version Management allows you to choose **if and when** to move your project to a newer release.
- **Enhances Reliability:** By using the pinned version, you can be confident that the same version of FlutterFlow, Flutter, and packages that you’ve tested will remain consistent, preventing surprises during critical development or deployment stages.

:::warning
That said, there are **downsides** to consider: pinning your project to a stable release means you won’t receive the newest FlutterFlow features or bug fixes as they’re released. **We only recommend doing this if you have complex app with dependencies or custom code that could break when upgraded.**
:::

## Key Concepts

Below are the foundational ideas behind FlutterFlow’s Version Management system. Understanding these concepts will help you maintain project stability and control when upgrading.

### Stable Release

A **stable release** of FlutterFlow is a version that has passed careful testing and is frozen to a specific:

- FlutterFlow frontend
- Project code generation
- Flutter version
- Set of Pubspec dependencies


Stable releases are chosen on a regular cadence (e.g., quarterly or monthly). **Note** that each stable release will be supported for a set duration (6 months by default).

### Pinning Your Project

When you “pin” your project to a stable release, no updates from FlutterFlow will apply to your project during the pinned period. Each stable release will have associated web and desktop frontends, allowing you to continue working on your project without interruptions.

:::info
- **For Desktop**: You will [**download**](https://www.flutterflow.io/desktop) and install the dedicated binary for the pinned stable release. This binary won’t auto-update to give you a consistent development environment.
- **For Web**: You will access a unique URL to open the FlutterFlow pinned to that specific release.
- **No forced upgrades**: You won’t be prompted to switch to the latest FlutterFlow release until your pinned version’s support window (e.g., 6 months) has ended.
- **Pinning only from main branch**: You can only pin a FlutterFlow version if your project is on the main branch; pinning from other branches isn’t allowed.
:::

### Viewing and Modifying Pinned Versions

You can check the project’s pinned FlutterFlow version from the Dashboard.

To change the pinned version, navigate to **Settings and Integrations > General > App Details >** scroll down to the **Version Pinning** section and select the stable release you want to lock into. Once you update the pinned version, you can only edit the project using that version of FlutterFlow.

You can upgrade to a newer release or switch to an older one. However, if you choose to downgrade, any changes made after moving to a higher version will be lost.

:::info
**Note that** only project owners can modify the pinned version.
:::


## Recommended FlutterFlow Version Workflow


![versioning-workflow.avif](imgs/versioning-workflow.avif)

1. **Encounter a Breaking Change**: Suppose you upgrade from **FlutterFlow version 4.2** to **4.3**, and notice breaking changes in your custom code. Rather than scrambling to fix these errors or getting stuck in version 4.3, you can opt to **pin your project to version 4**, a reliable stable release.
2. **Pin a Project**: By pinning your project to version 4, you effectively freeze the Flutter version, pubspec dependencies, and code generation at that stable point. This prevents all new updates from affecting your project or introducing further breakage.
3. **Skip Intermediate Versions**: While FlutterFlow continues to release newer versions (4.3, 4.4, 4.5), you remain on 4 until you decide it’s time to upgrade. This approach lets you safely build and publish your app without worrying about incremental breaking changes.
4. **Upgrade Directly to the Next Stable Release**: When FlutterFlow designates a future stable release, you can jump straight from 4 to 4.5 or 5, bypassing any issues in the in-between versions. This way, you only upgrade once, reducing the risk of multiple compatibility checks along the way.
5. **Stay in Control**: While pinned to a stable release, FlutterFlow will **not** automatically update your project. You alone decide when (and if) to move to a later stable release or whatever latest version by unpinning the project.

## Version Management with Libraries

[Libraries](libraries.md) have their own versions, and each library version corresponds to a specific FlutterFlow version. The FlutterFlow version of the library version is determined by the version used (pinned or otherwise) when the project was updated.

Library projects can also be pinned to a specific version, ensuring that all library versions use that FlutterFlow release until the pinned version is changed.

:::info
When you import a library into a project or another library, the library’s version must be lower than the project or library it’s being imported into; otherwise, you will encounter an error.
:::

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
<summary>
Can I edit my project in multiple versions of FlutterFlow?
</summary>
<p>
No. If your project is not pinned to a specific version, you’ll always use the latest FlutterFlow release. If your project is pinned to a specific version of FlutterFlow, you will be prompted to edit the project in that version.
</p>
</details>

<details>
<summary>
How often are new stable versions released?
</summary>
<p>
We aim to release new stable versions of FlutterFlow once a month.
</p>
</details>

<details>
<summary>
How can I see what's included in a new stable version?
</summary>
<p>
We’re currently working on displaying release notes directly in the product, so you can easily review what’s been added or changed in each new stable version.
</p>
</details>

<details>
<summary>
What if there are bugs in the FlutterFlow version I’m using?
</summary>
<p>
If critical bugs arise, we may provide hotfixes or patches for older FlutterFlow versions. However, some fixes depend on updating the underlying Flutter framework or related dependencies, which isn’t always feasible for older versions. This is a risk of staying on an older version of FlutterFlow as opposed to always using the latest.
</p>
</details>