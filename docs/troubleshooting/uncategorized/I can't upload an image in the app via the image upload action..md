---
keywords: ['storage', 'upload', 'image']
author: Unknown
created_at: '1650488987'
slug: /i-can-t-upload-an-image-in-the-app-via-the-image-upload-action
title: I can't upload an image in the app via the image upload action.
updated_at: '1713554286'
url: https://intercom.help/flutterflow/en/articles/6156955-i-can-t-upload-an-image-in-the-app-via-the-image-upload-action
---
# I can't upload an image in the app via the image upload action.

This is a common issue that may arise due to the misconfiguration in Firebase Storage. This can be fixed by updating the Firebase Storage rules. 

Here are the instructions on how to do this.

Head over to the **Storage **section in your Firebase project and click on the **Rules **tab.
![](../assets/20250430121520677214.gif)
Here you would need to replace the current rules with the rules given below.
```
rules_version = '2';service firebase.storage{	match /b/{bucket}/o{  	match /{allPaths=**}{    	allow read, write: if request.auth != null;    }  }}
```

![](../assets/20250430121520979751.gif)This should fix the issue with uploading media in the application. If you still face this issue then please make sure to re-upload all the previously uploaded images from the application.