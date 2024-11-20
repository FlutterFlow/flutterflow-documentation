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

## Sharing a Project with a User

You can invite users to your project who are not part of your organization.
For instance, you might want to share your work with clients, stakeholders, or
team members of the client.

![](imgs/invite-users.avif)

When you invite users to your project, you have the flexibility to assign them
different roles depending on their level of involvement. For example, you can
grant **editing** privileges to collaborators who are actively working on the
project while assigning **read-only access** who need to view the progress.
Alternatively, you can also make them the **owner** of the project, giving them full
control.
:::info

- When you add a user, the default role assigned is the *Editor* role.
- Users with read-only access will only be able to access that specific project
  and won't be able to access any shared *Teams* libraries (e.g., custom code,
  design system).
- Read-only users added to *Teams*/*Organization* will not count against your
  *Teams* seat count.
- You must verify your email before inviting users.
- If a user isn't already a FlutterFlow user, we will send them an invite email.
  Their status will be shown as **Pending** until they create an account.
- FlutterFlow subscriptions are seat based. A user added to your project will
  only have access to the features of their account plan.
  :::


## Sharing a Project with an Organization

To share a project with all current and future team members in your organization, enable the **Grant team members access** option.

![share-with-team](imgs/share-with-team.avif)

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

Real-Time collaboration is a feature of our Teams and Enterprise plans.
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
track progress and stay up to date on project changes. This feature allows team
members to see all the updates made to a project in real-time, enabling them to
understand how the project is evolving and collaborate more efficiently.

![project-activity](imgs/project-activity.avif)

:::info
Teams users can access the last 7 days of project edits, while FlutterFlow
Enterprise users can access and download all previous project edits.
:::