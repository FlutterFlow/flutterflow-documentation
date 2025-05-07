---
keywords: ['deployment', 'error', 'github']
author: Unknown
created_at: '1677754311'
slug: /github-deployment-failed-with-error-failed-to-set-the-repository-head
title: 'GitHub Deployment Failed With Error: Failed to Set the Repository Head'
updated_at: '1721943591'
url: https://intercom.help/flutterflow/en/articles/7044194-github-deployment-failed-with-error-failed-to-set-the-repository-head
---
# GitHub Deployment Failed With Error: Failed to Set the Repository Head

This article walks through troubleshooting steps for "Failed to set the repository head." If you're not sure which type of error your project has, check out this article on how to identify your Codemagic error.

Issue Overview
You are trying to deploy to the Apple App Store or Google Play from your GitHub branch and it fails with the message `Failed to set the repository head`.

Full Error Message
```
Failed to set the repository head
```

Common Causes

The repository you are trying to deploy to does not exist, or you do not have permission to access it.

The branch you are trying to deploy to does not exist or you do not have permission to write to it.

There might be an API connectivity issue that could prevent the project from being deployed.

There is a network issue preventing you from accessing the repository.

There is a problem with the code or files you are trying to deploy.​

Troubleshooting Steps

Make sure that you have entered the correct repository name and branch name.

Check that you have permission to access the repository and branch you are trying to deploy to.

Check your network connection to ensure that you are able to access the repository.

If you are deploying code, make sure that it builds and runs correctly locally before trying to deploy it.



