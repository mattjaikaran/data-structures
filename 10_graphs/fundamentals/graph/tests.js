function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { Graph } from '../../fundamentals/graph/solution.js';



const g = new Graph();
[
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
  ].forEach(([u, v]) => g.addEdge(u, v));
assert(new Set(g.bfs(0)).size === 5, "bfs visits all");
assert(g.bfs(0)[0] === 0, "bfs starts at src");
assert(new Set(g.dfs(0)).size === 5, "dfs visits all");
const wg = new Graph();
[
    [0, 1, 4],
    [0, 2, 1],
    [2, 1, 2],
    [1, 3, 1],
    [2, 3, 5],
  ].forEach(([u, v, w]) => wg.addEdge(u, v, w));
assert(wg.dijkstra(0).get(3) === 4, "dijkstra");
const dag = new Graph(true);
[
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1],
  ].forEach(([u, v]) => dag.addEdge(u, v));
assert(dag.topoSort().length === 6, "topo sort");
console.log('PASS 10_graphs/graph (js)');
