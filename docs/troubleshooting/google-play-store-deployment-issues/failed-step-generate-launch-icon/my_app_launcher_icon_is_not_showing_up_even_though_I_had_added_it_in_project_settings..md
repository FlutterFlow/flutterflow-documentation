---
keywords: ["icon", "added", "launcher"]
slug: /my-app-launcher-icon-is-not-showing-up-even-though-i-had-added-it-in-project-settings
title: My app launcher icon is not showing up even though I had added it in project settings.
---

# My app launcher icon is not showing up even though I had added it in project settings

If your custom app launcher icon is not appearing after adding it in the project settings, follow these steps to resolve the issue:

## 1. Run the Launcher Icon Generation Command

After downloading or exporting your code, open a terminal in your project directory and run:

```sh
flutter pub run flutter_launcher_icons:main
```

This command will generate the launcher icons for your app.

## 2. Set Up Your Flutter Environment

To run the above command, you need to have a Flutter environment set up on your machine. [Follow the official Flutter installation guide](https://docs.flutter.dev/get-started/install) if you haven't already.

---

**Still not working?**
- Double-check that your icon files are correctly named and placed in the appropriate directory.
- Make sure your `pubspec.yaml` includes the correct configuration for `flutter_launcher_icons`.
- Try cleaning your project with `flutter clean` and then re-running the icon generation command.

For more details, see the [FlutterFlow help article]({{url}}).
