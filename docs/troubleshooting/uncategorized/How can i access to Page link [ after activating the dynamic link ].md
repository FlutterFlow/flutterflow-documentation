---
keywords: ['access', 'dynamic', 'activating']
author: Unknown
created_at: '1653992808'
slug: /how-can-i-access-to-page-link-after-activating-the-dynamic-link
title: How can i access to Page link [ after activating the dynamic link ]
updated_at: '1654002703'
url: https://intercom.help/flutterflow/en/articles/6261879-how-can-i-access-to-page-link-after-activating-the-dynamic-link
---
# How can i access to Page link [ after activating the dynamic link ]

**After you enabled the deep linking &amp; Routing**​
You can also turn on Firebase dynamic links.
Want o know more about firebase dynamic links?

![](../assets/20250430121453205914.png)Now when you **activated dynamic links**, you have access to the **page link** [ a specific link for each page ]​
**Notice**: if you enable dynamic link you need to pu "HTTPS" for URL scheme How to setup dynamic link

**Next step:**
Access the page link

**when you want to use the page URL:**
In this example, we want to share the page URL,  you need to first add an action [ Generate current page link }

then after that, you can access the page URL throw the **widget state**/**Current page link**

in this example I add 2 actions on my share button:

**Generate the current page link action**

**Share action: I select widget state/ current page link as the source of my action**

![](../assets/20250430121453493755.png)