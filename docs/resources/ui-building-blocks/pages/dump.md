

## Navigation / Routing

Navigation in FlutterFlow involves moving between different pages. This is
handled through routing, where each page is identified by a unique route.
Navigation can be programmed to happen on events like button clicks, leading to
actions such as pushing a new route (opening a new page) or popping a route (
returning to a previous page). FlutterFlow simplifies the routing process,
allowing you to visually design the navigation flow of your app.

Learn more about the [navigation actions](dump-2#navigation) in FlutterFlow.

## Page Parameters

Parameters in FlutterFlow are used to pass data between pages. When navigating
from one page to another, you can send parameters to configure the destination
page based on the data from the current page. This is useful for tasks like
passing a user ID to a profile page or specific details to a detailed view page.

To manage creation and updation of Page parameters, [see here](dump-2#page-parameters)

## Page state

**Page state** refers to the information that a page tracks about its current
condition or the data it displays. This can include things like which tabs are
active, the contents of a form, or any user interactions. Managing state is
crucial for dynamic pages that interact with user inputs or load varying data.

To manage creation and updation of Page State variables, [see here](dump-2#page-state)

## Page Lifecycle

In FlutterFlow and Flutter, understanding the page lifecycle is crucial as it
involves the stages a page goes through from creation to disposal. Recognizing
these stages is essential for managing resources and data effectively.

Let's delve into the key moments in the page lifecycle:

* **Initialization**: During initialization, you should set up
  controllers or initialize the initial state of the page. This is where you may
  set initial page states or fetch initial data from an API.
* **Rendering**: The rendering stage occurs when the page is built and displayed
  to
  the user. This is where the UI elements are created and arranged according to
  the current state of the page.
* **Updating**: The updating stage occurs when data changes, and the page needs
  to
  reflect those changes. This may involve rebuilding the UI to display updated
  information, such as when the user interacts with the page or when new data is
  received from an API.
* **Disposal**: The disposal stage occurs when the page is closed or removed
  from the
  screen. This is where resources associated with the page, such as controllers,
  event listeners, or subscriptions, need to be released to free up memory and
  prevent memory leaks.

FlutterFlow only exposes the [OnPageLoad Action Trigger](dump-2#page-action-triggers) to allow
you to set up
any initial logic of the page and also allows you to rebuild the page on data
changes. [See the Update Page State action](dump-2#update-page-state-action).
The rest of the lifecycle logic is handled internally by FlutterFlow. 


