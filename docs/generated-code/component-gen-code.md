---
title: Component Model
slug: /generated-code/component-model
sidebar_position: 5
---

# Generated Code: Components

Similar to a [**Page**](pages-generated-code.md), when creating a **[component](../resources/ui/components/intro-components.md)** in FlutterFlow, it automatically generates two files: a `Widget` class and a `Model` class. 

:::info[Prerequisites]
This guide uses examples from the generated code of the **[EcommerceFlow demo app](https://bit.ly/ff-docs-demo-v1)**. To view the generated code directly, check out the **[Github repository](https://github.com/FlutterFlow/sample-apps/tree/main/ecommerce_flow)**.
:::

## ComponentModel class

`ComponentModel` classes are responsible for managing the state and behavior of individual components used within a page. These classes extend the `FlutterFlowModel` class, providing a consistent structure and shared functionality across all component models. This ensures that each component's state is isolated and reusable, making the app easier to maintain and scale.

The lifecycle of a `ComponentModel` and its associated widget class follows the same structure as a page. For more details, refer to the documentation on **[Generated Pages](pages-generated-code.md)**.

### onComponentLoad Action: Generated Code

When you define actions for the `onComponentLoad` action trigger of a component, these actions are added inside an `addPostFrameCallback` method within the page's `initState` method. This ensures that the actions are executed only after the initial widget tree is built.

```js
 @override
  void initState() {
    super.initState();
    _model = createModel(context, () => ProductListPageModel());

    // On component load action.
    SchedulerBinding.instance.addPostFrameCallback((_) async {
        await _model.updateTotalCost(context);
        safeSetState(() {});
    });
    
  }
```

