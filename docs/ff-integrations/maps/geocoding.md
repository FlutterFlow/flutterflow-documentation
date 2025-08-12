---
slug: /integrations/maps/geocoding
title: Geocoding in FlutterFlow
keywords: ['geocoding', 'reverse geocoding', 'maps', 'location', 'address']
---

# Geocoding in FlutterFlow

**Geocoding** is the process of converting between human-readable addresses (like “1600 Amphitheatre Parkway, Mountain View, CA”) and geographic coordinates (latitude and longitude).

FlutterFlow supports geocoding through **custom API calls** and **custom code actions**, giving you flexibility to choose the approach that works best for your app.

**Types of Geocoding**

There are two common types of geocoding:

1. **Forward Geocoding**  
   Converting an address into geographic coordinates.  
   *Example:* `"Paris, France"` → `(48.8566, 2.3522)`

2. **Reverse Geocoding**  
   Converting geographic coordinates into an address.  
   *Example:* `(37.4221, -122.0841)` → `"1600 Amphitheatre Parkway, Mountain View, CA"`

**Approaches in FlutterFlow**

You can implement geocoding in FlutterFlow in two main ways:

1. **Google Maps Geocoding API**

  - Uses the official Google Maps API for reliable, global geocoding.
  - Requires a Google Cloud project and API key.
  - Works via a standard API Call in FlutterFlow.
  - Best for:
    - Apps with existing Google Maps integrations.
    - Large-scale or high-accuracy location services.

  See: **[Google Maps Geocoding API Documentation](https://developers.google.com/maps/documentation/geocoding)**

2. **`geocoding` Dart Package (Custom Code)**

  - Uses Flutter’s [`geocoding`](https://pub.dev/packages/geocoding) package for native geocoding.
  - Works entirely offline for some lookups (depending on platform and data availability).
  - Implemented via a custom action in FlutterFlow.
  - Best for:
    - Apps that don’t want to rely on external APIs.
    - Simpler geocoding needs.

:::tip[Related Guides]
- [Convert Device Location to Address](/convert-device-location-to-address) — Step-by-step guide for reverse geocoding a device’s coordinates.
- (Coming soon) Forward Geocoding with FlutterFlow — Learn how to convert an address into coordinates.
:::


:::tip
If your app already uses Google Maps for displaying locations, the Google API method will be the most seamless. If you want a code-based approach that avoids API calls, the `geocoding` package is a good alternative.
:::