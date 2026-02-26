//! GRAPHS  ·  Rust
//! Adjacency list graph, BFS, DFS, Dijkstra, Union-Find, topo sort, problems.
use std::collections::{HashMap, VecDeque, BinaryHeap};
use std::cmp::Reverse;

pub struct Graph {
    pub adj: HashMap<usize, Vec<(usize, u32)>>,
    pub directed: bool,
}

impl Graph {
    pub fn new(directed: bool) -> Self { Graph { adj: HashMap::new(), directed } }

    pub fn add_edge(&mut self, u: usize, v: usize, w: u32) {
        self.adj.entry(u).or_default().push((v, w));
        self.adj.entry(v).or_default();
        if !self.directed { self.adj.entry(v).or_default().push((u, w)); }
    }

    pub fn bfs(&self, src: usize) -> Vec<usize> {
        let mut visited = std::collections::HashSet::from([src]);
        let mut order = vec![];
        let mut q = VecDeque::from([src]);
        while let Some(n) = q.pop_front() {
            order.push(n);
            for &(nb, _) in self.adj.get(&n).unwrap_or(&vec![]) {
                if visited.insert(nb) { q.push_back(nb); }
            }
        }
        order
    }

    pub fn dijkstra(&self, src: usize) -> HashMap<usize, u32> {
        let mut dist: HashMap<usize, u32> = HashMap::from([(src, 0)]);
        let mut heap = BinaryHeap::from([Reverse((0u32, src))]);
        while let Some(Reverse((d, u))) = heap.pop() {
            if d > *dist.get(&u).unwrap_or(&u32::MAX) { continue; }
            for &(v, w) in self.adj.get(&u).unwrap_or(&vec![]) {
                let nd = d + w;
                if nd < *dist.get(&v).unwrap_or(&u32::MAX) { dist.insert(v, nd); heap.push(Reverse((nd, v))); }
            }
        }
        dist
    }

    pub fn topo_sort(&self) -> Vec<usize> {
        let mut indegree: HashMap<usize, usize> = self.adj.keys().map(|&k| (k, 0)).collect();
        for (_, edges) in &self.adj { for &(v, _) in edges { *indegree.entry(v).or_insert(0) += 1; } }
        let mut q: VecDeque<usize> = indegree.iter().filter(|(_, &d)| d == 0).map(|(&u, _)| u).collect();
        let mut order = vec![];
        while let Some(u) = q.pop_front() {
            order.push(u);
            for &(v, _) in self.adj.get(&u).unwrap_or(&vec![]) {
                let d = indegree.entry(v).or_insert(0); *d -= 1; if *d == 0 { q.push_back(v); }
            }
        }
        if order.len() == self.adj.len() { order } else { vec![] }
    }
}

pub struct UnionFind { parent: Vec<usize>, rank: Vec<usize>, pub components: usize }
impl UnionFind {
    pub fn new(n: usize) -> Self { UnionFind { parent: (0..n).collect(), rank: vec![0;n], components: n } }
    pub fn find(&mut self, x: usize) -> usize {
        if self.parent[x] != x { self.parent[x] = self.find(self.parent[x]); } self.parent[x]
    }
    pub fn union(&mut self, x: usize, y: usize) -> bool {
        let (mut px, mut py) = (self.find(x), self.find(y));
        if px == py { return false; }
        if self.rank[px] < self.rank[py] { std::mem::swap(&mut px, &mut py); }
        self.parent[py] = px;
        if self.rank[px] == self.rank[py] { self.rank[px] += 1; }
        self.components -= 1; true
    }
    pub fn connected(&mut self, x: usize, y: usize) -> bool { self.find(x) == self.find(y) }
}

// ── Problems ──────────────────────────────────
pub fn num_islands(grid: &mut Vec<Vec<char>>) -> i32 {
    let (rows, cols) = (grid.len(), grid[0].len()); let mut count = 0;
    fn dfs(g: &mut Vec<Vec<char>>, r: usize, c: usize) {
        if g[r][c] != '1' { return; } g[r][c] = '0';
        if r > 0 { dfs(g, r-1, c); } if r+1 < g.len() { dfs(g, r+1, c); }
        if c > 0 { dfs(g, r, c-1); } if c+1 < g[0].len() { dfs(g, r, c+1); }
    }
    for r in 0..rows { for c in 0..cols { if grid[r][c]=='1' { dfs(grid,r,c); count+=1; } } }
    count
}

pub fn can_finish(n: usize, prereqs: &[[usize; 2]]) -> bool {
    let mut adj = vec![vec![]; n]; for p in prereqs { adj[p[1]].push(p[0]); }
    let mut state = vec![0u8; n];
    fn dfs(u: usize, adj: &Vec<Vec<usize>>, state: &mut Vec<u8>) -> bool {
        if state[u]==1 { return false; } if state[u]==2 { return true; }
        state[u]=1; for &v in &adj[u] { if !dfs(v,adj,state) { return false; } } state[u]=2; true
    }
    (0..n).all(|i| dfs(i, &adj, &mut state))
}

pub fn network_delay(times: &[[u32; 3]], n: usize, k: usize) -> i32 {
    let mut adj: Vec<Vec<(usize, u32)>> = vec![vec![]; n+1];
    for t in times { adj[t[0] as usize].push((t[1] as usize, t[2])); }
    let mut dist = vec![u32::MAX; n+1]; dist[k] = 0;
    let mut heap = BinaryHeap::from([Reverse((0u32, k))]);
    while let Some(Reverse((d, u))) = heap.pop() {
        if d > dist[u] { continue; }
        for &(v, w) in &adj[u] { if d+w < dist[v] { dist[v]=d+w; heap.push(Reverse((d+w,v))); } }
    }
    let max = dist[1..=n].iter().copied().max().unwrap_or(u32::MAX);
    if max == u32::MAX { -1 } else { max as i32 }
}

pub fn find_order(n: usize, prereqs: &[[usize; 2]]) -> Vec<usize> {
    let mut adj = vec![vec![]; n]; let mut indegree = vec![0usize; n];
    for p in prereqs { adj[p[1]].push(p[0]); indegree[p[0]] += 1; }
    let mut q: VecDeque<usize> = (0..n).filter(|&i| indegree[i]==0).collect();
    let mut order = vec![];
    while let Some(u) = q.pop_front() {
        order.push(u);
        for &v in &adj[u] { indegree[v]-=1; if indegree[v]==0 { q.push_back(v); } }
    }
    if order.len()==n { order } else { vec![] }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_bfs() {
        let mut g = Graph::new(false);
        for (u,v) in [(0,1),(0,2),(1,3),(2,4)] { g.add_edge(u,v,1); }
        assert_eq!(g.bfs(0).len(), 5);
    }
    #[test]
    fn test_dijkstra() {
        let mut g = Graph::new(false);
        for (u,v,w) in [(0,1,4),(0,2,1),(2,1,2),(1,3,1),(2,3,5)] { g.add_edge(u,v,w); }
        assert_eq!(*g.dijkstra(0).get(&3).unwrap(), 4);
    }
    #[test]
    fn test_union_find() {
        let mut uf = UnionFind::new(5);
        uf.union(0,1); uf.union(2,3);
        assert!(uf.connected(0,1) && !uf.connected(0,2));
        assert_eq!(uf.components, 3);
    }
    #[test]
    fn test_num_islands() {
        let mut grid = vec![vec!['1','1','0'],vec!['0','1','0'],vec!['0','0','1']];
        assert_eq!(num_islands(&mut grid), 2);
    }
    #[test]
    fn test_can_finish() {
        assert!(can_finish(2, &[[1,0]]));
        assert!(!can_finish(2, &[[1,0],[0,1]]));
    }
    #[test]
    fn test_network_delay() {
        assert_eq!(network_delay(&[[2,1,1],[2,3,1],[3,4,1]], 4, 2), 2);
    }
    #[test]
    fn test_find_order() {
        let order = find_order(4, &[[1,0],[2,0],[3,1],[3,2]]);
        assert_eq!(order.len(), 4);
    }
}
