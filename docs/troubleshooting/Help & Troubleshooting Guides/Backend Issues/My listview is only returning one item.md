---
keywords: ['listview', 'returning', 'only']
author: Unknown
created_at: '1650488063'
slug: /my-listview-is-only-returning-one-item
title: My listview is only returning one item
updated_at: '1713554284'
url: https://intercom.help/flutterflow/en/articles/6156913-my-listview-is-only-returning-one-item
---
# My listview is only returning one item

Here are the things to check if you are facing this issue:

- **Use a dynamic widget:** Make sure you are using a **ListView**, **GridView**, **Row**, or **Column** to dynamically generate the children.
- **Query for a list:** Ensure your query is for a **list of documents** and not a single record.
- **Check filters:** If you are using a filter, make sure the data present in Firestore has **more than one record** that can pass through the filter.
- **Sufficient records:** Make sure that your Firestore collection has **enough records**.
- **ListType field:** If you are querying a single field, make sure it’s a **ListType field** in both FlutterFlow and Firebase.


