---
slug: /concepts/tools
title: Tools Configuration
description: Expose Action Blocks to GenUI so the model can fetch data, run workflows, and use real results in its responses.
tags: [AI, Chat, Actions]
sidebar_position: 3
keywords: [FlutterFlow, Actions, Actions Block, GenUI, Conversational AI, Chat widget, AI agent, A2UI protocol, Component rendering, Tool calling]
---

# Tools Configuration

In GenUI, **Tools** are Action Blocks that the model can call during a conversation. A tool is appropriate when the model needs fresh data or needs to perform work before it can answer.

Common uses:

- Query APIs or databases
- Run calculations
- Fetch records by ID
- Transform structured data
- Trigger a workflow that still returns a useful result

:::warning

If the Action Block does not return anything, it cannot be used as a GenUI tool.

:::

For each tool, GenUI includes:

- Function name
- Description
- Parameters
- Required or optional status
- Parameter descriptions
- Return type
- Return description

That means the Action Block name and description matter. They are part of the tool-selection signal the model sees.

## Tool Requirements

#### The Action Block must return a value

Tools are designed around request/response semantics. No return value means nothing meaningful can be sent back to the model.

#### Parameter and return types must be supported

Supported tool types include:

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
- list forms of the same supported types

Unsupported types are rejected during validation.

#### Duplicate tools are not allowed on the same widget

Configuring the same Action Block twice on one GenUI widget is treated as an error.

## Loading Messages

Each tool can define its own loading message in the widget configuration.

- If set, that message is shown while the tool runs.
- If omitted, the generated tool uses `Processing...`.

This is separate from the widget-level thinking message, which defaults to `Thinking...` and is shown before the tool call starts.

## Serialization Rules

The generated code serializes common FlutterFlow data types into model-friendly JSON:

- `Color` -> CSS color string
- `DateTime` -> ISO 8601 string
- `TimestampRange` -> `start|end` milliseconds string
- `LatLng` -> serialized string form
- `GooglePlace` -> serialized place payload
- `DataStruct` -> `toMap()`
- `Enum` -> serialized enum string

List return values are serialized item-by-item using the same rules.

## Best Practices

#### Keep tools focused

Prefer small, specific tools:

- `getOrderDetails`
- `searchProducts`
- `getWeatherForLocation`
- `calculateQuote`

over broad tools like:

- `handleRequest`
- `fetchData`
- `processWorkflow`

#### Write descriptions for model behavior, not just for humans

Good:

`Retrieves the current order status, tracking number, and ETA for a given order ID.`

Weak:

`Looks up an order.`

#### Return structured data when possible

If the output can be represented as Custom Data Type `DataStruct`, do that instead of flattening everything into strings. Structured output is easier for the model to feed into catalog components.

#### Match tool output to catalog input

Reliable GenUI setups usually follow this shape:

- A tool returns `OrderStruct`
- A catalog component accepts `OrderStruct`

That gives the model a clean path from retrieval to rendering.

## Common Examples

#### Data lookup

`getOrderDetails(orderId: String) -> OrderStruct`

The model calls the tool, gets a structured order result, and renders an order summary component.

#### Search

`searchProducts(query: String, maxPrice: double?) -> List<ProductStruct>`

The model calls the tool and then renders a list-style catalog component using the returned products.

#### Calculation

`calculateMonthlyPayment(amount: double, rate: double, termMonths: int) -> PaymentQuoteStruct`

The model uses the result to explain the output and optionally render a quote component.