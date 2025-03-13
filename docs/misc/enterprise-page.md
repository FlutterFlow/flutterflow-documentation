---
slug: /misc/enterprise
title: Enterprise
description: Learn how to use FlutterFlow for Enterprise.
tags: [Enterprise]
sidebar_position: 1
keywords: [Enterprise Support Policy, Whitelist URLs]
---

# Enterprise

## Whitelist URLs

Enterprise environments often restrict internet access to enhance security and compliance. For example, they may allow access only to approved URLs that are essential for work-related tasks. FlutterFlow won't properly work in such restrictions because it accesses multiple services—Firestore, Cloud Functions, and various APIs—these URLs must be allowed in your corporate firewall for everything to function correctly.

To find out which URLs need to be whitelisted, navigate to the URL Access page from the FlutterFlow [dashboard](../intro/ff-ui/dashboard.md). Any URLs marked as **Inaccessible** are currently blocked by your network, which may prevent certain features from functioning properly. You can copy these URLs individually or use the Copy All Inaccessible URLs button in the top-right corner to collect them all at once. Then, share the list with your IT team for whitelisting.

![url-access](imgs/url-access.avif)

## Enterprise Support Policy

We understand our Enterprise customers often rely on FlutterFlow for mission critical applications. To that end, we have created a dedicated Enterprise support team to provide the highest level of service and support. This document outlines our support channels and scope for Enterprise customers.

### Support Channels

Enterprise customers can reach our dedicated support team either through the chat widget in FlutterFlow or by emailing us. Our Enterprise support team is available 24x7, and we do our best to respond to every support request as quickly as possible. Depending on the complexity of the issue and your Enterprise support subscription, our team can assist through chat, email or video calls.

### What We Can Help With

Our goal is for every one of our Enterprise customers to be successful building in FlutterFlow. Here are some of the areas covered by our Enterprise support team:

* Guidance on what is possible within FlutterFlow (e.g. can I use non-Firebase authentication)
* General education on FlutterFlow features and platform capabilities
* Bugs and technical issues with core FlutterFlow features
* Team and user account administration

Depending on your Enterprise support subscription, we may also provide advisory services in the following areas:

* Feature Design & Implementation
* Data Infrastructure Design
* Integration & Troubleshooting of 3rd-party APIs
* Implementation & Troubleshooting of Custom Widgets and Code

### FlutterFlow Bug Policy

We know that bugs can be frustrating and we work to fix these on an ongoing basis. If you think you've found a bug, please [submit an bug report](https://github.com/FlutterFlow/flutterflow-issues/issues).

#### **Our Approach To Fixing Bugs**

To ensure we fix the most critical issues first, we assess each bug based on the severity and number of users impacted.

Our highest priority is fixing critical issues that impact a large number of users. Issues impacting a smaller number of users or that have a workaround are addressed after any critical issues are fixed.

We provide updates on our bug fixes in our marketing emails and in our Release Tracker.