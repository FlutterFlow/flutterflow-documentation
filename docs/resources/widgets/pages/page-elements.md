---
title: Page/Scaffold Elements
slug: scaffold-elements
toc_max_heading_level: 5
---

#     

## Drawers

### Add a Drawer to your Page

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/jTl8VlxxDxmhyms7YEVS?embed&show_copy_link=true"
        title="Scaffold - Add Drawer"
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

## Nav Bar

The NavBar (or Navigation Bar) allows you to quickly navigate between pages of
your app. It is displayed at the bottom of the screen for convenient access. The
items inside the NavBar are represented by an icon, optional text, or both.

You can display up to three or five primary or top-level pages (pages that can
be accessed from anywhere in your app) inside the NavBar.

From the NavBar settings page, you can add the NavBar and make modifications
such as changing the display style, reordering icons, customizing its
appearance, and more.

// TODO Image from demo app

### Enable Nav Bar in settings

By default, the NavBar is disabled for any project created in FlutterFlow.
Before you can add pages to the NavBar, you need to enable it from the
FlutterFlow settings. Navigate to **Setting and Integrations > General > NavBar & AppBar** and
enable Nav Bar.

![nav-bar.png](imgs%2Fnav-bar.png)

**Responsive Visibility:** To ensure that your NavBar is visible only on certain screen sizes, you
can
toggle the device icons based on your design preference.

:::caution
Initially, your NavBar will not have any pages in it. You'll see a message
instructing you to add at least two pages. Before proceeding, make sure to
create at least two pages. If you need help with adding a new page, you can find
[more information here](how-tos.md#create-an-empty-page).
:::

### Add Pages to your Nav Bar

Once enabled, you need to select the pages you want to appear in the navigation
bar and then add them. Here's how you can do it:

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'
}}>
    <iframe 
        src="https://demo.arcade.software/ShQiuWlUfEbCT29G6nyJ?embed&show_copy_link=true"
        title="Nav Bar Add Pages"
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

#### Nav Bar Properties (Property Panel)

- **Label:** This label will be displayed on the Nav Bar.
- **Nav Bar Icon:** This icon represents the page in the Nav Bar. You can also
  choose its **size**.

:::info
Please note that the NavBar will only appear on the canvas if you have added at
least two pages to it.
:::

#### Reordering Nav Bar Items

To reorder the Nav Bar items:

- Navigate to the **Setting and Integrations > General > NavBar & AppBar > Nav Bar**.

- Under the **Re-Order Page Icons**, identify the page that you want to reorder, click on the
  hamburger
  icon (icon with three lines ) beside it and drag it in an upward or downward direction.

<iframe src="https://www.loom.com/embed/f6f8c35c38e54b429c89249b90320ffe"frameborder="0"
allowFullScreen style={{ width: '100%', height: '300px' }}></iframe>

### Modifying NavBar Style

When you enable the NavBar, it initially adopts the Flutter Default Nav Bar
style. However, if you seek more customization options, you can set the Nav Bar
Style dropdown to one of the following:

#### Flutter Default Nav Bar

This is the standard material style NavBar. You have the option to show or hide labels for both
selected and unselected items.

![nav-bar-default.png](imgs%2Fnav-bar-default.png)

**Styling Properties**

- **Show Labels (Selected)** - Toggle: Allows you to enable or disable the display of labels for
  selected items in the NavBar.
- **Show Labels (Unselected)** - Toggle: Allows you to enable or disable the display of labels for
  unselected items in the NavBar.
- **NavBar Color:** Sets the background color of the NavBar.
- **Selected Icon Color:** Specifies the color of the icons when they are selected.
- **Unselected Icon Color:** Specifies the color of the icons when they are not selected.

#### Google Nav Bar

This modern Google-style NavBar features a subtle animation that reveals the item label (page name)
but only displays the label for the selected item.

![nav-bar-google.png](imgs%2Fnav-bar-google.png)

**Styling Properties**

- **Nav Bar Color:** Sets the background color of the NavBar.
- **Selected Icon & Text Color:** Changes the color of the icon and text when an item is selected.
- **Unselected Icon & Text Color:** Sets the color for icons and text when an item is not selected.
- **Selected Background Color**: Alters the background color of the selected item.
- **Show Unselected Border**: Toggles the visibility of a border around unselected items
- **Border Width:** Specifies the width of the border around the NavBar item buttons.
- **Border Radius:** Determines the corner roundness of the NavBar item buttons.
- **Border Color:** Alters the color of the borders around NavBar item buttons.
- **Nav Button Padding:** Adjusts the padding inside each nav button.
- **Nav Button Margin:** Controls the margin around each nav button.
- **Nav Button Alignment:** Allows customization of how nav buttons align within the NavBar. Options
  like
  center, space-between, etc., are given.
- **Gap Between Icon and Text:** Specifies the spacing between the icon and text within nav buttons.
- **Animation Duration (ms):** Defines how long animations take when switching between items.
- **Haptic Feedback:** A toggle that enables or disables haptic feedback when interacting with
  NavBar items, enhancing the tactile experience.

#### Floating Nav Bar

This NavBar style appears as a floating element above the pages and shows labels for all items
present in the NavBar.

![nav-bar-floating.png](imgs%2Fnav-bar-floating.png)

**Styling Properties**

- **Nav Bar Color:** Sets the background color of the NavBar.
- **Selected Icon & Text Color:** Specifies the color of the icon and text when an item is selected.
- **Unselected Icon & Text Color:** Defines the color for the icons and text when they are not
  selected.
- **Selected Background Color:** Alters the background color of the selected item.
- **Width:** Controls the width of the NavBar.
- **Border Radius:** Determines the roundness of the NavBar's corners.
- **Elevation:** Adjusts the shadow or elevation effect beneath the NavBar, which helps give
  the NavBar a floating appearance above other content.
- **Button Border Radius:** Specifies the radius for the borders of each button within the NavBar.
- **Nav Button Margin:** Sets the margin around each nav button
- **Nav Button Padding:** Controls the padding inside each nav button. 


