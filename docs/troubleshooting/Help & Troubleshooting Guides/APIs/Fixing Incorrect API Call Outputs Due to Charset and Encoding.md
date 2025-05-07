---
keywords: ['api', 'call', 'outputs']
author: Unknown
created_at: '1655745704'
slug: /fixing-incorrect-api-call-outputs-due-to-charset-and-encoding
title: Fixing Incorrect API Call Outputs Due to Charset and Encoding
updated_at: '1713209676'
url: https://intercom.help/flutterflow/en/articles/6318992-fixing-incorrect-api-call-outputs-due-to-charset-and-encoding
---
# Fixing Incorrect API Call Outputs Due to Charset and Encoding

Overview
API responses can vary based on factors like charset and encoding, occasionally leading to what may seem like incorrect outputs. This brief guide offers a solution to address and correct such issues.

Solution for Accurate API Responses
Ensure the API header is correctly set up by including the following elements:

`Content-Type: application/json`

`Charset: utf-8`​

![](../../assets/20250430121409119593.png)You can also set up an API advanced settings whether to force the response to be decoded as UTF-8:​
![](../../assets/20250430121409391507.png)
By verifying these settings, you can get more consistent and accurate outputs from your API calls.


