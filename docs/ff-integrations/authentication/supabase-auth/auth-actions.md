---
slug: /integrations/authentication/supabase/auth-actions
title: Auth Actions
description: Learn how to add Supabase Authentication actions in your FlutterFlow app.
tags: [FlutterFlow, Auth Actions, Authentication, Supabase]
sidebar_position: 1
keywords: [FlutterFlow, Auth Actions, Authentication, Supabase]
---

# Authentication Actions
Currently FlutterFlow supports the following Actions for Supabase Authentication:

## Log in [Action]

This action provides users with multiple login options to access their accounts.

Follow the steps below to add Email Login action:

1. Select the widget(e.g., Button) on which you want to add the action.
2. Select **Actions** from the [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) (the right menu) and click + **Add Action**.
3. Search and select the **Log in** (under *Backend/Database > Supabase Authentication*) action.
4. Set **Auth Provider** to **Email**.
5. Set the **Email Field** dropdown to the widget name that accepts email (e.g., *TextFieldEmail*).
6. Set the **Password Field** dropdown to the widget name that accepts a password (e.g., *TextFieldPassword*).

<img src="https://firebasestorage.googleapis.com/v0/b/ecommerceflow-docs/o/supabase-login-action.gif?alt=media&token=a4aa0271-50b9-450f-b1e0-69860f0e66b3"></img>


## Create Account [Action]

By using this action, you can provide your users with the flexibility to create their accounts in different ways, according to their preferences.

:::note
As of now, we only support creating accounts with email and passwords.
:::

Follow the steps below to add email signup action:

1. Select the widget(e.g., Button) on which you want to add the action.

2. Select **Actions** from the [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) (the right menu), **Open** the **Action Flow Editor,** and click + **Add Action**.
3. Search and select the **Create Account** (under *Backend/Database > Supabase Authentication*) action.
4. Set **Auth Provider** to **Email**.
5. Set the **Email** **Field** dropdown to the widget name that accepts email (e.g., *TextFieldEmail*).
6. Set the **Password Field** dropdown to the widget name that accepts a password (e.g., *TextFieldPassword*).
7. Similarly, If you have a confirm password field in your UI, set the **Confirm Password Field** to the appropriate one.

<img src="https://firebasestorage.googleapis.com/v0/b/ecommerceflow-docs/o/create-account-action.gif?alt=media&token=372a8285-bd24-4279-b141-4a02085168c0"></img>

## Log out [Action]

This action enables users to securely log out of their account and clear their session data from the app, which ensures that their account remains safe and secure.

Follow the steps below to add this action:

1. Select the widget (e.g., Button) on which you want to add the action.

2. Select **Actions** from the Properties Panel (the right menu), If it's the first action, 
   click **+ Add Action** button. Otherwise, click the "**+**" button below the previous action 
   tile (inside **Action Flow Editor**) and select **Add Action**.
3. Search and select the **Log Out** (under **Backend/Database > Supabase Authentication**) action.

![img_6.png](img_6.png)


## Delete User 

At present, we do not support deleting Supabase user action. However, you can refer to this community video for guidance on how to do so.

<div class="video-container"><iframe src="https://www.youtube.com/embed/PNBvc35CDAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

