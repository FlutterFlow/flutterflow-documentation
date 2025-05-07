---
keywords: ['deployment', 'debug', 'android']
author: Unknown
created_at: '1650490717'
slug: /google-play-store-deployment-issues
title: Google Play Store Deployment Issues
updated_at: '1713554288'
url: https://intercom.help/flutterflow/en/articles/6157034-google-play-store-deployment-issues
---
# Google Play Store Deployment Issues

**You uploaded an APK or Android App Bundle that was signed in debug mode. You need to sign your APK or Android App Bundle in release mode**
You'll need to modify your android/app-level build.gradle file and replace `debug` with `release`. You'll need to replace the debug keyword with the release.

Here are the instructions on how to do this:

Find the debug keyword under buildTypes in android/app/builld.gradle in your project folder.

![](../../assets/20250430121513060363.png)

Replace the debug keyword with release and then save the file.

![](../../assets/20250430121513225263.png)
​

​
**Publishing app-release.aab to Google Play Published app-release.aab to track internal Google Play failed to upload artifacts. Only releases with status draft may be created on draft app.**
Please make sure that you fill out all the information in the play store including the store listing information and the setup information.

**Common Issues with PlayStore Deployment with Code Magic**
Here are some common issues that you might face while deploying your app to the Google Play Store.

​