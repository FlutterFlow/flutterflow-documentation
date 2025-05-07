---
keywords: ['search', 'implementation', 'tutorial']
author: Unknown
created_at: '1690284055'
slug: /tutorial-search-implementation-for-supabase
title: 'Tutorial: Search Implementation for Supabase'
updated_at: '1690296112'
url: https://intercom.help/flutterflow/en/articles/8171759-tutorial-search-implementation-for-supabase
---
# Tutorial: Search Implementation for Supabase

**Background:**
FlutterFlow does not yet officially support Supabase search functionality, but we do have a workaround to implement a simple search function. Please note that this will not be a full-fledged search solution, but rather makes use of the equal filter by using the Supabase Realtime feature.​
**Steps for Implementation:**
1. First you need to enable Realtime from the Supabase table settings.

![](../assets/20250430121159260138.png)![](../assets/20250430121159528641.png)2. After enabling this you will then need to filter the query data with the input text field and set the filter to is equal.​
![](../assets/20250430121159842724.png)3. Now there are two options, first is to automatically search the data as soon as its typed. To do so, you need to enable the update page on change and set the frequency accordingly.

![](../assets/20250430121200086333.png)4. The second option is to refresh the database when the text is submitted.

![](../assets/20250430121200394549.png)Please note that real-time updates will be more costly compared to searching after submission.

**The issue was not resolved**
If the error persists after following the outlined steps, please report this issue to support via Chat or Email at support@flutterflow.io.