---
keywords: ['apis', 'test-api', 'api-call']
slug: troubleshooting/test-mode/test-api-calls
title: Test API Calls
---

# Test API Calls

Verifying an API response before integrating it into your app helps prevent runtime issues and ensures your data is structured correctly. This guide walks you through testing an API directly within FlutterFlow.

:::info[Prerequisites]
- A project is open in FlutterFlow.
- An API key or endpoint is available if required by the API.
:::

**Steps to Test API Calls:**

1. **Open the `API Calls` Panel**

   From the left sidebar, go to the `API Calls` section.

   ![](../assets/20250430121444122926.png)

2. **Select or Create an API Call**

   Choose an existing `API Call` or click `+ Add API Call` to create a new one.

   ![](../assets/20250430121444364083.png)

3. **Enter the API Endpoint**

   Add the endpoint and necessary parameters, headers, or authentication.

   ![](../assets/20250430121444571412.png)

4. **Click the `Response & Test` Tab**

   Navigate to the `Response & Test` tab to preview the response structure.

   ![](../assets/20250430121444783602.png)

5. **Run the API Test**

   Click the `Test API Call` button to trigger the request. If successful, the API response displays in JSON format.

   ![](../assets/20250430121445020637.png)

   A valid API response displays a structured output like the example below::

   ![](../assets/20250430121445238952.png)

:::tip
Use **[JSONPath](https://jsonpath.com/)** to validate and extract values from the returned JSON structure during testing.
:::
