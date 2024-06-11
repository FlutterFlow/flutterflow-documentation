---
title: Container
---

# Container

A Container is a highly versatile widget that functions much like a multi-purpose box in your app's
interface. It is primarily used to decorate, position, and arrange child widgets—smaller components
within your app. Containers are useful for dividing the screen into smaller, logical parts, and
styling or positioning these parts effectively.

For instance, you can use a Container to assign a background color, shape, or specific size to
elements like text or buttons. Think of it as placing an item inside a box and then customizing the
appearance and placement of that box within the screen layout.

## Container Properties

The Container properties can be adjusted to customize the appearance and layout of a Container
widget. Here's a brief explanation of each:

- **Width & Height:** Specify the dimensions of the container in pixels (px) or as a percentage (%)
  of the parent container's size.

- **Fill Color:** Sets the background color of the Container. You can choose this color from defined
  Theme Colors, use a color picker, or enter a specific hexadecimal (hex) code (e.g., `#e0ddfe`).

- **Border Color:** Determines the color of the Container's border. If unset, the container will
  have
  no border color.

- **Border Radius:** This adjusts how rounded the corners of the Container are. A higher value
  increases the roundness.

- **Border Width:** Defines the thickness of the border around the Container. A higher value results
  in a thicker border.

- **Elevation:** Typically used to create a shadow around the Container, giving it a 3D effect
  that makes it appear elevated above other widgets.

- **Min W (Minimum Width) & Min H (Minimum Height):** These set the minimum dimensions the Container
  can shrink to, in pixels or percentage.

- **Max W (Maximum Width) & Max H (Maximum Height):** These set the maximum dimensions the Container
  can expand to, in pixels or percentage.

- **Clip Content:** Determines whether the content inside the Container should be clipped if it
  exceeds the boundaries of the Container. When enabled, anything outside the Container's bounds
  will not be visible.

## Box Shadow Properties

The properties Box Shadow properties allow you to add and customize a shadow effect for your
Container widget.
Here's a brief explanation of each property:

- **Shadow Color:** The color of the shadow, typically specified in a hex format including an alpha
  value for transparency, like `#33000000.` You can select from Theme Colors, use a color picker, or
  input a hex code.

- **Blur:** Determines the blur radius of the shadow. A higher value produces a more diffused
  shadow,
  while a lower value makes the shadow sharper and more defined.

- **Spread:** Controls the spread radius of the shadow. Increasing this value will expand the area
  that the shadow covers, making it appear larger and more extensive.

- **Offset X & Offset Y:** These properties set the horizontal (X) and vertical (Y) displacement of
  the shadow relative to the widget. **Offset X** shifts the shadow horizontally, and **Offset Y**
  moves it vertically. Positive values move the shadow right and down, respectively, while negative
  values move it left and up.

## Gradient Properties

The Gradient properties allow you to create and customize a gradient effect for a Container widget.
Here's an overview of each property:

- **Angle (Degrees):** Sets the orientation of the gradient by specifying the angle in degrees. An
  angle of 0 degrees creates a horizontal gradient, and 90 degrees would make it vertical.

- **Colors**: These are the colors used in the gradient. You can set these colors
  using Theme Colors, a color picker, or hex codes. By default, two color values are added by
  default.
    - **Add Color:** This option allows you to add additional colors to the gradient, further
      customizing the effect by adjusting their transition points
- **Transition Point:** These values determine where each color starts transitioning within the
  gradient. Transition points are set as a fraction of the total gradient distance:

![gradient-cont.png](imgs%2Fgradient-cont.png)

In the above example,

- The Transition Point for Color 1 is set at 0, meaning it starts at the very beginning of the
  gradient.
- The Transition Point for Color 2 is 0.5, indicating that this color starts transitioning at the
  halfway point.
- The Transition Point for Color 3 is 1, which places the start of this color's transition at the
  end of the gradient.
  and choosing from Theme Colors, a color picker, or hex codes.

## Background Image Properties

The Background Image properties allow you to configure how an image is displayed as a
background in a Container widget. Here’s a breakdown of each property:

- **Image Type:** Specifies the source of the image. Options include:
    - **Network:** Enter the URL of the image in the Path input field. This is used for images
      hosted online.

    - **Asset:** Click the Upload Image + button to upload an image from your computer or select
      from previously uploaded assets. When this option is selected, you can enable the "Set Dark
      Mode" toggle to specify a separate background image for dark mode environments, enhancing the
      visual experience under different lighting conditions.

    - **Uploaded File:** Selecting this option allows for dynamic handling of image data within your
      app, accommodating images that users upload during app usage. This makes it suitable for
      applications requiring user-specific or user-generated content. Set this to use Widget State >
      Uploaded File to manage the image as part of the app's state.

- **Cached:** Determines whether the image should be cached for performance optimization. When
  toggled on, it stores the image locally to speed up load times on subsequent views.


- **Box Fit:** Determines how this widget should take up
  the available space. The options are:

    - **Fill:** Scale the image to completely fill the container, which might distort the image.
    - **Contain:** Scale the image to fit within the container without distorting it, which might
      leave some empty space.
    - **Cover:** Scale the image to completely cover the container without distorting it,
      potentially cropping some parts of the image.
    - **FitWidth:** Scale the image to fit the width of the container, possibly leaving empty space
      vertically.
    - **FitHeight:** Scale the image to fit the height of the container, possibly leaving empty
      space horizontally.
    - **None:** No scaling or adjustment, showing the image in its original size.

- **Image Alignment:** Controls the alignment of the image within the container. This grid allows
  you
  to position the image precisely within the container, with options to align it to the center, top,
  bottom, left, right, and combinations of these.

- **X & Y:** Adjusts the fine positioning of the background image along the X (horizontal) and Y
  (vertical) axes. This is useful for making precise adjustments to the image placement.

## Child Properties

- **Child Alignment:** This allows you to specify the alignment of child widgets within the
  Container. The grid indicates possible positions (center, top, bottom, left, right, and etc), and
  you can adjust the alignment precisely using the X and Y values, which shift the child widget
  horizontally and vertically within the Container.

## Implicit Animated

This property enables the use of implicit animations for changes in the Container’s properties (like
size or color). This makes transitions between property changes smoother and visually appealing.

The properties are as follows:

- **Animation Curve:** Specifies how the animation progresses over time. The options are Ease In,
  Ease in Out, Ease Out, Bounce, Linear, Elastic.

- **Duration (ms):** Sets the duration of the animation in milliseconds. A shorter duration makes
  the animation faster, while a longer duration slows it down.

## Safe Area

This toggle ensures that the Container and its contents are positioned within the safe area of the
device’s screen, avoiding obscured areas like notches or rounded corners. This is particularly
useful for ensuring good visibility and interactivity across different devices.