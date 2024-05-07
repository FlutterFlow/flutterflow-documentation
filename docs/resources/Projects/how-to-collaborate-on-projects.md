---
slug: how-to-collaborate-on-projects
title: How to Collaborate on Projects
tags: []
toc_max_heading_level: 5
sidebar_position: 4

---
FlutterFlow allows for multiple ways to collaborate on a project as well as the ability to manage the collaboration through permissions.

## Sharing a Project with a User

You can also invite users to your project who are not part of your organization. For instance, you might want to share your work with clients, stakeholders, or team members of the client.

When you invite users to your project, you have the flexibility to assign them different roles depending on their level of involvement. For example, you can grant editing privileges to collaborators who are actively working on the project while assigning read-only access who need to view the progress. Alternatively, you can also make them the owner of the project, giving them full control.
:::info
- When you add a user, the default role assigned is the *Editor* role.
- Users with read-only access will only be able to access that specific project and won't be able to access any shared *Teams* libraries (e.g., custom code, design system).
- Read-only users added to *Teams*/*Organization* will not count against your *Teams* seat count.
- You must verify your email before inviting users.
  :::

### How to Invite Users

<div class="arcade-container" style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/9XkpLuC3tpiFFapWi7ao?embed&show_copy_link=true"
        title="Sharing a Project with a User"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light',
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
- If a user isn't already a FlutterFlow user, we will send them an invite email. Their status will be shown as **Pending** until they create an account.
- FlutterFlow subscriptions are seat based. A user added to your project will only have access to the features of their account plan.
:::

## Branching Permissions
The owner of a project can manage permissions related to branching. Owners can control two types of branching permissions:

- Editing Permissions: Determines who is allowed to edit branching permissions.
- Merging into Main: Specifies who is allowed to merge branches into the main branch.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Correctly maintaining the aspect ratio with additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/P5MgPJuBBeaIm7dfEjqI?embed&show_copy_link=true"
        title="fghjkl - FlutterFlow"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameBorder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

## Sharing a Project with an Organization
To share a project with all team members in your organization, enable the "Share with my organization" option.

[share-project-with-organization.avif](..%2F..%2F..%2Fstatic%2Fimg%2Fshare-project-with-organization.avif)

## Real-Time Collaboration
Real-Time Collaboration is a powerful feature that allows multiple builders to work together on the same project or, rather same page and design system simultaneously. With this, all builders can see the changes being made to the page as they happen and can also make their own changes to the page without interfering with the work of others.


This increases efficiency and productivity, as multiple builders can work on various aspects of the project or together on the same page at the same time.

To enable real-time collaboration, navigate to Settings & Integrations (from the left Navigation Menu) > Project Setup > Collaboration > click Enable Updated Collaboration.

![realtime-collaboration-setup.png](..%2F..%2F..%2Fstatic%2Fimg%2Frealtime-collaboration-setup.png)

Now when multiple builders are on the same page, it looks like this:

![real-time-collaboration.gif](..%2F..%2F..%2Fstatic%2Fimg%2Freal-time-collaboration.gif)

To disable this feature anytime, click the Disable Updated Collaboration button.

:::caution
- This feature is still in Beta, and unexpected issues may occur. Ensure you regularly create project versions as a backup.
<!-- TODO - Add link to versioning -->
  :::
  :::info
- Real-Time collaboration is a feature of our Teams and Enterprise plans.
  :::
## Transferring Project
:::danger
This step can not be undone. If you want to regain project ownership, the new project owner will need to transfer ownership back to you.
:::

<div class ="arcade-container" style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Maintain aspect ratio plus extra padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/hUnKMJ7eqD81SRHkxEmt?embed&show_copy_link=true"
        title="Transferring Project"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameBorder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>

## Project Activity
You can see a running history of changes made while building that helps you track progress and stay up to date on project changes. This feature allows team members to see all the updates made to a project in real-time, enabling them to understand how the project is evolving and collaborate more efficiently.

[flutterflow-project-activity.avif](..%2F..%2F..%2Fstatic%2Fimg%2Fflutterflow-project-activity.avif)

:::info
Teams users can access the last 7 days of project edits, while FlutterFlow Enterprise users can access and download all previous project edits.
:::