---
keywords: ['error', 'display', 'uses']
author: Unknown
created_at: '1676583421'
slug: /error-the-bundle-uses-a-bundle-name-or-display-name-that-is-already-taken
title: 'Error: The bundle uses a bundle name or display name that is already taken'
updated_at: '1676583864'
url: https://intercom.help/flutterflow/en/articles/6997761-error-the-bundle-uses-a-bundle-name-or-display-name-that-is-already-taken
---
# Error: The bundle uses a bundle name or display name that is already taken

Tip: Not sure which type of error your project has? Check out this article on how to identify your Codemagic error.

**What does this error mean?**
If you see this error message, it means that the bundle name or display name you have chosen for your app is already being used by another app.**Full error message**ITMS-90129: The bundle uses a bundle name or display name that is already taken**How to resolve this issue?**Bundle names and display names must be unique, so you will need to choose a different name for your app. You can do this by going to the settings for your app and changing the bundle name or display name to something else.

Here are steps to resolve this issue:

Choose a unique bundle id (tips below)

Enter this new bundle id in the Apple Console for your app

In FlutterFlow, head to Settings &amp; Integrations &gt; App Details &gt; enter your name Package Name

In FlutterFlow, head to Settings &amp; Integrations &gt; Firebase &gt; Regenerate the config files

Redeploy your app

**Tips for selecting a unique bundle name**
Here are a few tips for choosing a unique bundle name or display name for your app:

Use a combination of words that are specific to your app, rather than using generic terms that may be used by many other apps. For example, instead of using the name "Photo Editor," you could use a name like "Fancy Filters Photo Editor" or "Super Cool Photo Editor."

Avoid using the names of other apps or companies, as this can cause confusion and may even be considered trademark infringement.

Use a different spelling or capitalization for words that are commonly used in app names, such as "Photo" or "Editor." This can help to make your app's name more unique and easier to differentiate from other apps.

Consider using a combination of letters and numbers in your app's name. This can also help to make your app's name more unique and less likely to be used by other apps.

**The issue was not resolved**If this does not resolve the issue, contact FlutterFlow Support at support@flutterflow.io