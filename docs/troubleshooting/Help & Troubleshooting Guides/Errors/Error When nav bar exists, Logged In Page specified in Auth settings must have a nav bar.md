---
keywords: ['error', 'authentication', 'specified']
author: Unknown
created_at: '1654668642'
slug: /error-when-nav-bar-exists-logged-in-page-specified-in-auth-settings-must-have-a-nav-bar
title: 'Error: When nav bar exists, Logged In Page specified in Auth settings must
  have a nav bar'
updated_at: '1654703104'
url: https://intercom.help/flutterflow/en/articles/6285634-error-when-nav-bar-exists-logged-in-page-specified-in-auth-settings-must-have-a-nav-bar
---
# Error: When nav bar exists, Logged In Page specified in Auth settings must have a nav bar

**If your project has this issue, here are the steps to fix it**

![](../../assets/20250430121437596837.png)**Why does this happen?** This issue can happen when you turn ON/OFF authentication and the editor does not properly save whether you are using authentication.

**What is the solution?** We need to reset the process so the editor understands that you are not using authentication.

You can use these steps to fix this issue: 

**1: We need to enable authentication temporary:**
Please go to setting/Authentication and enable authentication

![](../../assets/20250430121437913126.png)**2: Set entry page and logged in page:** No matter whether you have firebase connected or not, here we just want to reset this setting.
you need to just select 2 pages that have a nav bar on them.

![](../../assets/20250430121438225111.png)**3: Now you need to turn OFF the enable authentication.**

This way we backward the process and now the editor knows that we turn the authentication OFF.

![](../../assets/20250430121438521828.png)