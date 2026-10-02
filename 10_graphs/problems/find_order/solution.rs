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
mod find_order_tests {
    use super::*;

    #[test]
    fn test_find_order() {
            let order = find_order(4, &[[1,0],[2,0],[3,1],[3,2]]);
            assert_eq!(order.len(), 4);
        }
}
