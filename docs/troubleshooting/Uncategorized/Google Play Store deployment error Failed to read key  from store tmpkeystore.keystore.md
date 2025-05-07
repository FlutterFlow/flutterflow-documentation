---
keywords: ['deployment', 'error', 'store']
author: Unknown
created_at: '1689674708'
slug: /google-play-store-deployment-error-failed-to-read-key-from-store-tmpkeystore-keystore
title: 'Google Play Store deployment error: Failed to read key from keystore'
updated_at: '1689891723'
url: https://intercom.help/flutterflow/en/articles/8140880-google-play-store-deployment-error-failed-to-read-key-from-store-tmp-keystore-keystore
---
**Background:**
The Google Play Store deployment is unsuccessful and displays the error below:​

```
Error: Failed to read key ******** from store "/tmp/keystore.keystore"
```

**Solution:**
This error occurs due to issues with the keystore file used for Android app deployment. Here are the steps to resolve it:

1. First, ensure your keystore file is correctly set up in your FlutterFlow project settings.
2. Check that your keystore password is correct. 
3. If issues persist, try creating a new keystore file in FlutterFlow.
4. Make sure you've uploaded the correct keystore file.

For more details on setting up Android keystores properly, consult the [FlutterFlow documentation on publishing Android apps](https://docs.flutterflow.io).