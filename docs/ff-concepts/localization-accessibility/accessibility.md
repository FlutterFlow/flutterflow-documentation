---
slug: /concepts/accessibility
title: Accessibility
tags: [Accessibility]
keywords: [FlutterFlow, Accessibility, Screen Reader Support, Semantic Labels]
description: Learn how to make your app accessible to everyone.
sidebar_position: 0
---
# Accessibility

Accessibility is about making your app usable for everyone, including individuals with visual, auditory, cognitive, or motor impairments. Ensuring your app is accessible not only benefits users with disabilities but also improves the overall user experience and usability of the app for everyone.

Here are some examples of how accessibility can help users with disabilities:

- **Screen Readers for Visually Impaired Users**: Screen readers like **TalkBack** (Android) and **VoiceOver** (iOS) help visually impaired users navigate and understand the app by reading aloud on-screen content.
- **Large Touch Targets for Motor Impairments**: Large touch targets make it easier for users with motor impairments to interact with buttons and other UI elements.
- **Color Contrast for Visual Impairments**: High-contrast color schemes ensure text and interactive elements are easily readable for users with visual impairments.
- **Keyboard Navigation for Physical Impairments**: Users unable to use touchscreens can navigate the app effectively with keyboard controls.
- **Haptic Feedback**: Tactile responses help users with visual or motor impairments understand when interactions are successful.

In FlutterFlow, you can enhance the accessibility of your app by incorporating various accessibility features, such as semantic labels, keyboard navigation, haptic feedback, responsive fonts, and proper color contrast.

Here are some key accessibility features you can use:

## Semantic Label

You can use **Semantic Labels** to provide custom descriptions, hints, or to emphasize the importance of specific parts of the widget tree. This ensures that screen reader users receive clear and meaningful information about each widget more effectively.

For example, in an e-commerce app, you can add a semantic label to an '*Add to Bag*' button with a message like '*Add the selected item to cart*', which helps users better understand the button's action.

To add a semantic label for any widget, select the widget, move to the properties panel (right side), tap the document icon inside the **Accessibility & Semantic Label** section, add the message, and click **Save**.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/m6KHHlhnbq0NJxHqWH88?embed&show_copy_link=true"
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

Moreover, to add a semantic label for every widget in your app that has an action trigger `OnTap` or `onLongPress`, you can enable the **Add Warning for Semantic Widgets**. By doing so, you'll get a warning if any widget has an action but doesn't have a semantic label added yet.

:::tip

You can click on the warning item to directly navigate to that widget.

:::

![add-warning-for-semantic-widgets.avif](imgs/add-warning-for-semantic-widgets.avif)

After you add semantic labels, enable **TalkBack** on Android or **VoiceOver** on iOS to test how screen readers interact with your app. These screen readers will help you verify that all UI elements are read clearly, descriptions are meaningful, and users can navigate logically without getting lost.

Learn more about [enabling screen reader on your device](https://docs.flutter.dev/ui/accessibility-and-internationalization/accessibility#screen-readers).

## Keyboard Navigation

You can use the [On Shortcut Press](../../resources/ui/pages/page-lifecycle.md#on-shortcut-press-action-trigger) action trigger to bind keyboard shortcuts to specific actions. This makes it easier for users with disabilities to navigate your app, especially in web and desktop environments.

It enhances accessibility by allowing users to interact without relying solely on a mouse or touchscreen, making the experience more inclusive and efficient.

## Haptic Feedback

Using [Haptic Feedback](../alerts-notification/haptic-feedback.md), you can vibrate the user's device, which is particularly helpful for users with visual or cognitive impairments. It provides a tactile response to indicate that an action has been completed.

For example, vibrating the user's device when successfully submitting a form.

## Responsive Fonts

When developing an app, it's important to consider the different platforms on which it will run. Text may appear smaller on devices with higher screen resolution, such as tablets, web, or desktops, which can negatively impact accessibility for users with visual impairments.

[Adding responsive text](../design-system/design-system.md#adding-responsive-text-styles) that adjusts font size based on the platform helps make content more readable, improving accessibility for users who need larger or more legible text.

## Color Contrast

Use sufficient color contrast to make text and interactive elements readable for users with visual impairments or color blindness. This helps ensure that content is easily distinguishable, even for users with limited vision. Learn more about using various ways to [add colors](../design-system/design-system.md#colors) in your FlutterFlow app.

:::tip
You can use tools like [**WCAG Contrast Checker**](https://webaim.org/resources/contrastchecker/) to validate the color contrast ratio.
:::

## Best Practices

- Accessibility should be considered from the start of the design and development process, not added as an afterthought.
- While adding [semantic labels](#semantic-label):
    - Avoid ambiguous labels like "Click here" or "Press this"; instead, use descriptive phrases such as "Submit form" or "Navigate to settings."
    - Instead of just showing an icon, add semantic labels like "Back button" or "Search button" to provide context for screen readers.
- Ensure that interactive widgets have a minimum touch target size of 48x48 logical pixels. This helps users with motor impairments easily interact with buttons, switches, and other components.
- Always test your app with screen readers enabled to verify that it behaves as expected.
- Don't use color as the only means to convey important information. Include text, icons, or patterns to supplement color, making the content accessible to colorblind users.
- Verify your app's UI under high contrast or larger text sizes to ensure it remains readable and usable.
- Use simple gestures like taps and double-taps instead of multi-finger swipes or long presses. Provide alternate ways to perform actions, such as using a button in addition to a swipe gesture.
- Perform usability tests with individuals with disabilities. Real user feedback is invaluable for identifying issues that might not be caught during standard testing.
