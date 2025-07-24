---
keywords: ['onboarding', 'state management', 'navigation']
slug: /check-onboarding-status
title: Check Onboarding Completion Before Navigation
---

# Check Onboarding Completion Before Navigation

This article describes how to validate whether a user has completed onboarding before proceeding to subsequent screens or actions.

:::info[Prerequisites]
- An onboarding flow already built in your app.
- Knowledge of using **Local State** and **Persisted Values**.
- Familiarity with **Page Load Actions** and **Conditional Navigation**.
:::

To enhance user experience and enforce onboarding completion, you can set up a check that redirects users who haven’t finished onboarding. This is especially helpful before allowing users to:

   - Access the home screen
   - Proceed to checkout
   - Use key features in the app

Follow the steps below:

   1. **Create a Persisted Boolean Variable**
      - Navigate to **App Settings > State Management > Persisted Values**.
      - Create a new boolean variable (e.g., `hasCompletedOnboarding`) and set its default to `false`.

   2. **Update the Variable After Onboarding**
      - At the final step of your onboarding flow, add an **Action > Update Persisted Value**.
      - Set `hasCompletedOnboarding` to `true`.

   3. **Add a Check on Page Load**
      - On the main screen (e.g., Home or Checkout), open the **Page Load** action.
      - Add a **Conditional Action**:
      - **If** `hasCompletedOnboarding == false`
      - **Then** navigate to the onboarding page.

   4. **Prevent Navigation Without Onboarding**
      - Apply similar checks to buttons or flows that require onboarding completion.

   :::tip
   Use `Local State` when you need to check onboarding status only during the session. For persistent checks across sessions or logins, use `Persisted Values`.
   :::

:::note
- You can enhance onboarding with tooltips, highlights, and walkthrough modals using the **Onboarding Components**.
- Consider tracking completion events using **Firebase Analytics** for additional insights.
:::

