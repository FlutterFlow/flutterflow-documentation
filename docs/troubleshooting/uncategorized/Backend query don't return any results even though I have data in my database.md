---
keywords: ['database', 'query', 'though']
author: Unknown
created_at: '1678196336'
slug: /backend-query-don-t-return-any-results-even-though-i-have-data-in-my-database
title: Backend query don't return any results even though I have data in my database
updated_at: '1689891518'
url: https://intercom.help/flutterflow/en/articles/7058101-backend-query-don-t-return-any-results-even-though-i-have-data-in-my-database
---
# Backend query don't return any results even though I have data in my database

Issue
You have data in your Firestore database, but your backend query is not returning any results.
There are a number of issues that may cause this issue. Here are some of the most common issues to check for:​
You've not deployed the correct rules for that particular collection that is not returning the data
In some cases, when you create a new collection in the project, the user forgets to setup and deploy the rules for that collection. Please take a look at the firebase section and deploy the correct rules​
![](../assets/20250430121237764753.png)
You've enabled the Ignore Empty Filter Values Option and have missing or Null Data
In the example below, we have a filter on created_time and have enabled the Ignore Empty Filter Values Option. This means the query will ignore all the documents that:

Don't have the created_time field 

Have the created_time field, but it is null

![](../assets/20250430121238081846.png)To troubleshoot this:

Check to see if your query has the Ignore Empty Filter Value Option enabled

Review your database or CMS to make sure that your documents have the field you are using on your filters.

**You have Ordering on your query and the field you selected as order doesn't exist or is null**
If you use a field for order, and that is null or does not exist in the document, FlutterFlow will ignore that document and not load it.

In the example below, signinDate is set to be order by Increasing. 

If my list returns no documents, this means none of my documents doesn't have the signinDate field or it is null

If my list only returns 99/100 documents, this means that one document doesn't have the signinDate or it is null

![](../assets/20250430121238384085.png)
**In case of APIs returning empty results**
If the APIs are working fine in test mode but do not return any data in the deployed app, mostly it is due to the CORS issue, please take a look at the browser's console to see if it shows any errors regarding CORS (check the screenshot for reference). If yes, please take a look at this article to understand and resolve the problem.​
![](../assets/20250430121238656194.png)**The issue was not resolved.**

If the error still persists after following the outlined steps, please contact support via Chat or Email at support@flutterflow.io.

