---
keywords: ['made', 'edits', 'them']  
slug: manage-code-edits-with-flutterflow-github-sync  
title: Manage Code Edits with FlutterFlow GitHub Sync  
---

# Manage Code Edits with FlutterFlow GitHub Sync

When syncing your project to GitHub, FlutterFlow always pushes changes to a branch called `flutterflow`. To prevent your manual edits from being overwritten, avoid modifying this branch directly.

---

## Recommended Workflow

1. **Push from FlutterFlow to GitHub**  
   - FlutterFlow commits code to the `flutterflow` branch.

2. **Create a Working Branch**  
   - Merge the `flutterflow` branch into a separate branch (e.g., `main`).
   - Perform local modifications in this working branch.

3. **Preserve Custom Changes**  
   - On future pushes, FlutterFlow updates the `flutterflow` branch.
   - Manually merge `flutterflow` into `main` to keep or discard specific changes.

This strategy ensures that local customizations remain safe while benefiting from updates pushed by FlutterFlow.

