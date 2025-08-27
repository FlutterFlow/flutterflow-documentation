---
slug: /resources/projects/collaboration
title: Collaborate on Projects
description: Learn how to collaborate effectively on projects in FlutterFlow, including best practices for teamwork and project management.
tags: [Collaboration, Project Management]
toc_max_heading_level: 5
sidebar_position: 3
keywords: [Collaboration, FlutterFlow, Project Management]
---

FlutterFlow allows for multiple ways to collaborate on a project as well as the
ability to manage the collaboration through permissions.

## Adding Collaborators

You can invite users to your project who are not part of your organization.
For instance, you might want to share your work with clients, stakeholders, or
team members of the client.

To add an external user as a collaborator to any project, go to the [My Teams](https://app.flutterflow.io/team) page and, under the **Collaborator Passes** section, click **Add Pass** and complete the checkout process. Once the pass is created, enter the user’s details and select the project you’d like to grant them access to.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/s5nU2VYbrMppj4CRxiGZ?embed&show_copy_link=true"
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

When you invite users to your project, you have the flexibility to assign them
different roles depending on their level of involvement. For example, you can
grant **Editor** privileges to collaborators who are actively working on the
project while assigning **Read-only** access who need to view the progress.
Alternatively, you can also make them the **Manager** and **Owner** of the project, giving them more control.

:::info
- Only Growth and Business owners can purchase and assign Collaborator passes.
- Collaborator Passes can only be assigned to users who have a paid plan (Basic, Growth, or Business).
- Once a collaborator is added, they’ll have the same level of access as the team that issued the pass (either Growth or Business, depending on the plan).
- When you add a user, the default role assigned is the *Editor* role.
- Users with read-only access will only be able to access that specific project
  and won't be able to access any shared *Teams* libraries (e.g., custom code,
  design system).
- You must verify your email before inviting users.
- If a user isn't already a FlutterFlow user, we will send them an invite email.
  Their status will be shown as **Pending** until they create an account.
  :::


## Sharing a Project with Team

To share a project with all current and future team members in your organization, enable the **Grant team members access** option.

![share-with-team](imgs/share-with-team.avif)

:::info
Sharing a project with team members is only available on the **Growth** plan and **higher**. Check out our [**pricing**](https://www.flutterflow.io/pricing) section.
:::

## Real-Time Collaboration

Real-Time Collaboration is a powerful feature that allows multiple builders to
work together on the same project or, rather same page and design system
simultaneously. With this, all builders can see the changes being made to the
page as they happen and can also make their own changes to the page without
interfering with the work of others.

This increases efficiency and productivity, as multiple builders can work on
various aspects of the project or together on the same page at the same time.

When multiple builders are on the same page, it looks like this:

![real-time-collaboration.gif](../../../static/img/real-time-collaboration.gif)

:::info
Real-Time collaboration is only available on the **Growth** plan and **higher**. Check out our [**pricing**](https://www.flutterflow.io/pricing) section.
:::

## Transferring Project

:::danger
This step can not be undone. If you want to regain project ownership, the new
project owner will need to transfer ownership back to you.
:::

To transfer ownership to another user, navigate to **Settings & Integrations > Project Setup > Collaboration > Project-Level Access**, click on the current role and select **Owner**.

![transfer-ownership.avif](imgs/transfer-ownership.avif)

## Project Activity

You can see a running history of changes made while building that helps you
track progress and stay up to date on project changes.

:::info
Project Activity is only available to **Enterprise** users. Check out our [**pricing**](https://www.flutterflow.io/pricing) section.
:::

![project-activity](imgs/project-activity.avif)
