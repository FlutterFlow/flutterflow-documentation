---
keywords:
  - api
  - attestation
  - migration
slug: >-
  /troubleshooting/google-play-store-deployment/migrate-to-play-integrity-api-from-safetynet-attestation
title: Migrate to Play Integrity API From SafetyNet Attestation
description: >-
  Google is deprecating the SafetyNet Attestation API , replacing it with the
  Play Integrity API .
tags:
  - FlutterFlow
  - Troubleshooting
  - Google Play Store Deployment
last_verified: 2026-09-02
---
# Migrate to Play Integrity API From SafetyNet Attestation

Google has deprecated and shut down the **SafetyNet Attestation API**. New and maintained integrations must use the **Play Integrity API** or remove the obsolete dependency.

:::info[Prerequisites]
- The **SafetyNet Attestation API** is currently used in your Android app.
- Preparation for app deployment or maintenance on Google Play is underway.
:::

**Migration Steps:**

1. **Begin the Migration Process**
   Visit the official migration guide: **[SafetyNet Deprecation & Play Integrity Migration Guide](https://developer.android.com/google/play/integrity/migrate)**

2. **Update Your Backend Implementation**
   - Request Play Integrity verdicts according to Google's current standard or classic request flow.
   - Send the token to a trusted backend for decoding/verification and enforce a risk policy there. Never treat a client-side boolean as an integrity decision.

3. **Test Your Migration Thoroughly**
   Verify that the Play Integrity API integration works correctly on multiple devices before publishing updates.

:::tip
Migrating is critical to:
- Comply with the latest security standards.
- Maintain access to Google's integrity services.
- Benefit from improved error handling and security signals.
Failure to migrate may cause degraded app functionality and user experience.
Integrity signals are anti-abuse inputs, not proof that a user is trustworthy. Handle outages, quota, remediation, replay, licensing, testing tracks, and false positives according to your app's risk level.
:::

If issues arise during migration, contact FlutterFlow Support at [support@flutterflow.io](mailto:support@flutterflow.io).

## Related documentation

See [AdMob Ads Not Displaying in Google Play Testing](/troubleshooting/google-play-store-deployment/admob-ads-not-displaying-in-google-play-testing) for a related FlutterFlow workflow.
