---
title: Component Model
slug: /generated-code/component-model
sidebar_position: 5
description: >-
  Learn how FlutterFlow generates widget and model files for a component,
  including lifecycle actions, local state, and disposal behavior.
last_verified: 2026-09-01
tags:
  - FlutterFlow
  - Generated Code
keywords:
  - Component Model
  - Generated Code
  - FlutterFlow
---
# Generated Code: Components

Similar to a [**Page**](pages-generated-code.md), when creating a **[component](../resources/ui/components/intro-components.md)** in FlutterFlow, it automatically generates two files: a `Widget` class and a `Model` class.

:::info[Prerequisites]
This guide uses examples from the generated code of the **[EcommerceFlow demo app](https://bit.ly/ff-docs-demo-v2)**. To view the generated code directly, check out the **[Github repository](https://github.com/FlutterFlow/sample-apps/tree/main/ecommerce_flow)**.
:::

## ComponentModel class

`ComponentModel` classes are responsible for managing the state and behavior of individual components used within a page. These classes extend the `FlutterFlowModel` class, providing a consistent structure and shared functionality across all component models. This ensures that each component's state is isolated and reusable, making the app easier to maintain and scale.

The lifecycle of a `ComponentModel` and its associated widget class follows the same structure as a page. For more details, refer to the documentation on **[Generated Pages](pages-generated-code.md)**.

### onComponentLoad Action: Generated Code

When you define actions for the `onComponentLoad` action trigger of a component, those actions are added inside a `SchedulerBinding.instance.addPostFrameCallback` callback in the component widget's `initState` method. This schedules them after the first frame.

```js
 @override
  void initState() {
    super.initState();
    _model = createModel(context, () => ProductCardModel());

    // On component load action.
    SchedulerBinding.instance.addPostFrameCallback((_) async {
        await _model.updateTotalCost(context);
        safeSetState(() {});
    });

  }
```
