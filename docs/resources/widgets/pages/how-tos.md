---
title: How-to
sidebar_position: 2
toc_max_heading_level: 5
---

#

FlutterFlow allows you to easily create new pages using the Page Selector
button, which is available in the Widget Tree menu (Tab+2). This will help you
quickly start and add new pages to your app.

![page-selector.png](imgs%2Fpage-selector.png)

## Create an empty page

To create an empty FlutterFlow page from scratch, follow the steps:

<iframe src="https://demo.arcade.software/rtOPRXVUByUAXxUynd8T?embed&show_copy_link=true" title="app.flutterflow.io/authentication" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>

## Create a page from a popular template

FlutterFlow simplifies the process of page creation by offering a variety of
popular template use cases. These templates provide a basic structure for your
pages, which you can quickly customize with your own styling, widgets, and text.

To utilize a template from FlutterFlow, follow these steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/bkaz68ipgi497Pf4v8EB?embed&show_copy_link=true"
        title="Create a page from a popular template"
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

## Create an AI generated page

FlutterFlow's 'AI Gen' feature allows you to generate various elements,
including pages, from a prompt. This can be particularly useful when you're
unsure where to start.

Once the page is generated, you can preview it with different color schemes, in
both light and dark themes, and add new themes as desired. You also have the
option to view the page's code and regenerate images as needed.

To create an AI Generated page, follow the steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/hLpE44TVjb72rzTTpxRK?embed&show_copy_link=true"
        title="Create an AI generated page"
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

In FlutterFlow, setting page properties is an essential step to customizing the
behavior and appearance of your app’s pages. Here’s an overview of how you can
set and manage
these properties in FlutterFlow:

## Navigation

Within an app, navigation is the process of moving between different pages,
enabling users to interact with various features and content
efficiently. Let's see how to do that in FlutterFlow:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/EwmbXvNO5SvWtQdQyTBK?embed&show_copy_link=true"
        title="Navigate"
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

### Navigate To Action

The Navigate To Action allows you to set the next page and modify other
navigation-related properties:

**Allow Back Navigation:** Toggle this to prevent the user from navigating back
to
this page after moving to the next page.

:::info[Note]
This does not affect the Android back button. To disable the Android back
button,
set "Disable Android Back Button" property on the destination page.
:::

**Replace Route:** Use this option to replace the current page in the navigation
stack. For example, if a user navigates from Page A to Page B and then to Page
C, pressing the back button on Page C would normally return to Page B. However,
if **Replace Route** is enabled on Page B, the route changes to Page A -> Page
C;
therefore, pressing the back button on Page C will take the user back to Page A.

**Transition Type:** This allows you to specify an animation that will be
applied
while navigating away from a screen. Options include **Default, Instant, Fade
In,
Slide Up, Slide Down, Slide Left, Slide Right,** and **Scale**.

**Transition Duration:** Set the duration of the transition animation in
milliseconds.

**Page Parameters:** Use this to send data to the next page during navigation.

![Nav.png](..%2Fimgs%2FNav.png)

### Navigate Back Action

In the next page you are navigating to, ensure that you add a 'Navigate Back'
action to the AppBar or wherever you want users to navigate from. Let's add a '
Navigate Back' action to our subsequent page, from which we navigated in the
previous section:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/SmD3l5fyhjR21ZYPntal?embed&show_copy_link=true"
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

## Modifying Page Properties

### Page Parameters

As discussed in the [Page Concepts](resources/widgets/pages/#page-parameters)
page, Page Parameters are used to pass data between pages.

To create a page parameter, follow the steps:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/oZV2X0pKNYO61p1jhY22?embed&show_copy_link=true"
        title="Create Page Parameters"
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

When a page parameter is set to Required, it indicates that this parameter is
mandatory when navigating to this page. Users must provide this value;
otherwise, FlutterFlow will throw errors. However, if you are creating an
optional parameter, please ensure this option is unchecked.

Additionally, you can specify a default value in the Default Parameter Value
field to safeguard against incoming values that are empty or null. This step is
optional.

![Page-Params.png](..%2Fimgs%2FPage-Params.png)

If you have created a Required Page Parameter and there is a Navigation Action
already set on your previous page, FlutterFlow will throw errors because this
required parameter has not yet been sent from the previous page. Let's fix that:


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/kp34JJipEW24hz0u5RsW?embed&show_copy_link=true"
        title="Send Page Parameters"
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





:::info[When to use Page Parameters?]
Page parameters are used to pass essential data between pages that is not
persisted in the app’s global state but is necessary for specific
functionalities or displays on the subsequent page. Here’s a
breakdown of typical uses:

**Contextual Data:** Information that defines the context of the new page, such
as
identifiers for items or entities that the page must display. This could include
identifiers for transactions, specific products, or user profiles that were
selected on the previous page.

**Configuration Options:** Settings or options chosen by the user that affect
how
the next page functions or appears. For example, filter or sort preferences
selected on a list page that need to be applied on a subsequent results page.

**Operational Parameters:** Values needed for calculations or logic on the next
page
that are generated through user activities on the current page. These could be
values like quantities, dates, or configuration details necessary to perform
operations or initiate processes on the next page.

Page parameters are thus essential for maintaining a seamless user experience,
enabling the new page to function as intended based on the specific needs and
inputs from a previous interaction.
:::

### Page State

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

#### Update Page State value

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

    - Randomizing content: Shake the phone to generate a random number, display
      a
      random quote, or change the background image.

    - Refreshing data: Shake the phone to trigger a data refresh, such as
      fetching the
      latest news articles or updating a live feed.
    - Resetting the app state: Shake the phone to reset the app state, clear
      form
      fields, or return to the app's home screen.