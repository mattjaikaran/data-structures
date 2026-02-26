//! GREEDY  ·  Rust
//! Locally optimal choice at each step.

pub fn meeting_rooms(mut intervals: Vec<[i32;2]>) -> bool {
    intervals.sort_by_key(|i| i[0]);
    for i in 1..intervals.len() { if intervals[i][0] < intervals[i-1][1] { return false; } }
    true
}

pub fn meeting_rooms_ii(mut intervals: Vec<[i32;2]>) -> usize {
    intervals.sort_by_key(|i| i[0]);
    let mut heap: Vec<i32> = vec![];
    for [start, end] in intervals {
        if let Some(pos) = heap.iter().position(|&e| e <= start) { heap[pos] = end; }
        else { heap.push(end); }
        heap.sort();
    }
    heap.len()
}

pub fn erase_overlap_intervals(mut intervals: Vec<[i32;2]>) -> usize {
    intervals.sort_by_key(|i| i[1]);
    let mut keep = 0; let mut last_end = i32::MIN;
    for [start, end] in intervals.iter().copied() {
        if start >= last_end { keep += 1; last_end = end; }
    }
    intervals.len() - keep
}

pub fn min_arrows(mut points: Vec<[i32;2]>) -> usize {
    points.sort_by_key(|p| p[1]);
    let mut arrows = 0; let mut pos = i32::MIN;
    for [start, end] in points {
        if start > pos { arrows += 1; pos = end; }
    }
    arrows
}

pub fn partition_labels(s: &str) -> Vec<usize> {
    let mut last = [0usize; 26];
    for (i, c) in s.chars().enumerate() { last[c as usize - 'a' as usize] = i; }
    let mut result = vec![]; let mut start = 0; let mut end = 0;
    for (i, c) in s.chars().enumerate() {
        end = end.max(last[c as usize - 'a' as usize]);
        if i == end { result.push(end - start + 1); start = i + 1; }
    }
    result
}

pub fn can_complete_circuit(gas: &[i32], cost: &[i32]) -> i32 {
    if gas.iter().sum::<i32>() < cost.iter().sum::<i32>() { return -1; }
    let mut tank = 0; let mut start = 0;
    for i in 0..gas.len() {
        tank += gas[i] - cost[i];
        if tank < 0 { start = i + 1; tank = 0; }
    }
    start as i32
}

pub fn candy(ratings: &[i32]) -> i32 {
    let n = ratings.len();
    let mut c = vec![1i32; n];
    for i in 1..n { if ratings[i] > ratings[i-1] { c[i] = c[i-1]+1; } }
    for i in (0..n-1).rev() { if ratings[i] > ratings[i+1] { c[i] = c[i].max(c[i+1]+1); } }
    c.iter().sum()
}

pub fn assign_cookies(mut greed: Vec<i32>, mut sizes: Vec<i32>) -> usize {
    greed.sort(); sizes.sort();
    let (mut child, mut cookie) = (0, 0);
    while child < greed.len() && cookie < sizes.len() {
        if sizes[cookie] >= greed[child] { child += 1; }
        cookie += 1;
    }
    child
}

pub fn boats_to_save_people(mut people: Vec<i32>, limit: i32) -> usize {
    people.sort();
    let (mut l, mut r, mut boats) = (0, people.len() - 1, 0);
    while l <= r {
        if people[l] + people[r] <= limit { l += 1; }
        if r == 0 { boats += 1; break; }
        r -= 1; boats += 1;
    }
    boats
}

pub fn find_min_cost_sticks(sticks: Vec<i32>) -> i32 {
    use std::collections::BinaryHeap;
    use std::cmp::Reverse;
    let mut h: BinaryHeap<Reverse<i32>> = sticks.into_iter().map(Reverse).collect();
    let mut cost = 0;
    while h.len() > 1 {
        let a = h.pop().unwrap().0; let b = h.pop().unwrap().0;
        cost += a + b; h.push(Reverse(a + b));
    }
    cost
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_meeting_rooms() {
        assert!(!meeting_rooms(vec![[0,30],[5,10],[15,20]]));
        assert!(meeting_rooms(vec![[7,10],[2,4]]));
    }
    #[test]
    fn test_meeting_rooms_ii() {
        assert_eq!(meeting_rooms_ii(vec![[0,30],[5,10],[15,20]]), 2);
        assert_eq!(meeting_rooms_ii(vec![[7,10],[2,4]]), 1);
    }
    #[test]
    fn test_erase_overlap() {
        assert_eq!(erase_overlap_intervals(vec![[1,2],[2,3],[3,4],[1,3]]), 1);
    }
    #[test]
    fn test_min_arrows() {
        assert_eq!(min_arrows(vec![[10,16],[2,8],[1,6],[7,12]]), 2);
    }
    #[test]
    fn test_partition_labels() {
        assert_eq!(partition_labels("ababcbacadefegdehijhklij"), vec![9,7,8]);
    }
    #[test]
    fn test_gas_station() {
        assert_eq!(can_complete_circuit(&[1,2,3,4,5],&[3,4,5,1,2]), 3);
        assert_eq!(can_complete_circuit(&[2,3,4],&[3,4,3]), -1);
    }
    #[test]
    fn test_candy() {
        assert_eq!(candy(&[1,0,2]), 5);
        assert_eq!(candy(&[1,2,2]), 4);
    }
    #[test]
    fn test_assign_cookies() {
        assert_eq!(assign_cookies(vec![1,2,3], vec![1,1]), 1);
    }
    #[test]
    fn test_find_min_cost_sticks() {
        assert_eq!(find_min_cost_sticks(vec![2,4,3]), 14);
    }
}
