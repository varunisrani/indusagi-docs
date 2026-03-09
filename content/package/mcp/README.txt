# MCP (Model Context Protocol) Module Overview

The MCP module provides Model Context Protocol support for indusagi, enabling applications to connect with external tools, APIs, and services through a standardized interface.

Primary entrypoint: `indusagi/mcp`.

## Directory Map

- `indusagi/src/mcp/index.ts` - Public exports and main API
- `indusagi/src/mcp/client.ts` - MCPClient for single server connections
- `indusagi/src/mcp/client-pool.ts` - MCPClientPool for managing multiple servers
- `indusagi/src/mcp/server.ts` - MCPServer for creating custom MCP servers
- `indusagi/src/mcp/tool-factory.ts` - Convert MCP tools to AgentTools
- `indusagi/src/mcp/config.ts` - Configuration management
- `indusagi/src/mcp/schema-converter.ts` - JSON Schema ↔ TypeBox conversion
- `indusagi/src/mcp/types.ts` - Protocol definitions
- `indusagi/src/mcp/errors.ts` - Error handling

## Conceptual Flow

1. Configure MCP servers in `~/.indusagi/mcp-servers.json` or project `.mcp.json`
2. Create an MCPClientPool with server configurations
3. Connect to all servers with `pool.connectAll()`
4. List available tools from each server
5. Convert MCP tools to AgentTools for agent use
6. Execute tools via the client interface
7. Disconnect gracefully on shutdown

## What This Module Does

- Manages connections to multiple MCP servers
- Converts MCP protocol to standardized tool definitions
- Provides error handling and recovery
- Supports custom MCP server creation
- Integrates with agent tool systems
- Handles JSON Schema validation and conversion
- Enables resource and prompt access via MCP

## Core Features

- **MCPClient** - Connect to individual MCP servers
- **MCPClientPool** - Manage multiple server connections
- **MCPServer** - Build custom MCP servers
- **ToolFactory** - Convert MCP tools to agent tools
- **Config Management** - Load/save server configurations
- **Schema Conversion** - JSON Schema to TypeBox conversion
- **Error Handling** - Comprehensive error codes and recovery

## Documentation

For detailed information, see:

- `indusagi/docs/mcp/developer-guide.md` - Complete API and usage guide
- `indusagi/docs/mcp/integration.md` - Integration with Memory and Agents
- `indusagi/docs/getting-started.md` - Quick start guide

## Quick Example

```typescript
import { initializeMCP } from "indusagi/mcp";
import { ToolRegistry } from "indusagi/agent";

const registry = new ToolRegistry();
const { pool, toolCount } = await initializeMCP(registry, process.cwd());

console.log(`Connected to ${pool.getAllClients().length} servers with ${toolCount} tools`);
```
