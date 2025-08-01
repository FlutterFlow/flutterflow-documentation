---
keywords: ['firebase', 'custom', 'routing']
slug: /custom-login-routing
title: Custom Login Routing
---

# Custom Login Routing

This article explains how to configure custom routing logic for users after they log in, using a mission control (checkup) page. You can route users differently based on their admin status or whether they’ve completed onboarding.

:::info[Prerequisites]
- A FlutterFlow project with **Firebase** set up.  
- Authentication configured in the project.  
- The following app pages created:
  - `LoginPage`
  - `OnboardingPage`
  - `AdminHomePage`
  - `UserHomePage`
  - `CheckupPage` (Mission Control Page)
:::

**Create a Local State Variable**

  Create a local state variable to track whether the user is logging in for the first time.

    1. Go to **Local State** > **+ Add State Variable**.
    2. Name the variable `firstTime`.
    3. Set the type to `Boolean` and enable **Persist**.

    :::tip
    The **Persist** setting retains the value locally on the device until the app is uninstalled. It will reset on every refresh when testing in a web browser.
    :::

    ![](../assets/20250430121414406250.png)
    ![](../assets/20250430121414639307.png)

**Add a User Field for Admin Check**

    1. Open **Firebase** > **User Collection** > **+ Add Field**.
    2. Create a field called `isAdmin` and set the type to `Boolean`.

    This allows conditional routing based on the admin role.

    ![](../assets/20250430121414890408.png)
    ![](../assets/20250430121415192057.png)

**Configure Initial Pages**

  1. Go to **Settings & Integrations** > **App Details** > **Initial Page**.
  2. Set:
    - **Entry Page** to `LoginPage`
    - **Logged In Page** to `CheckupPage`

  :::tip
  **Entry Page** appears when no user is logged in.  
  **Logged In Page** is used when a user is already authenticated.
  :::

  ![](../assets/20250430121415472919.png)

**Define Actions on the Checkup Page**

1. **Check If User Is Logged In**

  1. Open the **CheckupPage** in the **Action Flow Editor**.
  2. Under **On Page Load**, add a **Conditional Action**.
  3. Set source to `Global Properties` > `Is User Logged In`.

  - If `FALSE`:  
    - Add action: **Navigate To** `LoginPage`, disable **Back Navigation**, then **Add Terminate**.

    ![](../assets/20250430121434550471.png)
    ![](../assets/20250430121434823464.png)
    ![](../assets/20250430121435145067.png)

2. **Check If User Is New (First Time Login)**

  1. Under the `TRUE` branch of "Is User Logged In", add another **Conditional Action**.
  2. Set condition: `Local State` > `firstTime`.

    - If `TRUE`:  
      - Add action: **Navigate To** `OnboardingPage`, disable **Back Navigation**, then **Add Terminate**.

      ![](../assets/20250430121435792377.png)

3. **Check If User Is an Admin**

  1. Under the `FALSE` branch of `firstTime`, add a **Conditional Action**.
  2. Set condition: `Authenticated User` > `isAdmin`.

  - If `TRUE`:  
    - Navigate to `AdminHomePage`, disable back navigation, then **Terminate**.

  - If `FALSE`:  
    - Navigate to `UserHomePage`, disable back navigation, then **Terminate**.

  ![](../assets/20250430121436144376.png)

**Update `firstTime` After Onboarding**

  To avoid showing the onboarding page again, update the `firstTime` variable after onboarding:

    1. On the `OnboardingPage`, select the **Start** button.
    2. Open the **Action Flow Editor**.
    3. Add action: **Update Local State** > `firstTime` → set value → `False`.
    4. Add navigation: **Navigate To** `CheckupPage`, disable back navigation.

    ![](../assets/20250430121436460665.png)
    ![](../assets/20250430121436751661.png)

:::tip
You can reuse the `CheckupPage` to add more advanced routing conditions, such as checking if the user has completed their profile or enabled certain settings.
:::

To skip onboarding for admins as well, extend your logic by nesting onboarding logic inside the admin check condition.

![](../assets/20250430121437067417.png)

