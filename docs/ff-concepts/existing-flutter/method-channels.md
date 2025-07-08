---
slug: /concepts/existing-flutter/method-channels
title: Implementing Third-Party SDKs with Method Channels
description: Implementing Third-Party SDKs with Method Channels
tags: [Flutter]
sidebar_position: 4
keywords: [FlutterFlow, Flutter, Method Channels, Existing Flutter Codebases,]
---


Flutter lets you build one app that runs on mobile, web, desktop, and embedded experiences from a single codebase. You write your app logic in Dart once, which is then compiled natively for the target platform. This is a big advantage for teams that want to reduce duplication between Android and iOS apps while maintaining great performance and flexibility.

For native developers accustomed to Kotlin, Java, Swift, or Objective-C, Flutter provides access to platform-specific functionality. The bridge between Dart and native code is called a **MethodChannel**. 

You can think of it as a two-way door: Dart can ask Android or iOS to run some code, and the platform can send results back. The two sides communicate using messages, rather than shared memory, which makes the system simple and secure.

With MethodChannels, you can:

* Call Android and iOS APIs that aren’t built into Flutter.  
* Use advanced third‑party SDKs (e.g., barcode scanners, Bluetooth libraries, custom UI components).  
* Perform operations that need native performance or device-specific access.  
* Return data from the native side into Flutter with low latency.

### Why this matters for native engineers {#why-this-matters-for-native-engineers}

| What you need | How MethodChannel helps |
| :---- | :---- |
| Reach every platform API | You can call any Android or iOS API from Flutter using familiar native code. |
| Keep the app smooth | Messages are encoded in binary and handled asynchronously, so the UI remains responsive. |
| Keep the key code native | You can keep performance-sensitive or secure logic in Kotlin/Swift while building UI in Dart. |
| Bridge advanced SDKs | Integrate with native libraries that do not have Flutter support, without waiting for a plugin. |

You’re not limited by what Flutter provides out of the box. MethodChannels lets you plug in your native knowledge exactly where needed, so you don’t lose years of platform experience when moving to Flutter.


## **What is a MethodChannel?** {#what-is-a-methodchannel?}

A **MethodChannel** is Flutter’s core mechanism for integrating platform-specific functionality. It allows Dart code to send messages to, and receive responses from, the host platform’s native code \- Android (written in Kotlin or Java) or iOS (written in Swift or Objective-C). This enables your Flutter app to access device features and third-party native libraries that are outside the scope of the Flutter framework or its plugin ecosystem. Here is an example of MethodChannel.

```js
class _BatteryLevelScreenState extends State<BatteryLevelScreen> {

  // Define the MethodChannel with a unique name. This name must match the one used on the native side.
  static const platform = MethodChannel('com.example.battery');

  // Variable to hold the battery level.
  String _batteryLevel = 'Unknown battery level.';

  // Method to invoke the native method to get the battery level.
  Future<void> _getBatteryLevel() async {
    String batteryLevel;
    try {
      // Invoke the method on the native side.
      final int result = await platform.invokeMethod('getBatteryLevel');
      batteryLevel = 'Battery level at $result%.';
    } on PlatformException catch (e) {
      // Handle exception if the native code fails.
      batteryLevel = "Failed to get battery level: '${e.message}'.";
    }

    // Update the UI with the retrieved battery level.
    setState(() {
      _batteryLevel = batteryLevel;
    });
  }

```

MethodChannels operate over a named channel using a message-passing model. You define a unique **channel name**, such as `'com.example/device'`, and both the Flutter and native sides agree to use it. On the Dart side, you call a method using `invokeMethod()`, sending an optional payload. The platform side sets up a listener (known as a method call handler) that waits for these invocations, runs native logic, and returns a result.

This message flow is asynchronous and decoupled:

* Dart code doesn’t block while the native code runs; it returns a `Future` that resolves when the result is ready.  
* Native code must explicitly return a result using either `success`, `error`, or `notImplemented`, ensuring consistent feedback.

### Key Concepts {#key-concepts}

* **Channel Name**: A unique identifier string that both Flutter and native code must use. Example: `'com.example/platform'`. Naming collisions should be avoided by namespacing based on your app or organization.  
* **Method Invocation**: Flutter calls `invokeMethod('methodName', arguments)`. The method name is a simple string. Arguments can be null or any value supported by Flutter’s `StandardMessageCodec` (bool, int, double, string, List, Map).  
* **Method Handler**: Native code uses a handler (e.g., `setMethodCallHandler` on Android) to listen for calls and run logic when the specified method name is matched.  
* **Result Callback**: The native handler must return a result via `result.success(...)`, `result.error(...)`, or `result.notImplemented()`. These responses are passed back to Dart, completing the `Future`.

### Example Message Flow {#example-message-flow}

```
Flutter (Dart)
   |
   |  invokeMethod('getBatteryLevel')
   v
Native (Kotlin/Swift)
   - Listens on 'com.example/battery'
   - Matches method name 'getBatteryLevel'
   - Executes logic to read battery level
   - Sends result back: success(85) or error(...)
   ^
   |  Future in Dart completes with 85 or throws PlatformException
   |
Flutter (Dart)
```

This design ensures clear separation between platform and UI logic, and it keeps the UI thread non-blocking for both Dart and native sides. It also makes the communication extensible—you can define as many methods as you need over a single channel or use multiple channels for modular organization.


### When to Use a MethodChannel {#when-to-use-a-methodchannel}

MethodChannel is most appropriate when:

* You need to use Android/iOS APIs not available in Flutter or plugins (e.g., access to specific hardware sensors, native storage APIs).  
* You need to integrate a proprietary or vendor SDK (e.g., analytics, payment, OCR) written for the platform.  
* You need to launch a platform-native UI (e.g., a full-screen scanner or a native file picker).  
* You’re bridging a legacy native feature into a Flutter app or gradually migrating a native app to Flutter.

### What MethodChannels Are Not {#what-methodchannels-are-not}

* They are not **shared memory** \- All data is copied through serialization, not shared by reference. Only standard types are supported (primitives, lists, maps, typed data). Large data transfers require full serialization/deserialization.  
* They are **not synchronous** \- Calls return Futures immediately without blocking. Results arrive asynchronously via the event loop. Platform errors surface as PlatformExceptions when the Future completes.  
* They are **not opinionated** \- You define the API contract (method names, arguments, types) on both sides. There's no compile-time validation across the boundary \- mismatches fail at runtime. Document your contract and validate inputs since type safety isn't enforced.

By understanding these characteristics, you can create robust, maintainable bridges between Dart and native code. You can write minimal, purpose-driven native handlers and keep the rest of your app in Flutter, achieving both deep platform access and cross-platform speed.

## Real-World Use Cases for MethodChannels {#real-world-use-cases-for-methodchannels}

While Flutter plugins cover many common platform integrations, there are frequent scenarios where you require direct access to native SDKs or platform-specific APIs. MethodChannels offer a direct path for these integrations without waiting for third-party plugin support.

Ultimately, method channel integration is essentially plugin development \- you're writing the same native bridge packaged for your app instead of as a public package. Once complete, it can be imported into FlutterFlow. The following examples show when building your own native integration is more practical than waiting for or wrestling with existing plugins. The following examples outline situations where MethodChannels are suitable. 

1. **Accessing Device Hardware Not Exposed by Plugins** 

**Example:** Retrieve mobile network signal strength, advanced battery metrics, or thermal status.

* Low-level APIs like Android's `TelephonyManager` or iOS's `CoreTelephony` are rarely exposed through Flutter plugins.  
* These require direct permission management and native invocation.  
* With MethodChannels, you can call only what you need, without waiting for a plugin update or writing one from scratch.

**Benefit:** Access hardware-level telemetry or diagnostics crucial for field-service apps, testing tools, or enterprise reporting.

2. **Integrating Proprietary SDKs or Vendor Libraries** 

**Example:** Use a third-party identity verification SDK, document scanner, or encrypted storage SDK.

* Many vendors distribute Android/iOS SDKs only and have no Flutter wrappers.  
* A minimal native wrapper and MethodChannel interface let you expose only the needed functionality.  
* Native SDK updates remain decoupled from Flutter UI changes.

**Benefit:** Unlocks core business features (KYC, biometrics, payments) without dependency on plugin authors or external wrappers.

3. **Embedding Native UI Views Temporarily** 

**Example:** Show a native PDF viewer, a camera UI from a vendor SDK, or an AR interface.

* `PlatformView` allows embedding native UI, but it requires more setup and introduces performance tradeoffs.  
* If the native UI is temporary or full-screen, you can invoke it via MethodChannel and return control to Flutter afterward.

**Benefit:** Delivers platform-native experiences where needed while preserving Flutter’s rendering pipeline elsewhere.

4. **Background Tasks and Event-Driven Native APIs** 

**Example:** Respond to geofencing events, push token refresh, or Bluetooth device state changes.

* These use cases originate in native services or background tasks.  
* You can queue or debounce events on the native side and send them to Flutter via MethodChannel when the app is active.  
* For continuous updates, use `EventChannel`, as MethodChannel is ideal for transactional or one-off data transfers.

**Benefit:** Achieves OS-level integration (e.g., location, power, Bluetooth) without polling or Dart-side complexity.

5. **Secure Device Data Retrieval** 

**Example:** Fetch IMEI, MAC address, device fingerprint, or system identifiers.

* These APIs often require special entitlements and native-side permission prompts.  
* Native logic can validate permissions, sanitize data, and decide what’s safe to return.

**Benefit:** Ensures security-sensitive operations remain native-controlled, supporting enterprise, regulated, or BYOD environments.


## Implementing a MethodChannel: Step-by-Step

This section walks through the complete implementation of a MethodChannel, showing how to define the channel in Flutter (Dart), connect it to native platform code, and properly exchange messages, arguments, and results. For native developers used to Android or iOS, this breakdown will show how to bridge Dart and native code in a way that is robust, testable, and production-ready.



### 1. Dart Side (Flutter)

In Flutter, you use the `MethodChannel` class from the `services` package to create a communication path. The Dart side always initiates the call, and the native side responds.

- **Define and Use a Channel:**

```js
import 'package:flutter/services.dart';
const platform = MethodChannel('com.example/device');
```

* The channel name `'com.example/device'` must match **exactly** with the one used on the native side.  
* Channel names should follow a reverse-domain convention to avoid collisions.

**Sending a Method Call:** 

```js
Future<String> getBatteryLevel() async {
  try {
    final int result = await platform.invokeMethod('getBatteryLevel');
    return 'Battery level: $result%';
  } on PlatformException catch (e) {
    return 'Failed to get battery level: ${e.message}';
  }
}
```

* `invokeMethod` sends a string method name and optional arguments to native code.  
* The result comes back asynchronously via a `Future`.  
* Always wrap the call in a `try-catch` block to handle `PlatformException`, which may occur if:  
  * The native method throws an error  
  * The method is not implemented  
  * Data serialization fails

**Notes:** 

* You can pass arguments to `invokeMethod()` as the second parameter (e.g., a `Map<String, dynamic>`).  
* The result can be any JSON-compatible Dart type: `int`, `String`, `bool`, `double`, `List`, or `Map`.

---

### 2. Android Side (Kotlin)

The Android side handles Dart calls using a `MethodChannel` registered in `MainActivity`. This handler runs on the **main thread** by default, so long-running work should be offloaded to a background thread.

**Setting Up the Channel:** 

```js
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel
import android.os.BatteryManager
import android.content.Context
```

**Handling the Method Call:** 

```js
class MainActivity: FlutterActivity() {
  private val CHANNEL = "com.example/device"
  override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
    super.configureFlutterEngine(flutterEngine)
    MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
      call, result ->
      when (call.method) {
        "getBatteryLevel" -> {
          val batteryLevel = getBatteryLevel()
          if (batteryLevel != -1) {
            result.success(batteryLevel)
          } else {
            result.error("UNAVAILABLE", "Battery level not available.", null)
          }
        }
        else -> result.notImplemented()
      }
    }
  }
  private fun getBatteryLevel(): Int {
    val batteryManager = getSystemService(Context.BATTERY_SERVICE) as BatteryManager
    return batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
  }
}
```



**Notes:** 

* Always return a result using one of the following:  
  * `result.success(data)` — returns data to Dart  
  * `result.error(code, message, details)` — throws `PlatformException` in Dart  
  * `result.notImplemented()` — throws `MissingPluginException` in Dart  
* Do **not** call `result` multiple times. Flutter expects a one-time, one-result reply per method call.  
* If your native call involves I/O, network, or anything that blocks, use a background thread:

```js
Thread(Runnable {
  val resultData = longRunningOperation()
  runOnUiThread {
    result.success(resultData)
  }
}).start()
```

---

### 3. iOS Side (Swift)

In iOS, the platform channel is handled via `FlutterMethodChannel` in `AppDelegate.swift`. Similar to Android, the method call handler runs on the **main thread** by default.

**Setting Up the Channel:** 

```js
import UIKit
import Flutter
@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    let controller = window?.rootViewController as! FlutterViewController
    let batteryChannel = FlutterMethodChannel(name: "com.example/device",
    binaryMessenger: controller.binaryMessenger)
```

**Handling the Method Call:** 

```js
    batteryChannel.setMethodCallHandler { (call: FlutterMethodCall, result: @escaping FlutterResult) in
      if call.method == "getBatteryLevel" {
        UIDevice.current.isBatteryMonitoringEnabled = true
        let level = UIDevice.current.batteryLevel
        if level >= 0 {
          result(Int(level * 100))
        } else {
          result(FlutterError(code: "UNAVAILABLE",
                              message: "Battery level not available.",
                              details: nil))
        }
      } else {
        result(FlutterMethodNotImplemented)
      }
    }
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}
```

**Notes:**

* Always return exactly one response per method call.  
* Use `FlutterError` to send detailed error info to Dart.  
* If needed, use `DispatchQueue.global().async` to run long tasks in the background, then return via `DispatchQueue.main.async`.

---

### Best Practices on MethodChannels

To implement **MethodChannels** successfully:

* **Use consistent channel and method names** between Dart and native code.  
* **Use standard types** for data exchange (prefer `String`, `int`, `bool`, `List`, `Map`).  
* **Always handle errors** clearly on both sides.  
* **Offload long-running native logic** to background threads.  
* **Keep the native side minimal and testable**, separating SDK logic from channel code where appropriate.

By following these steps and patterns, you’ll be able to bridge Flutter with native code cleanly—supporting deep platform integrations while maintaining a smooth UI and maintainable codebase.

## Integrating MethodChannels in FlutterFlow Projects

FlutterFlow is a visual development platform that generates complete Flutter applications. While it supports writing custom Dart code through **Custom Actions** and **Custom Functions**, it does not allow direct editing of platform-native code (Kotlin, Swift) through its web UI. This introduces some important considerations when integrating Flutter’s `MethodChannel` API for platform-specific functionality.

**Step 1: Create a Custom Flutter Plugin** 

**1.1 Initialize the Plugin**

Use the Flutter CLI to create a new plugin:  
`flutter create --template=plugin --platforms=android,ios my_custom_plugin`

This command sets up a plugin project with the necessary structure for both Android and iOS platforms.

**1.2 Implement Platform-Specific Code**

Within the generated plugin, navigate to the platform-specific directories (`android` and `ios`) to implement the desired functionality. For example, to retrieve the device's battery level:

* **Android (Kotlin):** Modify `MyCustomPlugin.kt` to access the battery information using Android's `BatteryManager`.  
* **iOS (Swift):** Update `MyCustomPlugin.swift` to utilize `UIDevice` for battery level retrieval.

**1.3 Publish to GitHub**

After implementing and testing your plugin:

* Initialize a Git repository in your plugin directory.  
* Commit your changes.  
* Push the repository to GitHub.

Ensure your `pubspec.yaml` is correctly configured, and consider tagging releases for versioning.

---

**Step 2: Add the Plugin as a Dependency in FlutterFlow** 

To integrate your custom plugin into a FlutterFlow project:

1. Navigate to **Custom Code \> Custom Actions** or **Custom Widgets** in FlutterFlow.  
2. Create a new Custom Action or Widget.  
3. In the **Settings** panel on the right, scroll to **Dependencies**.  
4. Add your plugin using the Git URL:

   `My_custom_plugin:`  
     `git:`  
       `url: https://github.com/yourusername/my_custom_plugin.git`

5. In the code editor, import your plugin:

   `import 'package:my_custom_plugin/my_custom_plugin.dart';`

6. Implement the desired functionality using the plugin's API.

For detailed guidance, refer to FlutterFlow's documentation on [using unpublished or private packages](https://docs.flutterflow.io/concepts/custom-code/#using-unpublished-or-private-packages).

---

**Step 3: Utilize the Plugin via Custom Actions in FlutterFlow**

With the plugin integrated, you can now create Custom Actions to leverage its functionality:

1. Define a new Custom Action in FlutterFlow.  
2. In the code editor, implement the action using your plugin. For example:

   `Future<int> getBatteryLevel() async {`  
     `final batteryLevel = await MyCustomPlugin.getBatteryLevel();`  
     `return batteryLevel;`  
   `}`

3. Compile the custom code to ensure there are no errors.  
4. Use this Custom Action within your FlutterFlow project's action flows, just like any built-in action.

This approach allows you to encapsulate complex logic within reusable actions, enhancing modularity and maintainability.

---

### Managing Private Repositories

If your plugin repository is private, FlutterFlow needs access to it. As per FlutterFlow's documentation, you may need to provide authentication credentials or use SSH keys. Refer to the [FlutterFlow documentation](https://docs.flutterflow.io/concepts/custom-code/#using-unpublished-or-private-packages) for detailed instructions on integrating private packages.



## Common Pitfalls and Debugging MethodChannels

MethodChannels are powerful but require careful implementation. When the Dart and native sides are not aligned, or error handling is overlooked, it often leads to runtime issues or silent failures. This section outlines the most common problems developers face with MethodChannels—especially in projects generated by tools like FlutterFlow—and provides actionable solutions to help you debug effectively and write resilient platform-channel integrations.

---

- **MissingPluginException** 

**Symptom:** Flutter throws a `MissingPluginException`, typically saying the plugin or method is not implemented.

**What it means:** Flutter tried to invoke a method on the MethodChannel, but the native side did not recognize the channel or method name.

**Common causes:**

* Dart `MethodChannel` name does not match the native channel name.  
* Native code handler (`setMethodCallHandler`) was never set up or was incorrectly placed.  
* Custom native code was overwritten when re-downloading a FlutterFlow project without preserving changes.  
* The method was invoked before the Flutter engine or the channel was fully initialized.  
* Hot reload only updates Dart code, but not with native channel implementations. 

**How to fix:**

* Confirm that the channel name is **identical** in Dart and native code (case-sensitive).  
* On Android, ensure the channel is registered inside `configureFlutterEngine()`.  
* On iOS, set up the `FlutterMethodChannel` inside `didFinishLaunchingWithOptions()`.  
* Log the available channels/methods to confirm registration during app startup.  
* Native channel implementations require a full restart because the platform-specific code must be recompiled and relinked.

---

### 

- **Incorrect Argument or Result Types** {#2.-incorrect-argument-or-result-types}

**Symptom:** App crashes with type casting errors or returns `null` unexpectedly.

**What it means:** The data passed between Dart and native does not match expected formats.

**Common causes:**

* Dart sends an argument as a Map but native expects a String, or vice versa.  
* Native code returns a platform object that can't be serialized by Flutter.  
* The return value is not compatible with `StandardMessageCodec`.

**How to fix:**

* Only use standard types: `int`, `double`, `String`, `bool`, `List`, or `Map` with JSON-safe contents.  
* On Dart side, specify the expected return type with generics: `invokeMethod<int>(...)`.  
* On native side, validate input types before using them. Consider using try/catch or safe casting.  
* Avoid sending complex objects like native SDK responses directly—convert to a simple dictionary or string.

---

### **3\. No Response or App Hangs** {#3.-no-response-or-app-hangs}

**Symptom:** The Dart call to `invokeMethod()` never returns, or the UI freezes.

**What it means:** The native side didn’t complete the method call correctly, or a long-running task is blocking the UI thread.

**Common causes:**

* Native method handler fails to call `result.success`, `result.error`, or `result.notImplemented`.  
* The method call handler throws an exception that prevents the response from being sent.  
* Heavy logic (e.g., file I/O, network calls) is blocking the main thread.

**How to fix:**

* Always call one—and only one—of the result callbacks.  
* Wrap native code in try/catch blocks to catch and report any exceptions.  
* Offload slow operations to a background thread or coroutine (Kotlin) or dispatch queue (Swift).  
* Use Dart timeouts or loading indicators to keep the UI responsive while waiting.

---

### **4\. Calling `result` Multiple Times** {#4.-calling-result-multiple-times}

**Symptom:** The app crashes with a runtime error like "Reply already submitted" or shows inconsistent results.

**What it means:** The native code responded more than once for the same method call.

**Common causes:**

* Both success and error branches are executed due to logic errors.  
* Async operations or callbacks race to return multiple responses.  
* A timeout, retry, or exception causes unintended second calls.

**How to fix:**

* Track whether a response has been sent using a flag (e.g., `var responded = false`).  
* Use return statements or guards to prevent multiple result calls.  
* Structure async callbacks carefully to ensure only one callback path runs.

---

### **5\. Debugging Tips by Platform** {#5.-debugging-tips-by-platform}

#### **Flutter/Dart:** {#flutter/dart:}

* Use `print()` or `debugPrint()` to log method calls and results.  
* Always wrap `invokeMethod` in `try/catch` and log exceptions.  
* Add logs before and after `invokeMethod()` to verify flow.  
* Use Flutter DevTools to inspect console logs and application state.

#### **Android (Kotlin/Java):** {#android-(kotlin/java):}

* Use `Log.d("MethodChannel", "Received: ${call.method}")` inside the handler.  
* Use `adb logcat | grep flutter` to filter platform logs.  
* Ensure `configureFlutterEngine()` is actually called—older project setups may require manual configuration.  
* Use breakpoints in Android Studio for step-by-step inspection.

#### **iOS (Swift/Objective-C):** {#ios-(swift/objective-c):}

* Use `print()` or `NSLog()` to trace handler execution.  
* Watch the Xcode console for startup logs or channel registration issues.  
* Ensure you're calling `result(...)` correctly and only once.  
* Check if the `AppDelegate` is properly casting `window?.rootViewController` to `FlutterViewController`.

---

By understanding and anticipating these pitfalls, developers can avoid common errors that derail Flutter-to-native communication. MethodChannels are extremely reliable when implemented correctly, and with structured debugging, most issues can be diagnosed and resolved quickly—even in FlutterFlow-generated apps where visibility into the build system may be limited.

## **Performance and Architecture Best Practices** {#performance-and-architecture-best-practices}

Integrating native functionality through MethodChannels can bring significant value to your app \- but only if it’s done with performance and maintainability in mind. Below are the five most important best practices engineers should apply in real-world production apps, along with deeper insights into why each one matters.

**Important Context for FlutterFlow Users:** FlutterFlow generates clean Dart code and supports Custom Actions for inserting Dart logic, but it does not currently support inline native (Kotlin/Swift) editing.

### **1\. Don’t Block the Main Thread** {#1.-don’t-block-the-main-thread}

* By default, all MethodChannel calls are handled on the **main UI thread**, which is also responsible for rendering the app.  
* Native operations like database access, file I/O, Bluetooth scanning, or network requests **must** be moved off the main thread.  
* Use background threads (e.g., `Executors` or `coroutines` on Android, `DispatchQueue.global()` on iOS) to perform long-running tasks.  
* Return results on the main thread using `runOnUiThread` (Android) or `DispatchQueue.main.async` (iOS).

Blocking the UI thread for even a few milliseconds can cause dropped frames, janky animations, and a visibly unresponsive app, especially on mid-range devices.

**FlutterFlow Tip:** While UI interactions and workflows look smooth inside FlutterFlow, once you export and test the app on a real device, slow operations in Kotlin or Swift can still freeze the app. Always delegate those tasks to background threads before calling back into Dart.

### **2\. Keep MethodChannel Code Minimal** {#2.-keep-methodchannel-code-minimal}

* Your MethodChannel handler should act like a **controller**, not a service. It should delegate execution to well-structured, modular native components.  
* This keeps the interface between Dart and native thin and easy to maintain.  
* For example, `getBatteryLevel` in Kotlin should just delegate to `BatteryService().getLevel()`.  
* This separation helps native teams evolve platform code independently of Flutter UI updates.

Clean separation of concerns leads to better test coverage, easier onboarding, and avoids hard-to-debug cross-layer bugs.

### 

### **3\. Use Only JSON-Compatible Data** {#3.-use-only-json-compatible-data}

* The Flutter engine uses `StandardMessageCodec` for MethodChannel communication.  
* It supports only a limited set of Dart-native types: `int`, `double`, `bool`, `String`, `List`, `Map`, and `null`.  
* Any native types (e.g., `Bitmap`, `Bundle`, `NSData`, `UIColor`) must be converted to a JSON-friendly structure first.  
* If data is complex (e.g., a barcode result or device info), serialize it to a flat Map or a JSON string before sending it across.

Type mismatches across the bridge don’t fail at compile time—they crash at runtime. Keeping your types simple prevents hard-to-diagnose issues.

**FlutterFlow Tip:** When using Dart Custom Actions that invoke MethodChannels, ensure the return values can be used in FlutterFlow bindings. Only supported types (like `String` or `int`) can be stored in App State or used in conditions or widgets.

### **4\. Validate and Sanitize Dart Inputs** {#4.-validate-and-sanitize-dart-inputs}

* Treat incoming Dart method calls like external API requests. Assume they can be malformed.  
* Use pattern matching (switch/case or `when`) to route and verify each method call.  
* Validate presence and type of arguments before using them. For example:

```
val timeout = call.argument<Int>("timeout") ?: return result.error("INVALID", "Missing timeout", null)
```

* Defensive coding helps avoid unexpected behavior, native crashes, or incorrect hardware usage.

Dart developers might call your method incorrectly. Native code must fail safely and visibly.

**FlutterFlow Tip:** Custom Actions in FlutterFlow can include parameters from the UI, but if the parameter isn’t set or passed correctly in a workflow, the Dart code will still execute. Validate these inputs natively before use.

### **5\. Log Clearly on Both Sides** {#5.-log-clearly-on-both-sides}

* Add logging on both Dart and native layers for every MethodChannel call:  
  * What method was called?  
  * What were the arguments?  
  * What was returned, and how long did it take?  
* Use structured logs (`Log.d("MethodChannel", "method=... args=... result=...")` on Android, `NSLog` or `print()` on iOS).  
* Align log timestamps across layers to help trace issues during debugging sessions.

When something goes wrong in production, good logs make the difference between a 10-minute fix and a multi-day investigation.

**FlutterFlow Tip:** Use `debugPrint()` inside Dart Custom Actions to log output alongside platform logs. In test builds, these logs help verify whether native results are arriving as expected.

---

By applying these best practices, you can ensure your MethodChannel integrations remain robust, secure, and maintainable across app updates and platform development.

## **Summary & Guidance** {#summary-&-guidance}

MethodChannels are a foundational tool for extending the power of your app beyond what plugins alone can provide. They allow direct access to platform-native APIs and SDKs, enabling teams to solve tough integration challenges and deliver production-grade features with full control.

But like any system boundary, MethodChannels require disciplined design. Misuse can lead to fragile bridges, performance bottlenecks, and increased maintenance overhead. When implemented thoughtfully, MethodChannels provide:

* A clean interface between Dart and native layers  
* Strategic reuse of platform-optimized SDKs and APIs  
* A clear path to ship advanced features without waiting on plugin ecosystems  
* A sustainable integration model that scales with your team and product

Flutter will continue to evolve with innovative solutions for platform interoperability in the future through two key tools: FFIgen and JNIgen. FFIgen automates the creation of Objective-C and Swift API bindings, while JNIgen handles Java and Kotlin API connections, making native code integration more streamlined and maintainable across platforms.