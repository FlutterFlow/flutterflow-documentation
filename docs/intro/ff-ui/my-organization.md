---
slug: /flutterflow-ui/my-organization
title: My Teams
tags: [My Teams, FlutterFlow, UI, Design]
keywords: [Accounts, Billing, My Teams, Team Code, Team Media Assets, Team Design Library, Team API Library, Adding Domains]
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# My Teams
On the My Teams page, you can manage billing for your team, edit projects simultaneously, and share code, design systems, APIs, and assets. This makes collaboration between team members much easier and helps keep everyone on the same page. Even if you don't have team members, you can still use this page to share resources between your own projects and keep your development process organized.

By sharing resources from one place, teams can build more consistently across projects.


## Team Code

:::warning
**Team Code Libraries are deprecated**. Please use the new [**Libraries**](../../resources/projects/libraries.md) to share and reuse projects across multiple projects.
:::

## Team Media Assets

Your team might be working on multiple projects that use the same icons, images, audio files, and other graphic resources. If each project has its own assets, the team has to upload the same resources multiple times.

However, if the team shares an asset library across projects, they can save time, increase productivity, and ensure design consistency. If an asset needs to be updated, the team can update it in one place, and the changes will reflect across all projects.

To share team media assets:

1. Go to **My Teams**, select your team, and click **Upload Media**.
2. Media assets shared with the team appear in the Media Assets tab of the Navigation Menu. You can then select and use these assets directly from the asset picker in the Properties Panel.

<Tabs>
<TabItem value="1" label="Upload shareable media assets" default>
![upload-sharable-media](imgs/upload-sharable-media.avif)
</TabItem>
<TabItem value="2" label="Access media assets">
![access-media-assets](imgs/access-media-assets.avif)
</TabItem>
</Tabs>

## Team Design Library

A company may have a website, a mobile app, and a desktop app, each with its own user interface and user experience. Instead of recreating the same design settings for each project, you can create a shared design system to speed up the work and keep designs consistent across projects.

A design system includes colors, typography, fonts, icons, app assets, a Nav Bar, and an App Bar.

:::tip
To store pre-designed UI components, we recommend using [**Libraries**](../../resources/projects/libraries.md) for easy reuse across projects.
:::

Here's how you can share the design library:

1. Navigate to **My Teams > Team Design Library** and click **+ Create New**.
2. Enter a name for the **Design System Project**.
3. A new project will open where you can configure the Theme, [Nav Bar](../../resources/ui/pages/page-elements.md#nav-bar), [App Bar](../../resources/ui/pages/page-elements.md#appbar), and [App Assets](../../resources/projects/settings/general-settings.md#app-assets).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Dammx5Es92gc1hbdU31p?embed&show_copy_link=true"
        title="Create Team Design Library"
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

4. To use the shared design library, open the project where you want to use the design system and navigate to **Theme Settings** (navigation menu) **> Design System**.
5. Click **No Design System Selected**.
6. A popup opens displaying the list of shared design systems. Select one to add it to your project.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/lIKiqtfucQxC9HLLKNTS?embed&show_copy_link=true"
        title="Use Team Design Library"
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

## Team API Library
:::warning
**Team API Libraries are deprecated**. Please use the new [**Libraries**](../../resources/projects/libraries.md) to share and reuse projects across multiple projects.
:::

## Add Domains

You can add custom domains and share them with all team members. This makes it simple to connect domains to the right projects and collaborate seamlessly.

To add a domain, click **Add Domains** under **My Teams**.

![Add custom domain](imgs/add-custom-domain.avif)
