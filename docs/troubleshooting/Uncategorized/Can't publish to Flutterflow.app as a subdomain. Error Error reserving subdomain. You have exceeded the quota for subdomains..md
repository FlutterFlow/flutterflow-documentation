---
keywords: ['error', 'exceeded', 'subdomains']
author: Unknown
created_at: '1677756386'
slug: /can-t-publish-to-flutterflow-app-as-a-subdomain-error-error-reserving-subdomain-you-have-exceeded-the-quota-for-subdomains
title: 'Can''t publish to Flutterflow.app as a subdomain. Error: Error reserving subdomain.
  You have exceeded the quota for subdomains.'
updated_at: '1678233842'
url: https://intercom.help/flutterflow/en/articles/7044258-can-t-publish-to-flutterflow-app-as-a-subdomain-error-error-reserving-subdomain-you-have-exceeded-the-quota-for-subdomains
---
# Can't publish to Flutterflow.app as a subdomain. Error: Error reserving subdomain. You have exceeded the quota for subdomains.

Issue
You are trying to publish your web app to .flutterflow.app domain and face this error:

```
Error reserving subdomain. You have exceeded the quota for subdomains.
```
![](../assets/20250430121255479960.png)Why You Are Seeing This Error
There is a limit to the number of sub-domains you can publish on the flutterflow.app domain. Free users can publish to 3 subdomains, while paid plans can publish to 10 subdomains.

Tip: It only counts “custom” subdomains. By default your subdomain is your project id - these don’t count towards the quota​
**Solutions**
Change the subdomain name (“Site URL” in the UI) to the project id.
When the name of the sub-domain is the same with the project name, it is not count as a sub-domain for you.​
![](../assets/20250430121255810538.png)
Unpublish Some Of Your Other Projects
Use the unpublish button in the web publishing page.​
![](../assets/20250430121256121119.png)