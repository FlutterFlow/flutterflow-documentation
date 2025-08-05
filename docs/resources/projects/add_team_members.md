---
keywords: ['members', 'project', 'team']
slug: /resources/projects/add-team-members
title: Add Team Members to a Project
---

# Add Team Members to a Project

FlutterFlow enables project collaboration through user invitations, organization-level access, real-time editing, and activity tracking. You can assign different roles and permissions to manage how collaborators interact with your project.

:::info[Prerequisites]
Ensure the invited user has a valid **FlutterFlow account** or an accessible email address to receive the invitation.
:::

## Invite Team Members to a Project

Follow these steps to invite team members and assign roles:

  1. **Open the Project**

    Launch your FlutterFlow project.

  2. **Navigate to Team Settings**

    In the left sidebar, go to **Settings & Integrations > Project Setup > Team**.

  3. **Invite a User**

    Click **Invite User** and enter the email address of the person you want to add.

  4. **Set Role and Send Invitation**

    Choose a role (**Editor**, **Read-only**, or **Owner**) and click **Invite**.

    ![](imgs/20250430121506784010.gif)

    The user's status will show as **Pending** until they accept the invitation. If they’re not yet registered with FlutterFlow, they will receive an email invitation to create an account.

  :::note
  Each team member can only access features available under their individual FlutterFlow subscription.
  :::

## Assigning Roles and Permissions

  When inviting collaborators, choose from the following roles:

    - **Editor**: Can edit the project.
    - **Read-only**: Can view the project but cannot make changes.
    - **Owner**: Full access, including administrative control.

  :::info
  - The default role assigned is **Editor**.
  - Read-only users cannot access shared team libraries like custom code or design systems.
  - Read-only users added through *Teams* or *Organization* do not count against your team’s seat limit.
  :::

## Share Project with an Organization

  You can share a project with all current and future team members in your organization by enabling the **Grant team members access** toggle in **Team Settings**.

  ![](imgs/share-with-team.avif)

  This ensures that every member of the organization can access the project without needing individual invitations.

## Real-Time Collaboration

  Real-Time Collaboration allows multiple builders to work on the same page, component, or design system at once. All changes are visible instantly to everyone on the same page.

  ![](../../../static/img/real-time-collaboration.gif)

  This increases productivity by allowing simultaneous contributions without overwriting each other's work.

  :::info
  Real-Time Collaboration is available only on **Teams** and **Enterprise** plans.
  :::

## Transfer Project Ownership

  You can transfer ownership of a project to another user if needed.

  :::danger
  This action is irreversible. To regain ownership, the new owner must transfer it back to you manually.
  :::

  To transfer ownership:

  1. Go to **Settings & Integrations > Project Setup > Collaboration > Project-Level Access**.
  2. Click on the role of the current user.
  3. Select **Owner** from the dropdown.

  ![](imgs/transfer-ownership.avif)

## View Project Activity

  Project Activity provides a timeline of changes made by all collaborators. It helps track progress and audit modifications across the project.

  ![](imgs/project-activity.avif)

  :::info
  - **Teams** users can view the past 7 days of activity.
  - **Enterprise** users can access and download the full activity history.
  :::
