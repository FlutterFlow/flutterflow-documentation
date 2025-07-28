---
keywords: ['release', 'build', 'deployment']
slug: /invalid-pre-release-train-the-train-version-x-x-x-is-closed-for-new-build-submissions
title: Invalid Pre-Release Train. The train version 'X.X.X' is closed for new build submissions
---

# Invalid Pre-Release Train. The train version 'X.X.X' is closed for new build submissions

If you're submitting a build to the App Store and receive this error, it means that the version you're trying to submit is already closed for new builds. Even if the build number is different, the same app version can't be resubmitted.

---

## What Does This Error Mean?

> **Error Message:**  
> _"Invalid Pre-Release Train. The train version 'X.X.X' is closed for new build submissions."_

This means you cannot submit another build using the same version number. Apple requires each new submission to have a unique app version once the current one is closed for submissions.

---

## How to Resolve the Issue

You'll need to **increment the app version** in your FlutterFlow deployment settings.

### Steps:

1. Press **Cmd/Ctrl + K**, type **“deployment”**, and hit enter.  
   This will open the Deployment page.

   ![](../assets/20250430121353111041.png)

2. Alternatively, navigate via:  
   **Project Settings > Deployment** (under **App Settings**).

   ![](../assets/20250430121353323352.png)

3. Click the **expand icon** in front of the **Version** section.

   ![](../assets/20250430121353635504.png)

4. Update the version number.  
   For example, change from `1.2.0` to `1.2.1`.

   ![](../assets/20250430121353926967.gif)

Once the version is incremented, try deploying your app again — it should succeed.

---

## When to Increment the App Version Number

Use a versioning scheme that works for your team, but **Semantic Versioning** is a widely accepted method:

**Format:** `Major.Minor.Build`

### Breakdown:

- **Major (`1.x.x`)**: Breaking changes or significant revisions.
- **Minor (`x.1.x`)**: New features or significant, non-breaking updates.
- **Build (`x.x.1`)**: Bug fixes or small enhancements.

> Example:  
> - `1.2.0` → Add new features (minor)  
> - `1.2.1` → Fix bugs or small patches (build)

---

Following these steps will help you avoid version conflicts and ensure a smooth deployment to the App Store.
