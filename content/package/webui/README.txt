# Web UI Module

The Web UI module provides Lit-based custom elements for chat interfaces, tool rendering, and artifacts.
It lives under `indusagi/src/webui` and is exported from `indusagi/webui`.

## Main Entry Points

- `ChatPanel` (`pi-chat-panel`)
- `AgentInterface` (`agent-interface`)

## ChatPanel

File: `webui/ChatPanel.ts`

`ChatPanel` wires up the `AgentInterface` and `ArtifactsPanel` and handles mobile vs desktop layout.
Call `setAgent(agent, config)` to initialize the UI and optionally provide:

- `onApiKeyRequired(provider)`
- `onBeforeSend()`
- `onCostClick()`
- `sandboxUrlProvider()`
- `toolsFactory(agent, agentInterface, artifactsPanel, runtimeProvidersFactory)`

It registers the artifacts tool renderer and sets agent tools automatically.

## AgentInterface

File: `webui/components/AgentInterface.ts`

Key features:

- Displays messages, streaming content, and tool calls.
- Supports attachments, model selector, and thinking selector.
- Integrates with proxy settings for browser environments.
- Hooks for API key prompts, before-send callbacks, and tool call gating.

Public methods:

- `setInput(text, attachments)`
- `setAutoScroll(enabled)`

## Message Types

File: `webui/components/Messages.ts`

- `UserMessage` and `AssistantMessage` render core LLM messages.
- `UserMessageWithAttachments` extends user messages with attachments.
- `ArtifactMessage` is used for persistent artifact history.

Custom messages can be registered via declaration merging on `CustomAgentMessages`.

## Streaming

`StreamingMessageContainer` shows the current streaming assistant message while the agent is running.
It is updated via `AgentEvent` subscriptions in `AgentInterface`.

## Message Rendering

File: `webui/components/message-renderer-registry.ts`

You can register custom renderers per message role using:

- `registerMessageRenderer(role, renderer)`
- `renderMessage(message)`

## Next Docs

- `indusagi/docs/webui/components.md`
- `indusagi/docs/webui/tools-and-artifacts.md`
- `indusagi/docs/webui/sandbox.md`
- `indusagi/docs/webui/storage-and-settings.md`
- `indusagi/docs/webui/dialogs.md`
- `indusagi/docs/webui/i18n-and-formatting.md`
- `indusagi/docs/webui/styles.md`
