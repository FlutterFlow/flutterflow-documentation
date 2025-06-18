---
keywords: ['listview', 'returning', 'only']
slug: /my-listview-is-only-returning-one-item
title: My ListView Is Only Returning One Item
---
# My ListView Is Only Returning One Item

If your **ListView** is only returning one item in FlutterFlow, check the following possible causes:

- **Use a Dynamic Widget**

    Ensure you are using a dynamic widget such as **ListView**, **GridView**, **Row**, or **Column** to dynamically generate multiple children.

- **Query for a List**

    Confirm that your query retrieves a **list of documents** rather than a single record.

- **Check Filters**

    If you're applying filters, make sure that your Firestore database contains **multiple records** that satisfy the filter conditions.

- **Sufficient Records**

    Verify that your Firestore collection has **enough records** to display multiple items.

- **List Type Field**

    If you are querying a single field, ensure that it’s defined as a **ListType field** in both FlutterFlow and Firebase.

By carefully reviewing these areas, you should be able to resolve the issue of your ListView returning only one item.
