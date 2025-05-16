---
slug: /concepts/custom-code/configuration-files
title: Configuration Files
description: Learn how to modify platform-specific files for Android and iOS to extend your app's capabilities.
tags: [Configuration Files, Custom Code]
sidebar_position: 5
keywords: [FlutterFlow, Configuration Files, Customizations, Flutter, Dart, Pub.dev, Edit Native Files, Android, iOS, AndroidManifest.xml, Info.plist, Entitlements.plist, main.dart, proguard]
---

# Configuration Files

FlutterFlow allows you to modify configuration files for your app, and platform-specific files, without leaving the FlutterFlow interface. 

In some cases, you’ll need to tweak the configuration files that FlutterFlow generates. This is usually required when integrating third-party packages such as analytics, ad networks, and payment solutions.

Here are the key configuration files you can edit:

- [**`AndroidManifest.xml`**](#androidmanifestxml-android) – Configures app permissions, metadata, and intent filters for Android.
- [**`Info.plist`**](#infoplist-ios)– Manages iOS app settings, including permissions and configurations.
- [**`Entitlements.plist`**](#entitlementsplist-ios) – Defines iOS app privileges such as push notifications and Apple Pay.
- [**`main.dart`**](#maindart-flutter) – The entry point of your Flutter app, where you can modify app-level logic.
- [**ProGuard files**](#proguard-file-android) – Used for code shrinking and obfuscation in Android builds.

:::warning

While editing configuration files can unlock advanced functionality, it comes with risks. A small mistake (e.g., a missing XML tag or a wrong key) can cause your app to fail compilation or crash at runtime. Incorrect changes might lead to App Store/Play Store rejections. So, it’s important to note your changes and thoroughly test your app after each edit.

In short, edit native code only when necessary, and do so carefully.

:::

## Editing native XML Files (AndroidManifest.xml, Info.plist, Entitlements.plist)

FlutterFlow provides two main ways to modify native XML files: [**Add Individual Snippets**](#option-1-add-individual-snippets) and [**Manual Edit Mode**](#option-2-manual-edit-mode).

### Option 1: Add Individual Snippets

**Snippets** are small pieces of code that you can inject into the native files at predefined locations. Instead of opening the whole file to edit, you provide just the fragment you want to add, and FlutterFlow merges it into the file in the correct place. This is safer and easier for small additions such as a permission line or a meta-data tag.

#### Snippet Placement for Android

For Android, modifications are typically made in the `AndroidManifest.xml` file, where you can add the following tags:

- **Activity Tags:** Inserts XML code inside the `MainActivity` block. This is typically used to add child XML elements within the MainActivity, such as `<intent-filter>` or `<meta-data>` to control aspects such as deep linking, theme application, or launch mode.
- **Application Tags**: Used to inject properties or attributes directly on the `<application>` tag itself. For example, you can use this to set values such as `android:icon`, `android:label`, `android:allowBackup`.
- **App Component Tags**: Inserts complete XML components inside the `<application>...</application>` block. Use this to add additional activities, services, broadcast receivers, or content providers that your app depends on.

To add a snippet to your `AndroidManifest.xml`, navigate to **Custom Code** from the left navigation menu, select **Configuration Files**, then choose `AndroidManifest.xml`. Click the **plus (+)** button next to the tag where you want to insert the snippet. Provide a name (this will be included as a comment in the file) and paste your snippet code.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/rM4e11x5yCTZMdAE8tqE?embed&show_copy_link=true"
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

#### Snippet Placement for iOS

For iOS, you can modify the `Info.plist` and `Entitlements.plist` files. There’s no nested application/activity structure like on Android. Instead, both files are dictionaries of key-value pairs. When you add a snippet, it’s placed directly under the root `<dict>` element of these plist files.

To add a snippet to native iOS files, navigate to **Custom Code** (from the left-side menu) > **Configuration Files**, and select the desired file (`Info.plist` or `Entitlements.plist`). Click the **plus** (+) button, provide a descriptive name (which will appear as a comment in the file), and paste your snippet code.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/pqR3C1oSlZiPQhpeA19C?embed&show_copy_link=true"
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

:::tip
- Snippet insertion isn't available for `main.dart`. Instead, you can directly modify the file using [**Manual Edit Mode**](#option-2-manual-edit-mode).
- You can also use your Development [**Environment Values**](../../testing-deployment-publishing/development-environments/development-environments.md#environment-values) and [**Library Values**](../../resources/projects/libraries.md#library-values) inside snippets. For more details, refer to the [**Include Variables in Native Code**](#include-variables-in-native-code) section.
:::

### Option 2: Manual Edit Mode

For more complex changes, you can enable **Manual Edit Mode**, which unlocks the entire file for free-form editing. This is like opening the raw file in a text editor directly within FlutterFlow. **Note that** the manual mode is powerful but should be used carefully.

To manually edit native files, navigate to **Custom Code** (from the left-side menu) > **Configuration Files**, select the file you want to edit, and click the **lock** button to unlock it. You can now freely modify the file.

:::warning
Once unlocked, the file stays in manual editing mode until you lock it again. Re-locking it will reset the file to a version generated by FlutterFlow, which will overwrite any manual changes you've made.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/gbjFJzct9J5Jh4lxOniX?embed&show_copy_link=true"
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

:::tip

- Don’t remove FlutterFlow’s existing entries unless you are sure. It’s safer to only add or modify necessary lines and leave the rest as is.
- Use Manual Edit Mode for bulk or complex edits that the snippet can’t easily do, such as reordering tags, removing something, or pasting in a large chunk of config. Always verify that the app still builds and runs after such edits.
- You can also use your Development [**Environment Values**](../../testing-deployment-publishing/development-environments/development-environments.md#environment-values) and [**Library Values**](../../resources/projects/libraries.md#library-values) inside snippets. For more details, refer to the [**Include Variables in Native Code**](#include-variables-in-native-code) section.
:::

##   Include Variables in Native Code

When editing native files in FlutterFlow, you may need to include dynamic values, such as API keys, app configurations, or environment-specific settings. Instead of hardcoding these values directly in **`AndroidManifest.xml`**, **`Info.plist`**, or other native files, you can use FlutterFlow [**Environment Values**](../../testing-deployment-publishing/development-environments/development-environments.md#environment-values) and [**Library Values**](../../resources/projects/libraries.md#library-values) to keep your app flexible and secure.

To include a variable in a configuration file, start by creating a **file-level variable** and assigning it a value from either your **Environment Values** or **Library Values**. Then, reference this variable using a placeholder format (e.g., `{{apiToken}}`) within the configuration file. These placeholders in native files are automatically replaced with their actual values during the code generation process.

Here’s exactly how you do it:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/wHFUlfRHxQlbzmjR0Bfs?embed&show_copy_link=true"
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


You can also directly insert a variable placeholder (e.g., `{{variableName}}`) into the code using a snippet or manual edit mode and FlutterFlow automatically creates the corresponding file-level variable.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/szmDUd7g9ZqX9OoNJVws?embed&show_copy_link=true"
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


:::tip
You can use the file level variable across different snippets within the same file.
:::

Here are some examples that utilize variables in native code:

**Example 1: Using API Keys in `AndroidManifest.xml`**

Let’s say you are integrating the Mapbox package in your FlutterFlow app, and it requires an API Key in the form of a token inside the `AndroidManifest.xml` file. Instead of hardcoding the token, you can use a variable like this:

```xml
<meta-data
    android:name="com.mapbox.token"
    android:value="{{MAPBOX_ACCESS_TOKEN}}"/>
```

Here, `{{MAPBOX_ACCESS_TOKEN}}` is a file level variable that holds the Environment Value.


**Example 2: Configuring `Info.plist` for iOS**

For iOS apps, you might need to configure App Transport Security (ATS) to allow non-HTTPS connections. Instead of manually setting `NSAllowsArbitraryLoads` to `true`, you can use a variable:

```xml
<key>NSAllowsArbitraryLoads</key>
<{{ALLOW_HTTP_TRAFFIC}}/>
```

If `ALLOW_HTTP_TRAFFIC` is set to `true` in FlutterFlow’s Environment Value, the app will allow HTTP connections.


**Example 3: Using Library Values**

If you are building a [FlutterFlow Library](../../resources/projects/libraries.md) and need to include API keys in native code without exposing them when users import the library, you can use [Library Values](../../resources/projects/libraries.md#library-values) as placeholders. This ensures that when someone installs your library, they can define their own values without seeing the actual key or credentials inside the native files.

For example, if your library requires an API key for a third-party service (e.g., Google Maps or a payment provider), it’s best not to expose the key directly in the manifest file. Instead, create a file-level variable and assign it a Library Value.

```
<application>
    <meta-data 
        android:name="com.google.android.geo.API_KEY" 
        android:value="{{MAPS_API_KEY}}" />
</application>
```

The library user will define their own API key under Library Values when importing your library. At build time, FlutterFlow replaces `{{MAPS_API_KEY}}` with the user-defined key.

## Editable Files

FlutterFlow allows editing several key native files. Below, we cover each file’s role, why you might need to edit it, and examples of real-world use cases.

### `AndroidManifest.xml` (Android)

`AndroidManifest.xml` is the master configuration file for your Android app. It is located in the root directory of the app's `android/app/src/main` folder and declares essential app information to the Android OS and Google Play. This includes your app’s package name, components (activities, services, receivers), and the permissions it needs.

It defines hardware and software features the app depends on, such as Bluetooth, GPS, or sensors. The manifest manages intents and filters, determining how the app responds to system events and deep linking. It also includes metadata and configuration for SDKs and libraries, such as API keys or feature flags.

In short, the manifest is like an app’s identity card and permission sheet for Android.

Here are some scenarios where you may need to modify the `AndroidManifest.xml` file:

**Example 1: Declaring App Components (Activities, Services, Receivers)**

For including additional screens (activities), background processes (services), or listeners (broadcast receivers), you must declare them in `AndroidManifest.xml`.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">

    <application
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name">

        <!-- Add your activity here -->
        <activity android:name=".NewScreenActivity" />
        
    </application>

</manifest>
```

This registers `NewScreenActivity` so the system knows it exists.

**Example 2: Requesting Permissions** 

If your app requires access to restricted resources such as wake locks (to keep the device awake) or audio recording, you must declare the necessary permissions in `AndroidManifest.xml` by [manually editing](#option-2-manual-edit-mode) the file. **Tip:** You can also add custom permissions directly through the [**Permission Settings**](../../resources/projects/settings/project-setup.md#adding-custom-permission) in FlutterFlow.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="com.example.yourappname">

    <!-- Permissions -->
    <uses-permission android:name="android.permission.WAKE_LOCK"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>

    <application
        android:label=""
        tools:replace="android:label"
        android:icon="@mipmap/ic_launcher"
        android:requestLegacyExternalStorage="true">

        <activity android:name=".NewScreenActivity"/>

    </application>
</manifest>
```

Without these, the app cannot keep the device awake or record audio.

**Example 3: Adding Metadata for SDKs and Libraries** 

Many third-party packages (Google Maps, Firebase, AdMob, etc.) require `<meta-data>` tag in `AndroidManifest.xml` to pass configuration values. For example, the [**Mapbox Flutter**](https://pub.dev/packages/mapbox_flutter) plugin requires adding your Mapbox access token as a metadata entry for initialization. A real example: to initialize Mapbox, you’d add:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">

    <application
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name">

        <!-- Your snippet goes here -->
        <meta-data
            android:name="com.example.MAPS_API_KEY"
            android:value="YOUR_API_KEY" />

    </application>
</manifest>
```

**Example 4: Restricting the App to Specific Devices**

You can specify device hardware requirements (e.g., GPS, camera, touchscreen) to ensure the app only installs on compatible devices.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">

    <!-- Your snippet goes here -->
    <uses-feature android:name="android.hardware.camera" />

    <application
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name">
        
        <!-- other components -->

    </application>

</manifest>
```

This prevents installation on devices without a camera.

**Example 5: Enabling Cleartext Traffic**

If your app needs to communicate over HTTP (unencrypted) for testing or legacy reasons, you might need to add `android:usesCleartextTraffic="true"` in the `<application>` tag. This is to relax network security for HTTP URLs.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">

    <application
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:usesCleartextTraffic="true"> <!-- Add this line -->

        <!-- Other components -->

    </application>

</manifest>
```

:::tip
You can modify the `AndroidManifest.xml` file by either [**adding a snippet**](#snippet-placement-for-android) or [**editing it manually**](#option-2-manual-edit-mode).
:::

### `Info.plist` (iOS)

`Info.plist` (Information Property List) is the configuration file for iOS apps. It’s a structured XML file that provides iOS with essential information about your app’s configuration and requirements.

The `Info.plist`defines things such as your app’s bundle identifier, display name, version, and most importantly, usage descriptions for permissions and other settings iOS needs at runtime. The file is required for every iOS app and is located in the project’s `/ios/Runner/` directory of your FlutterFlow apps.

Essentially, it’s the blueprint for iOS to understand your app’s capabilities and needs.

Here are some scenarios where you may need to modify the `Info.plist` file:

**Example 1: Requesting Permissions**

If your app requires location access both while in use and in the background, you must declare the appropriate permissions in `Info.plist`. **Tip:** You can also add custom permissions directly through the [**Permission Settings**](../../resources/projects/settings/project-setup.md#adding-custom-permission) in FlutterFlow.

```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>This app requires location access while in use to provide location-based services.</string>

<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>This app requires background location access to enable continuous location tracking.</string>

```

This ensures the app can access location services even when the user is not actively using it.

**Example 2: Enabling App Transport Security (ATS) for HTTP Requests**

By default, iOS enforces HTTPS connections for security reasons. If your app needs to communicate with **HTTP-only** servers, you must modify `Info.plist`.

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

This allows all HTTP requests but should be used with caution

**Example 3: Configuring Background Modes**

If your app requires background functionality (e.g., playing music, location tracking), you must enable background modes in `Info.plist`.

```xml
<key>UIBackgroundModes</key>
<array>
    <string>audio</string>
    <string>location</string>
</array>
```

This allows the app to play audio or track location when running in the background.

**Example 4: Adding Keys**

Many third-party packages require to add keys in the in `Info.plist` file. For example, If you’re using the Mapbox SDK, you need to provide an access token in `Info.plist` to enable map functionality.

```xml
<key>io.flutter.embedded_views_preview</key>
<true/>
<key>MGLMapboxAccessToken</key>
<string>YOUR_MAPBOX_ACCESS_TOKEN</string>
```

The **`MGLMapboxAccessToken`** key is required for initializing Mapbox maps in your app. Additionally, the **`io.flutter.embedded_views_preview`** key must be set to `true` to support embedding native views inside Flutter widgets.

:::tip
You can modify the `Info.plist` file by either [**adding a snippet**](#snippet-placement-for-ios) or [**editing it manually**](#option-2-manual-edit-mode).
:::

### `Entitlements.plist` (iOS)

The `Entitlements.plist` file is a property list in iOS applications that defines the app’s security-related capabilities and permissions. It grants specific privileges to an app, allowing it to access Apple services such as iCloud, Push Notifications, App Groups, Background Modes, and Keychain access. It is located in the **`/ios/Runner/`** directory of your FlutterFlow app and is named **`Runner.entitlements`**.

This file ensures that only authorized apps can use these features, maintaining security and preventing unauthorized access to sensitive system functions.

Here are some scenarios where you may need to modify the `Entitlements.plist` file:

**Example 1: Enabling iCloud Storage**

If your app integrates **iCloud services**, such as syncing user data or storing documents, you must add iCloud entitlements.

```xml
<key>com.apple.developer.icloud-container-identifiers</key>
<array>
    <string>iCloud.com.yourcompany.appname</string>
</array>

<key>com.apple.developer.icloud-services</key>
<array>
    <string>CloudDocuments</string>
</array>
```

This grants your app access to iCloud storage under the specified container.

**Example 2: Enabling Keychain Access**

If your app needs to store secure credentials, enabling Keychain Sharing is required.

```xml
<key>keychain-access-groups</key>
<array>
    <string>com.yourcompany.appname</string>
</array>
```

This allows secure storage of login credentials, API tokens, or encryption keys in the iOS Keychain.

**Example 3: Enabling App Groups for Shared Data**

If your app shares data between multiple apps or an app extension (e.g., a widget or a Siri shortcut), you must enable App Groups.

```xml
<key>com.apple.security.application-groups</key>
<array>
    <string>group.com.yourcompany.shared</string>
</array>
```

This allows different apps or extensions to access shared storage and user defaults.

**Example 4: Enabling Wallet (Apple Pay & Passes)**

If your app integrates with Apple Wallet, you need to add Wallet entitlements.

```xml
<key>com.apple.developer.pass-type-identifiers</key>
<array>
    <string>pass.com.yourcompany.appname</string>
</array>
```

This enables your app to create, manage, and present passes in Apple Wallet.

:::tip
You can modify the `Entitlements.plist` file by either [**adding a snippet**](#snippet-placement-for-ios) or [**editing it manually**](#option-2-manual-edit-mode).
:::

### `main.dart` (Flutter)

The `main.dart` file is the entry point of every FlutterFlow app. It is the first file that runs when the app starts and is responsible for initializing the application, configuring dependencies, and defining the root widget. Located in the **`lib/`** directory, `main.dart` contains the `main()` function, which is required for every FlutterFlow app.

If you need to execute any custom Dart code at startup — such as initializing third-party SDKs, setting global configurations, service locators, printing a debug log, or running certain functions once — `main.dart` is the place to do it.

:::info
[**Adding Snippets**](#option-1-add-individual-snippets) isn't available for `main.dart`. Instead, you can directly modify the file using [**Manual Edit Mode**](#option-2-manual-edit-mode).
:::

Here are some scenarios where you may need to modify the `main.dart` file:

**Example 1: Initializing Third-Party Packages**

Many packages have initialization calls. For example, if you added a custom package for analytics or error tracking (say Sentry or a logging service), you might need to call `SentryFlutter.init()` or set up an error handler at app startup. By placing that call in `main.dart` (before or right after `runApp`), you ensure it’s executed early.

```jsx
import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

Future<void> main() async {
  runZonedGuarded(() async {
    await SentryFlutter.init(
      (options) {
        options.dsn = 'https://example@sentry.io/add-your-dsn-here';
      },
    );

    runApp(MyApp());
  }, (exception, stackTrace) async {
    await Sentry.captureException(exception, stackTrace: stackTrace);
  });
}
```

This ensures Sentry is ready before the app starts, just like Firebase initialization.

**Example 2: Customizing the Status Bar Appearance**

If you want to change the status bar color and adjust icon brightness for Android and iOS, you need to modify `main.dart` before calling `runApp()`.

```jsx

import 'package:flutter/services.dart';

void main() {
  SystemChrome.setSystemUIOverlayStyle(
    SystemUiOverlayStyle(
      statusBarColor: Colors.redAccent, // Custom status bar color
      statusBarIconBrightness: Brightness.dark, // Dark icons for Android
      statusBarBrightness: Brightness.light, // Light icons for iOS
    ),
  );

  runApp(MyApp());
}

```

**Example 3: Locking the Screen Orientation**

Some apps require landscape-only or portrait-only modes. You can enforce screen orientation in `main.dart` before launching the app.

```jsx
import 'package:flutter/services.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.landscapeLeft,
    DeviceOrientation.landscapeRight,
  ]);

  runApp(MyApp());
}
```

This ensures the app only runs in landscape mode.

**Example 4: Observing App Lifecycle Changes**

If your app needs to respond to lifecycle events, such as tracking when the app goes into the background or returns to the foreground, you can attach an observer.

```jsx
import 'package:flutter/widgets.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  WidgetsBinding.instance.addObserver(AppLifecycleObserver());
  runApp(MyApp());
}

class AppLifecycleObserver with WidgetsBindingObserver {
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      print('App is in foreground');
    } else if (state == AppLifecycleState.paused) {
      print('App is in background');
    }
  }
}
```

### ProGuard File (Android)

The **ProGuard file (`proguard-rules.pro`)** is a configuration file used in Android projects to optimize, shrink, and obfuscate the app’s code. It helps reduce APK or AAB size, improves performance, and protects the app’s code from reverse engineering by making it difficult to decompile.

The ProGuard files allow you to specify rules to keep certain classes or methods (prevent them from being removed or renamed), or to tweak the obfuscation behavior. Located in the **`android/app/proguard-rules.pro`** directory of an Android project, the ProGuard rules are applied when code shrinking is enabled in a release build.

Here are some scenarios where you may need to modify the ProGuard file:

**Example 1: Preventing Issues with Third-Party Libraries**

ProGuard can obfuscate critical libraries, breaking their functionality. To prevent this, you need to keep specific classes used by the library.

```jsx
# Firebase
-keep class com.google.firebase.** { *; }

# Gson (JSON Serialization)
-keep class com.google.gson.** { *; }
-keepattributes *Annotation*
```

This ensures that Firebase and Gson classes are not obfuscated, preventing serialization errors.

**Example 2: Debugging ProGuard Issues**

If your app crashes in release mode but works in debug mode, ProGuard might be removing important classes. To troubleshoot, you can add logging and keep rules.

```jsx
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
}
```

This removes debug logs in release builds but retains them for troubleshooting.

**Example 3: Improving Security by Removing Debug Information**

Attackers can decompile APKs and view sensitive debug logs. To remove these debug logs, add:

```jsx
-dontwarn android.util.Log
```


**Example 4: Keeping Native Libraries (JNI) Safe**

If your app uses native C/C++ libraries (JNI), ProGuard may mistakenly remove required components. To prevent this:

```jsx
-keep class com.example.native.** { *; }
-keepclassmembers class * {
    native <methods>;
}
```

This keeps all native methods intact.

**Example 5: Preventing Issues with Reflection-Based Code**

Some libraries rely on reflection to dynamically call methods, which ProGuard may remove.

```jsx
-keep class * implements android.os.Parcelable { *; }
-keepclassmembers class ** {
    @android.webkit.JavascriptInterface <methods>;
}
```

This ensures reflection-based code continues working.

## Best Practices

- **Backup:** Before making native file changes, ensure you have a backup of at least the text of the original file. You could also commit your changes so you can revert if needed. This way, if things go wrong, you can manually restore.
- **One Change at a Time:** Add or modify one item at a time and then test your app. If you add multiple things and something breaks, it’s harder to pinpoint which change did it.
- **Consult Package Documentation:** When you’re making changes for third-party packages, follow their instructions exactly. Usually, package docs show a snippet – use that in FlutterFlow’s [snippet](#option-1-add-individual-snippets). Double-check official docs for Android or iOS if you’re unsure about the correct keys or tags. For example, if enabling background fetch, Apple’s docs will list the exact string to use in `Info.plist` (`fetch` in `UIBackgroundModes` array).
- **Keep it Minimal:** Only add what you truly need. Don’t add a bunch of entitlements or permissions “just in case” as that can bloat and complicate your app, and even trigger store reviews for uses that your app doesn’t actually have.
- **Use Comments:** As you modify files, annotate them. If six months later you or a team member look at the manifest, a comment like `<!-- Added for Payments SDK on Feb 2025 -->` is very helpful.
- **Testing on Devices:** Especially for anything related to `Info.plist` or entitlements, always test on a real iOS device if possible. Some issues (like missing entitlements or background mode usage) won’t show up in the simulator. Similarly, test Android changes on a device or emulator with a release build – because ProGuard rules effects, for example, only show in release mode.
- **Monitoring Logs and Errors:** After making changes, monitor the Xcode console or Android logcat when running the app. If there are misconfigurations, you often get warnings.
- **Stay Updated:** FlutterFlow may improve native editing features over time. Keep an eye on FlutterFlow’s docs or community announcements. If they introduce a new easier way, prefer that to manual editing when possible, as it will be more foolproof.
- **Security Consideration:** Remember that anything in these files (especially `Info.plist`, `AndroidManifest.xml`) is essentially public in the distributed app. Don’t assume an API key in `Info.plist` is hidden – it’s not. For keys you must include (maps, etc.), consider using [private environment values](../../testing-deployment-publishing/development-environments/development-environments.md#private-environment-values) and monitoring their usage.

## FAQs

<details>
<summary>
My app won’t install on an iOS device. What should I check?
</summary>
<p>
Confirm that the entitlements in `Entitlements.plist` match your provisioning profile. If you see a “Missing entitlement” error, it means you added an entitlement not allowed by your profile. Remove it or update the profile in the Apple Developer Portal.
</p>
</details>

<details>
<summary>
How do I fix “Manifest merger failed” on Android?
</summary>
<p>
This error indicates a conflict in your `AndroidManifest.xml`. Common issues include **duplicate permissions** or attributes (e.g., two `<application android:label>` entries). The error message usually identifies the conflicting line. Remove the duplicate or ensure each property is set only once to resolve the conflict.
</p>
</details>

<details>
<summary>
Why my app isn't running in Test Mode after editing the `main.dart` file with Supabase enabled?
</summary>
<p>
There's a known limitation where editing the `main.dart` file with Supabase enabled prevents Test Mode from running. As a workaround, please use [**Local Run**](../../testing-deployment-publishing/running-your-app/local-run.md) to test your app instead.
</p>
</details>

<details>
<summary>
Can I modify the Configuration Files in a Library project?
</summary>
<p>
Yes, you can. When a Library Project is imported, any configuration file snippets, such as those for `AndroidManifest.xml`, `Info.plist`, or `Entitlements.plist` are automatically merged into the importing project's configuration files.

Additionally, your Library Project can pass values (like API keys) into those snippets using [**Library Values**](../../resources/projects/libraries.md#library-values), making it easy to customize.

![config-values-in-library](imgs/config-values-in-library.avif)

This makes Libraries incredibly powerful and enables easy integration of tools like **PostHog** (analytics), **Sentry** (crash reporting), **CleverTap**, **flutter_local_notifications**, **flutter_nfc_kit**, and many more directly from the Marketplace.
</p>
</details>