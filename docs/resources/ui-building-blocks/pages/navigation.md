---
sidebar_position: 3
---

# Navigation between Pages

Navigation in FlutterFlow involves moving between different pages. This is
handled through routing, where each page is identified by a unique route.
Navigation can be programmed to happen on events like button clicks, leading to
actions such as pushing a new route (opening a new page) or popping a route (returning to a previous
page). FlutterFlow simplifies the routing process, allowing you to visually design the navigation
flow of your app.

Let's see how to do that in FlutterFlow:

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

### Navigate To [Action]

The Navigate To Action allows you to set the next page and modify other
navigation-related properties:

| Action Property Name      | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Allow Back Navigation** | Toggle    | Toggle this to prevent the user from navigating back to this page after moving to the next page                                                                                                                                                                                                                                                                                                 |
| **Replace Route**         | Toggle    | Use this option to replace the current page in the navigation stack. For example, if a user navigates from Page A to Page B and then to Page C, pressing the back button on Page C would normally return to Page B. However, if **Replace Route** is enabled on Page B, the route changes to Page A -> Page C; therefore, pressing the back button on Page C will take the user back to Page A. |
| **Transition Type**       | Drop Down | This allows you to specify an animation that will be applied while navigating away from a screen. Options include **Default, Instant, Fade In, Slide Up, Slide Down, Slide Left, Slide Right,** and **Scale**.                                                                                                                                                                                  |
| **Transition Duration**   | Double    | Set the duration of the transition animation in milliseconds                                                                                                                                                                                                                                                                                                                                    |
| **Page Parameters**       |          | Use this to send data to the next page during navigation.                                                                                                                                                                                                                                                                                                                                       |

:::info[Note]
**Allow Back Navigation** does not affect the Android back button. To disable the Android back
button,
set **Disable Android Back Button** property on the destination page.
:::

<figure>
    ![Nav.png](..%2Fimgs%2FNav.png)
  <figcaption class="centered-caption">Properties of a Navigate To Action</figcaption>
</figure>

### Navigate Back [Action]

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

### Page Parameters

**Parameters** in FlutterFlow are used to pass data between pages. When navigating
from one page to another, you can send parameters to configure the destination
page based on the data from the current page. This is useful for tasks like
passing a user ID to a profile page or specific details to a detailed view page.

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

If you have created a **Required** Page Parameter and there is a Navigation Action
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

<figure>
    
  <figcaption class="centered-caption"></figcaption>
</figure>


 
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