---
slug: /deployment/deploy-from-github
title: Deploy from GitHub
description: Learn how to deploy your apps directly from GitHub branch.
tags: [Apple App Store, Google Play Store, Deployment, GitHub]
sidebar_position: 5
keywords: [Apple App Store, Google Play Store, Deployment, GitHub]
---

If your FlutterFlow project is connected to a GitHub repository, the generated code can be pushed to GitHub, giving you full control over your project’s code. Then, you can deploy your app directly from the same repository, rather than deploying through FlutterFlow.

Deploying from GitHub is particularly beneficial when:

- You have written custom code that cannot be managed directly in FlutterFlow, such as features that require advanced Flutter functionality.
- You want to manage the source code in an external GitHub repository for better version control.
- You want to automate the process of deploying your app directly from GitHub to the Play Store or App Store after modifying the code.
- You want to deploy from a specific branch of your GitHub repository.

## Steps to Deploy

To deploy from a GitHub repository:

1. If you haven't already added your project to the GitHub repository, follow the instructions provided [here](../exporting-code/push-to-github.md#connect-a-github-repo).
2. In FlutterFlow, go to **Settings & Integrations > App Settings > Mobile Deployment.**
3. Locate the **Deployment Source** section and click the arrow icon on the right to expand it.
4. Turn on the toggle for **Use GitHub repo: [your repo URL]**.
5. Enter the branch name of your repository that contains the code you want to deploy. Ensure the branch name is correct.
6. Click the **Deploy to App Store** or **Deploy to Play Store** button, depending on your desired platform for deployment.

![deploy-from-github](../imgs/deploy-from-github.png)

:::info[important]

When deploying from your GitHub branch, you will need to manage the app versioning manually. This is done through the `pubspec.yaml` file. For example, to set the version to **1.1.0** and the build number to **2**, you can use the format: `version: 1.1.0+2`.

![update-version.avif](../imgs/update-version.avif)

:::

## FAQs

<details>
<summary>I am having an issue while Deploying from a GitHub branch. Error: *You uploaded an APK or Android App Bundle that was signed in debug mode. You need to sign your APK or Android App Bundle in release mode.*</summary>
<p>

If you are experiencing problems deploying or uploading to the Google Play Store from a Github branch, check to make sure your `build.gradle` file is correct.

1. Open your `android/app/build.gradle` file.
2. Ensure your file has these lines of code:

    ```
    def keystoreProperties = new Properties()
    def keystorePropertiesFile = rootProject.file('key.properties')
    if (keystorePropertiesFile.exists()) {
        keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
    }
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    ```

3. Newer Flutterflow code will automatically have these lines added. If yours doesn't, you can push it to your `flutterflow` branch on GitHub and merge in the changes or add them like so:

    ![deploy-github-issue](../imgs/deploy-github-issue.avif)


4. Lastly, change `debug` (shown in the red box above) to `release` before deploying.
</p>
</details>