---
slug: /concepts/app-event-integration
title: App Event Integration
description: Feed local app events into GenUI so the conversation can react to live app state and time-sensitive signals.
tags: [AI, Chat, App Events]
sidebar_position: 4
keywords: [FlutterFlow, App Events, GenUI, Conversational AI, Chat widget, AI agent, A2UI protocol, Component rendering, Tool calling]
---

# App Events Integrations

App Event Integration lets GenUI listen to FlutterFlow **LOCAL** app events and turn them into conversation context.

This is how GenUI becomes aware of things the user did not explicitly type:

- Cart changes
- Workflow completion
- Alerts
- Navigation context
- Device or sensor updates

GenUI automatically listens for matching local events and converts them into hidden context messages for the conversation.

## Two Integration Modes

- **Context Injection**: Use `auto_respond: false` when the event should enrich future replies without interrupting the user immediately. In this mode, the event message is added to a pending queue, which is then flushed before the next user message is sent, allowing the model to use these queued messages as hidden context during the next inference.

- **Proactive Response**: Use `auto_respond: true` when the event should trigger an immediate GenUI response. In this mode, the event message is sent directly into the conversation as an InternalMessage, inference starts right away, and the model may respond with text, UI, both, or nothing visible depending on the prompt and context.

## Message Construction

Each listener has a `message_template`. GenUI resolves it in this order:

1. FlutterFlow variable binding, if configured
2. Literal input value, if configured
3. Fallback text: `App event "<eventName>" was triggered.`

If the event carries payload data, GenUI automatically appends it to the message sent to the model.

This means the message template is not string interpolation syntax like `{sensorName}`. It is either a literal string or a FlutterFlow variable-bound value, and event payload data is appended separately by the generated listener code.

## Pending Context Queue
For `auto_respond: false`, GenUI stores pending event messages in memory until the user sends the next message. The queue has a maximum size of 50, and if it overflows, the oldest messages are dropped first. Before the next user request is sent, these messages are injected directly into the conversation history as InternalMessages, allowing the model to use them as context without triggering additional model calls.

## Best Practices

#### Use context injection for ambient state

For example:

- Updated cart contents
- Current page context
- Background sync results

These make future replies smarter without causing unsolicited responses.

#### Use proactive response for time-sensitive events

For example:

- Threshold alerts
- Task completion
- Failed jobs
- Incoming high-priority updates

These are the moments where an immediate assistant response is justified.

#### Keep event data structured

If an event carries payload data, use a stable, well-designed data type. The generated message ends up calling `toMap()`, so clearer payload structure produces clearer AI context.

#### Do not flood the queue

If a background signal can fire rapidly, consider batching it before triggering the event. The queue has a hard cap of 50 messages.

## Examples

#### Cart awareness without interruption

Use a `CartUpdated` local event with `auto_respond: false`.

Each cart update quietly enriches the pending context so the next time the user asks, "What's in my cart?" the model already has the latest state.

#### Immediate alerting

Use a `TemperatureAlert` local event with `auto_respond: true`.

When the event fires, GenUI immediately triggers inference and the model can warn the user and render a supporting UI component if the catalog contains one.