---
keywords: ['api', 'attestation', 'being']
slug: /the-safety-attestation-api-is-being-discontinued-and-replaced-by-the-new-play-integrity-api
title: The Safety Attestation API is being discontinued and replaced by the new Play
  Integrity API
---
# The Safety Attestation API is Being Discontinued and Replaced by the new Play Integrity API

## Full Error Message

```
The SafetyNet Attestation API is being discontinued and replaced by the new Play Integrity API. Begin migration as soon as possible to avoid user disruption. The Play Integrity API includes all the integrity signals that SafetyNet Attestation offers and more, like Google Play licensing and better error messaging. Learn more and start migrating at http://developer.android/training/safetynet/depreciation-time
```

## What is the SafetyNet Attestation API?

The SafetyNet Attestation API is a Google API that enables Android developers to assess the integrity of their devices at runtime. It enables developers to gain insight into the security hazards on their devices and take any necessary action their applications need to ensure they are not susceptible to attack.

The API works by submitting a request to Google's servers, which will respond with a signed "attestation token" that contains information about the device, such as its API level, bootloader state, security patch level, and its Google Play services version.

By analyzing this data, you can make decisions about your application's security, such as rejecting requests from devices that are rooted or out-of-date. This provides an additional layer of protection against malicious or security-hazardous devices.

In order to use the SafetyNet Attestation API, developers need to register their Android application with Google. Once registered, SafetyNet will be able to provide the attestation token when requested.

You can learn more about [SafetyNet Attestation API Documentation](https://developer.android.com/training/safetynet/attestation) at the Google Developer website.​

## Why should I migrate? 

In order to ensure the best user experience and create a more secure platform, it is important that you migrate to the new Play Integrity API as soon as possible. The Play Integrity API provides better security, a larger range of user data, and improved error messaging. 

## How can I start migrating? 

Migrating from the SafetyNet Attestation API to the Play Integrity API is easy. Just visit http://developer.android/training/safetynet/depreciation-time to learn more and start migrating. 

## What if I run into an issue? 

If you encounter any issues during the migration process, please contact our support team and they will be happy to assist you. 
