---
slug: /concepts/app-events
title: App Events
description: Learn how to use App Events in FlutterFlow.
tags: [App Events, Concepts, State Management]
sidebar_position: 1
keywords: [FlutterFlow, App Events, FlutterFlow events, global events, local events, event handlers, event-driven architecture]
---

# App Events

**App Events** allow different parts of your app to communicate without being directly connected. Instead of tightly coupling pages and components together, you can trigger an event in one place and handle it somewhere else. This helps keep your app more modular, easier to maintain, and simpler to scale as new features are added.

In many apps, making `Page A` react to something that happened on `Page B` often requires passing data through navigation parameters, updating app state, or building complex callback chains. As your app grows, this approach can quickly become difficult to manage.

App Events provide a cleaner pattern. Any part of your app can broadcast a named event (optionally with data), and any other part of the app can listen for that event and respond accordingly. The sender and receiver do not need to know about each other, which keeps your architecture loosely coupled.

For example, imagine a user adds a product to the cart from a product detail sheet. Instead of manually updating every place that shows cart information, the app can trigger a **CartUpdated** event. The cart badge, mini cart, or product list page can listen for this event and refresh itself automatically. The component that added the item doesn’t need to know which parts of the app will update. It simply announces that the cart has changed.

![app-event.avif](imgs/app-event.avif)

## Key Concepts

### Events

An **Event** is a named signal that indicates something happened in your app. For example:

- `Internet Connection Changed` : The device’s network connectivity status changed (e.g., went offline or came back online)
- `Cart Updated` : An item was added to or removed from the cart

You can also pass relevant details along with an event. For example, a `Cart Updated` event might include information about the specific product that was added or removed. This data can be defined using a **FlutterFlow [DataType](../../resources/data-representation/data-types.md)** to ensure the event carries structured and consistent information.

### Event Handlers

Event handlers define **what should happen when an event occurs**. When an event is triggered, the handler runs an **Action Block** that performs the required logic.

### Global vs. Local Events

App Events can be scoped as **Global** or **Local**, which determines **where the event is handled and who can respond to it**. Global events are handled at the app level, while Local events are handled by specific pages or components that choose to listen for them. Choosing the right scope helps keep your app architecture clean and prevents unnecessary coupling between parts of the UI.

|  | Global | Local |
| --- | --- | --- |
| **Where it's handled** | At the app level | On specific pages or components that explicitly subscribe to the event |
| **Number of handlers** | Exactly one (the assigned Action Block) | Many — any page or component can add a handler |
| **Subscription management** | Automatic — always active | Manual — handlers are added and cancelled using actions |
| **Best for** | App-wide concerns such as analytics, logging, authentication state, or global notifications | Page or component reactions such as refreshing lists, updating widgets, or syncing UI elements |
| **Processing** | Sequential queue (events processed one at a time) | Broadcast stream (all subscribers notified immediately) |


### Actions

You can **trigger and respond to App Events** using the following actions:

- **Trigger App Event:** Fires an event. This action can be used anywhere actions are supported, such as on button taps, page load triggers, or inside action flows.
- **Add Local App Event Handler:** Starts listening for a local event on the current page or component and runs the assigned **Action Block** when the event is triggered.
- **Cancel Local App Event Handler:** Stops listening for a local event on the current page or component when you no longer want it to respond to that event.

## Using App Events

Follow the steps below to use App Events in your app:

### 1. Create an App Event

1. Open the **App Events** page from the left sidebar.
2. Click the **+** button to create a new event.
3. Enter a name of the event.
4. Configure the event settings:
    - **Description** *(optional):* Add a short explanation of when and why this event fires. This description appears as a comment in the generated Dart code.
    - **Scope:** Choose **Global** or **Local** depending on where the event should be handled.
    - **Include Event Data:** Enable this if the event needs to pass additional information when it fires.
    - **Data Type:** If event data is enabled, select the **DataType** that defines the structure of the event payload.
    - **Nullable:** Specify whether the event data can be `null`.
5. **If the scope is Global**, assign a handler **Action Block**. This Action Block runs automatically whenever the event is triggered. If the event includes data, the Action Block must have a parameter matching the event's Data Type.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/DSQXo5fstLDgcwl5bkRY?embed&show_copy_link=true"
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

### 2. Trigger the Event

1. Open the **Action Flow Editor** on the widget or page where the event should be triggered.
2. Add a new action as **Trigger App Event** (under the **App Events** group).
3. Configure the action:
    - **Event to Trigger:** Select the app event you created.
    - **App Event Data:** If the event includes data, provide the values to pass with the event.
    - **Wait for Completion (Global events only):** If enabled (default), the event queue waits until the handler Action Block completes before processing the next queued event. Disable it for fire-and-forget behavior. This option is not shown for local events.
    - **Debug ID** *(optional):* Add a label to help identify this trigger during debugging.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/Vft1pYNblnmFEPYzAzCm?embed&show_copy_link=true"
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

### 3. Handle the Event

#### For Global Events

No additional setup is required. The Action Block you created in [Step 1](#1-create-an-app-event) is called automatically whenever the event fires, from anywhere in the app.

#### For Local Events

1. On the page or component that should respond to the event, open the **Action Flow Editor** (commonly under **On Page Load** or **On Component Load**).
2. Add a new action as **Add Local App Event Handler**.
3. Configure the handler as per the following:
    - **Local App Event to Handle:** Select the event you want this page or component to listen for.
    - **Handler Action Block:** Choose the Action Block that should run when the event is triggered. If the event includes data, the Action Block must have a parameter matching the event's Data Type.


<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/2npZxP8oHFmVLEkdR1OG?embed&show_copy_link=true"
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

*(Optional)* If you want to stop listening later (for example, after a certain condition is met or a toggle is switched off), add a **Cancel Local App Event Handler** action and select the same event.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/j4WFc46YbfaqeLqq7h6Z?embed&show_copy_link=true"
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

:::tip

Local event subscriptions are automatically cleaned up when the page or component is disposed (removed from the widget tree). You only need to manually cancel if you want to stop listening *before* the page closes.

:::

## Examples

Let’s look at a couple of examples to understand how **App Events** can be useful in real-world scenarios.

### Internet Connectivity Status (Global Event)

Internet connectivity affects the **entire app**, not just a single page. Instead of handling connectivity changes separately on every screen, you can trigger a **global event** whenever the device goes offline or reconnects and handle the response from one centralized place.

When the app detects that the device has gone **offline** or come **back online**, the global event handler can react accordingly. For example, it can:

- Show a **“No Internet Connection”** banner or snackbar when the device goes offline
- Hide the banner when the connection is restored
- Pause or resume background sync or network-dependent actions

You can also include additional event data to provide more context about the connectivity state, such as:

- `isConnected` → `true` / `false`
- `connectionType` → `wifi` / `mobile` / `none`

![global-event.avif](imgs/global-event.avif)

Here’s the complete setup:

1. Create a **DataType** called `ConnectivityStatus` with the following fields:
    - `isConnected` (Boolean)
    - `connectionType` (String) → `wifi`, `mobile`, or `none`
2. Create a **Global App Event** called `Internet Connection Changed` with the following configurations:
    - Scope: **Global**
    - Include Event Data: **On**
    - Data Type: `ConnectivityStatus`
3. Create an **Action Block** called `handleConnectivityChange` that:
    - Checks the `isConnected` value
    - Shows a **“No Internet Connection”** banner when `false`
    - Optionally displays the current `connectionType` when connected
    - Hides the banner when the connection is restored
4. **Trigger the event** whenever connectivity changes:
    - In a connectivity listener or custom action → **Trigger App Event**
    - Pass `isConnected: true` with `connectionType: wifi` or `mobile` when connected
    - Pass `isConnected: false` with `connectionType: none` when offline

The app responds consistently to connectivity changes from anywhere. All network status handling is centralized in a single Action Block, making the behavior easy to maintain and extend.

### Multi-Tab Dashboard Sync (Local Event)

In many apps, a dashboard contains **multiple tabs showing related data**. When information is edited in one tab, the other tabs should update to reflect the latest state. Instead of directly wiring the tabs together, you can trigger a **local event** so that each tab can react independently.

When a change happens, the tabs listening for the event can react in different ways, such as:

- Refreshing backend queries to fetch the latest data
- Updating summary widgets or charts
- Reloading lists or tables displayed in other tabs

Because this is a **local event**, only the pages or components that subscribe to it will respond.

![local-event.avif](imgs/local-event.avif)

Here’s the complete setup:

1. Create a **Local App Event** called `Dashboard Data Changed`  with the following configurations:
    - Scope: **Local**
    - Include Event Data: **Off**
2. On each **dashboard tab component** (typically on **On Component Load**):
    - Add **Add Local App Event Handler**
    - Set the App Event to `DashboardDataChanged`
3. Create an **Action Block** called `refreshDashboardTab` that:
    - Re-runs the backend queries used by the dashboard
    - Refreshes the UI components that depend on that data
4. On any **edit or save action** inside a tab:
    - Add **Trigger App Event**
    - Set the App Event to `DashboardDataChanged`

Once triggered, all tabs that are listening for the event refresh automatically.

## How Event Processing Works

Understanding the event lifecycle helps you design reliable event-driven flows. Internally, when an App Event is triggered, it follows a predictable flow inside the app. The event is first placed in a queue and then processed in order. Based on its **scope** (Global or Local), the event is routed to the appropriate handler, which performs the defined actions.

![flow.avif](imgs/flow.avif)

Here are a few things to remember:

- **Global events** are queued and processed sequentially. If multiple global events are triggered quickly, they run one after another, not in parallel.
- **Local events** are broadcast to all active subscribers immediately when triggered.
- **Wait for Completion** (Global events only, enabled by default) makes the event queue wait until the handler Action Block completes before processing the next event. Disable it for fire-and-forget behavior.
- **Global events** always run their assigned handler, no matter where the event is triggered.
- **Local event** handlers exist only while their page or component is active. When the page is disposed, the subscription is automatically removed.

## Best Practices

### When to Use Global vs. Local

**Use Global events when:**

- The reaction should happen **anywhere in the app**, regardless of which page is currently open (e.g., showing snackbars, handling auth state changes, logging events).
- The logic should be handled in **one centralized place**.
- The behavior is **app-wide** and should always run when the event is triggered.

**Use Local events when:**

- Only **specific pages or components** need to respond to the event.
- Different parts of the UI may need to **react differently** to the same event.
- The handler needs access to **page-level state or widget data**.

In short, **Global events are for app-wide reactions**, while **Local events are for page-specific behavior**.

### Naming Conventions

Use clear, past-tense names that describe **what already happened**, not what should happen. This keeps event flows easy to read and understand.

Examples:

- `User Logged In` (not `Login`)
- `Cart Updated` (not `Update Cart`)
- `Payment Completed` (not `Process Payment`)

This makes action flows read naturally, for example, “When `Cart Updated` is triggered, refresh the product list.”

:::info
FlutterFlow automatically generates a camelCase identifier from this name behind the scenes, which is used internally in code. Examples:
- `User Logged In` → `userLoggedIn`
- `Cart Updated` → `cartUpdated`
- `Payment Completed` → `paymentCompleted`
:::

### Keep Handlers Focused

Each event handler (Action Block) should perform **one clear responsibility**. This keeps event flows easier to understand and maintain.

If multiple reactions are needed:

- Use a **Local event** and add separate handlers on different pages or components, or
- Use a **single Global handler** that runs a small sequence of related actions.


### Avoid Event Chains

Avoid triggering many events from inside other event handlers. While this is technically possible, long chains of events can quickly become difficult to follow and debug.

If you find yourself chaining events frequently, consider **passing additional data through a single event** instead.


### Use Debug IDs During Development

The **Debug ID** field in the **Trigger App Event** action lets you label where an event was triggered. This is especially helpful when the same event can be fired from multiple places in the app, making it easier to trace and debug event flows.

## FAQs

<details>
<summary>
Why do I see “No local app events available to handle”?
</summary>

<p>
This message appears when adding an <b>Add Local App Event Handler</b> action if either:
<ul>
<li>No App Events have been created with <b>Local</b> scope.</li>
<li>A handler has already been added for all available local events on the current page or component.</li>
</ul>

<b>Fix:</b> Create a new App Event with <b>Local</b> scope, or check whether the event you want to handle already has a handler on this page or component.
</p>

</details>

<details>
<summary>
Why do I see “No local app event handlers available to cancel”?
</summary>

<p>
This message appears when adding a <b>Cancel Local App Event Handler</b> action if there are no active local event handlers on the current page or component.

<b>Fix:</b> You must first add a handler using <b>Add Local App Event Handler</b> before you can cancel it.
</p>

</details>

<details>
<summary>
Why is my Global event handler not firing?
</summary>

<p>
Check the following:
<ul>
<li>The event scope is set to <b>Global</b>.</li>
<li>A valid <b>Handler Action Block</b> is assigned in the event configuration.</li>
<li>The <b>Action Block parameters</b> match the event’s data type (if the event includes data).</li>
</ul>
</p>

</details>

<details>
<summary>
Why is my Local event handler not firing?
</summary>

<p>
Verify the following:
<ul>
<li>The <b>Add Local App Event Handler</b> action is being executed (for example, placed inside <b>On Page Load</b> or <b>On Component Load</b>).</li>
<li>The event scope is set to <b>Local</b>, since global events will not appear in the local handler dropdown.</li>
<li>The page or component listening for the event is still <b>active and mounted</b> (has not been navigated away from).</li>
</ul>
</p>

</details>

<details>
<summary>
Why are events firing in an unexpected order?
</summary>

<p>
App Events are processed sequentially through an event queue. If <b>Wait for Completion</b> is enabled (<code>true</code>), each event finishes handling before the next one starts.

If the order seems unexpected, check whether some triggers have <b>Wait for Completion</b> set to <code>false</code>, which allows subsequent events to start before the previous event finishes.

**Also note** that global events are processed sequentially through a queue, while local events are broadcast immediately to all active subscribers and do not go through the queue.
</p>

</details>