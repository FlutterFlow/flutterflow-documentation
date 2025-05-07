---
keywords: ['api', 'error', 'client']
author: Unknown
created_at: '1659004612'
slug: /api-troubleshooting-client-server-errors-during-the-api-call
title: API Troubleshooting, Client-Server Errors during the API call
updated_at: '1660129958'
url: https://intercom.help/flutterflow/en/articles/6423537-api-troubleshooting-client-server-errors-during-the-api-call
---
# API Troubleshooting: Client-Server Errors During the API Call

**Application Programming Interfaces (APIs)**

APIs allow two programs to communicate and transfer data. An API call is when a client application submits a request to an API, which retrieves the requested data from an external server or program and delivers it back to the client.

---

## Error Status Codes When Building APIs

### 1. Client-Side Status Codes

#### **404 Not Found**
This is the most common HTTP status code. It indicates that the URL used in your request doesn’t exist on the API server or origin server. While this is a 4XX error (usually meaning something on the client-side is wrong), it can also indicate a server problem. Sometimes API URL paths change after a version update, or due to server issues.

> **Tip:** Check for typos in your client code before investigating API issues.

![404 Example](../../assets/20250430121350517804.png)

#### **401 Unauthorized**
This status code means you haven’t authenticated against the API. The API doesn’t know who you are and won’t serve you. For most APIs, you need to sign up and get an API key, which is used in an HTTP header field when sending a request.

This is similar to the less common **407 Proxy Authentication Required**, which means you haven’t authenticated with the proxy.

![401 Example](../../assets/20250430121350799148.png)

#### **403 Forbidden**
This status indicates you don’t have permission to request that URL. You’re authenticated, but your user or role isn’t permitted to make the API request. This can also occur if you use the wrong API key or try to access features not allowed by your subscription plan.

![403 Example](../../assets/20250430121351077308.png)

#### **400 Bad Request**
The *400 Bad Request* error is generic. It means your API request was not correctly formatted. If no additional error information is given in the response body, check the docs. You could be missing a query, a field in the request body, or a header field could be wrong. Incorrect syntax in your request data can also cause this.

This differs from the *422 Unprocessable Entity* error, which appears when your request is correctly formatted but cannot be processed. For example, passing a badly formatted `latlang` value to the API (e.g., missing a comma).

![400 Example](../../assets/20250430121351345482.png)

#### **429 Too Many Requests**
Most API subscription plans have limits—the cheaper the plan, the fewer requests per second are allowed for your API key. If you send too many requests in a short time, consider throttling them in your client. This response can also indicate you hit a daily, weekly, or monthly limit on your account.

> **Tip:** Check your API subscription limits before integrating, or you may run into problems later.

---

### 2. Server-Side Status Codes

Sometimes, server-side API errors occur. Here are common ones:

#### **500 Internal Server Error**
This code can mean anything, but usually indicates the API server crashed. It could be caused by your API call or by buggy code/data from an upstream service. Double-check the docs for correct query fields, body fields, headers, and format. If the problem persists, contact the API’s support.

#### **502 Bad Gateway**
This response means the server you called was a gateway or proxy, not the actual API server. The proxy tried to call the API server but didn’t get a response. This could be a network problem, server crash, or maintenance. Usually, this is temporary and should be solved by the API provider.

#### **503 Service Unavailable**
This status indicates a server error—too many API requests were sent and the API can’t handle more. The problem usually resolves itself when clients send fewer requests, but it could also mean the API provider didn’t plan enough resources. If the error persists, contact the API provider.

#### **504 Gateway Timeout**
Like 502, this means the server you called is a proxy for the real API server, but the API server took too long to respond. This could be due to high network latency or a slow API server. Try reducing the amount of data or complexity of your request. If the error persists, contact support.

#### **501 Not Implemented**
This status code is related to the HTTP method you used. Try a different HTTP method. Usually, an inappropriate method results in a 404, but 501 means the method isn’t implemented yet and may be available in the future.

---

You’ll encounter many error codes when using APIs, but most have reasonable fixes. Some are server errors, some are client-side errors, and often one can cause the other.

> **Best Practice:** Always read the docs and API notes thoroughly. If things are broken, contact the API provider or search for answers on the web (e.g., StackOverflow). Stay determined, and you’ll see your 200 OK status codes in no time!