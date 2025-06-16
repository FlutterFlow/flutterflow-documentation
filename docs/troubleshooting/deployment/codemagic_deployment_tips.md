---
keywords: ['deployment', 'tips', 'codemagic']
slug: /codemagic-deployment-tips
title: CodeMagic Deployment Tips
---
# CodeMagic Deployment Tips

Here are some tips to avoid Deployment issues:

:::tip
- Make sure you've followed all the steps for [setting up deployment](http://localhost:3000/deployment/deploy-for-environments/#mobile-deployment)
 in your project.
- If you choose a deployment source from a GitHub Repository then please make sure that it's associated with FlutterFlow's GitHub integration.
- If you are deploying to the Play Store from a GitHub repo, make sure to modify your build.gradle file to sign in release mode.
- Setting a version number is optional but may be required for specific cases. If you are updating an existing app that has not been deployed using FlutterFlow yet, you will want to specify a version number.
:::