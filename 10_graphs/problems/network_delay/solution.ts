export function networkDelay(times: number[][], n: number, k: number): number {
  const adj: [number,number][][] = Array.from({length: n+1}, () => []);
  times.forEach(([u,v,w]) => adj[u].push([v,w]));
  const dist = new Array(n+1).fill(Infinity); dist[k] = 0;
  const pq: [number,number][] = [[0,k]];
  while (pq.length) {
    pq.sort((a,b) => a[0]-b[0]);
    const [d,u] = pq.shift()!;
    if (d > dist[u]) continue;
    for (const [v,w] of adj[u]) { if (d+w < dist[v]) { dist[v]=d+w; pq.push([d+w,v]); } }
  }
  const max = Math.max(...dist.slice(1));
  return max === Infinity ? -1 : max;
}
