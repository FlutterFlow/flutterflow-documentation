---
keywords: ['translation', 'localization', 'google']
slug: /fix-google-translate-errors
title: Fix Google Translate Errors
---

# Fix Google Translate Errors

FlutterFlow integrates with Google Translate to help localize your app automatically. This guide outlines how to identify and resolve common issues with the translation integration.

:::info[Prerequisites]
- Google Translate integration has been added to the project.
- At least one supported language has been configured under **App Settings > Localization**.
- Refer to the **[Google Translate Integration](/concepts/localization/#add-multi-language-support)** guide.
:::

## Common Translation Issues:

   - Long text blocks can exceed Google Translate limits or cause timeouts. When translating such content, consider translating the text externally and pasting it manually into FlutterFlow after clearing the original input.

   - Text that contains unsupported characters such as emojis or non-standard symbols may cause translation errors. These characters should be removed or replaced before attempting translation again.

   - The integration supports a maximum of 10 languages. If more than 10 languages are configured in your project, reduce the number to resolve translation failures.

## Steps to Troubleshoot Translation Failures:

1. **Locate the Problem Area**  
   Identify whether the error occurs on a specific widget, page, or text field to narrow down the source of the issue.

2. **Check the Browser Console**  
   Use Chrome DevTools to inspect the console for errors related to failed translation requests.

3. **Use the Translate All Button**  
   Clicking **Translate All** will begin the process and stop at the first problematic field, helping you identify where the issue occurs.

4. **Temporarily Remove Problem Text**  
   If a specific field is causing an issue, delete the content, run the translation process, and then re-add the translated content manually.

:::tip
If translation issues persist, check the **[FlutterFlow support article](https://intercom.help/flutterflow/en/articles/7850610-troubleshooting-flutterflow-google-translation-issues)** or contact support for further help.
:::
