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
- **For Web**: You will be automatically redirected to the unique URL when you open a project from the dashboard.
- **No forced upgrades**: You won’t be prompted to switch to the latest FlutterFlow release until your pinned version’s support window (e.g., 6 months) has ended.
- **Pinning only from main branch**: You can only pin a FlutterFlow version if your project is on the main branch; pinning from other branches isn’t allowed.
:::

### Viewing and Modifying Pinned Versions

You can check the project’s pinned FlutterFlow version from the Dashboard.

![see-pinned-project-in-dashboard](imgs/see-pinned-project-in-dashboard.avif)

To change the pinned version, navigate to **Settings and Integrations > General > App Details >** scroll down to the **Version Pinning** section and select the stable release you want to lock into. Once you update the pinned version, you can only edit the project using that version of FlutterFlow.

![pin-version](imgs/pin-version.avif)

You can upgrade to a newer release or switch to an older one. However, if you choose to downgrade, any changes made after moving to a higher version will be lost.

:::info
**Note that** only project owners can modify the pinned version.
:::


## Recommended FlutterFlow Version Workflow

If you have a complex app with custom code that depends on specific versions of package dependencies, it may be helpful to pin your project to a specific version. This is the workflow we recommend for managing the version of your projects.

1. You’ll be notified when a new stable version is released, typically every four weeks.
2. When a new stable version is released, you can choose when you would like to upgrade based on your own release schedule and development process. For instance, you might wait until you're not actively developing a new feature, or you could check the release notes first to see if there are must-have features that would prompt you to upgrade sooner.
3. When you’re ready to upgrade, update the pinned version and create a new branch in your project. Run your app on the platforms you support—using a simulator, emulator, or physical device to ensure everything works as intended.
4. If everything looks good, you're good to go! If for some reason your app is not working as expected, you can choose to revert the version and lose those testing changes until you are ready to make the modifications needed to support the latest FlutterFlow version (i.e., upgrade dependencies/custom code).

:::tip
See the video [**here**](https://youtu.be/8Y1uyCC_dXE) for guidance on updating [**dependencies**](../../ff-concepts/adding-customization/custom-code.md#manage-dependencies).
:::

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