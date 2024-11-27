---
slug: submit-item-for-reivew
title: Submitting Item for Review
description: Learn how to submit an item to the FlutterFlow Marketplace.
tags: [MarketPlace, Creators Hub]
sidebar_position: 0
keywords: [FlutterFlow, MarketPlace, Creators Hub, Submit Item]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Submitting Item for Review

All items submitted to the Marketplace are subject to a comprehensive review process prior to publication. While we have recently significantly improved review times, please note that the review period can take up to 30 days depending on the complexity and volume of submissions.

:::danger[Important: Review Submission Policies]

Please review our [**Submission Guidelines**](submission-criteria.md) and our [**Marketplace Terms of Service**](https://flutterflow.io/tos-marketplace) before submitting your item. It may also be helpful to review our [**Legal Guidelines for Creators**](legal-guidelines-for-creators.md), which explain your legal responsibility in plain language.
:::

## How to Submit an Item

### 1. Set your project as a Marketplace project

Marketplace items should belong to projects that are specifically made to publish Marketplace items (i.e., they should not be inside of a production project).

In order to submit an item, it must be inside of a project that has been Set For Marketplace. A project that is set for Marketplace can not be deployed.

To set a project for Marketplace:

1. Select the [**Share Icon**](../../intro/ff-ui/toolbar.md#share-project) from the Toolbar (top right side of the screen).
2. Select **Create New Item > Set For Marketplace > Yes**

:::tip
You can also clone an existing project and then set it as a Marketplace Project.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/238389017ff242db9e1e81c665f0dd16?sid=c227f4ad-9851-4a79-acde-2ff0b6fa6324"
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

### 2. Fill out the submission form

Below is an overview of what is needed to create your Marketplace item:

:::tip
If you aren't ready to submit your item, select **Save As Draft** to continue editing your submission at a later time.
:::

#### Cover Photo

The cover photo should be 1200x800 pixels and help the users understand the purpose of the item. Please do not include the FlutterFlow logo in your cover image.

#### Gallery Photos (optional)

Include up to 4 additional photos that showcase your item's features. Each should be should be 1200x800 pixels.

#### Name

The item name should be professional, unique, and help the users understand the purpose of the item. Please use correct grammar and capitalization.

#### Description

The description should provide an overview of the key features, helping users determine if the item aligns with their requirements. If the item includes any third-party paid services, those should also be mentioned in the description. Please use correct grammar and capitalization.

#### Usage Instructions

Provide clear and concise instructions on how to implement and utilize your item within FlutterFlow. Include any necessary steps, code snippets, or configurations required to get started. If your item depends on any third party services, please show users where to find relevant API keys or more information. Please use correct grammar and capitalization.

#### Marketplace Item Type

Three types of items can be submitted:

**Template AppPage or ComponentCustom Code**
<Tabs>
<TabItem value="1" label="Template App" default>
Template apps contain multiple screens. There are 2 sub-types:

- **Full App:** an app with authentication, complete navigation, multiple pages/flows, database schema, complete action trees, etc.
- **UI Kit**: purely design-based templates and layouts

:::note
*Template Apps* can be monetized. The minimum price for Template Apps is $200.
:::
</TabItem>
<TabItem value="2" label="Page or Component">
Pages or Components are assembled modules that can be used within FlutterFlow. There are 2 sub-types:

- **Page:** a single page in a FlutterFlow project
- **Component:** a reusable UI element that can be integrated into any part of your application

:::warning
*Pages and Components* cannot be monetized at this time.
:::
</TabItem>
<TabItem value="3" label="Custom Code">
Custom Code is Dart code that can be used within FlutterFlow projects. There are 3 sub-types:

- **Custom Functions:** synchronous functions that do not have external dependencies.
- **Custom Actions:** synchronous or asynchronous functions that may have external dependencies. If your action contains dependencies, please review our guide on [Open Source Licenses](legal-guidelines-for-creators.md).
- **Custom Widgets:** user-defined Dart widgets that extend the capabilities of the standard FlutterFlow widget collection. If your widget contains dependencies, please review our guide on [Open Source Licenses](legal-guidelines-for-creators.md).

*Please note that each custom code item needs to be submitted separately.*

:::warning
*Custom Code* cannot be monetized at this time.
:::
</TabItem>
</Tabs>


#### Template Tags (optional)

Template tags help users sort and filter items. If the tags listed don't match your item, enter your desired search terms under *Keywords*.

#### Supported Platforms

You can submit Marketplace items for Android, iOS, and Web (or all three!). Please make sure to test on all supported platforms to ensure the item works without issues or errors.

#### Run Mode URL

A Run Mode link of your Marketplace allows users to better understand how your item looks and works.

:::info
If your Run Mode link includes authentication functionality, please add a demo login button that uses [**Anonymous sign-in**](../../ff-integrations/authentication/firebase-auth/anonymous-login.md) or pre-fill demo credentials in the email and password inputs.
:::

#### Documentation URL

If there are complex installation or usage instructions, we highly recommend creating a documentation link for your Marketplace item. This can be written (e.g., Notion Doc, Google Doc) or video (e.g., YouTube, Loom).

### 3. Submit your item for review

Once the Marketplace item submission form is complete, you can submit it for review. To submit a Marketplace item for review:

1. Fill out the items in the Marketplace Item Submission Form
2. Select **Submit For Approval**

Your item will be shown in your [Dashboard](https://marketplace.flutterflow.io/dashboard) under **Created Items** as "Pending Approval":

![Item in "Pending Approval"](../imgs/image.avif)

### 4. Edit an approved item
:::info
At this time, it is not possible to edit an approved Marketplace Item. We are working to add this functionality soon.
:::