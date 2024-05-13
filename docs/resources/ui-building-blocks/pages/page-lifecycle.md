---
title: Page Lifecycle
slug: page-lifecycle
sidebar_position: 5
---

# Page Lifecycle

In FlutterFlow and Flutter, understanding the page lifecycle or simply the stages a page goes 
through from creation to disposal is essential for managing resources and data effectively.

Let's delve into the key moments in the lifecycle of a Page:
**//REDO THIS PART** 
* **Initialization**: This is the first stage of a Page creation. Initialization is about to 
  happen after this. At this stage, you can initialize the initial state of the page. This is where you may
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

## Page Action Triggers

**Action Triggers** serve as event listeners or handlers that respond to
specific
events or user interactions within an application. FlutterFlow provides
developers with a way to define logic that responds to various events, such as
button clicks, page loads, form submissions, or data changes.

For Pages, we have exposed the following Action Triggers:

- **On Page Load**: This allows you to set actions when the page loads or
  initializes. It enables developers to perform tasks or execute logic at
  specific
  points in the page lifecycle, such as fetching data from an API, initializing
  variables, or updating UI elements.

- **On Phone Shake:** Actions added under this trigger are triggered when the
  user
  shakes their phone. This is useful when you want to perform certain tasks or
  trigger specific actions in response to a phone shake gesture.
  For example, you can use this to build functionalities like:

    - **Randomizing content:** Shake the phone to generate a random number, display
      a
      random quote, or change the background image.

    - **Refreshing data:** Shake the phone to trigger a data refresh, such as
      fetching the
      latest news articles or updating a live feed.
    - **Resetting the app state:** Shake the phone to reset the app state, clear
      form
      fields, or return to the app's home screen.


## Page state

A page state variable is only accessible within that page and is not shared with
any other pages in your app. This type of variable can be useful for storing
data that needs to be shared between different widgets on the page, such as
saving form data, a search query, filtering, and sorting options.

For example, in a multi-step form, you might use a page state variable to store
the current step number or the user's input for each step. Similarly, in a
search results page, you could use a page state variable to store the search
query entered by the user and the current filtering and sorting options applied
to the results. This allows you to maintain the state of the page as the user
interacts with different widgets and components, without affecting the state of
other pages in the app.

#### Creating a Page State

To create a new Page State variable in your page, follow the steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Qhg62nqMjhg8973XPQhb?embed&show_copy_link=true"
        title="Create Page State"
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


Other properties to consider include:

**Is List:** This property determines whether the variable can hold multiple
values
of the same data type or just a single value. When **Is List** is set to true,
it
means the variable can store multiple values, forming a list or array.

**Initial Field Value:** This property sets the default value for the variable
when it is first created. It's like setting the starting point or the value that
the variable begins with before anything else happens.

**Nullable:** This property determines whether the variable can have a null
value.
When "**Nullable**" is set to true, it means the variable can be empty or have a
null value. This is useful when dealing with optional data or scenarios where
the absence of a value is valid.

Now, let's apply these concepts to the `searchString` variable in the context of
the above example:

Since `searchString` is used to store a single search query entered
by
the user in the search bar, "**Is List**" is set to false. This indicates that
`searchString` can hold only one value at a time. The default value for
`searchString` is set to an empty
string (""). This ensures that when the homepage loads, the search bar is
initially empty, allowing users to enter their search query. Since entering a
search query is optional and the search bar can
be
left empty, "**Nullable**" is set to true. This allows the `searchString`
variable
to
be null until the user enters a search query, indicating that no search has been
performed yet.

#### Get Page State value

ou can only access the Page State value on the current page and wherever you see
the following icon. This icon indicates that you can set the value source of the
string to a variable.

![Page-State.png](..%2Fimgs%2FPage-State.png)

#### Update Page State [Action]

Page State values can only be updated via **Actions**. Whenever you want to
update
the page state, such as through a button click, user interaction, or form
update, create a new Action called 'Update Page State'.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/ezZO22YHQDqTHeg0uQ8Q?embed&show_copy_link=true"
        title="Update Page State"
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

When updating your page state in Flutter, you'll often come across the Update
Type property in your Action properties. Here's what it means:

**Rebuild Current Type:** This option triggers a re-rendering of the page,
ensuring
that any changes to the state are reflected in the user interface (UI).

**No Rebuild:** Choose this option when you need to update the state without
immediately reflecting the changes in the UI.

:::warning[Expensive Rebuilds]
Too many rebuilds can impact performance because rebuilding the widget tree
frequently consumes resources and may lead to decreased responsiveness and
increased battery usage. Therefore, it's essential to consider the trade-offs
and use rebuilds judiciously to maintain optimal app performance.

To learn more about what happens behind the scenes, refer to
the [Generated Page] section.
:::





#### Uses of On Page Load Action

**Initializing Data:** You can use the On Load action to initiate API calls,
database queries, or read from local storage, setting up the data that the page
needs to display. This ensures that all necessary data is ready and available by
the time the user sees the page.

**Setting State:** If your page depends on certain state conditions (like toggles,
selections, or input fields), you can set these states appropriately as the page
loads.

**Running Animations:** Start animations that welcome users or draw attention to
certain UI elements on the page.

#### Add OnPageLoad Action

To add an action to "On Page Load" action trigger, follow the steps:

<iframe src="https://demo.arcade.software/ii0otHqkoRtPY66n4c2y?embed&show_copy_link=true" title="app.flutterflow.io/authentication" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>
