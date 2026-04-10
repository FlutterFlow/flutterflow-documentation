---
slug: /concepts/component-catalog
title: Component Catalog
description: Configure the FlutterFlow components that GenUI is allowed to render inside the chat surface.
tags: [AI, Chat, Components, Widgets]
sidebar_position: 2
keywords: [FlutterFlow, Components, GenUI, Conversational AI, Chat widget, AI agent, A2UI protocol, Component rendering, Tool calling]
---

# Component Catalog

The **Component Catalog** is the list of FlutterFlow components that GenUI can render inline in the conversation. Without a catalog, GenUI can still chat and call tools, but it has no specific UI to render.

Internally, GenUI creates documentation for each catalog component. That documentation includes:

- Component name
- Component description
- Parameter names
- Parameter types
- Required or optional status
- Parameter descriptions

The model's render decisions are only as good as the naming and descriptions you provide.

## Component Requirements

#### The component must be serializable at the API boundary

Catalog components cannot expose **action parameters**. GenUI only knows how to pass structured data into the component, not callbacks or arbitrary closures.

#### Parameters should use supported types

Supported parameter categories in the generated catalog pipeline include:

- `String`
- `int`
- `double`
- `bool`
- `Color`
- `DateTime`
- `TimestampRange`
- `LatLng`
- `GooglePlace`
- `JSON`
- `DataStruct`
- `Enum`
- media-path string types such as `ImagePath`, `VideoPath`, `AudioPath`, and `MediaPath`
- `List<T>` of supported item types

#### Required complex parameters need explicit defaults

If a catalog parameter is non-nullable and uses one of these complex types:

- `Color`
- `DateTime`
- `TimestampRange`
- `LatLng`
- `GooglePlace`
- `DataStruct`
- `JSON`

then you should either:

- set an explicit default value, or
- make the parameter optional

GenUI validation enforces this because those types do not have a safe implicit fallback in generated constructor code.

## Runtime Rules

#### One root component per surface

Each GenUI surface renders exactly one catalog component as its root. That root component can be a rich component tree internally, but the model cannot compose arbitrary parent wrappers like `Column`, `Container`, or other widgets that are not in the catalog.

#### The model can only use listed catalog components

If a component is not in the catalog, it does not exist from the model's perspective.

## Best Practices

#### Use list-friendly components

Because a surface has one root component, a component that accepts `List<T>` is often the right shape for result sets:

- `TransactionList`
- `SearchResultsGrid`
- `CartItemsSummary`

#### Prefer focused components over screen-sized composites

Good catalog components are reusable units, such as:

- `ProductCard`
- `OrderSummary`
- `InvoicePreview`
- `ReviewSummary`
- `AppointmentConfirmation`

These give the model flexible building blocks. A large page-like component is harder to reuse and usually harder for the model to choose well.

#### Use consistent `DataStruct` across tools and components

If a tool returns `ProductStruct`, prefer catalog components that also accept `ProductStruct` or `List<ProductStruct>`. That keeps tool output and rendering input aligned and makes the tool-to-UI handoff more reliable.

#### Describe parameters like you are documenting an API

Good:

- `estimatedDeliveryDate`: "Expected arrival date in ISO 8601 format."
- `inventoryStatus`: "Availability state shown to the user, such as inStock or backOrdered."

Weak:

- `date`
- `status`

#### Keep component names specific

Use clear, descriptive names that reflect the component’s purpose.

Googe:

- `OrderStatusCard`
- `SensorAlertSummary`
- `QuoteBreakdown`

Weak:

- `Card1`
- `Summary`
- `Details`

#### Avoid ambiguous overlap

If two components do roughly the same thing, the model has to guess. Either merge them, rename them more clearly, or narrow their intended use.