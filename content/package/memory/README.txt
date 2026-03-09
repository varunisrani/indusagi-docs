# Memory Module Overview

The Memory module provides intelligent context management with semantic understanding, persistent storage, and multiple memory processors for indusagi agents.

Primary entrypoint: `indusagi/memory`.

## Directory Map

- `indusagi/src/memory/index.ts` - Public exports and main API
- `indusagi/src/memory/memory.ts` - Main Memory orchestrator class
- `indusagi/src/memory/storage/base.ts` - MemoryStorage interface
- `indusagi/src/memory/storage/inmemory.ts` - InMemoryStorage implementation
- `indusagi/src/memory/vector/base.ts` - VectorStore interface
- `indusagi/src/memory/vector/inmemory.ts` - InMemoryVectorStore implementation
- `indusagi/src/memory/embedder/base.ts` - Embedder interface
- `indusagi/src/memory/embedder/openai.ts` - OpenAI embeddings
- `indusagi/src/memory/processors/` - Memory processors (Working, Semantic, History, Observational)
- `indusagi/src/memory/types.ts` - Protocol definitions

## Conceptual Flow

1. Create a Memory instance with desired processors
2. Configure storage, vector store, and embedder
3. Create threads for user conversations
4. Add messages to memory as conversations happen
5. Retrieve context using processors (working memory, semantic search, history)
6. Update working memory with important context
7. Search semantically through past conversations

## What This Module Does

- Stores conversation messages persistently
- Provides semantic search through embeddings
- Maintains working memory (short-term context)
- Tracks message history for conversation context
- Extracts and compresses observations
- Integrates with OpenAI embeddings
- Supports custom storage and embedder implementations

## Core Features

- **Memory Orchestrator** - Central class managing all processors
- **Working Memory** - Short-term context storage
- **Semantic Recall** - Vector-based semantic search
- **Message History** - Conversation history management
- **Observational Memory** - Advanced observation extraction
- **Multiple Processors** - Combine different memory strategies
- **Flexible Storage** - Pluggable storage backends
- **Vector Search** - In-memory or custom vector stores
- **Embeddings** - OpenAI or custom embedders

## Memory Processors

- **WorkingMemory** - Stores scoped context (global or per-resource)
- **SemanticRecall** - Searches semantically similar past messages
- **MessageHistory** - Retrieves last N messages in conversation
- **ObservationalMemory** - Extracts and compresses key observations

## Documentation

For detailed information, see:

- `indusagi/docs/memory/developer-guide.md` - Complete API and usage guide
- `indusagi/docs/mcp/integration.md` - Integration with MCP and Agents
- `indusagi/docs/getting-started.md` - Quick start guide

## Quick Example

```typescript
import { Memory, InMemoryStorage, InMemoryVectorStore, createOpenAIEmbedder } from "indusagi/memory";

const memory = new Memory({
  storage: new InMemoryStorage(),
  vector: new InMemoryVectorStore(),
  embedder: createOpenAIEmbedder({
    apiKey: process.env.OPENAI_API_KEY,
  }),
  options: {
    semanticRecall: { enabled: true, topK: 5 },
    workingMemory: { enabled: true, scope: "resource" },
    lastMessages: 10,
  },
});

// Add a message
await memory.addMessage({
  threadId: "user-123",
  role: "user",
  content: "I prefer TypeScript and functional programming",
  type: "text",
});

// Get context for new message
const context = await memory.getContext({ threadId: "user-123" });
```
