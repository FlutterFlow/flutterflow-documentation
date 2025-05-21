---
slug: /integrations/firebase-storage/storage-library
title: Firebase Storage Library
description: The Firebase Storage Library provides access to the files in Cloud Storage through the Firebase SDK beyond what FlutterFlow's built-in support provides.
tags: [Firebase Storage, Cloud Storage, Integration, Library]
sidebar_position: 2
keywords: [FlutterFlow, Firebase Storage, Cloud Storage, Integration, Security]
---

The [Firebase Storage Library][storage-library-item] provides access to the files in Cloud Storage through the Firebase SDK beyond what [FlutterFlow's built-in support](/concepts/file-handling) provides.


[storage-library-item]: https://marketplace.flutterflow.io/item/Ec3NWw8sxqJ1tbriOIEE

## Instructions

To start using this library:

1. [Import the library](/resources/projects/libraries/#importing-a-library) into your existing FlutterFlow project.
2. [Connect your FlutterFlow project to Firebase](/integrations/firebase/connect-to-firebase/) (if you haven't done so already).
   The library will default to using the default bucket of your associated Firebase project. You can override this behavior by passing an explicit bucket URL to any of the actions. 
3. [Use the Custom Actions](/concepts/custom-code/custom-actions/#using-a-custom-action) and Custom Functions in your Action Flows.


### Custom actions

* `uploadFileToBucket` \- Upload a file to any path in any bucket that you have write access to.  
  * **Parameters:**
    * The `bucketName` (`String?`) to upload the file to. If you leave this empty, it uses the default bucket of the associated Firebase project.  
    * The `fullPath` (`String?`) where the file will be written to inside the bucket. If this is specified, the `prefix` parameter is ignored.  
    * The `uploadedFile` (`FFUploadedFile`) that is to be uploaded to Cloud Storage. This is the action output of a previous `Store media for upload` action.  
    * The `prefix` (folder/directory) (`String?`) where the file will be uploaded to. If `fullPath` is not specified, the action uses this parameter and the `name` of the `uploadedFile` to determine the full path where it writes the file.  
  * **Action result:**  
    * If successful, the action result is a `fileObject` containing the full path of the uploaded file.  
  
* `listAllFilesInBucket` \- List all files in any bucket that you have read access to.   
  * **Parameters:**  
    * The `bucketName` (`String?`) to list the files from. If you leave this empty, it uses the default bucket of the associated Firebase project.  
    * The `listType` (`StorageListType?`) of the items to list (files, directories, both). If left empty, the action will list both files and prefixes (folders/directories).  
    * The `prefix` (`String?`) is the `/` separated path from which to list files. If left empty, the action will list the items in the root of the storage bucket.  
  * **Action result:**  
    * If successful, the action results in a `List` of `fileObject` elements. 
    
* `downloadFile` \- Download the data for a file that you have read access to. This downloads the actual data into your application code. If you instead want a public URL to the data, use `getDownloadUrl` instead.  
  * **Parameters:**  
    * The `bucketName` (`String?`) to download the file from. If you leave this empty, it uses the default bucket of the associated Firebase project.  
    * The `fullPath` (`String`) of the file whose data will be read from the bucket.  
  * **Action result:**  
    * If successful, the action result is an `FFUploadedFile` with the data of the file that was read from the bucket.  
    
* `getDownloadUrl` \- Get the download URL for a file in a bucket that you have read access to. This URL then provides public, read-only access to the file  
  * **Parameters:**  
    * The `bucketName` (`String?`) that contains the file. If you leave this empty, it uses the default bucket of the associated Firebase project.  
    * The `fullPath` (`String`) of the file for which to get the download URL.  
  * **Action result:**  
    * If successful, the action result is a HTTP URL that allows public access to the file.  
    
* `getMetadataForFile` \- Get the metadata for a file in any bucket that you have read access to  
  * **Parameters:**  
    * The `bucketName` (`String?`) that contains the file. If you leave this empty, it uses the default bucket of the associated Firebase project.  
    * The `fullPath` (`String`) of the file for which to get the download URL.  
  * A**ction result:**  
    * If successful, the action result is a `FullMetadata` with all the metadata and custom metadata of the file.  
    

* `updateMetadataForFile` \-  Update the metadata for a file in any bucket that you have write access to  
  * **Parameters:**  
    * The `bucketName` (`String?`) that contains the file. If you leave this empty, it uses the default bucket of the associated Firebase project.  
    * The `fullPath` (`String`) of the file for which to get the download URL.  
    * The `metadata` (`SettableMetadata`) to write to the Cloud Storage bucket for the file. If any value is left out or empty in the metadata, it is left unmodified in Cloud Storage.  
  * **Action result:**  
    * If successful, the action result is a `FullMetadata` with all the metadata and custom metadata of the file after the update.  
    

* `getPathFromUrl` \- Get the path for a file based on its (https:// or gs://) URL. This is a synchronous call, as it doesn't require any call to the server.  
  * **Parameters**  
    * The `Url` to parse.  
  * **Action result:**  
    * The action result is a `fileObject` derived from the URL.  
    
* `deleteFileFromBucket` \- Deletes a file from any bucket you have write access to.  
  * **Parameters:**  
    * The `bucketName` (`String?`) that contains the file. If you leave this empty, it uses the default bucket of the associated Firebase project.  
    * The `fullPath` (`String`) of the file to delete from the bucket.  
  * **Action result:**  
    * If the action succeeds the file has been deleted. There is no additional information.

### Enums

* `StorageListType` is an enumeration of the types of items that the `listAllFilesInBucket` action can return. Values:  
  * `files`: List only the files in the specified path.  
  * `prefixes`: List only the prefixes in the specified path. You might more commonly refer to these as folders or directories, but since Cloud Storage doesn't actually have support for folders/directories, it uses `/` characters in the file names to emulate those and calls them prefixes.  
  * `filesAndPrefixes`: List both files and prefixes in the specified path.

### Data Types

* `fileObject` \- the metadata for a file or prefix (folder/directory) in Cloud Storage. It has the following fields:  
  * `fullPath` (`String`) \- The full path of the file/prefix inside the storage bucket. The value does not start with a leading `/`.  
  * `isPrefix` (`Boolean`) \- Indicates whether the object is a file (`false`) or prefix (folder/directory) (`true`).  


* `FullMetadata` \- the full metadata of an item in a storage bucket as returned by `getMetadataForFile`, modelled after the [`FullMetadata` class in the Firebase SDK for Cloud Storage](https://pub.dev/documentation/firebase_storage/latest/firebase_storage/FullMetadata-class.html).
* `SettableMetadata` \- the settable metadata of an item in a storage bucket, as passed to a call to `updateMetadataForFile`, modelled after the [`SettableMetadata` class in the Firebase SDK for Cloud Storage](https://pub.dev/documentation/firebase_storage/latest/firebase_storage/SettableMetadata-class.html).  
* `KeyValuePair` \- A `String`/`String` key/value pair as used for the `customMetadata` in the `FullMetadata` and `SettableMetadata` data types.
