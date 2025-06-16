---
keywords: ['api', 'error', 'client']
slug: /client-server-errors-during-the-api-call
title: Client-Server Errors during the API call
---
# Client-Server Errors During the API Call


When calling an API in FlutterFlow, you may run into client-server errors. These typically come as status codes that indicate what went wrong—either on your end (the client) or on the server you're requesting data from.

This guide will help you understand the most common API error codes and how to fix them.

## What is an API?

An API (Application Programming Interface) lets two systems communicate with each other. When you make an API call, you're sending a request from your app (client) to a server, which responds with data.

## Common client-side status codes

These errors are usually caused by incorrect requests from the client side.

- **400 – Bad request**

    Your request isn’t properly formatted. This could be due to a missing parameter, a typo, or incorrect syntax.

    :::tip
    Check the API's own documentation to ensure you're including the correct fields and headers.
    :::

    ![400 Example](../assets/20250430121351345482.png)

- **401 – Unauthorized**

    You didn’t provide the correct credentials (like an API key). Most APIs require authentication via headers.

    ![401 Example](../assets/20250430121350799148.png)

- **403 – Forbidden**

    You’re authenticated, but you don’t have permission to access the resource. This could be due to API plan restrictions or role-based access.

    ![403 Example](../assets/20250430121351077308.png)

- **404 – Not found**

    The URL you’re requesting doesn’t exist. This could be due to a typo or a deprecated API endpoint.

    :::tip
    Always double-check your request URL before troubleshooting further.
    :::

    ![404 Example](../assets/20250430121350517804.png)

- **407 – Proxy authentication required**

    You haven't authenticated with the proxy server. This is less common but can happen in restricted network environments.

- **422 – Unprocessable entity**

    Your request was well-formed but couldn’t be processed. For example, passing a `latlng` without a comma.

- **429 – Too many requests**

    You’ve hit your rate limit. Most APIs restrict the number of requests you can make in a certain timeframe.

    :::tip
    Check your API plan limits and consider throttling requests from your app.
    :::

## Common server-side status codes

These errors occur on the API server side.

- **500 – Internal server error**

    The server ran into an unexpected issue. Double-check your request, but if it looks fine, the problem is likely on the server side.

- **501 – Not implemented**

    The HTTP method you're using (example, PUT or PATCH) isn't supported by the API yet.

- **502 – Bad gateway**

    The API server is using a gateway or proxy, and it failed to get a valid response from the upstream server. Usually a temporary issue.

- **503 – Service unavailable**

    The API server is overloaded or undergoing maintenance. Try again later.

- **504 – Gateway timeout**

    The API server took too long to respond. Try simplifying your request or reducing the size of the data being sent.

:::tip[Final tips]
- Always check the API's own documentation, inspect your request, and look up error messages. If the issue persists, contact the API provider.
- Once you fix the issue, your calls should return a `200 OK`, which means everything is working as expected!
:::