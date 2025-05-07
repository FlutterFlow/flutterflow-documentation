---
keywords: ['widget', 'auto', 'size']
author: Unknown
created_at: '1652086430'
slug: /auto-size-is-not-working-for-the-text-widget
title: Auto Size is not working for the text widget?
updated_at: '1652801650'
url: https://intercom.help/flutterflow/en/articles/6201662-auto-size-is-not-working-for-the-text-widget
---
# Auto Size is not working for the text widget?

Have you enabled Auto Size on your text widget, but the text is not autosizing as expected?

![](../../assets/20250430121459400158.png)**Check That Your Text Widget Is Placed Inside Of A Widget With A Defined Height And Width**
In order to work correctly, the Text widget needs to be placed in a widget with a defined height and width (e.g. Stack or Container). This way the Text widget "knows" how much it should reduce the font size to fit the frame.

Click on your Text widget and then locate the parent widget it is placed inside. Check to see if the parent widget has a defined width and height. If not, you will need to add this.

Below are some examples of how Auto Sizing will impact how Text looks in your app. Each of these examples uses the same Container and Text Widget. The only difference is the properties that are enabled.

A container with width inf, and height 100px, autosize **not enabled** on the Text widget.

A container with width inf, and height 100px, autosize** enabled **on the Text widget. You can see the text widget font size has been reduced.

A container with a width of 30% and **no height defined**, autosize enabled. Auto size is enabled, but is not working because the container has no height defined.

A container with a width of 70% and height of 50px, autosize enabled. In this case the space is not enough for the text, so the text size is reduced to its limit.

![](../../assets/20250430121459696014.png)
**Tip: **Auto Size can be very useful when you are using % width and % height for responsive UIs. You can simply set your container width to 30% and auto size text inside it. This way if the width of the page grows in bigger screen sizes the text will "grow" with the larger screen size.​
**Tip:** Font size reduction has limits and can only be reduced so far. You may face issues if you try to use extremly tiny text.So next time you want to ask a text widget auto size, don't forget to tell it how much 😀
​