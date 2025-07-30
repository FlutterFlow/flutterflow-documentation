---
title: Create a SwipeableStack in FlutterFlow
slug: /create-swipeablestack-in-flutterflow
keywords: ['swipeablestack', 'create', 'flutterflow']
---

# Create a SwipeableStack in FlutterFlow

## When to Use a SwipeableStack Widget

A **SwipeableStack** widget is used to create interfaces where multiple cards or elements are stacked and swiped horizontally or vertically by the user. This UI pattern is helpful for:

- **Tinder-like card swiping:** Allow users to swipe left or right to like or dislike items.
- **Image carousels or galleries:** Let users browse through content one item at a time by swiping.
- **Onboarding screens:** Present introduction screens that can be swiped sequentially.
- **Content exploration:** Enable intuitive navigation through items like articles or products.

> **Note:** While a swipeable stack offers interactive UX, ensure it aligns with your design goals and performs well, especially on low-end devices.

## Required Widgets

- **SwipeableStack Widget**

## User Interaction

- **Control SwipeableStack View** (via actions)

---

## Steps to Implement

### Step 1: Add a SwipeableStack Widget

Place the **SwipeableStack** widget onto your canvas or screen.

![Add SwipeableStack](../assets/20250430121211148785.png)

---

### Step 2: Set an Action on Page Load

Assign an action to the `Scaffold` on the **Page Load** event.

![Page Load Action](../assets/20250430121211468522.png)

---

### Step 3: Define the Control Action

In the **Define Actions** panel, choose **Control Swipeable Stack**.

![Define Control Action](../assets/20250430121211781606.png)

---

### Step 4: Choose the Swipe Trigger Type

Select one of the following trigger options:

1. **Trigger Left Swipe** – Initiates swipe to the left  
2. **Trigger Right Swipe** – Initiates swipe to the right  
3. **Trigger Up Swipe** – Initiates swipe upwards  
4. **Trigger Down Swipe** – Initiates swipe downwards

![Trigger Types](../assets/20250430121212153377.png)

Once selected, the widget will respond using the configured swipe trigger.

---

## Need Help?

If you have any questions, feel free to contact support via chat or email at [support@flutterflow.io](mailto:support@flutterflow.io).
