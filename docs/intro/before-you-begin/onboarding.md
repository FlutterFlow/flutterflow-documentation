---
keywords: ['onboarding']
slug: onboarding
title: Onboarding
---

# Onboarding

To manage user onboarding effectively, combine **Local State**, **Persisted Value**, and **On PageLoad** actions.

## Strategy

Use conditional logic to verify whether the user has completed onboarding before allowing access to key parts of your app.

## Implementation Steps

1. **Track Onboarding Completion**
   - Create a **Local State** or **Persisted Value** (e.g., `hasCompletedOnboarding`) to record the user's onboarding status.

2. **Check Status on Page Load**
   - Use an **On Page Load** action to check if the value indicates the user has completed onboarding.
   - If not, navigate the user to the onboarding screen.

3. **Enforce Onboarding Before Critical Actions**
   - Before allowing actions like checkout, data submission, or profile updates:
     - Check the onboarding completion value.
     - If onboarding is incomplete, redirect the user accordingly.

## Why It Matters

This approach ensures users:
- Do not skip essential setup steps.
- Receive proper guidance through the app's initial flow.
- Avoid errors or confusion during key interactions.

> ✅ Use **Persisted Values** if onboarding should persist across app sessions. Use **Local State** if the status should reset after each session.
