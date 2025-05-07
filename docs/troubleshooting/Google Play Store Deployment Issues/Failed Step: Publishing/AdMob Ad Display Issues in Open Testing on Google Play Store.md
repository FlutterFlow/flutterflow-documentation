---
keywords: ['testing', 'configuration', 'display']
author: Unknown
created_at: '1717606287'
slug: /admob-ad-display-issues-in-open-testing-on-google-play-store
title: AdMob Ad Display Issues in Open Testing on Google Play Store
updated_at: '1717609803'
url: https://intercom.help/flutterflow/en/articles/9425440-admob-ad-display-issues-in-open-testing-on-google-play-store
---
# AdMob Ad Display Issues in Open Testing on Google Play Store

Overview
If you’re experiencing issues with AdMob ads not displaying during open testing on the Google Play Store, you’re not alone. A common concern is that ads initially show but then stop, displaying only as "**Ad Loading**."

The primary reason for ads not displaying during open testing is often the use of live ads instead of test ads, as well as proper configuration of AdMob and advertising IDs. 

Don't forget about the **Ad Approval Process**. After moving your app to production and receiving approval from AdMob, it can take a few days for ads to start appearing in your app. This delay is normal and should be expected.

Steps to Ensure Ad Functionality
Here are a few steps to take to make sure your ads are functioning properly in your app.

1. Use Test Ads During App Testing
When testing your app, always use test ads—this will help to avoid issues. Live ads are designed to show only when the app is in production.

2. Check AdMob Settings
Verify that your AdMob settings reflect the correct release status of your app. If your app is marked as not released in AdMob, your live ads will not display.

3. Advertising ID Declaration
For apps targeting Android 13 (API 33) or above, you must declare the use of the advertising ID in the Google Play Console. Ensure all information is complete and accurate to prevent ads from not loading.

Additional Tips

**APP-ADS.TXT**: While optional, setting up the APP-ADS.TXT file can improve ad quality and security.

**Connectivity and Ad Unit Configuration:** Ensure there are no issues with internet connectivity or ad unit configurations.

For additional guidance, visit FlutterFlow Documentation and the FlutterFlow Community.