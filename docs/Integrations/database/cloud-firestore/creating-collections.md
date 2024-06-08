# Creating Collections

A collection is a group of documents. For example, you could have a 'users*'* collection that contains a list of documents, each representing a single user.

### **Getting Started: Things to Know First**

2. Get to know how to [structure the Firebase Database](/data-and-backend/firebase/firestore-database-cloud-firestore#structuring-the-database).
5. Ensure you've gone through and completed every step in the [Firebase Setup](/data-and-backend/firebase/firebase-setup) for your project.

## Creating a collection

Here are the steps to create a collection:

2. Click on the **Firestore** from the Navigation Menu (left side of your screen).
5. Click on the **(+)** Plus sign button.
8. A popup will appear, Enter the collection name and click **Create** Button.
11. Next, [define the collection schema](/data-and-backend/firebase/firestore-database-cloud-firestore/creating-collections#define-schema-creating-fields) (create Fields) and [add some data](/data-and-backend/firebase/firestore-database-cloud-firestore/adding-data) to the collection.

A collection will only appear on [Firebase Console](https://console.firebase.google.com/u/0/) if it contains at least one document.

### Define schema (creating Fields)

A document represents a single item or entity, such as a user, post, animal, etc. To add data inside the document, you must define the document schema by creating Fields. Creating Fields helps you know what kind of data a document can contain.

Although you can add more fields later on, it's always a good idea to add fields from the start.

Field names can not be changed, so ensure that you have used the correct Field names.

To define the schema (create fields) for the document:

2. Select your collection from the list on the left side.
5. If you haven't added any fields yet:


	2. You can choose from the template collections that have common fields needed in most applications. This will auto-add all the fields.
	5. Click on **Start from scratch** to define your own schema.
	8. Or, use [AI Gen Schema](/data-and-backend/firebase/firestore-database-cloud-firestore/creating-collections#ai-gen-schema).
8. To add a new field, start typing its name (e.g., title, description, date, etc.) and choose the suitable **Data Type**.
11. While choosing the Data Type, you can set if it will be a list or not using **Is List?** toggle.


	2. You can keep it disabled for storing only a single value. For example, fields such as title, description, price, etc., can have only one value. You can't have multiple titles for a single post.
	5. You can enable it to store multiple values of the same data type. For example, to store the list of accessory names for the field accessories.
14. Click on the **Done** icon.

You can also use *Tab* and *Enter* keys to navigate quickly while creating fields.

#### AI Gen Schema

See how to [create schema using AI Gen](/advanced-functionality/ai-gen#ai-gen-schema).



---

## Data Types within FlutterFlow

The following data types are available within FlutterFlow:

* **String**: To store plain text such as title, description, etc.
* **Integer**: To store numbers such as 100, 4302, 50000, etc.
* **Double**: To store a decimal number such as 12.43, 3233.50, 65.5666, etc.
* **Photo Path**: To store the URL of the uploaded image.
* **Video Path**: To store the URL of the uploaded video.
* **Audio Path**: To store the URL of the uploaded audio.
* **Boolean**: To store either a true or false value.
* **Timestamp**: To store date and time value.
* **Lat Lng**: To store the latitude and longitude of a particular place. Storing the *Lat Lng* value helps you locate a place in Google Maps.
* **Color**: To store the color value.
* **Document Reference**: To store a reference of a document. Storing a reference helps you fetch the document data.
* **Data Type**: To store [custom data types](/data-and-backend/firebase/firestore-database-cloud-firestore/adding-data#adding-custom-data-type-aka-firestore-map).

