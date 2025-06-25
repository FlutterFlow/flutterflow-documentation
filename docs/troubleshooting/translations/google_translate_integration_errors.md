---
keywords: ['translation', 'localization', 'google']
slug: /google-translate-integration-errors
title: Resolve Google Translate Errors in FlutterFlow
---

# Resolve Google Translate Errors in FlutterFlow

:::info[Prerequisites]
Before troubleshooting translation issues, make sure you’ve completed:

- The **[Google Translate Integration](/concepts/localization/#add-multi-language-support)** setup.
- Added at least one supported language under your **App Settings > Localization** section.
:::

FlutterFlow integrates with Google Translate to help localize your app automatically. This guide walks you through common translation issues and how to fix them effectively.

## Common Google Translate Errors

- **Long Texts Cause Failure**

    If you're translating long paragraphs or form content:

        - **Cause**: The Google Translate API may time out or error with large blocks of text.
        - **Fix**: Translate the content outside FlutterFlow, then paste it back into the appropriate field. Ensure the input is cleared before retrying.

- **Unsupported Special Characters**

    If your app uses unusual symbols or character sets:

        - **Cause**: Google Translate API may reject special characters.
        - **Fix**: Remove or replace characters such as emojis or non-Latin characters. Retry the translation afterward.

- **More Than 10 Languages Configured:**

    - **Cause**: Google Translate integration in FlutterFlow currently supports up to 10 languages.
    - **Fix**: Limit your translation to a maximum of 10 languages under **App Settings > Localization**.


## Identify the Source of Translation Errors

Follow these steps to isolate and resolve translation problems:

- Step 1: **Locate the Problem Area**

    Identify whether the issue happens on a specific page, widget, or element. This helps narrow down the root cause.

- Step 2: **Check Developer Console**

    Use the Chrome DevTools console to view translation-related error logs. Look for clues that indicate what went wrong.

- Step 3: Use the **Translate All** Feature

    Try the **Translate All** button to see where the failure occurs. The process may stop at the specific problematic text field.

- Step 4: Temporarily Remove Problem Text

    Remove large or complex text temporarily. Retry the translation. If it works, re-add the text in a translated form manually.

If the issue persists, visit the **[FlutterFlow Support Guide](https://intercom.help/flutterflow/en/articles/7850610-troubleshooting-flutterflow-google-translation-issues)** or reach out to our support team directly.