---
slug: /integrations/authentication/firebase/auth-actions
title: Common Auth Actions
description: Learn how to add Firebase Authentication actions in your FlutterFlow app.
tags: [Auth Actions, Authentication, Firebase]
sidebar_position: 1
keywords: [FlutterFlow, Auth Actions, Authentication, Firebase]
---
# Common Auth Actions

Here's a list of common authentication actions:

## Logout [Action]

This action enables users to securely log out of their account and clear their session data from the app, which ensures that their account remains safe and secure.

Follow the steps below to add this action:

1. Select the widget (e.g., Button) on which you want to add the action.
2. Select **Actions** from the properties panel (the right menu), If it's the first action, click **+ Add Action** button. Otherwise, click the "**+**" button below the previous action tile (inside *Action Flow Editor*) and select **Add Action**.
3. Search and select the **Logout** (under *Backend/Database > Firebase Authentication*) action.

![logout](../imgs/logout-action.png)

## Reset Password 

With Firebase Authentication, there are two ways you can allow users to reset their password in your FlutterFlow app:

### In-App Password Change

This option allows users to change their password while they are logged into the app. This is useful when a user is authenticated but wants to update their password for security reasons.

To implement this, create a new page in your app, such as a **ChangePassword** page. This page should include two **TextFields** for the user to enter a new password and confirm it, along with a button (e.g., **Update Password**) to submit.

On the button's click, add the **Update Password** action (under *Backend/Database > Firebase Authentication*) and bind the **Password Field** and **Confirm Password Field** to their respective input widgets.

![firebase-update-password.avif](../imgs/firebase-update-password.avif)

:::info

By default, the **Navigate Automatically** option is enabled. This means that after the password is successfully updated, the user will be redirected to the **Logged In Page** specified in your [**Initial Page**](../../../resources/projects/settings/general-settings.md#initial-page) settings.

:::

### Reset Password Link

This allows users who are logged out to reset their password. It sends a password reset link to the user's email address. When clicked, the user is directed to a Firebase-hosted webpage where they can set a new password.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/5hyA37XqJy6mrl7Onc8e?embed&show_copy_link=true"
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


To set this up, create a page in your app, such as a **ForgotPassword** page. This page should include a **TextField** for the user to enter their email address and a button (e.g., **Send Reset Link**) to submit the request.

On the button's click, add the **Send Reset Password Email** action (under *Backend/Database > Firebase Authentication*) and set the **Email Field** dropdown to the widget that takes user’s email. This action will send a password reset link to the provided email address.

![firebase-send-reset-link.avif](../imgs/firebase-send-reset-link.avif)

## Update Email [Action]

This action allows users to change their registered email address linked to their user profile, thus ensuring their account details are up-to-date.

This is helpful in scenarios where a user may have changed their primary email address or entered an incorrect one during initial registration. Also, if users lose access to their original email or forget their login credentials, being able to update their email addresses can assist in resetting passwords or recovering account access.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/x75bnI7YFjRxDaiQ0Jng?embed&show_copy_link=true"
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

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Container, Button, etc.) on which you want to add the action.
2. Select **Actions** from the properties panel (the right menu), If it's the first action, click **+ Add Action** button. Otherwise, click the "**+**" button below the previous action tile (inside *Action Flow Editor*) and select **Add Action**.
3. Search and select the **Update Email** (under *Backend/Database > Firebase Authentication*) action.
4. As a best practice, it's also recommended to send the email verification link to the new email (using the [e-mail verification](../firebase-auth/email-sign-in.md#send-email-verification-link-action) action) followed by this action.

![adding-update-email-action](../imgs/adding-update-email-action.avif)


## Delete User [Action]

Using this action, you can delete the user account created using the [Firebase authentication](../firebase-auth/auth-initial-setup.md). Additionally, you can also set up to delete all data associated with that user.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/E0u5FdA1wYzoON3CDMLO?embed&show_copy_link=true"
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

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Container, Button, etc.) on which you want to add the action.
2. Select **Actions** from the properties panel (the right menu), If it's the first action, click **+ Add Action** button. Otherwise, click the "**+**" button below the previous action tile (inside *Action Flow Editor*) and select **Add Action**.
3. Search and select the **Delete User** (under *Backend/Database > Firebase Authentication*) action.
4. As a best practice, it's also recommended to log out the user (using the [logout](#) action) following this action.

    ![adding-delete-action](../imgs/adding-delete-action.avif)
    
5. To delete all records and data associated with that user's account:
    1. Navigate to the **Firestore** (from the Navigation Menu) > switch to **Firestore Settings** > **Firestore Rules**.
    2. Identify the collection from which you want to delete the user's data and ensure the **Delete** rule is set to **Tagged Users**. This will open the 'Tag Users' popup; here you can select the field that contains the document reference. See how to [setup a rule](../../database/cloud-firestore/firestore-rules.md).
    3. Tick the checkbox.
    4. See the **Delete User References** section and click on **Preview** to verify the generated rule.
    5. Click the **Deploy** button.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/23g4Kq2yX8t7wuI1VzdA?embed&show_copy_link=true"
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

## FAQs
<details>
<summary>While adding Delete User [Action], I can't see or select field in 'Tag Users' popup</summary>
<p>
If you can't see or select the field containing the user reference, ensure that you have enabled the 'Create User Document' option in the **Create Account** action. Enabling this option ensures that the 'users' collection is properly set up and its reference can be accessed in the 'Tag Users' popup.
</p>
</details>