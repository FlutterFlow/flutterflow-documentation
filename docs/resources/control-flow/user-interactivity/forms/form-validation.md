---
slug: /resources/forms/form-validation
title: Form Validation
tags: [Form, Validation, Error Handling]
keywords: [FlutterFlow, form validation, input validation, error handling, user interface, mobile app development, data integrity]
description: Learn how to add Form Validation widget in your FlutterFlow app.
sidebar_position: 2
---


# Form Validation

You can add validations to input fields by wrapping them inside the Form widget. The Form widget enables you to validate user inputs and display appropriate messages when validation criteria are not met.

For example, you could use it to check if a user has given a valid email and password. This makes it easy to handle user input and ensure that the data is correct before it is submitted to the server or stored locally.

## Adding Form widget

Let's see how to add a *Form* widget by building a signup example. Here's how it looks:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/O4QCIh6cr0s5NBSa3v6U?embed&show_copy_link=true"
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

Building and validating a *Form* includes the following steps:

1. [Adding input fields](#1-adding-input-fields)
2. [Adding validations](#2-adding-validations)
3. [Adding validate action](#3-adding-validate-action)

### 1. Adding input fields

A form widget can only validate if there are any input fields. Here's an example of adding input fields for the signup form.

1. First, add the **Form** widget itself from the **Form Elements**.
2. Inside the form, add the **Column** widget from the **Layout Elements** tab.
3. Now, add two [**TextFields**](form-widgets/text-field.md) (one for email and one for password).
4. Add a [**Button**](../../../ui/widgets/basic-widgets/button.md) widget and then add **Date/Time Picker** action to get the date of birth.
5. Add one more **Button** to validate and submit the form.

Here's how it looks:

![Input fields](../imgs/fv-input-fields.avif)

### 2. Adding validations

Validation refers to the process of checking user input for correctness and ensuring that it meets certain criteria or requirements. This can include checking for the presence of required fields, verifying that a value is within a certain range or format, or validating against the custom pattern.

After adding input fields, they will be available to be validated using the form widget properties. Here's how you do it:

1. Select the **Form** widget, and move to the **Properties Panel > Validate** section.
2. Identify the **TextField** on which you would like to add the validation and tick the box on the right side.
    1. Inside the **Error Message** input box, provide the message that will be displayed (below the *TextField*) if a user leaves the *TextField* empty.
    2. You can also specify the **Min Required Character** and **Max Allowed Characters**.
        1. **Min Required Character**: This is the minimum character required for the validation to pass. For example, If you provide a value as 9 and a user enters the value as *a@a.com* (which is 6 characters), **then the validation fails, and an error message will be displayed.
            1. Inside the **Minimum Character** **Error Text** input box, provide the message that will be displayed if a user doesn't provide the min required characters.
        2. **Max Allowed Characters**: This is the maximum number of characters allowed for the validation to pass. For example, If you provide a value of 15 and a user enters a password that exceeds 15 characters, then the validation fails, and an error message will be displayed.
            1. Inside the **Max Allowed Characters** **Error Text** input box, provide the message that will be displayed if a user enters more than the maximum allowed characters.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/HYbrOKwrI671of7LfRvf?embed&show_copy_link=true"
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

3. You can also choose to validate the input using our predefined validators or by creating the custom one. To do so, you can set the **Text Validator** to the one you need.
    1. If the required validation is not on the list, you can select **Custom Regex** and specify your own **Regex (Dart/JS)**. Here are some examples of *Custom Regex*:
        
        
        | Examples | Regex (Dart/JS) |
        | --- | --- |
        | IP address (e.g., 192.168.1.1) | ^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$ |
        | Time in the 24-hour format (e.g., 13:45) | ^([01]?[0-9]|2[0-3]):[0-5][0-9]$ |
    2. Also, provide a message in **Invalid Text Error Text**. This will be displayed If validation for the *Custom Regex* fails.
4. You can also add validation on certain actions that can be used inside the form, such as *Date/Time Picke*r and *PlacePicker*. To do so, find the action name and tick the box on the right side.
    1. Now you must enable **Add Action on Error** and set the **Action Type** to the appropriate one. This will be triggered if the validation fails. For example, in this case, if a form is submitted without selecting the birth date, you can add a Show Snackbar action asking a user to select the date.


![Validating Date/Time picker](../imgs/validating-date-time-picker.png)

### 3. Adding validate [Action]

Follow the steps below to add this action to any widget.

1. Select the **Widget** (e.g., Container, Button, etc.) on which you want to add the action.
2. Select **Actions** from the properties panel (the right menu), If it's the first action, click **+ Add Action** button. Otherwise, click the "**+**" button below the previous action tile (inside *Action Flow Editor*) and select **Add Action**.
3. Search and select the **Validate Form** (under *Widget/UI Interactions*) action.
4. Set the **Select Form to Validate** to your **Form name**.
5. You can chain the next action that will be triggered if the validation passes.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/rMFiIB9NYEird1QfKfP3?embed&show_copy_link=true"
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

## Auto validating

Rather than displaying an error message after the user submits the form, you can provide real-time feedback as they type in the *TextField* widget to indicate validation errors. This feature can be particularly useful for lengthy forms where it can save the user's time and effort.

To auto validate a form, select **TextField >** move to the **Properties Panel > Add validations >** and then enable the **Automatically Validate**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ina1dmwmKmL1WAHSQClx?embed&show_copy_link=true"
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

![Enabling auto validate](../imgs/enable-auto-validate.avif)


## Validating a Form on TextField On Submit

You can also validate a form when you are done entering a value inside the *TextField* using the *On Submit* action.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/t2NPQ2ze94DPSXJnLcVU?embed&show_copy_link=true"
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


To validate a form on *TextField* *On Submit*:

1. Select the **TextField** widget and select **Actions** from the Properties panel.
2. Click **+ Add Action** button, and ensure that the **Type of Action** is set to **On Submit**.
3. Search, and select the **Validate Form** (under UI Interactions) action.
4. Set the **Select Form to Validate** to your **Form name**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/r1HoR4uC99HcxnqqCmGB?embed&show_copy_link=true"
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

---

## Video guide

If you prefer watching a video tutorial, here's the one for you:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.youtube.com/embed/RCLMIyuJoL4"
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