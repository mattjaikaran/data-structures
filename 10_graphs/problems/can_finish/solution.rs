pub fn can_finish(n: usize, prereqs: &[[usize; 2]]) -> bool {
    let mut adj = vec![vec![]; n]; for p in prereqs { adj[p[1]].push(p[0]); }
    let mut state = vec![0u8; n];
    fn dfs(u: usize, adj: &Vec<Vec<usize>>, state: &mut Vec<u8>) -> bool {
        if state[u]==1 { return false; }
        if state[u]==2 { return true; }
        state[u]=1; for &v in &adj[u] { if !dfs(v,adj,state) { return false; } } state[u]=2; true
    }
    (0..n).all(|i| dfs(i, &adj, &mut state))
}

#[cfg(test)]
mod can_finish_tests {
    use super::*;

    #[test]
    fn test_can_finish() {
            assert!(can_finish(2, &[[1,0]]));
            assert!(!can_finish(2, &[[1,0],[0,1]]));
        }
}
