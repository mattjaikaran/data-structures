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

#[cfg(test)]
mod union_find_tests {
    use super::*;

    #[test]
    fn test_union_find() {
            let mut uf = UnionFind::new(5);
            uf.union(0,1); uf.union(2,3);
            assert!(uf.connected(0,1) && !uf.connected(0,2));
            assert_eq!(uf.components, 3);
        }
}
