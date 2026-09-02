---
slug: /resources/forms
title: Forms Overview
tags:
  - FlutterFlow
  - Resources
  - Forms
keywords:
  - FlutterFlow
  - forms
  - input fields
  - user interface
  - mobile app development
  - data collection
  - user interaction
description: >-
  Forms are a fundamental part of many applications, serving as the primary
  method for users to input and submit data.
sidebar_position: 0
last_verified: 2026-09-02
---
# Forms Overview

Forms are a fundamental part of many applications, serving as the primary method for users to input and submit data. Whether you're building a simple contact form or a complex multi-step survey, FlutterFlow provides a comprehensive set of tools to create, validate, and manage forms effectively.

:::tip
In this section, you'll learn how to add form widgets such as [**TextField**](form-widgets/text-field.md), [**Dropdown**](form-widgets/dropdown.md), [**RadioButton**](form-widgets/radiobutton.md), [**Checkbox Widgets**](form-widgets/checkbox.md) and add [**Validations**](form-validation.md) and [**set**](form-actions/set-form-field.md)/[**reset**](form-actions/reset-form-field.md) actions on these widgets.
:::

Use a **Form Validation** widget when several inputs should be validated together. Individual input widgets expose their current values through **Widget State**; the form coordinates validation, but it does not save or submit values automatically. Add backend or state-update actions after validation succeeds.

## Recommended form flow

1. Place input widgets inside a **Form Validation** widget.
2. Configure required, length, or pattern rules on the form.
3. Add a **Validate Form** action to the submit control.
4. Put submission actions after validation, or branch on the validation result when **Terminate if Validation Fails** is disabled.
5. After a successful submission, use **Reset Form Fields** if the form should return to its initial state.

Test valid, invalid, empty, loading, error, and repeat-submission cases in **Test Mode** or a deployed build.
