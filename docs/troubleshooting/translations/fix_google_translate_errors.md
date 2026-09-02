---
keywords:
  - translation
  - localization
  - google
slug: /troubleshooting/translations/fix-google-translate-errors
title: Fix Google Translate Errors
description: >-
  FlutterFlow integrates with Google Translate to help localize your app
  automatically.
tags:
  - FlutterFlow
  - Troubleshooting
  - Translations
last_verified: 2026-09-02
---
# Fix Google Translate Errors

FlutterFlow integrates with Google Translate to help localize your app automatically. This guide outlines how to identify and resolve common issues with the translation integration.

:::info[Prerequisites]
- Google Translate integration must be enabled for the project.
- At least one supported language must be added in **App Settings > Localization**.
- Review the [Google Translate Integration](/concepts/localization/#add-multi-language-support) guide for setup instructions.
:::

## Common Translation Issues and Fixes

- **Long Text Forms**
   **Problem:** Attempting to translate long blocks of text in forms or widgets can lead to API timeouts or failures.
   **Solution:** Remove long text elements and translate them outside of FlutterFlow using external tools like Google Translate. Once translated, manually paste the content back into your project. Ensure the input field is empty before retrying automatic translation.

- **Special Characters**
   **Problem:** A particular string can fail because of malformed markup, an unsupported control character, size, quota, or a transient request error. Accented and non-Latin text is not inherently unsupported.
   **Solution:** Capture the exact error, isolate the smallest failing string, preserve the original copy, and remove only the confirmed invalid character or markup.

- **Exceeding Language Limit**
   **Problem:** Large translation batches can encounter product, request, or quota limits.
   **Solution:** Check the current FlutterFlow UI and returned error for the applicable limit; do not assume a universal ten-language maximum. Translate in smaller reviewed batches when possible.

## Steps to Troubleshoot Translation Failures

1. **Locate the Problem Area**
   Identify the specific widget, page, or field where translation fails. Focusing on the problematic component will make resolution faster.

2. **Use the Translate All Button**
   In **App Settings > Localization**, click the **Translate All** button. The process will stop at the first failure, indicating the field or element causing the issue.

3. **Check Chrome Developer Console**
   Open the Chrome DevTools console and monitor for any error logs related to translation requests. This can help identify issues such as invalid characters, request failures, or unsupported content.

4. **Remove and Isolate Problematic Text**
   Temporarily delete the suspected text and retry the translation. If the translation proceeds successfully, that text is likely causing the failure. Manually translate and reinsert it.

   :::note
   Keep strings structurally simple while diagnosing, but restore required punctuation, names, placeholders, and locale-specific characters and have a fluent reviewer check the result.
   :::

:::info[Additional Help]
If the issue persists after troubleshooting, reach out to [support@flutterflow.io](mailto:support@flutterflow.io) with the following:

   - Screenshot or screen recording of the failure
   - Console error logs (if available)
   - A description of where the failure occurs (page/widget/text field)

      This will help the support team resolve the issue faster.

Redact API credentials, user data, unreleased copy, and proprietary project details from screenshots and logs before sharing them.
:::
