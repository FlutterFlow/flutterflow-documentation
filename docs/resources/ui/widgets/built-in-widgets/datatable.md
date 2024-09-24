---
slug: datatable
title: DataTable
tags: [Layout Elements]
description: Learn how to add DataTable widget in your FlutterFlow project.
---

# DataTable (Paginated)

The DataTable is a widget used to display data in a table format. It organizes information into rows and columns, similar to a spreadsheet, making it easier to read and understand large amounts of data.

For example, you could use it to display a list of employees in a company, with each row representing an individual employee and the columns showing the employee's name, age, department, and salary.

Additionally, this widget supports pagination, which can handle large datasets by displaying them in manageable chunks.

![paginated-data-table-fi](imgs/paginated-data-table-fi.avif)

## Adding DataTable widget

Let's see how to add a DataTable widget by building an example that shows a list of all employees in a company. Here's how it looks:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/d1f36643d8694242b5b049cc9c8b5a28?sid=efbfc0e4-5e26-47e5-a23b-cc7b6a8ecd74"
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

The steps to add DataTable and display the employees' details are:

1. Open the [Widget Palette](../../../../intro/ff-ui/widget-palette.md) and locate the **DataTable** widget under the **Layout Elements** tab. You can drag it into your desired location or add it directly from the widget tree or canvas area.
2. It adds two types of predefined widgets:
    1. **DataTableHeader**: This refers to the top row of the table, which displays the names of the columns. To change its text, click on the **DataTableHeader > Text** widget, move to the properties panel and give it a name.
    2. **DataTableCell**: This displays the actual data. By default, it comes with the Text widget. However, you can replace it with any other widget based on your requirements.
    ![data-table-header](imgs/data-table-header.avif)
        
3. By default, it shows three columns. To show more, select the **DataTable** widget, move to the **properties panel > Paginated Data Table Properties >** enter the **Number of Columns** you want.
4. For the demonstration purpose, let's display data from Firestore:
    1. First, ensure you have created a collection.
    2. *It's **important to note** that, unlike other widgets, you cannot directly have a backend query on the DataTable widget. Because if you do so, you won't have access to the query result (list of employees) for further use, such as sorting and searching. Hence, getting the backend query result on a parent widget and then using that result to populate DataTable is advisable.*
    3. For this example, on page load, we'll add a Query Collection action and save the result in a page state variable.
    4. On the **DataTable** widget, generate dynamic children using the page state variable (which holds a list of employees).
    5. Display data in the **DataTableCell > Text**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/b2482c7f3fbe422890bd66756cd8ed79?sid=d9c6844c-2ad7-4134-bc2f-d950220adf2d"
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

## Sorting

The way sorting works in a DataTable is as follows: first, you mark the column to sort. Then, whenever a user clicks on a header, you receive an *OnSortChanged* callback with two properties: `Sorted Column Index` and `Is Ascending`. You consume both properties in a custom function to write a sorting logic.

- **`Sorted Column Index`** specifies the column by which the data should be sorted (0 for first column, 1 for the second column and so on).
- **`Is Ascending`** determines the sort direction (true for ascending order, false for descending order).

:::info
**Remember**, sorting is not performed automatically by the DataTable widget. It provides you the flexibility to implement your own sorting logic through a Custom Function.
:::

Let's extend the previous example and see how you can enable sorting on columns. Here's how it looks:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/51a2638b7cb6449db8781b00dc10cb74?sid=ad7e146a-fef0-43e5-a53d-1d60271298a8"
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

To enable sorting:

1. Select the **DataTableHeader**, move to the **Properties Panel**, and turn on the **Sortable** toggle. Apply this to each column you want to sort
2. Select the DataTable widget, select **Actions** from the Properties panel, and open **Action Flow Editor**.
3. Select the **On Sort Changed**. Actions added under this will be triggered whenever the user clicks on any column header that has sorting enabled.
4. For this example, we update the same page state variable (that populates the DataTable) with the sorted data using the following custom function.


```dart
List<EmployeesRecord> sortMyData(
  List<EmployeesRecord> listToSort,
  bool isAsc,
  int sortColumIndex,
) {
  /// MODIFY CODE ONLY BELOW THIS LINE

  // Sort by 'name' for 0, 'age' for 1, 'position' for 2 in code.
  switch (sortColumIndex) {
    case 0:
      listToSort.sort((a, b) => a.name.compareTo(b.name));
      break;
    case 1:
      listToSort.sort((a, b) => a.age.compareTo(b.age));
      break;
    case 2:
      listToSort.sort((a, b) => a.position.compareTo(b.position));
      break;
    default:
      break;
  }
  if (!isAsc) {
    listToSort = listToSort.reversed.toList();
  }
  return listToSort;

  /// MODIFY CODE ONLY ABOVE THIS LINE
}
```

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/986d4e2234c0439186461643067eca03?sid=b1de27ba-8f84-43e8-93c9-819f0d38cbbd"
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

## Searching

You can add search functionality to the DataTable widget using our Simple Search feature. However, for this specific widget, instead of using a [Conditional Builder](../../../../ff-concepts/layout/responsive-widgets/conditional-builder-widget.md) widget, you can directly utilize the [Conditional Value](../../../../resources/control-flow/functions/conditional-logic.md#conditional-value-ifthenelse) to determine which result to display based on the `IsShowFullList` variable.

![searching-through-table](imgs/searching-through-table.avif)

## Selecting rows

You might want to allow users to select one or more of its rows for tasks like editing, deleting, or performing specific actions on the selected data. For example, preparing a list of promoted employees from the main employee listing.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/4bf473b71fee46dc988647b035fe469e?sid=7bbbf2a8-5d03-4eb8-b356-1e660ed09b67"
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

To achieve this, create a page state variable to store the selected list. Upon button click, update this variable with the chosen selections from the DataTable. **Note that** the DataTable provides a list of selected row indices; you'll need a [custom function](../../../../ff-concepts/adding-customization/cloud-functions.md) to retrieve the actual rows corresponding to these indices.

Here are the exact steps:

1. First, create a [page state](../../../../resources/ui/pages/page-lifecycle.md#creating-a-page-state) variable that will hold the list of selected rows.
2. Select the **DataTable**, move to the **Properties Panel > Paginated Data Table Properties >** turn on the **Selectable** toggle.
3. On button click, [update the page state](../../../../resources/ui/pages/page-lifecycle.md#update-page-state-action) variable with the selected rows. While adding this action, use the following custom function to retrieve the selected items based on the indices. You can get the list of selected rows indices via **Widget State > DataTable Selected Rows**.
4. Optionally, you could pass this variable to a new page to display the selection.

Custom function:

```dart
List<EmployeesRecord> findPromotedEmps(
  List<EmployeesRecord> allEmps,
  List<int> selecteEmpsIndex,
) {
  // MODIFY CODE ONLY BELOW THIS LINE
  // return allEmps based on selecteEmpsIndex
  List<EmployeesRecord> promotedEmps = [];
  for (int i = 0; i < selecteEmpsIndex.length; i++) {
    int index = selecteEmpsIndex[i];
    if (index >= 0 && index < allEmps.length) {
      EmployeesRecord emp = allEmps[index];
      promotedEmps.add(emp);
    }
  }
  return promotedEmps;
  /// MODIFY CODE ONLY ABOVE THIS LINE
 }
```

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/3cb325a0fd7e4dc486bcaffe8493c40b?sid=8bcfb4fb-45f7-46d7-8077-6f5c7b9ff543"
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

## Get notified on page changed

You might want to get a callback whenever a user taps on the next page of the DataTable. For example, to make an API call to retrieve the data for the next page.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/f9d6fe3e1aab4699bd72f8adb4112adc?sid=ffdf6a9a-4fb0-491e-a486-25a5f205eb9d"
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

To do so:

1. Select the **DataTable** widget.
2. Select **Actions** from the Properties panel and open **Action Flow Editor**.
3. Select **On Page Changed**. This callback gives you the **Current Row Index**, which is the index of the first row of a new page. For example, if you have 25 items (0-24) on the current page, the **Current Row Index** value will be 25. This is helpful in APIs that fetch a fixed set of data by specifying a starting position ([offset](https://developer.box.com/guides/api-calls/pagination/offset-based/)).
4. Now, add an action to call the paginated API (that returns the result in chunks). See [how to add the paginated API](../../../../resources/control-flow/backend-logic/api/rest-api.md#query-parameters) call by adding query parameters. For this example, we use this API: https://reqres.in/api/users?per_page=7&page=1. **Note**: this API uses page-based rather than offset-based pagination, requiring manual adjustment of the page variable.
5. On the success of the API call, you can add an action to append the new data in the current list. For this, you can add the following custom function to add new results to existing data.

```dart
List<UserStruct> addAlldatatoList(
  List<UserStruct> currentUsersList,
  List<UserStruct> newUsersList,
) {
  /// MODIFY CODE ONLY BELOW THIS LINE

  // add all newUsersList to currentUsersList
  currentUsersList.addAll(newUsersList);
  return currentUsersList;

  /// MODIFY CODE ONLY ABOVE THIS LINE
}
```

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/cd394eb88b6a45c098303c8ec18e860f?sid=19940ba6-ec30-456d-a506-614f516f0d34"
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

## Get notified on rows per page changed

Sometimes, you might want to get a callback when a user changes the number of rows to display on a page. This is helpful for dynamically adjusting data fetch requests based on user preferences.

This is how you do it:

1. Select the **DataTable** widget.
2. Select **Actions** from the **Properties panel** and open **Action Flow Editor**.
3. Select **On Rows Per Page Changed**. Any actions added under this will be triggered when the number of displayed rows is changed.
4. Now, you can add any action here.

![get-notified-on-row-changed-per-page](imgs/get-notified-on-row-changed-per-page.avif)

## Customizing

You can customize the appearance and behavior of this widget using the various properties available under the properties panel.

### Configure paginated DataTable

To configure the paginated DataTable, move to the **Properties Panel > Paginated Data Table Properties** and then:

- To hide the pagination, turn on the **Hide Paginator** toggle.
- To display buttons to navigate to the first and last page of the DataTable, turn on the **Show First And Last Buttons**.
- To have a normal DataTable without pagination, turn off the **Paginated** toggle.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/74fe050b18c84201b93ecf02638ba24a?sid=b627f723-944e-4c32-a992-0c0b61b0d1fe"
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


:::info
Typically, setting the size explicitly isn't necessary for a DataTable, as it's designed to showcase large datasets and should utilize all available space. However, to enable horizontal scrolling in the DataTable (when content exceeds screen width), you must specify the **Min Width**.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/8becc08d97a5406c9dc7dea965b3f900?sid=6636dbbf-533c-432e-a522-cf6570c16d1e"
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

### Adjust row and column spacing

To modify the row and column spacing, move to the **Properties Panel > Layout Properties** and then tweak the following properties:

- **Header Row Height**: This changes the height of the header.
- **Data Row Height**: This changes the height of all the rows.
- **Column Spacing**: This changes the distance between columns.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/d228893463584bdca8c40d5ecf7e0d82?sid=78a089f6-c5e3-4112-888c-341caeb3f288"
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

### Customize DataTable color

To modify the DataTable color, navigate to the **Properties Panel > Style Properties**, where you can set colors for various elements:

- **Header Row Color**: This changes the background color of the header row.
- **Row Color**: This sets the background color for all rows.
- **Alternate Row Color**: This allows for a different background color for alternate rows.
- **Sort Icon Color**: This alters the color of the sort icon used in sortable columns.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/b6c3b63f18474f2bb806da541c94e18c?sid=b9bdc710-f032-4154-a5ec-eb0cafa4fb28"
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

### Adjust border radius

To add the rounded corner to the DataTable, navigate to the **Properties Panel > Style Properties > Border Radius** and then:

1. Enter values for TL (Top left), TR (top right), BL (bottom left), and BR (bottom right).
2. To apply the same radius on all sides, switch to the **Uniform Radius** option. You can then adjust the radius by either moving the slider or entering the desired value directly.

![adjust-row-border](imgs/adjust-row-border.avif)

### Add dividers

To add horizontal and vertical dividers inside the DataTable, navigate to the **Properties Panel > Style Properties >** turn on the **Horizontal** and **Vertical Dividers**.

After enabling, you can also change its **Color** and **Thickness**.

![add-dividers](imgs/add-dividers.avif)

### Customize checkbox colors

When rows are selectable, you can customize the appearance of the checkbox by adjusting the following color properties:

- **Selected Fill Color**: Sets the background color of the checkbox when it is selected.
- **Unselected Fill Color**: Sets the background color of the checkbox when it is not selected.
- **Unselected Border Color**: Changes the border color of the checkbox when it is not selected.
- **Selected Border Color**: Changes the border color of the checkbox when it is selected.
- **Check Color**: Alters the color of the checkbox mark itself when selected, providing visual feedback to users about their selection status.