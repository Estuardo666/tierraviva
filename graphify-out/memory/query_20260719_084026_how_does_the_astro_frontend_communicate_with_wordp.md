---
type: "query"
date: "2026-07-19T08:40:26.933379+00:00"
question: "How does the Astro frontend communicate with WordPress through WPGraphQL?"
contributor: "graphify"
source_nodes: ["wpGraphQL", "wpgraphql.ts", "index.astro", "graphql", "graphql-request"]
---

# Q: How does the Astro frontend communicate with WordPress through WPGraphQL?

## Answer

Astro imports the global stylesheet in src/pages/index.astro. The GraphQL client lives in src/lib/wpgraphql.ts: wpGraphQL() posts JSON queries to WORDPRESS_GRAPHQL_URL, defaulting to the local WordPress /graphql endpoint, and returns the data payload or raises GraphQL errors. The package manifest includes astro, graphql and graphql-request, while astro.config.mjs configures the Vite frontend. WordPress loads WPGraphQL through the Tierra Viva headless bootstrap mu-plugin.

## Source Nodes

- wpGraphQL
- wpgraphql.ts
- index.astro
- graphql
- graphql-request