---
title: Image
---

The properties for the Image widget provide various customization options, from sizing and fitting to advanced animations. Below, I've detailed these properties based on the screenshots provided:

Basic Image Properties:
Width & Height: Specify the dimensions of the image. Values can be in pixels (px) or as a percentage (%) of the parent container's size, allowing for responsive design.

Border Radius: Adjusts how rounded the corners of the image are. A higher value results in more rounded corners.

Image Type: Specifies the source of the image. Options include "Network" for online sources. If selected as "Network", you need to provide a URL in the "Path" field.

Cached: Determines whether the image should be cached. When enabled, it stores the image locally to improve load times on subsequent views.

Show Error Image on Failure: When enabled, displays an error image if the main image fails to load. This helps maintain a good user experience even when image retrieval issues occur.

Use Blur Hash: When enabled, displays a blurred placeholder image while the main image is loading, based on a hash value representing the original image. This can enhance the perceived performance of image loading.

Path: For images sourced from the network, this field is used to input the URL of the image.

Advanced Image Properties:
Box Fit: Defines how the image fits within its bounds. Options include:

Fill: Stretch the image to fit the entire container, possibly distorting the image.
Contain: Scale the image to fit within the container without distorting.
Cover: Scale the image to cover the entire container without distorting, potentially cropping some parts.
FitWidth: Scale the image to fit the width of the container.
FitHeight: Scale the image to fit the height of the container.
None: Display the image at its original size.
Image Alignment: Sets the alignment of the image within its container. This grid allows for precise positioning.

Make Expandable: When enabled, the image can be expanded, usually to a larger view or a full-screen mode, upon user interaction.

Use Hero Animation: Enables a hero animation effect when transitioning between screens. This can make the image appear to "fly" between screens for a smoother visual transition.

These properties collectively provide robust control over how images are displayed and managed within your application, enhancing both aesthetics and functionality.