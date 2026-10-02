/**
 * 🟡 Course Schedule (LC #207) — cycle detection
 * @param {number} n
 * @param {number[][]} prereqs
 * @returns {boolean}
 */
export function canFinish(n, prereqs) {
  const adj = Array.from({ length: n }, () => []);
  prereqs.forEach(([a, b]) => adj[b].push(a));
  const state = new Array(n).fill(0);
  const dfs = (u) => {
    if (state[u] === 1) return false;
    if (state[u] === 2) return true;
    state[u] = 1;
    for (const v of adj[u]) if (!dfs(v)) return false;
    state[u] = 2;
    return true;
  };
  return Array.from({ length: n }, (_, i) => i).every(dfs);
}
