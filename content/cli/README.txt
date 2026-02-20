# Indusagi Coding Agent

A terminal-first coding agent with a small core and strong extensibility. Use it interactively, in scripts (print/JSON), over RPC, or as an SDK in your own apps.

## Install

```bash
npm install -g indusagi-coding-agent
```

## Quick Start

```bash
indusagi
```

Authenticate using `/login` or set provider API keys.

## Modes

| Mode | Description | Docs |
|------|-------------|------|
| Interactive | Default mode with TUI | - |
| Print/JSON | For scripting | [json.md](json.md) |
| RPC | Process integration | [rpc.md](rpc.md) |
| SDK | Programmatic usage | [sdk.md](sdk.md) |

## Key Features

- **Multi-provider support** - Anthropic, OpenAI, Google, and more
- **Extensible** - Extensions, skills, hooks, and themes
- **Session management** - Tree-based navigation, branching, compaction
- **Tool system** - Built-in tools for files, bash, search
- **Subagents** - Spawn specialized agents for complex tasks

## Documentation Map

### Getting Started
- [Providers](providers.md) - Configure LLM providers
- [Settings](settings.md) - Global and project settings

### SDK & API
- [SDK Reference](sdk.md) - Programmatic usage
- [RPC Mode](rpc.md) - JSON-RPC integration
- [JSON Mode](json.md) - Scripting output

### Customization
- [Extensions](extensions.md) - Extend agent behavior
- [Skills](skills.md) - On-demand capability packages
- [Hooks](hooks.md) - Low-level interception
- [Subagents](subagents.md) - Spawn specialized agents
- [Prompt Templates](prompt-templates.md) - Custom prompts
- [Themes](themes.md) - UI theming
- [Packages](packages.md) - Share resources

### Session Management
- [Session Format](session.md) - File format and structure
- [Tree Navigation](tree.md) - Branch and navigate history
- [Compaction](compaction.md) - Context management

### Configuration
- [Settings](settings.md) - All configuration options
- [Custom Models](models.md) - Add custom providers
- [Custom Providers](custom-provider.md) - Proxy support
- [Keybindings](keybindings.md) - Keyboard shortcuts

### UI
- [TUI Components](tui.md) - Terminal UI
- [Terminal Setup](terminal-setup.md) - Terminal configuration

### Platform
- [Development](development.md) - Contributing
- [Shell Aliases](shell-aliases.md) - Shell integration
- [Windows](windows.md) - Windows-specific notes

## License

MIT
