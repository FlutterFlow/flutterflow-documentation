---
slug: /concepts/genui-chat
title: GenUI Chat
description: Add a conversational AI surface to your FlutterFlow app that can render catalog components, call action blocks as tools, and react to local app events.
tags: [AI, Chat, Conversational UI]
sidebar_position: 1
keywords: [FlutterFlow, GenUI, Conversational AI, Chat widget, AI agent, A2UI protocol, Component rendering, Tool calling
]
---

# GenUI Chat

Usually, applications follow a fixed model: developers design screens, define navigation, and hard-code interactions. Users are limited to these predefined flows, and anything outside those paths simply isn’t supported.

With GenUI, your app provides agent-driven experiences. Instead of relying on rigid flows, an AI agent can assemble user journeys dynamically in real time. Developers no longer need to predict every scenario. Instead, they define the building blocks and the AI orchestrates them into meaningful, context-aware experiences for the user.

This represents a fundamental shift, from building fixed applications to building flexible capabilities that an agent can compose on demand. Think of it as building the components, and AI decides when to use them.

**Traditional App:** The user clicks 'View Order' → navigates to `OrderDetailPage` → sees order info + tracking + items list. The flow is fixed, and every interaction must be pre-built.

**With GenUI:** Build `OrderSummaryCard`, `TrackingStatusCard`, `OrderItemsList` as separate components. Build `getOrderDetails` as a tool. The AI decides what to show based on what the user asks.

For example, a user asks, “Show my recent orders.” Instead of responding with text, the agent renders **order card components** with details like items, price, and delivery status. The user then asks, “Where is my latest order?” Now, instead of showing another block of text, the agent switches to a **map component** to display the live delivery location. This demonstrates how the agent dynamically selects the most relevant UI component based on the user’s intent.

![personal-shopper.avif](imgs/personal-shopper.avif)

:::tip[GenUI is not a chatbot]

GenUI may look like a chat interface, but it is fundamentally different from traditional chatbots. Instead of responding with text messages, the AI renders real UI components, such as cards, lists, forms, and maps—directly in the interface. Users don’t just read responses; they interact with fully functional UI.

This means GenUI is not about conversations, it’s about dynamically composing application experiences using your actual app components.
:::

:::note
This doesn’t replace traditional UI. Navigation, dashboards, and structured flows still play an important role. GenUI introduces a **new layer** — dynamic, adaptive, and conversational — that handles the long tail of use cases traditional interfaces can’t efficiently cover.
:::

## GenUI Is Built on A2UI

GenUI is FlutterFlow's implementation of [**A2UI (Agent-to-UI)**](https://a2ui.org/). An [**open project by Google**](https://github.com/google/A2UI) that defines a declarative UI protocol for agent-driven interfaces. A2UI allows AI agents to generate rich, interactive UIs that render natively across platforms (web, mobile, desktop) without executing arbitrary code.


## Three Pillars of GenUI

GenUI introduces three core pillars that work together to transform your app into an agent-driven experience:

**1. Component Catalog:** Instead of replying with plain text, the AI uses your FlutterFlow components, such as product cards, booking tiles, or dashboards, to present information directly in the interface. Users don’t read the text; they interact with real UI.

**2. Tools:** Your existing FlutterFlow action blocks become capabilities the AI can use. Whether it’s fetching data, calling APIs, submitting forms, or triggering workflows, the AI can execute these actions and use the results instantly. It moves beyond conversation and starts performing real tasks inside your app.

**3. App Event Integration:** Your app’s events provide real-time context to the AI. Things like user actions, state changes, or backend updates can trigger responses. With auto-response enabled, the AI doesn’t wait for input; it proactively reacts and updates the experience as things happen.

![three-pillars.avif](imgs/three-pillars.avif)

## Adding GenUI

Let’s walk through how to add a GenUI Chat by building a simple product lookup assistant. Follow the steps below:

1. Make sure you’ve completed the [Firebase integration](../../../ff-integrations/firebase/connect-to-firebase-setup.md), including the [initial setup](../../../ff-integrations/authentication/firebase-auth/auth-initial-setup.md) and configuration files.
2. Go to **Firebase Console > AI Logic** and enable it. GenUI is powered by **Google Gemini** via [**Firebase AI Logic**](https://firebase.google.com/products/firebase-ai-logic) and uses a **usage-based pricing model**. You can get started on the **Spark (free)** plan for testing and low usage, but for production or higher usage, you’ll need to upgrade to the **Blaze (pay-as-you-go)** plan, where costs depend on AI requests and token usage.
    :::tip
    We recommend monitoring your usage in the Firebase Console, setting up budget alerts to avoid unexpected charges, and upgrading to Blaze before moving to production.
    :::
3. In your FlutterFlow project, create a **`ProductListCard`** component, which displays product details such as the image, name, and description. This component accepts a parameter of Data Type **`Product`**.
4. Create an Action Block named **`getProductDetails`**, which retrieves the details of a single product and returns it as a **`Product`** data type.
5. Place the **GenUI Chat** widget on a page or component like any other FlutterFlow widget.
6. Go to the Properties panel and define domain instructions to guide how the assistant behaves and communicates in your app. These instructions help the AI understand your app’s context, tone, and what it should prioritize. If left empty, it defaults to a generic assistant that builds UI in response to user requests.

    **Example System Prompt:**
    `You are a helpful AI shopping assistant for an e-commerce app. Help users discover products, compare options, track orders, and complete purchases.`

7. Select the components that the AI is allowed to render in responses. For this example, select the `ProductListCard` component created in step 3. To learn how to configure components for GenUI, refer to the [Component Catalog](component-catalog.md) documentation.
8. If needed, add the [Action Blocks](../../../resources/control-flow/functions/action-blocks.md) that the AI can call. For this example, select the action block named `getProductDetails`, created in step 4. Note that only Action Blocks that return a value can be added. To learn how to configure them for GenUI, refer to the [Tools Configuration](tools-configuration.md) documentation.
9. If needed, choose Local [App Events](../../app-events/app-events.md) to connect to the conversation. To learn how to configure app events for GenUI, refer to the [App Events Integrations](app-event-integrations.md) documentation.

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/9bwXhFVcecHENfcx4RBe?embed&show_copy_link=true"
        title=""
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
<p></p>

### Customization

You can fully customize the chat interface using the following options available in the Properties panel:

- **Layout & container:** Background, border radius, padding, message spacing, and max message width
- **Header:** Visibility, title, background color, and text color
- **Avatars:** Visibility, size, and image sources for both user and AI
- **Message bubbles:** Background colors, text colors, and border radii for user and AI messages
- **Input field:** Placeholder text, background, border radius, and padding
- **Send button:**  Icon and background styling
- **Welcome state:** Visibility, title, and subtitle shown when the chat is empty
- **Scrolling behavior:** Auto-scroll to new messages and animation duration
- **Thinking/status message:** Text displayed while the AI is generating a response

**Default Behavior:**

- Header is shown by default
- Avatars are enabled by default
- Auto-scroll is enabled
- Input placeholder defaults to “Type a message…”
- Thinking message defaults to “Thinking…”
- Welcome state is shown when there are no messages

<div style={{
    position: 'relative',
    paddingBottom: 'calc(56.67989417989418% + 41px)', // Keeps the aspect ratio and additional padding
    height: 0,
    width: '100%'}}>
    <iframe 
        src="https://demo.arcade.software/awKKg13Nn4M0QZc6X4SI?embed&show_copy_link=true"
        title=""
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
<p></p>

## Examples

#### 1. Customer Support Agent

**Traditional Approach:** Build a help center with FAQ pages, a ticket form, and a chatbot that matches keywords to canned responses.

**GenUI Approach:**

- **Catalog Components:** TicketStatusCard, FAQArticle, EscalationForm, SatisfactionSurvey, AgentContactCard
- **Tools:** `lookupTicket(ticketId)`, `searchKnowledgeBase(query)`, `createTicket(details)`, `getCustomerHistory(customerId)`
- **App Events:** `NewTicketUpdateEvent` (auto-respond) when a support ticket is updated in the backend, the AI proactively informs the user

A user opens the support chat. They describe their issue in natural language. The AI searches the knowledge base using the tool, finds a relevant article, and renders it as a FAQ Article component. If that does not resolve the issue, the AI creates a ticket using `createTicket`, shows the TicketStatusCard with the new ticket ID, and says it will notify them of updates. Later, when the support team updates the ticket, a `NewTicketUpdateEvent` fires, and the AI proactively shows the updated TicketStatusCard with the resolution.

The developer did not build a "ticket lookup flow" or a "knowledge base search screen." They built components and tools. The AI composed the journey.

#### 2. E-Commerce Personal Shopper

**Traditional Approach:** Build product listing pages, filters, a search bar, a comparison tool, a cart, and a checkout flow.

**GenUI Approach:**

- **Catalog Components:** ProductCard, ComparisonTable, PriceHistoryChart, ReviewSummary, CartSummary, PromoCodeBanner
- **Tools:** `searchProducts(query,filters)`, `getProductDetails(productId)`, `getReviews(productId)`, `addToCart(productId,quantity)`, `applyPromoCode(code)`, `getPriceHistory(productId)`
- **App Events:** `CartUpdatedEvent` (context injection) keeps the AI aware of what is already in the cart; `FlashSaleEvent` (auto-respond) alerts the user about time-sensitive deals

A user says, "I need a gift for my dad who likes woodworking and coffee." The AI searches products, shows a curated set of ProductCards, and when the user shows interest in a specific item, pulls up the ReviewSummary and PriceHistoryChart. The AI knows what is in the cart (via CartUpdatedEvent context) and can suggest complementary items. When a flash sale starts on a relevant product, the AI proactively shows the PromoCodeBanner.

No search results page. No filter sidebar. No "compare" button. The AI built a personalized shopping experience from the components and tools available to it.

## Current Limitations

Here are some important limitations and considerations to keep in mind:

- The only supported backend today is **Firebase AI Logic**.
- App event listeners currently work only with **LOCAL** app events.
- Catalog components cannot expose action parameters.
- Avatar images must be valid network URLs (local asset paths are not supported).
- Each rendered surface supports only a single catalog component as its root.

## Best Practices

#### Describe Everything

The AI reads your component and parameter descriptions to decide what to render and what values to provide. The quality of your descriptions directly impacts the quality of the AI's responses.

- Name components clearly: `ProductCard` not `Card1`
- Name parameters descriptively: `estimatedDeliveryDate` not `date`
- Add descriptions to parameters: "The product's price in USD" not just "price"
- Add descriptions to action blocks: "Searches the product catalog and returns matching items with prices and availability" not just "search"

The AI is only as smart as the vocabulary you give it.

#### Design for Composition

Components and tools work best when they are designed to be composed:

- **Retrieval Tool + Display Component:** `getOrderDetails()` returns an `OrderStruct` -> `OrderStatusCard` accepts an `OrderStruct` as a parameter. The AI calls the tool and passes the result to the component.
- **Granular Over Monolithic:** A `ProductCard`, `ReviewSummary`, and `PriceChart` give the AI three options. A single `ProductDetailPage` component gives the AI one.
- **Consistent Data Types:** Use the same DataStruct across related tools and components. If `searchProducts` returns `ProductStruct`, make `ProductCard` accept `ProductStruct`.

#### Use Events for Temporal Awareness

App events give the AI a sense of time and change. Without them, the AI only knows what the user tells it. With them, the AI knows what is happening.

- Use **auto_respond: false** for continuous state awareness, such as user navigation, preference changes, background data updates.
- Use **auto_respond: true** for time-sensitive signals, such as alerts, completions, threshold breaches, incoming messages.

#### Write System Prompts Like Onboarding Documents

The system prompt is the AI's job description. Write it like you are onboarding a new team member:

- What is their role?
- What domain should they know about?
- What should they prioritize?
- What should they never do?
- What tone should they use?
- What business rules must they follow?

A great system prompt makes the difference between a useful assistant and a generic chatbot.


## Behind the Scenes

GenUI is powered by [**Firebase AI Logic**](https://firebase.google.com/products/firebase-ai-logic) (Google Gemini) as its LLM backend. At a high level, the system works as:

**Your configuration → code generation → runtime widget powered by Firebase AI Logic and the [GenUI](https://pub.dev/packages/genui) package**.

You define components, tools, and events in FlutterFlow, and GenUI automatically generates the necessary code and runtime behavior to render dynamic UI experiences.

## FAQS

<details>
<summary>
The widget builds but the AI only sends text
</summary>

<p>
Check the catalog first. If no component fits the request, text is the expected fallback. Also, confirm that your system prompt and component descriptions make it clear when each component should be used.
</p> 
</details>

<details>
<summary>
I can't add a component to the catalog
</summary>

<p>
The most common causes are:

- The component has an action parameter.
- A required complex parameter is missing a default value.
- The component was deleted or renamed after being configured.
</p> 
</details>

<details>
<summary>
I can't add an Action Block as a tool
</summary>

<p>
The Action Block must return a value, and every parameter, plus the return type, must be supported by the tool serializer.
</p> 
</details>

<details>
<summary>
My event listener is not firing
</summary>

<p>
Make sure the following are correctly set:

- The event is LOCAL scope.
- The right event is being triggered at runtime.
- `auto_respond` is set the way you expect.
</p> 
</details>

<details>
<summary>
Why does a component fail validation?
</summary>

<p>
Common reasons include:

- It has an action parameter.
- It is configured twice in the same catalog.
- A required complex parameter is missing a default value.
- The configured component no longer exists.
</p> 
</details>

<details>
<summary>
Why is the model choosing the wrong component?
</summary>

<p>
Usually one of these is true:

- The names are too generic.
- Parameter descriptions are weak.
- Multiple catalog components overlap too much in purpose.
- The system prompt does not explain how the assistant should prioritize them.
</p> 
</details>

<details>
<summary>
Can the model render multiple items?
</summary>

<p>
Yes, but the reliable pattern is to use a single catalog component that accepts a list rather than expecting the model to assemble multiple independent sibling components on its own.
</p> 
</details>

<details>
<summary>
Why is the model not calling a tool?
</summary>

<p>
Usually, the issue is not codegen. It is tool discoverability:

- The name is vague
- The description is weak
- The system prompt does not make it clear when the tool should be used
- The model already has enough context to answer without calling it
</p> 
</details>

<details>
<summary>
What happens when a tool fails?
</summary>

<p>
The generated tool code catches the exception, clears the loading state, and sends an error payload back to the model. The UI should remain stable, and the model can decide how to explain or recover.
</p> 
</details>

<details>
<summary>
Why can't I select my event?
</summary>

<p>
The event must be <strong>LOCAL</strong> scope and must still exist in the project or dependency where it was defined.
</p> 
</details>

<details>
<summary>
Why didn't the assistant respond immediately?
</summary>

<p>
Check the following:

- whether `auto_respond` is actually `true`
- whether the event is being triggered
- whether the system prompt tells the model to react visibly

Note: Even with immediate inference, not every event will result in a visible response.
</p> 
</details>

<details>
<summary>
Why does the assistant only react on the next user message?
</summary>

<p>
That is the expected behavior for `auto_respond: false`. The listener queues hidden context instead of triggering a separate inference call.
</p> 
</details>

<details>
<summary>
Can one GenUI widget listen to the same event twice?
</summary>

<p>
No. Duplicate listeners for the same event on the same widget are rejected during validation.
</p> 
</details>

<details>
<summary>
Do conversations persist across app restarts?
</summary>

<p>
No. Conversations do not persist across app restarts. If a user closes and reopens the app, the chat history is reset.
</p> 
</details>

<details>
<summary>
Can I choose the Gemini model or adjust parameters like temperature?
</summary>

<p>
GenUI uses Firebase AI Logic, which manages the underlying Gemini model and its configuration. At the moment, you cannot directly select specific model variants or adjust parameters like temperature or top_p. The system is designed to provide a simplified, managed experience without requiring manual tuning.
</p> 
</details>

<details>
<summary>
What happens when Firebase AI Logic quota or rate limits are exceeded?
</summary>

<p>
If you exceed Firebase AI Logic or Gemini free-tier limits, requests will fail with a 429 quota-exceeded error. This typically means you’ve hit limits such as requests per minute or free-tier usage caps. In some cases, the error will include a retry time, after which you can try again. While the Spark plan works for testing, it is subject to strict free-tier limits, so for higher usage or production apps, you should expect to upgrade to a paid plan and monitor usage closely
</p> 
</details>
