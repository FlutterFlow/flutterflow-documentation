---
keywords: ['google', 'work', 'login']
author: Unknown
created_at: '1677590725'
slug: /social-logingoogle-signin-does-not-work-in-runtest-or-web
title: Social login/Google signin does not work in RUN/TEST or Web?
updated_at: '1678111475'
url: https://intercom.help/flutterflow/en/articles/7038347-social-login-google-signin-does-not-work-in-run-test-or-web
---
# Social login/Google signin does not work in RUN/TEST or Web?

If you want to use social login features such as Google sign-in, Facebook, Microsoft, etc. on RUN or TEST mode or for your published web application, you need to add your domain to Firebase Authentication/Authorized Domain.Documentation link

![](../assets/20250430121259325933.png)
By doing this, you will whitelist your domain for Firebase authentication and give permission to the social login performed from the domain as an origin.
Here are the steps to follow:

Open your Firebase project.

Go to Authentication &gt; Settings.

Select Authorized Domains.

You should now see a list of domains that are already authorized. To add your domain, click on the Add Domain button.
For instance, if you want to use social login in RUN mode in Flutterflow builds, you can whitelist this domain: app.flutterflow.io. If you published your app to yourapp.flutterflow.app, you need to add the exact same URL to your Authorized domains.