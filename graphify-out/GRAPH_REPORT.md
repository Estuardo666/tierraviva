# Graph Report - C:\Users\Stuart\Documents\Terra Viva\frontend  (2026-07-19)

## Corpus Check
- Corpus is ~784 words - fits in a single context window. You may not need a graph.

## Summary
- 62 nodes · 51 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 650 input · 900 output

## Community Hubs (Navigation)
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 14

## God Nodes (most connected - your core abstractions)
1. `Documentation` - 7 edges
2. `scripts` - 5 edges
3. `Astro Starter Kit: Minimal` - 5 edges
4. `Development` - 4 edges
5. `include` - 3 edges
6. `engines` - 2 edges
7. `astro` - 2 edges
8. `graphql` - 2 edges
9. `graphql-request` - 2 edges
10. `motion` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (14 total, 4 thin omitted)

### Community 0 - "Community 1"
Cohesion: 0.22
Nodes (9): astro, graphql, graphql-request, motion, dependencies, astro, graphql, graphql-request (+1 more)

### Community 1 - "Community 2"
Cohesion: 0.25
Nodes (8): Astro components guide, Astro documentation, Content collections guide, Documentation, Framework components guide, Internationalization guide, Routing guide, Styling and Tailwind guide

### Community 2 - "Community 3"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 3 - "Community 4"
Cohesion: 0.33
Nodes (6): Astro Starter Kit: Minimal, npm install, npm run astro ..., npm run build, npm run dev, npm run preview

### Community 4 - "Community 5"
Cohesion: 0.33
Nodes (5): engines, node, name, type, version

### Community 5 - "Community 6"
Cohesion: 0.40
Nodes (5): astro dev --background, astro dev logs, astro dev status, astro dev stop, Development

### Community 6 - "Community 7"
Cohesion: 0.40
Nodes (5): devDependencies, tailwindcss, @tailwindcss/vite, tailwindcss, @tailwindcss/vite

### Community 7 - "Community 8"
Cohesion: 0.40
Nodes (5): scripts, astro, build, dev, preview

## Knowledge Gaps
- **41 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+36 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **How does the Astro frontend communicate with WordPress through WPGraphQL?**
  _This crosses the frontend configuration and GraphQL client communities._
- **Which frontend files define the site's presentation and build configuration?**
  _This connects the entry page, styles, and Astro build setup._