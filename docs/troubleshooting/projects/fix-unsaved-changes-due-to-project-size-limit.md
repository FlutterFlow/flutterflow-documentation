---
keywords: ['project size', 'unsaved changes', 'optimize project']
slug: /troubleshooting/projects/fix-unsaved-changes-due-to-project-size-limit
title: Fix Unsaved Changes Due to Project Size Limit
---

# Fix Unsaved Changes Due to Project Size Limit

When a project exceeds the allowed size limit, changes may fail to save properly. This often appears in the browser console as an error while editing. The project must be optimized to reduce its size before saving can continue.

:::info[Prerequisites]
- Access to the **browser developer console** (e.g., Chrome DevTools).  
- Basic familiarity with project assets, pages, and components.  
:::

## Steps to Check for Project Size Limit

   1. Press **F12** to open the browser developer console. 

      ![Open Developer Console](../assets/20250430121308006359.png)

   2. Select the **Console** tab.  
   3. Perform edits in the project while monitoring for errors.
     
      ![Console Showing Error](../assets/20250430121308259919.png)

   4. If an error indicates the project has reached the size limit, optimization is required.

Follow the steps below to optimize the project:

   1. Remove unused assets from the **assets folder**.  
      - Consider uploading large assets to **Firebase Storage** and using their URLs instead.  
      - Only keep assets offline if absolutely necessary.  

   2. Delete temporary or unused **pages** and **components**.  

   3. Clone the project to store UI elements kept “just in case,” instead of leaving them in the main project.  

   4. Save a new version of the project and remove unnecessary UI elements.  
      - Needed elements can be retrieved later from older versions or snapshots.  

   5. Convert UI elements reused across the project into **components** to reduce duplication.  

   6. Replace repeated pages with **dynamic layouts** or **modals** that can be reused.  

   :::warning
   There is no way to increase the maximum project size limit. Projects must be reduced and optimized to save changes successfully.  
   :::
