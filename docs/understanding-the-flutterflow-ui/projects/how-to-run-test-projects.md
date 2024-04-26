---
slug: how-to-run-test-projects
title: How to Run and Test Projects
tags: []
toc_max_heading_level: 5
---
There are 4 ways to test your project in FlutterFlow.
- Preview
- Test
- Run
- Local Run

## Preview Mode
You can use the Preview Mode to quickly try out your app on a virtual device without waiting for it to build. This is helpful primarily for navigation and animations. You can also preview your app in the Dark/Light mode and visualize it on various mobile, tablet, and desktop devices.

<div class="alert alert--info" role="alert">
#### When to Use Preview Mode
The main benefit is that your app will load instantly. However, because of the limitations this feature is used much less often that the other testing modes.
</div>
<div class="alert alert--warning" role="alert">
  #### Preview Mode Limitations
  - Actions may not trigger or work properly.
  - FontAwesome icons jump around when mouse hovers over certain material widgets.
  - Firestore data is not loaded from Firebase.
  - Firebase auth flow can't be tested. We always allow log in.
  - API Calls can't be run or tested here.
  - Refresh if animation actions are not working.
  - Refresh if Clear TextFields actions are not working
  - RevenueCat data is not loaded.
  - Paywall actions execute as if the entitlement is active.
  - Hero Animation may not work on dynamically generated widgets.
  - Dropdown disabling does not work in
  - Preview Mode.
  - Tooltip does not work for some screen sizes in Preview Mode.
</div>

## Test Mode

Test mode uses Flutter's "Hot Reload" feature, which lets you immediately see any changes made to code in an emulator or on-device. Running your app in _Test_ Mode helps you experiment, test UIs, and fix bugs faster.

To run your app in Test Mode:

1. Click on the **Test icon** or press **Cmd/Ctrl + I** (a keyboard shortcut). This will run your app in a new browser window.
2. Switch to the app builder and make some changes, such as changing colors and alignment.
3. Now switch to the Test Mode tab and click **Instant Reload** or press **Cmd/Ctrl + J** to see the changes in under 10 seconds.

<h4>Test Mode Button Colors</h4>
The test mode button color indicates the following status:
  - Orange: Building
  - Green: Ready
  - Yellow: Expiring Soon
  - Red: Expired
<div class="alert alert--info" role="alert">
#### When to Use Test Mode
When designing and developing your app, Test Mode is the second most common testing mode (next to Local Run). It's Hot Reloading allows for fast iteration and testing. It's downsides compared to Local Run are its restricted time (30 min.) and lack of access to some features (e.g. camera).
</div>
<div class="alert alert--info" role="alert">
<h4>Troubleshooting – Slow Loading</h4>
If you see a progress bar at the top of the device running for over 15 seconds, try refreshing the page.
</div>
<div class="alert alert--warning" role="alert">
#### Test Mode Limitations
- 30 minute testing time. After the 30 minutes has expired, you can start another test mode.
- If you see a grey "broken" screen with a sad face, it may be a DNS server issue with your network provider. We recommend using CloudFlare's 1.1.1.1 DNS server. Click here to see instructions.
- Lottie animation may not load if you provide a variable path.
- Cookies need to be enabled for Test Mode to function properly. They are only used for functional purposes.
- If you see a progress bar where the phone outline should be that lasts longer than a 15 seconds, try refreshing the page.
- The device screen can not be wider than the page's width.
- Copy to Clipboard Action is not supported in Test Mode. Use Run Mode to avoid this issue.
- Widgets having Shimmer or Tint animation might not appear properly.
- Assets used within Custom Code might not appear properly.
- Audio Recording actions do not work in Test Mode, use web publishing in Settings to test recording audio.
</div>

## Run Mode

You can test a fully functional version of your app using the _Run_ mode, including live data. It will build the app, which typically requires around 2-4 minutes - but can be longer for larger projects. You can then interact with your app through your web browser.

To run the app in Run Mode:

1. Click on the **dropdown** next to the Test Mode button \***\*or press **Cmd/Ctrl + E\*\* (a keyboard shortcut). This will run your app in a new browser window.
<div class="alert alert--info" role="alert">
#### When to Use Run Mode
The main benefit of Run Mode is the ability to share a running app. The url of the Run Mode is public and shareable. All Run Modes will persist and can be accessed in the drop down menu next to the lightning bolt icon in upper right of the FlutterFlow builder.
</div>
<div class="alert alert--warning" role="alert">
#### Run Mode Limitations
Run Mode does not support Hot Reloading so any changes you make to your app will not be reflected in the Run Mode. In order to see the changes you would have to create another Run Mode.
</div>

## Local Run
You can test your app on an emulator or physical mobile device with Local Run feature, which is available in the FlutterFlow Desktop App. Local Run automatically tracks changes in your FlutterFlow project, downloads the code locally, and gives you the option to use Flutter's Hot Reload or Hot Restart to see your changes instantly on a device.

[How to Setup Local Run](https://docs.flutterflow.io)