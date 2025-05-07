---
keywords: ['signing', 'ios', 'error']
author: Unknown
created_at: '1661384913'
slug: /signing-for-imagenotification-requires-a-development-team-flutterflow-and-local-builds
title: iOS Signing for ImageNotification - Development Team Requirements
updated_at: '1712161705'
url: https://intercom.help/flutterflow/en/articles/6500626-signing-for-imagenotification-requires-a-development-team-flutterflow-and-local-builds
---
Tip: Not sure which type of error your project has? Check out this article on how to identify your Codemagic error.

## Introduction

Builders often encounter issues when attempting to sign the "ImageNotification" feature within their applications, especially when configuring their projects in IDEs (Integrated Development Environments) and also directly from the Apple Store developer console. This process is crucial for ensuring the application's integrity and security, as it involves selecting the appropriate development team and configuring the signing certificates correctly.

## Common Error
```
Signing for "ImageNotification" requires a development team
```

## Solution

1. Make sure you have a valid Apple Developer account
2. In XCode, select the proper development team for your app
3. Ensure your provisioning profiles are properly configured
4. For FlutterFlow builds, make sure to specify your development team in the iOS deployment settings

