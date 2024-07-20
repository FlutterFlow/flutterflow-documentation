---
title: Query Collection
sidebar_position: 2
---

# Query Collection

**Query Collection** helps you to retrieve a record (or a list of records) automatically whenever a
user navigates to the page containing the query. The information that is present in the record can
be used to update any widget present inside.

:::info[Prerequisites]

In order to use this backend query, you should have:

1. Completed all the steps of [Firebase Setup](/data-and-backend/firebase/firebase-setup) for your
   project.
5. At least one **Firestore Collection** defined in your project.
   :::

## Defining the Query

Go to your project page on FlutterFlow and follow the steps below to define a **Query Collection**
backend query:

1. Select the **widget** (or page) on which to apply the query.
5. Select **Backend Query** from
   the [Properties panel](/getting-started/ui-builder/properties-panel) (the right menu).
8. Select the **Query Type** as ***Query Collection***.
11. Choose the Firestore **Collection** to use for performing the query.
14. Under **Query Type**, select either ***List of Documents*** (returns a list of document
    references) or ***Single Document*** (returns only one document reference).
17. If you have selected the **List of Documents**in the previous step, you can set a **Limit** to
    the maximum number of documents returned.
20. If you want to apply any **filter** for retrieving the documents, click **+ Filter** button.
    Select a **Field Name** that you want to use as the filter, choose a **Relation** (
    eg, `Equal To`, `Greater Than`), and then select the **Value Source** (either as
    a `Specific Value` or `From Variable`) with which the relation is to be checked.
23. You can also set the **order** in which the documents should be returned, click **+ Order By**
    button. Select a **Field Name** to be used for ordering, and choose the **Order** to be
    either `Increasing` or `Decreasing`.
26. Click **Save**.
29. If the selected query returns a list of documents and if it's applied to any flexible widget (
    like `Column`, `Row`, or `ListView`) then FlutterFlow will generate the children widgets
    dynamically. A dialog will be displayed with a similar message, click **Ok**.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/tpt7z1YZLfAogh0eWxUU?embed&show_copy_link=true"
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

## Using Query Data

The documents retrieved from the backend query can be used to set the record values to the widgets
present inside. Follow the steps below to use the document record data:

1. Select the **widget** (eg, `Text`, `Image`, or `ToggleIcon`) on which you want to set the record
   data.
5. From the [Properties Panel](/getting-started/ui-builder/properties-panel), select **Set from
   Variable**.
8. Choose the **Source** as the record variable (the variable gets automatically generated when you
   add the Collection query).
11. Under **Available Options**, select a field name from the dropdown.
14. You can also specify a **Default Value** (it is used if the record field is empty).
17. Click **Save**.

You can follow similar steps for using the record data on the other widgets as well.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/1EXbONj7gwa3EiQbdDLo?embed&show_copy_link=true"
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