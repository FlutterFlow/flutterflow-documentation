---
keywords: ['translation', 'troubleshooting', 'google']
author: Unknown
created_at: '1682895648'
slug: /troubleshooting-flutterflow-google-translation-issues
title: Troubleshooting FlutterFlow Google Translation Issues
updated_at: '1712595701'
url: https://intercom.help/flutterflow/en/articles/7850610-troubleshooting-flutterflow-google-translation-issues
---
# Troubleshooting FlutterFlow Google Translation Issues

FlutterFlow integrates with Google Translation to help you localize your app. If you encounter issues, use this guide to resolve common problems and streamline your translation workflow.

---

## 1. Common Issues & Solutions

### 📝 Long Text Forms
- **Problem:** You're trying to translate long forms of text within your project.
- **Solution:** Remove these long text elements and translate them outside of FlutterFlow. Then, manually insert the translated text back into your project. Ensure the input field is empty when attempting to translate again.

### 🔣 Special Characters
- **Problem:** Your app includes special characters that are not supported by the Google Translate API.
- **Solution:** Identify and remove or replace these special characters within your app. After making adjustments, try the translation process again.

### 🌐 More Than 10 Language Options
- **Problem:** Google Translate integration in FlutterFlow supports only up to 10 languages.
- **Solution:** Limit your translation feature to 10 languages.

---

## 2. Step-by-Step Troubleshooting

### 1️⃣ Narrow Down the Issue
Start by identifying where the problem occurs—specific page, component, or text field. Pinpointing the location makes troubleshooting more effective.

### 2️⃣ Check Chrome Developer Console
Look for translation-related errors in the Chrome Developer Console. These errors can provide valuable insights.

### 3️⃣ Use the 'Translate All' Feature
Try the 'Translate All' button to see at what point the translation process fails. This can help you identify problematic elements.

### 4️⃣ Remove and Test Text Elements
Temporarily remove text elements and rerun the translation. If the issue disappears, adjust or manually translate these elements before adding them back.

---

## 3. Still Having Issues?
If the problem persists after following these steps, contact [FlutterFlow Support](https://intercom.help/flutterflow/en/articles/7850610-troubleshooting-flutterflow-google-translation-issues) for further assistance. The team is dedicated to helping you ensure a smooth translation process.

---

> **Summary:**
> - Translate long text outside FlutterFlow
> - Remove unsupported special characters
> - Limit to 10 languages
> - Use step-by-step troubleshooting for persistent issues

With these steps, you can resolve most Google Translation issues in FlutterFlow and keep your app multilingual!