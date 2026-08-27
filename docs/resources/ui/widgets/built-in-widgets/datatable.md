---
slug: datatable
title: DataTable
tags: [Layout Elements]
description: Learn how to add, populate, sort, search, select, paginate, and style a DataTable widget in FlutterFlow.
---

# DataTable

The DataTable widget displays structured data in rows and columns. It is useful for presenting datasets such as employee directories, inventories, orders, and reports.

The DataTable can be configured with pagination, sorting, searching, row selection, and horizontal scrolling for smaller screens.

![A paginated DataTable displaying employee records](imgs/paginated-data-table-fi.avif)

## Adding the DataTable Widget

1. Open the [Widget Palette](../../../../intro/ff-ui/widget-palette.md) and locate **DataTable** under **Layout Elements**.
2. Drag the widget onto the canvas or add it from the Widget Tree.
3. Configure the two predefined child widgets:
   - **DataTableHeader** defines a column heading. Select its **Text** widget to change the heading.
   - **DataTableCell** displays a value in each generated row. It contains a Text widget by default, but you can replace it with another widget.
4. To change the number of columns, select the DataTable and set **Paginated Data Table Properties > Number of Columns**.

![DataTableHeader and DataTableCell widgets identified with arrows](imgs/data-table-header.avif)

### Populating the DataTable with Data

The following example displays employee records retrieved from Firestore:

1. Retrieve the records by adding a [Query Collection](../../../../resources/control-flow/backend-logic/backend-query/query-collection.md) to a parent widget, such as the Page or Column. Alternatively, run a **Query Collection** action when the page loads and store its result in [page state](../../../../resources/ui/pages/page-lifecycle.md#page-state).
2. Select the DataTable and [generate dynamic children](../composing-widgets/generate-dynamic-children.md) from the retrieved list.
3. Select each **DataTableCell > Text** widget and bind it to the appropriate field in the current record.

:::info
Retrieve the data from a parent widget or an action instead of querying directly on the DataTable. This keeps the complete list available for operations such as sorting, searching, and row selection. See [**Backend Query**](../../../../resources/control-flow/backend-logic/backend-query/backend-query.md) for more information.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)',
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/dOEkowW7SmuMOZ0J8gCS?embed&show_copy_link=true"
        title="Populate a DataTable with Firestore records"
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

:::tip[Tables on smaller screens]
Set **Min Width** when the columns need more space than the available width of the screen. This enables horizontal scrolling and prevents cell content from becoming too narrow. See [**Setting a Minimum Width**](#setting-a-minimum-width) for details.
:::

## Searching the DataTable

Use [Simple Search](../../../../ff-integrations/search/simple-search.md) to filter records that are already available on the device:

1. Add a TextField where users can enter a search term.
2. Add the **Simple Search** action to an appropriate TextField event, such as **On Changed** or **On Submit**.
3. Select **Documents** as the search type and use the complete list of records as the source.
4. Set **Search Term** from the TextField's widget state and choose the fields that users can search.
5. Store the search result in page state.
6. When generating the DataTable rows, use a [Conditional Value](../../../../resources/control-flow/functions/conditional-logic.md#conditional-value-ifthenelse) to display the complete list when the search term is empty and the filtered list otherwise.
7. When the user clears the TextField, clear the stored search result so the DataTable displays the complete list again.

:::warning
Simple Search is intended for smaller datasets that have already been retrieved. For large datasets, perform the search through your backend or a dedicated search service.
:::

## Selecting Rows

Enable row selection when users need to perform an action on one or more records, such as editing, deleting, or exporting them.

1. Create a [page state](../../../../resources/ui/pages/page-lifecycle.md#creating-a-page-state) variable that stores a list of the selected records.
2. Select the DataTable and enable **Paginated Data Table Properties > Selectable**.
3. On the button that processes the selection, add an [Update Page State](../../../../resources/ui/pages/page-lifecycle.md#update-page-state-action) action.
4. Get the selected indices from **Widget State > DataTable Selected Rows**. Pass them and the list currently generating the DataTable rows to a [custom function](../../../../ff-concepts/adding-customization/custom-functions.md). If the table is filtered or sorted, use that filtered or sorted list rather than the original list.

For example, the following function returns the employee records at the selected indices:

```jsx
List<EmployeesRecord> getSelectedEmployees(
  List<EmployeesRecord> employees,
  List<int> selectedIndices,
) {
  /// MODIFY CODE ONLY BELOW THIS LINE

  return selectedIndices
      .where((index) => index >= 0 && index < employees.length)
      .map((index) => employees[index])
      .toList();

  /// MODIFY CODE ONLY ABOVE THIS LINE
}
```

## Handling DataTable Events

Add actions to DataTable events from the **Actions** tab in the Properties Panel.

### On Sort Changed

**On Sort Changed** runs when a user selects a column header that has sorting enabled. It provides:

- **Sorted Column Index**: The zero-based index of the selected column. For example, `0` represents the first column.
- **Is Ascending**: Whether the selected sort direction is ascending.

To add sorting:

1. Select each **DataTableHeader** that users can sort and enable **Sortable**.
2. Select the DataTable and add an action under **On Sort Changed**.
3. Pass **Sorted Column Index**, **Is Ascending**, and the list currently generating the DataTable rows to a custom function.
4. Update the page state variable that generates the DataTable rows with the function result.

:::info
The DataTable reports the selected column and direction but does not sort the records automatically. Your action must update the list used to generate the rows.
:::

The following example sorts a copy of the employee list without modifying the input list:

```jsx
List<EmployeesRecord> sortEmployees(
  List<EmployeesRecord> employees,
  bool isAscending,
  int sortColumnIndex,
) {
  /// MODIFY CODE ONLY BELOW THIS LINE

  final sortedEmployees = List<EmployeesRecord>.from(employees);

  switch (sortColumnIndex) {
    case 0:
      sortedEmployees.sort((a, b) => a.name.compareTo(b.name));
      break;
    case 1:
      sortedEmployees.sort((a, b) => a.age.compareTo(b.age));
      break;
    case 2:
      sortedEmployees.sort((a, b) => a.position.compareTo(b.position));
      break;
  }

  return isAscending
      ? sortedEmployees
      : sortedEmployees.reversed.toList();

  /// MODIFY CODE ONLY ABOVE THIS LINE
}
```

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)',
    height: 0,
    width: '100%'}}>
    <iframe
        src="https://demo.arcade.software/iVqvQIIwJqEQgvhQCoCu?embed&show_copy_link=true"
        title="Sort records in a DataTable"
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

### On Page Changed

**On Page Changed** runs when a user navigates to another table page. It provides **Current Row Index**, the zero-based index of the first row on the new table page. For example, when each table page contains 25 rows, the second table page starts at index `25`.

For an API that uses offset-based pagination:

1. Add an API call action under **On Page Changed**.
2. Pass **Current Row Index** as the API's `offset` query parameter.
3. Pass the configured rows-per-page value as the API's `limit` query parameter.
4. Use the API result to update the list displayed by the DataTable.

See [Query Parameters](../../../../resources/control-flow/backend-logic/api/rest-api.md#query-parameters) for information about passing dynamic values to an API call.

### On Rows Per Page Changed

**On Rows Per Page Changed** runs when a user changes how many rows the DataTable displays on each page.

For an API-backed DataTable:

1. Select the DataTable and add an action under **On Rows Per Page Changed**.
2. Use the event's rows-per-page value to update the API's `limit` or the corresponding page state variable.
3. Reset the stored pagination offset to `0`.
4. Call the API again and update the list displayed by the DataTable.

## Customizing the DataTable

Select the DataTable and use the Properties Panel to configure the following options.

### Paginated Data Table Properties

- **Number of Columns** sets the number of columns in the table.
- **Number of Rows (Optional)** sets the total number of rows in the DataTable. Leave it unset to use the number of generated rows.
- **UI Builder Number of Rows (Optional)** sets how many sample rows appear on the canvas while designing the page. It does not limit the rows displayed in the running app.
- **Paginated** displays the rows across multiple pages. Disable it to use a regular DataTable without pagination.
    - **Hide Paginator** hides the pagination controls.
    - **Show First And Last Buttons** adds shortcuts to the first and last pages.
- **Selectable** allows users to select one or more rows.
    - **Rebuild Page on Select** appears when **Selectable** is enabled. Enable it to rebuild the page whenever the row selection changes, allowing other widgets that depend on the selection to update immediately.

### Layout Properties

- **Table Width** and **Table Height** control the overall table dimensions. You can set these values in pixels or as percentages.
- **Header Row Height** controls the height of the column-header row.
- **Data Row Height** controls the height of each data row.
- **Column Spacing** controls the horizontal space between columns.

### Setting a Minimum Width

Under **Layout Properties**, set **Min Width** to define the minimum width of the DataTable. You can enter the value in pixels or as a percentage.

If the DataTable's minimum width exceeds the available screen width, the table becomes horizontally scrollable. This prevents column content from being compressed or wrapped excessively on smaller screens.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/GTTHfFdAgxi7gpKG2YBA?embed&show_copy_link=true"
        title="Set a minimum width for a DataTable"
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

### Style Properties

- **Header Row Color** sets the background color of the header row.
- **Row Color** sets the background color of the data rows.
- **Alternate Row Color** applies a different background color to alternating rows.
- **Sort Icon Color** sets the color of the icon displayed on sortable columns.
- **Border Radius** sets the radius of each corner. Use the uniform option to apply the same value to every corner.

### Dividers

- Enable **Hide Default Dividers** to remove the DataTable's default row dividers.
- Enable **Add Horizontal Dividers** or **Add Vertical Dividers** to add custom separators between rows or columns. After enabling either option, configure its **Color** and **Thickness**.

### Checkbox Colors

When **Selectable** is enabled, configure:

- **Selected Fill Color** sets the checkbox background when a row is selected.
- **Unselected Fill Color** sets the checkbox background when a row is not selected.
- **Selected Border Color** sets the checkbox border when a row is selected.
- **Unselected Border Color** sets the checkbox border when a row is not selected.
- **Check Color** sets the color of the checkmark inside a selected checkbox.

## Best Practices

- Keep column headings short and descriptive.
- Align numeric values consistently so users can scan and compare them quickly.
- Limit the number of visible columns on smaller screens. For complex mobile layouts, consider displaying each record in a **ListView** or **Card** instead.
- Choose a rows-per-page value that keeps the table readable without requiring excessive navigation.
