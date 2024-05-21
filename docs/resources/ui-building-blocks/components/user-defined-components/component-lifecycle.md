---
title: Component Lifecycle
sidebar_position: 3
---

# Component Lifecycle

In FlutterFlow, knowing component lifecycle is crucial for managing state and optimizing your
app's performance.

Let's delve into the key moments in the lifecycle of a **Component**:

- **Creation**: Component instances are created dynamically when they are utilized within a page
  or another component. This means that components instances are created as needed, which helps in
  managing resources efficiently and avoiding unnecessary overhead.

- **Initialization:** Actions defined in the `On Initialization` **Action Trigger** are executed
  during this phase. For instance, you can initialize local state variables with initial valuues, or
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
a
Page or a Component.

:::info[What are Action Triggers?]
**Action Triggers** serve as event listeners or handlers that respond to
specific events or user interactions within an application. FlutterFlow provides
developers with a way to define logic that responds to various events, such as
button clicks, page loads, form submissions, or data changes.
To learn more, head over to **[Action Flow Editor](#)** section
:::

As you open the [Action Flow Editor](#) for your Component, you can see the `On Initialization`
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

## Component state

:::note[STATE VARIABLES]
A state variable holds information or data about your UI at any given moment. To learn more
about **states and state management, [refer here](#)**
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



