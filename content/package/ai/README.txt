# AI Module Overview

The AI module provides a unified streaming interface across multiple LLM providers.
It exposes model definitions, provider adapters, message types, and utility helpers.

Primary entrypoint: `indusagi/ai`.

## Directory Map

- `indusagi/src/ai/index.ts` re-exports most public APIs.
- `indusagi/src/ai/stream.ts` provides the main streaming and completion functions.
- `indusagi/src/ai/models.ts` loads models and computes costs.
- `indusagi/src/ai/types.ts` defines message and tool types.
- `indusagi/src/ai/providers/*` contains provider adapters.
- `indusagi/src/ai/utils/*` includes parsing, validation, and overflow helpers.
- `indusagi/src/ai/cli.ts` is a small OAuth helper CLI.

## Conceptual Flow

1. Build a `Context` with a system prompt, messages, and optional tool definitions.
2. Select a `Model` from the registry or custom providers.
3. Call `stream` or `streamSimple` to get an async stream of events.
4. Consume events to render incremental text, tool calls, and final usage.
5. Optionally call `complete` or `completeSimple` to await the final assistant message.

The same `Context` and `Message` structure is used across all providers.
Provider adapters handle conversion to each vendor API format.

## What This Module Does

- Normalizes message formats across providers.
- Handles tool calls and tool results.
- Supports text and image inputs where allowed.
- Emits a unified stream of incremental events.
- Calculates token usage cost per model.
- Supports reasoning or thinking controls when the provider allows it.

For API details, see:

- `indusagi/docs/ai/api-reference.md`
- `indusagi/docs/ai/streaming.md`
- `indusagi/docs/ai/models.md`
- `indusagi/docs/ai/providers.md`
- `indusagi/docs/ai/utils.md`
