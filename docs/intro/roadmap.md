---
title: Roadmap
slug: /roadmap
---
# Roadmap

This roadmap guides you through the key layers of app development: the **UI Layer, Logic Layer,** and **Data Layer**. Understanding these layers is essential for creating apps that are visually appealing, functionally robust, and secure. 


![layers.avif](layers.avif)

## UI Layer
The UI Layer is all about the visual elements and interactions in your app. It includes widgets for buttons, forms, navigation, and layouts. In FlutterFlow, this layer also covers customization options like themes and responsive design, ensuring your app looks great and is easy to use.

- **FlutterFlow Widgets:**
  - [Atomic Design](../resources/ui/overview.md)
  - [Pages](../resources/ui/pages/intro-pages.md), [Widget](../resources/ui/widgets/intro-widgets.md) & [Components](../resources/ui/components/intro-components.md)
  - [TextFields](../resources/control-flow/user-interactivity/forms/form-widgets/text-field.md) & [Other Form Widgets](../resources/control-flow/user-interactivity/forms/forms.md)
- **Navigation Elements:**
  - [Page Transitions (Slide, Fade, etc.)](../ff-concepts/animations/page_transitions.md)
  - [AppBar and other Page Elements](../resources/ui/pages/page-elements.md)
  - [Bottom Sheets](../ff-concepts/navigation-routing/bottom-sheet.md) 
  - [Webviews](../ff-concepts/navigation-routing/webview-widget.md)
- **User Experience (UX):**
  - [Design System](../ff-concepts/design-system/design-system.md)
  - [Responsiveness](../ff-concepts/layout/responsive-layout.md)
  - Interaction Feedback 
    - [Animations](../ff-concepts/animations/animations.md)
    - [Haptic Feedback](../ff-concepts/alerts-notification/haptic-feedback.md)
         
## Logic Layer
The Logic Layer handles your app's business logic and decision-making. This includes state management, conditional actions, and navigation logic.

- **State Management:**
  - Representing Data
    - [Variables](../resources/data-representation/variables.md)
    - [Datatypes](../resources/data-representation/data-types.md) & [Custom Data Types](../resources/data-representation/custom-data-types.md)
    - [Enums](../resources/data-representation/enums.md)
    - [Constants](../resources/data-representation/constants.md)
  - [State Variables](../ff-concepts/state-management/state-variables.md)
  - [Managing Widget States](../ff-concepts/state-management/widget-state.md)
  - Dynamic Lists [(Generating Dynamic Children)](../resources/ui/widgets/composing-widgets/generate-dynamic-children.md)
- **Actions & Business Logic:**
   - [Actions](../resources/control-flow/functions/action-flow-editor.md) 
   - [Conditional Actions](../resources/control-flow/functions/conditional-logic.md)
   - [Custom Code](../ff-concepts/adding-customization/custom-code.md) 
   - [Form Validation Logic](../resources/control-flow/user-interactivity/forms/form-validation.md)
   
- **Navigation Logic:**
   - [Navigation & Routing](../ff-concepts/navigation-routing/nav-overview.md)
   - [Deep & Dynamic Linking](../ff-concepts/navigation-routing/deep-dynamic-linking.md)

- **Notification Systems**:
   - [Triggering Push Notifications](../ff-concepts/alerts-notification/push-notifications.md)
   - [Alert Dialogs](../ff-concepts/alerts-notification/alert-dialog.md)

## Data Layer
The Data Layer manages data storage, retrieval, and integration with external sources like APIs and databases.

- **Authentication:**
  - [Auth Methods Overview](../ff-integrations/authentication/authentication-methods.md)
  - [Firebase or Supabase or Custom Authentication](../ff-integrations/authentication/authentication-types.md)
   
- **Database Integration:**
  - [Firebase](../ff-integrations/database/cloud-firestore/getting-started.md) or [Supabase](../ff-integrations/database/supabase/database-actions.md) integration.
  - Local Storage with [AppState](../resources/data-representation/app-state.md) or [SQLite DB](../ff-integrations/database/local-sql/quickstart.md)
   
- **API Integration:**
   - Working with [REST APIs](../resources/control-flow/backend-logic/api/create-test-api-calls.md)
   - [Streaming APIs](../resources/control-flow/backend-logic/api/streaming-api.md)
   