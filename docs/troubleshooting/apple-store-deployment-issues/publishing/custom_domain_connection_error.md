---
keywords: ['configuration', 'connect', 'domain']
slug: custom-domain-connection-error
title: Custom Domain Connection Error
---
# Custom Domain Connection Error

If you encounter the error shown below after clicking **Connect**, follow these steps to resolve it:

![](../../assets/20250430121243410633.png)

- **Verify DNS Records**

    - Ensure that you have correctly configured the DNS records required for your custom domain connection.
    - Add the keys provided by FlutterFlow to your domain’s DNS settings.

        :::note
        For A records, if your DNS provider requires a name, you can use **"@"**. When you see an empty value, it typically refers to **"@"**.
        :::

        ![](../../assets/20250430121243684493.png)

- **Check for Conflicting Records**

    - Review your DNS configuration to ensure there are no extra or unnecessary records that conflict with the FlutterFlow-provided keys.
    - For example, if you already have an A record using **"@"**, remove it to avoid conflicts.

        :::note
        Before removing any existing DNS records, take screenshots and save them for reference.
        :::

**Example Configurations**

    Below are examples of correct configurations in FlutterFlow and your DNS provider:

    ![](../../assets/20250430121243982678.png)

    ![](../../assets/20250430121244255037.png)

    By following these steps, you can ensure your custom domain is connected correctly.

