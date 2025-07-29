---
keywords: ['translation', 'localization', 'google']
slug: /troubleshooting/translations/fix-google-translate-errors
title: Fix Google Translate Errors
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
   **Problem:** Some special characters—such as emojis, accented symbols, or non-Latin characters—may not be supported by the Google Translate API and can cause translation to fail.  
   **Solution:** Review the text and replace or remove any unsupported special characters. Then attempt the translation again.

- **Exceeding Language Limit**  
   **Problem:** Adding more than 10 language options in your project may result in translation failure.  
   **Solution:** Limit your project to a maximum of 10 supported languages for translation to work reliably with Google Translate.

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
   Using shorter, plain-text strings without special characters improves success rates with the Google Translate API.
   :::

:::info[Additional Help]
If the issue persists after troubleshooting, reach out to [support@flutterflow.io](mailto:support@flutterflow.io) with the following:

   - Screenshot or screen recording of the failure
   - Console error logs (if available)
   - A description of where the failure occurs (page/widget/text field)

      This will help the support team resolve the issue faster.
:::


