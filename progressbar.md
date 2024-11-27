---
slug: progressbar
title: ProgressBar
tags: [Form Elements]
description: Learn how to add ProgressBar widget in your FlutterFlow project.
---

# ProgressBar
The ProgressBar widget is used to represent the progress of any task. You can use the ProgressBar widget to build a UI that shows the downloading or uploading of files, sales this week, hours spent, overall score, etc.

## Adding ProgressBar

Here's how you can add the ProgressBar widget to your project:

1. Add the **ProgressBar** widget by dragging it from the **Base Elements** tab or directly from the widget tree and align it in the center.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Progress Bar Properties** section.
3. Find the **Progress Bar Shape** dropdown and set it to either **Circular** or **Linear**.
    - **Circular**: The ProgressBar is displayed in a Circle shape. This is the default shape set to the ProgressBar.
    - **Linear**: The ProgressBar is displayed in a rectangular shape and laid out horizontally on the screen.
4. To set the progress, find the **Progress Value** input box and enter the value between 0 and 1.0. For example, a value of 0.3 will fill 30% of the portion on the ProgressBar.
5. To change the progress text (displayed in the center), scroll down to the **Text** section, find the Text property, and enter the value.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/i5mkJlJMbyZb4LiZQFkf?embed&show_copy_link=true"
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

## Customizing circular progress bar

The Properties Panel can be used to customize the appearance and behavior of the Circular Progress Bar.

### Changing size

You may want to change the default size of the Circular ProgressBar to match your design. You can do so using the *Diameter* property.

To change the size of the Circular progress bar:

1. Select **ProgressBar** from the widget tree or the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Progress Bar Properties** section.
3. Find the **Diameter** property. Now, there are two ways to change the size:
    - To set to an **exact size,** select **PX** and enter the desired values.
    - To set the size as a **% of the screen size**, select **%** and enter the desired value.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/fj6FUOogYFAxJG7nfAuO?embed&show_copy_link=true"
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

### Changing thickness

Changing the thickness property allows you to change the size of the progress bar belt.

1. Select **ProgressBar** from the widget tree or the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Progress Bar Properties** section.
3. Find the **Thickness** property and enter the value.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/jeAyY0xdzi3INgac33it?embed&show_copy_link=true"
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

### Changing start angle

By default, the progress bar starts filling the progress from the top-center position (i.e., 0 degree). However, you can set it to start the progress bar from a specific angle using the *Start Angle* property.

To change the start angle:

1. Select **ProgressBar** from the widget tree or the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Progress Bar Properties** section.
3. Find the **Start Angle (degree)** property and enter the value in degree. For example, entering a value of 90 fills the progress bar from the right. Whereas the value of 180 fills the progress bar from the bottom.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/99JpuWlT7fQidzQ6BwqW?embed&show_copy_link=true"
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

## Customizing linear progress bar

The Properties Panel can be used to customize the appearance and behavior of the Linear Progress Bar.

### Changing size

You can change the default size using the *Width* property.

To change the size of the Linear Progress Bar:

1. Select **ProgressBar** from the widget tree or the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Progress Bar Properties** section.
3. Find the **Width** property. Now, there are two ways to change the size:
    - To set to an **exact size,** select **PX** and enter the desired values.
    - To set the size as a **% of the screen size**, select **%** and enter the desired value.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/9xNRyCbbIRZXu3xFDXcQ?embed&show_copy_link=true"
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

### Changing thickness

Changing the thickness property allows you to change the height of the progress bar.

1. Select **ProgressBar** from the widget tree or the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Progress Bar Properties** section.
3. Find the **Thickness** property and enter the value.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/u7enthjVYkwcKPG3ofJR?embed&show_copy_link=true"
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

### Changing end radius

By default, the progress bar appears in a rectangular shape. However, you can make it rounded rectangular using the *End Radius* property.

To change the end radius:

1. Select **ProgressBar** from the widget tree or the canvas area.
2. Move to the Property Editor (on the right side of your screen) and scroll down to the **Progress Bar Properties** section.
3. Find the **End Radius** property and enter the value.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ZTLozkXuPWEUEOXx4IX9?embed&show_copy_link=true"
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