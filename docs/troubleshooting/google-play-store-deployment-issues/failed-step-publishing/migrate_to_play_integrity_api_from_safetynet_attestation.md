---
keywords: ['api', 'attestation', 'being']
slug: /migrate-to-play-integrity-api-from-safetyNet-attestation
title: Migrate to Play Integrity API from SafetyNet Attestation
---
# Migrate to Play Integrity API from SafetyNet Attestation

:::info[Prerequisites]

- You have used the SafetyNet Attestation API in your Android app.
- You are preparing to deploy or maintain your app on Google Play.
:::

When building or deploying your app, you may encounter the following message:

```js
The SafetyNet Attestation API is being discontinued and replaced by the new Play Integrity API. Begin migration as soon as possible to avoid user disruption. The Play Integrity API includes all the integrity signals that SafetyNet Attestation offers and more, like Google Play licensing and better error messaging. Learn more and start migrating at http://developer.android/training/safetynet/depreciation-time
```

Google has officially deprecated the **SafetyNet Attestation API**. All developers using this API are required to migrate to the **Play Integrity API** to maintain app integrity checks, ensure continued security, and avoid disruptions.

The Play Integrity API offers:

  - Improved security signals.
  - Expanded device integrity checks.
  - Better error messaging.
  - Google Play licensing information.

  Failure to migrate may result in degraded app functionality for your users.

Follow the steps below to resolve this issue:

1. **Begin the Migration Process**

  Visit the official migration guide provided by Google:  [SafetyNet Deprecation & Play Integrity Migration Guide](https://developer.android.com/google/play/integrity/migrate)

2. **Update Your Backend Implementation**

  - Update your app code to call the Play Integrity API instead of the SafetyNet Attestation API.
  - Modify your backend to validate Play Integrity API responses.

3. **Test Your Migration**

  Before publishing updates, thoroughly test your app to verify the Play Integrity API integration works correctly across different devices.

Migration Is Critical because Google will fully discontinue SafetyNet Attestation API soon. Migrating ensures:

  - Compliance with the latest security standards.
  - Continued access to Google's integrity services.
  - Better error handling and security signals.

If you encounter any issues during the migration process, contact FlutterFlow Support via Chat or email at [support@flutterflow.io](mailto:support@flutterflow.io).
