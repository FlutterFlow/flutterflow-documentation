---
keywords: ['device location', 'address', 'geocoding', 'google maps']
slug: /convert-device-location-to-address
title: Convert Device Location to Address
---

# Convert Device Location to Address

Learn how to convert a device's current geographic location into a readable address using either the Google Maps API or a Dart package.

:::info[Prerequisites]
- Your project must have location permissions enabled.
- A Google Maps API key is required if using the Google Maps API method.
- Basic knowledge of API calls and custom functions in FlutterFlow is recommended.
:::

## Method 1: Using the Google Maps API

### Step 1: Enable the Google Maps API

Go to the [Google Cloud Console](https://console.cloud.google.com/) and enable the **Geocoding API** for your project.

![](../assets/20250430121231440026.gif)

### Step 2: Store API Key in Local State

Add your API key to the local app state.

![](../assets/20250430121231812590.png)

### Step 3: Configure the API Call

1. Navigate to **API Calls** in the FlutterFlow menu.
2. Create a new API call:
   - **Base URL:** `https://maps.googleapis.com/maps/api/geocode/json`
   - **Method:** `GET`
3. Add the following query parameters:
   - `latlng` (String)
   - `apiKey` (String)

![](../assets/20250430121232082585.png)

:::tip
Refer to the [Creating API Calls](/api-calls/create-api-call) guide for step-by-step instructions.
:::

### Step 4: Create a Custom Function

Create a custom function that accepts a `LatLng` object and returns a formatted string in the form of `latitude,longitude`.

This will be used to populate the `latlng` variable in the API call.

![](../assets/20250430121232452872.png)

Add a button to the UI that triggers the backend API call using this custom function.

### Step 5: Extract JSON Data

1. Run the API call.
2. Use **JSON Path** to extract the address string.

Example JSON path for city name:
```json
$.results[0].address_components[1].long_name
```

![](../assets/20250430121232796431.gif)
![](../assets/20250430121233518615.png)

Display the result in a `Text` widget using the JSON path result.

![](../assets/20250430121233994234.png)

---

## Method 2: Using the Geocoding Dart Package

You can also use a custom action that leverages the [geocoding](https://pub.dev/packages/geocoding) Dart plugin.

1. Pass the current device location to the custom action.
2. Convert it to a formatted address string.

![](../assets/20250430121234284106.png)

Set the `Text` widget's value from the result of the custom action.

![](../assets/20250430121234607888.png)

:::warning
Using third-party Dart packages in custom actions requires adding them to your `pubspec.yaml` file.
:::

For details, refer to the [Adding Dependencies Guide](/custom-functions/add-pubspec-dependencies).

---

## Resources

- [Google Geocoding API Documentation](https://developers.google.com/maps/documentation/geocoding/overview)
- [Creating Custom Actions](/custom-functions/overview)
- [Creating API Calls in FlutterFlow](/api-calls/create-api-call)
- [Working with JSON Path](/api-calls/json-path-expressions)
