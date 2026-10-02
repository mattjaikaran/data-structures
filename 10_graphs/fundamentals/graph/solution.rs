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
        for edges in self.adj.values() { for &(v, _) in edges { *indegree.entry(v).or_insert(0) += 1; } }
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

#[cfg(test)]
mod graph_tests {
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
}
