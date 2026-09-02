---
slug: /resources/forms/set-form-field
title: 'Set Form Field [Action]'
tags:
  - FlutterFlow
  - Resources
  - Forms
keywords:
  - FlutterFlow
  - set form field
  - form action
  - user interface
  - mobile app development
  - input prefill
  - form management
description: Learn how to add Set Form Field action in your FlutterFlow app.
sidebar_position: 0
last_verified: 2026-09-02
---
# Set Form Field [Action]

The **Set Form Field** action programmatically updates a supported input widget at runtime. Supported targets include Dropdown, ChoiceChips, Checkbox, CheckboxGroup, RadioButton, TextField, Switch, Pincode, Slider, RatingBar, and CountController. This is useful when you want to populate or modify input from saved preferences, page parameters, state, or backend data.

:::info[possible use cases]

- **Use Saved Address:** If a user toggles "Use Saved Address," you might set the Full Name, Street Address, City, and ZIP Code fields to values pulled from a user profile or database.
- **Edit Existing Data:** When navigating to an "Edit Profile" page, you can auto-populate the TextFields with the current user info so they only change what’s needed.
- **Auto select Country/State Dropdown:** Automatically select the user's country and state based on location services or their account settings.

:::

While adding the Set Form Field action, select the target widget (e.g., `TextField`) and assign a value—this could come from a variable like `fullName` in your backend, app state, or page parameters.

The selected value must match the target field's data type. Dynamically generated fields are not selectable targets, and a RatingBar target must be interactive.

![set-form-field-action.avif](imgs/set-form-field-action.avif)

If you need to update several widgets (such as a TextField and a Dropdown), use a separate Set Form Field action for each and specify the appropriate value.

![multiple-set-form-field.avif](imgs/multiple-set-form-field.avif)

#### Focus Field When Set

You can also set additional preferences like whether the field should be focused and how the cursor should behave using the **Focus Field When Set** option. When you enable the option, it automatically sets the focus on the field once its value is assigned.

This is helpful in scenarios such as an “Edit Full Name” switch—when turned on, the field preloads the existing name and positions the cursor for immediate editing.


When **Focus Field When Set** is enabled, you can set one of the following **Cursor Position**:

- **End**: Places the cursor at the end of the newly filled text, letting the user continue typing from the last character.
- **Start**: Positions the cursor at the beginning of the text.
- **Highlight**: Selects (highlights) the entire text, letting the user immediately overwrite it.
- **Preserve**: Maintains the cursor location as it was (if any), which is useful when the user is already typing and only part of the text has changed.

For fields with a text controller, **Rebuild Type** controls whether the action also rebuilds the surrounding widget tree. Use **Rebuild** when other visible widgets depend on the new value; use **No Rebuild** when only the field needs to update.

![focus-field-when-set](imgs/focus-field-when-set.avif)

:::info
You can also set form fields inside the current widget’s child component.
<p></p>
![set-form-field-component](imgs/set-form-field-component.avif)
:::

:::note
This action does not execute in Preview Mode. Use **Test Mode**, **Run Mode**, or a deployed build for verification.
:::

## Verify the field update

Test the action with the target's minimum, maximum, empty, and null cases where applicable. Confirm the new value appears, focus and cursor placement match the selected option, dependent UI rebuilds when required, and a later **Reset Form Fields** action returns the field to its configured initial value.

## Related documentation

See [Reset Form Field Action](/resources/forms/reset-form-field) for a related FlutterFlow workflow.
