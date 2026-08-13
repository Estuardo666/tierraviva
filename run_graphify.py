import json
from pathlib import Path

from graphify.analyze import god_nodes, surprising_connections
from graphify.build import build_from_json
from graphify.cluster import cluster, score_all
from graphify.export import to_json
from graphify.report import generate
from graphify.tree_html import write_tree_html

ROOT = Path(__file__).parent
OUT = ROOT / "graphify-out"

ast = json.loads((OUT / ".graphify_ast.json").read_text(encoding="utf-8"))
semantic = json.loads((OUT / ".graphify_chunk_01.json").read_text(encoding="utf-8"))
merged = {
    "nodes": ast.get("nodes", []) + semantic.get("nodes", []),
    "edges": ast.get("edges", []) + semantic.get("edges", []),
    "hyperedges": semantic.get("hyperedges", []),
    "input_tokens": ast.get("input_tokens", 0) + semantic.get("input_tokens", 0),
    "output_tokens": ast.get("output_tokens", 0) + semantic.get("output_tokens", 0),
}
(OUT / ".graphify_extract.json").write_text(json.dumps(merged, indent=2), encoding="utf-8")

graph = build_from_json(merged, root=ROOT)
communities = cluster(graph)
cohesion = score_all(graph, communities)
labels = {cid: f"Community {cid + 1}" for cid in communities}
gods = god_nodes(graph)
surprises = surprising_connections(graph, communities)
detection = json.loads((OUT / ".graphify_detect.json").read_text(encoding="utf-8"))
tokens = {"input": merged["input_tokens"], "output": merged["output_tokens"]}
questions = [
    {"question": "How does the Astro frontend communicate with WordPress through WPGraphQL?", "why": "This crosses the frontend configuration and GraphQL client communities."},
    {"question": "Which frontend files define the site's presentation and build configuration?", "why": "This connects the entry page, styles, and Astro build setup."},
]
report = generate(graph, communities, cohesion, labels, gods, surprises, detection, tokens, str(ROOT), questions)
(OUT / "GRAPH_REPORT.md").write_text(report, encoding="utf-8")
to_json(graph, communities, str(OUT / "graph.json"), force=True, community_labels=labels)
write_tree_html(OUT / "graph.json", OUT / "graph.html", project_label="Tierra Viva frontend", top_k_edges=200)
print(f"Graph: {graph.number_of_nodes()} nodes, {graph.number_of_edges()} edges, {len(communities)} communities")
print(f"Outputs: {OUT / 'graph.html'}, {OUT / 'graph.json'}, {OUT / 'GRAPH_REPORT.md'}")
