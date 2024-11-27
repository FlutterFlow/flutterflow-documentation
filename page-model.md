---
title: PageModel class
sidebar_position: 4
---
# PageModel class

:::info[Prerequisites]
This guide uses example of the generated code of the **[EcommerceFlow demo app](https://bit.ly/ff-docs-demo-v1)**. To view the generated code directly, check out the **[Github repository](https://github.com/FlutterFlow/sample-apps/tree/main/ecommerce_flow)**.
:::


When you create a new page in FlutterFlow, it automatically generates two files: a `Widget` class and a `Model` class. The `PageModel` classes are responsible for managing the state of individual pages and initializing the components used in these Pages. These classes extend the `FlutterFlowModel` class, which provides a consistent structure and shared functionality across all page models.

A `PageModel` class typically holds local state fields specific to the page, which correspond to the **[Page State variables](../resources/ui/pages/page-lifecycle.md#page-state)**. For example, in the `product_list_page_model.dart` [file](https://github.com/FlutterFlow/sample-apps/blob/main/ecommerce_flow/lib/product/product_list_page/product_list_page_model.dart) (which is the `Model` file for the `ProductListPage`), one of the state fields might be `_searchString`. This private field stores the current search string and includes a getter and setter to manage its value while logging any changes.

```js
String? _searchString;
set searchString(String? value) {
  _searchString = value;
  debugLogWidgetClass(rootModel);
}
String? get searchString => _searchString;
```

In addition to managing local state, the `PageModel` class also contains fields for handling the state of widgets on the page. For instance, `_dropDownValue` is a private field that stores the current value of a dropdown widget. Similar to `_searchString`, it has a getter and setter that logs changes to this field.

```js
String? _dropDownValue;
set dropDownValue(String? value) {
  _dropDownValue = value;
  debugLogWidgetClass(rootModel);
}
String? get dropDownValue => _dropDownValue;
```

The `PageModel` class is also responsible for initializing the models of components used on the page. For example, if the page includes a `CartCounter` component, the model for this component is initialized within the page's model class.

```js
// Model for CartCounter component.
  late CartCounterModel cartCounterModel;

@override
void initState(BuildContext context) {
    cartCounterModel = createModel(context, () => CartCounterModel()..parentModel = this);
    
}
```

When dealing with dynamic lists of components, such as those in a `ListView`, Row, or Column widget, the `PageModel` initializes a `Map<String, FlutterFlowModel>` to manage the state of each component instance. For example, if the page includes a list of `CategoryAvatar` components, the initialization might look like this:

```js
// Models for CategoryAvatar dynamic component.
  Map<String, FlutterFlowModel> categoryAvatarModels = {};

```

Finally, the `dispose` function in the `ProductListPageModel` class is used to clean up resources when they are no longer needed. This is a common practice in Flutter to prevent memory leaks.  In this class, the `dispose` function is overridden to dispose of the `cartCounterModel`, `searchQueryFocusNode`, and `searchQueryTextController`.

```js

  @override
  void dispose() {
    cartCounterModel.dispose();
    searchQueryFocusNode?.dispose();
    searchQueryTextController?.dispose();
  }
```