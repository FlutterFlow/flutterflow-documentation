---
keywords: ['iot', 'bluetooth', 'mqtt', 'flutter packages']
slug: /build-iot-app
title: Build an IoT App
---

# Build an IoT App

An IoT (Internet of Things) app is designed to connect, monitor, and control smart devices such as sensors, thermostats, and Bluetooth-enabled devices. With FlutterFlow, it’s possible to build the front-end of an IoT app and extend its capabilities using custom code and Flutter packages.

:::info[Prerequisites]
- Familiarity with FlutterFlow’s Custom Code feature.
- Access to target IoT devices or a simulation environment.
- Understanding of device communication protocols such as Bluetooth or MQTT.
:::

1. **Set Up the Flutter App Structure**

    Use FlutterFlow’s UI builder to create the structure of your IoT app. Common pages include:
        - Device List
        - Device Control Panel
        - Settings and Connectivity

2. **Integrate Custom Code or Packages**

    FlutterFlow supports using custom Dart code and Flutter packages. You can use this to manage device connectivity and communication.

    :::note
    To use external packages, you must add them via **Custom Code > Packages** in your project settings.
    :::

    Popular Flutter packages for IoT functionality include:

        - `flutter_blue`: Connect to and communicate with Bluetooth Low Energy (BLE) devices.
        - `iot_sensors`: Access common sensor data such as temperature, humidity, and acceleration.
        - `mqtt_client`: Communicate with MQTT brokers, a common protocol in IoT systems.
        - `flutter_mqtt`: Publish and subscribe to MQTT messages from within your app.

3. **Manage Device Connections and State**

    Use custom actions and logic to:
        1. Scan for available devices.
        2. Connect or disconnect from a device.
        3. Read or write values (e.g., sensor data, device commands).
        4. Display real-time device states using local state or Firestore sync.

4. **Test on Physical Devices**

    IoT features such as Bluetooth or MQTT often require testing on real hardware. Simulators or emulators may not support these protocols.

    :::warning
    FlutterFlow's custom code executes only on physical devices or when building for mobile. Make sure to test using real devices for Bluetooth or sensor-related features.
    :::

