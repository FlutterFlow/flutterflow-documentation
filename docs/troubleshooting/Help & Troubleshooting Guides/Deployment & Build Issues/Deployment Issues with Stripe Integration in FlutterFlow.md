---
keywords: ['deployment', 'issues', 'integration']
author: Unknown
created_at: '1711613281'
slug: /deployment-issues-with-stripe-integration-in-flutterflow
title: Deployment Issues with Stripe Integration in FlutterFlow
updated_at: '1712593748'
url: https://intercom.help/flutterflow/en/articles/9127283-deployment-issues-with-stripe-integration-in-flutterflow
---
# Deployment Issues with Stripe Integration in FlutterFlow

Developers often face hurdles during the deployment. This article outlines solutions to common deployment issues associated with Stripe integration.​

1. Firebase Connection
Stripe integration requires a connected Firebase project. Before running through this checklist, it's important to ensure your FlutterFlow project is linked to Firebase, a crucial step for successful payment processing. Detailed guidance can be found at FlutterFlow's Firebase Setup.

2. Upgrade to Firebase Blaze Plan
Stripe functionality requires a Firebase Blaze Plan for operational capabilities. To avoid disruptions, you will need to upgrade from the Firebase Spark plan to the Blaze plan. Learn more about Google's process for upgrading here.

3. Set the Google Cloud Platform (GCP) Location
A defined Google Cloud Platform (GCP) location for your Firebase project ensures the correct regional operation of services. The absence of a set location can hinder the deployment process.​
![](../../assets/20250430121121827511.png)
4. Firebase Project Permissions
Ensure you have the necessary permissions enabled for your Firebase project. Two critical permissions involve access management and service configuration. You can reference the setup guide on FlutterFlow Documentation.​
![](../../assets/20250430121122068343.png)
5. Correct Merchant Code
Use the correct 3-letter merchant country code (e.g., "GBR" for the United Kingdom vs. "UK"). Incorrect codes can lead to failed transactions. For accurate codes, refer to IBAN Country Codes.​
![](../../assets/20250430121122307123.png)![](../../assets/20250430121122597517.png)
6. Test and Live Keys
For deployment, both Test and Live Stripe keys must be configured in your project settings, regardless of the development stage. This ensures Stripe's API can properly interact with your application.​
![](../../assets/20250430121122925141.png)
7. Consistent Region Settings
Align your Firebase project's region with that of your FlutterFlow settings to prevent deployment failures. Inconsistencies can cause function deployment issues.​
![](../../assets/20250430121123230941.png)![](../../assets/20250430121123502329.png)If you find that this article hasn't fully addressed your concerns or if you have more questions, please don't hesitate to reach out to us at support@flutterflow.io

​