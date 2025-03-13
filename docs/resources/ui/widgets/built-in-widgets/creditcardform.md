---
slug: credit-card-form
title: CreditCardForm
tags: [Form Elements]
description: Learn how to add CreditCardForm in your FlutterFlow app.
---
# CreditCardForm
The CreditCardForm widget allows users to enter their credit card details such as card number, expiry date, and CVV.

:::tip[Widget State]
Before diving into form widgets, check out our guide on [**Widget States**](../../../../ff-concepts/state-management/widget-state.md) to efficiently manage the state and behavior of your form elements.
:::

## Adding CreditCardForm widget

Here's an example of how you can add the CreditCardForm widget to your project:

1. First, drag the **CreditCardForm** widget from the **Form Elements** tab (in the Widget Panel) or add it directly from the widget tree.
2. When you type in, the card number gets obscured (number becomes •, i.e., dot). To disable this feature and allows users to see the full number, move to the properties panel, find the **Obscure Card Number** toggle and turn it off.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/6Dts9CnoGLcjV7yfd18t?embed&show_copy_link=true"
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

## Customizing

You can customize the behavior and appearance of this widget using the various properties available under the properties panel.

### Obscuring CVV

By default, the CVV number is visible when you type in. It's essential that you obscure (number becomes •, i.e. dot) it.

To obscure the CVV:

1. Select the **CreditCardForm** widget from the widget tree or the canvas area.
2. Move to the properties panel, find the **Obscure CVV** toggle and turn it on.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/I2IW77H5hutQeJ3lb1M2?embed&show_copy_link=true"
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

### Adding background color

To change the background color of the fields:

1. Select **CreditCardForm** from the widget tree or the canvas area.
2. Move to the Properties panel and scroll down to the **Input Decoration Properties** section.
3. Find the **Fill** toggle and turn it on.
4. Now find the **Fill Color** property, click on the box next to **Unset**, select the color, and then click **Use Color** or click on **Unset** and enter a Hex Code directly. You can also choose the color by clicking on the Palette and Simple buttons.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/ljPUAPoTnnzbIuHmY36Z?embed&show_copy_link=true"
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

### Customizing border

To customize the border around the credit card fields:

1. Select **CreditCardForm** from the widget tree or the canvas area.
2. Move to the Properties panel and scroll down to the **Input Decoration Properties** section.
3. Select from the **Input Border Type** dropdown.
    1. Choose **Outline** to place a border around the entire field.
    2. Choose **Underline** to place a border only on the bottom of the field.
    3. Choose **None** to eradicate the border.
4. Scroll down a bit to find the **Border Color** property, click on the box next to the already selected color, select the color, and then click **Use Color** or click on an already selected color and enter a Hex Code directly. You can also choose the color by clicking on the Palette and Simple buttons.
5. Find the **Border Width** property below, and enter the desired value.
6. Now, Enter the **Border Radius** property and enter the value as 50. By default, the value 50 will be set for all corners, which are TL (Top left), TR (top right), BL (bottom left), and BR (bottom right). Click on the lock icon to change each corner separately.
    
<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DITM2NAdDCig4ROcCNBb?embed&show_copy_link=true"
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

### Add content padding

Content padding adds space between the field text and the border.

To add the content padding:

1. Select **CreditCardForm** from the widget tree or the canvas area.
2. Move to the Properties panel (on the right side of your screen) and scroll down to the **Input Decoration Properties** section.
3. Find the **Content Padding** property and enter the values for L(left), T(top), R(right), and B(bottom) input boxes.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/yo2Ed2Vh5ekDiTi9D3XK?embed&show_copy_link=true"
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

### Reducing field height

You might want to reduce the field height to match your design. Using the dense property, you can reduce the field height to a predefined size.

To reduce the field height:

1. Select **CreditCardForm** from the widget tree or the canvas area.
2. Move to the Properties panel (on the right side of your screen) and scroll down to the **Input Decoration Properties** section.
3. Find the **Dense** toggle and turn it on.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/S8XU621PWxQIEyiuPe8Q?embed&show_copy_link=true"
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