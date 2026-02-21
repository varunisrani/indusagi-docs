# indusagi Documentation

This folder documents the `indusagi` package located at `indusagi/`. It is an all-in-one bundle that re-exports AI providers, agent loop, and TUI widgets.

If you want a quick start, read the [Getting Started](/docs/getting-started) guide.

## Documentation Map

- [Getting Started](/docs/getting-started)
- [Package Exports](/docs/package-exports)

### AI

- [AI Module Overview](/docs/ai/README)
- [AI API Reference](/docs/ai/api-reference)
- [Streaming Model](/docs/ai/streaming)
- [Models and Registry](/docs/ai/models)
- [AI Providers](/docs/ai/providers)
- [OAuth Providers](/docs/ai/oauth)
- [AI Utilities](/docs/ai/utils)

### Agent

- [Agent Module Overview](/docs/agent/README)
- [Agent API Reference](/docs/agent/api-reference)
- [Agent Loop and Tools](/docs/agent/loop-and-tools)

### TUI

- [TUI Overview](/docs/tui/README)
- [TUI Architecture](/docs/tui/architecture)
- [TUI Components](/docs/tui/components)
- [Input and Keys](/docs/tui/input-and-keys)
- [Images in TUI](/docs/tui/images)

## Notes

- The package is ESM only and targets Node 20 or newer.
- `package.json` declares an export `indusagi/coding-agent`, but there is no `src/coding-agent.ts` in this repo. If you need that entrypoint, ensure its source is added or it is generated during build.
