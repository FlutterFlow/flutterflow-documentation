---
title: Image
tags:
  - FlutterFlow
  - Resources
  - UI
slug: /resources/ui/widgets/image
description: >-
  Display network, asset, or uploaded-file images in FlutterFlow and configure
  format, memory size, caching, placeholders, expansion, and Hero transitions.
keywords:
  - Image
  - Widgets
  - Ui
last_verified: 2026-09-02
---
# Image

Images are a fundamental part of modern user interfaces, enhancing visual appeal and user
engagement. In app design, images can provide context, support content, and guide user
interactions. Different types of image widgets cater to various design requirements, ensuring flexibility and aesthetic integration across platforms.

- **Image Widget**: The Image Widget is a versatile component used to display images from a
  variety of sources, including local assets and the internet. It's essential for adding visual elements to your applications, such as logos, icons, and photographs.

- **CircleImage Widget**: The CircleImage Widget specifically caters to scenarios where you need
  to display images in a circular format, commonly used for profile pictures or branding elements.


The properties for the Image widget provide various customization options, from sizing and fitting to advanced animations.

## Common Image Properties

- **Width & Height:** Specify the dimensions of the image. Values can be in pixels (px) or as a
percentage (%) of the parent container's size, allowing for responsive design.

  - In case of `CircleImage` widget, you can define the **diameter** of the widget instead.

- **Border Radius:** Adjusts how rounded the corners of the image are. You can define border radius
for TL (Top left), TR (top right), BL (bottom left), and BR (bottom right) separately or for all
corners together. A higher value results in more rounded corners.
  :::caution[CIRCLEIMAGE]
  This option is not available for `CircleImage` widget since it is circular in shape.
  :::

- **Mem Width & Mem Height:** Request the decode/cache dimensions used in memory. For large source files shown at a small size, suitable values can reduce memory use. These are not the visual layout width and height.


### Image Type
Specifies the source of the image. Options include:
  - **Network:** Enter the URL of the image in the Path input field. This is used for images
    hosted online.

    - **Cached:** Uses FlutterFlow's cached-network-image path. Support is limited on web, and browser or server cache policy can still affect reuse.

      - When cached is enabled for `Image` widget & `CircleImage` widget, you can also define the **Fade
        in/out duration** (when blur hash is not enabled). This setting is not available for
        Background Image of Container.

  - **Asset:** Click the Upload Image + button to upload an image from your computer or select
    from previously uploaded assets. When this option is selected, you can enable the **Set Dark
    Mode** toggle to specify a separate background image for dark mode environments, enhancing the
    visual experience under different lighting conditions.

  - **Uploaded file:** Binds the image to an `FFUploadedFile` value containing local bytes, commonly from the Widget State output of an upload or media-picker action. A remote uploaded-file URL should instead be displayed as a Network image.

### Image Format

Choose **Auto**, **Image**, or **SVG**. Auto detects SVG from an explicit path or file extension. Use an explicit format when a dynamic URL does not expose a useful extension. SVG rendering supports **SVG Color**, which applies a tint; uploaded-file bytes do not use FlutterFlow's SVG rendering path.



### Box Fit
Determines how this widget should take up the available space. The options are:

<figure>
    ![image-boxfit.png](..%2Fbuilt-in-widgets%2Fimgs%2Fimage-boxfit.png)
  <figcaption class="centered-caption">Example of a horizontal & vertical image in
different BoxFit options</figcaption>
</figure>

  - **Fill:** Scale the image to completely fill the container, which might distort the image.
  - **Contain:** Scale the image to fit within the container without distorting it, which might
    leave some empty space.
  - **Cover:** Scale the image to completely cover the container without distorting it,
    potentially cropping some parts of the image.
  - **Fit Width:** Scale the image to fit the width of the container, possibly leaving empty space
    vertically.
  - **Fit Height:** Scale the image to fit the height of the container, possibly leaving empty
    space horizontally.
  - **None:** No scaling or adjustment, showing the image in its original size.
  - **Scale Down:** Center the widget and scale it down until it fits within the available space.



### Image Alignment
Controls the alignment of the image within the container. This grid allows you
  to position the image precisely within the container, with options to align it to the center, top,
  bottom, left, right, and combinations of these.

- **X & Y:** Adjusts the fine positioning of the background image along the X (horizontal) and Y
  (vertical) axes. This is useful for making precise adjustments to the image placement.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe
        src="https://demo.arcade.software/ReqoF7eT7VPwbm8p6eUz?embed&show_copy_link=true" title="Image interactive tutorial"
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


## Advanced Image Functionalities

- **Show Error Image on Failure:** When enabled, displays an error image if the main image fails
to load. Configure the project's error image asset first. This option is offered only for sources and formats that support an error builder.

- **Use Blur Hash:** For a non-SVG Network image, displays a blurred placeholder while the main image loads. Provide **Blur Hash String**, or generate one from an Upload Media action with **Include Blur Hash**. When Blur Hash is active, Cache Fade Duration is not used.

- **Make Expandable:** Adds an Expand Image action to the widget so the user can open a larger view. Zoom and pan are mobile-only; edit the generated action to configure options such as rotation and its Hero transition.

- **Use Hero Animation:** Wraps the image in a Hero. Choose the same **Hero Tag** on the source and destination image. If an image path is variable-bound, FlutterFlow can use that path as the tag. Avoid duplicate tags on the same route, especially in dynamic lists.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| A network image fails only on web | Check HTTPS, CORS, authorization, redirects, and content type. Cached-image support is limited on web. |
| A dynamic SVG renders as a raster image | Set **Image Format** to **SVG** when Auto cannot infer the format from the path. |
| Blur Hash controls are unavailable | Blur Hash is limited to non-SVG Network images. |
| The error placeholder is blank | Configure the project's error image asset and enable **Show Error Image on Failure** for a supported source. |
| A Hero transition fails or throws a duplicate-tag error | Match the source/destination tag and ensure only one visible Hero per tag exists on each route. |
| Large images cause memory pressure | Set appropriate **Mem Width** and **Mem Height**, reduce source dimensions, and profile on target devices. |

## Related documentation

See [Basic Widgets](/resources/ui/widgets/basic-widgets) for a related FlutterFlow workflow.
