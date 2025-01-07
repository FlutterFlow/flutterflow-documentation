---
title: Pages
slug: /generated-code/page-model
sidebar_position: 4
---

# Generated Code: Pages

When you create a new page in FlutterFlow, it automatically generates two files: a `Widget` class and a `Model` class. So if the name of the page you created is called ProductListPage, FlutterFlow generation backend will automatically create ProductListPageWidget class and ProductListPageModel class. 

:::info[Prerequisites]
This guide uses example of the generated code of the **[EcommerceFlow demo app](https://bit.ly/ff-docs-demo-v1)**. To view the generated code directly, check out the **[Github repository](https://github.com/FlutterFlow/sample-apps/tree/main/ecommerce_flow)**.
:::

## PageModel class

 The `PageModel` classes are responsible for managing the state of individual pages and initializing the components used in these Pages. These classes extend the `FlutterFlowModel` class, which provides a consistent structure and shared functionality across all page models.

#### Managing Local State

A `PageModel` class typically holds local state fields specific to the page, which correspond to the **[Page State variables](../resources/ui/pages/page-lifecycle.md#page-state)**. 

For example, in the ProductListPage, user may create a Page State variable called `searchString`. Correspondingly, in the `product_list_page_model.dart` [file](https://github.com/FlutterFlow/sample-apps/blob/main/ecommerce_flow/lib/product/product_list_page/product_list_page_model.dart) (which is the `Model` file for the `ProductListPage`), the corresponding state field would be `_searchString`. This private field stores the current search string and includes a getter and setter to manage its value while logging any changes.

```js
String? _searchString;
set searchString(String? value) {
  _searchString = value;
  debugLogWidgetClass(rootModel);
}
String? get searchString => _searchString;
```

:::tip[Private variables in Dart]
In Dart, variables that start with an underscore (`_`), such as `_searchString`, are private to the class. This means they cannot be accessed outside the class or its scope.
:::

In addition to managing local state, the given `PageModel` class also contains fields for handling the state of widgets on the page. For instance, `_dropDownValue` is a private field that stores the current value of a dropdown widget (if it is added to the current Page). Similar to `_searchString`, it has a getter and setter that logs changes to this field.

```js
String? _dropDownValue;
set dropDownValue(String? value) {
  _dropDownValue = value;
  debugLogWidgetClass(rootModel);
}
String? get dropDownValue => _dropDownValue;
```

#### Initializing child component models
The `PageModel` class is also responsible for initializing the models of components used on the page. For example, if the page includes a `CartCounter` component, the model for this component is initialized within the page's model class.

```js
// Model for CartCounter component.
  late CartCounterModel cartCounterModel;

@override
void initState(BuildContext context) {
    cartCounterModel = createModel(context, () => CartCounterModel()..parentModel = this);
    
}
```
:::info
Only the model class of a child component is initialized inside the page or parent model class. In the case of page model classes, they are initialized within the widget’s state class itself. See the **[Widget class section](#pagewidget-class)** for more details.
:::

When dealing with dynamic lists of components, such as those in a `ListView`, Row, or Column widget, the `PageModel` initializes a `Map<String, FlutterFlowModel>` to manage the state of each component instance. For example, if the page includes a list of `CategoryAvatar` components, the initialization might look like this:

```js
// Models for CategoryAvatar dynamic component.
  Map<String, FlutterFlowModel> categoryAvatarModels = {};

```

#### dispose()

Finally, the `dispose` function in the `ProductListPageModel` class is used to clean up resources when they are no longer needed. This is a common practice in Flutter to prevent memory leaks.  In this class, the `dispose` function is overridden to dispose of the `cartCounterModel`, `searchQueryFocusNode`, and `searchQueryTextController`.

```js

  @override
  void dispose() {
    cartCounterModel.dispose();
    searchQueryFocusNode?.dispose();
    searchQueryTextController?.dispose();
  }
```


## PageWidget class

The `PageWidget` classes are responsible for creating the UI of individual pages and holding the widget tree as designed in the FlutterFlow canvas. These classes always extend Flutter's `StatefulWidget` class utilizing Flutter's built-in state management through `setState` to handle dynamic updates and interact with the app's lifecycle.

```js
class OrderListPageWidget extends StatefulWidget {
  const OrderListPageWidget({
    super.key,
    …
  });

  final int? productId;
  …

  @override
  State<OrderListPageWidget> createState() =>
      _OrderListPageWidgetState();
}

```

#### Route Awareness
In the generated code, FlutterFlow automatically includes the `RouteAware` mixin in the **State** class. This makes the page aware of changes in the navigator's session history, allowing it to handle lifecycle events such as when the page becomes visible again after being removed.

```js
class _OrderListPageWidgetState extends State<OrderListPageWidget>
    with RouteAware {
```

#### PageModel Initialization
Additionally, the `PageModel` class is initialized within the state class. This class serves as a centralized place to manage the page’s state, handle business logic, and interact with the data layer.

```js
class _OrderListPageWidgetState extends State<OrderListPageWidget>
    with RouteAware {
  late OrderListPageModel _model;
```

#### Global Scaffold Key
Each page includes a `GlobalKey` for the `Scaffold`, which can be used to manage the scaffold's state, such as opening or closing drawers or snackbars programmatically.

```js
  final scaffoldKey = GlobalKey<ScaffoldState>();

return Scaffold(
    key: scaffoldKey,
    ...)
```

#### Keyboard Dismissal
Moreover, the root widget of every page is a `GestureDetector` with an `onTap` callback that unfocuses the current input field. This ensures that any active keyboard is dismissed when tapping outside an input field, improving the user experience across pages.

```js
return GestureDetector(
    onTap: () => FocusScope.of(context).unfocus(),
    child: Scaffold(
    ...)
```

These functionalities are automatically added by FlutterFlow to ensure seamless navigation and proper keyboard handling across pages.

