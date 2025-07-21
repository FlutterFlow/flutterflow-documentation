---
keywords: ['api', 'attestation', 'migration']
slug: /troubleshooting/google-play-store-deployment/migrate-to-play-integrity-api-from-safetynet-attestation
title: Migrate to Play Integrity API From SafetyNet Attestation
---

# Migrate to Play Integrity API From SafetyNet Attestation

Google is deprecating the **SafetyNet Attestation API**, replacing it with the **Play Integrity API**. This article explains the migration steps needed to maintain app security and compliance with Google Play requirements.

:::info[Prerequisites]
- The **SafetyNet Attestation API** is currently used in your Android app.
- Preparation for app deployment or maintenance on Google Play is underway.
:::

**Migration Steps:**

1. **Begin the Migration Process**  
   Visit the official migration guide: **[SafetyNet Deprecation & Play Integrity Migration Guide](https://developer.android.com/google/play/integrity/migrate)**

2. **Update Your Backend Implementation**  
   - Replace calls to the **SafetyNet Attestation API** with the **Play Integrity API** in your app code.  
   - Modify your backend to validate responses from the Play Integrity API.

3. **Test Your Migration Thoroughly**  
   Verify that the Play Integrity API integration works correctly on multiple devices before publishing updates.

:::tip
Migrating is critical to:  
- Comply with the latest security standards.  
- Maintain access to Google's integrity services.  
- Benefit from improved error handling and security signals.  
Failure to migrate may cause degraded app functionality and user experience.
:::

If issues arise during migration, contact FlutterFlow Support at [support@flutterflow.io](mailto:support@flutterflow.io).
