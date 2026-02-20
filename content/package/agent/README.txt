# Agent Module

The agent module provides a turn-based loop that streams assistant messages, executes tool calls, and emits structured events.
It builds on the AI module and keeps all context in `AgentMessage` format.

Entry point: `indusagi/agent`.

## Directory Map

- `indusagi/src/agent/agent.ts` implements the `Agent` class.
- `indusagi/src/agent/agent-loop.ts` contains the core loop.
- `indusagi/src/agent/proxy.ts` provides a proxy stream function.
- `indusagi/src/agent/types.ts` defines types and events.

## Highlights

- Manages state, tool calls, and streaming in one place.
- Supports steering and follow-up messages while the agent is running.
- Emits `AgentEvent` for UI updates.
- Accepts custom `streamFn` implementations (proxy or server-side).

## Default Model

The default model is `getModel("google", "gemini-2.5-flash-lite-preview-06-17")`.

## Next Docs

- `indusagi/docs/agent/api-reference.md`
- `indusagi/docs/agent/loop-and-tools.md`
- `indusagi/docs/agent/tools-reference.md`
