---
title: Place Picker Widget
sidebar_position: 3
---

# Place Picker Widget

The `PlacePicker` widget is designed to retrieve information about places, such as establishments (e.g., buildings, parks, museums) and geographic features (e.g., roads, lakes, mountains). It provides details like name, address, city, state, country, zip code, and latitude-longitude coordinates.

This widget is particularly useful in applications like cab booking services. For instance, it can be used to capture the exact location and full address of a destination, displaying this information on a page or integrating it into a Google Map.

Visually, the PlacePicker appears as a button. When tapped, it enables you to search for a place by typing its name, displaying a dropdown list of matching locations. Once a place is selected, its name is displayed on the button, and additional details are accessible through the placePickerValue variable from Widget State.

Here's an example from the Demo app:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(115.38461538461537% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/EQ4xhHBgjMp4wbm3aTin?embed&show_copy_link=true"
        title="Place Picker Widget"
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

:::note[Prerequisites]
- Ensure you have enabled **Places API** from Cloud console. This is a similar process to enabling Maps API for showing Google Maps
- Enable **Google Maps Platform Billing** via your Cloud console. Please note: Failing to enable the Google Maps Platform Billing will not show any place in an autocomplete list.
- Add API keys as suggested in [Getting Started](getting-started.md) guide.

:::
<figure>
    
  <figcaption class="centered-caption"></figcaption>
</figure>

## Add Place Picker widget

To add the PlacePicker widget to your project:

- Drag the `PlacePicker` widget from the **Form Elements tab** (in the Widget Panel) or add it directly from the widget tree.

- Below the `PlacePicker` widget add some Text widgets to show the information about the place.

![img.png](img.png)
