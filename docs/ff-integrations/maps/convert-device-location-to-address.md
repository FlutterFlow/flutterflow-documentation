---
keywords: ['device', 'address', 'current']
slug: /convert-device-location-to-address
title: Convert Device Location to Address
---

# Convert Device Location to Address in FlutterFlow

This guide explains how to convert a user's device location (latitude and longitude) into a readable address (such as city or street name) in FlutterFlow. You can do this using either the **Google Maps Geocoding API** or the **`geocoding` Dart package** via a custom action.

Explore a live example in this **[FlutterFlow sample project](https://app.flutterflow.io/project/geo-track-rvndye)**.

**Option 1: Using the Google Maps API**

   1. **Enable the Geocoding API**

      1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
      2. Select your project.
      3. Search for and enable the **Geocoding API**.

         ![](../assets/20250430121231440026.gif)

   2. **Add API Key to App State**

      1. Go to **App State > Local State** in FlutterFlow.
      2. Add a new variable:
         - `apiKey` → Type: `String`
      3. Paste your Geocoding API key as the default value.

         ![](../assets/20250430121231812590.png)

   3. **Create the API Call**

      1. Navigate to **API Calls** in FlutterFlow.
      2. Create a new API call with the following configuration:

         - **Base URL**:  
         ```js
         https://maps.googleapis.com/maps/api/geocode/json
         ```
         - **Method**: `GET`

      3. Under **Variables**, add:
         - `latlng` → Type: `String`
         - `apiKey` → Type: `String`

         ![](../assets/20250430121232082585.png)

   4. Create a Custom Function (LatLng → String)

      Create a custom function that accepts a `LatLng` value (device location) and returns a string in `"latitude,longitude"` format.

      This will be used to populate the `latlng` variable in your API call.

         ![](../assets/20250430121232452872.png)

   5. **Run the API and Display the Result**

      1. Add a button or trigger to run the API call.
      2. Pass the following:
         - `latlng`: From the custom function.
         - `apiKey`: From local state.
      3. From the API response, extract the address using a **JSON Path**.

         Example JSON Path for city name:
            ```json
            $.results[0].address_components[1].long_name
            ```
      4. Bind the extracted value to a `Text` widget.

**Option 2: Using the `geocoding` Dart Package**

   If you prefer to use Flutter's native functionality, you can achieve the same result using the geocoding Dart package in a custom action.

   1. **Add the Package**
      Add the dependency to your project’s pubspec.yaml file:

      ```js
      dependencies:
      geocoding: ^2.1.0
      ```

   2. **Create a Custom Action**
      - Create a new custom action.
      - Add a parameter: LatLng location.
   3. Use the geocoding package to convert the coordinates into a readable address.

      Sample code:

      ```js
      import 'package:geocoding/geocoding.dart';

      Future<String> getAddressFromLocation(LatLng location) async {
         final placemarks = await placemarkFromCoordinates(location.latitude, location.longitude);
         final place = placemarks.first;
         return '${place.locality}, ${place.country}';
      }

      ```
   4. Return the result and bind it to a Text widget.