---
slug: /before-you-begin/app-architecture
title: App Architecture
---

# App Development

Before you jump in and start using FlutterFlow, it's helpful to have an idea of how app development works more broadly. 

Traditionally, developing an app required writing a lot of code. You can think of code as a set of instructions for the computer, or device, executing the code. 

The codebase is usually divided up into two pieces: instructions for the frontend, and instructions for the backend. 

# Frontend vs Backend

Frontend development deals with creating the parts of an application that users interact with directly. 
This includes:

- Defining the visual pieces of your app, like text or buttons
- Figuring out how these pieces should be laid out on the screen
- Setting up logic for how your app should react to retrieved data and user interactions

Backend usually refers to more complex logic and data storage. This includes:

- Setting up a database that is capabale of storing, sending and retrieving data
- Leveraging off-the-shelf services, like authentication providers or payment platforms
- Defining business logic, either by writing code or using a low-code tool


The interaction between frontend and backend often occurs through APIs (Application Programming Interfaces). 
In most cases, the backend exposes endpoints for the frontend to send requests to. 
The backend handles the request, and sends some data back in response - which the frontend can use to change its visual appearance. 


# Where does the code execute?

Backend code runs on a server, which could be located in a data center or hosted on a cloud platform like AWS, Google Cloud, or Azure. The server is responsible for handling requests, processing data, and sending responses back to the frontend.

Frontend code runs on the user's device. This could be a web browser for web applications or the operating system for mobile applications. The frontend code is responsible for displaying the user interface and handling user interactions.


# Frontend architecture 

When it comes to developing the frontend of your application, there are several key architectural patterns and best practices to consider. These include:

- **Component-Based Architecture:** Breaking down the UI into reusable components, each responsible for a specific part of the interface. This makes the code more modular and easier to maintain.
- **State Management:** Managing the state of the application, which includes the data displayed in the UI and the user's interactions.
- **Responsive Design:** Ensuring that your application looks and works well on different screen sizes and orientations. This involves using flexible layouts and scalable assets.
- **Performance Optimization:** Making sure your app runs smoothly by optimizing rendering, minimizing the number of network requests, and reducing the size of your assets.


By understanding these concepts and implementing best practices, you can create robust and user-friendly applications with FlutterFlow.
