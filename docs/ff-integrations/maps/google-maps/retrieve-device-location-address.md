---
keywords: ['api', 'geocoding', 'location', 'address', 'latlng']
slug: /retrieve-device-location-address
title: Retrieve Address From Location (Geocoding)
---

# Retrieve Address From Location (Geocoding)

You can convert the current device location into a full address (including country, city, state, and street) using the **Google Geocoding API** in combination with **FlutterFlow's Global Properties**.

![](../assets/20250430121401588410.png)

:::info[Prerequisites]
- A **FlutterFlow project** with location permissions enabled.
- A valid **Google Maps API Key** with access to the Geocoding API.
:::

Follow the steps below:

1. **Enable Google Maps API Access**

    Make sure your project has a valid Google Maps API Key.

        - If you’ve already configured Google Maps, you can reuse the existing key.
        - Follow the setup guide under **FlutterFlow > Settings > Google Maps** if you haven’t set it up yet.

        ![](../assets/20250430121401831627.png)

2. **Set Up the API Call**

    Use the following endpoint for Google’s Geocoding API:

        ```
        https://maps.googleapis.com/maps/api/geocode/json
        ```

    Create a new API Call named `Geocoding` with the following parameters:

        - `latlng` (String) – the device’s current location in the format `latitude,longitude`
        - `key` (String) – your Google Maps API Key

    Example URL with parameters:

        ```
        https://maps.googleapis.com/maps/api/geocode/json?latlng=[latlng]&key=[key]
        ```

        ![](../assets/20250430121402200525.png)

3. **Create a Custom Function to Format LatLng**

    To pass the current device location as a string, create a custom function that converts the `LatLng` value into a comma-separated string.

    ```dart
    return (latlang.latitude.toString() + ',' + latlang.longitude.toString());
    ```

    ![](../assets/20250430121403142023.png)

    ![](../assets/20250430121403435719.png)

    This function uses the `Global Properties > Current Device Location` and converts it into the required string format.

4. **Call the API and Display the Response**

    Trigger the API call on **Page Load** or an **Action**, passing:

        - `latlng`: Output of the custom function.
        - `key`: Your Google API Key (can be stored securely in a user record or environment variable).

        ![](../assets/20250430121402560287.png)

5. **Show the Address in a Text Widget**

    Bind a `Text` widget to display the API response using the appropriate response field.

    For example, to show the formatted address:

        ```text
        response.results[0].formatted_address
        ```

        ![](../assets/20250430121403683565.png)

    You can extract additional details such as country, city, or postal code from other fields in the response.

    :::tip
    To store the result for later use, use the **Set from Variable** action and save the address to Firestore or Local State.
    :::

    :::note
    - You can also trigger this logic during signup, checkout, or any workflow where location-based personalization is needed.
    - For complex use cases, parse the full JSON and extract relevant parts of the location using the **Response & JSON Paths** tools in the API call editor.
    :::
