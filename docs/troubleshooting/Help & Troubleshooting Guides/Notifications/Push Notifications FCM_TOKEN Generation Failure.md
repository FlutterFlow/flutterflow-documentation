---
keywords: ['permissions', 'authentication', 'debug']
author: Unknown
created_at: '1677582718'
slug: /push-notifications-fcm-token-generation-failure
title: 'Push Notifications: FCM_TOKEN Generation Failure'
updated_at: '1713209921'
url: https://intercom.help/flutterflow/en/articles/7037979-push-notifications-fcm_token-generation-failure
---
# Push Notifications: FCM_TOKEN Generation Failure

Issue: No Subcollection
The issue of users not having the "fcm_token" sub-collection presents a significant barrier to the successful delivery of push notifications within your application. 

Push notifications are a vital means of engaging users, providing timely updates, alerts, and personalized messages. However, without the essential Firebase Cloud Messaging (FCM) tokens stored within the "fcm_token" sub-collection, your application lacks the necessary mechanism to target and deliver notifications to individual devices.

What Causes This Issue
The inability to send push notifications stems from missing "fcm_token" sub-collections in user documents. Push notifications, crucial for user engagement, require the Firebase Cloud Messaging (FCM) token stored in this sub-collection to reach intended recipients.

Firebase generates a unique token when a user logs in or signs up, typically stored in the "fcm_token" sub-collection of Firestore. This token enables notification routing to specific devices.

A missing "fcm_token" sub-collection indicates failures in token generation or user authentication. Without it, the system can't deliver targeted notifications, risking users missing important updates.

Addressing this involves determining why the "fcm_token" sub-collection is absent in affected documents. Solutions include troubleshooting the token generation process, ensuring Firebase services are correctly integrated during user authentication, and verifying proper document structure to house FCM tokens.​
![](../../assets/20250430121302960895.png)
**How to Check If a User Can Receive Push Notifications**

**Accessing Firebase Project**: Begin by accessing your Firebase project dashboard and navigating to the Firestore database section. This is where user data, including FCM tokens, is stored.​

**Locating User Document**: Within the Firestore database, locate the document corresponding to the user you intend to send a notification to. This document typically contains user-specific information.​

**Checking for "fcm_token" Sub-collection**: Once you've located the user document, check if there is a sub-collection named "fcm_token" associated with it. This sub-collection is where Firebase stores the unique tokens generated for each user upon successful login to a physical device.​

**Confirmation of FCM Token Existence**: If the "fcm_token" sub-collection exists within the user document, it indicates that Firebase has successfully generated a token for the user. This means the user is capable of receiving push notifications on their device.​

Troubleshooting Why An FCM Token Isn't Created
There are several potential reasons why your cloud function may be unable to create an FCM token in a user document for notifications. Here are some possibilities to consider:​
```
Please note that you must have created a database and at least one user document, and have logged in with the user on a physical device before proceeding.
```

**Viewing the addFcmToken Logs**

**Locating the addFcmToken Backend Function**: Access your Firebase project dashboard and navigate to the Functions section. Here, you can locate the "addFcmToken" backend function responsible for generating and storing FCM tokens.

**Accessing Logs**: Within the Functions section, locate the "addFcmToken" function and access its logs. These logs contain valuable information about the execution of the function, including any errors encountered during the process of creating FCM tokens.

**Analyzing Log Entries**: Review the log entries for the "addFcmToken" function to identify any errors or exceptions that occurred during token generation. Look for specific error messages or status codes that may indicate issues with permission settings or other underlying problems.

![](../../assets/20250430121303270464.png)
**Addressing Permission Errors**

**Understanding Permission Requirements**: Recognize that creating a new FCM token in a user document requires the appropriate permissions to write to the Firebase Realtime Database or Cloud Firestore. Without these permissions, the "addFcmToken" function will fail to execute successfully.​

**Resolving Permission Issues**: To resolve permission errors, ensure that your Firebase project's security rules are properly configured to grant the necessary permissions. Specifically, focus on the permissions related to the users collection where user documents and FCM tokens are stored.​

**Deploying Firebase Rules**: Deploy any updates to your Firebase security rules to ensure that the changes take effect. This ensures that the "addFcmToken" function has the required permissions to write FCM tokens to user documents.​

**Adding Necessary Permissions**: Verify that the "firebase@flutterflow.io" service account, which is associated with your FlutterFlow project, has been granted the required permissions. Specifically, ensure that it has both the Cloud Functions Admin and Service Account User roles assigned to it. You can view instructions on how to do this here.

Ensure Cloud Function Is Receiving Valid Input Data
When a cloud function fails with a status code of 400, it often indicates that the function is receiving invalid input data. This can happen if the function expects a specific format or type of data, but the input doesn't match those expectations. In the case of creating an FCM token, the cloud function may require a valid user ID to generate the token successfully.

If you are using the Firebase authentication methods provided by FlutterFlow, this shouldn't be an issue. FlutterFlow's built-in authentication components handle the user authentication process securely and provide valid user data to the cloud functions.

However, if you have implemented your own custom authentication code, it's important to ensure that the user ID being passed to the cloud function is valid and exists in your authentication system. Here are a few steps you can take to validate the input data:

**Double-check the authentication flow**: Review your custom authentication code to ensure that it correctly retrieves and passes the user ID to the cloud function. Make sure there are no errors or inconsistencies in the authentication process.​
**Validate the user ID**: Before sending the user ID to the cloud function, perform validation checks to ensure it is not null, empty, or in an invalid format. You can use conditional statements or data validation techniques to handle cases where the user ID is invalid.​
**Handle edge cases**: Consider scenarios where the user ID may not be available or may have an unexpected value. Implement appropriate error handling and fallback mechanisms to gracefully handle such cases without causing the cloud function to fail.​
**Log and debug**: Implement logging statements in your custom authentication code and cloud function to capture relevant information during the execution. This will help you identify the exact point where the invalid input data is being passed and assist in debugging the issue.​
**Test with valid and invalid data**: Conduct thorough testing of your authentication flow and cloud function by providing both valid and invalid user IDs. Ensure that the cloud function handles invalid input data appropriately and returns meaningful error messages.
By validating and handling the input data correctly, you can prevent the cloud function from failing due to invalid user IDs. This will ensure a smooth user experience and prevent potential issues related to FCM token generation.

It is important to note, if you are using FlutterFlow's provided authentication methods, the likelihood of encountering this issue is minimal. However, if you have custom authentication code, it's crucial to validate and handle the input data appropriately to maintain the stability and reliability of your application.​
FCM Server Error Check 
When working with Firebase Cloud Messaging (FCM) in FlutterFlow, you may encounter errors when trying to create an FCM token using a cloud function. This article will guide you through the troubleshooting process to identify and resolve the issue.

**Possible Causes:**

**FCM Server Issues**: The error could be caused by problems with the FCM server itself. If the FCM server is experiencing downtime or technical difficulties, it may prevent the cloud function from successfully creating the FCM token.

**Incorrect Cloud Function Request**: The cloud function's request to the FCM server may be incorrect or malformed. This could happen if the required parameters or headers are missing or if the request payload is not properly formatted.

**Insufficient Permissions**: The cloud function may lack the necessary permissions to make requests to the FCM server. Ensure that the function has the appropriate permissions and access rights to interact with FCM.

**Invalid Input Data**: The input data passed to the cloud function may be invalid or incomplete. Double-check that the required data, such as the device token or other relevant information, is correctly provided to the function. 

If the problem persists, you may want to consider reaching out to the Firebase or FCM support teams for additional assistance.

Additional Resources

​​​

