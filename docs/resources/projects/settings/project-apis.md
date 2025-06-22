---
slug: project-apis
title: Project APIs
tags: [APIs, Projects]
keywords: [projects, apis, refactor code]
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Project API

The FlutterFlow **Project APIs** allow you to programmatically read, write, and validate YAML configuration files through REST endpoints. Using these APIs, you can automate project management tasks, integrate continuous integration and delivery (CI/CD) workflows, and apply bulk configuration updates without manual interactions with the FlutterFlow user interface.

:::warning

The Project API is currently in beta and may undergo changes that could affect functionality or compatibility.

:::

:::info[Prerequisites]

Before using the Project YAML API, make sure you have the following:

- **HTTP Client**: Use a tool like `curl`, [**Postman**](https://www.postman.com/), or an HTTP library in your preferred programming language (e.g., `axios`, `requests`).
- **Project Access**: You must have read access for GET/validation operations and an editor access for making updates to the project.
- **Paid Plan**: You need a paid [**FlutterFlow subscription plan**](https://www.flutterflow.io/pricing).

:::

## YAML Overview

### What are FlutterFlow Project YAMLs?

YAML (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files. In FlutterFlow, **Project YAMLs represent the complete structural definition of your app,** essentially exposing the full project schema that powers your FlutterFlow app.

### What's Included in the Project Schema?

FlutterFlow's YAML files contain a comprehensive representation of your entire project, including:

- **UI Components & Pages**: Widget trees, page layouts, component hierarchies, and styling configurations.
- **App Configuration**: Settings like app details, authentication methods, integrations (AdMob, Firebase, etc.)
- **Data Structures**: Database collections, API schemas, app state variables, and custom data types.
- **Business Logic**: Actions, functions, conditional logic, and workflow definitions.
- **Assets & Resources**: Custom code files, image references, fonts, and other project assets.
- **Project Organization**: Folder structures, component libraries, and project metadata.

### YAML vs. FlutterFlow UI

Every change you make in the FlutterFlow visual editor — from dragging a widget onto a page to configuring a database collection, is ultimately stored as structured data in these YAML files. The FlutterFlow UI provides an intuitive visual interface for editing this underlying schema, while the Project API gives you direct programmatic access to the same data.

### File Structure

FlutterFlow automatically partitions your project into logical YAML files for optimal performance and organization. Each file represents a specific aspect of your project (e.g., `app-state`, `ad-mob`, individual pages, collections, etc.), making it easy to target specific updates without affecting the entire project.

## Base URL

FlutterFlow provides different API endpoints for various environments. Use the appropriate base URL below depending on your needs:

<Tabs>
<TabItem value="1" label="Production" default>
```jsx
https://api.flutterflow.io/v2/
```
</TabItem>
<TabItem value="2" label="Beta/Staging">
```jsx
https://api.flutterflow.io/v2-staging/
```
</TabItem>
<TabItem value="3" label="Enterprise">

**India**
```jsx
 https://api-enterprise-india.flutterflow.io/v2/
```

**APAC**
```jsx
https://api-enterprise-apac.flutterflow.io/v2/
```

**US Central**
```jsx
https://api-enterprise-us-central.flutterflow.io/v2/
```

**Europe**
```jsx
https://api-enterprise-europe.flutterflow.io/v2/
```
</TabItem>
</Tabs>
   
## Authentication

All API endpoints require authentication using a Bearer token. You'll need to include your FlutterFlow API token in the Authorization header of each request. See [how to get the API Token](../../../accounts-billing/account-management.md#how-do-i-generate-an-api-token).

```jsx
Authorization: Bearer YOUR_API_TOKEN_HERE
```

## API Endpoints
Below is a list of available API endpoints with their methods and usage descriptions.

| Endpoint                    | Method | Purpose                                       |
| --------------------------- | ------ | --------------------------------------------- |
| `/listPartitionedFileNames` | GET    | List available YAML file names for a project  |
| `/projectYamls`             | GET    | Export/download YAML files from a project     |
| `/validateProjectYaml`      | POST   | Validate YAML content before applying changes |
| `/updateProjectYaml`        | POST   | Update project configuration via YAML         |


### List File Names

Before you read or update project files, you need to know what YAML files are available. This endpoint returns a full list of file names associated with your FlutterFlow project.

#### Endpoint 
`GET /listPartitionedFileNames`

#### Query Parameters
`projectId` (required): The ID of the FlutterFlow project

#### Response
```jsx
{
  "success":true,
  "reason":null,
  "value":{
    "versionInfo": {
      "partitionerVersion": 6, 
      "projectSchemaFingerprint": "abc123"
    },
    "fileNames": [
      "folders",
      "app-details",
      "collections/id-yr7z6g5a",
      "page/id-Scaffold_l9g6ilb6/page-widget-tree-outline/node/id-Column_174wuhc4",
      "custom-file/id-MAIN/custom-file-code",
      ...
    ]
  }
}
```

The `fileNames` array lists out all the available YAML files. The `versionInfo` section provides metadata about the schema version and its unique fingerprint. If any part of `versionInfo` changes, it indicates that the API or the structure of the YAML responses has been updated.

#### Example Usage
```jsx
curl -X GET \
  'https://api.flutterflow.io/v2/listPartitionedFileNames?projectId=your-project-id' \
  -H 'Authorization: Bearer YOUR_API_TOKEN'
```



### Download Project YAML

You can download specific or all YAML configuration files from your FlutterFlow project. This helps in understanding the current structure of the file before modifying it.

#### Endpoint
`GET /projectYamls`

#### Query Parameters
- `projectId` (required): The ID of the FlutterFlow project
- `fileName` (optional): Specific file to export (without extension). If not provided, all files are exported.

#### Response
Returns a zip file encoded as a base64 string. You will need to manually decode this base64 data into a downloadable .zip file. To do so, copy the value of `projectYamlBytes` and then you can use online tools such as [base64.guru](https://base64.guru/converter/decode/file) or [b64encode.com](https://b64encode.com/tools/base64-to-zip/) to convert and download the files.

```jsx
{
  "success":true,
  "reason":null,
  "value":{
    "versionInfo": {
      "partitionerVersion": 6,
      "projectSchemaFingerprint": "abc123"
    },
    "projectYamlBytes": "UEsDBAoAAAAAAKxV..."
  }
}
```

#### Example Usage
```jsx
# Export all YAML files
curl -X GET \
  'https://api.flutterflow.io/v2/projectYamls?projectId=your-project-id' \
  -H 'Authorization: Bearer YOUR_API_TOKEN'

# Export specific file
curl -X GET \
  'https://api.flutterflow.io/v2/projectYamls?projectId=your-project-id&fileName=ad-mob' \
  -H 'Authorization: Bearer YOUR_API_TOKEN'
```

### Validate Project YAML

You must validate the YAML content before applying changes to ensure it's properly formatted and contains valid values.

#### Endpoint
`POST /validateProjectYaml`

#### Request Body
```jsx
{
  "projectId": "your-project-id",
  "fileKey": "ad-mob",
  "fileContent": "showTestAds: false\nappId: \"your-app-id\""
}
```

:::info

- In the `fileContent` object, you must provide the **entire content** of the file.
- The YAML content must be passed as a **single-line string** with correct formatting and appropriate escaping for new lines and indentation. For example, in the following `fileContent` object, you see the actual multiline YAML content, which is not allowed ❌.
    
    ```jsx
    {
      "projectId": "ecommerce-flow-app-ie7nl6",
      "fileKey": "app-state",
      "fileContent": "fields:
      - parameter:
          identifier:
            name: myAppState
            key: hg7j8z0y
          dataType:
            scalarType: String
          description: "Stores the current user session state"
        persisted: false"
    }
    ```
    
  Now, here’s how the YAML content should be passed (i.e., as single line string ✅).

  ```jsx
  {
    "projectId": "ecommerce-flow-app-ie7nl6",
    "fileKey": "app-state",
    "fileContent": "fields:\n  - parameter:\n      identifier:\n        name: myAppState\n        key: hg7j8z0y\n      dataType:\n        scalarType: String\n      description: \"Stores the current user session state\"\n    persisted: false"
  }
  ```

:::

#### Response
- **Success (200):** YAML is valid - `{"success": true, "reason": null, "value": ""}`
- **Error with validation details:**
  ```jsx
  {
    "validationErrors": [
      {
        "message": "Expected bool value",
        "fileKey": "ad-mob",
        "yamlLocation": {
          "line": 1,
          "column": 15
        }
      }
    ]
  }
  ```

#### Example Usage
```jsx
curl -X POST \
  'https://api.flutterflow.io/v2/validateProjectYaml' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "projectId": "your-project-id",
    "fileKey": "ad-mob", 
    "fileContent": "showTestAds: false"
  }'
```


### Update Project YAML

This endpoint allows you to overwrite existing files in your FlutterFlow project by submitting updated YAML content.

#### Endpoint
`POST /updateProjectYaml`

#### Request Body
```jsx
{
  "projectId": "your-project-id",
  "fileKeyToContent": {
    "ad-mob": "showTestAds: false",
  }
}
```
:::info
- In the `fileKeyToContent` object, you must provide the **entire content** of the file.
- The YAML content must be passed as a **single-line string** with correct formatting and appropriate escaping for newlines and indentation. For example, in the following `fileKeyToContent` object, you see the actual multiline YAML content, which is not allowed ❌.
    
    ```jsx
    {
      "projectId": "ecommerce-flow-app-ie7nl6",
      "fileKeyToContent": {
        "app-state": "fields:
          - parameter:
          identifier:
            name: myAppState
            key: hg7j8z0y
          dataType:
            scalarType: String
          description: "Stores the current user session state"
        persisted: false"
      }
    }
    ```
    Now, here’s how the YAML content should be passed (i.e., as single line string ✅).
    ```jsx
    {
      "projectId": "ecommerce-flow-app-ie7nl6",
      "fileKeyToContent": {
        "app-state": "fields:\n  - parameter:\n      identifier:\n        name: myAppState\n        key: hg7j8z0y\n      dataType:\n        scalarType: String\n      description: \"Stores the current user session state\"\n    persisted: false"
      }
    }
    ```

:::

#### Response
- **Success (200):** `{"success": true, "reason": null, "value": ""}`
- **Error (400):** Validation errors or malformed request.
- **Error (403):** Insufficient permissions or project locked.
- **Error (404):** Project or user not found.

#### Example Usage

This example updates the `ad-mob` file and adds/updates app state variables.

```jsx
curl -X POST \
  'https://api.flutterflow.io/v2/updateProjectYaml' \
  -H 'Authorization: Bearer YOUR_API_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "projectId": "your-project-id",
    "fileKeyToContent": {
      "ad-mob": "showTestAds: false",
      "app-state": "fields:\n  - parameter:\n      identifier:\n        name: myAppState\n        key: hg7j8z0y\n      dataType:\n        scalarType: String\n      description: \"Stores the current user session state\"\n    persisted: false\n  - parameter:\n      identifier:\n        name: userPreferences\n        key: abc123xy\n      dataType:\n        scalarType: JSON\n      description: \"User settings and preferences\"\n    persisted: true"
    }
  }'
```
## API Usage Example

Let’s walk through a practical example of updating an app state variable using the Project APIs.

:::info
You can download and use <a href="../../../../static/jsons/FlutterFlow_APIs.postman_collection.json" download><strong>Postman Collection</strong></a> to quickly test all FlutterFlow Project APIs with pre-filled headers, parameters, and sample requests.
:::



First, we use the `/listPartitionedFileNames` endpoint to check if the `app-state` file exists in the project. Once confirmed, we call the `/projectYamls` endpoint to download the YAML file. The API returns a base64-encoded string representing a zip file, which we decode and download using tools like [Base64 to ZIP](https://b64encode.com/tools/base64-to-zip/).

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/w2J3uhp0CbFusSBblbos?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

Next, we open the `app-state.yaml` file and update the `enableDarkMode` variable by setting its `persisted` value to `true`. We then convert the updated YAML into a properly escaped single line string and validate it using the `/validateProjectYaml` endpoint. If validation succeeds, we send the final update using the `/updateProjectYaml` endpoint.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/shyaylXuBXG6F97Pv0ir?embed&show_copy_link=true"
        title=""
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            colorScheme: 'light'
        }}
        frameborder="0"
        loading="lazy"
        webkitAllowFullScreen
        mozAllowFullScreen
        allowFullScreen
        allow="clipboard-write">
    </iframe>
</div>
<p></p>

## Error Handling
This section outlines how the API handles errors, including common HTTP response codes and detailed validation feedback for YAML processing issues.

### Common Error Responses
This table outlines the most common HTTP status codes and their meanings, helping you identify and resolve API issues more effectively.

| Status Code | Description                                  | Example Response                                         |
| ----------- | -------------------------------------------- | -------------------------------------------------------- |
| 400         | Bad Request - Invalid JSON or malformed YAML | `"Failed to update project: ad-mob:Expected bool value"` |
| 403         | Forbidden - Insufficient permissions         | `"You do not have write access to this project"`         |
| 404         | Not Found - Project or user doesn't exist    | `"Project not found"`                                    |
| 500         | Internal Server Error                        | `"Unknown error"`                                        |

### Validation Errors
When YAML validation fails, you'll receive detailed error information:

```jsx
{
  "validationErrors": [
    {
      "message": "Unknown field name 'showTestAdsasssdaf'",
      "fileKey": "ad-mob",
      "yamlLocation": {
        "line": 1,
        "column": 1
      }
    }
  ]
}
```


## Best Practices

- **Always Validate First**: Before updating project YAMLs, use the validation endpoint to ensure your changes are valid:

  ```jsx
  # 1. Validate the YAML
  curl -X POST 'https://api.flutterflow.io/v2/validateProjectYaml' \
    -H 'Authorization: Bearer YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    -d '{"projectId": "project-id", "fileKey": "ad-mob", "fileContent": "showTestAds: false"}'

  # 2. If validation passes, apply the changes
  curl -X POST 'https://api.flutterflow.io/v2/updateProjectYaml' \
    -H 'Authorization: Bearer YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    -d '{"projectId": "project-id", "fileKeyToContent": {"ad-mob": "showTestAds: false"}}'
  ```


- **Handle Project Locks**: Projects may be temporarily locked during other operations. If you receive a 403 error mentioning `Project is locked due to ongoing changes. Please try again later.`, wait and retry.

- **Batch Updates**: You can update multiple files in a single request by including multiple entries in `fileKeyToContent`:

  ```jsx
  {
    "projectId": "your-project-id",
    "fileKeyToContent": {
      "ad-mob": "showTestAds: false",
      "app-settings": "appName: \"Updated Name\"",
      "authentication": "enableEmailAuth: true"
    }
  }
  ```


## Rate Limits

Please be mindful of API rate limits. If you're making many requests, implement appropriate delays between calls to avoid being rate-limited.


