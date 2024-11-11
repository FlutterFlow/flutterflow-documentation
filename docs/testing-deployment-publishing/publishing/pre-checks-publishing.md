---
slug: /deployment/pre-checks-before-publishing
title: Pre-checks Before Publishing
description: Ensure your app is ready for launch with this detailed guide on essential pre-publishing checks.
tags: [Pre-checks, Publishing, Deployment]
sidebar_position: 1
keywords: [Pre-checks, Publishing, Deployment, FlutterFlow]
---

# Pre-checks Before Publishing

This page outlines the important steps and checks to be made before publishing your app. These steps are crucial to ensure that your app works as expected, meets platform guidelines, and to gather preliminary feedback.

Here’s a comprehensive list of these prechecks:

1. **Functionality Testing**: Test the app manually across devices. You can also implement integration tests using FlutterFlow’s [**Automated Tests**](../testing/automated-tests.md) framework to cover various scenarios.

2. **Get Feedback**: Run your app in Run Mode to generate a shareable link to the session. You can share these links to gather feedback from users and testers, providing valuable insights and potential areas of improvement before the public release.
3. **Optimizations & Enhancements**: Improve performance by implementing [optimization and enhancement](../../intro/ff-ui/toolbar.md#optimizations--enhancements) suggestions. Ensure that images are properly sized, consider using higher compression for assets, and remove unused assets and custom widgets. These will help improve your app's speed and size.
4. **User Interface:** Check UI consistency across different screen sizes and resolutions using the [Canvas Size](../../intro/ff-ui/canvas.md) option.
5. **Accessibility Checks**: Add semantic labels to make the app more accessible to users with disabilities by providing meaningful descriptions.
6. **Security Measures**: Make sure all data handling practices comply with legal standards, including GDPR if applicable. Use HTTPS for all network connections and ensure that sensitive data is encrypted.
7. **Compliance with Store Guidelines**: Review the submission guidelines for [Apple’s App Store](https://developer.apple.com/app-store/review/guidelines/) and [Google Play Store](https://play.google/developer-content-policy/). Check for any specific requirements such as app metadata, privacy policies, and minimum functionality.
8. **Localization and Internationalization**: If your app targets users in multiple countries, consider [adding multi-language](../../ff-concepts/localization-accessibility/localization.md) support.
9. **License and Third-Party Attributions**: Adhere to licenses and include necessary attributions for third-party libraries and assets.
10. **Prepare Marketing Assets**: Prepare all the necessary marketing assets, such as screenshots, app icons, and promotional text. You can easily [generate screenshots](../publishing/pre-checks-publishing.md#generate-screenshots) right within FlutterFlow.

---

## Generate Screenshots

Alongside crafting beautiful apps, you can also generate screenshots for your mobile app right within the builder. Screenshots are captured in all the recommended device sizes required for publishing to the App Store and Play Store.

:::info

If pages are rendered using a **WebView** widget, the generated screenshots will appear blank.

:::

Let's explore how to generate screenshots for your app:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/PgdOhHS8UBVdVTrem2Fy?embed&show_copy_link=true"
        title="Sharing a Project with a User"
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