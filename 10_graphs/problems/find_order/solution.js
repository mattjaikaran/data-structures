/**
 * 🟡 Course Schedule II (LC #210) — topological order
 * @param {number} n
 * @param {number[][]} prereqs
 * @returns {number[]}
 */
export function findOrder(n, prereqs) {
  const adj = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);
  prereqs.forEach(([a, b]) => {
    adj[b].push(a);
    indegree[a]++;
  });
  const q = Array.from({ length: n }, (_, i) => i).filter((i) => indegree[i] === 0);
  const order = [];
  while (q.length) {
    const u = q.shift();
    order.push(u);
    for (const v of adj[u]) {
      if (--indegree[v] === 0) q.push(v);
    }
  }
  return order.length === n ? order : [];
}
