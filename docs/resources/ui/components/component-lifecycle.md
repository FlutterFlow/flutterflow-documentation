---
title: Component Actions & Lifecycle
sidebar_position: 3
toc_max_heading_level: 5
---

# Component Actions & Lifecycle

In FlutterFlow, knowing component lifecycle is crucial for managing state and optimizing your
app's performance.

Let's delve into the key moments in the lifecycle of a **Component**:

- **Creation**: Component instances are created dynamically when they are utilized within a page
  or another component. This means that component instances are created as needed, which helps in
  managing resources efficiently and avoiding unnecessary overhead.

- **Initialization:** Actions defined in the `On Initialization` **Action Trigger** are executed
  during this phase. For instance, you can initialize local state variables with initial values, or
  start component animations in this phase.
  At this stage, component state variables with their default values (if any) are also created.
  These variables hold data specific to the component, such as form inputs or toggle states, and are
  essential for managing the component’s internal state.

- **Updating:** While in use, the component can receive updated parameters from its parent when
  the parent rebuilds itself, allowing the component to adjust its behavior and appearance
  accordingly. When updating state variables inside a component, you can choose to rebuild only the
  component itself or the entire page containing the given component. This dynamic updating is
  crucial for maintaining a responsive and interactive user experience.

- **Disposal:** When the component is no longer needed, such as when a user navigates away
  from the page or the component is explicitly removed, it is destroyed.

In FlutterFlow, most of these lifecycle stages are handled internally by FlutterFlow's architecture.
However, we expose some of the methods so that you, as a developer, can decide what additional
configurations to load upon initialization and when to re-render the UI based on interactions.

Let's read more about them in the following sections:

## Initialization Action Triggers

During the initialization of a **Component**, FlutterFlow exposes the `On Initialization` **Action
Trigger** that assist you in loading resources or initializing data when the Component is loaded in
a Page or a Component.

:::info[What are Action Triggers?]
**Action Triggers** serve as event listeners or handlers that respond to
specific events or user interactions within an application. FlutterFlow provides
developers with a way to define logic that responds to various events, such as
button clicks, page loads, form submissions, or data changes.
To learn more, head over to [**Action Flow Editor**](../../control-flow/functions/action-flow-editor.md) section.
:::

As you open the Action Flow Editor for your Component, you can see the `On Initialization`
**Action Trigger** exposed for your **Component**.

### On Initialization [Action Trigger]

The `On Initialization` action trigger in FlutterFlow allows you to define actions that should occur
when a component loads or initializes, such as setting up necessary data, state variables, or other
initialization tasks.

If the component stops being shown in the UI and then becomes visible again,
the actions under the **On Initialization** action trigger will be re-triggered so any
setup tasks are re-executed. For dynamically generated components, such as those in a ListView with
a query, each instance will trigger the actions under `On Initialization` action trigger when it is
created.

### On Shortcut Press [Action Trigger]

Your component can also respond to certain keypress events. For more details on setting this up, see [this section on 
keyboard shortcuts](/resources/ui/pages/page-lifecycle#on-shortcut-press-action-trigger).

### On Dispose [Action Trigger]
The **On Dispose** action trigger for components allows you to define actions that execute when the page containing the component is navigated away or removed from memory. It is particularly useful for stopping ongoing operations.

Imagine a scenario where a [periodic action](../../../resources/control-flow/time-based-logic/periodic-action.md), such as fetching live weather updates, is started in a component when it is loaded (i.e, [On Initialization](#on-initialization-action-trigger)). The action runs periodically, providing real-time data updates as long as the component is active. However, when the page containing the component is navigated away, you need to stop the periodic action to conserve resources and prevent unnecessary processing. By using the On Dispose action trigger, you can safely stop the periodic updates and clean up any associated resources.

:::info
The **On Dispose** action trigger is always executed before the [**parent page’s On Dispose**](../pages/page-lifecycle.md#on-dispose-action-trigger). This ensures that the component cleans up its resources first, allowing the parent to finalize its disposal without dependencies on the child.
:::

## Component state

:::note[STATE VARIABLES]
A state variable holds information or data about your UI at any given moment. To learn more
about **states and state management, [refer here.](../../../ff-concepts/state-management/state-variables.md)**
:::

**Component state** refers to the information that a component tracks about its current condition or
the data it manages internally. This can include data such as whether a button is enabled, the value
of a slider, or the entries in a dynamically updated list. Component state variables are only
accessible within the given component's scope.

This type of variable is particularly useful for storing data that affects how the component behaves
or appears, such as toggling UI elements, keeping track of user choices within the component, or
caching data pertinent to the component's functionality.

For example,

- In a custom drop-down menu component, you might use a component state variable to keep track of
  which item is currently selected.
- In a toggle switch component, you could use a component state variable to store the on/off
  state based on user interaction.
  This approach ensures that the state of the component is maintained as it interacts with the user
  or other parts of the application.

When the value of a component state variable is changed, the component can be re-rendered with the
updated values, displaying the latest state of the component with these updates.

### Creating a Component State

To create a new **Component State variable** in your component, follow the steps:


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/nEmCDqupF7YHUTi4hKvW?embed&show_copy_link=true"
        title="Create Component State"
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

While creating a Component State, the following properties are included:

- **Is List:** This property determines whether the variable can hold multiple values of the same
  data type (like a list or array) or just a single value.

- **Initial Field Value:** This property sets the default value for the variable when it is first
  created. It's like setting the starting point or the value that the variable begins with before
  anything else happens.

- **Nullable:** This property determines whether the variable can have a null value. When "**Nullable**" is set to true, it means the variable can be empty or have a null value. This is
  useful when dealing with optional data or scenarios where the absence of a value is valid.

Now, let's apply these concepts to the `isFavourite` variable in the context of the above example:

- For the `isFavourite` variable, it is a single value (boolean), so **Is List** would be set to
  false.

- The **Initial Field Value** would also be set to **false**, indicating that the item is not
  favorited by default.

- **Nullable** property will be set to false, as the variable should always have a boolean value
  (true or false) and never be null.

:::note
You can set the **Data Type** of your Component State variable to any primitive data types such as **String, Integer, Boolean, Double** or to any other complex built-in data types such as **Enum, Custom Data Type, Document,** etc. To learn more about the available data types, refer the [**Data Representation Section**](../../data-representation/overview.md).
:::

### Get Component State Value

In the following example, we demonstrate how to toggle the heart icon from an outlined to a filled
icon based on the `isFavourite` state variable. We introduce a `Conditional Builder` widget that
allows us to show a widget tree based on **If/Else If/Else** conditions. The goal is to visually
indicate whether a product has been favorited by the user.

Follow the steps as below:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/Y96decdgYWVll3SP9Jk8?embed&show_copy_link=true"
        title="Get Component State"
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

### Update Component State [Action]

**Component state** values can only be updated via actions. Whenever you want to update the
component state, call an action called **Update Component State** from the Action Flow Editor
of the component.

In the following demo, we open the Action Flow Editor on the parent widget `Conditional Builder` and
call the **Update Component State** action to toggle the value of `isFavourite`.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/4tEsyMFyCxEP1tWQcPVh?embed&show_copy_link=true"
        title="Get Component State"
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

#### Rebuild on Update

When updating your component state in FlutterFlow, you'll often come across the **Update
Type** property in your Action properties. Here's what it means:

- **Rebuild Containing Page:** This option triggers a re-rendering of the page
  containing this component.

- **Rebuild Current Component:** This option triggers a re-rendering of the current component only.

- **No Rebuild:** Choose this option when you need to update the state value without
  immediately reflecting the changes in the UI.

:::warning[Expensive Rebuilds]
Too many rebuilds can impact performance because rebuilding the widget tree
frequently consumes resources and may lead to decreased responsiveness and
increased battery usage. Therefore, it's essential to consider the trade-offs
and use rebuilds judiciously to maintain optimal app performance.

To learn more about what happens behind the scenes, refer to
the [**Generated Page**](#) section.
:::





