Build Instruction: Habgan Global Logistics Limited

Create a complete, professional Android mobile application called Habgan Global Logistics Limited.

The app should be a modern logistics, importing, shipping, and product-ordering platform designed for customers who want to purchase or arrange products and shipping from China to Nigeria.

The overall quality should look like a real commercial application, not a basic demo.

1. DESIGN STYLE

Use a colorful, modern, premium design inspired by the shopping experience of Alibaba and Temu, but do NOT copy their logos, exact layouts, or copyrighted designs.

The interface should be:

- Colorful
- Clean
- Professional
- Fast and easy to understand
- Mobile-first
- Modern cards and rounded buttons
- Clear icons
- Large product/service images
- Easy navigation
- Strong security appearance
- Professional logistics/shipping visuals

Use the Habgan Global Logistics Limited logo provided by the owner.

Make the branding consistent throughout the application.

2. HOME PAGE

Create a beautiful home page containing:

Header

- Habgan Global Logistics Limited logo
- Notification icon
- Customer profile icon

Search bar

Place a prominent search bar near the top.

Placeholder:

"Search products, services or orders"

Allow customers to search for:

- Products
- Shipping services
- Logistics services
- Orders
- Categories

Promotional banner

Create a large attractive banner area for:

"China to Nigeria Shipping & Logistics"

Include professional transportation/shipping imagery.

Possible text:

"Shop From China. Ship To Nigeria."

"Reliable • Secure • Fast"

Categories

Create attractive category cards such as:

- Air Freight
- Sea Freight
- China to Nigeria
- Product Sourcing
- Import & Export
- Warehouse
- Door-to-Door Delivery
- Order Tracking

Featured services/products

Show cards containing:

- Image
- Name
- Short description
- Price where applicable
- "View Details" button
- "Order Now" button

3. BOTTOM NAVIGATION

Create a fixed bottom navigation bar with:

1. Home
2. Categories
3. Search
4. Orders
5. Profile

Make the navigation simple and easy to use.

4. USER SIGN UP / LOGIN

Create secure customer registration.

Fields:

- Full name
- Email
- Phone number
- Password
- Confirm password

Allow existing customers to log in.

Create:

- Forgot password
- Logout
- Edit profile
- Change password

Do not expose customer passwords.

5. CUSTOMER PROFILE

Create a professional profile page.

Display:

- Profile photo
- Full name
- Phone
- Email
- Address
- Country
- Saved shipping information

Profile options:

- Edit Profile
- My Orders
- Track Order
- Notifications
- Addresses
- Payment Information
- Help & Support
- Terms & Conditions
- Privacy Policy
- Logout

6. PRODUCT/SERVICE CATALOG

Create a database for products and logistics services.

Each listing should have:

- Product/service image
- Name
- Category
- Description
- Price
- Availability
- Shipping information
- Seller/provider where applicable
- Order button

Create categories and filters.

Filters should include:

- Category
- Price
- Availability
- Shipping method

7. PRODUCT/SERVICE DETAILS

When a customer selects an item, open a detailed page.

Show:

- Large image
- Name
- Price
- Description
- Shipping information
- Estimated delivery information
- Quantity selector
- Customer notes
- "Add to Order"
- "Order Now"

Keep the design clean and professional.

8. ORDER SYSTEM

Create a complete order system.

Customers should be able to:

- Create an order
- Select quantity
- Add delivery information
- Add notes
- Review order
- Submit order
- View order status
- Track order

Every order should have a unique order number.

Example:

HGL-2026-000001

9. ORDER STATUS

Create these order statuses:

1. Order Received
2. Payment Pending
3. Payment Confirmed
4. Processing
5. Purchased
6. At China Warehouse
7. Preparing Shipment
8. Shipped
9. In Transit
10. Arrived in Nigeria
11. Customs/Processing
12. Out for Delivery
13. Delivered
14. Cancelled

Display the current status clearly.

Use a progress/timeline style when possible.

10. ORDER CANCELLATION

Include a cancellation system with clear rules.

Customers should NOT be able to cancel an order after the order has passed the allowed cancellation stage.

Before cancellation is allowed, show:

"Cancellation may be available before processing begins."

After the cancellation deadline:

"This order can no longer be cancelled because processing/shipping has started."

Allow the business/admin to control whether cancellation is available.

11. ORDER TRACKING

Create a dedicated tracking page.

Customer enters:

- Order number

Then show:

- Order number
- Customer name
- Product/service
- Current location
- Current status
- Shipping method
- Estimated delivery
- Timeline/history

Example timeline:

China Warehouse
↓
Shipment Prepared
↓
In Transit
↓
Nigeria
↓
Out for Delivery
↓
Delivered

12. SHIPPING OPTIONS

Create shipping options including:

Air Freight

Fast shipping option.

Sea Freight

Economical shipping for larger shipments.

Door-to-Door

Shipping and delivery to the customer's address.

For each option show:

- Description
- Estimated delivery time
- Pricing information
- Order button

13. CHINA TO NIGERIA SERVICE

Create a dedicated service page:

"China → Nigeria Logistics"

Include:

- Product sourcing
- Buying assistance
- Warehouse services
- Consolidation
- Air freight
- Sea freight
- Customs/processing information
- Nigerian delivery
- Customer support

Use professional logistics images.

14. CART / ORDER REVIEW

Create an order review screen before submission.

Display:

- Selected items
- Quantity
- Price
- Shipping cost
- Service charge where applicable
- Total amount
- Delivery address
- Shipping method

Show:

"Confirm Order"

before final submission.

15. PAYMENT STRUCTURE

Create a secure payment section.

The application should be structured so that a legitimate payment provider/API can be connected later.

Do not store raw card details or passwords in the app database.

Show:

- Amount due
- Payment status
- Payment reference
- Payment date
- Payment method

Statuses:

- Pending
- Paid
- Failed
- Refunded

16. NOTIFICATIONS

Create an in-app notification system.

Send/display notifications for:

- New order
- Payment confirmation
- Order processing
- Shipment dispatched
- Shipment arrived in Nigeria
- Delivery updates
- Order delivered
- Important customer messages

17. CUSTOMER SUPPORT

Create a Support page.

Include:

- Contact support
- FAQ
- Order problem
- Payment problem
- Shipping problem
- Delivery problem

Provide a clear way for customers to contact Habgan Global Logistics Limited.

18. ADMIN DASHBOARD

Create an admin area that is restricted to authorized administrators.

Admin should be able to:

- View customers
- View orders
- Create/edit products
- Create/edit services
- Change order status
- Update tracking information
- Confirm payments
- Manage categories
- Send notifications
- Manage cancellation availability
- View customer details
- Manage delivery information

Customers must NOT have access to the admin dashboard.

19. DATABASE STRUCTURE

Create these main collections/tables:

Users

Fields:

- Name
- Email
- Phone
- Password/authentication
- Profile photo
- Address
- Role
- Created date

Roles:

- Customer
- Admin

Products

Fields:

- Name
- Description
- Image
- Category
- Price
- Availability
- Shipping information
- Created date

Categories

Fields:

- Name
- Image
- Description

Orders

Fields:

- Order number
- Customer
- Product/service
- Quantity
- Total
- Shipping method
- Delivery address
- Payment status
- Order status
- Cancellation allowed
- Order date
- Estimated delivery

Order Updates

Fields:

- Order
- Status
- Location
- Description
- Date/time

Notifications

Fields:

- User
- Title
- Message
- Read/unread
- Date/time

Addresses

Fields:

- User
- Full address
- City
- State
- Country
- Phone

Payments

Fields:

- Order
- Amount
- Payment status
- Reference
- Payment method
- Date

20. SEARCH

Make the search function actually work.

When a customer searches for something, return matching:

- Products
- Services
- Categories
- Orders where appropriate

Add filters and sorting where possible.

Do NOT create a search bar that is only decorative.

21. SECURITY

Make security a major part of the application.

Use:

- Secure authentication
- User-specific data access
- Admin-only permissions
- Protected customer information
- Secure payment integration
- No exposed passwords
- No unnecessary exposure of private order information

Customers should only see their own orders and personal information.

Admins should have controlled access according to their role.

22. PROFESSIONAL EMPTY/ERROR STATES

Create useful messages for empty screens.

Examples:

"No orders yet."

"No products found."

"No notifications."

"Your search returned no results."

Also create friendly error messages instead of showing broken screens.

23. APP BRANDING

Application name:

Habgan Global Logistics Limited

Short name:

Habgan Global Logistics

Main purpose:

China-to-Nigeria logistics, importing, shipping and product ordering.

Use the owner's provided logo.

Keep the logo and brand identity consistent across:

- Login
- Home
- Navigation
- Profile
- Orders
- Notifications
- Admin area

24. ANDROID EXPERIENCE

Design the application primarily for Android phones.

Make sure:

- Buttons are easy to tap
- Text is readable
- Screens fit mobile displays
- Navigation works properly
- Back navigation is logical
- Images are optimized
- Pages do not look crowded

25. IMPORTANT FUNCTIONAL REQUIREMENTS

Do not build only static screens.

The following must actually function:

- Sign up
- Login
- Logout
- Search
- Navigation
- Product/service browsing
- Product/service details
- Order creation
- Order history
- Order tracking
- Order status updates
- Profile editing
- Notifications
- Admin management
- Cancellation rules
- Payment status

Connect screens to the database and make buttons perform their intended actions.

26. FINAL USER EXPERIENCE

The customer should be able to open the app and easily:

1. Register or log in
2. See the Habgan home page
3. Search for a product or service
4. Browse categories
5. View details
6. Place an order
7. Select shipping
8. Enter delivery information
9. Review the order
10. Complete/record payment
11. Track the order
12. Receive status updates
13. Contact support

The final result should feel like a real professional logistics and shopping application, with a colorful Alibaba/Temu-inspired experience while maintaining Habgan Global Logistics Limited's own branding and identity.

Prioritize functionality, security, clean navigation, search, order management, tracking, and a polished Android experience.---
slug: /flutterflow-ui/builder
title: App Builder
description: Explore the App Builder in FlutterFlow, featuring a comprehensive interface with 
  four main sections-Navigation Menu, Toolbar, Canvas, and Properties Panel.
tags: [App Builder, FlutterFlow, UI, Design]
sidebar_position: 1
keywords: [App Builder, FlutterFlow, UI, Design]
---

# App Builder

On opening the project, you'll see the App Builder, which consists of four main sections: 
[Navigation Menu](#navigation-menu), [Toolbar](#toolbar), [Canvas](#canvas-area), and [Properties Panel](#properties-panel).

![navigation-menu.avif](imgs/navigation-menu.avif)

## Navigation Menu

The Navigation Menu, located on the left side of the builder, allows you to switch between various FlutterFlow features. These include designing the UI, managing databases, setting up API, adjusting app settings, adding integrations, and more.

Here is a list of all the features accessible from the navigation menu:

1. **Dashboard**: Manage projects, access account info, and FlutterFlow resources.
2. **Widget Palette**: Access all widgets for your app.
3. **Page Selector**: Manage pages, components, and custom code files, and organize them using folders.
4. **Widget Tree**: Get an overview of all widgets on a selected page.
5. **Storyboard**: Visualize app's design and navigation.
6. **Test Mode**: [Test your app](../../testing-deployment-publishing/running-your-app/run-your-app.md#test-mode) in a live debugging environment.
7. **Firestore**: Create collections and adjust Firestore-related settings.
8. **Data Types**: Create custom data types for your app.
9. **App Values**: Manage [App State variables](../../resources/data-representation/app-state.md) and Constants.
10. **API Calls**: Define API calls.
12. **Media Assets**: Upload assets for your app and team.
13. **Cloud Functions**: Write and deploy cloud functions for Firebase.
14. **Tests**: Add automated tests.
15. **Agents**: Create, configure, and manage [AI Agents](../../ff-integrations/ai/ai-agents.md) to integrate conversational AI interactions into your app.
16. **App Events**: Define and manage [App Events](../../ff-concepts/app-events/app-events.md) that allow different parts of your app to communicate without being directly connected.
17. **Theme settings**: Customize visual appearance.
18. **Settings and Integrations**: Access app-related settings and integrations.

## ToolBar

From [ToolBar](toolbar.md), you can search for project resources, change canvas size, see project history, branching, optimization and enhancements, view-download code, and run your app.

## Canvas Area

In the [Canvas Area](canvas.md), you can see a preview of a device's screen and build your app page.

## Properties Panel

The Properties Panel lets you modify both the visual appearance and interactive behavior of UI 
elements on the canvas. It allows you to add [Actions](../../resources/control-flow/functions/action-flow-editor.md), set up a [Backend Query](../../resources/control-flow/backend-logic/backend-query/backend-query.md), add [Animations](../../ff-concepts/animations/animations.md) and more.

The Properties Panel will vary slightly depending on the entity you have selected. To explore the details of each Properties Panel, click on the following:

- **[Page Properties](../../resources/ui/pages/pages-properties.md)** (when you have selected a Page)
- **[Widget Properties](../../resources/ui/widgets/widget-properties.md)** (when you have selected any widget, including built-in components)
