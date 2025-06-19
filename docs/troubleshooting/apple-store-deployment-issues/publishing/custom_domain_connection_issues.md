---
keywords: ['error', 'custom', 'domains']
slug: custom_domain_connection_issues
title: Custom Domain Connection Issues
---
# Custom Domain Connection Issues

This article provides solutions for common problems encountered when connecting custom domains.

**DNS Records Not Found During Connection**

When setting up a custom domain, FlutterFlow requires specific DNS records. If you receive an error stating **"Expected DNS records not found"**, follow these steps:

1. **Verify DNS Records**

   - Use tools like **[nslookup.io](https://www.nslookup.io)** to verify that your DNS A and CNAME records match the configuration provided in FlutterFlow.
   - Ensure no conflicting A, AAAA, or CNAME records exist.
   
   ![](../../assets/20250430121150651702.png)


2. **Allow time for DNS propagation**: DNS updates may take up to 24 hours. Wait at least one hour after making changes before attempting to reconnect.

3. **Retry connection**: After verifying and waiting, attempt to reconnect your domain.

4. **Contact registrar support if necessary**

   - If all settings are correct and the issue persists after 48 hours, contact your domain registrar to confirm DNS configuration.

**Difficulty Creating DNS Records**

Each domain registrar may handle DNS record formats differently. Consider the following:

   - For root domains (e.g., example.com), some registrars require an empty name field, some require `"@"`, and others require the full domain name.
   - For subdomains (e.g., test.example.com), some registrars require just `"test"`, while others require `"test.example.com"`.
   - Refer to your registrar’s documentation for details on creating DNS records.

**404 Error After Connecting Domain**

If you receive a **404 error** after connecting your domain:

   - Publish the project again after connecting the domain. This will resolve most 404 errors related to domain connection.

**DNS Restrictions for SSL Certificates**

Sometimes, DNS restrictions prevent FlutterFlow from generating SSL certificates due to CAA record limitations. To resolve this:

   1. **Check for CAA Records**

      - Use **[nslookup.io](https://www.nslookup.io/domains/your-site-name/dns-records/caa/)** (replace `your-site-name` with your actual domain name).

   2. **Adjust CAA Records**

      - Add `"letsencrypt.org"` to your allowed certificate authorities, or remove conflicting CAA records.

         Once the CAA records allow Let's Encrypt, FlutterFlow should be able to complete the domain connection process.

If you continue to face challenges, contact FlutterFlow support through Live Chat or email support@flutterflow.io for further assistance.
