---
slug: local-run
title: Local Run
tags: [ ]
description: Local Run downloads the code locally and gives you the option to use Flutter's Hot Reload to see your changes instantly on a device.
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Local Run

You can test your app on a real device using the Local Run feature, which is available in the FlutterFlow Desktop App. Local Run automatically tracks changes in your FlutterFlow project, downloads the code locally, and gives you the option to use Flutter's Hot Reload or Hot Restart to see your changes instantly on a device.

:::info[**Prerequisites**]

Testing on mobile devices requires downloading code, for which you must be on [**paid plans**](https://flutterflow.io/pricing).

### iOS Setup

For iOS app testing on a device or simulator, you need a Mac with Xcode. Follow [**these instructions**](https://docs.flutter.dev/get-started/install/macos/mobile-ios?tab=download#configure-ios-development) to set up your Mac, which includes [**setting up your device for testing**](https://docs.flutter.dev/get-started/install/macos/mobile-ios?tab=download#configure-your-target-ios-device).

### Android Setup

For Android app testing on a device or emulator, configure your machine ([**Windows**](https://docs.flutter.dev/get-started/install/windows/mobile?tab=virtual), [**Mac**](https://docs.flutter.dev/get-started/install/macos/mobile-android?tab=virtual), [**Linux**](https://docs.flutter.dev/get-started/install/linux#android-setup)) by following [**these instructions**](https://docs.flutter.dev/get-started/install/macos/mobile-android?tab=virtual#configure-android-development), which include [**setting up your device for testing**](https://docs.flutter.dev/get-started/install/macos/mobile-android?tab=virtual#configure-your-target-android-device).

:::

## Using Local Run

Here are the steps to use local run:

1. Download the [desktop](https://flutterflow.io/desktop) app and open your project.
2. In the [Toolbar](../../intro/ff-ui/toolbar), click on the **dropdown** next to the *Test Mode* button and click **Setup Local Run**. This will open the setup wizard.
    
    Setup Local Run
    
    https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252F8QYESI6OSZ091n5GjMgZ%252FScreenshot%25202024-03-04%2520at%252010.26.34%2520AM.png%3Falt%3Dmedia%26token%3D88657313-e48b-4820-9f3d-c0f3fe23fe6d&width=768&dpr=4&quality=100&sign=c0fa400f951e2781a47836c607cac1f136c68d09c07e18783b3e501577f2d2e3
    
3. To run the app locally, you'll need the Flutter SDK. Click the **Download** button to download it. **Note** that for iOS, ensure you have *Xcode* and *CocoaPods* installed, select the checkmark, and then click **Download**.
    
    Download Flutter SDK
    
    https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FTHTKP6JoDah1BC3Kw1On%252FFlutterSDK.gif%3Falt%3Dmedia%26token%3D5353b2d3-93fa-45fe-8843-f87815163d51&width=768&dpr=4&quality=100&sign=51385cdcca19b93391194f019cadb1f0f55a5d2f177464fa4726be97a03a4ebb
    
4. Once it's ready to use, click the **Continue** button. This will run the **`Flutter Doctor`** command to check your environment for any issues that might prevent you from running the applications. It performs a series of checks to verify that the necessary tools and dependencies are correctly installed and configured on your system.
    
    Flutter Doctor
    
    https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252Fgz69ryhGr0REPPym8cK9%252FScreenshot%25202024-04-08%2520at%252011.45.18%2520AM.png%3Falt%3Dmedia%26token%3De4092a6e-042b-4e9e-bd1c-d64ad2ad9269&width=768&dpr=4&quality=100&sign=d8abe81c92ba60b39aac086e864a7adf072aea890b56078fee07e3c83e1d7f07
    
5. Optional: You can set up your preferred IDE to open the project code directly from the local run. To do this, select your IDE, **Select Path**, and click **Save**. This feature is useful for debugging and understanding your project code. For this step, ensure you have setup [Flutter SDK](#2-setup-flutter-sdk) and [IDE](#3-installing-ide-and-plugins).

:::info

- The local run uses its own isolated Flutter SDK to ensure consistency and compatibility. The SDK is stored separately from any existing Flutter installations on your system and is automatically used to run your app and open projects in VS Code. For other IDEs like Android Studio, you need to set the SDK path to FlutterFlow's version manually.
- **Please note** that any changes made in the IDE will not sync with the FlutterFlow project and will be overwritten when you hot reload or restart the app.
- The path is the location of the IDE on your computer. On macOS, it's typically in "Applications," and on Windows, it's usually in "Program Files."
- Also, see how to [**access the project code**](#access-project-code).

:::

https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FLC3CZAjmk5PcyRVvnd1f%252FScreenshot%25202024-05-14%2520at%252012.13.48%2520PM.png%3Falt%3Dmedia%26token%3D4f84d136-3f5c-4063-994f-454d4e2f1cf9&width=768&dpr=4&quality=100&sign=070cd520f31604307f5801093b356d205a17e84ef86f24de4c299810c0a60d58

1. You can also specify whether the code exported by local run should be formatted. Disabling code formatting improves the export speed which helps in faster iteration. But if you want to look into the code or make changes, it's recommended to keep this enabled.
    
    https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FUClCNDLiB9cWaqO2306L%252FScreenshot%25202024-05-14%2520at%25201.32.00%2520PM.png%3Falt%3Dmedia%26token%3D58d2b627-6f47-4dde-bc0d-917a5516b60e&width=768&dpr=4&quality=100&sign=fbe40c6ebff272e1170fc8bde7af4c57217e5a02d2980186106c6a65113035d6
    
2. From the test menu, click on the **Get Devices** button. This will list devices connected to your system. You can add or remove devices from the list by clicking on the **+** and **-** buttons, respectively. Once you've finalized your selection, simply click on the **Test** button to see your app running on selected devices. **Tip**: In the Mac OS desktop app, you can directly open the simulator by clicking on the **Launch iOS Simulator** text.
3. After you make a change in your app, open the test menu to access options like **hot reload**, **hot restart**, and **stopping** your app. You'll notice that the test mode button has now changed to the **Hot Reload** button, which you can click anytime to instantly see your changes reflected on your device. *Hot Reload* updates UI instantly without losing its state, while *Hot Restart* recompiles and reloads the entire app, resetting its state. For more info, you can visit [Flutter's Hot Reload documentation](https://docs.flutter.dev/tools/hot-reload).

## Access device logs in local run

Device logs provide a way to access and view the logs generated by your app while it's running on a device or simulator. They are invaluable for understanding the inner workings of your app. If something isn't functioning as expected, the device logs can reveal the reasons behind it.

To access the device logs, first run your app using the local run. Then, open the test menu and click on **Logs** icon. This will display a floating window with detailed logs of the app while it's running.

Open Device Logs

https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252F8Hv8gMtYDBLE4Aqehrlf%252FScreenshot%25202024-02-26%2520at%252012.13.34%2520PM.png%3Falt%3Dmedia%26token%3Da35610e6-1a2e-4d43-af35-90f0ae97c513&width=768&dpr=4&quality=100&sign=eacbc1eab4fa4d27dd85a97aad120654b8f4294693dd402853db46e1f9693019

In the example below, we have a custom action that prints the debug messages in the device logs whenever the values change in the TextField widget.

### Console input

The console input in local run is particularly useful for performing hot reload and hot restart directly from the device logs. To initiate a hot reload, press `r` followed by `Enter`, and for a hot restart, press `R` followed by `Enter`. Additionally, any terminal commands commonly used with Flutter while running an app should work with the console input.

### Checking errors

Any errors displayed in the red box on your screen are also recorded in the Device logs, where you can find detailed information about the app's state and the events leading up to the issue.

Checking errors

https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FUdzo92WVtktDhMW6yfY1%252Fchecking-flutter-runner-errors.png%3Falt%3Dmedia%26token%3Dfb939faa-1add-4461-a968-40622e240f0b&width=768&dpr=4&quality=100&sign=c55c619c2aae2504e80ae4683b1eaf6cddda9b22595f05d1ee06aaded9554a96

## Reconfigure local run setup

If you need to update the Flutter SDK version, run Flutter Doctor, or start the simulator again, simply open the test menu and click **Configure**.

<Tabs>
  <TabItem value="running" label="When app is running" default>
    https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FzSXRcGTnfpS3yyIe9XnY%252FScreenshot%25202024-03-04%2520at%25201.27.34%2520PM.png%3Falt%3Dmedia%26token%3Da3148a7f-6d7e-4ec9-9146-babf364f8039&width=768&dpr=4&quality=100&sign=67f90fa2056d50c84e51212ed157ca97e5e5f1d1b8da5c7abd7e115b87e0f2e1
  </TabItem>
  <TabItem value="notRunning" label="When app is running">
    https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FzSXRcGTnfpS3yyIe9XnY%252FScreenshot%25202024-03-04%2520at%25201.27.34%2520PM.png%3Falt%3Dmedia%26token%3Da3148a7f-6d7e-4ec9-9146-babf364f8039&width=768&dpr=4&quality=100&sign=67f90fa2056d50c84e51212ed157ca97e5e5f1d1b8da5c7abd7e115b87e0f2e1
  </TabItem>
</Tabs>


## Access project code

To access the project code, open the test menu and ensure the project is not running. Click on the code icon(''), and you'll be presented with options to either open the project folder, project in your preferred IDE or directly launch the project in Xcode (for macOS users).

Access project code

https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FPrp3p4mP5UtjSxgxu3Yq%252FScreenshot%25202024-04-08%2520at%25203.48.50%2520PM.png%3Falt%3Dmedia%26token%3D98e32761-6169-4a47-bb96-8b7f66d298eb&width=768&dpr=4&quality=100&sign=4ad6134565ec051e7256bd964fb358ba1a29ad74a944cdb1a6926da57960933a

## Manually download code and run

There may be certain situations where you, as a developer, may prefer not to have local runs overwrite any changes that have been made in the code. In such cases, you can manually download the code onto your local system and then make any modifications as needed.

Here’s how you do it:

1. [Download code](#1-download-code)
2. [Setup Flutter SDK](#2-setup-flutter-sdk)
3. [Installing IDE and Plugins](#3-installing-ide-and-plugins)
4. [Running app on device](#4-running-app-on-device)

### 1. Download code

:::warning

- This feature is only included in our *Standard* and *Pro* plans.
- Make sure to address any project issues before downloading the code.

:::

To download your app code, you have two options:

- Use the [FlutterFlow CLI](../exporting-code/ff-cli.md). (Recommended)
- Alternatively, from the **Toolbar**, click on the **Developer Menu** > **Download Code**. This will download the *.zip* file. Extract the *.zip* file to view the contents of the project.

### 2. Setup Flutter SDK

You can download the latest Flutter SDK from [here](https://docs.flutter.dev/get-started/install). However, we recommend using the Flutter SDK downloaded by the [local run](#using-local-run), whether you have already downloaded the Flutter SDK or not. This approach ensures compatibility with FlutterFlow projects and helps you avoid issues arising from version differences.

To do this, copy the Flutter SDK path (click 'this path' button) from the local run and [add it to your system path](#command-not-found-flutter-add-flutter-to-systems-path).

https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FAXD3aDHMHjNpilcOk9Td%252Fcopy-FlutterSDK-path.png%3Falt%3Dmedia%26token%3Df4617106-2a6c-4afb-9389-d58c403488b0&width=768&dpr=4&quality=100&sign=3da43c562cfc391ee96715e18135bb28e59bae4508e8862976b3e7b7a6dbe2e8

If you prefer to use your existing Flutter SDK, you can follow the steps below to avoid any versioning issues:

1. Take note of your FlutterFlow project version.
    
    https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FSSp9aODEMR6Aj56cuL5I%252FScreenshot%25202024-03-18%2520at%25201.43.41%2520PM.png%3Falt%3Dmedia%26token%3Da60324c1-7252-4e19-9019-d5c2b14d9f60&width=768&dpr=4&quality=100&sign=5105ac3c367ff2fe2062932328f547deb0676eba65afd625a3584c1c5054dd02
    
2. Check your current Flutter SDK version by entering the following command in the terminal. `flutter --version`
3. If that is different from what FlutterFlow uses, you may need to switch to the supported version.
4. To install a specific version of Flutter, use the following command:
    1. To **downgrade** flutter version:
        ```
        flutter downgrade <version_number>
        ```
        
    2. To **upgrade** flutter version:
        

        
        ```
        flutter upgrade --force <version_number>
        ```
        
    
    Replace `<version_number>` with the version supported by FlutterFlow.
    

### 3. Installing IDE and Plugins

You can choose to install either [Visual Studio Code](https://code.visualstudio.com/) or [Android Studio](https://developer.android.com/studio) as the IDE for your project. With either IDE, you also need the official Flutter and Dart plugins that provide you with code completion, syntax highlighting, widget editing assistance, run & debug support, and more.

- To install Visual Code with Flutter and Dart plugins, check out [this link](https://flutter.dev/docs/get-started/editor?tab=vscode).
- To install Android Studio with Flutter and Dart plugins, check out [this link](https://flutter.dev/docs/get-started/editor?tab=androidstudio).

### 4. Running app on device

You can choose to run your app on a real device or an emulator.

To run your app on a device:

1. First open the downloaded project in your preferred IDE.
2. For **VS Code**:
    1. Go to the "View" menu -> select "Terminal" from the dropdown.
    2. Run the command `flutter pub get`.
    3. Now, enter the command `flutter run`. VS Code will build and run your app. You'll see the output in the terminal, and the app should launch in the selected emulator or physical device.
3. For **Android Studio**:
    1. Open the terminal within Android Studio by clicking "View" -> "Tool Windows" -> "Terminal."
    2. Run the command `flutter pub get`.
    3. Click the green "Run" button (a right-facing triangle) located in the top toolbar. Choose the target device (emulator or physical device) where you want to run the app. Android Studio will build and run your app. You'll see the output in the "Run" panel at the bottom, and the app should launch in the selected emulator or device.
- If your device is not listed in the **Flutter Device Selection** dropdown, make sure you have properly completed the Android and iOS setup.
- If you encounter a version compatibility issue with Flutter, you can resolve it by upgrading to the latest version. Simply execute the `flutter upgrade` command in your terminal. To verify your current Flutter version, use the `flutter --version` command.


## Run on Desktop

Running your app on a Desktop involves:

1. **Adding platforms**: Navigate to **Setting and Integrations** from the Navigation Menu > **Project Setup** > **Platforms** and enable your desired platform.
2. **Make design adjustments (optional)**: If you plan to target both mobile and desktop users, some design adjustments may be necessary to ensure that the UI is optimized for both platforms. You can create separate widgets for different platforms and control their visibility using [Responsive Visibility](#).
3. **Run the app on a desktop**: Use the Local Run feature in the FlutterFlow Desktop app or manually download and run the code, choosing your target device (e.g., macOS) before running.

## Video guide

If you prefer watching a video tutorial, here's the one for you:

## Troubleshooting

### Command not found: flutter (add Flutter to system's path)

If you downloaded Flutter via local run, it might not be added to your system's path. You'll need to get the Flutter SDK directory and add it to your path manually.

<Tabs>
  <TabItem value="ForMac" label="For Mac" default>
        1. From the [local run](#using-local-run) wizard, open the 'Configure IDE' step and click on 'this path' to get the Flutter SDK path.
            
            https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FvA4TsnHB8BfCGLqi0ttX%252FScreenshot%25202024-05-14%2520at%25201.28.10%2520PM.png%3Falt%3Dmedia%26token%3D827da773-0d00-40dc-9986-6b85615cc8bc&width=300&dpr=4&quality=100&sign=1911bdd29811f5c3098598af3f6b20de35abf4df457e9e0405ecfeb807b5f144
            
        2. Open the Terminal and run the following command to open your `.zshrc` file (or `.bash_profile` if you're using Bash):
            
            
            
            ```
            open -e ~/.zshrc
            ```
            
        3. Add path at the end of the file. It should look something like this:
            
            
            
            ```
            export PATH="$PATH:$HOME/Library/Application Support/io.flutterflow.prod.mac/flutter/bin"
            ```
            
        4. Save and close the file.
        5. Run the following command to apply the changes:
            
            
            
            ```
            source ~/.zshrc
            ```
            
        6. Restart your terminal and try running the `flutter` command again.
  </TabItem>

  <TabItem value="ForWindows" label="For Windows">
    1. From the [local run](#using-local-run) wizard, open the 'Configure IDE' step and click on 'this path' to get the Flutter SDK path.
    
    https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252FvA4TsnHB8BfCGLqi0ttX%252FScreenshot%25202024-05-14%2520at%25201.28.10%2520PM.png%3Falt%3Dmedia%26token%3D827da773-0d00-40dc-9986-6b85615cc8bc&width=300&dpr=4&quality=100&sign=1911bdd29811f5c3098598af3f6b20de35abf4df457e9e0405ecfeb807b5f144
    
    2. Right-click on the Start menu and select "System".
    3. Click on "Advanced system settings" and then "Environment Variables".
    4. Under "System variables", find the "Path" variable and click "Edit".
    5. Click "New" and add the path to your Flutter SDK.
    6. Click "OK" to save your changes.
    7. Restart your command prompt and try running the `flutter` command again.
  </TabItem>
</Tabs>



### Device not showing in the list

If you don't see your device in the list after refreshing, follow these steps:

1. Ensure you have added [Flutter to your path](#command-not-found-flutter-add-flutter-to-systems-path).
2. Open the Terminal and run the following command:
    

    
    ```
    flutter devices
    ```
    
    This will list all connected devices that the Local Run recognizes.
    
3. If you still don't see your device, try restarting it.
    1. **For iOS**: Open Xcode, go to the "Window" menu, select "Devices and Simulators," choose your simulator, and click "Restart."
    2. **For Android**: Open the Android Studio > Device Manager, choose your emulator, and click the "Play" button.
        
        https://docs.flutterflow.io/~gitbook/image?url=https%3A%2F%2F468516190-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MhFNOxEwcl8ED58MUC_%252Fuploads%252Fe2vJj54atBFz49xKQWQr%252Frestart-android-emulator.gif%3Falt%3Dmedia%26token%3D6580f0b6-a280-4313-b055-9e76b08a9d8d&width=768&dpr=4&quality=100&sign=13f61d76c077752e4f9db4e472b7e8c0fe296a7ae3db62b4930fbad7fa54f5b9
        
    3. You can also restart the emulator directly from the command line using Flutter:
        
    
        
        ```
        flutter emulators --launch <emulator_id>
        ```
        
        **Note** that replace `<emulator_id>` with the ID of your emulator. You can find the ID by running `flutter emulators`.
        
4. Try running `flutter devices` again.

---

### Xcode warning "Runner.xcworkspace modified"

If you encounter a warning from Xcode stating:

> "The file 'Runner.xcworkspace' has been modified by another application."
> 

This warning can usually be safely ignored. It typically occurs when multiple tools or processes (such as FlutterFlow local run and Xcode) modify the project files simultaneously. Here's what you can do:

1. **Save Your Work**: Ensure that you've saved any changes you've made in Xcode.
2. **Close and Reopen**: Close the warning prompt and, if necessary, close and reopen Xcode to refresh the project files.
3. **Clean the Build**: If the warning persists, try cleaning the build folder in Xcode by going to "Product" > "Clean Build Folder."
4. **Flutter Clean**: You can also run `flutter clean` in your terminal to clean the build cache for your project, which can sometimes resolve issues related to outdated or conflicting files.

---

Also, see [how to troubleshoot issues using device logs](#).

## FAQs

### Can I export the project as a Flutter Module?

Yes, you can export your project as a Flutter module. Here's how:

1. Activate the FlutterFlow CLI by entering `dart pub global activate flutterflow_cli` in your terminal.
2. Use the command below to export your project and substitute `<project id>`, `<output folder>`, and `<token>` with your specific project details:



```
flutterflow export-code --project <project id> --dest <output folder> --include-assets --token <token> --as-module
```

If you wish to exclude assets from the export, use `--no-include-assets` in your command. This will export the project code without the assets.

For example:
`flutterflow export-code --project your_project_id --dest path_to_output_folder --no-include-assets --token your_token --as-module`

You can then follow the instructions for [Android](https://docs.flutter.dev/add-to-app/android/project-setup) and [iOS](https://docs.flutter.dev/add-to-app/ios/project-setup) to add the module to your main app.