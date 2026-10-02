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

#[cfg(test)]
mod network_delay_tests {
    use super::*;

    #[test]
    fn test_network_delay() {
            assert_eq!(network_delay(&[[2,1,1],[2,3,1],[3,4,1]], 4, 2), 2);
        }
}
