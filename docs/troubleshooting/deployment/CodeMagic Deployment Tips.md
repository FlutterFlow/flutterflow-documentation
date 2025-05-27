---
keywords: ['deployment', 'tips', 'codemagic']
author: Unknown
created_at: '1650489835'
slug: /codemagic-deployment-tips
title: CodeMagic Deployment Tips
updated_at: '1713554287'
url: https://intercom.help/flutterflow/en/articles/6157001-codemagic-deployment-tips
---
# CodeMagic Deployment Tips

Here are some tips to avoid Deployment issues in FlutterFlow:

Make sure you've followed all the steps for setting up deployment in your project.

If you choose a deployment source from a GitHub Repository then please make sure that it's associated with FlutterFlow's GitHub integration.

If you are deploying to the Play Store from a GitHub repo, make sure to modify your build.gradle file to sign in release mode.

Setting a version number is optional but may be required for specific cases. If you are updating an existing app that has not been deployed using FlutterFlow yet, you will want to specify a version number.

If deploying to the App Store, make sure your provisioning profile and certificate match the app’s bundle ID.

Ensure the Flutter version in Codemagic matches the version used in FlutterFlow to avoid build errors.

Run a test build on Codemagic before actual deployment to catch any configuration issues early.

Use environment variables in Codemagic to securely store API keys and other sensitive data.

For larger apps, enable multidex in build.gradle to avoid build failures.

When updating an existing app, always increase the version code and version name to meet store requirements.

