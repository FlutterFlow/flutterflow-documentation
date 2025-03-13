---
title: FFAppState
sidebar_position: 4
---

# FFAppState

:::info[Prerequisites]
This guide uses example of the generated code of the **[EcommerceFlow demo app](https://bit.ly/ff-docs-demo-v1)**. To view the generated code directly, check out the **[Github repository](https://github.com/FlutterFlow/sample-apps/tree/main/ecommerce_flow)**.
:::

The `FFAppState` class in FlutterFlow acts as a central hub for managing the application's global state. It's designed as a singleton, meaning there's only one instance of this class throughout the app's lifecycle. This class extends [**ChangeNotifier**](https://api.flutter.dev/flutter/foundation/ChangeNotifier-class.html), allowing widgets to listen and react to state changes.

It includes methods for initializing and updating the app's persisted state and also defines various state variables with corresponding **getters and setters** for manipulating these values.

Here is a basic template of the class, taken from the [**eCommerceFlow demo app**](https://bit.ly/ff-docs-demo-v1)'s generated code:

```js
class FFAppState extends ChangeNotifier {
  static FFAppState _instance = FFAppState._internal();

  factory FFAppState() {
    return _instance;
  }

  FFAppState._internal();

  static void reset() {
    _instance = FFAppState._internal();
  }

  void update(VoidCallback callback) {
    callback();
    notifyListeners();
  }

   // App State variable of primitive type with a getter and setter
    bool _enableDarkMode = false;

    bool get enableDarkMode => _enableDarkMode;

    set enableDarkMode(bool value) {
    _enableDarkMode = value;
   }

}
```

The `_enableDarkMode` is an App State variable created by developer that creates its own corresponding getter and setter. 

## Rebuild on Updating AppState
When updating an `AppState` variable from the Action Flow Editor, you will be presented with several **[update type](../resources/data-representation/app-state.md#update-type)** options such as **Rebuild All Pages**, **Rebuild Current Page**, and **No Rebuild** in the Action Settings. Let's see how the generated code changes when these options are selected.

### Rebuild Current Page
When a developer chooses to update App State with the update type set to **Rebuild Current Page**, the corresponding `setter` is called. Immediately after, `setState((){});` is invoked, which updates only the current page. 

Here's an example of the generated code when we update the App State `enableDarkMode` in the `onInitialization` action trigger of the `ProductListPage`.

```js
SchedulerBinding.instance.addPostFrameCallback((_) async {
  FFAppState().enableDarkMode = !(FFAppState().enableDarkMode ?? true);
  setState(() {});
});
```

### Rebuild All Pages

In this case, the update type is set to **Rebuild All Pages**, meaning that the `setter` is called, followed by the `update()` method. This method internally calls `notifyListeners()`, which is crucial for updating any widgets that depend on this variable.

```js
SchedulerBinding.instance.addPostFrameCallback((_) async {
  FFAppState().enableDarkMode = !(FFAppState().enableDarkMode ?? true);
  FFAppState().update(() {});
});
```

:::tip[Updating App State from Custom Code]
When updating App State variables from custom code, such as Custom Actions, it's crucial to call the update function to ensure that the changes are reflected across all pages. For example, you should use:

```js
FFAppState().update(() => FFAppState().enableDarkMode = !(FFAppState().enableDarkMode ?? true));
```
:::

### No Rebuild
Only the setter is called with no setState or update method invoked afterward. This means that only the variable is updated, with no state changes occurring after the data update.

## watch\<FFAppState\>

When you add an [**Update App State**](../resources/data-representation/app-state.md#update-app-state-action) action via the Action Flow Editor, the corresponding pages will include this line within the build method:

```js
 @override
Widget build(BuildContext context) {
    context.watch<FFAppState>();
    ...
```
By using `context.watch<FFAppState>()`, the widget effectively subscribes to any changes in the `FFAppState` class. Whenever there's a change in the `FFAppState` object, this widget automatically rebuilds to reflect those changes. This ensures that your widget always displays the most current data and state of the app, maintaining an up-to-date and responsive user interface.

## Managing AppState\<List\>
When you add an App State variable of `List` type in FlutterFlow, several utility functions are automatically generated to help you manage this list. These functions include a getter, a setter, and methods for adding, removing, and updating items in the list. This setup ensures that you can easily interact with the list while keeping the app state consistent and responsive. Below is an explanation of these generated functions using the specific example of a LatLngList.

```js

late LoggableList<LatLng> _LatLngList =
    LoggableList([LatLng(37.4071594, -122.0775312), LatLng(40.7358633, -73.9910835)]);

List<LatLng> get LatLngList => _LatLngList?..logger = () => debugLogAppState(this);

set LatLngList(List<LatLng> value) {
    if (value != null) {
        _LatLngList = LoggableList(value);
    }

    debugLogAppState(this);
}

void addToLatLngList(LatLng value) {
    LatLngList.add(value);
}

void removeFromLatLngList(LatLng value) {
    LatLngList.remove(value);
}

void removeAtIndexFromLatLngList(int index) {
    LatLngList.removeAt(index);
}

void updateLatLngListAtIndex(
    int index,
    LatLng Function(LatLng) updateFn,
) {
    LatLngList[index] = updateFn(_LatLngList[index]);
}

void insertAtIndexInLatLngList(int index, LatLng value) {
    LatLngList.insert(index, value);
}
```

These functions are automatically generated to provide a convenient and consistent way to manage list-type App State variables, making it easier to maintain the app's state:

- The list `LatLngList` is initialized as a private variable `_LatLngList` of type `LoggableList`, which helps in managing the list with additional logging capabilities.
- The get `LatLngList` method allows other parts of the app to access the `LatLngList`.
- The set `LatLngList` method allows you to replace the entire `LatLngList` with a new one. When a new list is assigned, it updates the private variable `_LatLngList` and logs this change using `debugLogAppState`.
- The `addToLatLngList` function appends a new `LatLng` object to the LatLngList, dynamically updating the list as the app runs.
- The `removeFromLatLngList` function removes a specific `LatLng` object from the `LatLngList`, ensuring the list remains accurate and up-to-date.
- The `removeAtIndexFromLatLngList` function removes a `LatLng` object from the list based on its index position.
- The `updateLatLngListAtIndex` function allows you to update a `LatLng` object at a specific index by applying an update function (`updateFn`) to it.
- The `insertAtIndexInLatLngList` function inserts a new `LatLng` object into the `LatLngList` at a specific index, shifting the existing items as necessary.




:::info[How to create App State variables]
To learn more about creating and using App State variables in FlutterFlow's UI, check out the[ **App State**](../resources/data-representation/app-state.md) guide.
:::