---
slug: /resources/forms/reset-form-field
title: 'Reset Form Fields [Action]'
tags:
  - FlutterFlow
  - Resources
  - Forms
keywords:
  - FlutterFlow
  - reset form field
  - form action
  - user interface
  - mobile app development
  - input clearing
  - form management
description: Learn how to add the Reset Form Fields action in your FlutterFlow app.
sidebar_position: 1
last_verified: 2026-09-02
---
# Reset Form Fields [Action]

The **Reset Form Fields** action resets selected widgets to their initial values. It supports Dropdown, ChoiceChips, Checkbox, CheckboxGroup, RadioButton, TextField, Switch, and Pincode fields that are available in the current page or through its child components.

For example, after a form is successfully submitted, you can use this action to clear the input fields—making it easy for users to enter new information for another submission.

![reset-form-field](imgs/reset-form-field.avif)

To configure it:

1. Open the triggering widget's **Actions** tab and add an action.
2. Under **Widget/UI Interactions**, open **Reset Form Fields** and choose the field type.
3. Select one or more compatible fields of that type.
4. Run the flow in **Test Mode** or a deployed build and confirm each field returns to its configured initial value.

Dynamic form fields are not selectable targets. Resetting a field also does not undo a database write or another side effect that already occurred.

:::info
You can also reset supported form fields inside child components.
![reset-form-field-component](imgs/reset-form-field-component.avif)
:::

:::note
This action does not execute in Preview Mode. Use **Test Mode**, **Run Mode**, or a deployed build for verification.
:::

## Related documentation

See [Set Form Field Action](/resources/forms/set-form-field) for a related FlutterFlow workflow.
