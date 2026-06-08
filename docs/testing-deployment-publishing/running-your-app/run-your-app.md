---
slug: /testing/run-your-app
title: Run your App
description: Discover the essentials of running and testing your FlutterFlow app with this comprehensive guide.
tags: [Run, Testing, FlutterFlow]
sidebar_position: 0
keywords: [Run, Testing, FlutterFlow]
---

Running and testing your app is a crucial part of the app development process. This page provides a comprehensive guide on how to run and test your FlutterFlow app. It covers various modes of testing, including [Preview](#preview-mode), [Test](#test-mode), [Run](#run-mode), and [Local Run](#local-run) modes, with detailed steps and indications of when to use each mode. 

:::info
You can access various modes of running your app from the [**Toolbar**](../../intro/ff-ui/toolbar.md).
:::

![run your app](../imgs/run-your-app.avif)

## Preview Mode

You can use the Preview Mode to quickly try out your app on a virtual device
without waiting for it to build. This is helpful primarily for navigation and
animations. You can also preview your app in the Dark/Light mode and visualize
it on various mobile, tablet, and desktop devices.

### When to use Preview Mode

The primary benefit of **Preview Mode** is that it allows your app to load
instantly, making it ideal for UI testing. However, most business logic is not
included in this mode. As a result, this mode is used less frequently than
other testing modes, which provide a more comprehensive evaluation of the app's
functionality.

:::caution[Preview Mode Limitations]

- Actions may not trigger or work properly.
- FontAwesome icons jump around when mouse hovers over certain material widgets.
- Firestore data is not loaded from Firebase.
- Firebase auth flow can't be tested. We always allow log in.
- API Calls can't be run or tested here.
- Refresh if animation actions are not working.
- Refresh if Clear TextFields actions are not working.
- RevenueCat data is not loaded.
- Paywall actions execute as if the entitlement is active.
- Hero Animation may not work on dynamically generated widgets.
- Dropdown disabling does not work in Preview Mode.
- Tooltip does not work for some screen sizes in Preview Mode.
  :::

## Test Mode

The **Test Mode** runs a web version of your FlutterFlow app and uses Flutter's Hot Reload feature, which lets you immediately see any changes made to code in an emulator or on-device. Running your app in Test Mode helps you experiment, test UIs, and fix bugs faster.

To run your app in Test Mode:

1. Select **Test Mode** from the left-side menu. The test environment will launch and be ready to use within a few minutes.
2. Once Test Mode is running, make changes in the FlutterFlow builder, such as updating colors, layouts, or widgets.
3. In Test Mode, **Sync changes automatically** is enabled by default, so changes made in FlutterFlow are automatically synced to the running app.
4. If you disable auto-sync, click **Hot Reload** or press `Cmd/Ctrl + J` whenever you want to manually sync and preview the latest changes.
5. Use **Hot Restart** when changes require a full restart, such as dependency updates or certain state model changes.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/95jxxYi1bzeY27KUek50?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

:::note

**For users on a paid plan**, Test Mode sessions do not expire and can remain active indefinitely until manually stopped.

**For users on the Free plan**, Test Mode sessions expire after 20 minutes. Once a session expires, you can start a new one by clicking the **New Session** button.

![new-session](imgs/new-session.avif)

:::

### Floating Window

A Floating Window displays the running app on top of the builder, allowing you to design and test at the same time without switching between browser tabs.

The Floating Window makes iteration much faster because you can immediately see the impact of your changes while working in the builder. It makes it easier to fine-tune layouts, styling, and interactions.

To open the Floating Window, start a Test Mode session and click the **Floating Window** icon in the Test Mode toolbar. A movable preview of your app will appear over the builder, allowing you to keep the live app and editor visible at the same time. You can drag the window anywhere on the screen and resize it as needed while continuing to edit your app.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/LQBn8B4PGst1MKD6QVIm?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

### Inspect Mode

Inspect Mode helps you quickly locate widgets in the FlutterFlow builder while testing your app. This is especially useful when working with large pages or deeply nested layouts. Instead of manually searching through the Widget Tree to find a specific button, image, text, or container, you can simply click it in the running app and jump directly to its location in the builder.

To use Inspect Mode, click the **Inspect Mode** icon in the Test Mode toolbar. Once enabled, select any widget in the running app preview. FlutterFlow will automatically navigate to and highlight the corresponding widget in the builder, allowing you to inspect or edit it immediately. 

When you're finished, click the Inspect Mode icon again to exit inspection mode and continue interacting with the app normally.

### Open Test Mode on Your Phone

You can open the current Test Mode session directly on a physical mobile device. This allows you to test your app on actual hardware and verify touch interactions, layouts, scrolling behavior, and overall user experience.

To open the session on your phone, click the **QR Code** icon in the Test Mode toolbar. FlutterFlow will generate a QR code and a unique session link. Scan the QR code using your phone's camera or open the generated link on your mobile device. The app will load the same active Test Mode session that is running in your browser.

The generated link is tied to the current Test Mode session and will stop working when the session ends.

![test-mode-in-phone](imgs/test-mode-in-phone.avif)


### Debug info
Test mode also includes a **Debug Info** panel, which provides a real-time view of all variables with their current values. It includes search and filter options, allowing you to find variables based on type or nullability. This is particularly useful for developers who need to track the state of the app and diagnose issues efficiently.

![deubg-info](../imgs/deubg-info.avif)

:::caution[Test Mode Limitations]
**Test Mode** has certain limitations because some packages are not supported on
the web and because of the way FlutterFlow configures your project to run in the
cloud.

- If you see a grey "broken" screen with a sad face, it may be a DNS server
  issue with your network provider. We recommend using CloudFlare's 1.1.1.1 DNS
  server. [**Click here**](https://developers.cloudflare.com/1.1.1.1/setup/) to see instructions.
- Lottie animation may not load if you provide a variable path.
- Cookies need to be enabled for Test Mode to function properly. They are only
  used for functional purposes.
- If you see a progress bar where the phone outline should be that lasts longer
  than 15 seconds, try refreshing the page.
- The device screen can not be wider than the page's width.
- Copy to Clipboard Action is not supported in Test Mode.
  Use [**Run Mode**](#run-mode) to avoid this issue.
- Widgets with Shimmer or Tint animation might not appear properly.
- Assets used within Custom Code might not appear properly.
- Audio Recording actions do not work in Test Mode; use web publishing in
  Settings to test recording audio or test it on emulator via Local Run.
  :::

## Run Mode

You can test a fully functional version of your app using the **Run Mode**,
including live data. It will build the app, which typically requires around 2-4
minutes - but can be longer for larger projects. You can then interact with your
app through your web browser. This is a web version of the app, identical to the
version that is run on _Test Mode_.

To run the app in Run Mode, click on the **dropdown** next to the Test Mode button and click the play button or press
   **Cmd/Ctrl + E** (keyboard shortcut). This will run your app in a new
   browser window.

### When to use Run Mode

The main benefit of Run Mode is the ability to share a running app within your team via a link. Please note that, **Run Mode links are not public**; they are only accessible to project members. Even if the project is made public (allowing others to view and clone the project), the visibility of Run Mode links remains restricted to project members.

All Run Mode sessions will persist and can be accessed from the dropdown menu next to the lightning bolt icon in the upper right of the FlutterFlow builder.

![run-project-versions](../imgs/run-project-versions.avif)

:::caution[Run Mode Limitations]
Run Mode does not support Hot Reloading, so any changes you make to your app will
not be reflected in the Run Mode. In order to see the changes, you would have to
create another Run Mode.
:::

## Local Run

Local Run downloads the code locally and gives you the option to use [Flutter's Hot Reload](https://docs.flutter.dev/tools/hot-reload) or Hot Restart to see your changes instantly on a device. See how to setup Local Run [here](local-run.md).

:::info
Please note that Local Run is currently available only on the [**Paid Plans**](https://flutterflow.io/pricing).
:::

## FAQ

<details> <summary> I don't see the new Test Mode option in the left sidebar.</summary> <p> If the new Test Mode option is not visible in the left sidebar, open the test menu and enable the <strong>Use new test mode</strong> option. Once enabled, the new Test Mode option will appear in the navigation menu. </p> </details>
