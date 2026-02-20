# TUI Module

The TUI module provides a minimal terminal UI toolkit with differential rendering, input parsing, and terminal image support.

Entry point: `indusagi/tui`.

## Directory Map

- `indusagi/src/tui/tui.ts` implements the renderer and overlay stack.
- `indusagi/src/tui/terminal.ts` defines the `Terminal` interface and `ProcessTerminal`.
- `indusagi/src/tui/keys.ts` and `keybindings.ts` parse input and map actions.
- `indusagi/src/tui/stdin-buffer.ts` buffers escape sequences.
- `indusagi/src/tui/terminal-image.ts` handles Kitty and iTerm2 images.
- `indusagi/src/tui/components/*` provides renderable components.

## Core Concepts

- `Component` defines `render(width)` and optional `handleInput`.
- `Focusable` components emit `CURSOR_MARKER` when focused.
- `TUI` composites base content plus overlays and only redraws changed lines.

## Next Docs

- `indusagi/docs/tui/architecture.md`
- `indusagi/docs/tui/components.md`
- `indusagi/docs/tui/input-and-keys.md`
- `indusagi/docs/tui/images.md`
