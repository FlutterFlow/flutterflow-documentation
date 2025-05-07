---
keywords: ['firebase', 'error', 'failed']
author: Unknown
created_at: '1661723973'
slug: /execution-failed-for-task-appprocessreleasegoogleservices
title: Execution failed for task ':app:processReleaseGoogleServices'.
updated_at: '1713554292'
url: https://intercom.help/flutterflow/en/articles/6509730-execution-failed-for-task-app-processreleasegoogleservices
---
# Execution failed for task ':app:processReleaseGoogleServices'.

Tip: Not sure which type of error your project has? Check out this article on how to identify your Codemagic error.

**What does this error mean?**
This error usually means that there is some mismatch with the package name and that it needs to be checked.

**Full error message** 
```
FAILURE: Build failed with an exception.* What went wrong:Execution failed for task ':app:processReleaseGoogleServices'.&gt; No matching client found for package name '[app.app.app]'
```

**How to resolve this issue?**
To resolve this issue, please follow the following steps.

You'll need to Regenerate the config files from FlutterFlow. To do this, open your app in **FlutterFlow** and then click on **Settings** **&gt;** **Firebase**.​
![](../assets/20250430121329008679.png)

Here, Click on the **Regenerate Config Files **button, Enter the new package name and then Click on **Generate File.**​
![](../assets/20250430121329460301.png)

This issue should now be resolved. You can now re-deploy to confirm that the issue has been fixed.

**Issue was not resolved after following the given steps**
If you are deploying from FlutterFlow and still getting this error after following all the steps outlined above, then please report this issue to support via Chat or Email at support@flutterflow.io.

