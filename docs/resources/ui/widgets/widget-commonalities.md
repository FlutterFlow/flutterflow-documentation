---
title: Common Widget Properties
sidebar_position: 6
---

# Common Widget Properties

While working with widgets, you may find some features or properties that are common across various widgets. This page will guide you on how to implement these common functionalities or modify properties that are applicable to multiple widgets.

Here are the properties: you can also use the links on the right side to navigate to a property. 

## Use keyboard to increase/decrease property value

You can adjust the property value using your keyboard's up and down arrow keys. **Tip**: Use the shift key in combination with the arrow keys, which increments or decrements the value by 10 units at a time.

<div class="video-container"><iframe src="https://www.loom.
com/embed/1f05c381a73d457b94d19a84eca07b05?sid=a12ead9c-f725-4147-94ca-4303f1521dc2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Visibility

### Conditional

Conditional visibility allows you to control the display of UI elements (i.e., widgets) based on certain conditions or criteria. It enables you to create dynamic and personalized user experiences by showing or hiding specific content or features.

For example, using this, you could display features, options, or actions based on the user's role or permissions, such as admins might see admin-only controls.

Let's see how to add conditional visibility with an example that allows users to add doctors to their favorites list only if logged in. In essence, the favorite icon will only be displayed for logged-in users.

Here's what the final result looks like:

<figure>
   ![icon-img.png](..%2Fimgs%2Ficon-img.png)
  <figcaption class="centered-caption">Left side: user not logged in | Right side: user logged in</figcaption>
</figure>


Here are the steps:

1. Select the widget from the widget tree or canvas area. 
2. Move to the properties panel > enable Conditional. 
3. Click on the Unset and provide the condition that determines whether a UI element should be displayed or hidden. For this example, we'll directly use the Is User Logged In global property. This will show the widget if the user is logged in.

4. You can toggle Show in UI Builder to test the effect of showing/hiding that widget in the UI builder. Note that this option is only to help you visualize the effect of visibility on the widget, and it does not affect your app.

<div class="video-container"><iframe src="https://www.loom.
com/embed/f510565b464c4fb8903c0b6993fc8c20?sid=ceb9de2e-af71-4ba0-b888-b6d4e47d60f6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



### Responsive Properties

When developing user interfaces with widgets, you'll notice certain properties and features that are universally applicable. This section provides guidance on adjusting these shared attributes across different widgets.

Below are the common properties; you can use the navigation links on the right to quickly access detailed information about each property.

<figure>
    ![img_1.png](..%2Fimgs%2Fimg_1.png)
  <figcaption class="centered-caption">The navigation menu on the web and mobile</figcaption>
</figure>


You can achieve this by creating two separate widgets and setting their responsive visibility (under the properties panel).

In the example above, the navigation menu created for the web or desktop (on the left side) is made visible only on a wider screen by enabling the desktop icon. Similarly, the navigation menu for the mobile (on the right side) is made visible only on a small screen by enabling the mobile icon.

Here is how it is done:

<figure>
    ![img_2.png](..%2Fimgs%2Fimg_2.png)
  <figcaption class="centered-caption">Responsive visibility for mobile</figcaption>
</figure>

<figure>
    ![img_3.png](..%2Fimgs%2Fimg_3.png)
  <figcaption class="centered-caption">Responsive visibility for web</figcaption>
</figure>

#### Customize Responsive Breakpoint

Sometimes, you might want to override the default responsive breakpoint to suit unique requirements; whether it's accommodating a specific device or catering to a particular user experience, having the flexibility to customize breakpoints can be advantageous.

To customize responsive breakpoints, open **Theme Settings** (from the navigation menu) **> Design System > Breakpoints** and change the values.

For example, if you define a custom breakpoint at 575 pixels, positioning it between the 'Mobile' and 'Tablet' range. In this case, when your app is accessed on a screen larger than 575 pixels, the layout will be adjusted as per the Tablet configuration.

<div class="video-container"><iframe src="https://www.loom.
com/embed/33f17613e5704e0b9d23629c243232c0?sid=1d862e15-2047-4184-af29-a1b4676fe4ba" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


Furthermore, you can utilize these breakpoint values throughout your app to tweak the widget properties based on the screen size. For example, you might set different width and height values for a Container widget depending on whether the screen size matches with small, medium, or large.

You can access the breakpoint values via the *Set from Variable* menu. Here's an example of setting the Container width based on the screen size.

<div class="video-container"><iframe src="https://www.loom.
com/embed/0948b7c763374e3ea6aa3b995aceaab6?sid=0c1b6253-193a-4df4-85e0-ba1450165850" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



### Opacity

Controlling the opacity of any widget opens up a plethora of creative opportunities. For instance, you can create an aesthetically pleasing effect using transparent buttons, dynamic themes, overlay effects, etc.

You can control the transparency from **Properties Panel > Visibility > Opacity** property. It accepts value between 0 and 1. e.g., 0 means full transparency, one is opaque, and 0.5 is half transparent.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/O8ASuMBKvtS8DOuDFZVo?embed&show_copy_link=true"
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

## Padding & Alignment

### Add padding

Padding is the empty space around the outer side of the widget.

To add a padding:

1. Select the widget from the widget tree or from the canvas area.
2. Move to the [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) and navigate to the **Padding & Alignment** section.
3. Enter values for Left (L), Top (T), Right (R), Bottom (B).
4. To apply the same padding on all sides, switch to the **Uniform Padding** option. You can then adjust the padding by either moving the slider or entering the desired value directly.
5. Use the refresh icon button to reset all values.

<div class="video-container"><iframe src="https://www.loom.
com/embed/ebe08aa5510f4acdb9915d94191a0dae?sid=477f0152-0351-47d2-a912-6631d8a36b15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

If you prefer watching a video tutorial, here is the guide for you:

<div class="video-container"><iframe src="https://www.youtube.
com/embed/iMc1m-l7eyw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



### Adjust Alignment

This property helps you position the widget in two ways.

**Horizontal Alignment** determines where the widget will be placed horizontally inside of its parent. A value of -1 will place the widget to the left, while a value of 1 will place the widget to the right.

**Vertical Alignment** determines where the widget will be placed vertically inside of a parent. A value of -1 will place the widget at the top, while a value of 1 will place the widget at the bottom.

To change the alignment:

1. Select the widget, and head over to [Properties Panel](../../../intro/ff-ui/builder.md#properties-panel) **> Padding & Alignment** section.
2. Use the alignment box to align the widget at a fixed position or directly enter a value in the **Horizontal** and **Vertical** input box.

<div class="video-container"><iframe src="https://www.loom.
com/embed/7fa1d8caf5b84f7c89bc7d95ee8dbd85?sid=02ca8efe-b4d7-4e3b-b1f2-14e767f0d403" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

If you prefer watching a video tutorial, here is the guide for you:

<div class="video-container"><iframe src="https://www.youtube.
com/embed/vuJ2fTnYyCM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



## Testing Widgets

This property enables you to specify the **Value Key** for the current widget, which serves as a reference point during automated test runs. Please refer to the detailed guide provided [here](../../../testing-deployment-publishing/testing/automated-tests.md).

## Set Width & Height Properties

To change the size, navigate to the **Width** and **Height** properties, and then you have three choices for setting the size:

* For a specific size, choose **PX** and type in the size you want.
* For a size based on the screen, choose **%** and type in the percentage.
* To make the widget fill the whole screen width or height, click on the infinity symbol (**∞**).

<div class="video-container"><iframe src="https://www.loom.
com/embed/aa1755b1b7b94ef3ac3a72da431d844f?sid=982c1f26-b768-4c8d-ab77-c085219ebab6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


## Change Color

To change color for any widget property:

1. Navigate to a widget property that allows you to set a color.
2. Click on the currently selected color to either pick a new color or enter the Hex Code directly.
3. By default, theme colors are displayed. Simply click on a color to apply it.
4. For a custom color, switch to the **Custom Color** tab, select your desired color, and then click **Use Color**.
5. You can also set a [color from variable](#set-color-from-variable).

<div class="video-container"><iframe src="https://www.loom.
com/embed/7fb8cd068bbb45c9ae34cfd4f325a3dc?sid=b3559d67-9e11-4501-8a17-7f4e92bd5847" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


## Set Color From Variable

You may want to apply dynamic colors to widget properties like Container backgrounds or Text colors, which can be achieved by assigning colors from a variable. For instance, you can display temperature color dynamically based on an app state variable, data from a Firestore document, responses from API calls, or other similar sources.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/YSGGPJy6ZpkI17JnHEEN?embed&show_copy_link=true"
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

To set a color from a variable:

1. Navigate to a widget property that allows you to set a color.
2. From the **Set from Variable** menu, you can select the source of your color. Below is an example of setting color from an app state variable.

<div class="video-container"><iframe src="https://www.loom.
com/embed/6bffe7446e1d414f99baee759fda8fc0?sid=abfedd7c-3bc4-4eda-a9ab-341b72e4b98a" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

You can also set the color from a [conditional value](../../../resources/control-flow/functions/conditional-logic.md#setting-widget-properties-with-conditional-logic).

## Copy Variable

If you have a complex variable value (e.g., using [Conditional Logic](../../../resources/control-flow/functions/conditional-logic.md)) and want to use the same logic in another variable value, you can do so by copying a variable.

To copy-paste a variable:

1. Open the **Set from Variable** menu and select the **Variable Options** (three dots) icon.
2. Select the **Copy Variable**.
3. Move to the place where you want to paste the variable, and open the **Set from Variable** menu.
4. Click on the **Paste Variable** icon.
5. Click **Confirm**.

<div class="video-container"><iframe src="https://www.loom.
com/embed/d4a7a2a5c7aa415894dd977330c2dabe?sid=b199450c-a915-4533-828e-cf6fa9e8bbff" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

## Edit multiple widgets simultaneously

We also allow you to modify the properties of multiple widgets at once. This can be a time-saving and efficient way to make bulk changes to the user interface of an app.

For example, imagine that you want to change the background color of multiple buttons in an app from blue to green. Without the ability to edit multiple widgets simultaneously, you would need to select and edit each button individually. However, with this feature, you can select all of the buttons at once and modify their fill color property.

To edit multiple widgets simultaneously, you can select all the widgets you want to modify by clicking on each one while holding down the shift key. Once you have selected all the desired widgets, you can access and modify their common properties all at once from the properties panel.

<div class="video-container"><iframe src="https://www.loom.
com/embed/f3cdb87b927b46508a2f1c21c2524cfe?sid=bb94b178-cba5-4423-afd0-47a4669c2402" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

## Add Image from Unsplash

You can also add images directly from the [Unsplash](https://unsplash.com/) right inside the properties panel. To do so, simply click on the search icon and search and select the image. **Tip**: You can also choose the size of the image to add (i.e., Small, Regular, Full).

<div class="video-container"><iframe src="https://www.loom.
com/embed/6954aafd8e494e74b52a2e89d4744e39?sid=8cd4d95b-e338-41f1-ae8a-912422f580af" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>

## UI Builder Display Value

For widgets like `Text` and `RichText`, when their content is set from a variable, you can set a placeholder value to be displayed only in the app builder. Keep in mind that this placeholder is solely for visualization purposes within the canvas and will be replaced by the actual variable value when the app runs.

This feature is useful for assessing spacing and alignment without removing variable bindings.

![img_4.png](..%2Fimgs%2Fimg_4.png)
## Trigger action on selection change

Here, you will see how to trigger an action when the selection changes for any Form widget such as Dropdown, RadioButton, ChoiceChips, Slider, and RatingBar.

:::info
To simplify, we've used the Dropdown widget as an example. However, the same instructions apply to other Form widgets as well.
:::

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/1722ccd359a2401a9064f50b0ca38350?sid=9118cb06-4b88-4c69-b3ac-6ec0794b9e62"
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

To do so:

1. Select the widget.
2. Select **Actions** from the properties panel, and click **+ Add Action**.
3. You will notice that the **Type of Action** (aka callback) is already set to **On Selected**. That means actions added under this will be called whenever the selection changes.
4. Now you can add any action here.

Here is an example showing the snackbar message when the Dropdown selection changes.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/1e6748c17cbb49fe869feeff30ad3eb4?sid=cfc3fb5b-262f-4e50-8213-f23ba0610100"
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

## Adding border

To add a border to any widget:

1. Find the **Border Color** property and change the color.
2. To create the rounded border, use the **Border Radius** property.
3. Enter values for TL (Top left), TR (top right), BL (bottom left), and BR (bottom right).
4. To apply the same radius on all sides, switch to the **Uniform Radius** option. You can then adjust the radius by either moving the slider or entering the desired value directly.
5. Use the refresh icon button to reset all values.
6. To increase the border thickness, use the **Border Width** property.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://www.loom.com/embed/8ce81ac703a44af2a4f8fffc4eeffa1a?sid=300557b1-b922-4bb1-95c0-384302334eee"
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
