---
title: Access Page Links After Activating Dynamic Links
slug: /access-page-link-after-activating-dynamic-link
keywords: ['access', 'dynamic', 'activating']
---

# Access Page Links After Activating Dynamic Links

Once you've enabled **Deep Linking & Routing** in FlutterFlow, you can also activate **Firebase Dynamic Links**.

> Want to know more about Firebase Dynamic Links?  
> Refer to the Firebase documentation for setup and integration details.

![Dynamic Links Enabled](../assets/20250430121453205914.png)

When you activate dynamic links, you gain access to **page-specific links**. This allows you to share or route users to exact screens within your app.

---

## Important Note

If you enable dynamic links, you must use `"https"` for the URL scheme.

---

## How to Set Up Dynamic Links in FlutterFlow

To share or use the current page URL, follow these steps:

1. **Add an Action**: Use the `Generate Current Page Link` action to create a dynamic link for the active screen.

2. **Access the Page URL**: Once generated, the page URL becomes accessible through the **Widget State → Current Page Link**.

3. **Use It in Another Action**: For example, on your **Share** button, add:
   - A `Generate Current Page Link` action first
   - Then a `Share` action using `Current Page Link` as the source

---

![Share Button Example](../assets/20250430121453493755.png)
